import type { ResumeSessionState } from '../../domain.js';
import type { SessionManager } from '../../session/types.js';
import { revertLast } from '../../tools/working-state.js';
import type { Command } from '../types.js';

/**
 * Takes back the last change to a line, without asking the model.
 *
 * Every wording the candidate gives is kept as a new version as soon as it is
 * given, so the way back has to be as direct as the way in. Not `/undo`, which
 * is `/rewind` and goes back a whole exchange.
 */
export function createRevertCommand(sessions: SessionManager): Command {
  return {
    name: 'revert',
    aliases: [],
    description: 'Put back the wording a line had before its last change',
    args: [
      {
        name: 'bullet',
        description: 'Only undo changes to this bullet id. Omit for the most recent change.',
        required: false,
        type: 'string',
      },
    ],
    examples: ['/revert', '/revert s2:e0:b0'],

    async execute(args, session) {
      const state = session.state as ResumeSessionState;
      const result = revertLast(state, args.positional[0]?.trim() || undefined);
      if ('error' in result) return { output: `Nothing reverted: ${result.error}.` };

      session.state = result.state;
      sessions.save(session);
      return {
        output:
          `Reverted ${result.undone.bulletId} to what it said before version ${result.undone.version} ` +
          `(now version ${result.state.documentVersion}):\n  ${result.undone.before}`,
      };
    },
  };
}
