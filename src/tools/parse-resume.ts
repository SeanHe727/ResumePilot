import { DefaultResumeParser, ModelDocumentSegmenter } from '../document/index.js';
import type { ResumeParser } from '../document/types.js';
import type { ResumeSessionState } from '../domain.js';
import type { Tool, ToolContext, ToolResult } from './types.js';

interface ParseResumeInput {
  path: string;
}

/**
 * Reading a file and understanding a document are two jobs.
 *
 * `/upload` puts a path on the session; this turns a path into a parsed
 * document. They were one command until someone pasted a path to a newer draft
 * mid-conversation — at which point the parsing was locked inside a command the
 * coordinator cannot call, and the only way to read the new file was to start
 * over.
 *
 * The trust boundary still holds where it matters: no tool opens an arbitrary
 * file for the model to read back. This one returns what was found — sections,
 * entry count, extraction quality — and leaves the document on the session,
 * where a review reaches it by id. The text itself comes back through the
 * resume layer of the context, not through a tool result.
 */
export const parseResumeTool: Tool<ParseResumeInput, unknown> = {
  name: 'parse_resume',
  description:
    'Read a resume file and make it the document this session is about. Use it when the ' +
    'candidate gives you a path — a new draft, a different version — or when nothing is loaded ' +
    'yet. Replaces whatever was loaded before; earlier reviews stop applying.',
  parameters: {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'Where the file is, as the candidate gave it' },
    },
    required: ['path'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<unknown>> {
    const path = input?.path?.trim();
    if (!path) {
      return { success: false, error: { code: 'input_error', message: 'path must not be empty' } };
    }

    let resume;
    try {
      resume = await parserFor(ctx).parse(path);
    } catch (err) {
      return {
        success: false,
        error: {
          code: 'input_error',
          message: `could not read ${path}: ${err instanceof Error ? err.message : String(err)}`,
        },
      };
    }

    if (resume.meta.quality === 'unreadable') {
      return {
        success: false,
        error: {
          code: 'input_error',
          message:
            `${resume.meta.layoutWarnings[0] ?? 'no readable text'} — ` +
            'a scanned image has nothing for any of this to read. Ask for a text PDF or a .docx.',
        },
      };
    }

    // A document replaces the one before it, and the readings of that one stop
    // being about anything. Left in place they would reach a report as findings
    // about lines that are no longer there.
    if (ctx.session) {
      const state = (ctx.session.state ?? {}) as ResumeSessionState;
      ctx.session.sourcePath = path;
      ctx.session.state = {
        ...state,
        resume,
        entryDiagnoses: undefined,
        wordingDiagnoses: undefined,
        formatDiagnosis: undefined,
        narrative: undefined,
        jdMatch: undefined,
        latestReport: undefined,
      };
    }

    const entries = resume.sections.flatMap((section) => section.entries);
    return {
      success: true,
      data: {
        path,
        quality: resume.meta.quality,
        wordCount: resume.meta.wordCount,
        layoutWarnings: resume.meta.layoutWarnings,
        sections: resume.sections.map((section) => ({
          heading: section.heading || section.kind,
          kind: section.kind,
          entries: section.entries.map((entry) => ({
            id: entry.id,
            header: entry.headerLines.join(' | '),
            bullets: entry.bullets.length,
          })),
        })),
        entryCount: entries.length,
      },
    };
  },
};

/** Injected for tests; a real session gets the model-backed line labeller. */
function parserFor(ctx: ToolContext): ResumeParser {
  return (
    (ctx.session?.state?.parser as ResumeParser | undefined) ??
    new DefaultResumeParser(undefined, undefined, undefined, new ModelDocumentSegmenter(ctx.queryEngine))
  );
}
