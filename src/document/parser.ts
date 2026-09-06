import { extname } from 'node:path';

import type { ResumeDocument } from '../domain.js';
import { DocxExtractor } from './extractors/docx.js';
import { MarkdownExtractor } from './extractors/markdown.js';
import { PdfExtractor } from './extractors/pdf.js';
import { HeuristicSectionDetector } from './section-detector.js';
import { HeuristicStructureBuilder } from './structure-builder.js';
import type {
  DocumentExtractor,
  DocumentSegmenter,
  ResumeParser,
  SectionDetector,
  StructureBuilder,
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
 * Three stages, one per hard problem: get text off the page, work out where the
 * sections are, then assemble the three-level document.
 *
 * The stages are separate because only the first is format-specific. Adding PDF
 * means adding an extractor; detection and assembly are untouched, and their
 * tests keep passing.
 *
 * The parser is called by a Skill with a path the user supplied — never by the
 * model. See the trust-boundary note in `src/tools/types.ts` for why there is no
 * file-reading tool.
 */
export class DefaultResumeParser implements ResumeParser {
  constructor(
    private readonly extractors: DocumentExtractor[] = [
      new MarkdownExtractor(),
      new PdfExtractor(),
      new DocxExtractor(),
    ],
    private readonly detector: SectionDetector = new HeuristicSectionDetector(),
    private readonly builder: StructureBuilder = new HeuristicStructureBuilder(),
    /**
     * Optional. Absent, the rules decide every line's role, which is what the
     * whole pipeline did before and still does for a Markdown resume that
     * marks its own structure.
     */
    private readonly segmenter?: DocumentSegmenter,
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
    const sections = this.detector.detect(extracted);

    // The rules are the fallback, not the failure case. They read a Markdown
    // resume correctly, and on a PDF they are a working answer when there is
    // no key, the call fails, or the reply does not line up with the input.
    const labels = (await this.segmenter?.segment(extracted)) ?? undefined;

    return this.builder.build(extracted, sections, filePath, labels);
  }
}
