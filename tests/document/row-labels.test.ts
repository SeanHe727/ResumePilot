import { describe, expect, it } from 'vitest';

import { PdfExtractor } from '../../src/document/extractors/pdf.js';
import { labelRows } from '../../src/document/row-labels.js';
import { findSectionBoundaries } from '../../src/document/section-boundaries.js';
import type { RowLabel, SectionBoundary, VisualRow } from '../../src/document/types.js';

/**
 * B2: what each row is, and which level it belongs to.
 *
 * The indents these rows are built with are the ones measured off a real
 * resume, because indentation is what carries the distinction: a header sits
 * at the section's left edge, a bullet's marker hangs a point and a half left
 * of its own text, and a wrapped bullet is set nearly eleven points in, flush
 * with the text above it. Font size is flat at 1.00 across all three.
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

/** `owner/role`, with a star on the row that opens an entry. */
function labelled(document: VisualRow[], headed = true): string[] {
  return labelRows(document, wholeBody(document, headed)).map(
    (l) => `${l.owner}/${l.role}${l.startsEntry ? '*' : ''}`,
  );
}

/** An employer, a title line, and two bullets, one of which wraps. */
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
    expect(labelled(onePosition())).toEqual([
      'entry/header*',
      'entry/header',
      'entry/bullet',
      'entry/continuation',
      'entry/bullet',
    ]);
  });

  it('reads a wrapped bullet as the rest of the bullet above it', () => {
    // Set flush with the text of the bullet above, clear of its marker. Read
    // as new entries instead, a nine-bullet position becomes fourteen entries
    // whose employer is half a sentence.
    const wrapped = labelRows(onePosition(), wholeBody(onePosition())).find(
      (l) => l.rowIndex === 4,
    )!;

    expect(wrapped.role).toBe('continuation');
    expect(wrapped.evidence[0]).toMatch(/hanging under the row above/);
  });

  it('reads the indent even where the sentence says the line was finished', () => {
    // The two signals disagree here, and the indent is the one that is right:
    // a bullet can end on a full stop and still run on to a second printed
    // line. Read by punctuation alone this becomes an employer.
    expect(
      labelled(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'NIO Inc. Hefei, China', size: 10.9 },
          { text: '- Built an agent system. It cut the backlog by 74%.', indent: 1.7 },
          { text: 'Triage of 1,000+ signals ran on extracted schemas.', indent: 10.8 },
          { text: '- Designed a role-aware routing layer', indent: 1.7 },
        ]),
      ),
    ).toEqual(['entry/header*', 'entry/bullet', 'entry/continuation', 'entry/bullet']);
  });

  it('falls back to the sentence where the template does not hang its wraps', () => {
    // Not every resume indents a wrapped line. What is left is the judgement a
    // reader makes at a glance: a wrapped line ends wherever the column ran
    // out, a finished one ends on a full stop.
    expect(
      labelled(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'NIO Inc. Hefei, China', size: 10.9 },
          { text: '- Built an agent system that cut the backlog by 74%,', indent: 1.7 },
          { text: 'automating triage of 1,000+ signals per case', indent: 1.7 },
          { text: '- Designed a role-aware routing layer.', indent: 1.7 },
          { text: 'A finished sentence is not a continuation.', indent: 1.7 },
        ]),
      ),
    ).toEqual([
      'entry/header*',
      'entry/bullet',
      'entry/continuation',
      'entry/bullet',
      'entry/info',
    ]);
  });

  it('gives the assembler the offset its words start at, not a marker to strip', () => {
    const document = onePosition();
    const bullets = labelRows(document, wholeBody(document)).filter((l) => l.role === 'bullet');

    expect(bullets.map((l) => document[l.rowIndex]!.text.slice(l.contentFrom))).toEqual([
      'Built an agent system that cut the backlog by 74%',
      'Designed a role-aware routing layer',
    ]);
  });
});

