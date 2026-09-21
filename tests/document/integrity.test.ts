import { describe, expect, it } from 'vitest';

import { DefaultResumeParser } from '../../src/document/index.js';
import { checkIntegrity } from '../../src/document/integrity.js';
import type { LabelledRow, RowLabel, SectionBoundary } from '../../src/document/types.js';
import type { ResumeSection } from '../../src/domain.js';

/**
 * B5: the parse checked against itself.
 *
 * Built from inputs that do not add up, because a parse that works reports
 * nothing and a test of a reconciliation has to be given something to find.
 * The fixtures all reconcile cleanly, which is what the last test here says.
 */
function rows(texts: string[]): LabelledRow[] {
  let start = 0;
  return texts.map((text) => {
    const span = { start, end: start + text.length, page: 1 };
    start += text.length + 1;
    return { text, span };
  });
}

const text = (given: LabelledRow[]): string => given.map((r) => r.text).join('\n');

function boundary(over: Partial<SectionBoundary> = {}): SectionBoundary {
  return { index: 0, fromRow: 0, toRow: 0, confidence: 0.95, evidence: [], ...over };
}

function label(rowIndex: number, over: Partial<RowLabel> = {}): RowLabel {
  return { rowIndex, role: 'bullet', owner: 'entry', confidence: 0.9, evidence: [], ...over };
}

function section(over: Partial<ResumeSection> = {}): ResumeSection {
  return {
    id: 's0',
    kind: 'experience',
    heading: 'EXPERIENCE',
    entries: [],
    looseLines: [],
    infoLines: [],
    span: { start: 0, end: 1 },
    ...over,
  };
}

function entry(over: Partial<ResumeSection['entries'][number]> = {}) {
  return {
    id: 's0:e0',
    sectionId: 's0',
    index: 0,
    headerLines: ['NIO Inc.'],
    infoLines: [],
    bullets: [],
    span: { start: 0, end: 1 },
    ...over,
  };
}

function bullet(over: Partial<ResumeSection['entries'][number]['bullets'][number]> = {}) {
  return {
    id: 's0:e0:b0',
    entryId: 's0:e0',
    index: 0,
    text: 'Built a thing',
    span: { start: 0, end: 13 },
    ...over,
  };
}

describe('every row accounted for', () => {
  const document = rows(['EXPERIENCE', 'NIO Inc.', '- Built a thing', 'SKILLS', 'Python, Go']);

  it('counts a row no section claimed', () => {
    // A gap between two cuts. Nothing errors — the sections are both valid —
    // and the resume is short by a line nobody will ever see.
    const result = checkIntegrity(
      document,
      [boundary({ headingRow: 0, fromRow: 1, toRow: 3 }), boundary({ index: 1, headingRow: 4, fromRow: 5, toRow: 5 })],
      [label(1), label(2)],
      [section()],
      text(document),
    );

    expect(result.droppedRows).toEqual([3]);
    expect(result.placedRows).toBe(4);
    expect(result.totalRows).toBe(5);
  });

  it('counts a row two sections claimed', () => {
    const result = checkIntegrity(
      document,
      [boundary({ fromRow: 0, toRow: 3 }), boundary({ index: 1, fromRow: 2, toRow: 5 })],
      [],
      [section()],
      text(document),
    );

    expect(result.duplicatedRows).toEqual([2]);
  });

  it('counts a row inside a section that nothing gave a role to', () => {
    const result = checkIntegrity(
      document,
      [boundary({ headingRow: 0, fromRow: 1, toRow: 5 })],
      [label(1), label(3)],
      [section()],
      text(document),
    );

    expect(result.unlabelledRows).toEqual([2, 4]);
  });

  it('does not count an unlabelled row as placed', () => {
    // The fold skips a row it has no label for rather than guess at it, so an
    // unlabelled row is as lost as an unclaimed one — and the reconciliation
    // used to say every row was placed while the document was short a line.
    const result = checkIntegrity(
      document,
      [boundary({ headingRow: 0, fromRow: 1, toRow: 5 })],
      [label(1), label(3), label(4)],
      [section()],
      text(document),
    );

    expect(result.unlabelledRows).toEqual([2]);
    expect(result.placedRows).toBe(4);
    expect(result.totalRows).toBe(5);
  });

  it('counts a heading row as placed, since nothing labels one', () => {
    // The cut settled what a heading row is. Requiring a label for every row
    // would report the heading of every section as lost.
    const result = checkIntegrity(
      document,
      [boundary({ headingRow: 0, fromRow: 1, toRow: 3 })],
      [label(1), label(2)],
      [section()],
      text(document),
    );

    expect(result.placedRows).toBe(3);
    expect(result.unlabelledRows).toEqual([]);
  });

  it('reports nothing when the cut covers the document exactly once', () => {
    const result = checkIntegrity(
      document,
      [boundary({ headingRow: 0, fromRow: 1, toRow: 3 }), boundary({ index: 1, headingRow: 3, fromRow: 4, toRow: 5 })],
      [label(1), label(2), label(4)],
      [section()],
      text(document),
    );

    expect(result.droppedRows).toEqual([]);
    expect(result.duplicatedRows).toEqual([]);
    expect(result.placedRows).toBe(result.totalRows);
  });
});

