import { IMPROVEMENT_PLAN_PROMPT } from '../prompts/index.js';
import { randomUUID } from 'node:crypto';

import type {
  DiagnosisReport,
  EntryDiagnosis,
  FormatDiagnosis,
  ImprovementPlan,
  JdMatch,
  NarrativeAssessment,
  ResumeDocument,
  ResumeEntry,
  ReportCoverage,
  ResumeSessionState,
  ReviewStatus,
  SourceFinding,
  WordingDiagnosis,
} from '../domain.js';
import type { Tool, ToolContext, ToolResult } from './types.js';
import { parseJsonObject } from './verify.js';
import { currentReadings } from './versions.js';
import { writeFullReport } from './write-report.js';

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
    // Only readings of the text each entry has now. A reading of an older
    // version, or of a draft that was never kept, is about a line that is not
    // on the page; coverage says which entries that leaves unread.
    const readings = currentReadings(state);
    const input: GenerateReportInput = {
      resume: state.resume as ResumeDocument,
      format: state.formatDiagnosis as FormatDiagnosis,
      entries: readings.content.current,
      ...(state.wordingDiagnoses ? { wording: readings.wording.current } : {}),
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
    // Minted once for the whole report. Two calls would hand the plan and the
    // write-up different ids for the same reading, and every link between them
    // would be a coincidence.
    const findings = everyFinding(input);
    // Everything the readers raised, before anything chose among it. The
    // other end of the chain: without it, "nobody picked this up" can only be
    // read against a list the same call produced, which proves nothing.
    ctx.trace?.event(() => ({
      phase: 'decision',
      purpose: 'findings collected',
      output: {
        findings: findings.map((f) => ({
          id: f.id,
          role: f.role,
          target: f.target,
          ...(f.costWords === undefined ? {} : { costWords: f.costWords }),
        })),
      },
    }));

    const improvementPlan = await buildImprovementPlan(input, findings, state, ctx);

    const report: DiagnosisReport = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      documentVersion: state.documentVersion ?? 1,
      factsKnown: (state.suppliedFacts ?? []).length,
      summary,
      perEntry: perEntry(allEntries, input.entries),
      coverage: coverage(allEntries, input, state),
      format: input.format,
      ...(input.narrative ? { narrative: input.narrative } : {}),
      ...(input.jdMatch ? { jdMatch: input.jdMatch } : {}),
      improvementPlan,
    };

    // Written after the choosing, in a call of its own. One model weighing
    // forty findings against a page budget and then writing them all up gives
    // the writing whatever attention the weighing left over.
    // The same objects the plan was chosen from.
    const full = await writeFullReport(report, state, findings, ctx);
    if (full) report.full = full;

    // Left where `/report` and `/export` read it: the coordinator is not asked
    // to carry a whole report back through a tool result and put it somewhere.
    // Appended, so every report this document has had stays readable in order.
    if (ctx.session) {
      ctx.session.state = { ...state, latestReport: report, reports: [...(state.reports ?? []), report] };
    }

    // The long form stays on the session. Handing it back would put it in the
    // coordinator's window, which is not big enough to hold it and does not
    // need to: it relays the short form and points at the rest.
    const { full: _long, ...brief } = report;
    return { success: true, data: brief };
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
  //
  // A dimension that did not run is left out and the rest are renormalised. It
  // used to be filled in with the substance average, so a review that ran only
  // the content reader had that one score standing in for four of the five
  // weights — 70% of an overall score presented as though five readers had
  // agreed on it.
  const parts: Array<[number, number]> = [
    [formatScore, 0.3],
    [substanceAvg, 0.4],
    ...(wordingAvg ? ([[wordingAvg, 0.15]] as Array<[number, number]>) : []),
    ...(input.narrative ? ([[input.narrative.overallScore, 0.075]] as Array<[number, number]>) : []),
    ...(input.jdMatch ? ([[input.jdMatch.overallScore, 0.075]] as Array<[number, number]>) : []),
  ];
  const weight = parts.reduce((sum, [, w]) => sum + w, 0);
  const overallScore = Math.round(
    parts.reduce((sum, [score, w]) => sum + score * w, 0) / (weight || 1),
  );

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
    // Three ways to have no score, and they used to be one: zero. A degree
    // carries no bullets and cannot be scored; an entry nothing got to yet has
    // not been judged; and an entry that was read and came back at zero is a
    // verdict. Printed identically, the first two read as the third.
    const status: ReviewStatus = diagnosis
      ? 'reviewed'
      : entry.bullets.length === 0
        ? 'not-applicable'
        : 'not-run';

    return {
      entryId: entry.id,
      label: [entry.organization, entry.title].filter(Boolean).join(' — ') || entry.headerLines[0] || entry.id,
      ...(diagnosis ? { score: diagnosis.overallScore } : {}),
      status,
      topIssue: diagnosis?.bullets.flatMap((b) => b.issues)[0]?.what ?? '',
      bullets: entry.bullets.map((bullet) => {
        const scored = bulletScores.get(bullet.id);
        return {
          bulletId: bullet.id,
          text: bullet.text,
          ...(scored ? { score: scored.overallScore } : {}),
          topIssue: scored?.issues[0]?.what ?? '',
        };
      }),
    };
  });
}