describe('which level a row belongs to', () => {
  it('gives a bullet to the section while no entry is open', () => {
    // A summary can carry bullets of its own. Read as an entry's, they become
    // achievements under a position nobody listed.
    expect(
      labelled(
        rows([
          { text: 'SUMMARY' },
          { text: '- Backend engineer with six years on payment systems', indent: 1.7 },
          { text: '- Measures what shipped, not what was planned', indent: 1.7 },
        ]),
      ),
    ).toEqual(['section/bullet', 'section/bullet']);
  });

  it('gives a bullet to the entry once one is open', () => {
    expect(labelled(onePosition()).slice(2)).toEqual([
      'entry/bullet',
      'entry/continuation',
      'entry/bullet',
    ]);
  });

  it('keeps a section-level bullet a bullet, marker offset and all', () => {
    // Not downgraded to prose for want of an entry to hang on. It is still a
    // bullet, and the assembler is still told where its words begin.
    const document = rows([
      { text: 'SUMMARY' },
      { text: '- Backend engineer with six years on payment systems', indent: 1.7 },
    ]);
    const label = labelRows(document, wholeBody(document))[0]!;

    expect(label.role).toBe('bullet');
    expect(label.owner).toBe('section');
    expect(document[label.rowIndex]!.text.slice(label.contentFrom)).toBe(
      'Backend engineer with six years on payment systems',
    );
  });

  it('hands a continuation the level of the row it carries on from', () => {
    // Both wraps are set the same way. What differs is what they are the rest
    // of, and a continuation that guessed its own level could put half a
    // sentence in a different place from the half above it.
    expect(
      labelled(
        rows([
          { text: 'SUMMARY' },
          { text: '- Backend engineer with six years on payment systems,', indent: 1.7 },
          { text: 'measuring what shipped rather than what was planned', indent: 10.8 },
          { text: 'NIO Inc. Hefei, China', size: 10.9 },
          { text: '- Built an agent system that cut the backlog by 74%,', indent: 1.7 },
          { text: 'automating triage of 1,000+ signals per case', indent: 10.8 },
        ]),
      ),
    ).toEqual([
      'section/bullet',
      'section/continuation',
      'entry/header*',
      'entry/bullet',
      'entry/continuation',
    ]);
  });

  it('gives the block above the first heading to the section, whatever is in it', () => {
    // The name is the largest, shortest row on the page. It is a masthead, not
    // a position, and the block nobody introduced introduces no entries.
    expect(
      labelled(
        rows([
          { text: 'Sean He', size: 17 },
          { text: '+1 555 0100 | sean@example.com' },
          { text: '- github.com/sean', indent: 1.7 },
        ]),
        false,
      ),
    ).toEqual(['section/info', 'section/info', 'section/bullet']);
  });

  it('reads a skills list as the section speaking', () => {
    expect(
      labelled(
        rows([
          { text: 'SKILLS' },
          { text: 'Programming: Python, TypeScript, SQL, Bash, Git' },
          { text: 'LLM & Agents: PyTorch, LangGraph, RAG, MCP' },
        ]),
      ),
    ).toEqual(['section/info', 'section/info']);
  });
});

