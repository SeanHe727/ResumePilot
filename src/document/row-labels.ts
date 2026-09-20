/**
 * B2 — what each row is, inside the section it belongs to.
 *
 * Features first, rules second. Everything a rule may read is measured into
 * `RowFeatures` before any decision is taken, so that a model asked to label
 * rows and the rules that label them by hand answer in the same vocabulary and
 * can be checked against each other row by row.
 *
 * The signal that carries the most here is indentation, which nothing in this
 * pipeline was reading. Measured on a real resume, inside one section:
 *
 *     entry header   0.0pt from the section's left edge
 *     bullet         1.7pt — the marker hangs left of its own text
 *     continuation  10.8pt — set flush with the text of the bullet above it
 *
 * A wrapped bullet is indented to clear its own marker, and that is a far
 * sharper line than font size, which is flat at 1.00 across all three, or the
 * air above, which measured 1.00 for both continuations and bullets.
 *
 * Nothing here assembles anything. A label says what a row is; folding rows
 * into entries is the next stage, and it is kept free of judgement so that
 * these rules and a model's can drive the same assembler.
 */
import type { RowFeatures, RowLabel, RowRole, SectionBoundary, VisualRow } from './types.js';
import { DATE_RANGE, isBulletLine } from './vocabulary.js';

/** Font sizes within this of the body size are the body size. */
const SIZE_BAND = 0.02;
/**
 * How far right a row must sit before it reads as hanging under the row above.
 *
 * Half the body size, so it scales with the document. Measured, a bullet's
 * marker hangs less than two points left of an entry header and a wrapped
 * bullet sits nearly eleven points right of it — the two are not close, and
 * anything between is a template doing something this cannot read.
 */
const INDENT_STEP = 0.5;

/** An email, a phone number or a link — the things a contact block is made of. */
const CONTACT = /@|\+?\d[\d\s()-]{7,}|https?:\/\/|(?:github|linkedin)\.com/i;

/** Bullet markers, as a prefix rather than a test, so the content start is known. */
const BULLET_MARKER = /^\s*([-*+•‧◦·▪▫●○–—]|\d{1,2}[.)])\s+/;

const CONFIDENCE = {
  /** The row says so itself: a marker, or a break the layout makes plainly. */
  plain: 0.95,
  /** Read from where the row sits relative to the rows around it. */
  placed: 0.8,
  /** Nothing in the layout separates it; it is what is left over. */
  residual: 0.55,
} as const;

/**
 * Labels every row of every section.
 *
 * Rows outside any boundary get no label. That cannot happen for a cut this
 * pipeline made — the ranges cover the document — but it can for a cut handed
 * in from elsewhere, and silently labelling what nobody asked about would hide
 * the disagreement rather than leave it for the integrity pass to find.
 */
export function labelRows(rows: VisualRow[], boundaries: SectionBoundary[]): RowLabel[] {
  const bodySize = median(rows.map((r) => r.dominant.fontSize)) || 1;
  const spacing = median(lineGaps(rows)) || 1;

  return boundaries.flatMap((boundary) => labelSection(rows, boundary, bodySize, spacing));
}

