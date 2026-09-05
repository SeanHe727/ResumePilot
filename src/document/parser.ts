import { extname } from 'node:path';

import type { ResumeDocument } from '../domain.js';
import { DocxExtractor } from './extractors/docx.js';
import { MarkdownExtractor } from './extractors/markdown.js';
import { PdfExtractor } from './extractors/pdf.js';
import { HeuristicSectionDetector } from './section-detector.js';
import { HeuristicStructureBuilder } from './structure-builder.js';
import type {
  DocumentExtractor,
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
    return this.builder.build(extracted, sections, filePath);
  }
}
