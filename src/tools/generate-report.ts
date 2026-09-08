import type {
  DiagnosisReport,
  EntryDiagnosis,
  FormatDiagnosis,
  ImprovementPlan,
  JdMatch,
  NarrativeAssessment,
  ResumeDocument,
  ResumeEntry,
  WordingDiagnosis,
} from '../domain.js';
import type { Tool, ToolContext, ToolResult } from './types.js';
import { parseJsonObject } from './verify.js';

interface GenerateReportInput {
  resume: ResumeDocument;
  format: FormatDiagnosis;
  entries: EntryDiagnosis[];
  wording?: WordingDiagnosis[];
  narrative?: NarrativeAssessment;
  jdMatch?: JdMatch;
}

/**
 * Aggregates every diagnosis into one report.
 *
 * The arithmetic — averages, recurring themes, per-entry summaries — is done
 * here rather than by the model, because it is arithmetic. Only the improvement
 * plan needs judgement, and that is the single model call this tool makes.
 */
export const generateReportTool: Tool<GenerateReportInput, DiagnosisReport> = {
  name: 'generate_report',
  description:
    'Combine the format, substance, wording and job-description diagnoses into one report: ' +
    'overall score, per-entry summary, recurring strengths and weaknesses, and a plan split ' +
    'into what can be fixed now, what needs the candidate to dig up figures, and what needs ' +
    'new experience.',
  parameters: {
    type: 'object',
    properties: {
      resume: { type: 'object', description: 'The parsed resume' },
      format: { type: 'object', description: 'Output of analyze_format' },
      entries: { type: 'array', description: 'One EntryDiagnosis per entry', items: { type: 'object' } },
      wording: { type: 'array', description: 'One WordingDiagnosis per entry', items: { type: 'object' } },
      narrative: { type: 'object', description: 'Cross-entry narrative assessment' },
      jdMatch: { type: 'object', description: 'Job-description match' },
    },
    required: ['resume', 'format', 'entries'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<DiagnosisReport>> {
    if (!input?.resume || !input.format || !Array.isArray(input.entries)) {
      return {
        success: false,
        error: { code: 'input_error', message: 'resume, format and entries are all required' },
      };
    }

    const allEntries = input.resume.sections.flatMap((s) => s.entries);
    const summary = summarise(input, allEntries);
    const improvementPlan = await buildImprovementPlan(input, summary.topWeaknesses, ctx);

    return {
      success: true,
      data: {
        summary,
        perEntry: perEntry(allEntries, input.entries),
        format: input.format,
        ...(input.narrative ? { narrative: input.narrative } : {}),
        ...(input.jdMatch ? { jdMatch: input.jdMatch } : {}),
        improvementPlan,
      },
    };
  },
};

function summarise(
  input: GenerateReportInput,
  allEntries: ResumeEntry[],
): DiagnosisReport['summary'] {
  const substanceAvg = average(input.entries.map((e) => e.overallScore));
  const wordingAvg = average((input.wording ?? []).map((w) => w.overallScore));
  const formatScore = input.format.overallScore;

  // Format carries the most weight for the same reason it does inside
  // `analyzeFormat`: every other axis assumes the text was read intact.
  const parts: Array<[number, number]> = [
    [formatScore, 0.3],
    [substanceAvg, 0.4],
    [wordingAvg || substanceAvg, 0.15],
    [input.narrative?.overallScore ?? substanceAvg, 0.075],
    [input.jdMatch?.overallScore ?? substanceAvg, 0.075],
  ];
  const overallScore = Math.round(parts.reduce((sum, [score, weight]) => sum + score * weight, 0));

  const bullets = input.entries.flatMap((e) => e.bullets);

  return {
    totalEntries: allEntries.length,
    totalBullets: allEntries.reduce((sum, e) => sum + e.bullets.length, 0),
    overallScore,
    substanceAvg,
    wordingAvg,
    formatScore,
    ...(input.narrative ? { narrativeScore: input.narrative.overallScore } : {}),
    ...(input.jdMatch ? { jdScore: input.jdMatch.overallScore } : {}),
    topStrengths: topRecurring(bullets.flatMap((b) => b.strengths), 3),
    topWeaknesses: topRecurring(
      [...bullets.flatMap((b) => b.issues), ...input.format.issues],
      3,
    ),
  };
}

function perEntry(
  allEntries: ResumeEntry[],
  diagnoses: EntryDiagnosis[],
): DiagnosisReport['perEntry'] {
  const byId = new Map(diagnoses.map((d) => [d.entryId, d]));

  return allEntries.map((entry) => {
    const diagnosis = byId.get(entry.id);
    const bulletScores = new Map(diagnosis?.bullets.map((b) => [b.bulletId, b]) ?? []);

    return {
      entryId: entry.id,
      label: [entry.organization, entry.title].filter(Boolean).join(' — ') || entry.headerLines[0] || entry.id,
      score: diagnosis?.overallScore ?? 0,
      topIssue: diagnosis?.bullets.flatMap((b) => b.issues)[0] ?? 'not diagnosed',
      bullets: entry.bullets.map((bullet) => {
        const scored = bulletScores.get(bullet.id);
        return {
          bulletId: bullet.id,
          text: bullet.text,
          score: scored?.overallScore ?? 0,
          topIssue: scored?.issues[0] ?? '',
        };
      }),
    };
  });
}

/**
 * The one part that needs judgement rather than arithmetic.
 *
 * Split by what it costs the candidate to act, not by severity: a mechanical
 * fix they can apply in the next five minutes belongs in a different list from
 * a gap only new experience can close, however serious each is.
 */
async function buildImprovementPlan(
  input: GenerateReportInput,
  topWeaknesses: string[],
  ctx: ToolContext,
): Promise<ImprovementPlan> {
  const findings = [
    ...topWeaknesses,
    ...input.format.issues.slice(0, 5),
    ...input.entries.flatMap((e) => e.bullets.flatMap((b) => b.issues)).slice(0, 8),
  ];

  if (findings.length === 0) {
    return { immediate: [], shortTerm: [], longTerm: [] };
  }

  const ask = () => ctx.queryEngine.query({
    task: 'generate_report',
    systemPrompt: IMPROVEMENT_PLAN_PROMPT,
    messages: [
      {
        role: 'user',
        content: `Findings from the diagnosis:\n${findings.map((f) => `- ${f}`).join('\n')}

Return JSON of exactly this shape:

{
  "immediate": ["fixes the candidate can apply right now, without looking anything up"],
  "shortTerm": ["rewrites that need the candidate to dig up real figures"],
  "longTerm": ["gaps only new experience can close"]
}`,
      },
    ],
    ...(ctx.abortSignal ? { abortSignal: ctx.abortSignal } : {}),
  });

  // A thinking model charges its reasoning against the same token cap, so a
  // long deliberation can leave nothing over for the answer: `content` comes
  // back empty, all three lists parse as empty, and the report drops the plan
  // with no error raised anywhere. One retry, for the same reason the
  // orchestrator gives a sub-agent one — the second attempt usually reasons
  // its way to writing something down.
  let response = await ask();
  if (response.stopReason === 'max_tokens' && !response.content?.trim()) {
    response = await ask();
  }

  const parsed = parseJsonObject(response.content ?? '');
  return {
    immediate: stringArray(parsed?.immediate),
    shortTerm: stringArray(parsed?.shortTerm),
    longTerm: stringArray(parsed?.longTerm),
  };
}

const IMPROVEMENT_PLAN_PROMPT = `You turn a list of resume findings into a plan, split by what acting on each one
costs the candidate.

- immediate: they can fix it right now, from the page alone. Deleting a pronoun,
  reordering bullets, renaming a section, switching to a single column.
- shortTerm: the fix is clear but needs a figure they have to go and find —
  checking a dashboard, asking a former colleague, digging through a ticket.
- longTerm: no amount of rewriting closes it. The experience itself is missing.

Order each list by how much the change would move a reader's judgement.
Be specific: name the section or the bullet, not the rule. No preamble.

Reply with JSON only, matching the schema in the user message.`;

function average(values: number[]): number {
  return values.length === 0 ? 0 : Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

/**
 * The findings that recur across bullets.
 *
 * A weakness appearing in one bullet is a line to fix; the same weakness in six
 * is the thing to tell the candidate about. Grouping is by the first few words,
 * which is crude but enough to cluster "no measurable outcome" phrasings that
 * differ only in their tail.
 */
function topRecurring(items: string[], limit: number): string[] {
  const counts = new Map<string, { text: string; count: number }>();

  for (const item of items) {
    if (!item) continue;
    const key = item.toLowerCase().split(/\s+/).slice(0, 5).join(' ');
    const existing = counts.get(key);
    if (existing) existing.count += 1;
    else counts.set(key, { text: item, count: 1 });
  }

  return [...counts.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
    .map((c) => c.text);
}

function stringArray(raw: unknown): string[] {
  return Array.isArray(raw) ? raw.filter((s): s is string => typeof s === 'string') : [];
}
