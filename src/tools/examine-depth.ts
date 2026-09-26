import { DEEP_RESEARCH_AGENT } from '../agent/roles.js';
import { renderEntry } from '../document/index.js';
import type { ResumeSessionState } from '../domain.js';
import type { Tool, ToolContext, ToolResult } from './types.js';
import { withoutContactDetails } from '../document/vocabulary.js';

interface ExamineDepthInput {
  /**
   * The line the question is about, or the entry when it is about the whole
   * entry. One field, because two — `entryId` and `bulletId` — is a choice the
   * caller can get wrong, and did: a content reader asked about four bullets in
   * a row by putting each bullet's id into `entryId`, was rejected four times,
   * and the entry carrying every figure in the résumé went unresearched. The
   * ids are all it takes to tell which kind was meant.
   */
  about?: string;
  /** Accepted as `about`. A caller working from older wording still lands. */
  entryId?: string;
  bulletId?: string;
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
      about: {
        type: 'string',
        description:
          'What the question is about, by the id shown in brackets in the resume content (without the brackets): a ' +
          "bullet's id when the question is about one line, or the entry's id when it is about " +
          'the whole entry. Either kind is accepted — do not convert one into the other.',
      },
      question: {
        type: 'string',
        description: 'The one thing you want a practitioner in this field to tell you',
      },
    },
    required: ['about', 'question'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<unknown>> {
    // The brackets are how the id is shown, not part of it. Measured: told to
    // use "the id shown in brackets", the reader passed `[s2:e0:b0]` thirteen
    // times in one run and was refused every time.
    const about = (input?.about ?? input?.bulletId ?? input?.entryId)?.trim().replace(/^\[(.*)\]$/, '$1').trim();
    const question = input?.question?.trim();
    if (!about || !question) {
      return {
        success: false,
        error: { code: 'input_error', message: 'about and question are both required' },
      };
    }
    if (!ctx.subAgents) {
      return {
        success: false,
        error: { code: 'service_error', message: 'no specialist is reachable on this path' },
      };
    }

    const resume = (ctx.session?.state as ResumeSessionState | undefined)?.resume;
    const entries = resume?.sections.flatMap((s) => s.entries) ?? [];

    // An entry id, or a bullet id resolved to the entry that holds it. Being
    // permissive here is the whole fix: the id the caller sent was always
    // enough to find the entry, and refusing it bought four wasted calls and a
    // gap in the review.
    const entry =
      entries.find((e) => e.id === about) ??
      entries.find((e) => e.bullets.some((b) => b.id === about));
    if (!entry) {
      // Say what would have been legal. A refusal that only says no is a
      // refusal the caller can only answer by guessing again.
      const known = entries.map((e) => e.id).join(', ');
      return {
        success: false,
        error: {
          code: 'input_error',
          message: `no entry or bullet ${about} in this session. Entries: ${known || 'none'}`,
        },
      };
    }

    const bullet = entry.bullets.find((b) => b.id === about);
    const result = await ctx.subAgents.run({
      agentConfig: DEEP_RESEARCH_AGENT,
      input:
        `The question:\n${question}\n\n` +
        // Named when there is one. The researcher's findings come back keyed by
        // bullet id, and a question about one line reads differently from a
        // question about the entry it sits in.
        (bullet ? `It is about this line:\n[${bullet.id}] ${bullet.text}\n\n` : '') +
        `The entry:\n<resume_content>\n${renderEntry(entry)}\n</resume_content>`,
      context: { entry: withoutContactDetails(entry.headerLines.join(' | ')) },
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

