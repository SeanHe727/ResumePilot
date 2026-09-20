/**
 * The resume parsing pipeline — this project's replacement for the reference
 * project's STT layer. Same shape of problem: an unstructured artefact has to
 * become timestamped/positioned structured text before anything else can run.
 */
import type {
  ExtractionQuality,
  ResumeDocument,
  SectionKind,
  SourceFormat,
  SourceSpan,
} from '../domain.js';
import type { PositionedLine } from './layout.js';

/** A run of text with its position on the page, before sections are inferred. */
export interface TextBlock {
  text: string;
  page: number;
  /** Points from the top-left of the page. Absent for non-paginated sources. */
  bbox?: { x: number; y: number; width: number; height: number };
  fontSize?: number;
  bold?: boolean;
  span: SourceSpan;
}

/**
 * One run of glyphs, exactly as the page drew it.
 *
 * pdf.js hands back one item per run, often mid-word, and the order it hands
 * them back in is the order the content stream draws them — which is not the
 * order anybody reads them in. This is the atom; a row is what gets rebuilt.
 */
export interface TextRun extends PositionedLine {
  fontSize: number;
  bold: boolean;
}

/** A run once it has been placed in `rawText`, so its characters are findable. */
export interface Fragment extends TextRun {
  span: SourceSpan;
}

/** Type as the page set it, for one run or for the stretch of a row. */
export interface RowStyle {
  fontSize: number;
  bold: boolean;
}

/**
 * One visual row: everything printed on one baseline of one page, left to
 * right, regardless of when the file got round to drawing it.
 *
 * Rebuilt by geometry rather than by drawing order, which is the whole point.
 * An entry header whose right-hand date is emitted after the line below it
 * used to become a row of its own — and, being set in a larger size than the
 * title beside it, the one the structure builder picked as the entry's name.
 * Measured on a real resume: one section parsed into four entries, two empty
 * shells and two named after a date range, where there were two.
 *
 * `fragments` is the provenance. Style, page and character offsets all resolve
 * back through it, which the old identity-keyed lookup could not survive.
 */
export interface VisualRow extends PositionedLine {
  /** Position in reading order across the whole document. */
  index: number;
  /** Largest of the runs. Says whether anything on the row is emphasized. */
  fontSize: number;
  /** True if any run is bold. Same reading as `fontSize`: anywhere, not all. */
  bold: boolean;
  /**
   * The style the row starts in, and the style most of its characters are set
   * in — two readings of the row that `fontSize` and `bold` cannot give.
   *
   * Those two answer "is anything here emphasized", which is the wrong
   * question for deciding whether a row is a section heading: a body line with
   * a larger date on the right, or one bold word in the middle, reads as a
   * heading through the maximum and reads as body through either of these.
   * Whoever is labelling rows should say which reading it wants.
   */
  leading: RowStyle;
  dominant: RowStyle;
  fragments: Fragment[];
  span: SourceSpan;
}

/**
 * One section of the document, as a range of rows. Not yet a kind.
 *
 * Cutting and classifying are separated on purpose. A cut is decided from
 * layout — how the row is set, how much air is above it, how short it is —
 * and what the section *is* can only be decided once its whole body is
 * visible. Answering both at once is what let a heading the vocabulary did not
 * recognise become a section of unknown kind and then be treated as prose.
 *
 * `headingRow` is not inside `[fromRow, toRow)`: the range is the body. A
 * section covers its heading row plus its body, and the leading block of a
 * resume — name, email, links — is a section with a body and no heading.
 */
export interface SectionBoundary {
  /** Position in the cut, counting from the top of the document. */
  index: number;
  /** The row that names the section. Absent for the block above the first. */
  headingRow?: number;
  fromRow: number;
  /** Half-open: the first row of the next section, or the end of the document. */
  toRow: number;
  /**
   * How sure the cut is.
   *
   * It does not soften the cut — there is no softer cut than splitting or not
   * splitting. It is carried so a later stage can weigh a boundary that was
   * guessed against one the document named.
   */
  confidence: number;
  evidence: string[];
}

/**
 * What a row looks like, measured before anything is decided from it.
 *
 * The features are computed once and the rules read only these, so that a
 * model asked to label rows and the rules that label them by hand are looking
 * at the same thing and answering in the same vocabulary. A rule reaching past
 * this into the row itself is a rule the model cannot be held to.
 */
export interface RowFeatures {
  /** Dominant font size over the document's body size. */
  sizeRatio: number;
  bold: boolean;
  capsRatio: number;
  /** Points right of the leftmost row in this section's body. */
  indent: number;
  /** Distance from the row above, in body line spacings. Zero at a page top. */
  gapAbove: number;
  startsWithBullet: boolean;
  hasDateRange: boolean;
  hasContact: boolean;
  charCount: number;
  wordCount: number;
}

/**
 * What a row is, inside the section it belongs to.
 *
 * `section-heading` is missing on purpose: where the sections start is settled
 * before this runs, and a labeller that could also move a boundary would be
 * deciding the same thing twice from less evidence.
 */
