import type { Hook, HookContext, HookOutcome } from '../types.js';

/**
 * Keeps the progress line moving without every Skill having to remember to.
 *
 * A diagnosis is minutes long and mostly silent; without this the user cannot
 * tell a slow entry from a hung one.
 *
 * Counts `analyze_entry` alone. Each entry also gets a wording pass and the
 * run ends with a report, and counting those would put `done` past `total`.
 */
export function createProgressUpdateHook(): Hook {
  return {
    name: 'progress-update',
    timing: 'post-tool',
    priority: 40,
    enabled: true,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      if (ctx.toolCall.name !== 'analyze_entry' || !ctx.result?.success) {
        return { action: 'continue' };
      }

      const { done, total } = ctx.session.progress;
      const next = Math.min(done + 1, total || done + 1);

      ctx.session.progress = {
        ...ctx.session.progress,
        done: next,
        current: Math.min(next + 1, total || next + 1),
        phase: total ? `diagnosing entries (${next}/${total})` : `diagnosing entry ${next}`,
      };

      return { action: 'continue' };
    },
  };
}
