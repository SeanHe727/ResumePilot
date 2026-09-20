import { extname } from 'node:path';

import type { ResumeDocument, SectionKind } from '../domain.js';
import { assemble } from './assemble.js';
import { PdfExtractor } from './extractors/pdf.js';
import { labelRows } from './row-labels.js';
import { findSectionBoundaries } from './section-boundaries.js';
import { SECTION_PATTERNS } from './vocabulary.js';
import type { DocumentExtractor, ExtractionResult, ResumeParser } from './types.js';

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
  constructor(private readonly extractors: DocumentExtractor[] = [new PdfExtractor()]) {}

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

    return fromRows(extracted, filePath);
  }
}

/**
 * The document, assembled from the rows the extractor rebuilt.
 *
 * Every judgement was taken before this: where the sections start, what each
 * row is, which level it belongs to. What is left is naming the sections, and
 * that is done here only until B4 does it properly — from the heading's own
 * words, which is the weakest of the three kinds of evidence a section offers.
 */
function fromRows(extracted: ExtractionResult, sourcePath: string): ResumeDocument {
  const rows = extracted.rows ?? [];
  const boundaries = findSectionBoundaries(rows);
  const labels = labelRows(rows, boundaries);

  const sections = assemble(rows, boundaries, labels).map((section) => ({
    ...section,
    kind: provisionalKind(section.heading),
  }));

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
    },
  };
}

/**
 * What a section is called, read from its heading alone.
 *
 * A placeholder for B4, which weighs the shape of the section above the word
 * at the top of it — a section called `Leadership` holding three dated entries
 * with bullets is experience whatever its heading says. Until then the heading
 * is all that is read, and a block with no heading of its own is the contact
 * block, which is the one case the heading cannot speak for.
 */
function provisionalKind(heading: string): SectionKind {
  if (!heading) return 'contact';
  const cleaned = heading.trim().replace(/[:：]\s*$/, '');
  return SECTION_PATTERNS.find(({ pattern }) => pattern.test(cleaned))?.kind ?? 'other';
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
