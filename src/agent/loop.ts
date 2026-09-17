import { MAIN_AGENT_PROMPT } from '../prompts/index.js';
import type { CommandParser } from '../command/types.js';
import type { ContextManager } from '../context/types.js';
import type { ResumeSessionState } from '../domain.js';
import type { KnowledgeSearch } from '../knowledge/types.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { CheckpointManager, Session, SessionManager } from '../session/types.js';
import type { SearchProvider } from '../tools/search-provider.js';
import type { ToolRegistry, ToolResult } from '../tools/types.js';
import type { HookContext, HookPipeline } from '../hooks/types.js';
import { TOOL_START_TIME } from '../hooks/index.js';
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
export async function handleInput(input: string, session: Session, deps: LoopDeps): Promise<void> {
  const trimmed = input.trim();
  if (!trimmed) return;

  if (deps.commands.isCommand(trimmed)) {
    const result = await deps.commands.execute(trimmed, session);
    deps.print(result.output);
    return;
  }

  await runMainAgent(trimmed, session, deps);
}

/**
 * The model plans, the tools run, the results come back.
 *
 * Every turn goes through the Context manager rather than an accumulating
 * array, so the window stays inside its budget however long the exchange runs.
 */
async function runMainAgent(input: string, session: Session, deps: LoopDeps): Promise<void> {
  const context = session.contextManager;
  // Counted from the phase already recorded rather than from a field of its
  // own, so it survives a restart the same way the rest of the session does.
  let exchanges = exchangesSoFar(session);
  context.setSystemPrompt(MAIN_AGENT_PROMPT);
  setResumeContext(context, session);
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
        const result = await runTool(call, session, deps);
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

  const body = resume.sections
    .filter((section) => section.kind !== 'contact')
    .map((section) => {
      const entries = section.entries
        .map((entry) => {
          const bullets = entry.bullets.map((b) => `  - [${b.id}] ${b.text}`).join('\n');
          return `${entry.headerLines.join(' | ')}\n${bullets}`;
        })
        .join('\n\n');
      const loose = section.looseLines.join('\n');
      return `# ${section.heading.trim() || section.kind.toUpperCase()}\n${entries}${loose ? `\n${loose}` : ''}`;
    })
    .join('\n\n');

  // What the candidate has said sits beside what they wrote, and in the same
  // layer: a number given at message four is evicted from the transcript long
  // before the conversation is done with it, and asking for it a second time
  // is how a tool stops being worth talking to.
  const facts = (state.suppliedFacts ?? [])
    .map((f) => `- ${f.bulletId ?? f.entryId ?? 'general'}: ${f.fact}`)
    .join('\n');

  context.setTaskContext(
    `<resume_content>\n${body}\n</resume_content>` +
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
async function runTool(call: ToolCall, session: Session, deps: LoopDeps): Promise<ToolResult> {
  const ctx: HookContext = {
    toolCall: call,
    session,
    metadata: new Map<string, unknown>([[TOOL_START_TIME, Date.now()]]),
  };

  const pre = await deps.hooks.runPre(ctx);
  if (pre.action === 'block') {
    return { success: false, error: { code: 'permission_denied', message: pre.reason } };
  }

  // Read back off the context, because a pre-tool hook may have rewritten the
  // name or the arguments and the tool that runs must be the one they approved.
  ctx.result = await invoke(ctx.toolCall, session, deps);

  const post = await deps.hooks.runPost(ctx);
  return post.action === 'modify_result' ? post.result : ctx.result;
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
      abortSignal: session.abortController.signal,
    });
  } catch (err) {
    return {
      success: false,
      error: { code: 'service_error', message: err instanceof Error ? err.message : String(err) },
    };
  }
}
