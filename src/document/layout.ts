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

/** A stretch of page that is genuinely printing in two columns. */
interface ColumnRegion {
  gutter: { from: number; to: number };
  left: number;
  right: number;
}

/**
 * Finds a stretch of page printing in two columns either side of a gutter.
 *
 * Scans candidate boundaries rather than looking for whitespace across the
 * whole page. Page-wide whitespace was the first attempt and it does not
 * survive contact with real documents: a two-column resume almost always
 * carries the candidate's name across the full width at the top, and one such
 * line covers every bucket the gutter runs through. Measured — a page with six
 * lines each side goes from detected to undetected the moment a banner is
 * added above it, which is to say the guard was blind to the ordinary shape of
 * the layout it exists to refuse.
 *
 * A stretch, not the page, because a line running across the boundary is not a
 * verdict on everything above and below it. A full-width section heading in
 * the middle of a two-column resume leaves two-column layout either side of
 * it, and reading either side straight across still garbles it.
 */
export function detectColumns(lines: PositionedLine[], page: PageGeometry): ColumnReport {
  if (lines.length < MIN_LINES_PER_SIDE * 2 || page.width <= 0) {
    return { multiColumn: false, leftLines: 0, rightLines: 0 };
  }

  const minGutter = page.width * MIN_GUTTER_FRACTION;
  const marginBuckets = Math.floor(BUCKETS * MARGIN_FRACTION);
  const byHeight = [...lines].sort((a, b) => b.y - a.y);
  let best: ColumnRegion | null = null;

  for (let bucket = marginBuckets; bucket <= BUCKETS - marginBuckets; bucket++) {
    const found = strongestRegion(byHeight, (bucket / BUCKETS) * page.width, minGutter);
    if (found && strongerRegion(found, best)) best = found;
  }

  if (!best) return { multiColumn: false, leftLines: lines.length, rightLines: 0 };

  return {
    multiColumn: true,
    gutter: best.gutter,
    leftLines: best.left,
    rightLines: best.right,
  };
}

/**
 * Which of two candidate regions describes the page better.
 *
 * Content either side, not the width of the hole between. Ranked by gutter
 * width the widest hole wins, and the widest hole is the one with the least
 * text beside it: on a six-by-six page a boundary drawn through the left
 * column keeps only the two or three shortest lines on its left and reports
 * the page as three-by-four. The refusal names these counts, and understating
 * them understates the fault.
 */
function strongerRegion(candidate: ColumnRegion, best: ColumnRegion | null): boolean {
  if (!best) return true;
  const lines = candidate.left + candidate.right - (best.left + best.right);
  return lines !== 0
    ? lines > 0
    : candidate.gutter.to - candidate.gutter.from > best.gutter.to - best.gutter.from;
}

/**
 * The strongest two-column stretch at one candidate boundary.
 *
 * Lines arrive top to bottom, and one that runs across the boundary closes
 * whatever stretch was accumulating: a banner, a full-width heading and a
 * footer all divide the page rather than describing it. What survives is the
 * run of rows that sat either side of the same gutter without interruption.
 *
 * This is also what keeps a single-column resume from being refused. Dates set
 * hard right can end up as lines of their own, far enough right to look like a
 * column of their own; the full-width bullets between them cut the page into
 * stretches holding one such date each, and one is not a column.
 */
function strongestRegion(
  byHeight: PositionedLine[],
  at: number,
  minGutter: number,
): ColumnRegion | null {
  const stretches: Array<{ left: PositionedLine[]; right: PositionedLine[] }> = [];
  let open: { left: PositionedLine[]; right: PositionedLine[] } = { left: [], right: [] };

  for (const line of byHeight) {
    if (line.x + line.width <= at) open.left.push(line);
    else if (line.x >= at) open.right.push(line);
    else {
      stretches.push(open);
      open = { left: [], right: [] };
    }
  }
  stretches.push(open);

  let best: ColumnRegion | null = null;
  for (const stretch of stretches) {
    const region = columnRegion(stretch.left, stretch.right, minGutter);
    if (region && strongerRegion(region, best)) best = region;
  }

  return best;
}

/** Whether one uninterrupted stretch is really two columns. */
function columnRegion(
  left: PositionedLine[],
  right: PositionedLine[],
  minGutter: number,
): ColumnRegion | null {
  if (left.length < MIN_LINES_PER_SIDE || right.length < MIN_LINES_PER_SIDE) return null;

  const from = Math.max(...left.map((l) => l.x + l.width));
  const to = Math.min(...right.map((l) => l.x));
  if (to - from < minGutter) return null;

  // The vertical-overlap test is what separates a real two-column layout from
  // a page that merely has short lines: a gutter with content only above-left
  // and below-right is one column with an indented block, and flagging it
  // would cry wolf on perfectly good resumes.
  if (!verticalRangesOverlap(left, right)) return null;

  return { gutter: { from, to }, left: left.length, right: right.length };
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
 *
 * Generic so that whatever is being ordered keeps its own type. Glyph runs
 * carry a font size and a provenance the rebuilt rows need, and narrowing them
 * to `PositionedLine` on the way through would throw exactly that away.
 */
export function naiveReadingOrder<T extends PositionedLine>(lines: T[]): T[] {
  return [...lines].sort((a, b) => a.page - b.page || b.y - a.y || a.x - b.x);
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
