/**
 * B1 — where the sections start, and nothing else.
 *
 * The hard case is not spotting headings. It is telling a *section* heading
 * ("EXPERIENCE") from an *entry* heading ("NIO Inc.  Hefei, China"), and no
 * single layout feature does it, because templates disagree about which one
 * carries the rank. Measured on two resumes:
 *
 *   - One sets its section headings at body size in full capitals, and its
 *     entry headings a point *larger*. Ranked by size alone, every section
 *     heading is body text and every employer is a section.
 *   - The other sets section headings a third larger in ordinary case. Ranked
 *     by capitals alone, it has no headings at all.
 *
 * So the vocabulary anchors the scale and the layout generalises it: whatever
 * "EXPERIENCE" is set in *on this document* is what a section heading is set
 * in, and a row matching that is a heading whether or not its own words are
 * recognised. That is what keeps an unusual heading — "Leadership", "Awards" —
 * from being read as prose, without promoting the employers beneath it.
 *
 * Nothing here decides what a section is. A cut is made from how a row is set;
 * what it holds is only visible once its whole body is.
 *
 * Confidence does not soften the cut, because there is no softer cut to make:
 * a document is split here or it is not, and a boundary held back would leave
 * two sections silently merged. What `confidence` and `evidence` do is carry
 * the doubt forward so a later stage can act on it — the integrity pass is
 * where a cut this module was unsure of becomes something a reader can see.
 * Until that exists, a low number is a number nothing reads.
 */
import type { SectionBoundary, VisualRow } from './types.js';
import { SECTION_PATTERNS, isBulletLine } from './vocabulary.js';

/** Longer than this and it is a sentence, not a heading. */
const MAX_HEADING_CHARS = 48;
/** Capitals at or above this share read as "set in capitals". */
const ALL_CAPS_SHARE = 0.9;
/**
 * Font sizes vary by fractions of a point between a heading and its body, so
 * the comparison is a band rather than an equality.
 */
const RANK_BAND = 0.02;
/**
 * Least air above a row, in body line spacings, before it reads as a break.
 *
 * A floor, not the test. Measured, body rows sit between 0.80 and 1.13 line
 * spacings apart and headings between 0.93 and 1.53 — the two ranges overlap,
 * which is why the air a document gives its *own* headings is what a candidate
 * is held to, and this only catches the rest.
 */
const ROOMY_ABOVE = 1.15;
/** Headings the document gives less air than this are not a usable anchor. */
const AIR_BAND = 0.85;
/** A section heading is a label. Past this it is a sentence about the work. */
const MAX_HEADING_WORDS = 5;

const CONFIDENCE = {
  /** Its own words say what it is. */
  named: 0.95,
  /** Set exactly like the headings that do. */
  ranked: 0.75,
  /** Nothing to compare against — short, emphasized, and alone above its body. */
  guessed: 0.45,
  /** The block above the first heading, which never has one of its own. */
  leading: 0.6,
} as const;

/** A row with the layout features a cut is decided on. */
interface RowShape {
  index: number;
  text: string;
  /** Dominant size over the document's body size. */
  sizeRatio: number;
  bold: boolean;
  allCaps: boolean;
  /** Distance from the row above, in body line spacings. Zero at a page top. */
  gapAbove: number;
  /** First row of a page other than the first — the break is the page itself. */
  startsPage: boolean;
  words: number;
  named: boolean;
  /** False for rows that cannot be a heading whatever they are set in. */
  eligible: boolean;
}

export function findSectionBoundaries(rows: VisualRow[]): SectionBoundary[] {
  if (rows.length === 0) return [];

  const shapes = measure(rows);
  const headings = findHeadings(shapes);

  return cut(headings, rows.length);
}

/**
 * Every row's features, against the document's own body text.
 *
 * Body size is taken across the whole document rather than per section: a
 * section can be half headings — education usually is — and its own median
 * then lands on the heading size, so nothing in it ever reads as set apart.
 *
 * Size and weight are read from `dominant`, not from the row's maximum. The
 * maximum answers "is anything on this row emphasized", which a body row with
 * a larger date on the right answers yes to.
 */
