import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

import type { SourceFormat } from '../../domain.js';
import type { DocumentExtractor, ExtractionResult, TextBlock } from '../types.js';

/**
 * Markdown and plain text.
 *
 * The visual signals a section detector relies on — "this line is bigger", "this
 * line is bold" — exist in Markdown too, just spelled differently: `##` is a
 * heading, `**...**` is bold. Mapping them onto the same `fontSize` / `bold`
 * fields a PDF extractor produces means one detector serves every format, rather
 * than one detector per source type.
 */
export class MarkdownExtractor implements DocumentExtractor {
  readonly format: SourceFormat = 'markdown';

  supports(filePath: string): boolean {
    return ['.md', '.markdown', '.txt', '.text'].includes(extname(filePath).toLowerCase());
  }

  async extract(filePath: string): Promise<ExtractionResult> {
    const raw = await readFile(filePath, 'utf-8');
    return extractFromText(raw, extname(filePath).toLowerCase() === '.txt' ? 'text' : 'markdown');
  }
}

/** Heading level to a notional point size, matching what a PDF would report. */
const HEADING_FONT_SIZE: Record<number, number> = { 1: 24, 2: 18, 3: 15, 4: 13, 5: 12, 6: 12 };
const BODY_FONT_SIZE = 11;

export function extractFromText(raw: string, format: SourceFormat): ExtractionResult {
  const text = raw.replace(/\r\n?/g, '\n');
  const blocks: TextBlock[] = [];
  const layoutWarnings: string[] = [];

  let offset = 0;
  let inFence = false;

  for (const line of text.split('\n')) {
    const start = offset;
    offset += line.length + 1; // account for the newline that split() removed

    // Fenced code inside a resume is rare but must not be mistaken for content.
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const trimmed = line.trim();
    if (!trimmed) continue;

    blocks.push(toBlock(trimmed, start, start + line.length));
  }

  if (blocks.length === 0) layoutWarnings.push('no readable text found');
  if (/\|.*\|.*\|/.test(text)) {
    // Tables survive Markdown fine, but the same layout in a PDF is a common
    // reason an applicant tracking system reads a resume as gibberish.
    layoutWarnings.push('table markup detected — many ATS parsers mangle tabular layouts');
  }

  return {
    format,
    rawText: text,
    blocks,
    quality: layoutWarnings.length > 0 ? 'degraded' : 'clean',
    layoutWarnings,
  };
}

function toBlock(line: string, start: number, end: number): TextBlock {
  const heading = /^(#{1,6})\s+(.*)$/.exec(line);
  if (heading) {
    const level = heading[1]!.length;
    return {
      text: heading[2]!.trim(),
      page: 1,
      fontSize: HEADING_FONT_SIZE[level] ?? BODY_FONT_SIZE,
      bold: true,
      span: { start, end },
    };
  }

  // A line that is entirely bold reads as a heading in a resume, even without
  // a `#` — plenty of people write `**Experience**`.
  const wholeLineBold = /^\*\*(.+)\*\*$/.exec(line) ?? /^__(.+)__$/.exec(line);
  if (wholeLineBold) {
    return {
      text: wholeLineBold[1]!.trim(),
      page: 1,
      fontSize: HEADING_FONT_SIZE[3]!,
      bold: true,
      span: { start, end },
    };
  }

  return { text: line, page: 1, fontSize: BODY_FONT_SIZE, bold: false, span: { start, end } };
}
