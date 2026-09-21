import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, extname } from 'node:path';

import type { ExtractionQuality, SourceFormat } from '../../domain.js';
import {
  detectColumns,
  detectDecorativeBullets,
  detectMarginContent,
  naiveReadingOrder,
  type ColumnReport,
  type PageGeometry,
  type PositionedLine,
} from '../layout.js';
import type {
  DocumentExtractor,
  ExtractionResult,
  Fragment,
  RowStyle,
  TextBlock,
  TextRun,
  VisualRow,
} from '../types.js';
import { EMAIL, PHONE } from '../vocabulary.js';

/** Baselines closer together than this belong to the same visual line. */
const LINE_TOLERANCE_PT = 2.5;

/**
 * Font sizes this close apart are the same size.
 *
 * A size is recovered as `hypot` of the text matrix, so two runs set in the
 * same font can differ in the last bits. Compared exactly, that difference
 * reads as a change of type and puts a space in the middle of a word. Real
 * changes on a resume are half a point or more.
 */
const SIZE_TOLERANCE_PT = 0.1;

/** One rebuilt line, with the style the glyphs underneath it were drawn in. */
export interface StyledLine {
  line: PositionedLine;
  fontSize: number;
  bold: boolean;
}

/**
 * One page, with the geometry and the columns that belong to it.
 *
 * The extractor used to keep a single `geometry`, reassigned each time round
 * the page loop, so every geometric check ran against whichever page happened
 * to be parsed last. Page size is per page — mixed Letter and A4 in one file is
 * unusual but legal — and so is the gutter: a resume whose first page is two
 * columns and whose second is one has two different reading orders, and only
 * one of them was ever used.
 */
export interface PageLayout {
  number: number;
  geometry: PageGeometry;
  /** Every glyph run on the page, in the order the content stream drew them. */
  runs: TextRun[];
  /**
   * The same runs merged the way a naive extractor merges them: joined to
   * whichever run came immediately before, if they share a baseline.
   *
   * Kept alongside `runs` because this, not the rebuilt rows, is what the
   * column guard has to measure. Regrouping a page's runs by baseline joins
   * the left column to the right one across the gutter, which fills the gutter
   * in and leaves nothing for `detectColumns` to find — measured on
   * `two-column.pdf`, which goes from detected to undetected. The guard has to
   * see the page before the rebuild, and the rebuild is only sound on a page
   * the guard has already passed.
   */
  styled: StyledLine[];
  columns: ColumnReport;
}

let cachedFontsDir: string | undefined;

function standardFontsDir(): string {
  if (!cachedFontsDir) {
    const require = createRequire(import.meta.url);
    cachedFontsDir = `${dirname(require.resolve('pdfjs-dist/package.json'))}/standard_fonts/`;
  }
  return cachedFontsDir;
}

/**
 * PDF text extraction.
 *
 * A PDF stores glyphs and positions, not paragraphs — pdf.js hands back one
 * item per text run, often mid-word. Rebuilding lines from baselines is
 * unavoidable, and doing it by position rather than by the file's internal
 * drawing order is what lets the layout checks below mean anything.
 */
export class PdfExtractor implements DocumentExtractor {
  readonly format: SourceFormat = 'pdf';

  supports(filePath: string): boolean {
    return extname(filePath).toLowerCase() === '.pdf';
  }

