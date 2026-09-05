import type { ToolSchema } from '../types.js';
import type { Tool, ToolRegistry } from './types.js';

/**
 * The tool registry.
 *
 * Two lookups matter, and they are deliberately different: `getSchemas()` is
 * what the main loop offers the model, while `getSchemasFor(names)` is how a
 * sub-agent is given a strict subset. Capability is scoped by construction —
 * an agent cannot call a tool it was never handed, which is the mechanism the
 * trust boundary in `types.ts` relies on.
 */
export class MapToolRegistry implements ToolRegistry {
  private readonly tools = new Map<string, Tool>();

  register(tool: Tool): void {
    if (this.tools.has(tool.name)) {
      // Silent replacement would make the active implementation depend on
      // module import order.
      throw new Error(`Tool "${tool.name}" is already registered`);
    }
    this.tools.set(tool.name, tool);
  }

  resolve(name: string): Tool {
    const tool = this.tools.get(name);
    if (!tool) {
      throw new Error(
        `Tool "${name}" is not registered. Available: ${[...this.tools.keys()].join(', ')}`,
      );
    }
    return tool;
  }

  has(name: string): boolean {
    return this.tools.has(name);
  }

  getSchemas(): ToolSchema[] {
    return [...this.tools.values()].map(toSchema);
  }

  getSchemasFor(names: string[]): ToolSchema[] {
    return names.map((name) => toSchema(this.resolve(name)));
  }

  list(): Array<{ name: string; description: string }> {
    return [...this.tools.values()].map((t) => ({ name: t.name, description: t.description }));
  }
}

function toSchema(tool: Tool): ToolSchema {
  return { name: tool.name, description: tool.description, parameters: tool.parameters };
}
