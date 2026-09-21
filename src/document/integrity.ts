/**
 * B5 — the parse checked against itself.
 *
 * Rows go in and a document comes out, and between the two a row can be
 * dropped, counted twice, or left in a section that turns out empty. None of
 * that raises an error, because every stage did what it was asked: B1 cut
 * where it saw a heading, B2 labelled what it saw, B3 folded what it was
 * given. The failures live in the gaps between them, and this is the only
 * place that can see a gap at all.
 *
 * Nothing here corrects anything. Correcting would mean deciding again, with
 * less evidence than the stage that decided first had, and a pipeline that
 * quietly patches itself is one whose faults never get fixed. It records.
 *
 * It is also a finding in its own right. Where our own parser loses the thread
 * is where a commercial one will too, and that has been asserted in a comment
 * for as long as this has existed without anything measuring it.
 */
import type { ParseAnomaly, ParseIntegrity, ResumeSection } from '../domain.js';
import type { LabelledRow, RowLabel, SectionBoundary } from './types.js';
import { DATE_RANGE } from './vocabulary.js';

/** How much of a line has to resolve before its offsets are believed. */
const SPAN_PREFIX = 12;

export function checkIntegrity(
  rows: LabelledRow[],
  boundaries: SectionBoundary[],
  labels: RowLabel[],
  sections: ResumeSection[],
  rawText: string,
): ParseIntegrity {
  const claims = coverage(rows, boundaries);
  const labelled = new Set(labels.map((label) => label.rowIndex));

  return {
    totalRows: rows.length,
    placedRows: claims.filter((count) => count === 1).length,
    droppedRows: claims.flatMap((count, row) => (count === 0 ? [row] : [])),
    duplicatedRows: claims.flatMap((count, row) => (count > 1 ? [row] : [])),
    unlabelledRows: boundaries.flatMap((boundary) =>
      range(boundary.fromRow, boundary.toRow).filter((row) => !labelled.has(row)),
    ),
    ...emptiness(sections, boundaries, rows),
    ...references(sections),
    unmappedSpans: unmapped(sections, rawText),
    anomalies: anomalies(sections, boundaries, labels),
  };
}

/**
 * How many sections claimed each row.
 *
 * A section covers its heading row and the half-open range beneath it. Two
 * ranges that overlap, or a gap between them, is a cut that does not add up —
 * and either way some of the resume is read twice or not at all.
 */
function coverage(rows: LabelledRow[], boundaries: SectionBoundary[]): number[] {
  const claims = new Array<number>(rows.length).fill(0);
  const claim = (row: number): void => {
    if (row >= 0 && row < claims.length) claims[row] = (claims[row] ?? 0) + 1;
  };

  for (const boundary of boundaries) {
    if (boundary.headingRow !== undefined) claim(boundary.headingRow);
    for (const row of range(boundary.fromRow, boundary.toRow)) claim(row);
  }
  return claims;
}

/** Things that came out of the fold holding nothing. */
function emptiness(
  sections: ResumeSection[],
  boundaries: SectionBoundary[],
  rows: LabelledRow[],
): Pick<ParseIntegrity, 'emptySections' | 'emptyEntries' | 'emptyBullets' | 'invalidHeadings'> {
  const emptySections: string[] = [];
  const emptyEntries: string[] = [];
  const emptyBullets: string[] = [];

  for (const section of sections) {
    const lines = section.infoLines ?? section.looseLines;
    if (section.entries.length === 0 && lines.length === 0 && (section.bullets ?? []).length === 0) {
      emptySections.push(section.id);
    }

    for (const bullet of section.bullets ?? []) {
      if (!bullet.text.trim()) emptyBullets.push(bullet.id);
    }

    for (const entry of section.entries) {
      const said = [...entry.headerLines, ...(entry.infoLines ?? [])].join('').trim();
      if (!said && entry.bullets.length === 0) emptyEntries.push(entry.id);
      for (const bullet of entry.bullets) {
        if (!bullet.text.trim()) emptyBullets.push(bullet.id);
      }
    }
  }

  // A boundary that named a heading row whose text turned out to be nothing.
  // The cut still happened, so the section exists and is called "".
  const invalidHeadings = boundaries.flatMap((boundary, index) =>
    boundary.headingRow !== undefined && !rows[boundary.headingRow]?.text.trim()
      ? [sections[index]?.id ?? `boundary ${boundary.index}`]
      : [],
  );

  return { emptySections, emptyEntries, emptyBullets, invalidHeadings };
}

/**
 * Ids that repeat, and parents that are not there.
 *
 * An id is how a diagnosis says which line it means. Two lines answering to
 * one id means a review lands on whichever the reader finds first, and a
 * bullet naming an entry that does not exist means it lands on neither.
 */
