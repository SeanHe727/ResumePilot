import type { QueryEngine } from '../query-engine/types.js';
import { isBulletLine, withoutContactDetails } from './vocabulary.js';
import type { RowLabel, SectionBoundary, VisualRow } from './types.js';

/**
 * Who owns which row, decided by a model reading the whole résumé.
 *
 * The rules in `section-boundaries.ts` and `row-labels.ts` decide this from
 * type, air and vocabulary, and the thing they cannot do is read. Measured on
 * one real résumé: its project titles are body size, not bold, and carry a
 * masked date, so they are typographically identical to the line wrapping a
 * bullet above them — and six bullets ended up belonging to no entry, which no
 * review can address. Every rule added to close that gap closed it for one
 * shape and left the next one open.
 *
 * So the grouping is asked of a model, and only the grouping. It returns row
 * numbers, never text: the words on the page are already correct, and a stage
 * that could rewrite them would be a stage that could quietly invent a
 * qualification. Everything downstream — slicing markers, joining wrapped
 * lines, minting ids, computing spans, reconciling — is the same code the rules
 * feed, because the answer is converted into the two arrays that code already
 * takes.
 *
 * The rules stay as the fallback. A model that fails twice, or answers with
 * something that does not account for every row, leaves a document assembled
 * the old way and an anomaly saying so.
 */
export interface GroupedEntry {
  /** What the entry is called. Employer and title may be two rows. */
  headerRowIds: number[];
  /** What the entry says about itself: a link, a stack, a line of prose. */
  infoRowIds?: number[];
  /** Its achievements, including the rows that are only wrapped remainders. */
  bulletRowIds?: number[];
}

export interface GroupedSection {
  /** The row that names the section. Absent for the block above the first. */
  headingRowIds?: number[];
  entries?: GroupedEntry[];
  /** Rows the section keeps for itself: a skills list, a summary. */
  looseRowIds?: number[];
}

export interface Grouped {
  sections: GroupedSection[];
}

/** Every row of a grouping, in the order it claimed them. */
function claimed(section: GroupedSection): number[] {
  return [
    ...(section.headingRowIds ?? []),
    ...(section.entries ?? []).flatMap((entry) => [
      ...entry.headerRowIds,
      ...(entry.infoRowIds ?? []),
      ...(entry.bulletRowIds ?? []),
    ]),
    ...(section.looseRowIds ?? []),
  ];
}

export type Checked = { ok: true; grouped: Grouped } | { ok: false; because: string };

/**
 * What the answer has to satisfy before anything is built from it.
 *
 * Each of these is a way a plausible-looking answer silently loses part of a
 * résumé: a row claimed twice is a line that appears in two places, a row
 * claimed by nobody is a line that vanishes, and a reordered list is a
 * paragraph resequenced under a heading it does not belong to. None of them
 * would raise an error anywhere downstream.
 */
export function checkGrouping(
  raw: unknown,
  rows: readonly VisualRow[],
  headingRows: readonly number[] = [],
): Checked {
  if (!raw || typeof raw !== 'object' || !Array.isArray((raw as Grouped).sections)) {
    return { ok: false, because: 'no sections array' };
  }
  const grouped = raw as Grouped;

  // Numbers only. The shape has no text in it, so a string anywhere is either a
  // rewritten line or a misunderstanding of the task, and both are refusals.
  const flat = grouped.sections.flatMap(claimed);
  if (flat.some((id) => typeof id !== 'number' || !Number.isInteger(id))) {
    return { ok: false, because: 'a row id is not a whole number' };
  }
  if (flat.some((id) => id < 0 || id >= rows.length)) {
    return { ok: false, because: 'a row id is not one of the rows given' };
  }

  const seen = new Set<number>();
  for (const id of flat) {
    if (seen.has(id)) return { ok: false, because: `row ${id} is claimed twice` };
    seen.add(id);
  }
  if (seen.size !== rows.length) {
    const missing = [...rows.keys()].filter((i) => !seen.has(i));
    return { ok: false, because: `row ${missing[0]} is claimed by nobody` };
  }

  // Order, within every list and across the sections. The page's order is the
  // only thing that says which bullet follows which heading.
  const ascending = (ids: number[]): boolean => ids.every((id, i) => i === 0 || id > ids[i - 1]!);
  for (const section of grouped.sections) {
    if (!ascending(section.headingRowIds ?? [])) return { ok: false, because: 'a heading is out of order' };
    if (!ascending(section.looseRowIds ?? [])) return { ok: false, because: 'a loose row is out of order' };
    for (const entry of section.entries ?? []) {
      if (!ascending(entry.headerRowIds)) return { ok: false, because: 'a header is out of order' };
      if (!ascending(entry.infoRowIds ?? [])) return { ok: false, because: 'an info row is out of order' };
      if (!ascending(entry.bulletRowIds ?? [])) return { ok: false, because: 'a bullet is out of order' };
    }
    // Contiguous, because the assembler slices a section out of the rows by
    // range: a section whose rows are interleaved with another's cannot be cut.
    const own = claimed(section).sort((a, b) => a - b);
    if (own.length > 0 && own[own.length - 1]! - own[0]! !== own.length - 1) {
      return { ok: false, because: 'a section does not hold a contiguous run of rows' };
    }
    if (!ascending(own)) return { ok: false, because: 'a section is out of order' };
    if ((section.entries ?? []).some((entry) => entry.headerRowIds.length === 0)) {
      return { ok: false, because: 'an entry has no header' };
    }
  }

  const firsts = grouped.sections.map((s) => claimed(s).sort((a, b) => a - b)[0] ?? -1);
  if (!ascending(firsts.filter((f) => f >= 0))) {
    return { ok: false, because: 'the sections are out of order' };
  }

  // A heading the vocabulary named has to open a section.
  //
  // This is the one judgement not being asked of the model — the named rows are
  // given to it — so an answer that folds one into the block above is not an
  // answer to the question. It has to be a check rather than a hope: measured
  // twice on the same document, the same prompt kept a `SUMMARY` heading once
  // and swallowed it the next time, and losing a section satisfies every other
  // rule here.
  const opened = new Set(grouped.sections.flatMap((section) => section.headingRowIds ?? []));
  const folded = headingRows.find((row) => !opened.has(row));
  if (folded !== undefined) {
    return { ok: false, because: `row ${folded} names a section and did not open one` };
  }

  return { ok: true, grouped };
}

