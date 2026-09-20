/**
 * B2 — what each row is, and which level it belongs to.
 *
 * Features first, rules second. Everything a rule may read is measured into
 * `RowFeatures` before any decision is taken, so that a model asked to label
 * rows and the rules that label them by hand answer in the same vocabulary and
 * can be checked against each other row by row.
 *
 * The signal that carries the most here is indentation, which nothing in this
 * pipeline was reading. Measured on a real resume, inside one section:
 *
 *     header         0.0pt from the section's left edge
 *     bullet         1.7pt — the marker hangs left of its own text
 *     continuation  10.8pt — set flush with the text of the bullet above it
 *
 * A wrapped bullet is indented to clear its own marker, and that is a far
 * sharper line than font size, which is flat at 1.00 across all three, or the
 * air above, which measured 1.00 for both continuations and bullets.
 *
 * Ownership is decided row by row rather than by sorting each section into one
 * of two shapes up front. A section can open with a sentence and a bullet of
 * its own and go on to list positions; asked to pick one shape for the whole
 * of it, a rule files half of it in the wrong place. So a bullet before any
 * entry has opened belongs to the section, a bullet after one belongs to that
 * entry, and either way it stays a bullet and keeps the offset its words start
 * at. Nothing downstream needs to know what kind of section it is to read it.
 *
 * Nothing here assembles anything. A label says what a row is; folding rows
 * into sections and entries is the next stage, and it is kept free of
 * judgement so that these rules and a model's can drive the same assembler.
 */
import type {
  RowFeatures,
  RowLabel,
  RowOwner,
  RowRole,
  SectionBoundary,
  VisualRow,
} from './types.js';
import { DATE_RANGE, isBulletLine } from './vocabulary.js';

/** Font sizes within this of the body size are the body size. */
const SIZE_BAND = 0.02;
/**
 * How far right a row must sit before it reads as hanging under the row above.
 *
 * Half the body size, so it scales with the document. Measured, a bullet's
 * marker hangs less than two points left of a header and a wrapped bullet sits
 * nearly eleven points right of it — the two are not close, and anything
 * between is a template doing something this cannot read.
 */
const INDENT_STEP = 0.5;

/** An email, a phone number or a link — the things a contact block is made of. */
const CONTACT = /@|\+?\d[\d\s()-]{7,}|https?:\/\/|(?:github|linkedin)\.com/i;

/** Bullet markers, as a prefix rather than a test, so the content start is known. */
const BULLET_MARKER = /^\s*([-*+•‧◦·▪▫●○–—]|\d{1,2}[.)])\s+/;

/** How a statement ends. A label — an employer, a degree, a project — does not. */
const TERMINAL = /[.。!?！？:：]\s*$/;

/** Commas and their CJK equivalents. Two of them and the row is a list. */
const LIST_SEPARATOR = /[,，、]/g;
/** Below this a comma is punctuation inside a name; at it the row is a list. */
const LIST_SEPARATORS = 2;