describe('things that came out holding nothing', () => {
  it('names a section with no entries, no prose and no bullets', () => {
    const result = checkIntegrity([], [], [], [section({ id: 's3' })], '');

    expect(result.emptySections).toEqual(['s3']);
  });

  it('names an entry with no header and nothing under it', () => {
    const result = checkIntegrity(
      [],
      [],
      [],
      [section({ entries: [entry({ headerLines: [], bullets: [] })] })],
      '',
    );

    expect(result.emptyEntries).toEqual(['s0:e0']);
  });

  it('names a bullet whose marker was the whole line', () => {
    const result = checkIntegrity(
      [],
      [],
      [],
      [section({ entries: [entry({ bullets: [bullet({ text: '  ' })] })] })],
      '',
    );

    expect(result.emptyBullets).toEqual(['s0:e0:b0']);
  });

  it('names a section whose heading row resolved to nothing', () => {
    const document = rows(['   ', 'NIO Inc.']);
    const result = checkIntegrity(
      document,
      [boundary({ headingRow: 0, fromRow: 1, toRow: 2 })],
      [label(1)],
      [section({ heading: '', entries: [entry()] })],
      text(document),
    );

    expect(result.invalidHeadings).toEqual(['s0']);
  });
});

describe('ids and the things they point at', () => {
  it('names an id two lines answer to', () => {
    // An id is how a diagnosis says which line it means. Two lines sharing one
    // means a review lands on whichever a reader finds first.
    const result = checkIntegrity(
      [],
      [],
      [],
      [section({ entries: [entry({ bullets: [bullet(), bullet({ index: 1 })] })] })],
      '',
    );

    expect(result.duplicateIds).toEqual(['s0:e0:b0']);
  });

  it('names a bullet whose entry is not there', () => {
    const result = checkIntegrity(
      [],
      [],
      [],
      [section({ entries: [entry({ bullets: [bullet({ entryId: 's9:e9' })] })] })],
      '',
    );

    expect(result.danglingRefs).toEqual(['s0:e0:b0']);
  });

  it('names an entry whose section is not there', () => {
    const result = checkIntegrity([], [], [], [section({ entries: [entry({ sectionId: 's9' })] })], '');

    expect(result.danglingRefs).toEqual(['s0:e0']);
  });

  it('names an entry that claims a section it is not in', () => {
    // Checked against the parent it is actually inside, not against the set of
    // parents that exist. A sibling resolves to something real and to the
    // wrong thing, and a review then lands on a line nobody was discussing.
    const result = checkIntegrity(
      [],
      [],
      [],
      [section({ id: 's0', entries: [entry({ sectionId: 's1' })] }), section({ id: 's1' })],
      '',
    );

    expect(result.danglingRefs).toEqual(['s0:e0']);
  });

  it('names a bullet that claims a sibling entry', () => {
    const result = checkIntegrity(
      [],
      [],
      [],
      [
        section({
          entries: [
            entry({ id: 's0:e0', bullets: [bullet({ entryId: 's0:e1' })] }),
            entry({ id: 's0:e1', index: 1 }),
          ],
        }),
      ],
      '',
    );

    expect(result.danglingRefs).toEqual(['s0:e0:b0']);
  });

  it('names a section bullet that claims another section', () => {
    const result = checkIntegrity(
      [],
      [],
      [],
      [
        section({
          id: 's0',
          bullets: [{ id: 's0:b0', sectionId: 's1', index: 0, text: 'a', span: { start: 0, end: 1 } }],
        }),
        section({ id: 's1' }),
      ],
      '',
    );

    expect(result.danglingRefs).toEqual(['s0:b0']);
  });
});

