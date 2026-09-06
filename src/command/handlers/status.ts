import type { QueryEngine } from '../../query-engine/types.js';
import type { Session } from '../../session/types.js';
import type { Command, CommandResult } from '../types.js';

/**
 * What the run is doing and what it has cost.
 *
 * A diagnosis is minutes of mostly silent work, and the two questions a user
 * has during it are "is this stuck" and "how much am I spending".
 */
export function createStatusCommand(engine: QueryEngine): Command {
  return {
    name: 'status',
    aliases: ['s', 'info'],
    description: 'Show progress, context usage and spend',
    args: [],
    examples: ['/status'],

    async execute(_args, session: Session): Promise<CommandResult> {
      const { progress } = session;
      const lines = [
        `session ${session.id.slice(0, 8)}  ${session.status}`,
        `  ${session.sourcePath}`,
        `  ${progress.done}/${progress.total}  ${progress.phase}`,
        `  ${session.contextManager.getStats()}`,
        `  ${engine.getUsageSummary()}`,
      ];

      const skipped = session.state.skipped;
      if (Array.isArray(skipped) && skipped.length > 0) {
        lines.push(`  skipped: ${skipped.join(', ')}`);
      }

      return { output: lines.join('\n') };
    },
  };
}
