import { MAIN_AGENT_PROMPT } from '../prompts/index.js';
import type { CommandParser } from '../command/types.js';
import { renderResume } from '../document/index.js';
import { grantPathsIn } from '../session/granted-paths.js';
import type { ContextManager } from '../context/types.js';
import type { ResumeSessionState } from '../domain.js';
import type { KnowledgeSearch } from '../knowledge/types.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { CheckpointManager, Session, SessionManager } from '../session/types.js';
import type { SearchProvider } from '../tools/search-provider.js';
import type { ToolRegistry, ToolResult } from '../tools/types.js';
import type { HookContext, HookPipeline } from '../hooks/types.js';
import { TOOL_START_TIME } from '../hooks/index.js';
import { NoTrace, type Trace } from '../trace/index.js';
import type { ToolCall } from '../types.js';
import type { Orchestrator } from './types.js';

export interface LoopDeps {
  commands: CommandParser;
  tools: ToolRegistry;
  hooks: HookPipeline;
  /**
   * Built per session rather than shared: a sub-agent runs tools against the
   * session it was started for, so one instance would attribute every call to
   * whichever session the process opened first.
   */
  orchestratorFor?: (session: Session) => Orchestrator;
  /** Absent when no search key is configured; `web_search` is unregistered too. */
  search?: SearchProvider;
  queryEngine: QueryEngine;
  knowledge: KnowledgeSearch;
  sessions: SessionManager;
  /**
   * Written after every exchange, and the reason a resumed session is a
   * continuation rather than a fresh start.
   *
   * `Session.state` survives on its own — the resume, the revisions, the
   * facts. The conversation does not: `SessionManager` builds a new context
   * manager whenever it loads a session, so without this the transcript is
   * gone and the agent picks up discussing a document it has never talked
   * about. Optional so a caller that only runs skills need not supply one.
   */
  checkpoints?: CheckpointManager;
  /** Where output goes. Injected so a test can read it and a CLI can colour it. */
  print: (text: string) => void;
  /**
   * Where a debug run records the turn.
   *
   * The outermost span in the system: it is what gives everything below —
   * every model call, every specialist, every nested researcher — a session
   * and a turn number to be read by. Without it a long conversation is one
   * undifferentiated stream of prompts.
   */
  trace?: Trace;
}

/**
 * A ceiling on tool-calling rounds in the free loop.
 *
 * The reference project writes `while (true)`. A model that keeps asking for
 * tools — because a tool keeps failing, or because it is stuck — then runs
 * until the budget is gone, and the budget is measured in dollars.
 */
const MAX_TURNS = 12;

/**
 * What the coordinator can reach. Everything that forms a judgement is absent.
 *
 * The registry holds the diagnostic tools for the specialists, who are handed
 * their own subset when they are dispatched. Names not registered on a given
 * path are filtered rather than resolved, because asking for one that is not
 * there throws.
 */
const MAIN_AGENT_TOOLS = [
  'parse_resume',
  'review_content',
  'review_wording',
  'review_narrative',
  'review_jd_match',
  'review_format',
  // Reads what the reviews left on the session and does the arithmetic over
  // them. Aggregating is not judging, and the one judgement inside it — what to
  // fix first — is a model call this tool makes, not one the coordinator makes.
  'generate_report',
  'record_fact',
  'apply_revision',
] as const;

/**
 * Two ways in.
 *
 * A command is unambiguous and costs nothing, so it never reaches the model.
 * Everything else is the coordinator's.
 *
 * A third used to sit between them: a registry of Skills, each a named sequence
 * of tool calls that ran without the model planning one. It held exactly one —
 * the batch diagnosis — and that turned out to be the thing the coordinator is
 * for. A layer with one member, bypassing the agent that was supposed to be the
 * only way in, was not paying for itself.
 */
export async function handleInput(
  input: string,
  session: Session,
  deps: LoopDeps,
): Promise<Session> {
  const trimmed = input.trim();
  if (!trimmed) return session;

  if (deps.commands.isCommand(trimmed)) {
    const result = await deps.commands.execute(trimmed, session);
    deps.print(result.output);
    // A command that starts a new session hands it back, and whoever called
    // has to keep it. `/new` clears the memory store and opens a fresh
    // session; carrying on with the old one afterwards means talking to a
    // session whose memory has just been emptied out from under it.
    return result.action === 'new_session' && result.data
      ? (result.data as Session)
      : session;
  }

  await runMainAgent(trimmed, session, deps);
  return session;
}

