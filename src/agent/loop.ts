import { MAIN_AGENT_PROMPT } from '../prompts/index.js';
import type { CommandParser } from '../command/types.js';
import type { ContextManager } from '../context/types.js';
import type { ResumeSessionState } from '../domain.js';
import type { KnowledgeSearch } from '../knowledge/types.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { CheckpointManager, Session, SessionManager } from '../session/types.js';
import type { SkillContext, SkillRegistry } from '../skills/types.js';
import type { ToolRegistry } from '../tools/types.js';
import type { Dispatcher } from './dispatcher.js';

export interface LoopDeps {
  commands: CommandParser;
  skills: SkillRegistry;
  tools: ToolRegistry;
  dispatcher: Dispatcher;
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
  'review_content',
  'review_wording',
  'review_narrative',
  'review_jd_match',
  'review_format',
  'record_fact',
  'apply_revision',
] as const;

/**
 * Three ways in, tried in order.
 *
 * A command is unambiguous and costs nothing, so it never reaches the model.
 * A matched Skill is a known sequence, so it does not pay for the model to
 * plan one. Only what neither covers goes to the free loop, where the model
 * chooses its own tools — the expensive, flexible path.
 */
export async function handleInput(input: string, session: Session, deps: LoopDeps): Promise<void> {
  const trimmed = input.trim();
  if (!trimmed) return;

  if (deps.commands.isCommand(trimmed)) {
    const result = await deps.commands.execute(trimmed, session);
    deps.print(result.output);
    return;
  }

  const skill = session.config.preferSkills ? deps.skills.find(trimmed) : null;
  if (skill) {
    const output = await skill.execute({ rawInput: trimmed }, skillContext(session, deps));
    deps.print(output.report ?? output.error ?? 'done');
    return;
  }

  await freeLoop(trimmed, session, deps);
}

/**
 * The model plans, the dispatcher executes, the results come back.
 *
 * Every turn goes through the Context manager rather than an accumulating
 * array, so the window stays inside its budget however long the exchange runs.
 */
async function freeLoop(input: string, session: Session, deps: LoopDeps): Promise<void> {
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
        const result = await deps.dispatcher.execute(call, session);
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

export function skillContext(session: Session, deps: LoopDeps): SkillContext {
  return {
    session,
    toolRegistry: deps.tools,
    queryEngine: deps.queryEngine,
    knowledge: deps.knowledge,
  } as SkillContext;
}
