import { IMPROVEMENT_PLAN_PROMPT } from '../prompts/index.js';
import type {
  DiagnosisReport,
  EntryDiagnosis,
  FormatDiagnosis,
  ImprovementPlan,
  JdMatch,
  NarrativeAssessment,
  ResumeDocument,
  ResumeEntry,
  ResumeSessionState,
  WordingDiagnosis,
} from '../domain.js';
import type { Tool, ToolContext, ToolResult } from './types.js';
import { parseJsonObject } from './verify.js';

/**
 * What the reviews left behind, gathered off the session.
 *
 * Not tool arguments. Passing them in would mean the coordinator reproducing
 * every diagnosis as JSON, and a diagnosis retyped by a model is a reading of
 * text nobody wrote — the same reason the scoring role is not given a tool that
 * takes a bullet's text.
 */
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
export const generateReportTool: Tool<Record<string, never>, DiagnosisReport> = {
  name: 'generate_report',
  description:
    'Combine everything the specialists have found so far into one report: overall score, ' +
    'per-entry summary, recurring strengths and weaknesses, and a plan split into what can be ' +
    'fixed now, what needs the candidate to dig up figures, and what needs new experience. ' +
    'Reads what the reviews already returned, so run the reviews first — at minimum the format ' +
    'check and one content review.',
  parameters: { type: 'object', properties: {}, additionalProperties: false },

  async execute(_args, ctx): Promise<ToolResult<DiagnosisReport>> {
    const state = (ctx.session?.state ?? {}) as ResumeSessionState;
    const input: GenerateReportInput = {
      resume: state.resume as ResumeDocument,
      format: state.formatDiagnosis as FormatDiagnosis,
      entries: state.entryDiagnoses ?? [],
      ...(state.wordingDiagnoses ? { wording: state.wordingDiagnoses } : {}),
      ...(state.narrative ? { narrative: state.narrative } : {}),
      ...(state.jdMatch ? { jdMatch: state.jdMatch } : {}),
    };

    if (!input.resume) {
      return { success: false, error: { code: 'input_error', message: 'no resume in this session' } };
    }
    if (!input.format) {
      return {
        success: false,
        error: { code: 'input_error', message: 'run review_format first — the layout score anchors the rest' },
      };
    }
    if (input.entries.length === 0) {
      return {
        success: false,
        error: { code: 'input_error', message: 'nothing has been reviewed yet — run review_content on an entry first' },
      };
    }

    const allEntries = input.resume.sections.flatMap((s) => s.entries);
    const summary = summarise(input, allEntries);
    const improvementPlan = await buildImprovementPlan(input, ctx);

    const report: DiagnosisReport = {
      summary,
      perEntry: perEntry(allEntries, input.entries),
      format: input.format,
      ...(input.narrative ? { narrative: input.narrative } : {}),
      ...(input.jdMatch ? { jdMatch: input.jdMatch } : {}),
      improvementPlan,
    };

    // Left where `/report` and `/export` read it: the coordinator is not asked
    // to carry a whole report back through a tool result and put it somewhere.
    if (ctx.session) ctx.session.state = { ...state, latestReport: report };

    return { success: true, data: report };
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
      [...bullets.flatMap((b) => b.issues.map((i) => i.what)), ...input.format.issues],
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
      topIssue: diagnosis?.bullets.flatMap((b) => b.issues)[0]?.what ?? 'not diagnosed',
      bullets: entry.bullets.map((bullet) => {
        const scored = bulletScores.get(bullet.id);
        return {
          bulletId: bullet.id,
          text: bullet.text,
          score: scored?.overallScore ?? 0,
          topIssue: scored?.issues[0]?.what ?? '',
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
  ctx: ToolContext,
): Promise<ImprovementPlan> {
  // Every finding, priced and placed. It used to be the first eight, sliced in
  // array order — which meant the first entry read filled the list and the rest
  // never appeared, and nothing said so. Choosing among all of them is the
  // whole reason this call exists.
  const findings = [
    ...input.format.issues.map((what) => `- [format] ${what}`),
    ...input.entries.flatMap((entry) =>
      entry.bullets.flatMap((bullet) =>
        bullet.issues.map(
          (issue) => `- [${bullet.bulletId}, ~${issue.costWords} words] ${issue.what}`,
        ),
      ),
    ),
  ];

  if (findings.length === 0) {
    return { immediate: [], shortTerm: [], longTerm: [] };
  }

  const length = input.format.metrics.length;
  const room =
    length.pageCount <= 1
      ? `The resume runs ${length.wordCount} words over ${length.pageCount} page(s), leaving roughly ${Math.max(0, 650 - length.wordCount)} words of room.`
      : `The resume runs ${length.wordCount} words over ${length.pageCount} pages. It is already long, so anything added has to displace something.`;

  const ask = () => ctx.queryEngine.query({
    task: 'generate_report',
    systemPrompt: IMPROVEMENT_PLAN_PROMPT,
    messages: [
      {
        role: 'user',
        content: `${room}\n\nEverything the review found:\n${findings.join('\n')}

Return JSON of exactly this shape:

{
  "immediate": ["fixes the candidate can apply right now, without looking anything up"],
  "shortTerm": ["rewrites that need the candidate to dig up real figures"],
  "longTerm": ["gaps only new experience can close"],
  "setAside": [{ "what": "the finding you left out", "because": "one line on why" }]
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
    ...(setAside(parsed?.setAside).length > 0 ? { setAside: setAside(parsed?.setAside) } : {}),
  };
}


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

/** What the plan chose not to spend the page on, and why. */
function setAside(raw: unknown): NonNullable<ImprovementPlan['setAside']> {
  if (!Array.isArray(raw)) return [];

  return raw.flatMap((item) => {
    const record = item as Record<string, unknown> | null;
    const what = typeof record?.what === 'string' ? record.what.trim() : '';
    return what ? [{ what, because: String(record?.because ?? '') }] : [];
  });
}
