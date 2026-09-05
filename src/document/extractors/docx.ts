import { extname } from 'node:path';

import type { SourceFormat } from '../../domain.js';
import { detectDecorativeBullets } from '../layout.js';
import type { DocumentExtractor, ExtractionResult, TextBlock } from '../types.js';

/**
 * DOCX extraction.
 *
 * Structurally the easy case: a .docx is XML with a guaranteed element order,
 * so extraction is lossless and there is no reading-order question to answer —
 * the failure mode that dominates PDF simply does not exist here. That is
 * itself worth telling users: submitting .docx removes a third of the ways an
 * ATS can misread a resume.
 *
 * Converting to HTML rather than raw text keeps the heading and list markup
 * Word carries, which is exactly the emphasis signal section detection needs.
 */
export class DocxExtractor implements DocumentExtractor {
  readonly format: SourceFormat = 'docx';

  supports(filePath: string): boolean {
    return extname(filePath).toLowerCase() === '.docx';
  }

  async extract(filePath: string): Promise<ExtractionResult> {
    const mammoth = await import('mammoth');
    const { value: html, messages } = await mammoth.convertToHtml({ path: filePath });

    const lines = htmlToLines(html);
    const layoutWarnings: string[] = [];

    if (lines.length === 0) {
      return {
        format: 'docx',
        rawText: '',
        blocks: [],
        quality: 'unreadable',
        layoutWarnings: ['no readable text found in the document body'],
      };
    }

    // Mammoth reports elements it could not map — a table, a text box, a
    // drawing. Each is a construct parsers handle inconsistently.
    const tables = messages.filter((m) => /table/i.test(m.message)).length;
    if (/<table/i.test(html)) {
      layoutWarnings.push('tables detected — parsers commonly flatten them row-wise and scramble fields');
    }
    if (tables > 0 || messages.some((m) => /text ?box|drawing|shape/i.test(m.message))) {
      layoutWarnings.push('text boxes or drawings detected — their contents are often invisible to parsers');
    }

    const decorative = detectDecorativeBullets(lines.map((l) => l.text));
    if (decorative.length > 0) {
      layoutWarnings.push(`decorative bullet glyphs (${decorative.join(' ')}) tokenize as unknown entities`);
    }

    let rawText = '';
    const blocks: TextBlock[] = lines.map((line) => {
      const start = rawText.length;
      rawText += `${line.text}\n`;
      return {
        text: line.text,
        page: 1,
        ...(line.fontSize !== undefined ? { fontSize: line.fontSize } : {}),
        bold: line.bold,
        span: { start, end: start + line.text.length },
      };
    });

    return {
      format: 'docx',
      rawText,
      blocks,
      quality: layoutWarnings.length > 0 ? 'degraded' : 'clean',
      layoutWarnings,
    };
  }
}

/** Word heading levels map onto the same notional point sizes as Markdown's. */
const HEADING_FONT_SIZE: Record<string, number> = {
  h1: 24,
  h2: 18,
  h3: 15,
  h4: 13,
  h5: 12,
  h6: 12,
};
const BODY_FONT_SIZE = 11;

interface DocxLine {
  text: string;
  fontSize?: number;
  bold: boolean;
}

function htmlToLines(html: string): DocxLine[] {
  const lines: DocxLine[] = [];
  const blockPattern = /<(h[1-6]|p|li)[^>]*>([\s\S]*?)<\/\1>/gi;

  for (const match of html.matchAll(blockPattern)) {
    const tag = match[1]!.toLowerCase();
    const inner = match[2] ?? '';
    const bold = /^\s*<(strong|b)>[\s\S]*<\/(strong|b)>\s*$/i.test(inner);
    const text = decodeEntities(inner.replace(/<[^>]+>/g, '')).trim();
    if (!text) continue;

    lines.push({
      // A list item keeps its marker so the bullet detector downstream sees it
      // the same way it would in Markdown.
      text: tag === 'li' ? `- ${text}` : text,
      fontSize: HEADING_FONT_SIZE[tag] ?? BODY_FONT_SIZE,
      bold: tag.startsWith('h') || bold,
    });
  }

  return lines;
}

function decodeEntities(text: string): string {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)));
}
