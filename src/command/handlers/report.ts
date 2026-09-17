import type { DiagnosisReport, ResumeSessionState } from '../../domain.js';
import { render } from '../../skills/render-report.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

export function createReportCommand(): Command {
  return {
    name: 'report',
    aliases: [],
    description: 'Print the full report again',
    args: [],
    examples: ['/report'],

    async execute(_args: ParsedArgs, session): Promise<CommandResult> {
      const report = (session.state as ResumeSessionState).latestReport;
      if (!report) return { output: 'Nothing diagnosed yet. Try /diagnose.' };

      return { output: render(report as DiagnosisReport), data: report };
    },
  };
}
