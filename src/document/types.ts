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

export interface ExtractionResult {
  format: SourceFormat;
  rawText: string;
  blocks: TextBlock[];
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
  build(result: ExtractionResult, sections: SectionCandidate[], sourcePath: string): ResumeDocument;
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
  /** Prose that belongs to no entry, e.g. a skills list or the contact block. */
  | 'loose';
