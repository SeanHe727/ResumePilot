import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, extname } from 'node:path';

import type { ExtractionQuality, SourceFormat } from '../../domain.js';
import {
  columnAwareReadingOrder,
  detectColumns,
  detectDecorativeBullets,
  detectMarginContent,
  naiveReadingOrder,
  readingOrderDivergence,
  type PageGeometry,
  type PositionedLine,
} from '../layout.js';
import type { DocumentExtractor, ExtractionResult, TextBlock } from '../types.js';

/** Baselines closer together than this belong to the same visual line. */
const LINE_TOLERANCE_PT = 2.5;

let cachedFontsDir: string | undefined;

function standardFontsDir(): string {
  if (!cachedFontsDir) {
    const require = createRequire(import.meta.url);
    cachedFontsDir = `${dirname(require.resolve('pdfjs-dist/package.json'))}/standard_fonts/`;
  }
  return cachedFontsDir;
}

/**
 * PDF text extraction.
 *
 * A PDF stores glyphs and positions, not paragraphs — pdf.js hands back one
 * item per text run, often mid-word. Rebuilding lines from baselines is
 * unavoidable, and doing it by position rather than by the file's internal
 * drawing order is what lets the layout checks below mean anything.
 */
export class PdfExtractor implements DocumentExtractor {
  readonly format: SourceFormat = 'pdf';

  supports(filePath: string): boolean {
    return extname(filePath).toLowerCase() === '.pdf';
  }

  async extract(filePath: string): Promise<ExtractionResult> {
    // The default build assumes a browser; pdf.js itself asks for `legacy` in
    // Node and throws on load otherwise.
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');

    const data = new Uint8Array(await readFile(filePath));
    const doc = await pdfjs.getDocument({
      data,
      // Point pdf.js at the metrics it ships with. Without them it cannot size
      // the 14 standard PDF fonts, and font size is the signal section
      // detection leans on hardest.
      standardFontDataUrl: standardFontsDir(),
      // Never let opening a resume cause an outbound request; a PDF is free to
      // reference remote font resources.
      useWorkerFetch: false,
    }).promise;

    const lines: PositionedLine[] = [];
    const styled: Array<{ line: PositionedLine; fontSize: number; bold: boolean }> = [];
    let geometry: PageGeometry = { width: 0, height: 0 };

    for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber++) {
      const page = await doc.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1 });
      geometry = { width: viewport.width, height: viewport.height };

      const content = await page.getTextContent();
      styled.push(...mergeIntoLines(content.items, pageNumber));
    }
    lines.push(...styled.map((s) => s.line));

    // No text layer at all: the file is a scan. Nothing downstream can run, and
    // saying so is more useful than any OCR guess would be.
    if (lines.length === 0) {
      return {
        format: 'pdf',
        rawText: '',
        blocks: [],
        pageCount: doc.numPages,
        quality: 'unreadable',
        layoutWarnings: [
          'no text layer — this PDF is a scanned image, and an ATS reads nothing from it',
        ],
      };
    }

    const layoutWarnings = analyseLayout(lines, geometry);

    // Serialise in the order a human reads, so offsets line up with the text a
    // reviewer sees. Columns are read column-first when one is detected.
    const columns = detectColumns(lines, geometry);
    const ordered = columns.gutter
      ? columnAwareReadingOrder(lines, (columns.gutter.from + columns.gutter.to) / 2)
      : naiveReadingOrder(lines);

    const { rawText, blocks } = serialise(ordered, styled);

    const quality: ExtractionQuality = layoutWarnings.length > 0 ? 'degraded' : 'clean';
    return {
      format: 'pdf',
      rawText,
      blocks,
      pageCount: doc.numPages,
      quality,
      layoutWarnings,
    };
  }
}

interface PdfTextItem {
  str: string;
  transform: number[];
  width: number;
  height: number;
  fontName: string;
  hasEOL: boolean;
}