describe('where one entry ends and the next begins', () => {
  it('opens an entry on a header set apart and set off by air', () => {
    // Education is the usual case: two degrees, no bullets under either, so
    // the only thing saying where the second starts is that its school is set
    // apart *and* stands further from the line above it than the degree line
    // stands from its own school. Measured on two resumes the two gaps are
    // 1.39 and 1.13; written wider here so that the median gap of five rows
    // still lands on the body rather than between the two.
    expect(
      labelled(
        rows([
          { text: 'EDUCATION' },
          { text: 'A University Seattle, WA', size: 10.9, gap: 2 },
          { text: 'M.S. in Engineering  2025 - 2027' },
          { text: 'B University Nanjing, China', size: 10.9, gap: 2 },
          { text: 'B.S. in Engineering  2021 - 2025' },
          { text: 'Thesis on distributed consensus' },
        ]),
      ),
    ).toEqual([
      'entry/header*',
      'entry/header',
      'entry/header*',
      'entry/header',
      'entry/header',
    ]);
  });

  it('keeps an employer and its job title in one entry, set alike or not', () => {
    // Plenty of templates set both the same size and the same weight. Read as
    // two emphasized rows, one position becomes two and its bullets go to the
    // second. What says they are one header is that no more air separates them
    // than separates any two lines.
    expect(
      labelled(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'Mobility Systems Company', size: 10.9, bold: true, gap: 1.5 },
          { text: 'Machine Learning Engineering Intern', size: 10.9, bold: true, gap: 1.0 },
          { text: '- Built an industrial-diagnostics branch of an inspection system', indent: 1.7 },
          { text: '- Designed a role-aware routing layer for three specialists', indent: 1.7 },
        ]),
      ),
    ).toEqual(['entry/header*', 'entry/header', 'entry/bullet', 'entry/bullet']);
  });

  it('measures the break against the air this header itself runs on', () => {
    // A header set generously — employer and title a line and a half apart —
    // would clear a fixed threshold on its own and split in two. What a later
    // row has to beat is this header's own spacing, and the row directly under
    // an opener never breaks the block, because that gap is the one being
    // learned from.
    expect(
      labelled(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'Mobility Systems Company', size: 10.9, bold: true, gap: 2 },
          { text: 'Machine Learning Engineering Intern', size: 10.9, bold: true, gap: 1.5 },
          { text: 'Metro City, Country', size: 10.9, bold: true, gap: 1.3 },
          { text: '- Built an industrial-diagnostics branch of an inspection system', indent: 1.7 },
          { text: '- Designed a role-aware routing layer for three specialists', indent: 1.7 },
          { text: '- Improved claim correctness by 7% over the base model', indent: 1.7 },
          { text: '- Applied GRPO with grouped multi-step tool-use rollouts', indent: 1.7 },
        ]),
      ),
    ).toEqual([
      'entry/header*',
      'entry/header',
      'entry/header',
      'entry/bullet',
      'entry/bullet',
      'entry/bullet',
      'entry/bullet',
    ]);
  });

  it('still needs more than an ordinary line, however tightly the header is set', () => {
    // A header whose own rows sit closer together than the body does would
    // otherwise be broken by any ordinary line beneath it.
    expect(
      labelled(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'Mobility Systems Company', size: 10.9, bold: true, gap: 2 },
          { text: 'Machine Learning Engineering Intern', size: 10.9, bold: true, gap: 0.8 },
          { text: 'Metro City, Country', size: 10.9, bold: true },
          { text: '- Built an industrial-diagnostics branch of an inspection system', indent: 1.7 },
          { text: '- Designed a role-aware routing layer for three specialists', indent: 1.7 },
          { text: '- Improved claim correctness by 7% over the base model', indent: 1.7 },
          { text: '- Applied GRPO with grouped multi-step tool-use rollouts', indent: 1.7 },
        ]),
      ).slice(0, 3),
    ).toEqual(['entry/header*', 'entry/header', 'entry/header']);
  });

  it('opens on an emphasized row once the bullets have closed the entry', () => {
    expect(
      labelled(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'Mobility Systems Company', size: 10.9, bold: true, gap: 1.5 },
          { text: 'Machine Learning Engineering Intern', size: 10.9, bold: true, gap: 1.0 },
          { text: '- Built an industrial-diagnostics branch of an inspection system', indent: 1.7 },
          { text: 'Cloud Systems Capstone', size: 10.9, bold: true, gap: 1.0 },
          { text: '- Enabled quantization-aware recovery through LoRA distillation', indent: 1.7 },
        ]),
      ),
    ).toEqual(['entry/header*', 'entry/header', 'entry/bullet', 'entry/header*', 'entry/bullet']);
  });

  it('opens on the strongest header in the section, not on every emphasized row', () => {
    // Measured once weight could be read at all: this template sets the
    // employer bold at one size and the job title bold at another, and
    // emphasis alone opened an entry on each. Two positions became four, with
    // their bullets split between them.
    expect(
      labelled(
        rows([
          { text: 'EXPERIENCE' },
          { text: 'Mobility Systems Company Metro City', size: 10.9, bold: true },
          { text: 'Machine Learning Engineering Intern', bold: true },
          { text: '- Built an industrial-diagnostics branch of an inspection system', indent: 1.7 },
          { text: 'Cloud Systems Capstone Metro City', size: 10.9, bold: true },
          { text: 'Machine Learning Engineer, Edge AI Program', bold: true },
          { text: '- Enabled quantization-aware recovery through LoRA distillation', indent: 1.7 },
        ]),
      ),
    ).toEqual([
      'entry/header*',
      'entry/header',
      'entry/bullet',
      'entry/header*',
      'entry/header',
      'entry/bullet',
    ]);
  });

  it('opens on every header where the section sets them all alike', () => {
    // The other half of the same rule: a section whose entries are one line
    // each has nothing stronger to rank against, and each of them opens one.
    expect(
      labelled(
        rows([
          { text: 'EDUCATION' },
          { text: 'A University, M.S. in Engineering', size: 10.9, bold: true },
          { text: '- GPA 3.9/4.0', indent: 1.7 },
          { text: 'B University, B.S. in Engineering', size: 10.9, bold: true },
          { text: '- GPA 3.8/4.0', indent: 1.7 },
        ]),
      ),
    ).toEqual(['entry/header*', 'entry/bullet', 'entry/header*', 'entry/bullet']);
  });

  it('opens an entry on the first row after the previous one closed with bullets', () => {
    expect(
      labelled(
        rows([
          { text: 'PROJECTS' },
          { text: 'ResumePilot | Owner  Aug 2026 - Present' },
          { text: 'github.com/sean/resumepilot' },
          { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
          { text: 'GPT-Researcher | Contributor  Feb 2026 - Jul 2026' },
          { text: '- Built a unified evaluation harness', indent: 1.7 },
        ]),
      ),
    ).toEqual([
      'entry/header*',
      'entry/info',
      'entry/bullet',
      'entry/header*',
      'entry/bullet',
    ]);
  });

  it('opens an entry on dates where nothing on the page is set apart', () => {
    const document = rows([
      { text: 'PROJECTS' },
      { text: 'ResumePilot | Owner  Aug 2026 - Present' },
      { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
    ]);

    expect(labelRows(document, wholeBody(document))[0]!.evidence[0]).toBe(
      'carries a date range, with no entry open to belong to',
    );
  });

  it('says which of the three opened each entry', () => {
    // The reason was being overwritten before it was read: the first header in
    // a section reported itself as the first row after a bullet.
    const document = rows([
      { text: 'EXPERIENCE' },
      { text: 'NIO Inc. Hefei, China', size: 10.9 },
      { text: '- Built an agent system that cut the backlog by 74%', indent: 1.7 },
      { text: 'Amazon x UW  Dec 2025 - Jun 2026' },
    ]);

    expect(
      labelRows(document, wholeBody(document))
        .filter((l) => l.startsEntry)
        .map((l) => l.evidence[0]),
    ).toEqual([
      'set apart from the body around it',
      'carries a date range, after the previous entry closed with bullets',
    ]);
  });
});

