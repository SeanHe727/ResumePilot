import type {
  DiagnosisReport,
  FullReport,
  FullReportPoint,
  ResumeSessionState,
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
          "from": ["content" | "wording" | "narrative" | "posting" | "file"],
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

  return {
    sections: sections.flatMap((raw): FullReport['sections'] => {
      const section = raw as Record<string, unknown> | null;
      const heading = typeof section?.heading === 'string' ? section.heading.trim() : '';
      const points = Array.isArray(section?.points) ? section.points : [];
      const kept = points.flatMap((item): FullReportPoint[] => {
        const point = item as Record<string, unknown> | null;
        const what = typeof point?.what === 'string' ? point.what.trim() : '';
        if (!what) return [];
        return [
          {
            what,
            why: typeof point?.why === 'string' ? point.why : '',
            ...(typeof point?.evidence === 'string' && point.evidence.trim()
              ? { evidence: point.evidence.trim() }
              : {}),
            from: Array.isArray(point?.from)
              ? point.from.filter((f): f is string => typeof f === 'string')
              : [],
            ...(typeof point?.cost === 'string' && point.cost.trim()
              ? { cost: point.cost.trim() }
              : {}),
          },
        ];
      });
      return heading && kept.length > 0 ? [{ heading, points: kept }] : [];
    }),
  };
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