function references(sections: ResumeSection[]): Pick<ParseIntegrity, 'duplicateIds' | 'danglingRefs'> {
  const seen = new Set<string>();
  const duplicateIds: string[] = [];
  const danglingRefs: string[] = [];

  const once = (id: string): void => {
    if (seen.has(id)) duplicateIds.push(id);
    seen.add(id);
  };

  const sectionIds = new Set(sections.map((s) => s.id));

  for (const section of sections) {
    once(section.id);

    for (const bullet of section.bullets ?? []) {
      once(bullet.id);
      if (!sectionIds.has(bullet.sectionId)) danglingRefs.push(bullet.id);
    }

    const entryIds = new Set(section.entries.map((e) => e.id));
    for (const entry of section.entries) {
      once(entry.id);
      if (!sectionIds.has(entry.sectionId)) danglingRefs.push(entry.id);
      for (const bullet of entry.bullets) {
        once(bullet.id);
        if (!entryIds.has(bullet.entryId)) danglingRefs.push(bullet.id);
      }
    }
  }

  return { duplicateIds, danglingRefs };
}

/**
 * Bullets whose offsets do not lead back to their own words.
 *
 * Checked on a prefix rather than the whole string, because a bullet that
 * wrapped was joined with a space where the page had a line break: the span
 * covers both rows and the text no longer matches it character for character.
 * What has to hold is that the offsets land on the right line.
 */
function unmapped(sections: ResumeSection[], rawText: string): string[] {
  const out: string[] = [];

  const check = (id: string, text: string, start: number, end: number): void => {
    if (start < 0 || end > rawText.length || end <= start) {
      out.push(id);
      return;
    }
    const head = squash(text).slice(0, SPAN_PREFIX);
    if (head && !squash(rawText.slice(start, end)).startsWith(head)) out.push(id);
  };

  for (const section of sections) {
    for (const bullet of section.bullets ?? []) {
      check(bullet.id, bullet.text, bullet.span.start, bullet.span.end);
    }
    for (const entry of section.entries) {
      for (const bullet of entry.bullets) {
        check(bullet.id, bullet.text, bullet.span.start, bullet.span.end);
      }
    }
  }

  return out;
}

/**
 * Shapes that are legal and worth a second look.
 *
 * Not errors. Each of these is the pipeline doing something defensible where
 * it might have been wrong, and the point of naming them is that a reader —
 * or a later version of one of these stages — can find them without reading
 * the whole document.
 */
function anomalies(
  sections: ResumeSection[],
  boundaries: SectionBoundary[],
  labels: RowLabel[],
): ParseAnomaly[] {
  const out: ParseAnomaly[] = [];

  for (const section of sections) {
    for (const entry of section.entries) {
      const header = entry.headerLines.join(' ').trim();
      if (!header) {
        // B3 opens one of these where a label claims an entry before anything
        // opened one, rather than losing the row.
        out.push({ kind: 'entry-without-header', at: entry.id });
      } else if (dateOnly(header)) {
        out.push({ kind: 'date-only-entry', at: entry.id, detail: header });
      }
    }

    // What the heading said, against what the section turned out to be.
    const { classification } = section;
    if (classification && classification.margin < 0) {
      out.push({
        kind: 'heading-overruled-evidence',
        at: section.id,
        detail: `filed as ${section.kind}; its shape argued for ${classification.runnerUp?.kind ?? 'something else'}`,
      });
    }
  }

  // A cut made with nothing in the vocabulary to anchor it. Every boundary on
  // such a page is a guess, so the page is named once rather than each of them.
  const guessed = boundaries.filter((b) => b.headingRow !== undefined && b.confidence < 0.5);
  if (guessed.length > 0) {
    out.push({
      kind: 'guessed-boundary',
      at: `${guessed.length} of ${boundaries.length}`,
      detail: 'no heading on this resume is named in the vocabulary',
    });
  }

  // A continuation is the rest of the row above. First in its section, there
  // is no row above, and the assembler keeps its words as the section's own.
  for (const boundary of boundaries) {
    const first = labels.find((label) => label.rowIndex >= boundary.fromRow && label.rowIndex < boundary.toRow);
    if (first?.role === 'continuation') {
      out.push({ kind: 'dangling-continuation', at: `row ${first.rowIndex}` });
    }
  }

  return out;
}

/** Nothing a reader would take for a name once the dates are gone. */
function dateOnly(text: string): boolean {
  const match = DATE_RANGE.exec(text);
  if (!match) return false;
  return text.replace(match[0], '').replace(/[\s|｜·•‧—–\-,()]/g, '').length === 0;
}

function squash(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function range(from: number, to: number): number[] {
  return Array.from({ length: Math.max(0, to - from) }, (_, i) => from + i);
}
