import { DEEP_RESEARCH_AGENT } from '../agent/roles.js';
import { renderEntry } from '../document/index.js';
import type { ResumeSessionState } from '../domain.js';
import type { Tool, ToolContext, ToolResult } from './types.js';

interface ExamineDepthInput {
  entryId: string;
  /** What to put to the specialist. One question; call again for another. */
  question: string;
}

interface Finding {
  bulletId: string;
  what: string;
  why: string;
}

/**
 * A specialist in the entry's own field, created for one question.
 *
 * Every other tool the content reader holds is a lookup: a query in, some text
 * back. This is an agent — its own prompt, its own turns, its own search budget
 * — and it exists for the length of this call. Nothing is kept: `run` builds a
 * context, spends it, and returns.
 *
 * One question per call, and the caller asks again for the next one. A single
 * call carrying four questions comes back with one answer covering all of them
 * badly, and there is no way to keep half of what it said.
 */
export const examineDepthTool: Tool<ExamineDepthInput, unknown> = {
  name: 'examine_technical_depth',
  description:
    'Put one question about this entry to a specialist in its own technical field — an ' +
    'architecture choice, why one approach rather than another, whether a chain of reasoning ' +
    'holds, what a stated result depends on. Worth it where a judgement turns on knowing the ' +
    'field rather than on reading the line. Costs a nested agent run, so ask about what you ' +
    'cannot settle yourself. What comes back is more detail than a resume line can hold: take ' +
    'from it what changes your reading.',
  parameters: {
    type: 'object',
    properties: {
      entryId: { type: 'string', description: 'The entry being reviewed' },
      question: {
        type: 'string',
        description: 'The one thing you want a practitioner in this field to tell you',
      },
    },
    required: ['entryId', 'question'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<unknown>> {
    const entryId = input?.entryId?.trim();
    const question = input?.question?.trim();
    if (!entryId || !question) {
      return {
        success: false,
        error: { code: 'input_error', message: 'entryId and question are both required' },
      };
    }
    if (!ctx.subAgents) {
      return {
        success: false,
        error: { code: 'service_error', message: 'no specialist is reachable on this path' },
      };
    }

    const resume = (ctx.session?.state as ResumeSessionState | undefined)?.resume;
    const entry = resume?.sections.flatMap((s) => s.entries).find((e) => e.id === entryId);
    if (!entry) {
      return {
        success: false,
        error: { code: 'input_error', message: `no entry ${entryId} in this session` },
      };
    }

    const result = await ctx.subAgents.run({
      agentConfig: DEEP_RESEARCH_AGENT,
      input: `The question:\n${question}\n\nThe entry:\n<resume_content>\n${renderEntry(entry)}\n</resume_content>`,
      context: { entry: entry.headerLines.join(' | ') },
    });

    if (!result.success) {
      return {
        success: false,
        error: { code: 'service_error', message: result.error ?? 'the specialist returned nothing' },
      };
    }

    const output = (result.output ?? {}) as Record<string, unknown>;
    const ids = new Set(entry.bullets.map((b) => b.id));
    const raw = Array.isArray(output.findings) ? output.findings : [];

    return {
      success: true,
      data: {
        domain: typeof output.domain === 'string' ? output.domain : '',
        findings: raw.flatMap((item): Finding[] => {
          const record = item as Record<string, unknown> | null;
          const what = typeof record?.what === 'string' ? record.what.trim() : '';
          // Models hand ids back bracketed the way they were shown them.
          const bulletId = String(record?.bulletId ?? '').replace(/[[\]]/g, '').trim();
          // An id the specialist invented would attach a finding to a line the
          // candidate never wrote, and the reader would score it as theirs.
          if (!what || !ids.has(bulletId)) return [];
          return [{ bulletId, what, why: typeof record?.why === 'string' ? record.why : '' }];
        }),
      },
    };
  },
};