function labelSection(
  rows: VisualRow[],
  boundary: SectionBoundary,
  bodySize: number,
  spacing: number,
): RowLabel[] {
  const body = rows.slice(boundary.fromRow, boundary.toRow);
  if (body.length === 0) return [];

  const margin = Math.min(...body.map((r) => r.x));
  const features = body.map((row, i) =>
    measure(row, rows[boundary.fromRow + i - 1], margin, bodySize, spacing),
  );

  const bears = bearsEntries(features, boundary);
  const labels: RowLabel[] = [];

  /** Indent of the row a continuation would be hanging under. */
  let openIndent: number | null = null;
  /** Whether a bullet has been seen since the last row that opened an entry. */
  let bulletSinceEntry = false;
  let opened = false;

  for (const [i, f] of features.entries()) {
    const rowIndex = boundary.fromRow + i;
    const row = body[i]!;
    const previous = labels.at(-1);

    // Where a row's own words begin. Recorded whatever the row turns out to
    // be, so the assembler can slice a marker off a loose line as readily as
    // off a bullet.
    const contentFrom = BULLET_MARKER.exec(row.text)?.[0]?.length;
    const hanging = hangsUnder(f, openIndent, bodySize);

    // Nothing in this section is an entry, so nothing in it is a bullet
    // either: a bullet marks an item of a position, and where there is no
    // position to mark it is a line of prose with a dash in front of it.
    if (!bears) {
      if (previous && hanging) {
        labels.push(continuation(rowIndex, f, true));
        continue;
      }
      openIndent = f.indent;
      labels.push({
        rowIndex,
        role: 'loose',
        ...(contentFrom !== undefined ? { contentFrom } : {}),
        confidence: CONFIDENCE.residual,
        evidence: [
          boundary.headingRow === undefined
            ? 'in the block above the first heading, which holds no entries'
            : 'in a section with no bullets and nothing set apart as a header',
          ...notes(f),
        ],
      });
      continue;
    }

    if (f.startsWithBullet) {
      openIndent = f.indent;
      bulletSinceEntry = true;
      labels.push({
        rowIndex,
        role: 'bullet',
        contentFrom: contentFrom ?? 0,
        confidence: CONFIDENCE.plain,
        evidence: ['opens with a bullet marker', ...notes(f)],
      });
      continue;
    }

    if (previous && continues(f, openIndent, previous, body[i - 1], bodySize)) {
      labels.push(continuation(rowIndex, f, hanging));
      continue;
    }

    const starts = opensEntry(f, opened, bulletSinceEntry);
    openIndent = f.indent;
    opened = true;
    bulletSinceEntry = false;

    labels.push({
      rowIndex,
      role: 'entry-header',
      ...(starts ? { startsEntry: true } : {}),
      confidence: starts ? CONFIDENCE.placed : CONFIDENCE.residual,
      evidence: [...why(f, opened, starts), ...notes(f)],
    });
  }

  return labels;
}

function continuation(rowIndex: number, f: RowFeatures, hanging: boolean): RowLabel {
  return {
    rowIndex,
    role: 'continuation',
    confidence: hanging ? CONFIDENCE.plain : CONFIDENCE.placed,
    evidence: [
      hanging
        ? `set ${f.indent.toFixed(1)}pt in, hanging under the row above`
        : 'the row above was cut off rather than finished',
      ...notes(f),
    ],
  };
}

/**
 * Whether this section's body is a list of positions or a piece of prose.
 *
 * The rule the plan puts here rather than in the assembler: an entry needs a
 * bullet under it, or a header line set apart from the body. A skills section
 * has neither — three rows of comma-separated words, all set alike — and
 * reading them as entries gives three positions whose employer is a list of
 * languages.
 *
 * A block with no heading holds no entries whatever is in it, bullets
 * included. An entry belongs to a section that introduced it, and a block
 * nobody introduced is the page's masthead: a name, a line of links, perhaps a
 * sentence. Read the other way, a bulleted contact block files the candidate's
 * own email as an achievement under an employer named after them.
 */
function bearsEntries(features: RowFeatures[], boundary: SectionBoundary): boolean {
  if (boundary.headingRow === undefined) return false;
  if (features.some((f) => f.startsWithBullet)) return true;
  return features.some((f) => f.indent < 1 && setApart(f));
}

/** Drawn larger or heavier than the body around it. */
function setApart(f: RowFeatures): boolean {
  return f.bold || f.sizeRatio > 1 + SIZE_BAND;
}

function hangsUnder(f: RowFeatures, openIndent: number | null, bodySize: number): boolean {
  return openIndent !== null && f.indent > openIndent + bodySize * INDENT_STEP;
}

/**
 * Whether this row is the rest of the row above rather than something new.
 *
 * Indentation answers it where the template hangs its wrapped lines, which is
 * most of them. Where it does not, the fallback is the same judgement a reader
 * makes at a glance: a wrapped line ends wherever the column ran out — "…role
 * responsibilities, forming a" — while a finished one ends on a full stop.
 * Read as new entries instead, a nine-bullet position becomes fourteen entries
 * whose employer is half a sentence.
 */
