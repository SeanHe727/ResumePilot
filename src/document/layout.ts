/**
 * Layout analysis.
 *
 * Everything here answers one question: will a resume parser read this page in
 * the order a human would? Multi-column layout alone accounts for roughly a
 * third of real ATS parsing failures — extractors read straight across the
 * page, weaving two columns into one garbled stream — so detecting it is worth
 * more than any wording advice the rest of the system can offer.
 *
 * Pure geometry, no PDF types: the same functions serve any paginated source.
 */

export interface PositionedLine {
  text: string;
  /** Left edge, in points from the page's left margin. */
  x: number;
  /** Baseline, in points from the page's *bottom* — PDF's own convention. */
  y: number;
  width: number;
  page: number;
}

export interface PageGeometry {
  width: number;
  height: number;
}

export interface ColumnReport {
  multiColumn: boolean;
  /** Horizontal band with no text, separating the columns. */
  gutter?: { from: number; to: number };
  /** How many lines sit either side of the gutter. */
  leftLines: number;
  rightLines: number;
}

/** Buckets across the page width; 200 gives ~3pt resolution on A4. */
const BUCKETS = 200;
/** A gutter narrower than this is ordinary word spacing, not a column break. */
const MIN_GUTTER_FRACTION = 0.04;
/** Ignore the outer margins: whitespace there is just a margin. */
const MARGIN_FRACTION = 0.12;
/** Both sides must carry real content before this counts as two columns. */
const MIN_LINES_PER_SIDE = 3;

/**
 * Finds a vertical gutter with text on both sides that overlap vertically.
 *
 * The vertical-overlap test is what separates a real two-column layout from a
 * page that merely has short lines: a gutter with content only above-left and
 * below-right is one column with ragged edges, and flagging it would cry wolf
 * on perfectly good resumes.
 */
export function detectColumns(lines: PositionedLine[], page: PageGeometry): ColumnReport {
  if (lines.length < MIN_LINES_PER_SIDE * 2 || page.width <= 0) {
    return { multiColumn: false, leftLines: 0, rightLines: 0 };
  }

  const covered = new Array<boolean>(BUCKETS).fill(false);
  const toBucket = (x: number): number =>
    Math.max(0, Math.min(BUCKETS - 1, Math.floor((x / page.width) * BUCKETS)));

  for (const line of lines) {
    const from = toBucket(line.x);
    const to = toBucket(line.x + line.width);
    for (let i = from; i <= to; i++) covered[i] = true;
  }

  const marginBuckets = Math.floor(BUCKETS * MARGIN_FRACTION);
  const minGutterBuckets = Math.max(2, Math.floor(BUCKETS * MIN_GUTTER_FRACTION));

  let best: { from: number; to: number } | null = null;
  let runStart = -1;

  for (let i = marginBuckets; i <= BUCKETS - marginBuckets; i++) {
    const isGap = i < BUCKETS && !covered[i];
    if (isGap && runStart === -1) runStart = i;
    if ((!isGap || i === BUCKETS - marginBuckets) && runStart !== -1) {
      const run = { from: runStart, to: i };
      if (run.to - run.from >= minGutterBuckets && (!best || run.to - run.from > best.to - best.from)) {
        best = run;
      }
      runStart = -1;
    }
  }

  if (!best) return { multiColumn: false, leftLines: lines.length, rightLines: 0 };

  const boundary = ((best.from + best.to) / 2 / BUCKETS) * page.width;
  const left = lines.filter((l) => l.x + l.width <= boundary);
  const right = lines.filter((l) => l.x >= boundary);

  if (left.length < MIN_LINES_PER_SIDE || right.length < MIN_LINES_PER_SIDE) {
    return { multiColumn: false, leftLines: left.length, rightLines: right.length };
  }

  const overlaps = verticalRangesOverlap(left, right);

  return {
    multiColumn: overlaps,
    ...(overlaps
      ? { gutter: { from: (best.from / BUCKETS) * page.width, to: (best.to / BUCKETS) * page.width } }
      : {}),
    leftLines: left.length,
    rightLines: right.length,
  };
}

function verticalRangesOverlap(left: PositionedLine[], right: PositionedLine[]): boolean {
  const range = (ls: PositionedLine[]): [number, number] => [
    Math.min(...ls.map((l) => l.y)),
    Math.max(...ls.map((l) => l.y)),
  ];
  const [lo1, hi1] = range(left);
  const [lo2, hi2] = range(right);
  const shared = Math.min(hi1, hi2) - Math.max(lo1, lo2);
  const shorter = Math.min(hi1 - lo1, hi2 - lo2);
  // More than half of the shorter column running alongside the other is a
  // layout, not a coincidence.
  return shorter > 0 && shared / shorter > 0.5;
}

/**
 * Reading order as a naive extractor produces it: straight across the page,
 * top to bottom, ignoring columns entirely. This is the sequence an ATS sees.
 */
export function naiveReadingOrder(lines: PositionedLine[]): PositionedLine[] {
  return [...lines].sort((a, b) => a.page - b.page || b.y - a.y || a.x - b.x);
}

/**
 * Reading order a human follows: each column top to bottom, left column first.
 */
export function columnAwareReadingOrder(
  lines: PositionedLine[],
  boundary: number,
): PositionedLine[] {
  const side = (l: PositionedLine): number => (l.x >= boundary ? 1 : 0);
  return [...lines].sort(
    (a, b) => a.page - b.page || side(a) - side(b) || b.y - a.y || a.x - b.x,
  );
}

/** Fraction of adjacent pairs that the two orderings disagree about. */
export function readingOrderDivergence(a: PositionedLine[], b: PositionedLine[]): number {
  if (a.length < 2) return 0;
  const rank = new Map(b.map((line, i) => [line, i]));
  let inversions = 0;

  for (let i = 0; i < a.length - 1; i++) {
    const here = rank.get(a[i]!);
    const next = rank.get(a[i + 1]!);
    if (here !== undefined && next !== undefined && here > next) inversions++;
  }
  return inversions / (a.length - 1);
}

/**
 * Text sitting in the page's header or footer band.
 *
 * Parsers either drop these nodes or file them into ghost fields that never
 * reach the application form — about a fifth of parsing errors. It matters most
 * for contact details, which is exactly what people like to put up there.
 */
export function detectMarginContent(
  lines: PositionedLine[],
  page: PageGeometry,
  bandFraction = 0.06,
): PositionedLine[] {
  const band = page.height * bandFraction;
  return lines.filter((l) => l.y > page.height - band || l.y < band);
}

/**
 * Bullet glyphs outside the handful parsers reliably understand.
 *
 * Decorative characters tokenize as unknown entities and confuse the stages
 * downstream — roughly an eighth of parsing errors, for purely cosmetic gain.
 */
const SAFE_BULLET_GLYPHS = new Set(['-', '*', '+', '•', '·', '‧', '◦', '–', '—']);

export function detectDecorativeBullets(texts: string[]): string[] {
  const found = new Set<string>();
  for (const text of texts) {
    const first = text.trim()[0];
    if (!first) continue;
    // Any leading symbol that is neither alphanumeric nor a known-safe bullet.
    if (!/[\p{L}\p{N}\s]/u.test(first) && !SAFE_BULLET_GLYPHS.has(first)) {
      found.add(first);
    }
  }
  return [...found];
}
