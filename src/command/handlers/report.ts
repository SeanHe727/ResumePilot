import type { ResumeSessionState } from '../../domain.js';
import { render } from '../../skills/render-report.js';
import type { Command, CommandResult } from '../types.js';

/**
 * The report as the specialists left it, rather than as the coordinator told it.
 *
 * The coordinator narrates — it picks what to say and how much, which is what
 * makes a conversation bearable and what makes it partial. The report object is
 * the other thing: every score, every entry, the plan, and what the plan set
 * aside. They are not the same document and neither replaces the other.
 */
export function createReportCommand(): Command {
  return {
    name: 'report',
    aliases: ['r'],
    description: 'Print the full diagnosis report, scores and all',
    args: [],
    examples: ['/report'],

    async execute(_args, session): Promise<CommandResult> {
      const report = (session.state as ResumeSessionState).latestReport;
      if (!report) {
        return { output: 'Nothing has been reported yet. Ask for a review first.' };
      }

      return { output: render(report), data: report };
    },
  };
}
