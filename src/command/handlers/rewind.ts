import type { CheckpointManager, SessionManager, SessionRestorer } from '../../session/types.js';
import type { Command } from '../types.js';

/**
 * Undo, at the granularity the session actually records.
 *
 * `rewindTo` was written, tested and unreachable — which was defensible while
 * nothing wrote a checkpoint, because there was nothing to rewind to. Now that
 * every exchange leaves one, a conversation that went somewhere wrong has a
 * way back that is not "start again".
 */
export function createRewindCommand(
  restorer: SessionRestorer,
  checkpoints: CheckpointManager,
  sessions: SessionManager,
): Command {
  return {
    name: 'rewind',
    aliases: ['undo'],
    description: 'List this session\'s checkpoints, or go back to one',
    args: [
      {
        name: 'checkpoint',
        description: 'Which one to return to. Omit to list them.',
        required: false,
        type: 'string',
      },
    ],
    examples: ['/rewind', '/rewind 3'],

    async execute(args, session) {
      const saved = checkpoints.list(session.id);
      if (saved.length === 0) {
        return { output: 'No checkpoints yet — they are written as the session goes.' };
      }

      const wanted = args.positional[0];
      if (!wanted) {
        return {
          output: [
            `${saved.length} checkpoint(s):`,
            '',
            // `0/0` for a conversation, which has no total to count against.
            // The phase says what was happening; the fraction only means
            // something to a run that scores a fixed number of entries.
            ...saved.map(
              (c, i) =>
                `  ${String(i + 1).padStart(2)}  ${c.createdAt.slice(11, 19)}  ` +
                (c.progress.total > 0
                  ? `${c.progress.done}/${c.progress.total}`
                  : c.progress.phase || 'conversation') +
                ` · ${c.messages.length} message(s)`,
            ),
            '',
            'Return to one with /rewind <number>. Everything after it is discarded.',
          ].join('\n'),
        };
      }

      // Numbered as listed rather than by id: the ids are UUIDs, and a user
      // reading the list above has an ordinal in front of them.
      const index = Number(wanted) - 1;
      const target = saved[index];
      if (!target) {
        return { output: `No checkpoint ${wanted}. There are ${saved.length}.` };
      }

      const restored = await restorer.rewindTo(session.id, target.id);
      sessions.save(restored);

      return {
        output:
          `Back to checkpoint ${index + 1} (${restored.progress.done}/${restored.progress.total}). ` +
          `${saved.length - index - 1} later checkpoint(s) discarded.`,
        data: restored,
      };
    },
  };
}
