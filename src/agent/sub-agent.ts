import type { SearchProvider } from '../tools/search-provider.js';
import { LayeredContextManager } from '../context/manager.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { Session } from '../session/types.js';
import type { KnowledgeSearch } from '../knowledge/types.js';
import { readJson } from '../tools/verify.js';
import type { ToolRegistry } from '../tools/types.js';
import type { SubAgentConfig, SubAgentResult, SubAgentTask } from './types.js';

export interface SubAgentDeps {
  queryEngine: QueryEngine;
  toolRegistry: ToolRegistry;
  knowledge: KnowledgeSearch;
  session: Session;
  /**
   * Absent when no search key is configured.
   *
   * A sub-agent builds its own `ToolContext` rather than going through the
   * Dispatcher, so wiring the provider into the Dispatcher alone left the
   * fan-out — the path that actually runs a diagnosis — calling `web_search`
   * and getting "not configured" back in a millisecond.
   */
  search?: SearchProvider;
}

/**
 * A sub-agent's whole run is one exchange, and it is bounded by `maxTurns`
 * rather than by length. So `recent` is budgeted to hold all of it: cutting
 * inside an exchange drops the entry being diagnosed, and what survives is a
 * conversation the provider rejects.
 */
const SUB_AGENT_CONTEXT = {
  maxTotalTokens: 32_000,
  recentBudget: 20_000,
  taskBudget: 4_000,
  toolResultBudget: 3_000,
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
    // Set below, once it is known whether the optional tools resolved.
    context.setTaskContext(buildTaskBlock(config, task.context));
    context.addMessage({ role: 'user', content: task.input });

    // Only the tools this role is allowed. A role cannot reach past its
    // remit even if the model asks for something else by name.
    const available = (config.optionalTools ?? []).filter((name) =>
      this.deps.toolRegistry.has(name),
    );
    const tools = this.deps.toolRegistry.getSchemasFor([...config.tools, ...available]);
    context.setSystemPrompt(
      available.length > 0 && config.optionalPrompt
        ? `${config.systemPrompt}\n\n${config.optionalPrompt}`
        : config.systemPrompt,
    );
    const deadline = AbortSignal.timeout(config.timeoutMs);

    while (turns < config.maxTurns) {
      turns += 1;

      // The last turn is offered no tools, so the only thing left to do is
      // answer. Without this an agent that spends its whole allowance looking
      // things up returns nothing at all, and the entry it was reading scores
      // zero — which in the report reads as a verdict rather than a gap.
      //
      // Taking the tools away is not enough on its own: a model that was about
      // to look something up writes about what it would have looked up. It has
      // to be told that this turn is the answer.
      const finalTurn = turns === config.maxTurns;
      if (finalTurn && turns > 1) {
        context.addMessage({ role: 'user', content: FINAL_TURN_NUDGE });
      }

      // Built after the nudge, not before: the window is a snapshot, and one
      // taken first does not contain the instruction this turn depends on.
      const window = context.build();

      const response = await this.deps.queryEngine.query({
        task: config.task,
        systemPrompt: window.systemPrompt,
        messages: window.messages,
        ...(tools.length > 0 && !finalTurn ? { tools } : {}),
        // Constrained on the turns where an answer is what we want. Left off
        // while tools are on the table, so a turn that should be a lookup is
        // not pushed into answering early.
        ...(tools.length === 0 || finalTurn ? { jsonMode: true } : {}),
        abortSignal: deadline,
      });

      usage.inputTokens += response.usage.inputTokens;
      usage.outputTokens += response.usage.outputTokens;

      if (!finalTurn && response.type === 'tool_use' && response.toolCalls?.length) {
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

      // A thinking model can spend a whole turn reasoning and emit nothing —
      // twelve thousand characters of working and an empty answer. Reported as
      // success it becomes an entry scoring zero, which reads as a verdict on
      // the resume; reported as a failure the orchestrator can run it again,
      // and it usually lands the second time.
      // Truncated at the output cap: the JSON is cut mid-object, so parsing
      // falls back to treating it as prose and the report blames the wrong
      // thing. A thinking model spends most of the cap on reasoning, so this
      // is reached long before the answer looks large.
      if (response.stopReason === 'max_tokens') {
        return {
          agentId: config.id,
          agentName: config.name,
          success: false,
          usage,
          turns,
          durationMs: Date.now() - started,
          error: 'the answer was cut off at the output limit',
        };
      }

      const answer = response.content?.trim();
      if (!answer) {
        return {
          agentId: config.id,
          agentName: config.name,
          success: false,
          usage,
          turns,
          durationMs: Date.now() - started,
          error: response.reasoning
            ? 'the model finished its reasoning without writing an answer'
            : 'the model returned nothing',
        };
      }

      const { value, error } = readJson(answer);
      if (value === null && error) {
        // Said out loud rather than falling back to "it replied in prose": the
        // answer was JSON, and one bad character is a different problem from a
        // model that ignored the schema.
        return {
          agentId: config.id,
          agentName: config.name,
          success: false,
          usage,
          turns,
          durationMs: Date.now() - started,
          error: `the answer would not parse as JSON — ${error}`,
        };
      }

      return {
        agentId: config.id,
        agentName: config.name,
        success: true,
        output: value ?? answer,
        usage,
        turns,
        durationMs: Date.now() - started,
      };
    }

    // Only reachable with `maxTurns` at zero: the last turn is offered no
    // tools, so it always produces text.
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
        ...(this.deps.search ? { search: this.deps.search } : {}),
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

const FINAL_TURN_NUDGE = `No more lookups. Answer now, with the JSON described above and nothing else —
no preamble, no explanation around it. Work from what you already have; an
answer built on partial reference material is worth more than none.`;