describe('inside an entry, what names it and what it says', () => {
  /** An employer with two bullets, and one more row to place after them. */
  function afterBullets(trailing: Spec): VisualRow[] {
    return rows([
      { text: 'EXPERIENCE' },
      { text: 'NIO Inc. Hefei, China', size: 10.9 },
      { text: 'AI Research Intern  Oct 2024 - May 2025' },
      { text: '- Built an agent system that cut the backlog by 74%', indent: 1.7 },
      { text: '- Designed a role-aware routing layer', indent: 1.7 },
      trailing,
    ]);
  }

  it('reads a bare link under a header as the entry describing itself', () => {
    const document = rows([
      { text: 'PROJECTS' },
      { text: 'ResumePilot | Owner', size: 10.9 },
      { text: 'github.com/sean/resumepilot' },
      { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
      { text: '- Fixed a nested-pool deadlock in the runtime', indent: 1.7 },
    ]);
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document).slice(0, 2)).toEqual(['entry/header*', 'entry/info']);
    expect(labels[1]!.evidence[0]).toMatch(/a link rather than a name/);
  });

  it('reads a finished sentence under a header as the entry describing itself', () => {
    const document = rows([
      { text: 'PROJECTS' },
      { text: 'ResumePilot | Owner', size: 10.9 },
      { text: 'A resume diagnosis agent built on a ten-layer harness.' },
      { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
      { text: '- Fixed a nested-pool deadlock in the runtime', indent: 1.7 },
    ]);
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document).slice(0, 2)).toEqual(['entry/header*', 'entry/info']);
    expect(labels[1]!.evidence[0]).toMatch(/a finished sentence rather than a label/);
  });

  it('reads a list of technologies under a header as the entry describing itself', () => {
    const document = rows([
      { text: 'PROJECTS' },
      { text: 'ResumePilot | Owner', size: 10.9 },
      { text: 'TypeScript, SQLite, agent runtimes' },
      { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
      { text: '- Fixed a nested-pool deadlock in the runtime', indent: 1.7 },
    ]);
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document).slice(0, 2)).toEqual(['entry/header*', 'entry/info']);
    expect(labels[1]!.evidence[0]).toMatch(/a list rather than a name/);
  });

  it('keeps a dated row a header, because dates name a position too', () => {
    const document = rows([
      { text: 'EXPERIENCE' },
      { text: 'NIO Inc. Hefei, China', size: 10.9 },
      { text: 'AI Research Intern  Oct 2024 - May 2025' },
      { text: '- Built an agent system that cut the backlog by 74%', indent: 1.7 },
      { text: '- Designed a role-aware routing layer', indent: 1.7 },
    ]);
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document).slice(0, 2)).toEqual(['entry/header*', 'entry/header']);
    expect(labels[1]!.evidence[0]).toMatch(/dates the entry above it/);
  });

  it('keeps an unrecognised row a header while the header is still open', () => {
    // Filing a company name under description would lose the entry its name;
    // a stray line among the header lines costs a reader nothing. The doubt
    // goes into the confidence rather than into a guess.
    const document = rows([
      { text: 'EXPERIENCE' },
      { text: 'NIO Inc. Hefei, China', size: 10.9 },
      { text: 'Intelligent Detection Team' },
      { text: '- Built an agent system that cut the backlog by 74%', indent: 1.7 },
      { text: '- Designed a role-aware routing layer', indent: 1.7 },
    ]);
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document).slice(0, 2)).toEqual(['entry/header*', 'entry/header']);
    expect(labels[1]!.confidence).toBeLessThan(0.5);
    expect(labels[1]!.evidence[0]).toMatch(/nothing says whether this names the entry/);
  });

  it('keeps a plain row after the bullets inside the entry they belong to', () => {
    // Two projects under one employer, the second named without dates or
    // emphasis. Opening an entry on it would take the first one's bullets
    // away from the position that earned them.
    const document = afterBullets({ text: 'Internal tooling refresh' });
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document).at(-1)).toBe('entry/info');
    expect(labels.at(-1)!.startsEntry).toBeUndefined();
    expect(labels.at(-1)!.evidence[0]).toMatch(/header closed when its bullets began/);
  });

  it('opens a new entry after the bullets on dates', () => {
    expect(labelled(afterBullets({ text: 'Amazon x UW  Dec 2025 - Jun 2026' })).at(-1)).toBe(
      'entry/header*',
    );
  });

  it('opens a new entry after the bullets on a header set apart', () => {
    expect(labelled(afterBullets({ text: 'Amazon x UW Seattle, WA', size: 10.9 })).at(-1)).toBe(
      'entry/header*',
    );
  });
});