const CONFIDENCE = {
  /** The row says so itself: a marker, or a break the layout makes plainly. */
  plain: 0.95,
  /** Read from where the row sits relative to the rows around it. */
  placed: 0.8,
  /** Nothing separates it from the prose around it; it is what is left over. */
  residual: 0.55,
  /** Filed somewhere because it had to go somewhere. Worth a second look. */
  doubtful: 0.35,
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

/** What the section has opened so far, carried from row to row. */
interface Open {
  /** Indent of the row a continuation would be hanging under. */
  indent: number | null;
  /** Level of the last row that was not itself a continuation. */
  owner: RowOwner;
  entry: boolean;
  /** Whether a bullet has been seen since the entry opened. */
  bulletSinceEntry: boolean;
  /** How the row that opened the current entry was set. */
  openedAt: number | null;
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

  // A block no heading introduced opens no entries. This is the one thing
  // settled for the section rather than for the row, and it is a fact about
  // the cut rather than about the contents: an entry belongs to a section that
  // introduced it, and a block nobody introduced is the page's masthead — a
  // name, a line of links, perhaps a sentence. Read the other way, the name is
  // the largest, shortest row on the page and becomes an employer, with the
  // candidate's own email filed under it as an achievement.
  const headed = boundary.headingRow !== undefined;

  const open: Open = {
    indent: null,
    owner: 'section',
    entry: false,
    bulletSinceEntry: false,
    openedAt: null,
  };
  const labels: RowLabel[] = [];

  for (const [i, f] of features.entries()) {
    const rowIndex = boundary.fromRow + i;
    const row = body[i]!;
    const previous = labels.at(-1);

    // Where a row's own words begin. Recorded whatever the row turns out to
    // be, so the assembler can slice a marker off a line of prose as readily
    // as off a bullet.
    const contentFrom = BULLET_MARKER.exec(row.text)?.[0]?.length;
    const hanging = hangsUnder(f, open.indent, bodySize);

    if (f.startsWithBullet) {
      const owner: RowOwner = open.entry ? 'entry' : 'section';
      if (open.entry) open.bulletSinceEntry = true;
      open.indent = f.indent;
      open.owner = owner;

      labels.push({
        rowIndex,
        role: 'bullet',
        owner,
        contentFrom: contentFrom ?? 0,
        confidence: CONFIDENCE.plain,
        evidence: [
          'opens with a bullet marker',
          owner === 'entry'
            ? 'under an entry that is already open'
            : 'no entry is open, so it belongs to the section',
          ...notes(f),
        ],
      });
      continue;
    }

    // Checked after the marker, because a marker is not ambiguous and a
    // wrapped line is: a bullet sitting under a wrap that was cut off
    // mid-sentence would otherwise be read as more of that wrap.
    //
    // A continuation settles nothing else: it is the rest of the row above,
    // so it takes that row's level and leaves the indent it hangs under
    // untouched.
    if (previous && continues(f, hanging, previous, features[i - 1])) {
      labels.push({
        rowIndex,
        role: 'continuation',
        owner: open.owner,
        confidence: hanging ? CONFIDENCE.plain : CONFIDENCE.placed,
        evidence: [
          hanging
            ? `set ${f.indent.toFixed(1)}pt in, hanging under the row above`
            : 'the row above was cut off rather than finished',
          `carries on from the ${open.owner}`,
          ...notes(f),
        ],
      });
      continue;
    }

    const label = place(f, open, headed, rowIndex);
    open.indent = f.indent;
    open.owner = label.owner;
    labels.push({ ...label, ...(contentFrom !== undefined ? { contentFrom } : {}) });
  }

  return labels;
}

/**
 * Where a row that is neither a bullet nor a continuation belongs.
 *
 * The order of these tests is the design.
 *
 * A row that is nothing but a date range is settled first, ahead of everything
 * that could open an entry, because a date range is otherwise the single most
 * reliable marker that one does. Measured: a resume put the title on the left
 * of a printed line and the dates on the right, and where the two arrived as
 * separate rows the date opened an entry of its own — the project's name filed
 * with no work under it, and its dates holding all of it. Rebuilding rows by
 * geometry made that unreachable from a PDF; nothing stops a template setting
 * a date on a line by itself, and a date with no entry to date is a fact about
 * the section, never the start of something.
 *
 * Then a header already under way, because an entry's header commonly runs to
 * two rows — employer, then title and dates — and the second must not be read
 * as a third entry.
 *
 * Only then the tests that open one: set apart from the body, or the first row
 * after that entry's bullets, or carrying dates where no entry is open yet.
 * What is left names nothing and opens nothing, and belongs to the section.
 */
function place(
  f: RowFeatures,
  open: Open,
  headed: boolean,
  rowIndex: number,
): RowLabel {
  if (isDateOnly(f)) {
    if (open.entry) {
      return {
        rowIndex,
        role: 'header',
        owner: 'entry',
        confidence: CONFIDENCE.placed,
        evidence: [
          'a date range and nothing else, so it carries on the header above',
          ...notes(f),
        ],
      };
    }
    return {
      rowIndex,
      role: 'info',
      owner: 'section',
      confidence: CONFIDENCE.doubtful,
      evidence: ['a date range and nothing else, with no entry open for it to date', ...notes(f)],
    };
  }

  const opens = (reason: string): RowLabel => {
    open.entry = true;
    open.bulletSinceEntry = false;
    open.openedAt = weightOf(f);
    return {
      rowIndex,
      role: 'header',
      owner: 'entry',
      startsEntry: true,
      confidence: CONFIDENCE.placed,
      evidence: [reason, ...notes(f)],
    };
  };

  // An entry's header is a block, not a line: employer, then title, then the
  // dates and a location, each set differently and all naming one position. So
  // being set apart opens an entry only where no header block is under way —
  // or where this row is set the way the row that opened the current one was,
  // which is that block starting again.
  //
  // Measured: this template sets the employer bold a size up and the job title
  // bold at body size. Read as two emphasized rows, two positions became four
  // with their bullets split between them; read as one block that repeats,
  // they are two. The repeat is also the only thing separating two degrees,
  // which have no bullets between them to close the first.
  if (headed && setApart(f) && (!open.entry || weightOf(f) === open.openedAt)) {
    return opens(
      open.entry
        ? 'set the way this section opened its last entry'
        : 'set apart from the body around it',
    );
  }

  // Dates are the identity evidence that survives when nothing is set apart:
  // with no entry open they say a position starts here, and after an entry's
  // bullets they say the next one does. In between — an entry open and no
  // bullets yet — the header is still being written, and the test below reads
  // this as more of it rather than as a third entry.
  if (headed && f.hasDateRange && (!open.entry || open.bulletSinceEntry)) {
    return opens(
      open.entry
        ? 'carries a date range, after the previous entry closed with bullets'
        : 'carries a date range, with no entry open to belong to',
    );
  }

  if (open.entry) return within(f, open, rowIndex);

  return {
    rowIndex,
    role: 'info',
    owner: 'section',
    confidence: CONFIDENCE.residual,
    evidence: [
      headed
        ? 'names nothing and opens nothing, so it is the section speaking'
        : 'in the block above the first heading, which introduces no entries',
      ...notes(f),
    ],
  };
}

/**
 * A row inside an entry that opens no new one: part of what the entry is
 * called, or something the entry says?
 *
 * Dates name a position as surely as the employer does, so a dated row carries
 * on the header. A bare link, a closing sentence, a comma-separated list of
 * technologies name nothing — they are the entry talking about itself.
 *
 * Where neither speaks, which side of the bullets the row falls on decides.
 * Before them the header is still being written, so an unrecognised row stays
 * a header: filing a company name under description loses the entry its name,
 * while a stray line among the header lines costs a reader nothing. After
 * them the header is finished, and what follows is the entry elaborating —
 * a second project under the same employer, a note about the team. Either way
 * the doubt goes into the evidence.
 */
function within(f: RowFeatures, open: Open, rowIndex: number): RowLabel {
  if (f.hasDateRange) {
    return {
      rowIndex,
      role: 'header',
      owner: 'entry',
      confidence: CONFIDENCE.placed,
      evidence: ['dates the entry above it, so it carries on naming it', ...notes(f)],
    };
  }

  const describes = f.hasContact
    ? 'a link rather than a name'
    : f.endsSentence
      ? 'a finished sentence rather than a label'
      : f.listSeparators >= LIST_SEPARATORS
        ? 'a list rather than a name'
        : null;

  if (describes !== null) {
    return {
      rowIndex,
      role: 'info',
      owner: 'entry',
      confidence: CONFIDENCE.placed,
      evidence: [`${describes}, so the entry is describing itself`, ...notes(f)],
    };
  }

  return open.bulletSinceEntry
    ? {
        rowIndex,
        role: 'info',
        owner: 'entry',
        confidence: CONFIDENCE.doubtful,
        evidence: [
          "nothing names a new entry here, and this one's header closed when its bullets began",
          ...notes(f),
        ],
      }
    : {
        rowIndex,
        role: 'header',
        owner: 'entry',
        confidence: CONFIDENCE.doubtful,
        evidence: [
          'nothing says whether this names the entry or describes it, and the header is still open',
          ...notes(f),
        ],
      };
}

/** Drawn larger or heavier than the body around it. */
function setApart(f: RowFeatures): boolean {
  return f.bold || f.sizeRatio > 1 + SIZE_BAND;
}

/**
 * How a row is set, as one number, for recognising the same setting again.
 *
 * Size alone, rounded into the band the rest of this file treats as "the same
 * size". Weight is deliberately left out: whether a row's
 * dominant style is bold turns on how many characters fall either side of the
 * bold run, and on an employer line that is a coin toss — `NIO Inc.` is
 * shorter than the city beside it and reads as regular, `Amazon x UW` is not
 * and reads as bold. Ranked on that, one of two identical employer lines
 * outranks the other and the loser stops being an entry at all.
 *
 * Bold still decides whether a row is emphasized; it just does not decide
 * which of two emphasized rows is the header.
 */
function weightOf(f: RowFeatures): number {
  return Math.round(f.sizeRatio / SIZE_BAND);
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
  hanging: boolean,
  previous: RowLabel,
  above: RowFeatures | undefined,
): boolean {
  if (hanging) return true;
  // The sentence test speaks only for a row that was already running on.
  // Header lines run on by design — an employer, then a title — and reading
  // the second as the rest of the first would merge them into one line.
  if (previous.role === 'header') return false;
  if (setApart(f) || f.indent < 1) return false;
  return above !== undefined && !above.endsSentence;
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
    capsRatio:
      letters.length === 0 ? 0 : letters.filter((c) => /\p{Lu}/u.test(c)).length / letters.length,
    indent: row.x - margin,
    gapAbove: above && above.page === row.page ? (above.y - row.y) / spacing : 0,
    startsWithBullet: isBulletLine(row.text),
    hasDateRange: date !== null,
    hasContact: CONTACT.test(row.text),
    endsSentence: TERMINAL.test(row.text.trim()),
    listSeparators: (row.text.match(LIST_SEPARATOR) ?? []).length,
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

export type { RowOwner, RowRole };