describe('offsets that do not lead back', () => {
  const document = rows(['EXPERIENCE', 'NIO Inc.', 'Built a thing']);

  it('names a bullet pointing at the wrong line', () => {
    const result = checkIntegrity(
      document,
      [],
      [],
      [section({ entries: [entry({ bullets: [bullet({ span: { start: 0, end: 10 } })] })] })],
      text(document),
    );

    expect(result.unmappedSpans).toEqual(['s0:e0:b0']);
  });

  it('names a bullet pointing outside the document', () => {
    const result = checkIntegrity(
      document,
      [],
      [],
      [section({ entries: [entry({ bullets: [bullet({ span: { start: 900, end: 950 } })] })] })],
      text(document),
    );

    expect(result.unmappedSpans).toEqual(['s0:e0:b0']);
  });

  it('accepts a bullet that was joined with the line below it', () => {
    // The span covers both rows and the text was joined with a space where the
    // page had a line break, so it will never match character for character.
    const joined = rows(['- Built a thing that', 'ran for two years']);
    const result = checkIntegrity(
      joined,
      [],
      [],
      [
        section({
          entries: [
            entry({
              bullets: [bullet({ text: 'Built a thing that ran for two years', span: { start: 2, end: 38 } })],
            }),
          ],
        }),
      ],
      text(joined),
    );

    expect(result.unmappedSpans).toEqual([]);
  });
});

describe('shapes that are legal and worth a second look', () => {
  it('names an entry whose header is a date and nothing else', () => {
    const result = checkIntegrity(
      [],
      [],
      [],
      [section({ entries: [entry({ headerLines: ['Aug 2026 - Present'], bullets: [bullet()] })] })],
      '',
    );

    expect(result.anomalies).toContainEqual(
      expect.objectContaining({ kind: 'date-only-entry', at: 's0:e0' }),
    );
  });

  it('names an entry nothing opened', () => {
    // The assembler makes one of these rather than losing a row a label
    // claimed for an entry before any entry existed.
    const result = checkIntegrity(
      [],
      [],
      [],
      [section({ entries: [entry({ headerLines: [], bullets: [bullet()] })] })],
      '',
    );

    expect(result.anomalies).toContainEqual(
      expect.objectContaining({ kind: 'entry-without-header', at: 's0:e0' }),
    );
  });

  it('names a continuation with nothing above it', () => {
    const document = rows(['EXPERIENCE', 'ran for two years']);
    const result = checkIntegrity(
      document,
      [boundary({ headingRow: 0, fromRow: 1, toRow: 2 })],
      [label(1, { role: 'continuation', owner: 'section' })],
      [section()],
      text(document),
    );

    expect(result.anomalies).toContainEqual(
      expect.objectContaining({ kind: 'dangling-continuation', at: 'row 1' }),
    );
  });

  it('names a cut that no vocabulary anchored', () => {
    const document = rows(['What I Have Built', 'NIO Inc.']);
    const result = checkIntegrity(
      document,
      [boundary({ headingRow: 0, fromRow: 1, toRow: 2, confidence: 0.45 })],
      [label(1)],
      [section()],
      text(document),
    );

    expect(result.anomalies).toContainEqual(expect.objectContaining({ kind: 'guessed-boundary' }));
  });

  it('names a section filed by its heading against what its shape argued', () => {
    // B4 follows the heading and writes the disagreement down. This is the
    // first thing that reads it.
    const result = checkIntegrity(
      [],
      [],
      [],
      [
        section({
          kind: 'experience',
          infoLines: ['Languages: TypeScript, Python, Go'],
          classification: {
            confidence: 0,
            margin: -1,
            decisionSource: 'heading',
            evidence: [],
            runnerUp: { kind: 'skills', score: 4 },
            headingUnknown: false,
          },
        }),
      ],
      '',
    );

    expect(result.anomalies).toContainEqual(
      expect.objectContaining({ kind: 'heading-overruled-evidence', at: 's0' }),
    );
  });
});

