import type { DiagnosisReport, FullReport } from '../domain.js';

/**
 * Two documents out of one, and only one of them is written.
 *
 * The brief keeps each point's first sentence and drops the rest. Deriving it
 * rather than writing it twice is what keeps them saying the same thing — a
 * brief composed separately can make a claim the long report does not, and
 * nothing here would ever notice.
 *
 * Markdown, because both are meant to be opened and read by a person rather
 * than scanned in a terminal.
 */
export function renderFull(report: DiagnosisReport, sourcePath: string): string {
  const lines = [...head(report, sourcePath, 'Full review'), ...opening(report)];

  for (const section of report.full?.sections ?? []) {
    lines.push(`## ${section.heading}`, '');

    for (const point of section.points) {
      lines.push(`### ${point.what}`, '');
      if (point.evidence) lines.push(`> ${point.evidence}`, '');
      if (point.why) lines.push(point.why, '');

      const aside = [
        point.from.length > 0 ? `raised by ${point.from.join(', ')}` : '',
        point.cost ? `costs ${point.cost}` : '',
      ].filter(Boolean);
      if (aside.length > 0) lines.push(`*${aside.join(' · ')}*`, '');
    }
  }

  // All of it here, where the brief shows ten.
  const setAside = report.improvementPlan.setAside ?? [];
  if (setAside.length > 0) {
    lines.push(`## Set aside (${setAside.length})`, '', ...setAside.map((s) => `- ${s.what}`), '');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

/** The same points, each reduced to the sentence written to stand alone. */
const SET_ASIDE_SHOWN = 10;

export function renderBrief(report: DiagnosisReport, sourcePath: string): string {
  const lines = [...head(report, sourcePath, 'Review'), ...opening(report)];

  for (const section of report.full?.sections ?? []) {
    lines.push(`## ${section.heading}`, '');
    for (const point of section.points) {
      lines.push(`- ${point.what}${point.cost ? ` *(${point.cost})*` : ''}`);
    }
    lines.push('');
  }

  const setAside = report.improvementPlan.setAside ?? [];
  if (setAside.length > 0) {
    lines.push(
      `## Set aside (${setAside.length})`,
      '',
      'Worth knowing, and not worth the space on this page:',
      '',
      // The first ten, and a count. Measured: 38 set-aside lines under a
      // report of 18 points, longer than the report it was set aside from.
      ...setAside.slice(0, SET_ASIDE_SHOWN).map((s) => `- ${s.what}${s.because ? ` — *${s.because}*` : ''}`),
      ...(setAside.length > SET_ASIDE_SHOWN
        ? [`- …and ${setAside.length - SET_ASIDE_SHOWN} more, in \`/report --full\`.`]
        : []),
      '',
    );
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

/**
 * Where to start, and what already works, before the list by entry.
 *
 * A review that is only a list of faults reads as though everything is broken,
 * and one that lists thirty points gives no way in. Both come from the
 * write-up: the first three chosen groups, and strengths in the reader's words.
 */
function opening(report: DiagnosisReport): string[] {
  const full = report.full;
  if (!full) return [];
  const points = new Map(full.sections.flatMap((s) => s.points).map((p) => [p.id, p] as const));
  const first = (full.startHere ?? []).flatMap((id) => (points.has(id) ? [points.get(id)!.what] : []));
  const lines: string[] = [];
  if (first.length > 0) lines.push('## Start here', '', ...first.map((what, i) => `${i + 1}. ${what}`), '');
  if ((full.strengths ?? []).length > 0) {
    lines.push('## Already working', '', ...full.strengths!.map((s) => `- ${s}`), '');
  }
  return lines;
}

/**
 * Said out loud, because nothing else in the report can say it.
 *
 * Every count in the line above is of entries. Text that never became an entry
 * is missing from all of them, and a refused dispatch leaves no mark at all —
 * so a run that scored two of two entries and left six bullets unread read as
 * complete.
 */
function notRead(coverage: NonNullable<DiagnosisReport['coverage']>): string[] {
  const lines: string[] = [];

  for (const section of coverage.unaddressable ?? []) {
    lines.push(
      `> **${section.bullets} lines under "${section.heading}" were not scored.** They are not ` +
        `attached to any entry, so no per-line review could be asked for them. Giving each one a ` +
        `title line — a name, and dates — makes them reviewable.`,
    );
  }
  // A line revised after it was read. Its old findings are about text that is
  // gone, and are left out rather than shown as about the page.
  for (const [role, ids] of [['content', coverage.contentStale], ['wording', coverage.wordingStale]] as const) {
    if (!ids || ids.length === 0) continue;
    lines.push(
      `> **${ids.map((id) => `\`${id}\``).join(', ')} changed after the ${role} review read ` +
        `${ids.length === 1 ? 'it' : 'them'}.** The earlier findings are left out; ask for ` +
        `${ids.length === 1 ? 'it' : 'them'} to be reviewed again.`,
    );
  }
  for (const { role, target } of coverage.rejectedTargets ?? []) {
    lines.push(`> **A ${role} review was asked for \`${target}\`, which is not in this résumé.** It did not run.`);
  }
  for (const { role, target, reason } of coverage.failedTargets ?? []) {
    lines.push(`> **The ${role} review of \`${target}\` produced nothing.** ${reason}`);
  }

  return lines.length > 0 ? [...lines.flatMap((line) => [line, '']), ''] : [];
}

/**
 * How much of what was counted was read for this report and how much was
 * carried over, when there was an earlier report to carry it from. Measured: a
 * report after one revision said "4 of 4" when one entry had been re-read and
 * three reused, and read as a fresh pass over the whole page.
 */
function reuse(coverage: NonNullable<DiagnosisReport['coverage']>): string {
  const read = coverage.contentReadSincePrevious;
  if (read === undefined) return '';
  const reused = coverage.contentReviewed - read;
  return ` (content: ${read} read for this report, ${reused} unchanged since the last one and reused)`;
}

function head(report: DiagnosisReport, sourcePath: string, title: string): string[] {
  const { summary, coverage } = report;
  const dimensions = [
    `format ${summary.formatScore}`,
    `content ${summary.substanceAvg}`,
    ...(summary.wordingAvg ? [`wording ${summary.wordingAvg}`] : []),
    ...(summary.narrativeScore !== undefined ? [`narrative ${summary.narrativeScore}`] : []),
    ...(summary.jdScore !== undefined ? [`posting ${summary.jdScore}`] : []),
  ];

  return [
    `# ${title}: ${sourcePath.split('/').pop() ?? sourcePath}`,
    '',
    `**${summary.overallScore}/100** — ${dimensions.join(' · ')}`,
    '',
    coverage
      ? `Read ${coverage.contentReviewed} of ${coverage.eligibleEntries} entries for content, ` +
        `${coverage.wordingReviewed} for wording${reuse(coverage)}. ` +
        `Career reading ${coverage.narrative}, posting comparison ${coverage.jdMatch}.`
      : '',
    '',
    // What the counts above cannot say. A report that reads as complete while
    // material went unread, or while a review was asked for and refused, is the
    // one failure of this document that the reader cannot detect for themselves.
    ...(coverage ? notRead(coverage) : []),
  ].filter((line, i, all) => line !== '' || all[i - 1] !== '');
}
