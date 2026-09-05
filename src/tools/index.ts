import { MapToolRegistry } from './registry.js';
import { analyzeFormatTool } from './analyze-format-tool.js';
import { queryKnowledgeBaseTool } from './query-knowledge-base.js';
import type { ToolRegistry } from './types.js';

export { MapToolRegistry } from './registry.js';
export { analyzeFormat, summariseFormat } from './analyze-format.js';
export { analyzeFormatTool } from './analyze-format-tool.js';
export { queryKnowledgeBaseTool } from './query-knowledge-base.js';
export { RULES, violation, ruleSource, type RuleId, type RuleDefinition } from './rules.js';
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
  registry.register(queryKnowledgeBaseTool as never);
  return registry;
}
