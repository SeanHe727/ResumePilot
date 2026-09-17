import type { ResumeSessionState, RewriteSuggestion } from '../domain.js';
import { REWRITE_PROMPT } from '../prompts/index.js';
import type { Tool, ToolContext, ToolResult } from './types.js';
import {
  checkNoErasedNumbers,
  checkNoFabricatedNumbers,
  extractPlaceholders,
  parseJsonObject,
} from './verify.js';

interface RewriteBulletInput {
  bullet: string;
  /**
   * Which line this is, when the caller knows.
   *
   * Only the conversation does — the batch path rewrites text it already has
   * in hand. It decides which of the candidate's supplied figures this rewrite
   * is allowed to use, so an id given wrongly is worse than none.
   */
  bulletId?: string;
  /** Company, role and dates, so the rewrite can use real context. */
  entryContext?: string;
  /** What the diagnosis found wrong, so the rewrite addresses it. */
  issues?: string[];
}

/**
 * What the candidate has said that bears on this bullet.
 *
 * Facts pinned to a different bullet are left out: a figure given about the
 * quantisation line is not licence to put that figure into the fine-tuning
 * one, and the two sit next to each other on the page. Facts with nothing
 * attached are general and count everywhere.
 *
 * A caller that does not say which bullet this is gets only the general ones.
 * The batch path is such a caller, and widening the guard for it would let a
 * figure supplied about one line pass into any other.
 */
function suppliedFigures(ctx: ToolContext, input: RewriteBulletInput): string {
  const facts = (ctx.session?.state as ResumeSessionState | undefined)?.suppliedFacts ?? [];
  const bulletId = input?.bulletId;
  const entryId = bulletId?.split(':').slice(0, 2).join(':');

  return facts
    .filter((f) => {
      if (!f.bulletId && !f.entryId) return true;
      if (!bulletId) return false;
      return f.bulletId ? f.bulletId === bulletId : f.entryId === entryId;
    })
    .map((f) => f.fact)
    .join('\n');
}