  async extract(filePath: string): Promise<ExtractionResult> {
    // The default build assumes a browser; pdf.js itself asks for `legacy` in
    // Node and throws on load otherwise.
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');

    const data = new Uint8Array(await readFile(filePath));
    const doc = await pdfjs.getDocument({
      data,
      // Point pdf.js at the metrics it ships with. Without them it cannot size
      // the 14 standard PDF fonts, and font size is the signal section
      // detection leans on hardest.
      standardFontDataUrl: standardFontsDir(),
      // Never let opening a resume cause an outbound request; a PDF is free to
      // reference remote font resources.
      useWorkerFetch: false,
    }).promise;

    const pages: PageLayout[] = [];

    for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber++) {
      const page = await doc.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1 });
      const geometry: PageGeometry = { width: viewport.width, height: viewport.height };

      // Weight is read from the font's name, and the name a text item carries
      // is a generated id — `g_d0_f1` — until the page's fonts are resolved.
      // Measured: on both resumes to hand, every item reported an id, so the
      // bold test never fired once and the whole signal was dead. Building the
      // operator list is what populates `commonObjs`, and it is the only way
      // to the real name from here.
      await page.getOperatorList();
      const content = await page.getTextContent();
      const named = fontNamer(page);

      const runs = readRuns(content.items, pageNumber, named);
      const styled = mergeIntoLines(content.items, pageNumber, named);

      pages.push({
        number: pageNumber,
        geometry,
        runs,
        styled,
        columns: detectColumns(
          styled.map((s) => s.line),
          geometry,
        ),
      });
    }

    // No text layer at all: the file is a scan. Nothing downstream can run, and
    // saying so is more useful than any OCR guess would be.
    if (pages.every((page) => page.runs.length === 0)) {
      return {
        format: 'pdf',
        rawText: '',
        blocks: [],
        rows: [],
        pageCount: doc.numPages,
        quality: 'unreadable',
        layoutWarnings: [
          'no text layer — this PDF is a scanned image, and an ATS reads nothing from it',
        ],
      };
    }

    // Multi-column is a refusal, not a warning. Every stage after this one
    // assumes the lines arrive in the order a person reads them, and in two
    // columns they do not — the text is interleaved before anything has had a
    // chance to look at it. No blocks come back on purpose: a diagnosis of a
    // garbled document is a diagnosis of something the candidate never wrote.
    const unsupported = unsupportedLayout(pages);
    if (unsupported) {
      return {
        format: 'pdf',
        rawText: '',
        blocks: [],
        rows: [],
        pageCount: doc.numPages,
        quality: 'unsupported',
        layoutWarnings: [unsupported],
      };
    }

    const layoutWarnings = analyseLayout(pages);

    // Single column by now, which is what makes rebuilding rows from bare
    // geometry safe: two runs on one baseline can only be two parts of one row.
    const { rows, rawText } = layOutRows(pages);

    const quality: ExtractionQuality = layoutWarnings.length > 0 ? 'degraded' : 'clean';
    return {
      format: 'pdf',
      rawText,
      blocks: rows.map(toBlock),
      // Kept alongside the blocks, not instead of them: a block is one style
      // for a whole row and no way back to the runs, and the stages that want
      // the style a row starts in should not have to re-derive it.
      rows,
      pageCount: doc.numPages,
      quality,
      layoutWarnings,
    };
  }
}

/**
 * The real name behind a text item's font id.
 *
 * Falls back to the id when the font is not resolved — a page whose operator
 * list could not be built, a font pdf.js declined to load. An id never matches
 * the weight test, so the fallback reads as "not bold", which is the answer
 * that claims least.
 */
function fontNamer(page: unknown): (id: string | undefined) => string {
  const objs = (page as { commonObjs?: { get(id: string): unknown } }).commonObjs;

  return (id) => {
    if (!id) return '';
    try {
      return (objs?.get(id) as { name?: string } | undefined)?.name ?? id;
    } catch {
      return id;
    }
  };
}

/** Bold, black, heavy — the weights a resume sets a name or a heading in. */
const BOLD_FONT = /bold|black|heavy/i;

interface PdfTextItem {
  str: string;
  transform: number[];
  width: number;
  height: number;
  fontName: string;
  hasEOL: boolean;
}

/** Reads pdf.js items into runs, dropping the whitespace-only ones. */
function readRuns(
  items: unknown[],
  page: number,
  named: (id: string | undefined) => string,
): TextRun[] {
  const runs: TextRun[] = [];

  for (const raw of items) {
    const item = raw as Partial<PdfTextItem>;
    if (typeof item.str !== 'string' || !Array.isArray(item.transform)) continue;
    if (!item.str.trim()) continue;

    const [, , c, d, x, y] = item.transform as number[];
    runs.push({
      text: item.str,
      x: x ?? 0,
      y: y ?? 0,
      width: item.width ?? 0,
      page,
      // The transform's scale, not the font's nominal size: a 10pt font set in
      // a scaled text matrix prints at whatever the matrix says.
      fontSize: Math.hypot(c ?? 0, d ?? 0),
      bold: BOLD_FONT.test(named(item.fontName)),
    });
  }

  return runs;
}

/**
 * Lines as a naive extractor builds them: each item joined to the one drawn
 * immediately before it when they share a baseline, and broken wherever the
 * file says a line ended.
 *
 * Deliberately the wrong way to rebuild a line — it is what an ATS does, and
 * the column guard has to see the page as an ATS sees it. `layOutRows` is the
 * right way, and runs only after the guard has passed.
 *
 * It reads the pdf.js items rather than the runs for the sake of `hasEOL`,
 * which is the whole reason the two passes are not one. A two-column page
 * drawn a row at a time puts the left and right columns on one baseline, and
 * that flag is the only thing keeping them apart; merge them and the gutter
 * fills in, leaving `detectColumns` nothing to find. Whitespace-only items are
 * dropped everywhere else and carry nothing but that flag here.
 */
