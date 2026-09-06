import { LayeredContextManager } from '../context/manager.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { Session } from '../session/types.js';
import type { KnowledgeSearch } from '../knowledge/types.js';
import type { ToolRegistry } from '../tools/types.js';
import type { SubAgentConfig, SubAgentResult, SubAgentTask } from './types.js';

export interface SubAgentDeps {
  queryEngine: QueryEngine;
  toolRegistry: ToolRegistry;
  knowledge: KnowledgeSearch;
  session: Session;
}

/**
 * A sub-agent's whole run is one exchange, and it is bounded by `maxTurns`
 * rather than by length. So `recent` is budgeted to hold all of it: cutting
 * inside an exchange drops the entry being diagnosed, and what survives is a
 * conversation the provider rejects.
 */
const SUB_AGENT_CONTEXT = {
  maxTotalTokens: 24_000,
  recentBudget: 16_000,
  taskBudget: 1_000,
  toolResultBudget: 1_500,
} as const;

/**
 * One sub-agent run: its own system prompt, its own tool subset, its own
 * context, sharing only the Query Engine — and through it the rate limiter,
 * the cache and the budget.
 *
 * The loop is the point. A fixed pipeline decides what to retrieve before it
 * has seen anything; an agent retrieves, reads what came back, and decides
 * whether that was the right question. Measured on a set of bullets with one
 * planted defect each, letting the model choose which of the twelve rule
 * families to consult found the planted one 73% of the time against 27% for a
 * fixed pair — and on real bullets it wanted something outside that fixed pair
 * for 79% of them.
 *
 * The cost is a second model call on the turns where it changes its mind, and
 * a run that is no longer byte-identical between invocations. Which is why the
 * deterministic `diagnose-resume` pipeline still exists alongside this.
 */
export class SubAgentRuntime {
  constructor(private readonly deps: SubAgentDeps) {}

  async run(task: SubAgentTask): Promise<SubAgentResult> {
    const { agentConfig: config } = task;
    const started = Date.now();
    const usage = { inputTokens: 0, outputTokens: 0 };
    let turns = 0;

    const context = new LayeredContextManager(SUB_AGENT_CONTEXT);
    context.setSystemPrompt(config.systemPrompt);
    context.setTaskContext(buildTaskBlock(config, task.context));
    context.addMessage({ role: 'user', content: task.input });

    // Only the tools this role is allowed. A role cannot reach past its
    // remit even if the model asks for something else by name.
    const tools = this.deps.toolRegistry.getSchemasFor(config.tools);
    const deadline = AbortSignal.timeout(config.timeoutMs);

    while (turns < config.maxTurns) {
      turns += 1;
      const window = context.build();

      const response = await this.deps.queryEngine.query({
        task: 'diagnose_bullet',
        systemPrompt: window.systemPrompt,
        messages: window.messages,
        ...(tools.length > 0 ? { tools } : {}),
        abortSignal: deadline,
      });

      usage.inputTokens += response.usage.inputTokens;
      usage.outputTokens += response.usage.outputTokens;

      if (response.type === 'tool_use' && response.toolCalls?.length) {
        // Sub-agent tool calls do not go through the hook pipeline. The hooks
        // govern what the main loop does on the user's behalf; a sub-agent is
        // already inside a call the gate approved, and re-running permission,
        // audit and memory writes per inner call would multiply all three.
        context.addMessage({
          role: 'assistant',
          content: response.content ?? '',
          toolCalls: response.toolCalls,
          // Carried, not read: a thinking model needs its own working back on
          // the next turn or it refuses to continue the exchange.
          ...(response.reasoning ? { reasoning: response.reasoning } : {}),
        });
        for (const call of response.toolCalls) {
          context.addToolResult(call.id, await this.callTool(call, deadline));
        }
        continue;
      }

      return {
        agentId: config.id,
        agentName: config.name,
        success: true,
        output: parseOutput(response.content ?? ''),
        usage,
        turns,
        durationMs: Date.now() - started,
      };
    }

    // Out of turns with no answer. Reported as a failure rather than as an
    // empty result, so `continue` can drop it and the caller can see why.
    return {
      agentId: config.id,
      agentName: config.name,
      success: false,
      usage,
      turns,
      durationMs: Date.now() - started,
      error: `stopped after ${config.maxTurns} turns without a final answer`,
    };
  }

  private async callTool(
    call: { id: string; name: string; input: Record<string, unknown> },
    abortSignal: AbortSignal,
  ): Promise<string> {
    if (!this.deps.toolRegistry.has(call.name)) {
      return JSON.stringify({ success: false, error: `no tool called ${call.name}` });
    }

    try {
      const result = await this.deps.toolRegistry.resolve(call.name).execute(call.input as never, {
        session: this.deps.session,
        queryEngine: this.deps.queryEngine,
        knowledge: this.deps.knowledge,
        abortSignal,
      });
      return JSON.stringify(result);
    } catch (err) {
      // Handed back as a tool result rather than thrown: the agent can read the
      // failure and try a different question, which is the whole point of the loop.
      return JSON.stringify({
        success: false,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }
}

/**
 * The allow-list in action: only the declared keys cross into the sub-agent.
 *
 * A sub-agent handed the parent's whole context pays for it on every turn and
 * diagnoses worse — the entry it is judging competes for attention with
 * nineteen it is not.
 */
function buildTaskBlock(config: SubAgentConfig, context?: Record<string, unknown>): string {
  if (!context) return '';

  return config.contextBoundary
    .filter((key) => context[key] !== undefined)
    .map((key) => `${key}:\n${stringify(context[key])}`)
    .join('\n\n');
}

function stringify(value: unknown): string {
  return typeof value === 'string' ? value : JSON.stringify(value, null, 2);
}

/** Sub-agents are asked for JSON; the fenced-block case is the common miss. */
function parseOutput(content: string): unknown {
  const fenced = /```(?:json)?\s*([\s\S]+?)\s*```/.exec(content);
  const candidate = fenced?.[1] ?? /\{[\s\S]*\}/.exec(content)?.[0];
  if (!candidate) return content;

  try {
    return JSON.parse(candidate);
  } catch {
    return content;
  }
}
