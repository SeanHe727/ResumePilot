import { Compressor, estimateTokens } from '../../context/compressor.js';
import type { Hook, HookContext, HookOutcome } from '../types.js';

/**
 * Trims an oversized tool result before it reaches the context window.
 *
 * The Context layer compresses on the way in too, but by then the result has
 * already been handed back to whatever called the tool. Doing it here means
 * one compressed copy rather than a full one in the caller's hands and a
 * trimmed one in the window.
 */
export function createResultCompressHook(maxTokens = 1_000): Hook {
  const compressor = new Compressor();

  return {
    name: 'result-compress',
    timing: 'post-tool',
    priority: 20,
    enabled: true,

    async execute(ctx: HookContext): Promise<HookOutcome> {
      if (!ctx.result?.data) return { action: 'continue' };

      const raw = JSON.stringify(ctx.result.data);
      if (estimateTokens(raw) <= maxTokens) return { action: 'continue' };

      const compressed = compressor.compressToolOutput(raw, maxTokens);

      // `compressToolOutput` falls back to plain truncation when structural
      // compression overshoots, and truncated JSON does not parse. Parsing it
      // blind throws, the pipeline swallows the throw, and the result travels
      // on uncompressed — the failure looks like the hook doing nothing.
      let data: unknown;
      try {
        data = JSON.parse(compressed);
      } catch {
        data = { truncated: true, preview: compressed };
      }

      return { action: 'modify_result', result: { ...ctx.result, data } };
    },
  };
}
