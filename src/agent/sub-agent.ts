import { ANSWER_NOW, FINAL_TURN_NUDGE } from '../prompts/index.js';
import type { SearchProvider } from '../tools/search-provider.js';
import { LayeredContextManager } from '../context/manager.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { Session } from '../session/types.js';
import type { KnowledgeSearch } from '../knowledge/types.js';
import { readJson } from '../tools/verify.js';
import type { ToolRegistry } from '../tools/types.js';
import { NoTrace, type Trace, type TraceActor } from '../trace/index.js';
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
  /**
   * Where a debug run records what this agent was given and what it did.
   *
   * The no-op in production. Attached here because everything a specialist
   * does that is not a model call — the tools it reaches for, what came back,
   * the structured result the orchestrator actually reads — happens inside
   * this class and nowhere else.
   */
  trace?: Trace;
}

/**
 * A sub-agent's whole run is one exchange, and it is bounded by `maxTurns`
 * rather than by length. So `recent` is budgeted to hold all of it: cutting
 * inside an exchange drops the entry being diagnosed, and what survives is a
 * conversation the provider rejects.
 */
export const SUB_AGENT_CONTEXT = {
  // These four numbers only work together, and setting any of them by eye has
  // now produced the same dead mechanism three times.
  //
  // Eviction and compaction compete for the same job, and the cheap one always
  // wins: `recentBudget` bounds the transcript on every `addMessage`, and if it
  // holds the total under the compaction threshold then the ladder is
  // unreachable however large the window looks. Worse, eviction drops whole
  // messages, so it overshoots by up to one tool result — a run plateaus a
  // full turn's worth of lookups below its own budget, and the plateau does
  // not move when `recentBudget` is raised. It quantises.
  //
  // So the total is what was tuned, against a measured plateau rather than a
  // guess:
  //
  //   plateau    36,972   (three 6k tool results a turn, the real role prompt)
  //   threshold  (40,000 - 4,000) x 0.9 = 32,400
  //
  // A run therefore crosses into compaction around its third turn of lookups,
  // and level 1 — re-compressing tool output, no model call — settles it.
  maxTotalTokens: 40_000,
  recentBudget: 40_000,
  taskBudget: 4_000,
  toolResultBudget: 6_000,
  // A role's own instructions are not a window that fills up: they are fixed,
  // they are written deliberately, and truncating them drops whatever was put
  // last. The content prompt crossed the 2,000 default the day it gained a
  // section on what a fix costs, and what fell off the end was the block
  // telling a searching role not to promote an adjacent result into a norm —
  // silently, because truncation reports nothing.
  systemPromptBudget: 8_000,
} as const;

/**
 * One sub-agent run: its own system prompt, its own tool subset, its own
 * context, sharing only the Query Engine — and through it the rate limiter,
 * the cache and the budget.
 *
 * The loop is the point. A fixed set of rules is chosen before anything has
 * been read; an agent retrieves, reads what came back, and decides whether that
 * was the right question.
 *
 * How much the choosing is worth has not been shown. A comparison that once
 * stood here claimed it was worth a great deal and turned out to be measuring
 * something else; the reruns are in TODO.md, where a number can be corrected.
 * What the loop demonstrably buys is a second look when the first answer does
 * not fit, at the cost of a run that is no longer byte-identical between
 * invocations.
 */
export class SubAgentRuntime {
  /**
   * Read by the orchestrator, which records what it made of an agent that
   * threw. Public so the two cannot end up holding different traces: sharing
   * one object is the property, and a second constructor argument is a second
   * chance to mis-wire it.
   */
  readonly trace: Trace;

  constructor(private readonly deps: SubAgentDeps) {
    this.trace = deps.trace ?? new NoTrace();
  }

  /**
   * One span per agent, so everything the agent does lands under its name.
   *
   * The model calls inside are already recorded at the query engine, and that
   * is precisely the problem this solves: the engine sees every prompt in the
   * system and cannot say whose it is. Opened here, they arrive attributed —
   * and Deep Research, which runs through this same class from inside a
   * specialist's tool call, arrives nested under the specialist that asked.
   */
  async run(task: SubAgentTask): Promise<SubAgentResult> {
    return this.trace.span({ actor: this.actorFor(task.agentConfig.id) }, async () => {
      // What this agent was sent, rather than what it was told: the briefing
      // text is in the first model call's prompt already, recorded whole. What
      // is not anywhere else is which role was chosen, what it was allowed to
      // reach for, and how long it had.
      this.trace.event(() => ({
        phase: 'dispatch',
        purpose: task.agentConfig.name,
        input: {
          // The task and the context that actually crossed the boundary — the
          // second copy of what the first model call will also carry, and
          // worth it: building the context or resolving the tool list can
          // throw, and then there is no first model call and no record of what
          // this agent was ever asked to do.
          task: task.input,
          briefing: buildTaskBlock(task.agentConfig, task.context),
          role: task.agentConfig.id,
          tools: task.agentConfig.tools,
          optionalTools: task.agentConfig.optionalTools ?? [],
          contextKeys: Object.keys(task.context ?? {}),
          allowedContextKeys: task.agentConfig.contextBoundary,
          maxTurns: task.agentConfig.maxTurns,
          timeoutMs: task.agentConfig.timeoutMs,
        },
      }));

      const result = await this.execute(task);

      // The structured result, whole. This is the thing the orchestrator reads
      // and the report is built from; the model's raw answer above it is not
      // the same object once parsing and validation have had their say.
      this.trace.event(() => ({
        phase: result.success ? 'result' : 'failure',
        status: result.success ? 'success' : 'error',
        output: result,
        usage: result.usage,
        durationMs: result.durationMs,
        ...(result.error ? { error: { message: result.error } } : {}),
      }));

      return result;
    });
  }

