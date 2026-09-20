/**
 * B3 — folding labelled rows into sections and entries.
 *
 * The one stage with no judgement in it. Every decision was taken upstream: B1
 * said where the sections start, B2 said what each row is and which level it
 * belongs to, and this reads those answers and nothing else. It does not look
 * at font size, does not match text against patterns, and does not reconsider
 * an owner — a row goes where its label says, and if that is wrong the label
 * is wrong and the integrity pass will say which one.
 *
 * That is what lets the rules and a model drive the same assembler. Both
 * produce `SectionBoundary[]` and `RowLabel[]`; swap one for the other and
 * nothing here changes, which is only true while nothing here decides
 * anything.
 *
 * `kind` is not set. Naming a section is B4's, from the assembled shape, and a
 * stage that could both place a row and name its section would be deciding the
 * same thing twice.
 */
import type { Bullet, ResumeEntry, ResumeSection, SectionBullet, SourceSpan } from '../domain.js';
import type { LabelledRow, RowLabel, SectionBoundary } from './types.js';

/** A section under construction, before ids and spans are fixed to it. */
interface OpenSection {
  heading: string;
  headingSpan: SourceSpan | undefined;
  infoLines: string[];
  bullets: Array<{ text: string; span: SourceSpan }>;
  entries: OpenEntry[];
  span: SourceSpan | null;
}

interface OpenEntry {
  headerLines: string[];
  infoLines: string[];
  bullets: Array<{ text: string; span: SourceSpan }>;
  span: SourceSpan;
}

/**
 * Where the last row went, so the row after it can be appended to the same
 * place. A continuation carries the level it belongs to but not the list, and
 * the difference between the tail of an entry's bullets and the tail of a
 * section's is exactly what would be lost by guessing.
 */
type Sink =
  | { at: 'section-info' }
  | { at: 'section-bullet' }
  | { at: 'entry-header' }
  | { at: 'entry-info' }
  | { at: 'entry-bullet' }
  | { at: 'nothing' };

export function assemble(
  rows: LabelledRow[],
  boundaries: SectionBoundary[],
  labels: RowLabel[],
): ResumeSection[] {
  const byRow = new Map(labels.map((label) => [label.rowIndex, label]));

  return boundaries.map((boundary, index) => {
    const headingRow = boundary.headingRow !== undefined ? rows[boundary.headingRow] : undefined;
    const open: OpenSection = {
      heading: headingRow?.text.trim() ?? '',
      headingSpan: headingRow?.span,
      infoLines: [],
      bullets: [],
      entries: [],
      span: headingRow ? { ...headingRow.span } : null,
    };

    let sink: Sink = { at: 'nothing' };

    for (let i = boundary.fromRow; i < boundary.toRow; i++) {
      const row = rows[i];
      const label = byRow.get(i);
      // A row nobody labelled is a row nobody has placed. Dropping it silently
      // is the failure this pipeline exists to make visible, so it is left out
      // and the coverage check downstream reports it.
      if (!row || !label) continue;

      sink = place(open, row, label, sink);
      open.span = widen(open.span, row.span);
    }

    return close(open, index, boundary);
  });
}

/** Appends one labelled row, and says where it went. */
function place(open: OpenSection, row: LabelledRow, label: RowLabel, sink: Sink): Sink {
  const text = row.text.slice(label.contentFrom ?? 0).trim();

  if (label.role === 'continuation') {
    appendTo(open, sink, text, row.span);
    return sink;
  }

  if (label.owner === 'section') {
    if (label.role === 'bullet') {
      open.bullets.push({ text, span: contentSpan(row.span, label.contentFrom) });
      return { at: 'section-bullet' };
    }
    open.infoLines.push(text);
    return { at: 'section-info' };
  }

  // An entry-owned row with no entry open cannot come from the rules, which
  // only own a row to an entry they have opened. A model's labels can say it,
  // and the choice is between losing the row and opening an entry it never
  // named. The row is kept; the entry with no header of its own is what the
  // integrity pass is for.
  if (label.role === 'header' && label.startsEntry === true) open.entries.push(newEntry(row.span));
  const entry = open.entries.at(-1) ?? open.entries[open.entries.push(newEntry(row.span)) - 1]!;
  entry.span = widen(entry.span, row.span)!;

  switch (label.role) {
    case 'bullet':
      entry.bullets.push({ text, span: contentSpan(row.span, label.contentFrom) });
      return { at: 'entry-bullet' };
    case 'info':
      entry.infoLines.push(text);
      return { at: 'entry-info' };
    default:
      entry.headerLines.push(text);
      return { at: 'entry-header' };
  }
}

