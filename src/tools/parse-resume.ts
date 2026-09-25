import { DefaultResumeParser, UnsupportedLayoutError } from '../document/index.js';
import type { ResumeParser } from '../document/types.js';
import type { ParseIntegrity, ResumeSessionState } from '../domain.js';
import type { Tool, ToolContext, ToolResult } from './types.js';
import { withoutContactDetails } from '../document/vocabulary.js';

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
      // A layout we decline to read is reported as itself. Folded into the
      // generic message it would read as a broken file, and the one thing the
      // candidate can act on — re-export in a single column — would be buried.
      if (err instanceof UnsupportedLayoutError) {
        ctx.trace?.event(() => ({
          phase: 'failure',
          tool: 'parse_resume',
          status: 'error',
          error: { message: err.reason },
        }));
        return { success: false, error: { code: 'input_error', message: err.reason } };
      }
      ctx.trace?.event(() => ({
        phase: 'failure',
        tool: 'parse_resume',
        status: 'error',
        error: { message: err instanceof Error ? err.message : String(err) },
      }));
      return {
        success: false,
        error: {
          code: 'input_error',
          message: `could not read ${path}: ${err instanceof Error ? err.message : String(err)}`,
        },
      };
    }

    if (resume.meta.quality === 'unreadable') {
      // A shape of its own: the file opened and gave nothing back. Without this
      // the record shows a session that simply never had a document.
      ctx.trace?.event(() => ({
        phase: 'failure',
        tool: 'parse_resume',
        status: 'error',
        error: { message: resume.meta.layoutWarnings[0] ?? 'no readable text' },
        output: { quality: resume.meta.quality, wordCount: resume.meta.wordCount },
      }));
      return {
        success: false,
        error: {
          code: 'input_error',
          message:
            `${resume.meta.layoutWarnings[0] ?? 'no readable text'} — ` +
            'a scanned image has nothing for any of this to read. Ask for a PDF with a text layer.',
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
        reports: undefined,
        documentVersion: 1,
        revisions: undefined,
        // A refusal is about the document it was asked against.
        reviewAttempts: undefined,
      };
    }

    // The shape the whole run then proceeds on.
    //
    // Recorded here rather than inside the parser, because the parser is
    // deterministic and the file is still on disk: anyone can re-run it to get
    // row-level detail. What cannot be recovered afterwards is which shape a
    // particular run was reading when it chose what to dispatch — and a paid
    // run once spent four dispatches on a section that had no entries, with
    // nothing in the record to explain why.
    ctx.trace?.event(() => ({
      phase: 'result',
      tool: 'parse_resume',
      status: 'success',
      target: {},
      output: {
        quality: resume.meta.quality,
        wordCount: resume.meta.wordCount,
        pageCount: resume.meta.pageCount,
        layoutWarnings: resume.meta.layoutWarnings,
        sections: resume.sections.map((section) => ({
          id: section.id,
          kind: section.kind,
          heading: section.heading,
          entries: section.entries.map((entry) => ({
            id: entry.id,
            headerLines: entry.headerLines.length,
            infoLines: (entry.infoLines ?? []).length,
            bullets: entry.bullets.length,
            dated: entry.dateRange !== undefined,
          })),
          // The counts that told the last run's story: bullets and prose the
          // section kept for itself, with no entry to own them.
          sectionBullets: (section.bullets ?? []).length,
          infoLines: (section.infoLines ?? section.looseLines).length,
          classification: section.classification,
        })),
        integrity: resume.meta.integrity,
      },
    }));

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
            // The summary goes back to the model as a tool result, which is
            // a prompt like any other.
            header: withoutContactDetails(entry.headerLines.join(' | ')),
            bullets: entry.bullets.length,
          })),
        })),
        entryCount: entries.length,
        integrity: summarise(resume.meta.integrity),
      },
    };
  },
};

/**
 * How well the parse reconciled, in three numbers.
 *
 * Three, not the whole reconciliation: a model told which rows and which ids
 * cannot do anything about either, and the lists are long enough to crowd out
 * the resume itself. What a model can do with this is decide whether to trust
 * the structure it is about to read, and ask. The detail stays on the session,
 * where a person or a later tool can go and look.
 */
function summarise(integrity: ParseIntegrity | undefined): {
  clean: boolean;
  errorCount: number;
  anomalyCount: number;
} | undefined {
  if (!integrity) return undefined;

  const errorCount =
    new Set([
      ...integrity.droppedRows,
      ...integrity.duplicatedRows,
      ...integrity.unlabelledRows,
    ]).size +
    integrity.emptySections.length +
    integrity.emptyEntries.length +
    integrity.emptyBullets.length +
    integrity.invalidHeadings.length +
    integrity.duplicateIds.length +
    integrity.danglingRefs.length +
    integrity.unmappedSpans.length;

  return {
    clean: errorCount === 0 && integrity.anomalies.length === 0,
    errorCount,
    // Not errors. Shapes the pipeline chose between, where it might have been
    // wrong and said so.
    anomalyCount: integrity.anomalies.length,
  };
}

/**
 * Injected for tests; a real session gets the default.
 *
 * A model-backed labeller used to live here, was removed, and is back — this
 * time answering in row numbers that are converted into the same two arrays the
 * rules produce, so both drive one assembler and can be checked against each
 * other row by row. That was the condition this comment set for its return.
 */
function parserFor(ctx: ToolContext): ResumeParser {
  return (
    (ctx.session?.state?.parser as ResumeParser | undefined) ??
    new DefaultResumeParser(undefined, {
      // Given the engine, the grouping is asked of a model; without one the
      // rules do it. Both are supported, and which happened is in the
      // reconciliation.
      ...(ctx.queryEngine ? { queryEngine: ctx.queryEngine } : {}),
      ...(ctx.abortSignal ? { abortSignal: ctx.abortSignal } : {}),
    })
  );
}
