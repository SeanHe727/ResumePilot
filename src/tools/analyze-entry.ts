import type {
  BulletDiagnosis,
  EntryDiagnosis,
  EntryNarrative,
  ResumeEntry,
  ScoredDimension,
} from '../domain.js';
import { ENTRY_SUBSTANCE_PROMPT } from './prompts.js';
import type { Tool, ToolResult } from './types.js';
import { parseJsonObject } from './verify.js';

interface AnalyzeEntryInput {
  entry: ResumeEntry;
  /** Corpus entries already retrieved for the dimensions being checked. */
  references?: Array<{ question: string; weakExample: string; strongExample: string; gap: string }>;
}

/**
 * Substance diagnosis for one entry.
 *
 * One call per entry, not per bullet. A bullet is ~20 words against a ~2,000
 * token prompt, so per-bullet calls spend two orders of magnitude more on
 * overhead than on content — and, more importantly, they cannot see the
 * judgements that only exist across bullets: which two restate each other,
 * whether the strongest result leads, whether the entry reads as a story.
 */
export const analyzeEntryTool: Tool<AnalyzeEntryInput, EntryDiagnosis> = {
  name: 'analyze_entry',
  description:
    'Diagnose the substance of one resume entry: score every bullet on the XYZ formula ' +
    '(impact, measurement, method) and judge the entry as a whole for redundancy, ordering ' +
    'and coherence. Pass the entry with all of its bullets — never one bullet at a time.',
  parameters: {
    type: 'object',
    properties: {
      entry: { type: 'object', description: 'One ResumeEntry with all its bullets' },
      references: {
        type: 'array',
        description: 'Knowledge base entries to judge against',
        items: { type: 'object' },
      },
    },
    required: ['entry'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<EntryDiagnosis>> {
    const entry = input?.entry;
    if (!entry?.bullets?.length) {
      return {
        success: false,
        error: { code: 'input_error', message: 'entry must contain at least one bullet' },
      };
    }

    const response = await ctx.queryEngine.query({
      task: 'diagnose_bullet',
      systemPrompt: ENTRY_SUBSTANCE_PROMPT,
      messages: [{ role: 'user', content: buildUserMessage(input) }],
      ...(ctx.abortSignal ? { abortSignal: ctx.abortSignal } : {}),
    });

    const parsed = parseJsonObject(response.content ?? '');
    if (!parsed) {
      return {
        success: false,
        error: { code: 'service_error', message: 'model did not return a JSON object' },
      };
    }

    return normalise(parsed, entry);
  },
};

function buildUserMessage(input: AnalyzeEntryInput): string {
  const { entry, references } = input;
  const header = entry.headerLines.join(' | ');
  const bullets = entry.bullets.map((b) => `  ${b.id}: ${b.text}`).join('\n');

  const referenceBlock = references?.length
    ? `\nRules to judge against:\n${references
        .map(
          (r, i) =>
            `${i + 1}. ${r.question}\n   weak:   ${r.weakExample}\n   strong: ${r.strongExample}\n   gap:    ${r.gap}`,
        )
        .join('\n')}\n`
    : '';

  return `<resume_content>
Entry: ${header}
Bullets:
${bullets}
</resume_content>
${referenceBlock}
Return JSON of exactly this shape:

{
  "bullets": [
    {
      "bulletId": "<the id given above, verbatim>",
      "overallScore": 0-100,
      "dimensions": {
        "impact":      { "score": 0-100, "detail": "one sentence" },
        "measurement": { "score": 0-100, "detail": "one sentence" },
        "method":      { "score": 0-100, "detail": "one sentence" }
      },
      "issues": ["what is wrong with this bullet, one sentence each"],
      "strengths": ["..."]
    }
  ],
  "narrative": {
    "redundantPairs": [{ "bulletA": "<id>", "bulletB": "<id>", "note": "..." }],
    "weakLead": true|false,
    "coherence": { "score": 0-100, "detail": "one sentence" },
    "suggestedOrder": ["<id>", "<id>"]
  }
}`;
}

/**
 * Converts the model's JSON into the domain type.
 *
 * Deliberately forgiving. An earlier version checked that every quote appeared
 * verbatim in the resume, that every score sat inside 0-100, and that most
 * bullets survived — discarding whatever failed. The effect was to turn a
 * slightly sloppy diagnosis into a mostly empty one, which serves the user
 * worse than a finding they can judge for themselves.
 *
 * The reference project calls `JSON.parse` and returns. This is that, plus
 * defaults for fields the model left out.
 */
function normalise(parsed: Record<string, unknown>, entry: ResumeEntry): ToolResult<EntryDiagnosis> {
  const rawBullets = Array.isArray(parsed.bullets) ? parsed.bullets : [];

  const bullets: BulletDiagnosis[] = (rawBullets as Array<Record<string, unknown>>).map((raw) => {
    const dims = (raw.dimensions ?? {}) as Record<string, unknown>;
    const impact = scored(dims.impact);
    const measurement = scored(dims.measurement);
    const method = scored(dims.method);

    return {
      bulletId: String(raw.bulletId ?? ''),
      overallScore:
        typeof raw.overallScore === 'number'
          ? raw.overallScore
          : Math.round((impact.score + measurement.score + method.score) / 3),
      dimensions: { impact, measurement, method },
      issues: stringArray(raw.issues),
      strengths: stringArray(raw.strengths),
    };
  });

  if (bullets.length === 0) {
    return {
      success: false,
      error: { code: 'service_error', message: 'model returned no bullet diagnoses' },
    };
  }

  return {
    success: true,
    data: {
      entryId: entry.id,
      overallScore: Math.round(
        bullets.reduce((sum, b) => sum + b.overallScore, 0) / bullets.length,
      ),
      bullets,
      narrative: normaliseNarrative(parsed.narrative),
    },
  };
}

function normaliseNarrative(raw: unknown): EntryNarrative {
  const n = (raw ?? {}) as Record<string, unknown>;
  const pairs = Array.isArray(n.redundantPairs) ? n.redundantPairs : [];
  const order = stringArray(n.suggestedOrder);

  return {
    redundantPairs: (pairs as Array<Record<string, unknown>>).map((p) => ({
      bulletA: String(p.bulletA ?? ''),
      bulletB: String(p.bulletB ?? ''),
      note: String(p.note ?? ''),
    })),
    weakLead: n.weakLead === true,
    coherence: scored(n.coherence),
    ...(order.length > 0 ? { suggestedOrder: order } : {}),
  };
}

function scored(raw: unknown): ScoredDimension {
  const r = (raw ?? {}) as Record<string, unknown>;
  return { score: typeof r.score === 'number' ? r.score : 0, detail: String(r.detail ?? '') };
}

function stringArray(raw: unknown): string[] {
  return Array.isArray(raw) ? raw.filter((s): s is string => typeof s === 'string') : [];
}
