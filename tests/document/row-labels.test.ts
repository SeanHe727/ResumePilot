import { describe, expect, it } from 'vitest';

import { PdfExtractor } from '../../src/document/extractors/pdf.js';
import { labelRows } from '../../src/document/row-labels.js';
import { findSectionBoundaries } from '../../src/document/section-boundaries.js';
import type { RowLabel, SectionBoundary, VisualRow } from '../../src/document/types.js';

/**
 * B2: what each row is, inside the section it belongs to.
 *
 * The indents these rows are built with are the ones measured off a real
 * resume, because indentation is what carries the distinction: an entry header
 * sits at the section's left edge, a bullet's marker hangs a point and a half
 * left of its own text, and a wrapped bullet is set nearly eleven points in,
 * flush with the text above it. Font size is flat at 1.00 across all three.
 */
interface Spec {
  text: string;
  size?: number;
  bold?: boolean;
  /** Points right of the section's left edge. */
  indent?: number;
  gap?: number;
  page?: number;
}

const SPACING = 12;
const MARGIN = 32.4;

function rows(specs: Spec[]): VisualRow[] {
  let y = 700;
  let onPage = 1;
  return specs.map((spec, index) => {
    const fontSize = spec.size ?? 10;
    const style = { fontSize, bold: spec.bold ?? false };
    const page = spec.page ?? 1;
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
      x: MARGIN + (spec.indent ?? 0),
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

/** One section covering every row, as B1 would cut a document with one heading. */
function wholeBody(document: VisualRow[], headed = true): SectionBoundary[] {
  return [
    {
      index: 0,
      ...(headed ? { headingRow: 0 } : {}),
      fromRow: headed ? 1 : 0,
      toRow: document.length,
      confidence: 0.95,
      evidence: [],
    },
  ];
}

function roles(document: VisualRow[], headed = true): string[] {
  return labelRows(document, wholeBody(document, headed)).map(
    (l) => `${l.role}${l.startsEntry ? '*' : ''}`,
  );
}

/** An employer, a title line, and three bullets, one of which wraps. */
function onePosition(): VisualRow[] {
  return rows([
    { text: 'EXPERIENCE' },
    { text: 'NIO Inc. Hefei, China', size: 10.9 },
    { text: 'AI Research Intern  Oct 2024 - May 2025' },
    { text: '- Built an agent system that cut the backlog by 74%', indent: 1.7 },
    { text: '1,000+ signals per case through extracted schemas', indent: 10.8 },
    { text: '- Designed a role-aware routing layer', indent: 2 },
  ]);
}

describe('reading a row by where it sits', () => {
  it('reads an employer, its title line and its bullets', () => {
    expect(roles(onePosition())).toEqual([
      'entry-header*',
      'entry-header',
      'bullet',
      'continuation',
      'bullet',
    ]);
  });

  it('reads a wrapped bullet as the rest of the bullet above it', () => {
    // Set flush with the text of the bullet above, clear of its marker. Read
    // as new entries instead, a nine-bullet position becomes fourteen entries
    // whose employer is half a sentence.
    const labelled = labelRows(onePosition(), wholeBody(onePosition()));
    const wrapped = labelled.find((l) => l.rowIndex === 4)!;

    expect(wrapped.role).toBe('continuation');
    expect(wrapped.evidence[0]).toMatch(/hanging under the row above/);
  });

  it('falls back to the sentence where the template does not hang its wraps', () => {
    // Not every resume indents a wrapped line. What is left is the judgement a
    // reader makes at a glance: a wrapped line ends wherever the column ran
    // out, a finished one ends on a full stop.
    expect(
      roles(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'NIO Inc. Hefei, China', size: 10.9 },
          { text: '- Built an agent system that cut the backlog by 74%,', indent: 1.7 },
          { text: 'automating triage of 1,000+ signals per case', indent: 1.7 },
          { text: '- Designed a role-aware routing layer.', indent: 1.7 },
          { text: 'A finished sentence is not a continuation.', indent: 1.7 },
        ]),
      ),
    ).toEqual(['entry-header*', 'bullet', 'continuation', 'bullet', 'entry-header*']);
  });

  it('reads the indent even where the sentence says the line was finished', () => {
    // The two signals disagree here, and the indent is the one that is right:
    // a bullet can end on a full stop and still run on to a second printed
    // line. Read by punctuation alone this becomes an employer.
    expect(
      roles(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'NIO Inc. Hefei, China', size: 10.9 },
          { text: '- Built an agent system. It cut the backlog by 74%.', indent: 1.7 },
          { text: 'Triage of 1,000+ signals ran on extracted schemas.', indent: 10.8 },
          { text: '- Designed a role-aware routing layer', indent: 1.7 },
        ]),
      ),
    ).toEqual(['entry-header*', 'bullet', 'continuation', 'bullet']);
  });

  it('gives the assembler the offset its words start at, not a marker to strip', () => {
    const labelled = labelRows(onePosition(), wholeBody(onePosition()));
    const document = onePosition();
    const bullets = labelled.filter((l) => l.role === 'bullet');

    expect(bullets.map((l) => document[l.rowIndex]!.text.slice(l.contentFrom))).toEqual([
      'Built an agent system that cut the backlog by 74%',
      'Designed a role-aware routing layer',
    ]);
  });
});