describe('a row that is a date and nothing else', () => {
  // A resume puts the title left and the dates right of one printed line. Read
  // as two rows, the date opened an entry of its own: the project's name filed
  // with no work under it and its dates holding all of it. Rebuilding rows by
  // geometry made that unreachable from a PDF; nothing stops a template
  // setting a date on a line by itself.

  it('carries on the header of an entry that is already open', () => {
    const document = rows([
      { text: 'PROJECTS' },
      { text: 'ResumePilot | Owner', size: 10.9 },
      { text: 'Aug 2026 - Present', size: 11 },
      { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
      { text: '- Fixed a nested-pool deadlock in the runtime', indent: 1.7 },
      { text: '- Kept working context under 9.6K tokens', indent: 1.7 },
    ]);
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document)).toEqual([
      'entry/header*',
      'entry/header',
      'entry/bullet',
      'entry/bullet',
      'entry/bullet',
    ]);
    expect(labels[1]!.evidence[0]).toMatch(/carries on the header above/);
  });

  it('carries on the header even where bullets have closed that entry', () => {
    // `startsEntry` would otherwise fire on the first row after bullets, and
    // the dates would take the bullets away from the project they describe.
    const document = rows([
      { text: 'PROJECTS' },
      { text: 'ResumePilot | Owner', size: 10.9 },
      { text: '- Improved defect localization from 27% to 73%', indent: 1.7 },
      { text: '- Fixed a nested-pool deadlock in the runtime', indent: 1.7 },
      { text: 'Aug 2026 - Present' },
    ]);
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document)).toEqual([
      'entry/header*',
      'entry/bullet',
      'entry/bullet',
      'entry/header',
    ]);
    expect(labels.at(-1)!.startsEntry).toBeUndefined();
  });

  it('belongs to the section where no entry is open to date', () => {
    // Including as the first row of a section, where every other rule would
    // have read it as the start of something.
    const document = rows([
      { text: 'AWARDS' },
      { text: '2023 - 2024' },
      { text: "Dean's List, University of Washington" },
    ]);
    const labels = labelRows(document, wholeBody(document));

    expect(labelled(document)).toEqual(['section/info', 'section/info']);
    expect(labels[0]!.startsEntry).toBeUndefined();
    expect(labels[0]!.evidence[0]).toMatch(/no entry open for it to date/);
  });

  it('reports a date with nothing to date low enough to look at', () => {
    const document = rows([{ text: 'AWARDS' }, { text: '2023 - 2024' }]);
    const labels = labelRows(document, wholeBody(document));

    expect(labels[0]!.confidence).toBeLessThan(0.5);
  });
});

