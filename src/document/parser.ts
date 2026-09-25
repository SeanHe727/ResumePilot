import { extname } from 'node:path';

import type { ParseIntegrity, ResumeDocument } from '../domain.js';
import type { QueryEngine } from '../query-engine/types.js';
import { assemble } from './assemble.js';
import { PdfExtractor } from './extractors/pdf.js';
import { checkIntegrity } from './integrity.js';
import { groupWithModel } from './model-grouping.js';
import { labelRows } from './row-labels.js';
import { findSectionBoundaries } from './section-boundaries.js';
import { classifySection } from './section-kind.js';
import type {
  DocumentExtractor,
  ExtractionResult,
  ResumeParser,
  RowLabel,
  SectionBoundary,
} from './types.js';

export class UnsupportedFormatError extends Error {
  constructor(filePath: string, supported: string[]) {
    super(
      `No extractor handles "${extname(filePath) || filePath}". Supported: ${supported.join(', ')}`,
    );
    this.name = 'UnsupportedFormatError';
  }
}

/**
 * A layout the pipeline will not read, as opposed to one it reads badly.
 *
 * Thrown rather than returned so no `ResumeDocument` is ever built from a
 * multi-column page. A garbled document that looks structurally fine is worse
 * than no document: every reader downstream would take it at face value and
 * report on lines that were assembled from two columns at once.
 */
export class UnsupportedLayoutError extends Error {
  constructor(readonly reason: string) {
    super(reason);
    this.name = 'UnsupportedLayoutError';
  }
}

/**
 * PDF in, three-level document out.
 *
 * One format on purpose. Every stage after extraction reads visual evidence —
 * where a row sits, how far it is indented, how it is set against the rows
 * around it — and a Markdown or DOCX resume has none of that to offer. The
 * pipeline used to map `##` onto a notional font size so that one detector
 * could serve every format, and what that bought was a second structural
 * assembler to keep in step with the first. A format that marks its own
 * structure should produce its own boundaries and labels and share the
 * assembler from there; until something does, it is not read.
 *
 * The parser is called by a Skill with a path the user supplied — never by the
 * model. See the trust-boundary note in `src/tools/types.ts` for why there is
 * no file-reading tool.
 */
export class DefaultResumeParser implements ResumeParser {
  /**
   * The engine is optional, and its absence is a supported mode rather than a
   * degraded one.
   *
   * With it, a model groups the rows — the one judgement the rules cannot make,
   * because a project title set in body type is indistinguishable from a wrapped
   * bullet no matter how the geometry is read. Without it the rules do the
   * grouping, which is also what happens when the model's answer does not
   * account for every row. Both paths are converted into the same two arrays
   * and assembled by the same code.
   */
  constructor(
    private readonly extractors: DocumentExtractor[] = [new PdfExtractor()],
    private readonly deps: { queryEngine?: QueryEngine; abortSignal?: AbortSignal } = {},
  ) {}

  async parse(filePath: string): Promise<ResumeDocument> {
    const extractor = this.extractors.find((e) => e.supports(filePath));
    if (!extractor) {
      throw new UnsupportedFormatError(
        filePath,
        this.extractors.map((e) => e.format),
      );
    }

    const extracted = await extractor.extract(filePath);
    if (extracted.quality === 'unsupported') {
      throw new UnsupportedLayoutError(
        extracted.layoutWarnings[0] ?? 'this layout is not one the parser reads',
      );
    }

    const rows = extracted.rows ?? [];
    const grouped = this.deps.queryEngine && rows.length > 0
      ? await groupWithModel(
          rows,
          median(rows.map((r) => r.dominant.fontSize)) || 1,
          this.deps.queryEngine,
          this.deps.abortSignal,
        ).catch((err: unknown) => ({
          boundaries: [],
          labels: [],
          // A failed call is a fallback, not a failed parse. The résumé is on
          // disk and the rules can read it; refusing to open a file because a
          // model was unreachable would be the worse answer.
          because: err instanceof Error ? err.message : String(err),
        }))
      : undefined;

    return fromRows(extracted, filePath, grouped);
  }
}

/** The body size the features are measured against, as the labeller does it. */
function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)]!;
}

/**
 * The document, assembled from the rows the extractor rebuilt.
 *
 * Every judgement was taken before this: where the sections start, what each
 * row is, which level it belongs to, and — from the assembled shape alone —
 * what each section is. What is left is to check that the answers add up, and
 * to say where they do not.
 */
function fromRows(
  extracted: ExtractionResult,
  sourcePath: string,
  grouped?: { boundaries: SectionBoundary[]; labels: RowLabel[]; because?: string },
): ResumeDocument {
  const rows = extracted.rows ?? [];
  // The model's grouping where there is one, the rules where there is not. The
  // rules also run when the model was asked and could not account for every
  // row, and the anomaly below is what says which of the two happened.
  const declined = grouped !== undefined && grouped.boundaries.length === 0;
  const useModel = grouped !== undefined && !declined;
  const boundaries = useModel ? grouped.boundaries : findSectionBoundaries(rows);
  const labels = useModel ? grouped.labels : labelRows(rows, boundaries);

  const sections = assemble(rows, boundaries, labels).map((section) => {
    const { kind, classification } = classifySection(section);
    return { ...section, kind, classification };
  });

  return {
    sourcePath,
    format: extracted.format,
    rawText: extracted.rawText,
    sections,
    meta: {
      ...(extracted.pageCount !== undefined ? { pageCount: extracted.pageCount } : {}),
      wordCount: countWords(extracted.rawText),
      quality: extracted.quality,
      layoutWarnings: extracted.layoutWarnings,
      // The parse checked against itself, kept rather than logged: where this
      // loses the thread is where a commercial parser will too.
      integrity: withFallbackNoted(
        checkIntegrity(rows, boundaries, labels, sections, extracted.rawText),
        declined ? grouped?.because : undefined,
      ),
    },
  };
}

/**
 * Said in the reconciliation, because it is a fact about how this document was
 * read.
 *
 * A run that fell back is not a run that failed: the rules produce a document.
 * But which of the two grouped it changes what a reader should trust about the
 * entry boundaries, and that cannot be inferred from the result.
 */
function withFallbackNoted(integrity: ParseIntegrity, because?: string): ParseIntegrity {
  if (!because) return integrity;
  return {
    ...integrity,
    anomalies: [
      ...integrity.anomalies,
      { kind: 'model-grouping-declined', at: 'document', detail: because },
    ],
  };
}

/** Words, counting CJK characters one apiece. */
function countWords(text: string): number {
  const cjk = text.match(/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g)?.length ?? 0;
  const latin = text
    .replace(/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return cjk + latin;
}