/**
 * The grouping, as the two arrays the assembler has always taken.
 *
 * A converter rather than a second assembler. `assemble` and `checkIntegrity`
 * are five hundred lines with a mutation test behind every guard, and they read
 * boundaries and labels; giving them those means a model-grouped document and a
 * rule-grouped one are built, reconciled and compared by exactly the same code.
 *
 * Two things stay with the code rather than being asked of the model. A bullet's
 * wrapped remainder is a `continuation`, and which rows those are is decided by
 * whether the line carries a marker — mechanical, and already the rule
 * elsewhere. And `contentFrom` is where the words start past that marker, which
 * the assembler needs so it can slice rather than match.
 */
export function toArrays(
  grouped: Grouped,
  rows: readonly VisualRow[],
): { boundaries: SectionBoundary[]; labels: RowLabel[] } {
  const boundaries: SectionBoundary[] = [];
  const labels: RowLabel[] = [];
  const evidence = ['grouped by a model reading the whole résumé'];

  const label = (
    rowIndex: number,
    role: RowLabel['role'],
    owner: RowLabel['owner'],
    extra: Partial<RowLabel> = {},
  ): void => {
    const marker = MARKER.exec(rows[rowIndex]?.text ?? '')?.[0]?.length;
    labels.push({
      rowIndex,
      role,
      owner,
      confidence: 1,
      evidence,
      ...(marker !== undefined ? { contentFrom: marker } : {}),
      ...extra,
    });
  };

  grouped.sections.forEach((section, index) => {
    const own = claimed(section).sort((a, b) => a - b);
    if (own.length === 0) return;

    const headingRow = section.headingRowIds?.[0];
    boundaries.push({
      index,
      ...(headingRow !== undefined ? { headingRow } : {}),
      // Where the body starts: past the heading, or at the first row when the
      // block has none.
      fromRow: headingRow !== undefined ? headingRow + 1 : own[0]!,
      toRow: own[own.length - 1]! + 1,
      confidence: 1,
      evidence,
    });

    for (const entry of section.entries ?? []) {
      entry.headerRowIds.forEach((rowIndex, i) => {
        label(rowIndex, 'header', 'entry', i === 0 ? { startsEntry: true } : {});
      });
      for (const rowIndex of entry.infoRowIds ?? []) label(rowIndex, 'info', 'entry');
      for (const rowIndex of entry.bulletRowIds ?? []) {
        // A marker makes it a bullet; without one it is the rest of the bullet
        // above, and the assembler joins it on.
        label(rowIndex, isBulletLine(rows[rowIndex]?.text ?? '') ? 'bullet' : 'continuation', 'entry');
      }
    }
    for (const rowIndex of section.looseRowIds ?? []) {
      label(rowIndex, isBulletLine(rows[rowIndex]?.text ?? '') ? 'bullet' : 'info', 'section');
    }
  });

  labels.sort((a, b) => a.rowIndex - b.rowIndex);
  return { boundaries, labels };
}

/** The same marker the rules use, so both paths slice a line the same way. */
const MARKER = /^\s*([-*+•‧◦·▪▫●○–—]|\d{1,2}[.)])\s+/;

/**
 * What the model is shown: every row, numbered, with the little that geometry
 * can tell about it.
 *
 * The features are the same ones the rules read, and they are given rather than
 * interpreted: a model told "row 31 is a header" has been handed the answer,
 * and a model shown "row 31 is body size, not bold, two line spacings below the
 * row above" can weigh that against what the words say.
 */