export type RowRole =
  /** Employer, title, dates — the header of one position, project or degree. */
  | 'entry-header'
  | 'bullet'
  /**
   * The rest of the row above. A page gives one row per printed line, so a
   * bullet long enough to wrap arrives as two or three rows and only the
   * first carries the marker.
   */
  | 'continuation'
  /** Prose belonging to no entry — a skills list, the block above the first heading. */
  | 'loose';

export interface RowLabel {
  rowIndex: number;
  role: RowRole;
  /**
   * Set on the row that opens an entry. Only meaningful on `entry-header`.
   *
   * A header can run to two rows — employer on one, title and dates on the
   * next — so consecutive header rows are ambiguous on their own: two degrees
   * listed one after another look exactly like one degree whose header
   * wrapped. Only the labeller can tell them apart.
   */
  startsEntry?: boolean;
  /**
   * Where the row's own words start, past any bullet marker.
   *
   * Given here so the assembler can slice rather than match. Stripping a
   * marker is a judgement about what counts as one, and it belongs with the
   * other judgements rather than in the one stage that is meant to have none.
   */
  contentFrom?: number;
  confidence: number;
  evidence: string[];
}

export interface ExtractionResult {
  format: SourceFormat;
  rawText: string;
  blocks: TextBlock[];
  /**
   * The rebuilt rows the blocks were flattened from, where the source has a
   * geometry to rebuild them from.
   *
   * A `TextBlock` is what the stages downstream read today, and it is lossy:
   * one style for the whole row, no index, and no way back to the runs. The
   * rows are kept alongside so that a stage which wants the gap above a row,
   * the style its first fragment was set in, or the run a phrase came from
   * does not have to re-derive any of it from offsets.
   *
   * Absent for sources with no geometry — Markdown and DOCX mark their own
   * structure, and inventing coordinates for them would be inventing evidence.
   */
  rows?: VisualRow[];
  pageCount?: number;
  quality: ExtractionQuality;
  /** Multi-column layout, tables, glyph problems — things that break ATS too. */
  layoutWarnings: string[];
}

/** One extractor per source format. Adding a format means adding an extractor. */
export interface DocumentExtractor {
  readonly format: SourceFormat;
  supports(filePath: string): boolean;
  extract(filePath: string): Promise<ExtractionResult>;
}

export interface SectionCandidate {
  kind: SectionKind;
  heading: string;
  confidence: number;
  span: SourceSpan;
}

/**
 * Section detection is heuristic first (heading keywords, font weight, spacing)
 * and only escalates to the model for blocks it cannot classify confidently —
 * mirroring how the reference project handled speaker separation.
 */
export interface SectionDetector {
  detect(result: ExtractionResult): SectionCandidate[];
}

/**
 * Turns flat blocks plus detected section boundaries into the three-level
 * document. Named for what it builds rather than how: a section holds entries,
 * and only an entry holds bullets — the level diagnosis actually runs on.
 */
export interface StructureBuilder {
  build(
    result: ExtractionResult,
    sections: SectionCandidate[],
    sourcePath: string,
    /** When present, every line already has a role and none is inferred. */
    labels?: LabelledLine[],
  ): ResumeDocument;
}

export interface ResumeParser {
  parse(filePath: string): Promise<ResumeDocument>;
}

/** A line's role, decided before any structure is assembled. */
export type LineRole =
  | 'section-heading'
  /** Company, title, dates — the header of one position or project. */
  | 'entry-header'
  | 'bullet'
  /**
   * The rest of the line above. PDF extraction gives one block per visual line
   * and only the first carries the marker, so a bullet long enough to wrap
   * arrives as two or three blocks.
   */
  | 'continuation'
  /** Prose that belongs to no entry, e.g. a skills list or the contact block. */
  | 'loose';

export interface LabelledLine {
  /** Index into the block list the labels were produced from. */
  index: number;
  role: LineRole;
  /** Present when `role` is `section-heading`. */
  kind?: SectionKind;
  /**
   * Set on the first line of an entry's header.
   *
   * A header can run to two lines — employer on one, title and dates on the
   * next — so consecutive header lines are ambiguous on their own: two degrees
   * listed one after another look exactly like one degree whose header wrapped.
   * Only the labeller can tell them apart.
   */
  startsEntry?: boolean;
}

/**
 * Decides what each line is, when the markup does not say.
 *
 * The reference project met the same problem one layer over: a transcript with
 * speaker labels was split by rule, and one without was handed to the model.
 * A Markdown resume marks its own structure with `##` and `-`; a PDF marks it
 * with font size and indentation, and those mean opposite things in different
 * templates — a LaTeX resume commonly sets section names smaller than the
 * employers under them.
 *
 * Returns null when it cannot help — no key, a failed call, a reply that does
 * not line up with the input — and the caller falls back to the rules.
 */
export interface DocumentSegmenter {
  segment(result: ExtractionResult): Promise<LabelledLine[] | null>;
}