/** Groups glyph runs back into lines by shared baseline. */
function mergeIntoLines(
  items: unknown[],
  page: number,
): Array<{ line: PositionedLine; fontSize: number; bold: boolean }> {
  const out: Array<{ line: PositionedLine; fontSize: number; bold: boolean }> = [];
  let current: { line: PositionedLine; fontSize: number; bold: boolean } | null = null;

  for (const raw of items) {
    const item = raw as Partial<PdfTextItem>;
    if (typeof item.str !== 'string' || !Array.isArray(item.transform)) continue;
    if (!item.str.trim()) {
      if (item.hasEOL && current) {
        out.push(current);
        current = null;
      }
      continue;
    }

    const [, , c, d, x, y] = item.transform as number[];
    const fontSize = Math.hypot(c ?? 0, d ?? 0);
    const bold = /bold|black|heavy/i.test(item.fontName ?? '');

    if (current && Math.abs(current.line.y - (y ?? 0)) <= LINE_TOLERANCE_PT) {
      // Same baseline: append, inserting a space only where the PDF left a gap.
      const gap = (x ?? 0) - (current.line.x + current.line.width);
      current.line.text += gap > fontSize * 0.2 ? ` ${item.str}` : item.str;
      current.line.width = (x ?? 0) + (item.width ?? 0) - current.line.x;
      current.fontSize = Math.max(current.fontSize, fontSize);
      current.bold = current.bold || bold;
    } else {
      if (current) out.push(current);
      current = {
        line: { text: item.str, x: x ?? 0, y: y ?? 0, width: item.width ?? 0, page },
        fontSize,
        bold,
      };
    }

    if (item.hasEOL && current) {
      out.push(current);
      current = null;
    }
  }

  if (current) out.push(current);
  return out.filter((s) => s.line.text.trim().length > 0);
}

function analyseLayout(lines: PositionedLine[], geometry: PageGeometry): string[] {
  const warnings: string[] = [];

  const columns = detectColumns(lines, geometry);
  if (columns.multiColumn && columns.gutter) {
    const boundary = (columns.gutter.from + columns.gutter.to) / 2;
    const divergence = readingOrderDivergence(
      naiveReadingOrder(lines),
      columnAwareReadingOrder(lines, boundary),
    );
    warnings.push(
      `multi-column layout detected (${columns.leftLines} lines left, ${columns.rightLines} right); ` +
        `a parser reading straight across the page would misorder ${Math.round(divergence * 100)}% of adjacent lines`,
    );
  }

  const margin = detectMarginContent(lines, geometry);
  const contactInMargin = margin.filter((l) => /@|\+?\d[\d\s()-]{7,}|https?:\/\//.test(l.text));
  if (contactInMargin.length > 0) {
    warnings.push(
      'contact details sit in the page header or footer, which many parsers drop entirely',
    );
  }

  const decorative = detectDecorativeBullets(lines.map((l) => l.text));
  if (decorative.length > 0) {
    warnings.push(`decorative bullet glyphs (${decorative.join(' ')}) tokenize as unknown entities`);
  }

  return warnings;
}

/** Renders ordered lines to text, recording each line's offsets as it goes. */
function serialise(
  ordered: PositionedLine[],
  styled: Array<{ line: PositionedLine; fontSize: number; bold: boolean }>,
): { rawText: string; blocks: TextBlock[] } {
  const styleOf = new Map(styled.map((s) => [s.line, s]));
  const blocks: TextBlock[] = [];
  let rawText = '';

  for (const line of ordered) {
    const start = rawText.length;
    const text = line.text.trim();
    rawText += `${text}\n`;

    const style = styleOf.get(line);
    blocks.push({
      text,
      page: line.page,
      bbox: { x: line.x, y: line.y, width: line.width, height: style?.fontSize ?? 0 },
      ...(style ? { fontSize: style.fontSize, bold: style.bold } : {}),
      span: { start, end: start + text.length, page: line.page },
    });
  }

  return { rawText, blocks };
}
