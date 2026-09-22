import { randomUUID } from 'node:crypto';

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

/** The program's own title for what is not about one entry. */
const ACROSS_THE_RESUME = 'Across the whole résumé';

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

  // The entries this résumé actually has. The model chooses among them rather
  // than writing a heading of its own: a heading it writes is a company name,
  // a title and a date it has re-derived from text it was shown, and the parse
  // already knows all three. One of them coming back subtly wrong — a year, a
  // team, an employer — reads as a report about a résumé nobody sent.
  const entries = new Map(
    (state.resume?.sections ?? []).flatMap((section) => section.entries).map((e) => [e.id, e] as const),
  );
  const targets = [...entries.values()]
    .map((entry) => `- ${entry.id}: ${withoutContactDetails(entry.headerLines.join(' | '))}`)
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
          `The entries a point can be filed under:\n${targets}\n\n` +
          `Each section says what it is about. Use { "type": "entry", "entryId": "<one of the ids above>" } ` +
          `for a section about one entry, and { "type": "resume" } for anything that spans the whole ` +
          `document — dates, ordering, what the file itself does. Nothing else goes in "about", and no ` +
          `heading of your own: the entry's own title is added afterwards.\n\n` +
          `Return JSON of exactly this shape:

{
  "sections": [
    {
      "about": { "type": "entry", "entryId": "one of the entry ids listed above" },
      "points": [
        {
          "what": "the finding in one sentence — this sentence is the short version",
          "why": "what a reader would do differently knowing it",
          "evidence": "the shortest phrase from the résumé that shows the problem — a few words, not the line",
          "from": ["the ids of the findings this point rests on — several where they agree, and only ids from the list above"],
          "cost": "a number of words, like 'about 6 words' — or 'no words' where the fix removes or moves text rather than adding it. Not a description of the work."
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
  const rawSections = Array.isArray(parsed?.sections) ? parsed.sections : [];
  if (rawSections.length === 0) return null;

  const byId = new Map(findings.map((finding) => [finding.id, finding]));
  const unknownTargets: string[] = [];

  // What survives, decided before anything is minted. Numbering a point and
  // counting its citations, and only then finding out its section was empty,
  // leaves ids that belong to nothing in the statistics the whole record is
  // read through.
  const drafts = rawSections.flatMap((raw): Draft[] => {
    const section = raw as Record<string, unknown> | null;
    const about = (section?.about ?? null) as Record<string, unknown> | null;
    const entryId = typeof about?.entryId === 'string' ? about.entryId.trim() : '';
    const wantsEntry = about?.type === 'entry' && entryId !== '';
    const known = wantsEntry && entries.has(entryId);
    if (wantsEntry && !known) unknownTargets.push(entryId);

    const points = Array.isArray(section?.points) ? section.points : [];
    return points.flatMap((item): Draft[] => {
      const point = item as Record<string, unknown> | null;
      const what = typeof point?.what === 'string' ? point.what.trim() : '';
      if (!what) return [];

      return [
        {
          // An entry nobody can find is not a reason to lose the writing. The
          // point is kept, filed with what spans the document, and the bad id
          // is on the record rather than swallowed.
          about: known ? entryId : 'resume',
          what,
          why: typeof point?.why === 'string' ? point.why : '',
          ...(typeof point?.evidence === 'string' && point.evidence.trim()
            ? { evidence: point.evidence.trim() }
            : {}),
          ...(typeof point?.cost === 'string' && point.cost.trim()
            ? { cost: point.cost.trim() }
            : {}),
          claimed: Array.isArray(point?.from)
            ? point.from.filter((f): f is string => typeof f === 'string').map((f) => f.trim())
            : [],
        },
      ];
    });
  });

  if (drafts.length === 0) return null;

  const invented: string[] = [];
  const links: Array<{ reportPointId: string; sourceFindingIds: string[] }> = [];

  const placed = drafts.map((draft) => {
    // Checked, not taken. A source that was never offered is dropped and said
    // out loud: a provenance chain nobody verifies is a chain of whatever the
    // model found convenient to write. Checked for existence only — that a
    // point genuinely follows from the finding it cites is a judgement, and
    // nothing here is in a position to make it.
    const sourceFindingIds = draft.claimed.filter((id) => byId.has(id));
    invented.push(...draft.claimed.filter((id) => !byId.has(id)));

    const { about, claimed: _claimed, ...rest } = draft;
    const point: FullReportPoint = {
      id: `report_point_${randomUUID()}`,
      sourceFindingIds,
      ...rest,
      // Derived from the sources that checked out rather than claimed
      // separately. Asked for twice, the two answers disagree — and the one
      // that can be verified should be the one that decides.
      from: [...new Set(sourceFindingIds.map((id) => byId.get(id)!.role))],
    };
    links.push({ reportPointId: point.id, sourceFindingIds });
    return { about, point };
  });

  // Grouped in the document's own order, not the order the model wrote them
  // in. Two runs of the same review then produce reports that can be read side
  // by side.
  const built: FullReport['sections'] = [];
  for (const entry of entries.values()) {
    const points = placed.filter((p) => p.about === entry.id).map((p) => p.point);
    if (points.length === 0) continue;
    built.push({
      // The parse's own header, redacted like anything else that leaves: an
      // address under a heading that says `Profile` is filed as a summary and
      // would otherwise read out here with everything else.
      heading: withoutContactDetails(entry.headerLines.join(' | ')) || entry.id,
      target: { type: 'entry', entryId: entry.id },
      points,
    });
  }
  const wide = placed.filter((p) => p.about === 'resume').map((p) => p.point);
  if (wide.length > 0) {
    built.push({ heading: ACROSS_THE_RESUME, target: { type: 'resume' }, points: wide });
  }

  const accepted = built.flatMap((section) => section.points);
  // Which finding reached which sentence. Point-by-point rather than two lists
  // side by side: a list of what was used and a list of what was written
  // cannot answer the question either of them exists for, which is whether
  // this particular reading is why that particular paragraph is there.
  ctx.trace?.event(() => ({
    phase: 'decision',
    purpose: 'report points accepted',
    output: {
      offered: findings.map((f) => f.id),
      links,
      // The three ways this goes wrong, each of which reads as an ordinary
      // report until somebody counts: a reading nobody picked up, a citation
      // to something never said, and a paragraph resting on nothing.
      unused: findings
        .map((f) => f.id)
        .filter((id) => !accepted.some((point) => point.sourceFindingIds.includes(id))),
      invented: [...new Set(invented)],
      unsourced: accepted.filter((p) => p.sourceFindingIds.length === 0).map((p) => p.id),
      // A section filed under an entry this résumé does not have. The writing
      // is kept; the mis-filing is not hidden.
      unknownTargets: [...new Set(unknownTargets)],
    },
  }));

  return { sections: built };
}

/** What a point is about, before it has an identity of its own. */
interface Draft extends Omit<FullReportPoint, 'id' | 'sourceFindingIds' | 'from'> {
  /** An entry id, or `resume` for what spans the document. */
  about: string;
  claimed: string[];
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
