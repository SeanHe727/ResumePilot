import type { SessionRestorer } from '../../session/types.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

/**
 * Named `/continue` rather than `/resume`.
 *
 * The reference project called this `/resume`, which in a resume tool reads as
 * "the document" before it reads as "carry on". The old name stays as an alias
 * so muscle memory still works.
 */
export function createContinueCommand(restorer: SessionRestorer): Command {
  return {
    name: 'continue',
    aliases: ['resume', 'r'],
    description: 'Carry on from where an interrupted session stopped',
    args: [{ name: 'id', description: 'Session to continue', required: false, type: 'string' }],
    examples: ['/continue', '/continue 3f2a91b0'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const id = args.positional[0] ?? session.id;
      const restored = await restorer.resume(id);

      return {
        output:
          `Continuing ${restored.id.slice(0, 8)} from ${restored.progress.done}/${restored.progress.total}.\n` +
          `  ${restored.progress.phase}`,
        data: restored,
      };
    },
  };
}
