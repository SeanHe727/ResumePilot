import type { Orchestrator } from './types.js';
import type { SearchProvider } from '../tools/search-provider.js';
import type { ToolCall } from '../types.js';
import type { HookContext, HookPipeline } from '../hooks/types.js';
import { TOOL_START_TIME } from '../hooks/post-tool/metric-emit.js';
import type { KnowledgeSearch } from '../knowledge/types.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { Session } from '../session/types.js';
import type { ToolRegistry, ToolResult } from '../tools/types.js';

export interface DispatcherDeps {
  registry: ToolRegistry;
  hooks: HookPipeline;
  queryEngine: QueryEngine;
  knowledge: KnowledgeSearch;
  /** Absent when no search key is configured; `web_search` is unregistered too. */
  search?: SearchProvider;
  /**
   * Built per session rather than shared: a sub-agent runs tools against the
   * session it was started for, so one instance would attribute every call to
   * whichever session the process opened first.
   */
  orchestratorFor?: (session: Session) => Orchestrator;
}

/**
 * Everything that happens around a tool call, and nothing else.
 *
 * Permission, budget, audit, compression, memory and progress all live in the
 * hook pipeline, which is what keeps this to three steps. The one thing it
 * owns is turning a failure into a `ToolResult` — a tool that throws would
 * otherwise end the run, and the model can often recover from being told what
 * went wrong.
 */
export class Dispatcher {
  constructor(private readonly deps: DispatcherDeps) {}

  async execute(toolCall: ToolCall, session: Session): Promise<ToolResult> {
    const ctx: HookContext = {
      toolCall,
      session,
      metadata: new Map<string, unknown>([[TOOL_START_TIME, Date.now()]]),
    };

    const pre = await this.deps.hooks.runPre(ctx);
    if (pre.action === 'block') {
      return { success: false, error: { code: 'permission_denied', message: pre.reason } };
    }

    // Read back off the context: a pre-tool hook may have rewritten the name
    // or the arguments, and the tool that runs must be the one they approved.
    ctx.result = await this.run(ctx.toolCall, session);

    const post = await this.deps.hooks.runPost(ctx);
    return post.action === 'modify_result' ? post.result : ctx.result;
  }

  private async run(toolCall: ToolCall, session: Session): Promise<ToolResult> {
    if (!this.deps.registry.has(toolCall.name)) {
      // The model asked for something that does not exist. Handed back as a
      // result rather than thrown, so it can pick a real tool on the next turn.
      return {
        success: false,
        error: { code: 'input_error', message: `no tool called ${toolCall.name}` },
      };
    }

    try {
      return await this.deps.registry.resolve(toolCall.name).execute(toolCall.input as never, {
        session,
        queryEngine: this.deps.queryEngine,
        knowledge: this.deps.knowledge,
        ...(this.deps.search ? { search: this.deps.search } : {}),
        ...(this.deps.orchestratorFor ? { orchestrator: this.deps.orchestratorFor(session) } : {}),
        abortSignal: session.abortController.signal,
      });
    } catch (err) {
      return {
        success: false,
        error: {
          code: 'service_error',
          message: err instanceof Error ? err.message : String(err),
        },
      };
    }
  }
}
