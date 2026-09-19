import { isGranted } from '../../session/granted-paths.js';
import type { Hook, HookContext, HookOutcome } from '../types.js';

/**
 * A file is read because the person asked for it, not because a model said so.
 *
 * The permission rule that lets `parse_resume` through says the path comes from
 * the candidate. Nothing checked. The coordinator holds that tool so a path
 * pasted mid-conversation can be read without starting over — and the same
 * tool, in the same hands, will read any path the model writes down. A model
 * that has just been handed a résumé full of third-party text is not the place
 * to decide which files get opened.
 *
 * So a path has to have been granted: named by the person in a message, or
 * handed over by `/upload`, which is the person speaking directly. Grants are
 * resolved as they are made, so the comparison here is exact — the guessing
 * happens once, against the candidate's own words, and never against a model's.
 */
export function createPathSourceHook(): Hook {
  return {
    name: 'path-source',
    timing: 'pre-tool',
    priority: 20,
    watches: ['parse_resume'],
    enabled: true,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      const path = (ctx.toolCall.input as { path?: unknown }).path;
      if (typeof path !== 'string' || !path.trim()) return { action: 'continue' };

      if (isGranted(path, ctx.session)) return { action: 'continue' };

      return {
        action: 'block',
        reason:
          `"${path.trim()}" is not a file the candidate has named. ` +
          'Ask them for the path, or have them use /upload.',
      };
    },
  };
}
