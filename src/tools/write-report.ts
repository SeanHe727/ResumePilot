import type {
  DiagnosisReport,
  FullReport,
  FullReportPoint,
  ResumeSessionState,
  SourceFinding,
} from '../domain.js';
import { FULL_REPORT_PROMPT } from '../prompts/index.js';
import type { ToolContext } from './types.js';
import { parseJsonObject } from './verify.js';
import { withoutContactDetails } from '../document/vocabulary.js';

/**
 * The diagnosis written out at length, from findings something else has chosen.
 *
 * Kept apart from the choosing on purpose. One call weighing forty findings
 * against a page budget and then writing them all up gives the writing whatever
 * attention the weighing left over, and the two failures look identical from
 * outside — a thin report and a badly chosen one both read as a thin report.
 */
export async function writeFullReport(
  report: DiagnosisReport,
  state: ResumeSessionState,
  findings: readonly SourceFinding[],
  ctx: ToolContext,
): Promise<FullReport | null> {
  const plan = report.improvementPlan;
  const chosen = [
    ...plan.immediate.map((what) => `- [fix now] ${what}`),
    ...plan.shortTerm.map((what) => `- [needs a figure] ${what}`),
    ...plan.longTerm.map((what) => `- [needs new work] ${what}`),
  ];
  if (chosen.length === 0) return null;

  // The readings themselves, so the write-up can quote what they said rather
  // than reconstruct it from a one-line summary of what was chosen.
  const readings = [
    ...(state.entryDiagnoses ?? []).map(
      (entry) =>
        `## content, ${entry.entryId} (${entry.overallScore})\n` +
        entry.bullets
          .map(
            (bullet) =>
              `- [${bullet.bulletId}] ${bullet.overallScore}: ` +
              bullet.issues.map((i) => i.what).join(' | '),
          )
          .join('\n'),
    ),
    ...(state.wordingDiagnoses ?? []).map(
      (entry) =>
        `## wording, ${entry.entryId} (${entry.overallScore})\n` +
        entry.perBullet
          .map((bullet) => `- [${bullet.bulletId}] ${bullet.issues.join(' | ')}`)
          .join('\n'),
    ),
    ...(report.narrative
      ? [
          `## the résumé end to end (${report.narrative.overallScore})\n` +
            [...report.narrative.gaps, ...report.narrative.orderingNotes]
              .map((n) => `- ${n}`)
              .join('\n'),
        ]
      : []),
    `## the file itself (${report.format.overallScore})\n` +
      report.format.issues.map((i) => `- ${i}`).join('\n'),
  ];

  // Every finding, with the id the report must cite to claim it. The readings
  // above are the same material in the readers' own arrangement; this is the
  // list a point's sources are checked against.
  const offered = findings
    .map((f) => `- ${f.id} [${f.role}, ${f.target}] ${f.what}`)
    .join('\n');

  const response = await ctx.queryEngine.query({
    task: 'generate_report',
    systemPrompt: FULL_REPORT_PROMPT,
    messages: [
      {
        role: 'user',
        content:
          `The résumé:\n${state.resume ? renderForQuoting(state) : ''}\n\n` +
          `What was chosen:\n${chosen.join('\n')}\n\n` +
          `What the readers said:\n${readings.join('\n\n')}\n\n` +
          `The findings, by id:\n${offered}\n\n` +
          `Return JSON of exactly this shape:

{
  "sections": [
    {
      "heading": "the entry, or what runs across the whole résumé",
      "points": [
        {
          "what": "the finding in one sentence — this sentence is the short version",
          "why": "what a reader would do differently knowing it",
          "evidence": "the shortest phrase from the résumé that shows the problem — a few words, not the line",
          "from": ["the ids of the findings this point rests on — several where they agree, and only ids from the list above"],
          "cost": "a number of words, like \"about 6 words\" — or \"no words\" where the fix removes or moves text rather than adding it. Not a description of the work."
        }
      ]
    }
  ]
}`,
      },
    ],
    abortSignal: ctx.abortSignal,
  });

  const parsed = parseJsonObject(response.content ?? '');
  const sections = Array.isArray(parsed?.sections) ? parsed.sections : [];
  if (sections.length === 0) return null;

  const byId = new Map(findings.map((finding) => [finding.id, finding]));
  const invented: string[] = [];
  let numbered = 0;

  const built: FullReport['sections'] = sections.flatMap((raw): FullReport['sections'] => {
    const section = raw as Record<string, unknown> | null;
    const heading = typeof section?.heading === 'string' ? section.heading.trim() : '';
    const points = Array.isArray(section?.points) ? section.points : [];
    const kept = points.flatMap((item): FullReportPoint[] => {
      const point = item as Record<string, unknown> | null;
      const what = typeof point?.what === 'string' ? point.what.trim() : '';
      if (!what) return [];

      const claimed = Array.isArray(point?.from)
        ? point.from.filter((f): f is string => typeof f === 'string').map((f) => f.trim())
        : [];
      // Checked, not taken. A source that was never offered is dropped and
      // said out loud: a provenance chain nobody verifies is a chain of
      // whatever the model found convenient to write.
      const sourceFindingIds = claimed.filter((id) => byId.has(id));
      invented.push(...claimed.filter((id) => !byId.has(id)));

      numbered += 1;
      return [
        {
          // `r` for report: the roles number themselves by their own initial,
          // and a posting finding is already `p1`. Two different things under
          // one id in one file is a chain that cannot be followed.
          id: `r${numbered}`,
          sourceFindingIds,
          what,
          why: typeof point?.why === 'string' ? point.why : '',
          ...(typeof point?.evidence === 'string' && point.evidence.trim()
            ? { evidence: point.evidence.trim() }
            : {}),
          // Derived from the sources rather than claimed separately. Asked for
          // twice, the two answers disagree — and the one that can be checked
          // should be the one that decides.
          from: [...new Set(sourceFindingIds.map((id) => byId.get(id)!.role))],
          ...(typeof point?.cost === 'string' && point.cost.trim()
            ? { cost: point.cost.trim() }
            : {}),
        },
      ];
    });
    return heading && kept.length > 0 ? [{ heading, points: kept }] : [];
  });

  const accepted = built.flatMap((section) => section.points);
  // Where a finding ended up, in one line. This is the only place the chain
  // from a specialist's reading to a sentence in the report is written down:
  // both models restate everything in their own words, so nothing downstream
  // can be matched back by text.
  ctx.trace?.event(() => ({
    phase: 'decision',
    purpose: 'report points accepted',
    output: {
      offered: findings.map((f) => f.id),
      reportPointIds: accepted.map((point) => point.id),
      sourceFindingIds: [...new Set(accepted.flatMap((point) => point.sourceFindingIds))],
      // Named on their own because they are the two ways this goes wrong: a
      // reading nothing picked up, and a citation to something never said.
      unused: findings
        .map((f) => f.id)
        .filter((id) => !accepted.some((point) => point.sourceFindingIds.includes(id))),
      invented: [...new Set(invented)],
      unsourced: accepted.filter((p) => p.sourceFindingIds.length === 0).map((p) => p.id),
    },
  }));

  return { sections: built };
}

/**
 * Every line addressable, so a quote can be checked against the document.
 *
 * Redacted on the way out like anything else a model reads. Skipping the
 * section a classifier called `contact` is not a guard on its own: an address
 * filed under any other heading reads out with everything else.
 */
function renderForQuoting(state: ResumeSessionState): string {
  const body = (state.resume?.sections ?? [])
    .filter((section) => section.kind !== 'contact')
    .flatMap((section) =>
      section.entries.map(
        (entry) =>
          `[${entry.id}] ${entry.headerLines.join(' | ')}\n` +
          entry.bullets.map((b) => `  - [${b.id}] ${b.text}`).join('\n'),
      ),
    )
    .join('\n\n');

  return withoutContactDetails(body);
}