describe('what a label says about itself', () => {
  it('labels nothing outside the ranges it was given', () => {
    // A cut this pipeline made covers the document. One handed in from
    // elsewhere may not, and labelling what nobody asked about would hide the
    // disagreement rather than leave it to be found.
    const document = onePosition();
    const labels = labelRows(document, [
      { index: 0, headingRow: 0, fromRow: 1, toRow: 3, confidence: 0.95, evidence: [] },
    ]);

    expect(labels.map((l) => l.rowIndex)).toEqual([1, 2]);
  });

  it('reports a marker higher than a level read from position', () => {
    const labels = labelRows(onePosition(), wholeBody(onePosition()));
    const byRole = (role: string): RowLabel => labels.find((l) => l.role === role)!;

    expect(byRole('bullet').confidence).toBeGreaterThan(byRole('header').confidence);
    expect(byRole('bullet').evidence[0]).toBe('opens with a bullet marker');
  });
});

describe('the rows a PDF actually produces', () => {
  const FIXTURE = (name: string): string => `tests/fixtures/${name}`;

  async function read(name: string): Promise<{ rows: VisualRow[]; labels: RowLabel[] }> {
    const extracted = await new PdfExtractor().extract(FIXTURE(name));
    const document = extracted.rows!;
    return { rows: document, labels: labelRows(document, findSectionBoundaries(document)) };
  }

  it('reads a page whose wraps hang under the text above them', async () => {
    const { rows: document, labels } = await read('hanging-indent.pdf');
    const seen = labels.map(
      (l) => `${l.owner}/${l.role}${l.startsEntry ? '*' : ''}  ${document[l.rowIndex]!.text}`,
    );

    expect(seen).toEqual([
      'section/info  Sean He',
      'section/info  +1 555 0100 | sean@example.com',
      'section/bullet  - Backend engineer with six years on payment systems,',
      'section/continuation  measuring what shipped rather than what was planned.',
      'entry/header*  NIO Inc. Hefei, China',
      'entry/header  AI Research Intern Oct 2024 - May 2025',
      'entry/bullet  - Built an agent system that cut the inspection backlog by 74%,',
      'entry/continuation  automating triage of 1,000+ signals per case.',
      'entry/bullet  - Designed a role-aware routing layer for four specialists',
      'entry/header*  ResumePilot | Owner | TypeScript',
      'entry/bullet  - Improved planted-defect localization from 27% to 73%',
      'entry/header  Aug 2026 - Present',
      'section/info  2023 - 2024',
      "section/info  Dean’s List, University of Washington",
    ]);
  });

  it('labels every row of a real page, and only once', async () => {
    const { rows: document, labels } = await read('caps-headings.pdf');
    const headings = findSectionBoundaries(document)
      .map((b) => b.headingRow)
      .filter((r): r is number => r !== undefined);

    const covered = [...labels.map((l) => l.rowIndex), ...headings].sort((a, b) => a - b);
    expect(covered).toEqual(document.map((_, i) => i));
  });

  it('keeps an all-capitals job title in the header of its entry', async () => {
    const { rows: document, labels } = await read('caps-headings.pdf');
    const title = labels.find((l) => document[l.rowIndex]!.text === 'SENIOR ENGINEER')!;

    expect(`${title.owner}/${title.role}`).toBe('entry/header');
    expect(title.startsEntry).toBeUndefined();
  });

  it('opens exactly one entry per position on a real page', async () => {
    const { rows: document, labels } = await read('caps-headings.pdf');

    expect(labels.filter((l) => l.startsEntry).map((l) => document[l.rowIndex]!.text)).toEqual([
      'University of Washington Seattle, WA',
      'NIO Inc. Hefei, China',
      'Student Council President',
    ]);
  });

  it('strips the markers a real page draws, by offset', async () => {
    const { rows: document, labels } = await read('hanging-indent.pdf');
    const bullets = labels
      .filter((l) => l.role === 'bullet')
      .map((l) => document[l.rowIndex]!.text.slice(l.contentFrom));

    expect(bullets.every((text) => !text.startsWith('-'))).toBe(true);
    expect(bullets[0]).toBe('Backend engineer with six years on payment systems,');
  });
});
