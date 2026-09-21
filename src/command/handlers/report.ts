import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { ResumeSessionState } from '../../domain.js';
import { renderBrief, renderFull } from '../../skills/render-full.js';
import { render } from '../../skills/render-report.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

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
      const report = (session.state as ResumeSessionState).latestReport;
      if (!report) {
        return { output: 'Nothing has been reported yet. Ask for a review first.' };
      }

      // Without the write-up there is nothing to derive either form from, so
      // this falls back to the terminal rendering rather than an empty page.
      if (!report.full) {
        return { output: render(report), data: report };
      }

      if (!args.flags.full) {
        return { output: renderBrief(report, session.sourcePath), data: report };
      }

      const path = resolve(
        (args.positional[0] ?? '').trim() ||
          `resume-review-${session.id.slice(0, 8)}.md`,
      );
      await writeFile(path, renderFull(report, session.sourcePath), 'utf8');

      return {
        output: `Wrote the full review to ${path}.`,
        data: { path },
      };
    },
  };
}