function continues(
  f: RowFeatures,
  openIndent: number | null,
  previous: RowLabel,
  above: VisualRow | undefined,
  bodySize: number,
): boolean {
  if (hangsUnder(f, openIndent, bodySize)) return true;
  // The sentence test only speaks for a row that was already a bullet. Header
  // lines run on by design — an employer, then a title — and reading the
  // second as the rest of the first would merge them into one line.
  if (previous.role === 'entry-header') return false;
  if (setApart(f) || f.indent < 1) return false;
  return above !== undefined && !/[.。!?！？:：]\s*$/.test(above.text.trim());
}

/**
 * Whether an entry header opens a new entry or carries on the one above.
 *
 * Three ways to open one, and one way not to. The first header in a section
 * opens one because there is nothing for it to continue. A header after
 * bullets opens one because the bullets closed what came before. A header set
 * apart from the body opens one because that is what being set apart is for.
 *
 * A row that is nothing but a date range opens nothing, however it is set.
 * Measured: a resume puts the title on the left of a printed line and the
 * dates on the right, and where the two were read as separate rows the date
 * became an entry of its own — the project's name filed with no work under it,
 * and its dates holding all of it. Rebuilding rows by geometry fixed the case
 * that was measured; the rule stays because nothing guarantees a template
 * cannot put a date on a line by itself, and it costs one test to keep.
 */
function opensEntry(f: RowFeatures, opened: boolean, bulletSinceEntry: boolean): boolean {
  if (!opened) return true;
  if (bulletSinceEntry) return true;
  return setApart(f) && !isDateOnly(f);
}

function why(f: RowFeatures, opened: boolean, starts: boolean): string[] {
  if (!starts) {
    return [
      isDateOnly(f)
        ? 'carries a date range and nothing a reader would take for a name'
        : 'set like the header above it, so it carries on from it',
    ];
  }
  if (!opened) return ['the first header in its section'];
  return setApart(f) ? ['set apart from the body around it'] : ['the first row after a bullet'];
}

/** What else was measured, for a reader of the labels rather than for the rules. */
function notes(f: RowFeatures): string[] {
  const out: string[] = [];
  if (f.hasDateRange) out.push('carries a date range');
  if (f.hasContact) out.push('carries contact details');
  if (f.capsRatio >= 0.9) out.push('set in capitals');
  if (f.gapAbove >= 1.25) out.push(`${f.gapAbove.toFixed(2)}x the body line spacing above it`);
  return out;
}

/**
 * A row carrying a date range and nothing else.
 *
 * Nothing else means nothing a reader would recognise as an employer, a title
 * or a school: strip the range and the punctuation around it, and what is left
 * is empty. A bare `Aug 2026 - Present` qualifies; a row pairing an employer
 * with its dates does not, and neither does one with a location beside them.
 */
function isDateOnly(f: RowFeatures): boolean {
  return f.hasDateRange && f.charCount === 0;
}

function measure(
  row: VisualRow,
  above: VisualRow | undefined,
  margin: number,
  bodySize: number,
  spacing: number,
): RowFeatures {
  const date = DATE_RANGE.exec(row.text);
  const letters = [...row.text].filter((c) => /\p{L}/u.test(c));

  return {
    // Read from `dominant`, not from the row's maximum: the maximum answers
    // "is anything on this row emphasized", which a body row with a larger
    // date on the right answers yes to.
    sizeRatio: row.dominant.fontSize / bodySize,
    bold: row.dominant.bold,
    capsRatio: letters.length === 0 ? 0 : letters.filter((c) => /\p{Lu}/u.test(c)).length / letters.length,
    indent: row.x - margin,
    gapAbove: above && above.page === row.page ? (above.y - row.y) / spacing : 0,
    startsWithBullet: isBulletLine(row.text),
    hasDateRange: date !== null,
    hasContact: CONTACT.test(row.text),
    // What is left once the date range and the punctuation around it are gone.
    // Counted rather than kept, because the rules only ever ask whether there
    // is anything there.
    charCount: (date ? row.text.replace(date[0], '') : row.text)
      .replace(/[\s|｜·•‧—–\-,()]/g, '')
      .length,
    wordCount: row.text.split(/\s+/).filter(Boolean).length,
  };
}

function lineGaps(rows: VisualRow[]): number[] {
  return rows
    .map((row, i) => {
      const above = rows[i - 1];
      return above && above.page === row.page ? above.y - row.y : 0;
    })
    .filter((gap) => gap > 0);
}

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)]!;
}

export type { RowRole };
