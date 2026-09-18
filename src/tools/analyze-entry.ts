import type {
  ClaimCheck,
  BulletDiagnosis,
  EntryDiagnosis,
  ResumeEntry,
  ScoredDimension,
} from '../domain.js';
import { renderEntry } from '../document/index.js';
import { CONTENT_PROMPT } from '../prompts/index.js';
import type { Tool, ToolResult } from './types.js';
import { parseJsonObject } from './verify.js';

export interface AnalyzeEntryInput {
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
      systemPrompt: CONTENT_PROMPT,
      messages: [{ role: 'user', content: buildEntryMessage(input) }],
      ...(ctx.abortSignal ? { abortSignal: ctx.abortSignal } : {}),
    });

    const parsed = parseJsonObject(response.content ?? '');
    if (!parsed) {
      return {
        success: false,
        error: { code: 'service_error', message: 'model did not return a JSON object' },
      };
    }

    return normaliseEntryDiagnosis(parsed, entry);
  },
};

/** Exported so a sub-agent asks for the same shape this tool does. */
export function buildEntryMessage(input: AnalyzeEntryInput): string {
  const { entry, references } = input;


  const referenceBlock = references?.length
    ? `\nRules to judge against:\n${references
        .map(
          (r, i) =>
            `${i + 1}. ${r.question}\n   weak:   ${r.weakExample}\n   strong: ${r.strongExample}\n   gap:    ${r.gap}`,
        )
        .join('\n')}\n`
    : '';

  return `<resume_content>
${renderEntry(entry)}
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
      "strengths": ["..."],
      "claimsToVerify": [
        {
          "kind": "technology|figure|method",
          "claim": "what you checked, quoted from the bullet where possible",
          "basis": "the technology, figure source or approach it rests on",
          "finding": "what the check showed, or what came back empty"
        }
      ]
    }
  ],
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
export function normaliseEntryDiagnosis(
  parsed: Record<string, unknown>,
  entry: ResumeEntry,
): ToolResult<EntryDiagnosis> {
  const rawBullets = Array.isArray(parsed.bullets) ? parsed.bullets : [];

  const bullets: BulletDiagnosis[] = (rawBullets as Array<Record<string, unknown>>).map((raw) => {
    const dims = (raw.dimensions ?? {}) as Record<string, unknown>;
    const impact = scored(dims.impact);
    const measurement = scored(dims.measurement);
    const method = scored(dims.method);

    return {
      // Every line is shown as `- [id] text`, and a model handed a bracketed
      // id hands it back bracketed. Left alone it matches no bullet in the
      // document, so the score lands on nothing: the report finds no line to
      // attach it to and a rewrite cannot find the text it is rewriting.
      bulletId: bareId(raw.bulletId),
      overallScore:
        typeof raw.overallScore === 'number'
          ? raw.overallScore
          : Math.round((impact.score + measurement.score + method.score) / 3),
      dimensions: { impact, measurement, method },
      issues: stringArray(raw.issues),
      strengths: stringArray(raw.strengths),
      claimsToVerify: claimChecks(raw.claimsToVerify),
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
    },
  };
}


function scored(raw: unknown): ScoredDimension {
  const r = (raw ?? {}) as Record<string, unknown>;
  return { score: typeof r.score === 'number' ? r.score : 0, detail: String(r.detail ?? '') };
}

/**
 * A finding that only reports what the resume left out.
 *
 * "Not externally verifiable from the bullet", "came back empty from the
 * resume text" — these describe reading the line, not searching for anything,
 * and they are true of every bullet ever written. Nothing couples this field
 * to an actual tool call, so satisfying a required check by writing a sentence
 * is cheaper than making one — and under the first version most of the checks
 * a run reported had been filled that way.
 *
 * Narrow on purpose: it fires only where the finding names the resume as the
 * thing that came back empty. A search that genuinely found nothing is a
 * result worth keeping.
 */
const READ_NOT_SEARCHED =
  /(?:from|in|within) the (?:resume|bullet|line|entry)\b|(?:resume|bullet) (?:text |itself )?provides no|not (?:externally )?verifiable from/i;

/**
 * Forgiving, like the rest of this parser.
 *
 * A model that skipped the field, or filled it with the wrong shape, has
 * produced a diagnosis worth keeping minus one section — dropping the whole
 * entry over it serves the user worse than a finding they can judge.
 */
function claimChecks(raw: unknown): ClaimCheck[] {
  if (!Array.isArray(raw)) return [];

  return raw.flatMap((item) => {
    if (!item || typeof item !== 'object') return [];
    const row = item as Record<string, unknown>;
    const claim = typeof row.claim === 'string' ? row.claim.trim() : '';
    if (!claim) return [];

    const finding = typeof row.finding === 'string' ? row.finding : '';
    if (READ_NOT_SEARCHED.test(finding)) return [];

    const kind = row.kind;
    return [{
      // Defaults to `figure` because that is the axis a model reaches for on
      // its own, so an unlabelled check is overwhelmingly likely to be one.
      kind: kind === 'technology' || kind === 'method' ? kind : 'figure',
      claim,
      basis: typeof row.basis === 'string' ? row.basis : '',
      finding,
    }];
  });
}

function stringArray(raw: unknown): string[] {
  return Array.isArray(raw) ? raw.filter((s): s is string => typeof s === 'string') : [];
}

/** Ids are shown bracketed, so they come back bracketed. */
function bareId(raw: unknown): string {
  return String(raw ?? '').replace(/[[\]]/g, '').trim();
}