function measure(rows: VisualRow[]): RowShape[] {
  const bodySize = median(rows.map((r) => r.dominant.fontSize)) || 1;
  const spacing =
    median(
      rows
        .map((row, i) => {
          const above = rows[i - 1];
          return above && above.page === row.page ? above.y - row.y : 0;
        })
        .filter((gap) => gap > 0),
    ) || 1;

  return rows.map((row, i) => {
    const above = rows[i - 1];
    const text = headingText(row.text);

    return {
      index: i,
      text: text ?? row.text,
      sizeRatio: row.dominant.fontSize / bodySize,
      bold: row.dominant.bold,
      allCaps: capitalShare(row.text) >= ALL_CAPS_SHARE,
      // A row at the top of a page has nothing above it to measure against.
      gapAbove: above && above.page === row.page ? (above.y - row.y) / spacing : 0,
      startsPage: above !== undefined && above.page !== row.page,
      words: row.text.split(/\s+/).filter(Boolean).length,
      named: text !== null && SECTION_PATTERNS.some(({ pattern }) => pattern.test(text)),
      eligible: text !== null,
    };
  });
}

/**
 * Which rows open a section.
 *
 * Two passes, because the second needs the first: the rows the vocabulary
 * recognises establish what a heading is set in on this document, and only
 * then can a row be judged by how it is set.
 */
function findHeadings(shapes: RowShape[]): Array<{ shape: RowShape; confidence: number; evidence: string[] }> {
  const named = shapes.filter((s) => s.named);

  if (named.length === 0) return unanchored(shapes);

  const rank: Rank = {
    sizeRatio: median(named.map((s) => s.sizeRatio)),
    allCaps: majority(named.map((s) => s.allCaps)),
    bold: majority(named.map((s) => s.bold)),
    airAbove: Math.max(median(named.map((s) => s.gapAbove)) * AIR_BAND, ROOMY_ABOVE),
  };

  // Nothing to generalise from when the recognised headings are set exactly
  // like the body around them. Every short row would then match, and on a
  // resume whose script has no capitals to read — Chinese, Japanese — that is
  // most of the document. The words that were recognised are all there is.
  const distinguishable = rank.allCaps || rank.bold || rank.sizeRatio > 1 + RANK_BAND;

  return shapes
    .filter((shape) => shape.named || (distinguishable && matchesRank(shape, rank)))
    .map((shape) =>
      shape.named
        ? { shape, confidence: CONFIDENCE.named, evidence: ['named in the heading vocabulary', ...setting(shape)] }
        : {
            shape,
            confidence: CONFIDENCE.ranked,
            evidence: ["set like this resume's own section headings", ...setting(shape)],
          },
    );
}

interface Rank {
  sizeRatio: number;
  allCaps: boolean;
  bold: boolean;
  airAbove: number;
}

/**
 * Set the way the recognised headings are set, *and* set apart the way they
 * are set apart.
 *
 * The size has to be *near* that rank, not merely at or above it. Whether an
 * entry heading is drawn larger or smaller than its section is a choice the
 * template makes, and it goes both ways: Markdown nests `###` under `##`,
 * while a LaTeX resume commonly sets section names at body size in capitals
 * and the employer above them a point larger. Accepting anything at or above
 * the rank turns every employer into a section and leaves EXPERIENCE empty.
 *
 * Type alone is not enough, which is the measured part. On a resume whose
 * headings are body-sized capitals, an all-capitals job title inside a section
 * is set identically to them — `SENIOR ENGINEER` under an employer took the
 * employer's bullets away from it and filed them under a section of its own.
 * What it does not have is the air: a heading opens a block and a job title
 * sits inside one, and this document's own headings say how much air that is.
 */
function matchesRank(shape: RowShape, rank: Rank): boolean {
  if (!shape.eligible || shape.words > MAX_HEADING_WORDS) return false;
  if (shape.allCaps !== rank.allCaps || shape.bold !== rank.bold) return false;
  if (!shape.startsPage && shape.gapAbove < rank.airAbove) return false;
  return (
    shape.sizeRatio >= rank.sizeRatio * (1 - RANK_BAND) &&
    shape.sizeRatio <= rank.sizeRatio * (1 + RANK_BAND)
  );
}

/**
 * Headings on a resume that names none of its sections in words we know.
 *
 * Nothing anchors the scale here, so the test is the shape of the break
 * itself: a short row, set apart from the body, with air above it. Reported
 * low — this is the case a labelling pass should be asked to look at, and the
 * confidence is how it gets asked.
 *
 * A page break counts as air: a heading at the top of page two is set apart by
 * the page itself, and measured in line spacings it would read as having
 * nothing above it at all.
 *
 * The first row of the document still cannot qualify, having neither. That is
 * also what keeps the candidate's name out: it is the largest, shortest, most
 * emphasized row on the page, and every other test here would call it a
 * heading.
 *
 * What survives is the largest family of candidates set alike, not every
 * candidate. A cut here becomes structure with nothing to check it against, so
 * the guess has to be a pattern rather than a collection: rows set three
 * different ways are three different things, and at most one of them is the
 * document's section headings.
 */
