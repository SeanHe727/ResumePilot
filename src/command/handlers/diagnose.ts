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

/**
 * Runs a diagnosis on the loaded resume.
 *
 * One path. A deterministic pipeline ran alongside this one for a while, on the
 * argument that a run should be able to cost a known amount and produce the
 * same answer twice — but nobody wanting a good resume trades the quality for
 * the latency, and two paths meant every change had to be made twice.
 */
export function createDiagnoseCommand(sessions: SessionManager, run: SkillRunner): Command {
  return {
    name: 'diagnose',
    aliases: ['d'],
    description: 'Diagnose the loaded resume',
    args: [
      { name: 'path', description: 'Resume file, if none is loaded yet', required: false, type: 'string' },
    ],
    examples: ['/diagnose', '/diagnose resume.pdf'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const path = args.positional.join(' ').trim() || session.sourcePath;
      if (!path) return { output: 'No resume loaded. Try /upload <file>.' };

      if (path !== session.sourcePath) {
        session.sourcePath = path;
        sessions.save(session);
      }

      sessions.updateStatus(session.id, 'processing');

      const output = await run(SUB_AGENT, { rawInput: path, parsedArgs: { path } }, session.id);

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