/**
 * Figures and constraints the candidate has given, for the plan to weigh.
 *
 * Without them a finding that needs a number is filed under "go and find one"
 * while the number is already on the session — the candidate is told to look for
 * something they have already handed over. What it costs to act is the whole
 * basis of this split, and a figure in hand costs differently from a figure that
 * has to be dug up.
 */
function supplied(state: ResumeSessionState): string {
  const facts = state.suppliedFacts ?? [];
  if (facts.length === 0) return '';

  return (
    `\n\nWhat the candidate has since told us, in their words — the résumé does not say these, ` +
    `and a fix that only needs one of them is a fix they can make now:\n` +
    facts.map((fact) => `- "${fact.fact}"${fact.bulletId ? ` (about ${fact.bulletId})` : ''}`).join('\n')
  );
}

/**
 * A finding as the plan model has always seen it.
 *
 * Byte for byte what this sent before findings had ids: the plan model's
 * contract is not what changed here, and changing its input while changing
 * what depends on it would make any difference in the output unattributable.
 */
function asLine(finding: SourceFinding): string {
  const cost = finding.costWords === undefined ? '' : `, ~${finding.costWords} words`;
  return `- [${finding.target}${cost}] ${finding.what}`;
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
  findings: readonly SourceFinding[],
  state: ResumeSessionState,
  ctx: ToolContext,
): Promise<ImprovementPlan> {
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
        content: `${room}${supplied(state)}\n\nEverything the review found:\n${findings.map(asLine).join('\n')}

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
  const plan: ImprovementPlan = {
    immediate: stringArray(parsed?.immediate),
    shortTerm: stringArray(parsed?.shortTerm),
    longTerm: stringArray(parsed?.longTerm),
    ...(setAside(parsed?.setAside).length > 0 ? { setAside: setAside(parsed?.setAside) } : {}),
  };

  // Which findings this weighed. The plan model is shown the lines without
  // ids, deliberately, so this is the only place the set it chose from is
  // written down — and the only way to tell that it and the report writer were
  // given the same one.
  ctx.trace?.event(() => ({
    phase: 'decision',
    purpose: 'plan chosen',
    input: { fromFindingIds: findings.map((f) => f.id) },
    output: plan,
  }));

  return plan;
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

/**
 * What ran, counted rather than judged.
 *
 * A report used to appear once the format check and a single entry had been
 * read, looking exactly like one where every reader had covered everything. The
 * counting belongs here, in code; deciding whether it is enough belongs to
 * whoever is talking to the candidate.
 */
function coverage(
  allEntries: ResumeEntry[],
  input: GenerateReportInput,
  state: ResumeSessionState,
): ReportCoverage {
  const eligible = allEntries.filter((entry) => entry.bullets.length > 0);
  const scored = new Set(input.entries.map((d) => d.entryId));
  const worded = new Set((input.wording ?? []).map((d) => d.entryId));

  // Text the parse kept that no review can be dispatched against, because it
  // never became an entry. Every other number here counts entries, so this
  // material is invisible to all of them: a run reported two of two entries
  // read while six bullets under a projects heading had been scored by nobody.
  // Not conditional on the section having no entries. A section that opened two
  // entries and left one bullet at its own level has left that bullet just as
  // unreviewable — the same correction mutation testing forced on the integrity
  // check, which this had drifted from.
  const unaddressable = (input.resume.sections ?? [])
    .filter((section) => (section.bullets ?? []).length > 0)
    .map((section) => ({
      sectionId: section.id,
      heading: section.heading || section.kind,
      bullets: (section.bullets ?? []).length,
    }));

  // Read for this report, or reused from an earlier one. Only meaningful when
  // there was an earlier one; on the first, everything was read for it.
  const previous = state.latestReport?.createdAt;
  const since = (readings: Array<{ readAt?: string }>): number | undefined =>
    previous === undefined ? undefined : readings.filter((r) => (r.readAt ?? '') > previous).length;
  const { content, wording } = currentReadings(state);
  const contentSince = since(input.entries);
  const wordingSince = since(input.wording ?? []);

  const attempts = state.reviewAttempts ?? [];
  const rejected = attempts.filter((a) => a.outcome === 'rejected');
  const failed = attempts.filter((a) => a.outcome === 'failed');

  return {
    eligibleEntries: eligible.length,
    notApplicableEntries: allEntries.length - eligible.length,
    contentReviewed: eligible.filter((entry) => scored.has(entry.id)).length,
    wordingReviewed: eligible.filter((entry) => worded.has(entry.id)).length,
    ...(contentSince !== undefined ? { contentReadSincePrevious: contentSince } : {}),
    ...(wordingSince !== undefined ? { wordingReadSincePrevious: wordingSince } : {}),
    ...(content.stale.length > 0 ? { contentStale: content.stale } : {}),
    ...(wording.stale.length > 0 ? { wordingStale: wording.stale } : {}),
    narrative: input.narrative ? 'done' : 'not-run',
    // No posting is not a gap. Nothing was asked for, so nothing is missing.
    jdMatch: input.jdMatch ? 'done' : state.jd ? 'not-run' : 'no-posting',
    format: 'done',
    ...(unaddressable.length > 0 ? { unaddressable } : {}),
    ...(rejected.length > 0
      ? { rejectedTargets: rejected.map(({ role, target }) => ({ role, target })) }
      : {}),
    ...(failed.length > 0
      ? { failedTargets: failed.map(({ role, target, reason }) => ({ role, target, reason })) }
      : {}),
  };
}

/**
 * What every reader found, in one list.
 *
 * It was the format check and the content reader, and only the first eight of
 * the latter, sliced in array order — so the first entry read filled the list
 * and the rest never appeared. Worse, three readers were missing entirely: the
 * wording reader raises something on almost every line, the career reading
 * knows what the dates leave unexplained and what would land better moved, and
 * the posting comparison knows which requirements are unmet. None of it ever
 * reached the plan, while the plan was described as choosing among everything.
 *
 * Each line carries where it came from and what answering it costs, because the
 * choice being made is per word: a four-word answer that settles a class of
 * doubt beats a sentence that adds a detail, and nothing can weigh that without
 * both halves.
 */
export function everyFinding(input: GenerateReportInput): SourceFinding[] {
  const at = (role: SourceFinding['role'], target: string, cost: number | undefined, what: string): SourceFinding => ({
    // Unique outright, rather than numbered by where it landed in a list. A
    // positional id is only meaningful next to the list that produced it: the
    // same reading gets a different number the moment another reader finds one
    // more, and two ids from different runs collide while meaning nothing to
    // each other. These are minted once, here, and carried by the object.
    id: `${role}_finding_${randomUUID()}`,
    role,
    target,
    what,
    ...(cost === undefined ? {} : { costWords: cost }),
  });

  return [
    ...input.format.issues.map((what) => at('file', 'format', undefined, what)),

    ...input.entries.flatMap((entry) =>
      entry.bullets.flatMap((bullet) =>
        bullet.issues.map((issue) => at('content', bullet.bulletId, issue.costWords, issue.what)),
      ),
    ),

    // Wording findings carry no cost of their own: cutting filler or replacing
    // a verb takes words away rather than adding them, which is why they often
    // belong at the top of a page that has no room left.
    ...(input.wording ?? []).flatMap((diagnosis) =>
      diagnosis.perBullet.flatMap((bullet) =>
        bullet.issues.map((what) => at('wording', `${bullet.bulletId}, wording`, undefined, what)),
      ),
    ),

    ...(input.narrative
      ? [
          ...input.narrative.gaps.map((what) => at('narrative', 'whole resume, dates', undefined, what)),
          ...input.narrative.orderingNotes.map((what) =>
            at('narrative', 'whole resume, order', undefined, what),
          ),
          ...(input.narrative.withinEntries ?? []).flatMap((entry) => [
            ...entry.redundantPairs.map((pair) =>
              at(
                'narrative',
                entry.entryId,
                undefined,
                `${pair.bulletA} and ${pair.bulletB} repeat: ${pair.note}`,
              ),
            ),
            ...(entry.coherence.score < 70 && entry.coherence.detail
              ? [at('narrative', entry.entryId, undefined, entry.coherence.detail)]
              : []),
            ...(entry.weakLead
              ? [
                  at(
                    'narrative',
                    entry.entryId,
                    undefined,
                    'the strongest line is not the opening one',
                  ),
                ]
              : []),
          ]),
        ]
      : []),

    ...(input.jdMatch
      ? [
          ...input.jdMatch.missing.map((keyword) =>
            at(
              'posting',
              `posting${keyword.required ? ', required' : ''}`,
              undefined,
              `the posting asks for "${keyword.keyword}" and the resume does not evidence it`,
            ),
          ),
          ...input.jdMatch.gaps.map((what) => at('posting', 'posting', undefined, what)),
        ]
      : []),
  ];
}