function mergeIntoLines(
  items: unknown[],
  page: number,
  named: (id: string | undefined) => string,
): StyledLine[] {
  const out: StyledLine[] = [];
  let current: StyledLine | null = null;

  for (const raw of items) {
    const item = raw as Partial<PdfTextItem>;
    if (typeof item.str !== 'string' || !Array.isArray(item.transform)) continue;
    if (!item.str.trim()) {
      if (item.hasEOL && current) {
        out.push(current);
        current = null;
      }
      continue;
    }

    const [, , c, d, x, y] = item.transform as number[];
    const fontSize = Math.hypot(c ?? 0, d ?? 0);
    const bold = BOLD_FONT.test(named(item.fontName));

    if (current && Math.abs(current.line.y - (y ?? 0)) <= LINE_TOLERANCE_PT) {
      const gap = (x ?? 0) - (current.line.x + current.line.width);
      current.line.text += gap > fontSize * 0.2 ? ` ${item.str}` : item.str;
      current.line.width = (x ?? 0) + (item.width ?? 0) - current.line.x;
      current.fontSize = Math.max(current.fontSize, fontSize);
      current.bold = current.bold || bold;
    } else {
      if (current) out.push(current);
      current = {
        line: { text: item.str, x: x ?? 0, y: y ?? 0, width: item.width ?? 0, page },
        fontSize,
        bold,
      };
    }

    if (item.hasEOL && current) {
      out.push(current);
      current = null;
    }
  }

  if (current) out.push(current);
  return out.filter((s) => s.line.text.trim().length > 0);
}

/**
 * Rebuilds visual rows from geometry, and lays them out as text.
 *
 * Grouping is by page and baseline only. The drawing order the runs arrive in
 * is discarded on purpose: it is the source of the bug this replaces, where a
 * right-aligned date emitted after the line below it became a row of its own.
 * Within a row the runs are sorted left to right, which is the only order in
 * which reassembling them produces the sentence that was printed.
 *
 * Text and offsets are produced in the same pass, so a fragment's span is the
 * range its own characters actually occupy in `rawText` — recomputing them
 * later would mean reimplementing the spacing rule and hoping the two agree.
 */
export function layOutRows(pages: PageLayout[]): { rows: VisualRow[]; rawText: string } {
  const ordered = naiveReadingOrder(pages.flatMap((page) => page.runs));

  // Reading order already has same-baseline runs adjacent and sorted by x, so
  // one walk is enough: a run opens a new row when it changes page or steps
  // off the baseline the row started on.
  const groups: TextRun[][] = [];
  let open: TextRun[] | null = null;

  for (const run of ordered) {
    const anchor = open?.[0];
    if (anchor && anchor.page === run.page && Math.abs(anchor.y - run.y) <= LINE_TOLERANCE_PT) {
      open!.push(run);
      continue;
    }
    open = [run];
    groups.push(open);
  }

  const rows: VisualRow[] = [];
  let rawText = '';

  for (const group of groups) {
    const anchor = group[0]!;

    // Reading order sorts by baseline before x, so a row whose runs sit a
    // point or two apart vertically arrives grouped but not in reading order.
    // Left to right is the only order that reassembles the printed sentence,
    // and it is also what lets the spacing rule below compare each run against
    // the right edge of everything placed before it.
    const placedRuns = [...group].sort((a, b) => a.x - b.x);

    const start = rawText.length;
    const fragments: Fragment[] = [];
    let text = '';
    let previous: TextRun | null = null;
    let right = placedRuns[0]!.x;

    for (const [i, run] of placedRuns.entries()) {
      // The row as a whole is trimmed, so trim at its ends rather than after
      // the fact: offsets recorded now have to survive into `rawText` intact.
      let placed = run.text;
      if (i === 0) placed = placed.trimStart();
      if (i === placedRuns.length - 1) placed = placed.trimEnd();

      if (text && !continuesWord(previous, right, run)) text += ' ';

      const from = start + text.length;
      text += placed;
      previous = run;
      right = Math.max(right, run.x + run.width);
      fragments.push({
        ...run,
        text: placed,
        span: { start: from, end: start + text.length, page: run.page },
      });
    }

    if (!text) continue;

    const left = placedRuns[0]!.x;
    rows.push({
      index: rows.length,
      text,
      page: anchor.page,
      x: left,
      y: anchor.y,
      width: right - left,
      fontSize: Math.max(...group.map((run) => run.fontSize)),
      bold: group.some((run) => run.bold),
      leading: { fontSize: fragments[0]!.fontSize, bold: fragments[0]!.bold },
      dominant: dominantStyle(fragments),
      fragments,
      span: { start, end: start + text.length, page: anchor.page },
    });
    rawText += `${text}\n`;
  }

  return { rows, rawText };
}

