import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { DiagnosisReport, ResumeSessionState } from '../../domain.js';
import { renderBrief, renderFull } from '../../skills/render-full.js';
import { render } from '../../skills/render-report.js';
import { changesSince } from '../../tools/versions.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

/**
 * What happened after the report was written, said above it.
 *
 * `/report` prints the report it has; it does not write a new one. Measured on
 * the first item-14 run: a fact given after the review left the report exactly
 * as it was — still asking for a figure the candidate had said could not be
 * published, silent on the one they gave — and nothing on it said it was older
 * than the conversation.
 */
function staleNotice(report: DiagnosisReport, state: ResumeSessionState): string {
  const { revised, facts } = changesSince(report, state);
  if (revised.length === 0 && facts.length === 0) return '';
  const parts = [
    ...(revised.length > 0
      ? [`${revised.map((id) => `\`${id}\``).join(', ')} ${revised.length === 1 ? 'was' : 'were'} revised`]
      : []),
    ...(facts.length > 0
      ? [
          `${facts.length} fact${facts.length === 1 ? ' was' : 's were'} given ` +
            `(about ${[...new Set(facts)].join(', ')})`,
        ]
      : []),
  ];
  return (
    `> **This report is older than the conversation.** Since it was written, ${parts.join(' and ')}. ` +
    `It does not reflect that — ask for the report to be updated.\n\n`
  );
}

/**
 * The review as the readers left it, rather than as the coordinator told it.
 *
 * The coordinator picks what to say and how much, which is what makes a
 * conversation bearable and what makes it partial. These are the other
 * documents: the brief is every point, one line each, meant to be read through;
 * the full one carries the reasoning and the quotes, and is meant to be looked
 * things up in rather than read.
 *
 * Both come from the same write-up, so the brief cannot say anything the full
 * one does not.
 */
export function createReportCommand(): Command {
  return {
    name: 'report',
    aliases: ['r'],
    description: 'Print the review. `--full` writes the long form to a file.',
    args: [
      {
        name: 'path',
        description: 'Where to write the full report. Only used with --full.',
        required: false,
        type: 'string',
      },
    ],
    examples: ['/report', '/report --full', '/report --full ~/review.md'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const state = session.state as ResumeSessionState;
      const report = state.latestReport;
      if (!report) {
        return { output: 'Nothing has been reported yet. Ask for a review first.' };
      }

      // Without the write-up there is nothing to derive either form from, so
      // this falls back to the terminal rendering rather than an empty page.
      if (!report.full) {
        return { output: staleNotice(report, state) + render(report), data: report };
      }

      if (!args.flags.full) {
        return { output: staleNotice(report, state) + renderBrief(report, session.sourcePath), data: report };
      }

      const path = resolve(
        (args.positional[0] ?? '').trim() ||
          `resume-review-${session.id.slice(0, 8)}.md`,
      );
      await writeFile(path, staleNotice(report, state) + renderFull(report, session.sourcePath), 'utf8');

      return {
        output: `Wrote the full review to ${path}.`,
        data: { path },
      };
    },
  };
}
