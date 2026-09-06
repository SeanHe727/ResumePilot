import type { SessionManager } from '../../session/types.js';
import type { Command, CommandResult } from '../types.js';

export function createResetCommand(sessions: SessionManager): Command {
  return {
    name: 'reset',
    aliases: [],
    description: 'Clear the current session and start a new one on the same file',
    args: [],
    examples: ['/reset'],

    async execute(_args, session): Promise<CommandResult> {
      // A new session rather than a wiped one: the old diagnosis stays on disk
      // and `/history` can still reach it, which is what makes `/diff` possible.
      const fresh = sessions.create({ sourcePath: session.sourcePath, parentSessionId: session.id });

      return {
        output: `New session ${fresh.id.slice(0, 8)} on ${fresh.sourcePath}. The previous one is in /history.`,
        action: 'new_session',
        data: fresh,
      };
    },
  };
}