describe('where one entry ends and the next begins', () => {
  it('opens an entry on the first header, and not on the line under it', () => {
    // Employer on one row, title and dates on the next. Two degrees listed
    // back to back look exactly like one degree whose header wrapped.
    expect(roles(onePosition()).slice(0, 2)).toEqual(['entry-header*', 'entry-header']);
  });

  it('opens an entry on a header set apart from the body', () => {
    expect(
      roles(
        rows([
          { text: 'EDUCATION' },
          { text: 'A University Seattle, WA', size: 10.9 },
          { text: 'M.S. in Engineering  2025 - 2027' },
          { text: 'B University Nanjing, China', size: 10.9 },
          { text: 'B.S. in Engineering  2021 - 2025' },
        ]),
      ),
    ).toEqual(['entry-header*', 'entry-header', 'entry-header*', 'entry-header']);
  });

  it('opens an entry on the first header after a bullet', () => {
    // The bullets closed what came before, so this starts something new even
    // where nothing about how it is set says so.
    expect(
      roles(
        rows([
          { text: 'PROJECTS' },
          { text: 'ResumePilot | Owner  Aug 2026 - Present' },
          { text: 'github.com/sean/resumepilot' },
          { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
          { text: 'GPT-Researcher | Contributor  Feb 2026 - Jul 2026' },
          { text: 'github.com/sean/gpt-researcher' },
          { text: '- Built a unified evaluation harness', indent: 1.7 },
        ]),
      ),
    ).toEqual([
      'entry-header*',
      'entry-header',
      'bullet',
      'entry-header*',
      'entry-header',
      'bullet',
    ]);
  });

  it('opens nothing on a row that is a date and nothing else', () => {
    // A resume puts the title left and the dates right of one printed line.
    // Read as two rows, the date became an entry of its own: the project's
    // name filed with no work under it and its dates holding all of it.
    // Rebuilding rows by geometry fixed the case that was measured; nothing
    // stops a template putting a date on a line by itself.
    const labelled = labelRows(
      ...(() => {
        const document = rows([
          { text: 'PROJECTS' },
          { text: 'ResumePilot | Owner' },
          { text: 'Aug 2026 - Present', size: 11 },
          { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
        ]);
        return [document, wholeBody(document)] as const;
      })(),
    );

    expect(labelled.map((l) => `${l.role}${l.startsEntry ? '*' : ''}`)).toEqual([
      'entry-header*',
      'entry-header',
      'bullet',
    ]);
    expect(labelled[1]!.evidence[0]).toMatch(/date range and nothing a reader would take/);
  });
});

describe('sections that hold no entries at all', () => {
  it('reads a skills list as loose prose', () => {
    // Three rows of comma-separated words, all set alike. Read as entries,
    // they are three positions whose employer is a list of languages.
    expect(
      roles(
        rows([
          { text: 'SKILLS' },
          { text: 'Programming: Python, TypeScript, SQL, Bash, Git' },
          { text: 'LLM & Agents: PyTorch, LangGraph, RAG, MCP' },
          { text: 'Post-Training: LoRA, SFT, GRPO, distillation' },
        ]),
      ),
    ).toEqual(['loose', 'loose', 'loose']);
  });

  it('reads the block above the first heading as loose, whatever is in it', () => {
    // The name is the largest, shortest row on the page. It is a masthead, not
    // a position, and the block nobody introduced holds no entries.
    expect(
      roles(rows([{ text: 'Sean He', size: 17 }, { text: '+1 555 0100 | sean@example.com' }]), false),
    ).toEqual(['loose', 'loose']);
  });

  it('reads a bulleted contact block as prose, markers and all', () => {
    // A bullet marks an item of a position. Where there is no position to mark
    // it is a line of prose with a dash in front of it, and reading these as
    // bullets would file the candidate's contact details as somebody's
    // achievements under an employer called "Sean He".
    const document = rows([
      { text: 'Sean He', size: 17 },
      { text: '- sean@example.com', indent: 1.7 },
      { text: '- github.com/sean', indent: 1.7 },
    ]);

    expect(roles(document, false)).toEqual(['loose', 'loose', 'loose']);
  });

  it('still says where the words start, so a marker need not be matched twice', () => {
    const document = rows([
      { text: 'Sean He', size: 17 },
      { text: '- sean@example.com', indent: 1.7 },
    ]);
    const labelled = labelRows(document, wholeBody(document, false));

    expect(document[1]!.text.slice(labelled[1]!.contentFrom)).toBe('sean@example.com');
  });

  it('reads a section with a header set apart as holding entries, bullets or not', () => {
    // Education is the usual one: two degrees, no bullets under either.
    expect(
      roles(
        rows([
          { text: 'EDUCATION' },
          { text: 'A University Seattle, WA', size: 10.9 },
          { text: 'M.S. in Engineering  2025 - 2027' },
        ]),
      ),
    ).toEqual(['entry-header*', 'entry-header']);
  });
});

describe('what a label says about itself', () => {
  it('labels nothing outside the ranges it was given', () => {
    // A cut this pipeline made covers the document. One handed in from
    // elsewhere may not, and labelling what nobody asked about would hide the
    // disagreement rather than leave it to be found.
    const document = onePosition();
    const labelled = labelRows(document, [
      { index: 0, headingRow: 0, fromRow: 1, toRow: 3, confidence: 0.95, evidence: [] },
    ]);

    expect(labelled.map((l) => l.rowIndex)).toEqual([1, 2]);
  });

  it('reports a marker higher than a role read from position', () => {
    const labelled = labelRows(onePosition(), wholeBody(onePosition()));
    const byRole = (role: string): RowLabel => labelled.find((l) => l.role === role)!;

    expect(byRole('bullet').confidence).toBeGreaterThan(byRole('entry-header').confidence);
    expect(byRole('bullet').evidence[0]).toBe('opens with a bullet marker');
  });
});

describe('the rows a PDF actually produces', () => {
  const FIXTURE = (name: string): string => `tests/fixtures/${name}`;

  async function label(name: string): Promise<{ rows: VisualRow[]; labels: RowLabel[] }> {
    const extracted = await new PdfExtractor().extract(FIXTURE(name));
    const document = extracted.rows!;
    return { rows: document, labels: labelRows(document, findSectionBoundaries(document)) };
  }

  it('labels every row of a real page, and only once', async () => {
    const { rows: document, labels } = await label('caps-headings.pdf');
    const headings = findSectionBoundaries(document)
      .map((b) => b.headingRow)
      .filter((r): r is number => r !== undefined);

    const covered = [...labels.map((l) => l.rowIndex), ...headings].sort((a, b) => a - b);
    expect(covered).toEqual(document.map((_, i) => i));
  });

  it('keeps an all-capitals job title in the header of its entry', async () => {
    const { rows: document, labels } = await label('caps-headings.pdf');
    const title = labels.find((l) => document[l.rowIndex]!.text === 'SENIOR ENGINEER')!;

    expect(title.role).toBe('entry-header');
    expect(title.startsEntry).toBeUndefined();
  });

  it('opens exactly one entry per position on a real page', async () => {
    const { rows: document, labels } = await label('caps-headings.pdf');
    const opens = labels.filter((l) => l.startsEntry).map((l) => document[l.rowIndex]!.text);

    expect(opens).toEqual([
      'University of Washington Seattle, WA',
      'NIO Inc. Hefei, China',
      'Student Council President',
    ]);
  });

  it('strips the markers a real page draws, by offset', async () => {
    const { rows: document, labels } = await label('caps-headings.pdf');
    const bullets = labels
      .filter((l) => l.role === 'bullet')
      .map((l) => document[l.rowIndex]!.text.slice(l.contentFrom));

    expect(bullets.every((text) => !text.startsWith('-'))).toBe(true);
    expect(bullets[0]).toBe('Built an agent system that cut the backlog by 74%');
  });
});
