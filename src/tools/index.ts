import { MapToolRegistry } from './registry.js';
import { analyzeEntryTool } from './analyze-entry.js';
import { analyzeFormatTool } from './analyze-format-tool.js';
import { analyzeWordingTool } from './analyze-wording.js';
import { generateReportTool } from './generate-report.js';
import { examineDepthTool } from './examine-depth.js';
import { parseResumeTool } from './parse-resume.js';
import { queryKnowledgeBaseTool } from './query-knowledge-base.js';
import {
  reviewContentTool,
  reviewFormatTool,
  reviewJdMatchTool,
  reviewNarrativeTool,
  reviewWordingTool,
} from './review.js';
import { applyRevisionTool, recordFactTool, revertRevisionTool } from './working-state.js';
import { rewriteBulletTool } from './rewrite-bullet.js';
import type { SearchProvider } from './search-provider.js';
import { webSearchTool } from './web-search.js';
import type { ToolRegistry } from './types.js';

export { MapToolRegistry } from './registry.js';
export { analyzeFormat, summariseFormat } from './analyze-format.js';
export { analyzeFormatTool } from './analyze-format-tool.js';
export { analyzeEntryTool } from './analyze-entry.js';
export { analyzeWordingTool } from './analyze-wording.js';
export { rewriteBulletTool } from './rewrite-bullet.js';
export { generateReportTool } from './generate-report.js';
export { examineDepthTool } from './examine-depth.js';
export { parseResumeTool } from './parse-resume.js';
export { queryKnowledgeBaseTool } from './query-knowledge-base.js';
export {
  reviewContentTool,
  reviewFormatTool,
  reviewJdMatchTool,
  reviewNarrativeTool,
  reviewWordingTool,
} from './review.js';
export { applyRevisionTool, recordFactTool, revertRevisionTool } from './working-state.js';
export { webSearchTool } from './web-search.js';
export * from './search-provider.js';
export * from './verify.js';
export * from './text-signals.js';
export * from './types.js';

/**
 * The tools available to the model.
 *
 * Notably absent: anything that reads a file. Resume text is untrusted input,
 * so paths arrive through the CLI or `/upload` and a Skill calls the parser in
 * ordinary code — see the trust-boundary note in `types.ts`.
 */
/**
 * `web_search` is registered only when a provider exists.
 *
 * A tool in the schema list is an offer, and a model takes it: registering one
 * that can only answer "no search provider is configured" spends a turn and a
 * tool call to learn what the caller already knew.
 */
export function createToolRegistry(
  deps: { search?: SearchProvider; orchestrator?: boolean } = {},
): ToolRegistry {
  const registry = new MapToolRegistry();
  registry.register(analyzeFormatTool as never);
  registry.register(analyzeEntryTool as never);
  registry.register(analyzeWordingTool as never);
  registry.register(rewriteBulletTool as never);
  registry.register(generateReportTool as never);
  registry.register(queryKnowledgeBaseTool as never);
  registry.register(parseResumeTool as never);
  registry.register(examineDepthTool as never);
  if (deps.search) registry.register(webSearchTool as never);
  // Registered only where the roles can actually be dispatched. A sub-agent
  // holds the same registry, and one that could dispatch roles would recurse
  // through the two pools that keep the fan-out from deadlocking.
  if (deps.orchestrator) {
    registry.register(reviewContentTool as never);
    registry.register(reviewWordingTool as never);
    registry.register(reviewNarrativeTool as never);
    registry.register(reviewJdMatchTool as never);
    registry.register(reviewFormatTool as never);
    // The two writes. A fixed pipeline has nobody to take a fact from and no
    // wording to settle on, so they belong to the conversation or nowhere.
    registry.register(recordFactTool as never);
    registry.register(applyRevisionTool as never);
    registry.register(revertRevisionTool as never);
  }
  return registry;
}