describe('the parse a real page produces', () => {
  it.each([
    'resume_example.pdf',
    'hanging-indent.pdf',
    'caps-headings.pdf',
    'dated-projects.pdf',
    'messy-resume.pdf',
    'bulleted-contact.pdf',
  ])('reconciles %s without losing a row', async (fixture) => {
    const doc = await new DefaultResumeParser().parse(`tests/fixtures/${fixture}`);
    const integrity = doc.meta.integrity!;

    expect(integrity.placedRows).toBe(integrity.totalRows);
    expect(integrity.droppedRows).toEqual([]);
    expect(integrity.duplicatedRows).toEqual([]);
    expect(integrity.unlabelledRows).toEqual([]);
    expect(integrity.duplicateIds).toEqual([]);
    expect(integrity.danglingRefs).toEqual([]);
    expect(integrity.unmappedSpans).toEqual([]);
  });

  it('prices an unlabelled line as a parsing risk too', async () => {
    const { analyzeFormat } = await import('../../src/tools/analyze-format.js');
    const doc = await new DefaultResumeParser().parse('tests/fixtures/resume_example.pdf');
    const lost = {
      ...doc,
      meta: { ...doc.meta, integrity: { ...doc.meta.integrity!, unlabelledRows: [7] } },
    };

    expect(analyzeFormat(lost).metrics.atsParsability.blockers).toContainEqual(
      expect.stringContaining('1 line(s) this parser could not place'),
    );
  });

  it('counts a row that is two kinds of lost at once, once', async () => {
    const { analyzeFormat } = await import('../../src/tools/analyze-format.js');
    const doc = await new DefaultResumeParser().parse('tests/fixtures/resume_example.pdf');
    const lost = {
      ...doc,
      meta: {
        ...doc.meta,
        integrity: { ...doc.meta.integrity!, duplicatedRows: [7], unlabelledRows: [7] },
      },
    };

    expect(analyzeFormat(lost).metrics.atsParsability.blockers).toContainEqual(
      expect.stringContaining('1 line(s) this parser could not place'),
    );
  });

  it('prices a line it could not place as a parsing risk', async () => {
    // The free signal: where our own parser lost the thread is where a
    // commercial one will too. Asserted in a comment for as long as this has
    // existed, with nothing measuring it.
    const { analyzeFormat } = await import('../../src/tools/analyze-format.js');
    const doc = await new DefaultResumeParser().parse('tests/fixtures/resume_example.pdf');

    expect(analyzeFormat(doc).metrics.atsParsability.blockers).not.toContainEqual(
      expect.stringContaining('could not place'),
    );

    const lost = {
      ...doc,
      meta: { ...doc.meta, integrity: { ...doc.meta.integrity!, droppedRows: [7, 8] } },
    };
    expect(analyzeFormat(lost).metrics.atsParsability.blockers).toContainEqual(
      expect.stringContaining('2 line(s) this parser could not place'),
    );
  });

  it('keeps the reconciliation on the document, where a reader can find it', async () => {
    const doc = await new DefaultResumeParser().parse('tests/fixtures/resume_example.pdf');

    expect(doc.meta.integrity?.totalRows).toBeGreaterThan(0);
  });
});