/**
 * The model plans, the tools run, the results come back.
 *
 * Every turn goes through the Context manager rather than an accumulating
 * array, so the window stays inside its budget however long the exchange runs.
 */
async function runMainAgent(input: string, session: Session, deps: LoopDeps): Promise<void> {
  const trace = deps.trace ?? new NoTrace();

  // The turn is the outermost span, and the only place a session id and a turn
  // number exist at all: the query engine knows neither, and a specialist knows
  // only what it was sent. Everything below inherits both from here.
  return trace.span(
    {
      actor: { kind: 'main', id: 'main-agent' },
      sessionId: session.id,
      turn: nextTurn(session),
    },
    async () => {
      // What the user actually typed. It reaches the model inside the window
      // below, but only if there is a window: this is the one record that
      // survives a turn that fell over while being assembled.
      trace.event(() => ({ phase: 'input', input: { message: input } }));
      await runTurn(input, session, deps, trace);
    },
  );
}

async function runTurn(
  input: string,
  session: Session,
  deps: LoopDeps,
  trace: Trace,
): Promise<void> {
  const context = session.contextManager;
  // Counted from the phase already recorded rather than from a field of its
  // own, so it survives a restart the same way the rest of the session does.
  let exchanges = exchangesSoFar(session);
  context.setSystemPrompt(MAIN_AGENT_PROMPT);
  setResumeContext(context, session);
  // Anything that looks like a path in what they just said is theirs to open.
  // Granted before the model gets a turn, so the model cannot grant its own.
  grantPathsIn(input, session);
  context.addMessage({ role: 'user', content: input });

  for (let turn = 0; turn < MAX_TURNS; turn++) {
    const window = context.build();
    const response = await deps.queryEngine.query({
      systemPrompt: window.systemPrompt,
      messages: window.messages,
      tools: deps.tools.getSchemasFor(MAIN_AGENT_TOOLS.filter((n) => deps.tools.has(n))),
      abortSignal: session.abortController.signal,
    });

    if (response.type === 'tool_use' && response.toolCalls?.length) {
      context.addMessage({
        role: 'assistant',
        content: response.content ?? '',
        toolCalls: response.toolCalls,
        ...(response.reasoning ? { reasoning: response.reasoning } : {}),
      });

      // Serially, not in parallel: a tool call the model issued alongside
      // another may depend on it, and it has no way to say so.
      for (const call of response.toolCalls) {
        const result = await runTool(call, session, deps, trace);
        context.addToolResult(call.id, JSON.stringify(result));
      }

      await context.autoCompact(deps.queryEngine);
      continue;
    }

    const answer = response.content?.trim();
    if (answer) {
      context.addMessage({ role: 'assistant', content: answer });
      deps.print(answer);
    }
    // A session that has held seven exchanges looked identical in `/history`
    // to one nobody ever typed into: the conversational path never touched
    // status or phase, and only the batch diagnosis did.
    //
    // `done` and `total` are left alone deliberately. They mean "entries
    // scored out of entries found", and a conversation has no total to count
    // against — worse, writing an exchange count there would leave
    // `shouldCheckpoint` comparing a later diagnosis's 2 against a
    // conversation's 7 and refusing to checkpoint the diagnosis at all.
    exchanges += 1;
    session.status = 'processing';
    session.progress = {
      ...session.progress,
      phase: `in conversation (${exchanges} exchange${exchanges === 1 ? '' : 's'})`,
    };

    deps.sessions.save(session);
    // Every exchange, not every few: the interval that suits a batch diagnosis
    // is measured in entries at risk, and what is at risk here is a
    // conversation somebody is in the middle of.
    deps.checkpoints?.create(session, context.getRecentMessages());
    return;
  }

  // Out of turns. Said plainly rather than silently returning nothing, because
  // from the outside a stuck loop and a finished one look identical.
  deps.print(`Stopped after ${MAX_TURNS} tool rounds without an answer. Try /status, or ask again more narrowly.`);
  deps.sessions.save(session);
}

