import { describe, expect, it } from 'vitest';

import { PdfExtractor } from '../../src/document/extractors/pdf.js';
import { DefaultResumeParser, UnsupportedLayoutError } from '../../src/document/parser.js';

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

  it('refuses a two-column layout rather than reading it', async () => {
    // Not a warning attached to a best effort. In two columns the extraction
    // order is already wrong, so the best effort is a document assembled from
    // two places at once — and no reader downstream could tell.
    const result = await new PdfExtractor().extract(FIXTURE('two-column.pdf'));

    expect(result.quality).toBe('unsupported');
    expect(result.layoutWarnings[0]).toMatch(/multi-column layout detected/);
    expect(result.layoutWarnings[0]).toMatch(/single column/);
    // The counts name what was found, so they have to describe the columns
    // rather than the widest hole: a boundary drawn through the left column
    // leaves a wider gutter beside fewer lines, and reports a smaller fault.
    expect(result.layoutWarnings[0]).toMatch(/6 lines left, 6 right/);
  });

  it('returns no text at all for a layout it refuses', async () => {
    const result = await new PdfExtractor().extract(FIXTURE('two-column.pdf'));

    expect(result.blocks).toEqual([]);
    expect(result.rawText).toBe('');
  });

  it('rebuilds a row from geometry, not from the order the file drew it', async () => {
    // The fixture draws an entry header's right-aligned date *after* the line
    // below it, which is what a resume with a date on the right commonly does.
    // Merged by drawing order the date became a row of its own.
    const result = await new PdfExtractor().extract(FIXTURE('late-date.pdf'));

    expect(result.blocks.map((b) => b.text)).toEqual([
      'Sean Chen',
      'sean@example.com',
      'Experience',
      'ByteDance - Backend Intern 2025.06 - 2025.09',
      '- Reduced P99 latency from 800ms to 90ms across every service in the fleet',
      '- Migrated 12 services to the new pipeline with no downtime at all for users',
    ]);
  });

  it('refuses two columns that sit under a full-width name banner', async () => {
    // The ordinary shape of a two-column resume, and the one the guard used to
    // miss: the banner covers every bucket the gutter runs through.
    const result = await new PdfExtractor().extract(FIXTURE('banner-two-column.pdf'));

    expect(result.quality).toBe('unsupported');
    expect(result.layoutWarnings[0]).toMatch(/multi-column layout detected/);
  });

  it('refuses two columns interrupted by a full-width heading', async () => {
    // A line running across the page divides it; it does not settle what is
    // above and below. Both halves are still read straight across.
    const result = await new PdfExtractor().extract(FIXTURE('split-two-column.pdf'));

    expect(result.quality).toBe('unsupported');
    expect(result.layoutWarnings[0]).toMatch(/multi-column layout detected/);
  });

  it('keeps the rebuilt rows beside the blocks it flattened them into', async () => {
    // A block is one style for the whole row and no way back to the runs. The
    // stages downstream read blocks today; the rows are what they can reach
    // for when they want the gap above a row or the style it starts in.
    const result = await new PdfExtractor().extract(FIXTURE('late-date.pdf'));

    expect(result.rows!.map((r) => r.text)).toEqual(result.blocks.map((b) => b.text));
    expect(result.rows!.map((r) => r.index)).toEqual([0, 1, 2, 3, 4, 5]);

    const header = result.rows![3]!;
    expect(header.fragments.map((f) => f.text)).toEqual([
      'ByteDance - Backend Intern',
      '2025.06 - 2025.09',
    ]);
    // The date is the larger run, and the row still reads as the title it is.
    expect(header.fontSize).toBeGreaterThan(header.dominant.fontSize);
    expect(result.rawText.slice(header.span.start, header.span.end)).toBe(header.text);
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

  it('leaves a late-drawn date inside the entry it belongs to', async () => {
    // What the rebuild is for. Drawn last and set larger than the title beside
    // it, the date used to be the emphasized line that opened an entry — one
    // entry named after a date range, and an empty shell where the title was.
    const doc = await new DefaultResumeParser().parse(FIXTURE('late-date.pdf'));
    const entries = doc.sections.flatMap((s) => s.entries);

    expect(entries).toHaveLength(1);
    expect(entries[0]!.dateRange).toBe('2025.06 - 2025.09');
    expect(entries[0]!.bullets).toHaveLength(2);
  });

  it('never builds a document from a layout it refuses', async () => {
    await expect(new DefaultResumeParser().parse(FIXTURE('two-column.pdf'))).rejects.toThrow(
      UnsupportedLayoutError,
    );
  });
});