/** Joins a continuation onto whatever the row above it went into. */
function appendTo(open: OpenSection, sink: Sink, text: string, span: SourceSpan): void {
  if (!text) return;
  const entry = open.entries.at(-1);

  switch (sink.at) {
    case 'section-info':
      extendLast(open.infoLines, text);
      return;
    case 'section-bullet':
      extendBullet(open.bullets, text, span);
      return;
    case 'entry-header':
      if (entry) extendLast(entry.headerLines, text);
      return;
    case 'entry-info':
      if (entry) extendLast(entry.infoLines, text);
      return;
    case 'entry-bullet':
      if (entry) extendBullet(entry.bullets, text, span);
      return;
    default:
      // Nothing above it to carry on from. Kept as the section's own line
      // rather than dropped: the words are the candidate's either way.
      open.infoLines.push(text);
  }
}

function extendLast(lines: string[], text: string): void {
  const last = lines.length - 1;
  if (last < 0) lines.push(text);
  else lines[last] = `${lines[last]!} ${text}`;
}

function extendBullet(
  bullets: Array<{ text: string; span: SourceSpan }>,
  text: string,
  span: SourceSpan,
): void {
  const last = bullets.at(-1);
  if (!last) return;
  last.text = `${last.text} ${text}`;
  last.span = widen(last.span, span)!;
}

function newEntry(span: SourceSpan): OpenEntry {
  return { headerLines: [], infoLines: [], bullets: [], span: { ...span } };
}

/** The row's span, moved past whatever marker the label said to skip. */
function contentSpan(span: SourceSpan, contentFrom: number | undefined): SourceSpan {
  return contentFrom ? { ...span, start: span.start + contentFrom } : { ...span };
}

function widen(span: SourceSpan | null, next: SourceSpan): SourceSpan | null {
  if (!span) return { ...next };
  return { ...span, start: Math.min(span.start, next.start), end: Math.max(span.end, next.end) };
}

/** Fixes ids and spans to a finished section. */
function close(open: OpenSection, index: number, boundary: SectionBoundary): ResumeSection {
  const sectionId = `s${index}`;
  const span = open.span ?? open.headingSpan ?? { start: 0, end: 0 };

  return {
    id: sectionId,
    // B4's to decide, from the shape this produced.
    kind: 'other',
    heading: open.heading,
    entries: open.entries.map((entry, i) => closeEntry(entry, sectionId, i)),
    // Written as well as `infoLines` while sessions saved under the old name
    // are still being read back. Both carry the same lines, so a reader of
    // either sees the whole section.
    looseLines: [...open.infoLines],
    infoLines: [...open.infoLines],
    bullets: open.bullets.map<SectionBullet>((bullet, i) => ({
      id: `${sectionId}:b${i}`,
      sectionId,
      index: i,
      text: bullet.text,
      span: bullet.span,
    })),
    span: boundary.headingRow !== undefined && open.headingSpan
      ? widen({ ...open.headingSpan }, span)!
      : span,
  };
}

function closeEntry(open: OpenEntry, sectionId: string, index: number): ResumeEntry {
  const id = `${sectionId}:e${index}`;

  return {
    id,
    sectionId,
    index,
    headerLines: open.headerLines,
    infoLines: open.infoLines,
    bullets: open.bullets.map<Bullet>((bullet, i) => ({
      id: `${id}:b${i}`,
      entryId: id,
      index: i,
      text: bullet.text,
      span: bullet.span,
    })),
    span: open.span,
  };
}
