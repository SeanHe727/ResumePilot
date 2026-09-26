import { VERIFY_CLAIMS_PROMPT } from '../prompts/index.js';
import type { Tool, ToolResult } from './types.js';
import { parseJsonObject } from './verify.js';

interface VerifyClaimsInput {
  /** Short questions, each standing on its own, with no résumé text in them. */
  questions: string[];
}

export interface ClaimAnswer {
  question: string;
  /** yes / no to the question as asked; `depends` and `unsure` say which. */
  verdict: 'yes' | 'no' | 'depends' | 'unsure';
  reason: string;
}

/** Enough for an entry's worth of claims; more is a list, not a check. */
const MAX_QUESTIONS = 10;

/**
 * Chain-of-verification, answered without the résumé.
 *
 * The content reader takes a line's claims on trust unless something already
 * makes it suspicious, and a wrong claim that reads fluently never does.
 * Measured: "cut single-request latency by serving with dynamic batching" was
 * read as a missing baseline, while the same model, asked outright whether
 * dynamic batching lowers single-request latency, would say no. So the claims
 * are put as short questions to a call that never sees the line: it cannot be
 * led by the line's confidence, only by what it knows (Dhuliawala et al.,
 * 2023, the factored variant).
 *
 * One call for all of an entry's questions: they are independent of each
 * other as well as of the résumé, and each needs a sentence, not a turn.
 */
export const verifyClaimsTool: Tool<VerifyClaimsInput, { answers: ClaimAnswer[] }> = {
  name: 'verify_claims',
  description:
    'Check the claims you are taking on trust. Put each as a short question that stands on its ' +
    'own — "Does dynamic batching lower the latency of a single request?" — with no resume text ' +
    'and no candidate names. They are answered by someone who never sees the resume. Up to ' +
    `${MAX_QUESTIONS} per call; one call per entry is usually enough.`,
  parameters: {
    type: 'object',
    properties: {
      questions: {
        type: 'array',
        items: { type: 'string' },
        description: 'Yes-or-no questions about the field or the arithmetic, each self-contained',
      },
    },
    required: ['questions'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<{ answers: ClaimAnswer[] }>> {
    const questions = (Array.isArray(input?.questions) ? input.questions : [])
      .filter((q): q is string => typeof q === 'string')
      .map((q) => q.trim())
      .filter(Boolean);
    if (questions.length === 0) {
      return { success: false, error: { code: 'input_error', message: 'questions must hold at least one question' } };
    }
    if (questions.length > MAX_QUESTIONS) {
      return {
        success: false,
        error: {
          code: 'input_error',
          message: `at most ${MAX_QUESTIONS} questions per call; send the ones that could turn out wrong first`,
        },
      };
    }

    const response = await ctx.queryEngine.query({
      task: 'verify_claims',
      systemPrompt: VERIFY_CLAIMS_PROMPT,
      messages: [
        {
          role: 'user',
          content:
            questions.map((q, i) => `${i + 1}. ${q}`).join('\n') +
            `\n\nReply with JSON only:\n{ "answers": [ { "n": 1, "verdict": "yes | no | depends | unsure", "reason": "one or two sentences" } ] }`,
        },
      ],
      abortSignal: ctx.abortSignal,
    });

    const parsed = parseJsonObject(response.content ?? '');
    const raw = Array.isArray(parsed?.answers) ? parsed.answers : [];
    const verdicts = ['yes', 'no', 'depends', 'unsure'] as const;
    const answers = questions.map((question, i): ClaimAnswer => {
      const record = (raw.find((a) => Number((a as Record<string, unknown>)?.n) === i + 1) ?? raw[i]) as
        | Record<string, unknown>
        | undefined;
      const verdict = verdicts.find((v) => v === record?.verdict) ?? 'unsure';
      return { question, verdict, reason: typeof record?.reason === 'string' ? record.reason.trim() : '' };
    });
    return { success: true, data: { answers } };
  },
};