function unanchored(
  shapes: RowShape[],
): Array<{ shape: RowShape; confidence: number; evidence: string[] }> {
  const candidates = shapes.filter(
    (shape) =>
      shape.eligible &&
      shape.words <= MAX_HEADING_WORDS &&
      (shape.gapAbove >= ROOMY_ABOVE || shape.startsPage) &&
      (shape.bold || shape.allCaps || shape.sizeRatio > 1 + RANK_BAND),
  );

  const family = largestFamily(candidates);

  return family.map((shape) => ({
    shape,
    confidence: CONFIDENCE.guessed,
    evidence: ['no heading on this resume is named in the vocabulary', ...setting(shape)],
  }));
}

/** The biggest group of candidates set the same way; ties keep the topmost. */
function largestFamily(candidates: RowShape[]): RowShape[] {
  const families = new Map<string, RowShape[]>();

  for (const shape of candidates) {
    // Sizes are rounded into the same band the rank comparison uses, so two
    // headings a fraction of a point apart stay one family.
    const key = `${shape.allCaps}/${shape.bold}/${(shape.sizeRatio / RANK_BAND).toFixed(0)}`;
    families.set(key, [...(families.get(key) ?? []), shape]);
  }

  let best: RowShape[] = [];
  for (const family of families.values()) {
    if (family.length > best.length) best = family;
  }
  return best;
}

/** What was measured, in the words a reader of the findings would want. */
function setting(shape: RowShape): string[] {
  const evidence: string[] = [];
  if (shape.sizeRatio > 1 + RANK_BAND) evidence.push(`set ${shape.sizeRatio.toFixed(2)}x body size`);
  if (shape.allCaps) evidence.push('set in capitals');
  if (shape.bold) evidence.push('set bold');
  if (shape.startsPage) evidence.push('first row of a new page');
  else if (shape.gapAbove >= ROOMY_ABOVE) {
    evidence.push(`${shape.gapAbove.toFixed(2)}x the body line spacing above it`);
  }
  evidence.push(shape.words === 1 ? 'one word' : `${shape.words} words`);
  return evidence;
}

/**
 * Turns heading rows into ranges.
 *
 * Everything above the first heading is the leading block — name, email,
 * phone, links — which is never introduced by a heading of its own. It is a
 * section like any other and gets a range like any other; it simply has no
 * row to name it.
 */
function cut(
  headings: Array<{ shape: RowShape; confidence: number; evidence: string[] }>,
  total: number,
): SectionBoundary[] {
  const boundaries: SectionBoundary[] = [];
  const first = headings[0]?.shape.index ?? total;

  if (first > 0) {
    boundaries.push({
      index: 0,
      fromRow: 0,
      toRow: first,
      confidence: headings.length > 0 ? CONFIDENCE.leading : CONFIDENCE.guessed,
      evidence:
        headings.length > 0
          ? ['above the first heading, so it has none of its own']
          : ['no heading found anywhere — the whole document is one range'],
    });
  }

  for (const [i, heading] of headings.entries()) {
    boundaries.push({
      index: boundaries.length,
      headingRow: heading.shape.index,
      fromRow: heading.shape.index + 1,
      toRow: headings[i + 1]?.shape.index ?? total,
      confidence: heading.confidence,
      evidence: heading.evidence,
    });
  }

  return boundaries;
}

/** The row's text as a heading would be written, or null if it cannot be one. */
function headingText(raw: string): string | null {
  const text = raw.trim().replace(/[:：]\s*$/, '');
  if (!text || text.length > MAX_HEADING_CHARS) return null;
  // A heading is a label, not a statement: it does not end in punctuation that
  // closes or continues a sentence.
  if (/[.。!?！？,，;；]$/.test(text)) return null;
  if (isBulletLine(raw)) return null;
  return text;
}

function capitalShare(text: string): number {
  const letters = [...text].filter((c) => /\p{L}/u.test(c));
  if (letters.length === 0) return 0;
  return letters.filter((c) => /\p{Lu}/u.test(c)).length / letters.length;
}

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)]!;
}

function majority(values: boolean[]): boolean {
  return values.filter(Boolean).length * 2 > values.length;
}
