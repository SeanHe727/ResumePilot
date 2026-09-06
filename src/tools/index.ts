import { MapToolRegistry } from './registry.js';
import { analyzeEntryTool } from './analyze-entry.js';
import { analyzeFormatTool } from './analyze-format-tool.js';
import { analyzeWordingTool } from './analyze-wording.js';
import { generateReportTool } from './generate-report.js';
import { queryKnowledgeBaseTool } from './query-knowledge-base.js';
import { rewriteBulletTool } from './rewrite-bullet.js';
import type { ToolRegistry } from './types.js';

export { MapToolRegistry } from './registry.js';
export { analyzeFormat, summariseFormat } from './analyze-format.js';
export { analyzeFormatTool } from './analyze-format-tool.js';
export { analyzeEntryTool } from './analyze-entry.js';
export { analyzeWordingTool } from './analyze-wording.js';
export { rewriteBulletTool } from './rewrite-bullet.js';
export { generateReportTool } from './generate-report.js';
export { queryKnowledgeBaseTool } from './query-knowledge-base.js';
export * from './prompts.js';
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
export function createToolRegistry(): ToolRegistry {
  const registry = new MapToolRegistry();
  registry.register(analyzeFormatTool as never);
  registry.register(analyzeEntryTool as never);
  registry.register(analyzeWordingTool as never);
  registry.register(rewriteBulletTool as never);
  registry.register(generateReportTool as never);
  registry.register(queryKnowledgeBaseTool as never);
  return registry;
}
