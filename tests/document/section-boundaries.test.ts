import { describe, expect, it } from 'vitest';

import { findSectionBoundaries } from '../../src/document/section-boundaries.js';
import type { VisualRow } from '../../src/document/types.js';

/**
 * B1: where the sections start, and nothing else.
 *
 * The two resumes these tests are drawn from disagree about which layout
 * feature carries the rank, which is the whole problem. One sets its section
 * headings at body size in capitals and its entry headings a point larger; the
 * other sets section headings a third larger in ordinary case. Either feature
 * read alone gets one of the two exactly backwards.
 */
interface Spec {
  text: string;
  size?: number;
  bold?: boolean;
  /** Distance from the row above, in body line spacings. */
  gap?: number;
  page?: number;
}

const SPACING = 12;

function rows(specs: Spec[]): VisualRow[] {
  let y = 700;
  let onPage = 1;
  return specs.map((spec, index) => {
    const fontSize = spec.size ?? 10;
    const style = { fontSize, bold: spec.bold ?? false };
    const page = spec.page ?? 1;
    // A new page starts at the top again, which is why a row there has no
    // measurable air above it.
    if (page !== onPage) {
      onPage = page;
      y = 700;
    } else {
      y -= (spec.gap ?? 1) * SPACING;
    }

    return {
      index,
      text: spec.text,
      page,
      x: 72,
      y,
      width: 200,
      fontSize,
      bold: style.bold,
      leading: style,
      dominant: style,
      fragments: [],
      span: { start: 0, end: spec.text.length, page },
    };
  });
}

/** Section headings at body size in capitals, entry headings a point larger. */
function capitalsTemplate(): VisualRow[] {
  return rows([
    { text: 'Sean He', size: 17 },
    { text: '+1 555 0100 | sean@example.com' },
    { text: 'EDUCATION', gap: 1.2 },
    { text: 'University of Washington Seattle, WA', size: 10.9, gap: 1.5 },
    { text: 'M.S. in Electrical and Computer Engineering' },
    { text: 'EXPERIENCE', gap: 1.5 },
    { text: 'NIO Inc. Hefei, China', size: 10.9, gap: 1.3 },
    { text: '- Built an agent system that cut the backlog by 74%' },
    { text: '- Designed a role-aware routing layer' },
  ]);
}

/** Section headings a third larger, in ordinary case. */
function largerTemplate(): VisualRow[] {
  return rows([
    { text: 'Sean Chen', size: 16 },
    { text: 'sean@example.com' },
    { text: 'Experience', size: 13, gap: 2 },
    { text: 'ByteDance - Backend Intern | 2025.06 - 2025.09' },
    { text: '- Reduced P99 latency from 800ms to 90ms' },
    { text: 'Skills', size: 13, gap: 2 },
    { text: 'TypeScript, Python, Go' },
  ]);
}

describe('cutting the document into sections', () => {
  it('cuts at the rows the vocabulary names', () => {
    const cut = findSectionBoundaries(capitalsTemplate());

    expect(cut.map((b) => b.headingRow)).toEqual([undefined, 2, 5]);
    expect(cut.map((b) => [b.fromRow, b.toRow])).toEqual([
      [0, 2],
      [3, 5],
      [6, 9],
    ]);
  });

  it('gives the block above the first heading a range with no heading of its own', () => {
    // Name, email, links. Every resume has it and none introduces it.
    const leading = findSectionBoundaries(capitalsTemplate())[0]!;

    expect(leading.headingRow).toBeUndefined();
    expect(leading.fromRow).toBe(0);
    expect(leading.evidence[0]).toMatch(/above the first heading/);
  });

  it('covers every row exactly once, headings included', () => {
    const document = capitalsTemplate();
    const cut = findSectionBoundaries(document);
    const seen = cut.flatMap((b) => [
      ...(b.headingRow !== undefined ? [b.headingRow] : []),
      ...range(b.fromRow, b.toRow),
    ]);

    expect([...seen].sort((a, b) => a - b)).toEqual(range(0, document.length));
  });

  it('opens straight into the first section when the document has no leading block', () => {
    const cut = findSectionBoundaries(
      rows([{ text: 'EXPERIENCE' }, { text: 'NIO Inc.', size: 10.9 }, { text: '- Built a thing' }]),
    );

    expect(cut).toHaveLength(1);
    expect(cut[0]!.headingRow).toBe(0);
    expect(cut[0]!.fromRow).toBe(1);
  });
});

describe('generalising from the headings it recognises', () => {
  it('promotes an unrecognised heading set like the recognised ones', () => {
    // "Leadership", "Awards", "Publications" — a resume is free to name a
    // section anything. Set like the ones we do recognise, it is one of them.
    const cut = findSectionBoundaries(
      rows([
        { text: 'Sean He', size: 17 },
        { text: '+1 555 0100 | sean@example.com' },
        { text: 'EXPERIENCE', gap: 1.5 },
        { text: 'NIO Inc. Hefei, China', size: 10.9, gap: 1.3 },
        { text: '- Built an agent system that cut the backlog by 74%' },
        { text: 'LEADERSHIP', gap: 1.5 },
        { text: 'Student Council President', size: 10.9, gap: 1.3 },
        { text: '- Ran the thing for two years' },
      ]),
    );

    expect(cut.map((b) => b.headingRow)).toEqual([undefined, 2, 5]);

    const promoted = cut[2]!;
    expect(promoted.confidence).toBeLessThan(0.95);
    expect(promoted.evidence[0]).toBe("set like this resume's own section headings");
  });

  it('leaves entry headings alone where they are set larger than the sections', () => {
    // The inversion that makes size alone useless: ranked by size, every
    // employer here outranks EXPERIENCE and the section headings are body text.
    const cut = findSectionBoundaries(capitalsTemplate());

    expect(cut.map((b) => b.headingRow)).not.toContain(3);
    expect(cut.map((b) => b.headingRow)).not.toContain(6);
  });

  it('leaves entry headings alone where the sections are the larger ones', () => {
    const cut = findSectionBoundaries(largerTemplate());

    expect(cut.map((b) => b.headingRow)).toEqual([undefined, 2, 5]);
  });

  it("keeps the candidate's name out of the cut, though it is the largest row", () => {
    // It is the largest, shortest, most emphasized row on the page. Read as a
    // heading it would file the contact details under a section called "Sean".
    for (const document of [capitalsTemplate(), largerTemplate()]) {
      expect(findSectionBoundaries(document).map((b) => b.headingRow)).not.toContain(0);
    }
  });
});

