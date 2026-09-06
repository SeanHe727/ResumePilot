import type { ResumeSessionState } from '../../domain.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

/**
 * The report prints one line per bullet. This is where the rest of it lives —
 * the three XYZ dimensions and every finding, for one entry.
 */
export function createDetailCommand(): Command {
  return {
    name: 'detail',
    aliases: ['d'],
    description: 'Show the full diagnosis for one entry',
    args: [{ name: 'n', description: 'Entry number as shown in the report', required: true, type: 'number' }],
    examples: ['/detail 2'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const state = session.state as ResumeSessionState;
      const report = state.latestReport;
      if (!report) return { output: 'Nothing diagnosed yet. Try /diagnose.' };

      const index = Number(args.positional[0]) - 1;
      const entry = report.perEntry[index];
      if (!entry) return { output: `No entry ${args.positional[0]}. Range: 1-${report.perEntry.length}.` };

      const diagnosis = state.entryDiagnoses?.find((d) => d.entryId === entry.entryId);
      const lines = [`${entry.score}/100  ${entry.label}`, ''];

      for (const bullet of entry.bullets) {
        lines.push(`  ${String(bullet.score).padStart(3)}  ${bullet.text}`);

        const scored = diagnosis?.bullets.find((b) => b.bulletId === bullet.bulletId);
        if (scored) {
          const { impact, measurement, method } = scored.dimensions;
          lines.push(
            `       impact ${impact.score}  measurement ${measurement.score}  method ${method.score}`,
          );
          for (const issue of scored.issues) lines.push(`       - ${issue}`);
          for (const strength of scored.strengths) lines.push(`       + ${strength}`);
        }
        lines.push('');
      }

      return { output: lines.join('\n').trimEnd(), data: entry };
    },
  };
}
