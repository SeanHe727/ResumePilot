import type { DiagnosisReport, FullReportPoint } from '../domain.js';

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
  const lines = [...head(report, sourcePath, 'Full review'), ...tally(report), ...body(report, true)];

  // All of it here; the brief gives the count.
  const setAside = report.improvementPlan.setAside ?? [];
  if (setAside.length > 0) {
    lines.push(`## Set aside (${setAside.length})`, '', ...setAside.map((s) => `- ${s.what}`), '');
  }
  return `${lines.join('\n').trimEnd()}\n`;
}

export function renderBrief(report: DiagnosisReport, sourcePath: string): string {
  const lines = [...head(report, sourcePath, 'Review'), ...tally(report), ...body(report, false)];

  // A count, not the list. Measured: judges read the set-aside lines, merged
  // across many lines, as a garbled second report.
  const setAside = report.improvementPlan.setAside ?? [];
  if (setAside.length > 0) {
    lines.push(
      `## Set aside (${setAside.length})`,
      '',
      `${setAside.length} smaller points were left out; they are in \`/report --full\`.`,
      '',
    );
  }
  return `${lines.join('\n').trimEnd()}\n`;
}

const TAG = { error: 'Error', important: 'Important', polish: 'Polish' } as const;

/** One line saying how much of each kind there is, so the key problems stand out. */
function tally(report: DiagnosisReport): string[] {
  const points = (report.full?.sections ?? []).flatMap((s) => s.points);
  if (points.length === 0) return [];
  const count = (tag: keyof typeof TAG) => points.filter((p) => p.tag === tag).length;
  const parts = [
    `${count('error')} error${count('error') === 1 ? '' : 's'}`,
    `${count('important')} important`,
    `${count('polish')} polish`,
  ];
  return [`${parts.join(', ')}. Errors are marked [Error]; fix those first.`, ''];
}

/**
 * The review in the résumé's own order, one block per line.
 *
 * Each block: the line as written, then its problems, the reasons and the
 * changes, numbered alike, the most important problem first. The candidate
 * works down the page with the résumé beside it; the tags say what matters
 * most, where a list at the top once repeated points and held only three.
 */
function body(report: DiagnosisReport, full: boolean): string[] {
  const out: string[] = [];
  const lineText = textOfLines(report);
  for (const section of report.full?.sections ?? []) {
    out.push(`## ${section.heading}`, '');
    // Consecutive points about the same line share its block.
    const blocks: Array<{ key: string; points: FullReportPoint[] }> = [];
    for (const point of section.points) {
      const key = (point.lines ?? []).join('+') || `point:${point.id}`;
      const last = blocks.at(-1);
      if (last && last.key === key && point.lines?.length) last.points.push(point);
      else blocks.push({ key, points: [point] });
    }
    for (const { points } of blocks) out.push(...block(points, lineText, full), '');
  }
  if ((report.full?.strengths ?? []).length > 0) {
    out.push('## Already working', '', ...report.full!.strengths!.map((s) => `- ${s}`), '');
  }
  return out;
}

function block(points: FullReportPoint[], lineText: Map<string, string>, full: boolean): string[] {
  const first = points[0]!;
  const quoted = (first.lines ?? []).flatMap((id) => (lineText.has(id) ? [lineText.get(id)!] : []));
  const quote = quoted.length > 0 ? quoted : first.evidence ? [first.evidence] : [];
  const numbered = (i: number, text: string) => `${points.length > 1 ? `${i + 1}. ` : ''}${text}`;
  const out = [...quote.map((t) => `> ${t}`), ''];
  out.push(
    '**Problem**',
    ...points.map((p, i) =>
      numbered(i, `${p.tag ? `[${TAG[p.tag]}] ` : ''}${p.what}${p.cost ? ` *(${p.cost})*` : ''}`),
    ),
    '',
  );
  const whys = points.filter((p) => p.why);
  if (whys.length > 0) out.push('**Why**', ...points.map((p, i) => numbered(i, p.why || '—')), '');
  const fixes = points.filter((p) => p.fix);
  if (fixes.length > 0) out.push('**How to change it**', ...points.map((p, i) => numbered(i, p.fix || '—')), '');
  if (full) {
    const from = [...new Set(points.flatMap((p) => p.from))];
    if (from.length > 0) out.push(`*raised by ${from.join(', ')}*`, '');
  }
  return out.slice(0, -1);
}

function textOfLines(report: DiagnosisReport): Map<string, string> {
  return new Map(report.perEntry.flatMap((e) => e.bullets.map((b) => [b.bulletId, b.text] as const)));
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
