import type { Hook, HookContext, HookOutcome } from '../types.js';

/**
 * What the coordinator actually sent a specialist, while it is being sent.
 *
 * The briefing is written fresh on every dispatch, so no two runs send the same
 * thing and nothing about a result explains what produced it. Everything else
 * about a sub-agent run is already invisible — the audit log stops at the tool
 * boundary, and the cache keeps only final answers — so a review that came back
 * oddly narrow gives no way to ask whether it was pointed somewhere odd.
 *
 * Off by default, and on demand rather than on disk. The audit log summarises
 * every call to 200 characters precisely so it does not become a second copy of
 * the resume; widening it for this would undo that. `/hooks enable
 * dispatch-trace` turns it on for a session and it costs nothing when off.
 *
 * Pre-tool rather than post: a specialist takes a minute, and what it was asked
 * is worth seeing before the answer rather than beside it.
 */
export function createDispatchTraceHook(write: (line: string) => void): Hook {
  return {
    name: 'dispatch-trace',
    timing: 'pre-tool',
    priority: 50,
    watches: ['review_content', 'review_wording', 'review_narrative', 'review_jd_match'],
    enabled: false,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      const input = ctx.toolCall.input as Record<string, unknown>;
      const target = typeof input.entryId === 'string' ? ` ${input.entryId}` : ' whole document';
      const lines = [`→ ${ctx.toolCall.name}${target}`];

      for (const [field, label] of [
        ['understanding', 'understood as'],
        ['supplied', 'candidate said'],
        ['goal', 'asked for'],
      ] as const) {
        const value = input[field];
        if (typeof value === 'string' && value.trim()) lines.push(`    ${label}: ${value.trim()}`);
      }

      // Said explicitly. A dispatch with no aim and one whose aim came out
      // blank look identical in a trace that prints nothing for both.
      if (lines.length === 1) lines.push('    (no briefing)');

      write(lines.join('\n'));
      return { action: 'continue' };
    },
  };
}
