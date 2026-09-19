import type { DiagnosisReport } from '../domain.js';

/**
 * The report as text, for the terminal and for `/export md` alike.
 *
 * Lived next to the deterministic pipeline because that pipeline was written
 * first; every path renders through this one function, so it outlived the
 * pipeline it was filed under.
 */
export function render(report: DiagnosisReport): string {
  const { summary } = report;
  const lines: string[] = [
    `Overall ${summary.overallScore}/100`,
    `  format ${summary.formatScore}  substance ${summary.substanceAvg}  wording ${summary.wordingAvg}`,
    `  ${summary.totalEntries} entries, ${summary.totalBullets} bullets`,
    '',
  ];

  for (const entry of report.perEntry) {
    lines.push(`${String(entry.score).padStart(3)}  ${entry.label}`);
    for (const bullet of entry.bullets) {
      lines.push(...wrap(bullet.text, `     ${String(bullet.score).padStart(3)}  `, '          '));
      if (bullet.topIssue) lines.push(...wrap(bullet.topIssue, '          ', '          '));
    }
    lines.push('');
  }

  if (report.narrative) {
    const { narrative } = report;
    lines.push(`Career narrative  ${narrative.overallScore}/100`);
    if (narrative.arc) lines.push(`  ${narrative.arc}`);
    for (const gap of narrative.gaps) lines.push(`  gap: ${gap}`);
    for (const note of narrative.orderingNotes) lines.push(`  order: ${note}`);

    // How each entry reads as a unit. Produced since the arrangement reading
    // moved here, and rendered nowhere until someone asked to see the report.
    for (const entry of narrative.withinEntries ?? []) {
      const label = report.perEntry.find((e) => e.entryId === entry.entryId)?.label ?? entry.entryId;
      lines.push(`  ${label}  coherence ${entry.coherence.score}/100`);
      if (entry.coherence.detail) lines.push(`    ${entry.coherence.detail}`);
      for (const pair of entry.redundantPairs) {
        lines.push(`    repeats: ${pair.bulletA} and ${pair.bulletB} — ${pair.note}`);
      }
      if (entry.suggestedOrder?.length) {
        lines.push(`    order: ${entry.suggestedOrder.join(' → ')}`);
      }
      if (entry.weakLead) lines.push('    the strongest line is not the opening one');
    }
    lines.push('');
  }

  if (report.jdMatch) {
    const { jdMatch } = report;
    lines.push(`Job description  ${jdMatch.overallScore}/100 coverage`);
    if (jdMatch.covered.length > 0) {
      lines.push(`  covered: ${jdMatch.covered.map((c) => c.keyword).join(', ')}`);
    }
    for (const missing of jdMatch.missing) {
      lines.push(`  missing${missing.required ? ' (required)' : ''}: ${missing.keyword}`);
    }
    for (const gap of jdMatch.gaps) lines.push(`  gap: ${gap}`);
    lines.push('');
  }

  if (summary.topWeaknesses.length > 0) {
    lines.push('Recurring weaknesses');
    for (const w of summary.topWeaknesses) lines.push(`  - ${w}`);
    lines.push('');
  }

  if (report.rewrites?.length) {
    lines.push('Suggested rewrites');
    for (const rewrite of report.rewrites) {
      lines.push(...wrap(rewrite.before, '  - ', '    '));
      lines.push(`  + ${rewrite.after}`);
      if (rewrite.needsInput.length > 0) {
        lines.push(`    you supply: ${rewrite.needsInput.join('; ')}`);
      }
      // The second version exists for bullets where no figure was ever
      // recorded — forcing the XYZ shape onto one of those makes it worse.
      if (rewrite.noInputAlternative) {
        lines.push(`  + ${rewrite.noInputAlternative.after}`);
        lines.push(`    without a figure: ${rewrite.noInputAlternative.rationale}`);
      }
      lines.push('');
    }
  }

  const plan: Array<[string, string[]]> = [
    ['Fix now', report.improvementPlan.immediate],
    ['Needs a figure you have to find', report.improvementPlan.shortTerm],
    ['Needs new experience', report.improvementPlan.longTerm],
    // Shown, because a list nobody can see was trimmed reads as a short list.
    ['Set aside for now', (report.improvementPlan.setAside ?? []).map((s) => `${s.what} — ${s.because}`)],
  ];
  for (const [heading, items] of plan) {
    if (items.length === 0) continue;
    lines.push(heading);
    for (const item of items) lines.push(`  - ${item}`);
    lines.push('');
  }

  return lines.join('\n').trimEnd();
}

/**
 * Folds a long line instead of cutting it.
 *
 * Everything here used to be truncated to fit a terminal width — the bullet to
 * 88 characters, the finding to 96 — which is fine for an index and wrong for
 * the one command whose job is to show the whole report. A reader who wants the
 * summary reads the coordinator; a reader who runs `/report` wants what was
 * actually found, and a report that hides the end of every sentence is not it.
 */
function wrap(text: string, first: string, rest: string, width = 96): string[] {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  const lines: string[] = [];
  let line = first;
  let prefix = first;

  for (const word of words) {
    if (line.length > prefix.length && line.length + 1 + word.length > width) {
      lines.push(line);
      prefix = rest;
      line = rest + word;
    } else {
      line = line.length > prefix.length ? `${line} ${word}` : line + word;
    }
  }

  if (line.trim()) lines.push(line);
  return lines;
}