/** Reads back what the last exchange recorded, so a resumed session keeps counting. */
/**
 * Turns counted for this process, so two of them never share a number.
 *
 * The session's own progress is the durable count and it only moves after an
 * answer: a turn whose model call threw, or that spent its whole allowance
 * calling tools, leaves it where it was, and the next thing the user says
 * would be filed under the number the failed turn already used. Which is the
 * pair of turns a reader most wants to tell apart.
 *
 * Seeded from the durable count, so a resumed session carries on numbering
 * rather than starting again at one.
 */
const turnsTaken = new WeakMap<Session, number>();

function nextTurn(session: Session): number {
  const turn = Math.max(exchangesSoFar(session) + 1, (turnsTaken.get(session) ?? 0) + 1);
  turnsTaken.set(session, turn);
  return turn;
}

function exchangesSoFar(session: Session): number {
  const match = /in conversation \((\d+) exchange/.exec(session.progress.phase);
  return match ? Number(match[1]) : 0;
}

/**
 * Keeps the resume resident, in the one layer eviction cannot reach.
 *
 * Nothing put it there before, so the document lived only in whatever messages
 * happened to still be in `recent` — and once a conversation ran past that
 * window the agent was discussing a resume it could no longer see, answering
 * from a running summary of its own earlier remarks about it. The task layer
 * exists for exactly this: the thing the current work is about, refreshed when
 * it changes and never summarised away underneath.
 */
function setResumeContext(context: ContextManager, session: Session): void {
  const state = session.state as ResumeSessionState;
  const resume = state.resume;
  if (!resume) return;

  // What the candidate has said sits beside what they wrote, and in the same
  // layer: a number given at message four is evicted from the transcript long
  // before the conversation is done with it, and asking for it a second time
  // is how a tool stops being worth talking to.
  const facts = (state.suppliedFacts ?? [])
    .map((f) => `- ${f.bulletId ?? f.entryId ?? 'general'}: ${f.fact}`)
    .join('\n');

  context.setTaskContext(
    // The same renderer every specialist reads from. There were three of these
    // — this one, the whole-document one, and the per-entry one — and the entry
    // ids added to the shared one never reached the coordinator, which was
    // still building its own.
    renderResume(resume) +
      (facts ? `\n\n<supplied_by_candidate>\n${facts}\n</supplied_by_candidate>` : ''),
  );
}

/**
 * One tool call, with governance around it.
 *
 * This lived in a `Dispatcher` class of its own, on the argument that the loop
 * should not have to know about permission, audit and compression. It is four
 * steps and it belongs to the turn it is part of — the thing that must stay
 * clear of governance is the agent's *context*, not the function that runs
 * beside it.
 *
 * Sub-agents deliberately do not come through here. One is already inside a
 * call this gate approved, and re-running permission, audit and memory writes
 * per inner call would multiply all three.
 */
async function runTool(
  call: ToolCall,
  session: Session,
  deps: LoopDeps,
  trace: Trace,
): Promise<ToolResult> {
  // Its own span, so a tool that dispatches specialists — which is how every
  // diagnosis starts — shows which call started them.
  return trace.span({}, async () => {
    const started = Date.now();
    // Copied, because a pre-tool hook rewrites the arguments in place: without
    // this the record of what the model asked for changes under it and reads
    // as though the model had asked for what the hook decided. Only when
    // something is listening — it is a copy per tool call otherwise.
    const issued = trace.enabled ? { ...call.input } : call.input;

    // As the model issued it. The audit hook keeps 200 characters of this and
    // says so in its own comment: the right amount for recognising a call
    // later, and not enough to see what the model actually asked for.
    trace.event(() => ({
      phase: 'tool',
      tool: call.name,
      toolCallId: call.id,
      input: issued,
    }));

    const ctx: HookContext = {
      toolCall: call,
      session,
      metadata: new Map<string, unknown>([[TOOL_START_TIME, Date.now()]]),
    };

    const pre = await deps.hooks.runPre(ctx);
    if (pre.action === 'block') {
      // A refusal is a decision about the run, not an absence. Without it the
      // file shows a model that asked for something and a turn that carried on
      // as though it never had.
      const refusal: ToolResult = {
        success: false,
        error: { code: 'permission_denied', message: pre.reason },
      };
      trace.event(() => ({
        phase: 'failure',
        tool: call.name,
        toolCallId: call.id,
        purpose: 'blocked before it ran',
        status: 'error',
        error: { message: pre.reason },
        // What the model is actually handed. It reads this and plans its next
        // turn from it, so a record of the refusal without it explains the
        // decision and not the conversation that follows.
        output: refusal,
        durationMs: Date.now() - started,
      }));
      return refusal;
    }

    // A pre-tool hook may rewrite the name or the arguments, and what runs is
    // what they approved rather than what the model asked for. Recorded only
    // when the two differ, because "nothing changed" is the ordinary case and
    // a second copy of every call would say it loudly.
    if (trace.enabled && JSON.stringify(issued) !== JSON.stringify(ctx.toolCall.input)) {
      trace.event(() => ({
        phase: 'decision',
        tool: ctx.toolCall.name,
        toolCallId: call.id,
        purpose: 'rewritten by a hook before it ran',
        input: ctx.toolCall.input,
      }));
    }

    // Read back off the context, because a pre-tool hook may have rewritten the
    // name or the arguments and the tool that runs must be the one they approved.
    ctx.result = await invoke(ctx.toolCall, session, deps);

    // Frozen before the post hooks run. A compression hook edits the result as
    // readily as it substitutes one, and what the tool itself produced must
    // not change in the record afterwards.
    const produced = trace.enabled ? JSON.stringify(ctx.result) : '';
    const succeeded = ctx.result.success;

    // Whole. This is the other half of the exchange the model then reasons
    // from, and a result cut at 200 characters cannot be checked against what
    // the model did with it.
    trace.event(() => ({
      phase: succeeded ? 'result' : 'failure',
      tool: ctx.toolCall.name,
      toolCallId: call.id,
      output: JSON.parse(produced) as ToolResult,
      status: succeeded ? 'success' : 'error',
      durationMs: Date.now() - started,
    }));

    const post = await deps.hooks.runPost(ctx);
    const result = post.action === 'modify_result' ? post.result : ctx.result;

    // Compared, not asked. The pipeline answers `modify_result` whenever a
    // result exists at all — every call, whether or not a hook touched it — so
    // taking that as the signal would mark every tool call in every real run
    // as rewritten, and a governance label that is always on says nothing.
    //
    // Only when it differs: a second copy of every unchanged result would
    // double the largest thing in the file to record that nothing happened.
    if (trace.enabled && JSON.stringify(result) !== produced) {
      trace.event(() => ({
        phase: 'decision',
        tool: ctx.toolCall.name,
        toolCallId: call.id,
        purpose: 'rewritten by a hook after it ran',
        // What the model was given instead. Both halves are here, so which
        // part a hook removed can be read off rather than guessed at.
        output: result,
        status: result.success ? 'success' : 'error',
      }));
    }

    return result;
  });
}

async function invoke(call: ToolCall, session: Session, deps: LoopDeps): Promise<ToolResult> {
  if (!deps.tools.has(call.name)) {
    // Handed back as a result rather than thrown, so the model can pick a real
    // tool on the next turn instead of the run ending here.
    return { success: false, error: { code: 'input_error', message: `no tool called ${call.name}` } };
  }

  try {
    return await deps.tools.resolve(call.name).execute(call.input as never, {
      session,
      queryEngine: deps.queryEngine,
      knowledge: deps.knowledge,
      ...(deps.search ? { search: deps.search } : {}),
      ...(deps.orchestratorFor ? { orchestrator: deps.orchestratorFor(session) } : {}),
      ...(deps.trace ? { trace: deps.trace } : {}),
      abortSignal: session.abortController.signal,
    });
  } catch (err) {
    return {
      success: false,
      error: { code: 'service_error', message: err instanceof Error ? err.message : String(err) },
    };
  }
}