describe('a resume that names none of its sections in words we know', () => {
  function unusual(): VisualRow[] {
    return rows([
      { text: 'Sean He', size: 16 },
      { text: 'sean@example.com' },
      { text: 'What I Have Built', size: 13, gap: 2 },
      { text: 'ByteDance - Backend Intern' },
      { text: '- Reduced P99 latency from 800ms to 90ms' },
      { text: 'What I Know', size: 13, gap: 2 },
      { text: 'TypeScript, Python, Go' },
    ]);
  }

  it('falls back to the shape of the break', () => {
    const cut = findSectionBoundaries(unusual());

    expect(cut.map((b) => b.headingRow)).toEqual([undefined, 2, 5]);
  });

  it('reports the fallback low, because nothing anchored it', () => {
    const cut = findSectionBoundaries(unusual());

    expect(cut[1]!.confidence).toBeLessThan(0.5);
    expect(cut[1]!.evidence[0]).toMatch(/named in the vocabulary/);
  });

  it('never calls the first row a heading, having nothing above it', () => {
    const cut = findSectionBoundaries(unusual());

    expect(cut.map((b) => b.headingRow)).not.toContain(0);
  });

  it('reads a page break as the air above a heading', () => {
    // Measured in line spacings a row at the top of a page has nothing above
    // it, and a heading that continues onto page two would be read as body.
    const cut = findSectionBoundaries(
      rows([
        { text: 'Sean He', size: 16 },
        { text: 'sean@example.com' },
        { text: 'What I Have Built', size: 13, gap: 2 },
        { text: 'ByteDance - Backend Intern' },
        { text: '- Reduced P99 latency from 800ms to 90ms' },
        { text: '- Migrated 12 services to the new pipeline' },
        { text: 'What I Know', size: 13, page: 2 },
        { text: 'TypeScript, Python, Go', page: 2 },
        { text: 'Postgres, Redis, Kafka', page: 2 },
      ]),
    );

    expect(cut.map((b) => b.headingRow)).toEqual([undefined, 2, 6]);
    expect(cut[2]!.evidence).toContain('first row of a new page');
  });

  it('leaves the whole document in one range when nothing breaks it up', () => {
    const cut = findSectionBoundaries(
      rows([
        { text: 'a line of prose about the work' },
        { text: 'another line of prose about it' },
        { text: 'a third line of prose about it' },
      ]),
    );

    expect(cut).toHaveLength(1);
    expect(cut[0]!.headingRow).toBeUndefined();
    expect(cut[0]!.toRow).toBe(3);
    expect(cut[0]!.evidence[0]).toMatch(/no heading found anywhere/);
  });
});

describe('rows that cannot be a heading whatever they are set in', () => {
  it('never reads a bullet as a heading', () => {
    const cut = findSectionBoundaries(
      rows([
        { text: 'EDUCATION' },
        { text: 'University of Washington', size: 10.9 },
        { text: '- SKILLS', gap: 2 },
        { text: 'more body text here' },
      ]),
    );

    expect(cut.map((b) => b.headingRow)).toEqual([0]);
  });

  it('never reads a sentence as a heading', () => {
    // A heading is a label, not a statement.
    const cut = findSectionBoundaries(
      rows([
        { text: 'EDUCATION' },
        { text: 'University of Washington', size: 10.9 },
        { text: 'I BUILT THINGS.', gap: 2 },
      ]),
    );

    expect(cut.map((b) => b.headingRow)).toEqual([0]);
  });

  it('never reads a long row as a heading', () => {
    const long = 'A SECTION HEADING SO LONG THAT IT IS PLAINLY A SENTENCE INSTEAD';
    const cut = findSectionBoundaries(
      rows([{ text: 'EDUCATION' }, { text: 'University of Washington', size: 10.9 }, { text: long, gap: 2 }]),
    );

    expect(long.length).toBeGreaterThan(48);
    expect(cut.map((b) => b.headingRow)).toEqual([0]);
  });
});

describe('what the cut says about itself', () => {
  it('names what it measured', () => {
    const cut = findSectionBoundaries(largerTemplate());

    expect(cut[1]!.evidence).toEqual([
      'named in the heading vocabulary',
      'set 1.30x body size',
      '2.00x the body line spacing above it',
      'one word',
    ]);
  });

  it('records capitals where capitals are what set the heading apart', () => {
    const cut = findSectionBoundaries(capitalsTemplate());

    expect(cut[1]!.evidence).toContain('set in capitals');
    expect(cut[1]!.evidence).not.toContainEqual(expect.stringContaining('body size'));
  });
});

function range(from: number, to: number): number[] {
  return Array.from({ length: to - from }, (_, i) => from + i);
}