/**
 * Multi-column layout, which this system does not read.
 *
 * `detectColumns` outlives the decision not to support columns, in a narrower
 * role: it is the input guard. A two-column resume is refused with an
 * explanation rather than parsed into a plausible-looking document whose lines
 * came from two places at once.
 */
export function unsupportedLayout(pages: PageLayout[]): string | null {
  const columned = pages.filter((page) => page.columns.multiColumn);
  if (columned.length === 0) return null;

  const worst = columned.reduce((a, b) => (weakerSide(b) > weakerSide(a) ? b : a));
  const where = pages.length > 1 ? ` on page ${columned.map((page) => page.number).join(', ')}` : '';

  return (
    `multi-column layout detected${where} (${worst.columns.leftLines} lines left, ` +
    `${worst.columns.rightLines} right) — an extractor reads straight across the page and ` +
    'weaves the columns into one stream, so nothing downstream would be reading your resume. ' +
    'Re-export it in a single column and try again.'
  );
}

/** How much the thinner column carries — the page most plainly in two. */
function weakerSide(page: PageLayout): number {
  return Math.min(page.columns.leftLines, page.columns.rightLines);
}

/**
 * Layout warnings, measured per page and reported once.
 *
 * Every check here is geometric, and page geometry is per page: a letter-size
 * first page and an A4 second page have different margins, and the band
 * `detectMarginContent` looks in is a fraction of a height that was previously
 * whichever page happened to be parsed last.
 *
 * Reported once rather than once per page on purpose. Each warning becomes a
 * blocker worth 25 points in `scoreAtsParsability`, and a fault that repeats on
 * every page is still one fault. The pages are named in the text instead.
 */
export function analyseLayout(pages: PageLayout[]): string[] {
  const warnings: string[] = [];
  const multiPage = pages.length > 1;

  const inMargin = pages.filter((page) =>
    detectMarginContent(
      page.styled.map((s) => s.line),
      page.geometry,
    ).some((l) => EMAIL.test(l.text) || PHONE.test(l.text) || /https?:\/\//.test(l.text)),
  );
  if (inMargin.length > 0) {
    const where = multiPage ? ` (page ${inMargin.map((page) => page.number).join(', ')})` : '';
    warnings.push(
      `contact details sit in the page header or footer${where}, which many parsers drop entirely`,
    );
  }

  // Glyph choice is a property of the document, not of any one page.
  const decorative = detectDecorativeBullets(
    pages.flatMap((page) => page.styled.map((s) => s.line.text)),
  );
  if (decorative.length > 0) {
    warnings.push(`decorative bullet glyphs (${decorative.join(' ')}) tokenize as unknown entities`);
  }

  return warnings;
}

/**
 * Whether a run carries on the word the run before it started.
 *
 * pdf.js splits a run wherever the kerning or the font changes, so half the
 * words on a page arrive in two pieces and a space between them would be a
 * word the candidate never wrote. The test is that the page left no gap — and
 * that the type did not change, because a kerning split cannot change it.
 *
 * The second half earns its place on a measured case: a full-width entry
 * header whose right-aligned date begins, to a tenth of a point, exactly where
 * the description ends. On the gap alone the two join into one invented word,
 * and the date parser then reads the tail of the previous word as a month.
 */
function continuesWord(previous: TextRun | null, right: number, run: TextRun): boolean {
  if (!previous) return false;
  if (run.x - right > run.fontSize * 0.2) return false;
  return sameStyle(previous, run);
}

function sameStyle(a: RowStyle, b: RowStyle): boolean {
  return a.bold === b.bold && Math.abs(a.fontSize - b.fontSize) <= SIZE_TOLERANCE_PT;
}

/**
 * The style most of the row's characters are set in.
 *
 * Counted in characters rather than in runs, because a run is however much
 * text the file happened to emit in one go: a date on the right is one run and
 * the sentence it sits beside is often four, so counting runs would call the
 * date a quarter of the row. Ties keep the leftmost style, which is the one
 * the row reads as.
 */
function dominantStyle(fragments: Fragment[]): RowStyle {
  const tally: Array<{ style: RowStyle; chars: number }> = [];

  for (const fragment of fragments) {
    const seen = tally.find((t) => sameStyle(t.style, fragment));
    if (seen) seen.chars += fragment.text.length;
    else tally.push({ style: { fontSize: fragment.fontSize, bold: fragment.bold }, chars: fragment.text.length });
  }

  return tally.reduce((most, next) => (next.chars > most.chars ? next : most)).style;
}

/** One row as the flat block the stages downstream read. */
function toBlock(row: VisualRow): TextBlock {
  return {
    text: row.text,
    page: row.page,
    bbox: { x: row.x, y: row.y, width: row.width, height: row.fontSize },
    fontSize: row.fontSize,
    bold: row.bold,
    span: row.span,
  };
}
