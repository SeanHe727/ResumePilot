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
  const lines = [...head(report, sourcePath, 'Full review')];

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

  return `${lines.join('\n').trimEnd()}\n`;
}

/** The same points, each reduced to the sentence written to stand alone. */
export function renderBrief(report: DiagnosisReport, sourcePath: string): string {
  const lines = [...head(report, sourcePath, 'Review')];

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
      ...setAside.map((s) => `- ${s.what} — *${s.because}*`),
      '',
    );
  }

  return `${lines.join('\n').trimEnd()}\n`;
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
  for (const { role, target } of coverage.rejectedTargets ?? []) {
    lines.push(`> **A ${role} review was asked for \`${target}\`, which is not in this résumé.** It did not run.`);
  }
  for (const { role, target, reason } of coverage.failedTargets ?? []) {
    lines.push(`> **The ${role} review of \`${target}\` produced nothing.** ${reason}`);
  }

  return lines.length > 0 ? [...lines.flatMap((line) => [line, '']), ''] : [];
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
        `${coverage.wordingReviewed} for wording. ` +
        `Career reading ${coverage.narrative}, posting comparison ${coverage.jdMatch}.`
      : '',
    '',
    // What the counts above cannot say. A report that reads as complete while
    // material went unread, or while a review was asked for and refused, is the
    // one failure of this document that the reader cannot detect for themselves.
    ...(coverage ? notRead(coverage) : []),
  ].filter((line, i, all) => line !== '' || all[i - 1] !== '');
}
