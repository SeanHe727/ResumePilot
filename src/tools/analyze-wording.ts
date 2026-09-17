import type { ResumeEntry, ScoredDimension, WordingDiagnosis } from '../domain.js';
import { ENTRY_WORDING_PROMPT } from '../prompts/index.js';
import type { Tool, ToolResult } from './types.js';
import { parseJsonObject } from './verify.js';

interface AnalyzeWordingInput {
  entry: ResumeEntry;
}

/**
 * Wording diagnosis for one entry.
 *
 * Split from substance because the two need different inputs: judging verbs and
 * concision needs neither the knowledge base nor the surrounding bullets, so it
 * runs on a cheaper model with a smaller prompt. Merging them would pay frontier
 * prices to count filler words, and would dilute both judgements into one
 * over-loaded JSON.
 */
export const analyzeWordingTool: Tool<AnalyzeWordingInput, WordingDiagnosis> = {
  name: 'analyze_wording',
  description:
    'Judge how one entry is written — verb strength and concision per bullet. Does not judge ' +
    'technical depth or whether the achievement matters; `analyze_entry` covers that.',
  parameters: {
    type: 'object',
    properties: {
      entry: { type: 'object', description: 'One ResumeEntry with all its bullets' },
    },
    required: ['entry'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<WordingDiagnosis>> {
    const entry = input?.entry;
    if (!entry?.bullets?.length) {
      return {
        success: false,
        error: { code: 'input_error', message: 'entry must contain at least one bullet' },
      };
    }

    const response = await ctx.queryEngine.query({
      // Its own task so the router can send it to the cheap model — the whole
      // reason wording is a separate pass rather than more fields on the
      // substance one.
      task: 'judge_wording',
      systemPrompt: ENTRY_WORDING_PROMPT,
      messages: [{ role: 'user', content: buildWordingMessage(entry) }],
      ...(ctx.abortSignal ? { abortSignal: ctx.abortSignal } : {}),
    });

    const parsed = parseJsonObject(response.content ?? '');
    if (!parsed) {
      return {
        success: false,
        error: { code: 'service_error', message: 'model did not return a JSON object' },
      };
    }

    const rows = Array.isArray(parsed.perBullet) ? parsed.perBullet : [];
    const perBullet: WordingDiagnosis['perBullet'] = (
      rows as Array<Record<string, unknown>>
    ).map((raw) => ({
      bulletId: String(raw.bulletId ?? ''),
      verbStrength: scored(raw.verbStrength),
      concision: scored(raw.concision),
      issues: stringArray(raw.issues),
    }));

    if (perBullet.length === 0) {
      return {
        success: false,
        error: { code: 'service_error', message: 'model returned no wording scores' },
      };
    }

    return {
      success: true,
      data: {
        entryId: entry.id,
        overallScore: Math.round(
          perBullet.reduce((sum, b) => sum + (b.verbStrength.score + b.concision.score) / 2, 0) /
            perBullet.length,
        ),
        perBullet,
      },
    };
  },
};

/** Exported so a sub-agent asks for the same shape this tool does. */
export function buildWordingMessage(entry: ResumeEntry): string {
  const bullets = entry.bullets.map((b) => `  ${b.id}: ${b.text}`).join('\n');

  return `<resume_content>
${bullets}
</resume_content>

Return JSON of exactly this shape:

{
  "perBullet": [
    {
      "bulletId": "<the id given above, verbatim>",
      "verbStrength": { "score": 0-100, "detail": "one sentence" },
      "concision":    { "score": 0-100, "detail": "one sentence" },
      "issues": ["what is wrong with the wording, one sentence each"]
    }
  ]
}`;
}

function scored(raw: unknown): ScoredDimension {
  const r = (raw ?? {}) as Record<string, unknown>;
  return { score: typeof r.score === 'number' ? r.score : 0, detail: String(r.detail ?? '') };
}

function stringArray(raw: unknown): string[] {
  return Array.isArray(raw) ? raw.filter((s): s is string => typeof s === 'string') : [];
}
