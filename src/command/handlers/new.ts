import type { SessionManager } from '../../session/types.js';
import type { Command, CommandResult } from '../types.js';

/**
 * Start over, and mean it.
 *
 * Everything else in this system is built to accumulate: the session keeps the
 * document and the revisions, the transcript survives a restart, and the memory
 * store carries what it learned about the candidate from one resume to the
 * next. That is right while someone is working on one resume, which is the only
 * thing they are ever doing until they say otherwise.
 *
 * This is how they say otherwise. The previous session stays on disk — it is
 * what `/history` reads — but the long-term memory goes, because a weak point
 * recorded against a resume nobody is working on any more is a recollection
 * about nothing that still shapes every profile layer after it.
 */
export function createNewCommand(sessions: SessionManager, memory: { deleteAll(): void }): Command {
  return {
    name: 'new',
    aliases: ['reset'],
    description: 'Start fresh: a new session, and everything remembered about the last one cleared',
    args: [],
    examples: ['/new'],

    async execute(_args, session): Promise<CommandResult> {
      memory.deleteAll();

      const fresh = sessions.create({ sourcePath: session.sourcePath, parentSessionId: session.id });

      return {
        output:
          `New session ${fresh.id.slice(0, 8)}. Memory cleared; the previous session is in /history. ` +
          'Upload a resume, or give me a path.',
        action: 'new_session',
        data: fresh,
      };
    },
  };
}