export const rewriteBulletTool: Tool<RewriteBulletInput, RewriteSuggestion> = {
  name: 'rewrite_bullet',
  description:
    'Rewrite one resume bullet into the XYZ shape, keeping every fact the original asserts. ' +
    'Figures the original does not contain come back as bracketed placeholders with a question ' +
    'the candidate can answer, never as invented numbers.',
  parameters: {
    type: 'object',
    properties: {
      bullet: { type: 'string', description: 'The bullet to rewrite, verbatim' },
      bulletId: {
        type: 'string',
        description:
          'The id of that bullet. Pass it when you know it: it is what lets the rewrite use ' +
          'figures the candidate gave you for this line rather than only what is on the page.',
      },
      entryContext: { type: 'string', description: 'Company, role and dates for context' },
      issues: {
        type: 'array',
        description: 'Findings the rewrite should address',
        items: { type: 'string' },
      },
    },
    required: ['bullet'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<RewriteSuggestion>> {
    const bullet = input?.bullet?.trim();
    if (!bullet) {
      return { success: false, error: { code: 'input_error', message: 'bullet must not be empty' } };
    }

    const response = await ctx.queryEngine.query({
      task: 'rewrite_bullet',
      systemPrompt: REWRITE_PROMPT,
      messages: [{ role: 'user', content: buildUserMessage(input, bullet) }],
      jsonMode: true,
      ...(ctx.abortSignal ? { abortSignal: ctx.abortSignal } : {}),
    });

    const parsed = parseJsonObject(response.content ?? '');
    const after = typeof parsed?.after === 'string' ? parsed.after.trim() : '';
    if (!parsed || !after) {
      return {
        success: false,
        error: { code: 'service_error', message: 'model did not return a rewritten bullet' },
      };
    }

    // The guard the whole tool exists for. The prompt asks the model not to
    // invent figures and the schema gives it somewhere to say what is missing,
    // but both are requests. This is the constraint: any number in the rewrite
    // that never appeared in the original is a fabrication, and a fabricated
    // metric on a real resume is a question the candidate cannot answer.
    //
    // Anything the candidate said in this session counts as the original for
    // this purpose. The point of the conversation is to get a figure onto a
    // line that lacked one, and a guard reading only the page rejects every
    // rewrite that succeeds at it.
    const fabrication = checkNoFabricatedNumbers(bullet, after, suppliedFigures(ctx, input));
    if (!fabrication.ok) {
      return {
        success: false,
        error: {
          code: 'service_error',
          message:
            `rewrite invented figures not present in the original: ${fabrication.figures.join(', ')}. ` +
            'Rewrite again using bracketed placeholders for anything the source does not state.',
        },
      };
    }

    // The mirror failure: not inventing data, but replacing the candidate's own
    // figures with blanks for them to re-enter.
    const erasure = checkNoErasedNumbers(bullet, after);
    if (!erasure.ok) {
      return {
        success: false,
        error: {
          code: 'service_error',
          message:
            `rewrite dropped every figure the original stated (${erasure.figures.join(', ')}). ` +
            'Keep the numbers that are already there; placeholders are only for figures the ' +
            'original does not contain.',
        },
      };
    }

    const placeholders = extractPlaceholders(after);

    const declared = Array.isArray(parsed.needsInput)
      ? parsed.needsInput.filter((s): s is string => typeof s === 'string')
      : [];

    const alternative = readAlternative(parsed.noInputAlternative, bullet);

    return {
      success: true,
      data: {
        before: bullet,
        after,
        rationale: String(parsed.rationale ?? ''),
        // A placeholder with nothing said about it leaves the user staring at
        // "[X%]" with no idea what to look up, so any undeclared one is
        // surfaced from the text itself.
        needsInput: mergeNeeds(declared, placeholders),
        // Only meaningful when the recommended version asks for something; with
        // no placeholders the two would be the same sentence.
        ...(placeholders.length > 0 && alternative ? { noInputAlternative: alternative } : {}),
      },
    };
  },
};

/**
 * The version for a candidate who cannot find the numbers.
 *
 * Held to the same fabrication check as the primary rewrite, and additionally
 * required to contain no placeholder — an "asks nothing of you" alternative
 * that still has a blank in it is not one.
 */
function readAlternative(
  raw: unknown,
  bullet: string,
): { after: string; rationale: string } | null {
  if (!raw || typeof raw !== 'object') return null;
  const alt = raw as Record<string, unknown>;
  const after = typeof alt.after === 'string' ? alt.after.trim() : '';

  if (!after) return null;
  if (extractPlaceholders(after).length > 0) return null;
  if (!checkNoFabricatedNumbers(bullet, after).ok) return null;

  return { after, rationale: String(alt.rationale ?? '') };
}

function buildUserMessage(input: RewriteBulletInput, bullet: string): string {
  const context = input.entryContext ? `Entry: ${input.entryContext}\n` : '';
  const issues = input.issues?.length
    ? `\nFindings to address:\n${input.issues.map((i) => `- ${i}`).join('\n')}\n`
    : '';

  return `<resume_content>
${context}Bullet: ${bullet}
</resume_content>
${issues}
Return JSON of exactly this shape:

{
  "after": "the recommended rewrite, with at most two placeholders",
  "rationale": "one sentence on what changed and why",
  "needsInput": ["what was the latency before your change?", "..."],
  "noInputAlternative": {
    "after": "a version with no figures and no placeholders, usable as written",
    "rationale": "one sentence"
  }
}

Omit "noInputAlternative" entirely when "after" contains no placeholder.`;
}

/**
 * A placeholder with nothing said about it leaves the candidate staring at
 * "[X%]" with no idea what to look up.
 *
 * The generic fallback only fires when the model gave fewer questions than
 * placeholders — matching them up by text is unreliable, and appending
 * "supply a value for X%" next to "by what percentage did latency drop?" is
 * noise, not help.
 */
function mergeNeeds(declared: string[], placeholders: string[]): string[] {
  if (declared.length >= placeholders.length) return declared;

  const needs = [...declared];
  for (const placeholder of placeholders.slice(declared.length)) {
    needs.push(`supply a value for "${placeholder}"`);
  }
  return needs;
}
