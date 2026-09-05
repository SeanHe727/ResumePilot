import { describe, expect, it } from 'vitest';

import { PdfExtractor } from '../../src/document/extractors/pdf.js';
import { DefaultResumeParser } from '../../src/document/parser.js';

/**
 * The fixtures are hand-built by `tests/fixtures/make-pdfs.py` rather than
 * exported from a word processor, so the two things under test — where each
 * line sits, and the order the content stream draws it — are exact and stable.
 */
const FIXTURE = (name: string): string => `tests/fixtures/${name}`;

describe('PdfExtractor', () => {
  it('rebuilds lines from glyph runs and their baselines', async () => {
    const result = await new PdfExtractor().extract(FIXTURE('single-column.pdf'));

    expect(result.blocks.map((b) => b.text)).toEqual([
      'Sean Chen',
      'sean@example.com',
      'Experience',
      'ByteDance - Backend Intern | 2025.06 - 2025.09',
      '- Reduced P99 latency from 800ms to 90ms',
      '- Migrated 12 services to the new pipeline',
      'Skills',
      'TypeScript, Python, Go',
    ]);
  });

  it('recovers the font size that section detection depends on', async () => {
    const result = await new PdfExtractor().extract(FIXTURE('single-column.pdf'));
    const name = result.blocks[0]!;
    const body = result.blocks[1]!;

    expect(name.fontSize).toBeGreaterThan(body.fontSize!);
  });

  it('rates a clean single-column PDF as clean', async () => {
    const result = await new PdfExtractor().extract(FIXTURE('single-column.pdf'));

    expect(result.quality).toBe('clean');
    expect(result.layoutWarnings).toEqual([]);
  });

  it('flags a two-column layout and quantifies the misordering', async () => {
    const result = await new PdfExtractor().extract(FIXTURE('two-column.pdf'));

    expect(result.quality).toBe('degraded');
    expect(result.layoutWarnings[0]).toMatch(/multi-column layout detected/);
    expect(result.layoutWarnings[0]).toMatch(/misorder \d+% of adjacent lines/);
  });

  it('still reads a two-column page column-first, not straight across', async () => {
    // The warning says a parser *would* garble it; our own text must not be,
    // or every downstream diagnosis would be based on scrambled input.
    const result = await new PdfExtractor().extract(FIXTURE('two-column.pdf'));
    const texts = result.blocks.map((b) => b.text);

    expect(texts.indexOf('- Built a log aggregation tool')).toBeLessThan(texts.indexOf('Skills'));
  });

  it('reports a scanned page as unreadable instead of guessing', async () => {
    const result = await new PdfExtractor().extract(FIXTURE('scanned.pdf'));

    expect(result.quality).toBe('unreadable');
    expect(result.blocks).toHaveLength(0);
    expect(result.layoutWarnings[0]).toMatch(/no text layer/);
  });

  it('records offsets that resolve back to the emitted text', async () => {
    const result = await new PdfExtractor().extract(FIXTURE('single-column.pdf'));
    const block = result.blocks[3]!;

    expect(result.rawText.slice(block.span.start, block.span.end)).toBe(block.text);
  });

  it('claims .pdf and nothing else', () => {
    const extractor = new PdfExtractor();

    expect(extractor.supports('a.pdf')).toBe(true);
    expect(extractor.supports('A.PDF')).toBe(true);
    expect(extractor.supports('a.docx')).toBe(false);
  });
});

describe('PDF through the whole pipeline', () => {
  it('produces the same structure a Markdown resume would', async () => {
    const doc = await new DefaultResumeParser().parse(FIXTURE('single-column.pdf'));

    expect(doc.format).toBe('pdf');
    expect(doc.sections.map((s) => s.kind)).toEqual(['contact', 'experience', 'skills']);

    const entry = doc.sections[1]!.entries[0]!;
    expect(entry.organization).toBe('ByteDance');
    expect(entry.dateRange).toBe('2025.06 - 2025.09');
    expect(entry.bullets.map((b) => b.text)).toEqual([
      'Reduced P99 latency from 800ms to 90ms',
      'Migrated 12 services to the new pipeline',
    ]);
  });

  it('carries the layout verdict through to the document', async () => {
    const doc = await new DefaultResumeParser().parse(FIXTURE('two-column.pdf'));

    expect(doc.meta.quality).toBe('degraded');
    expect(doc.meta.layoutWarnings.some((w) => w.includes('multi-column'))).toBe(true);
  });
});