export function groupingPrompt(
  rows: readonly VisualRow[],
  bodySize: number,
  headingRows: readonly number[] = [],
): string {
  const named = new Set(headingRows);
  // Everything above the first named heading is the name and the ways to reach
  // the candidate, and grouping needs none of it: the answer is row numbers, and
  // the block above the first heading has one place it can go. Every other
  // prompt leaves this block behind by skipping the contact section, which does
  // not exist yet here, so the rows are withheld by position instead. Measured:
  // without this, the name, phone, email and profile links of every résumé
  // reached the provider on the first call of every session.
  const firstNamed = headingRows.length > 0 ? Math.min(...headingRows) : 0;
  const lines = rows.map((row, i) => {
    const size = (row.dominant.fontSize / bodySize).toFixed(2);
    const above = rows[i - 1];
    const gap = above && above.page === row.page ? ((above.y - row.y) / bodySize).toFixed(1) : 'top';
    // Marked where the vocabulary recognises the word. Measured: without this
    // the model folded a `SUMMARY` heading and its bullet into the block above
    // the first heading and lost the section — an answer that satisfied every
    // check, because losing a section is a judgement rather than an accounting
    // error. Finding a heading by its word is the one part of this the rules do
    // better, so they are given rather than re-decided.
    const heading = named.has(i) ? ' heading=named' : '';
    const text = i < firstNamed ? '[withheld]' : withoutContactDetails(row.text);
    return `[${i}] size=${size} ${row.dominant.bold ? 'bold' : 'plain'} gap=${gap}${heading} :: ${text}`;
  });

  return `Here is every line of a résumé, in the order it appears, with what the page can say about it.

${lines.join('\n')}

Group them. Return JSON of exactly this shape, and nothing else:

{
  "sections": [
    {
      "headingRowIds": [8],
      "entries": [
        { "headerRowIds": [9, 10], "infoRowIds": [11], "bulletRowIds": [12, 13] }
      ],
      "looseRowIds": []
    }
  ]
}

Rules, all of them mechanical:
- Every row number from 0 to ${rows.length - 1} appears exactly once, somewhere.
- Return numbers only. Never any of the text: it is already correct.
- Keep every list in ascending order, and the sections in page order.
- A section's rows are one unbroken run.
- "headingRowIds" is the row that names the section — EXPERIENCE, PROJECTS. The
  block above the first heading has none: leave it out for that one.
- A row shown as [withheld] is the top of the page, kept private. It belongs to
  the block above the first heading, as a loose row.
- A row marked \`heading=named\` is a section heading by its word. It opens a
  section; it never belongs to the one above it. Rows the mark misses can still
  be headings — judge those yourself.
- An entry is one position, one degree, one project. "headerRowIds" is what it is
  called, which can run to two rows: employer on one, title and dates on the next.
- "infoRowIds" is what the entry says about itself rather than what it achieved —
  a repository link, a line of technologies.
- "bulletRowIds" is its achievements. Include the rows that are only the rest of
  a bullet that wrapped; they belong to the same entry.
- "looseRowIds" is for a section that holds lines of its own rather than entries:
  a skills list, a summary paragraph, a list of awards or publications. An entry
  is a position, a degree or a project — something with work under it. A line
  that names an award and its year is a line the section holds, not an entry with
  nothing in it.

What to weigh:
- A heading inside a position — "Selected Projects" under a job — is part of that
  position, not a new entry, even when bullets follow it.
- A project title with no dates and no emphasis is still a title if bullets belong
  to it.
- A position that continues onto the next page is still one entry.
- Company, title, dates and location that describe one job belong to one entry.`;
}

/**
 * One call, one retry, then nothing.
 *
 * Nothing rather than a guess: the caller falls back to the rules and records
 * that it did. A second attempt is worth the money because the failures this
 * sees are formatting slips — a missing row, a list out of order — and they do
 * not usually repeat. A third would be paying to find out the same thing twice.
 */
export async function groupWithModel(
  rows: readonly VisualRow[],
  bodySize: number,
  engine: QueryEngine,
  abortSignal?: AbortSignal,
  headingRows: readonly number[] = [],
): Promise<{ boundaries: SectionBoundary[]; labels: RowLabel[]; because?: string }> {
  const prompt = groupingPrompt(rows, bodySize, headingRows);
  let because = 'the model returned nothing';

  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await engine.query({
      task: 'label_rows',
      messages: [{ role: 'user', content: prompt }],
      jsonMode: true,
      ...(abortSignal ? { abortSignal } : {}),
    });

    let parsed: unknown;
    try {
      parsed = JSON.parse(response.content ?? '');
    } catch {
      because = 'the answer was not JSON';
      continue;
    }

    const checked = checkGrouping(parsed, rows, headingRows);
    if (checked.ok) return toArrays(checked.grouped, rows);
    because = checked.because;
  }

  return { boundaries: [], labels: [], because };
}
