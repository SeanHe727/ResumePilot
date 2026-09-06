import type { ResumeSessionState } from '../../domain.js';
import type { SessionManager } from '../../session/types.js';
import type { SkillOutput } from '../../skills/types.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

export type SkillRunner = (
  name: string,
  input: { rawInput: string; parsedArgs?: Record<string, unknown> },
  sessionId: string,
) => Promise<SkillOutput>;

const SUB_AGENT = 'orchestrated-diagnose';
const DETERMINISTIC = 'diagnose-resume';

/**
 * Runs a diagnosis on the loaded resume.
 *
 * Two paths, and `--fast` is the only way to the second. The sub-agent path is
 * the default because it retrieves better; the deterministic one exists for
 * when a run has to cost a known amount and produce the same answer twice.
 */
export function createDiagnoseCommand(sessions: SessionManager, run: SkillRunner): Command {
  return {
    name: 'diagnose',
    aliases: ['d'],
    description: 'Diagnose the loaded resume',
    args: [
      { name: 'path', description: 'Resume file, if none is loaded yet', required: false, type: 'string' },
    ],
    examples: ['/diagnose', '/diagnose resume.pdf', '/diagnose --fast'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const path = args.positional.join(' ').trim() || session.sourcePath;
      if (!path) return { output: 'No resume loaded. Try /upload <file>.' };

      if (path !== session.sourcePath) {
        session.sourcePath = path;
        sessions.save(session);
      }

      const skill = args.flags.fast ? DETERMINISTIC : SUB_AGENT;
      sessions.updateStatus(session.id, 'processing');

      const output = await run(skill, { rawInput: path, parsedArgs: { path } }, session.id);

      // Paused, not failed: the work already done is on disk and `/continue`
      // can pick it up. A failed run would have to start over.
      sessions.updateStatus(session.id, output.success ? 'completed' : 'paused');

      if (!output.success) return { output: `Diagnosis stopped: ${output.error ?? 'unknown'}` };

      const state = session.state as ResumeSessionState;
      const score = state.latestReport?.summary.overallScore;
      return {
        output: output.report ?? `Diagnosed. Overall ${score ?? '?'}/100.`,
        data: state.latestReport,
      };
    },
  };
}
