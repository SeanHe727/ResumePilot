import type { SessionManager } from '../../session/types.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

export function createHistoryCommand(sessions: SessionManager): Command {
  return {
    name: 'history',
    aliases: ['h', 'sessions'],
    description: 'List past sessions',
    args: [{ name: 'limit', description: 'How many to show', required: false, type: 'number' }],
    examples: ['/history', '/history 20'],

    async execute(args: ParsedArgs): Promise<CommandResult> {
      const limit = Number(args.positional[0] ?? 10);
      const entries = sessions.list({ limit: Number.isFinite(limit) ? limit : 10 });

      if (entries.length === 0) return { output: 'No sessions yet.' };

      return {
        output: entries
          .map(
            (e) =>
              `  ${e.id.slice(0, 8)}  ${e.status.padEnd(11)}` +
              (e.progress.total > 0
                ? `${String(e.progress.done).padStart(2)}/${e.progress.total}  `
                : `${(e.progress.phase || '—').padEnd(5)}  `) +
              `${e.updatedAt.slice(0, 16).replace('T', ' ')}  ${e.sourcePath}`,
          )
          .join('\n'),
        data: entries,
      };
    },
  };
}