  /**
   * Specialist, unless this one was started from inside another agent.
   *
   * Deep Research is the same class running under a specialist's tool call, so
   * the level is a fact about the caller rather than about the role.
   */
  private actorFor(id: string): TraceActor {
    const enclosing = this.trace.current()?.actor.kind;
    return {
      kind: enclosing === 'specialist' || enclosing === 'nested' ? 'nested' : 'specialist',
      id,
    };
  }

  private async execute(task: SubAgentTask): Promise<SubAgentResult> {
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
    let toldToAnswer = false;

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
      // An agent with no tools is in its final turn from the start: there is
      // nothing for it to do but answer.
      const finalTurn = turns === config.maxTurns;
      const mustAnswer = finalTurn || tools.length === 0;
      if (mustAnswer && !toldToAnswer) {
        toldToAnswer = true;
        // Two reasons, and they are not the same reason. The behavioural one is
        // above. The mechanical one is that `json_object` is refused unless the
        // word "json" appears in an input message — the system prompt does not
        // count — so a request asking for JSON with no message carrying the word
        // never reaches the model. Every role with a tool asks only on its last
        // turn, which always carries the nudge; a toolless one asks on turn one.
        context.addMessage({
          role: 'user',
          content: turns > 1 ? FINAL_TURN_NUDGE : ANSWER_NOW,
        });
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
        ...(mustAnswer ? { jsonMode: true } : {}),
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

        // The main loop has always done this; a sub-agent never did, so the
        // compaction ladder could not run on the one path that fills a window
        // — the fan-out, where a role makes several lookups and carries every
        // result forward. Once per turn, never in a loop: reaching level 3
        // means the fixed layers alone do not fit, and calling again cannot
        // help.
        await context.autoCompact(this.deps.queryEngine);
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
          compactions: context.getCompactions(),
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
          compactions: context.getCompactions(),
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
          compactions: context.getCompactions(),
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
        compactions: context.getCompactions(),
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
      compactions: context.getCompactions(),
      durationMs: Date.now() - started,
      error: `stopped after ${config.maxTurns} turns without a final answer`,
    };
  }

  /**
   * A tool call, on the record with both halves whole.
   *
   * The hook pipeline records the main loop's tool calls and keeps 200
   * characters of each; this is the inner layer, which it does not see at all
   * — deliberately, since a sub-agent is already inside a call the gate
   * approved. So this is the only place the arguments a specialist chose and
   * the result it read exist in full.
   *
   * Its own span, so that a tool which starts another agent — Deep Research
   * arrives this way — shows which call started it rather than leaving a
   * reader to infer it from what sits next to what.
   */
  private async callTool(
    call: { id: string; name: string; input: Record<string, unknown> },
    abortSignal: AbortSignal,
  ): Promise<string> {
    return this.trace.span({}, async () => {
      const started = Date.now();
      this.trace.event(() => ({
        phase: 'tool',
        tool: call.name,
        toolCallId: call.id,
        input: call.input,
      }));

      const answer = await this.runTool(call, abortSignal);

      this.trace.event(() => ({
        phase: answer.ok ? 'result' : 'failure',
        tool: call.name,
        toolCallId: call.id,
        output: answer.text,
        status: answer.ok ? 'success' : 'error',
        durationMs: Date.now() - started,
      }));

      return answer.text;
    });
  }

  private async runTool(
    call: { id: string; name: string; input: Record<string, unknown> },
    abortSignal: AbortSignal,
  ): Promise<{ text: string; ok: boolean }> {
    if (!this.deps.toolRegistry.has(call.name)) {
      return {
        text: JSON.stringify({ success: false, error: `no tool called ${call.name}` }),
        ok: false,
      };
    }

    try {
      const result = await this.deps.toolRegistry.resolve(call.name).execute(call.input as never, {
        session: this.deps.session,
        queryEngine: this.deps.queryEngine,
        knowledge: this.deps.knowledge,
        ...(this.deps.search ? { search: this.deps.search } : {}),
        // So a role can hand part of its job to a specialist it creates for
        // that one question. Safe because `run` takes no pool slot — see the
        // note on ToolContext.
        subAgents: this,
        trace: this.trace,
        abortSignal,
      });
      return { text: JSON.stringify(result), ok: result.success !== false };
    } catch (err) {
      // Handed back as a tool result rather than thrown: the agent can read the
      // failure and try a different question, which is the whole point of the loop.
      return {
        text: JSON.stringify({
          success: false,
          error: err instanceof Error ? err.message : String(err),
        }),
        ok: false,
      };
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

