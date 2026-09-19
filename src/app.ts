import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

import { DefaultOrchestrator, SubAgentRuntime } from './agent/index.js';
import { handleInput, type LoopDeps } from './agent/loop.js';
import { createCommandParser } from './command/index.js';
import type { AppConfig } from './config.js';
import type { CandidateProfile } from './domain.js';
import {
  DefaultHookPipeline,
  MetricCollector,
  createAuditLogHook,
  createDispatchTraceHook,
  createBudgetCheckHook,
  createProfileHook,
  createWeakPointHook,
  createPermissionCheckHook,
  createProgressUpdateHook,
  createResultCompressHook,
} from './hooks/index.js';
import { DualChannelSearch, OpenAIEmbeddingProvider, SqliteKnowledgeStore } from './knowledge/index.js';
import { DefaultMemoryRetriever, MemoryTriggers, SqliteMemoryStore } from './memory/index.js';
import { DefaultPermissionGate, DenyAllConfirm, ReadlineConfirm, SqliteAuditLogger } from './permission/index.js';
import { QueryEngine } from './query-engine/engine.js';
import {
  DefaultSessionRestorer,
  SqliteCheckpointManager,
  SqliteSessionManager,
} from './session/index.js';
import type { Session } from './session/types.js';
import { createToolRegistry } from './tools/index.js';
import { TavilyProvider } from './tools/search-provider.js';

export interface AppOptions {
  config: AppConfig;
  /** False in a non-interactive run: confirmations refuse rather than block on stdin. */
  interactive?: boolean;
  print?: (text: string) => void;
}

/**
 * The composition root: the one place that knows how the ten layers fit.
 *
 * Nothing below this file constructs its own collaborators, which is what
 * makes every layer testable with a fake in place of the one beneath it. It is
 * also the only file that decides where data lives on disk — five databases,
 * kept apart because a rebuildable knowledge base and a disposable cache must
 * not be able to take a user's sessions or memory with them.
 */
export class App {
  readonly queryEngine: QueryEngine;
  readonly sessions: SqliteSessionManager;
  readonly memory: SqliteMemoryStore<CandidateProfile>;
  readonly metrics = new MetricCollector();
  readonly knowledge: DualChannelSearch;
  /** Undefined without a search key; both tool paths check before using it. */
  readonly search: TavilyProvider | undefined;
  readonly checkpoints: SqliteCheckpointManager;
  readonly triggers: MemoryTriggers;
  readonly hooks: DefaultHookPipeline;
  private readonly loopDeps: LoopDeps;
  private readonly retriever: DefaultMemoryRetriever;
  private readonly closers: Array<() => void> = [];

  constructor(private readonly options: AppOptions) {
    const { config } = options;
    const dir = config.dataDir;
    mkdirSync(dir, { recursive: true });

    this.queryEngine = new QueryEngine({ config, cachePath: join(dir, 'cache.db') });

    const knowledgeStore = new SqliteKnowledgeStore(join(dir, 'knowledge.db'));
    this.knowledge = new DualChannelSearch(
      knowledgeStore,
      // Without a key the semantic channel is simply absent: literal matching
      // still works, and pretending otherwise would fail on the first lookup.
      config.apiKeys.openai
        ? new OpenAIEmbeddingProvider(config.apiKeys.openai, config.models.embedding)
        : undefined,
    );
    this.closers.push(() => knowledgeStore.db.close());

    this.sessions = new SqliteSessionManager(join(dir, 'sessions.db'));
    const checkpoints = new SqliteCheckpointManager(this.sessions.db);
    this.checkpoints = checkpoints;
    const restorer = new DefaultSessionRestorer(this.sessions, checkpoints);
    this.closers.push(() => this.sessions.close());

    this.memory = new SqliteMemoryStore<CandidateProfile>(join(dir, 'memory.db'));
    // Offered by the store since it was written and never called, so every
    // memory the retriever ever wrote outlived its own expiry.
    this.memory.evictExpired();
    const triggers = new MemoryTriggers(this.memory);
    this.triggers = triggers;
    this.closers.push(() => this.memory.close());

    const audit = new SqliteAuditLogger(join(dir, 'audit.db'));
    this.closers.push(() => audit.close());
    const gate = new DefaultPermissionGate({
      audit,
      confirm: options.interactive === false ? new DenyAllConfirm() : new ReadlineConfirm(),
    });

    this.hooks = new DefaultHookPipeline();
    for (const hook of [
      createPermissionCheckHook(gate),
      createBudgetCheckHook(this.queryEngine),
      // Shares the loop's own sink, so a trace lands where the answer will.
      createDispatchTraceHook(options.print ?? ((text) => process.stdout.write(`${text}\n`))),
      createAuditLogHook(audit),
      createResultCompressHook(),
      createWeakPointHook(triggers),
      createProfileHook(triggers),
      createProgressUpdateHook(),
      this.metrics.createHook(),
    ]) {
      this.hooks.register(hook);
    }

    // No key, no provider, no tool. Web search is the one capability that is
    // optional rather than degraded: everything else runs identically without it.
    const search = config.apiKeys.tavily
      ? new TavilyProvider(config.apiKeys.tavily)
      : undefined;
    this.search = search;

    const tools = createToolRegistry({ ...(search ? { search } : {}), orchestrator: true });
    const commands = createCommandParser({
      sessions: this.sessions,
      restorer,
      hooks: this.hooks,
      engine: this.queryEngine,
      audit,
      gate,
      checkpoints,
      memory: this.memory,
      // The same tool the coordinator calls, so a path typed at the prompt and
      // a path mentioned in conversation are read by one piece of code.
      parseFile: (path, session) => this.parseFile(path, session),
    });

    this.loopDeps = {
      commands,
      tools,
      hooks: this.hooks,
      orchestratorFor: (session) => this.orchestratorFor(session),
      ...(search ? { search } : {}),
      queryEngine: this.queryEngine,
      knowledge: this.knowledge,
      sessions: this.sessions,
      checkpoints,
      print: options.print ?? ((text) => process.stdout.write(`${text}\n`)),
    };

    // Recall is injected at session start, which is what fills the Context's
    // profile layer — see the note in `MemoryRetriever`.
    this.retriever = new DefaultMemoryRetriever(this.memory);
  }

  /** Starts a session and primes its context with what memory knows. */
  /**
   * A session, with the file read if one was named.
   *
   * It used to record the path and stop, which left the banner saying `Loaded
   * resume.pdf` over a session holding no document — and every review tool
   * refusing, because `state.resume` was empty. Parsing is the same tool the
   * upload command runs.
   */
  async start(sourcePath: string): Promise<Session> {
    // Seeded from the loaded configuration, not from the session manager's
    // defaults. Otherwise `/config` reports a model and a budget that nothing
    // is using, which is worse than reporting none.
    const session = this.sessions.create(
      { sourcePath },
      {
        model: this.options.config.models.primary,
        maxCostUsd: this.options.config.maxCostUsd,
      },
    );
    const recalled = this.retriever.retrieveForDiagnosis();
    const profile = this.retriever.formatForContext(recalled);
    if (profile) session.contextManager.setProfile(profile);

    if (sourcePath) {
      const read = await this.parseFile(sourcePath, session);
      if (!read.success) {
        // Said out loud rather than left for the first review to discover.
        this.loopDeps.print(`Could not read ${sourcePath}: ${read.error ?? 'unknown'}`);
      } else {
        this.sessions.save(session);
      }
    }

    return session;
  }

  /**
   * One exchange, and the session to carry on with.
   *
   * Usually the one that was passed in. A command that opens a new session —
   * `/new`, or loading a different file over a finished diagnosis — returns
   * that one instead, and the caller has to keep it. The transition used to be
   * reported in `CommandResult.action` and read by nobody, so `/new` printed a
   * new session id and left the conversation attached to the old one.
   */
  /**
   * Reads a file onto a session, wherever the path came from.
   *
   * `/upload` calls it, a path in conversation reaches the same tool, and
   * starting with a file argument goes through here too — three doors, one
   * piece of code, so none of them can quietly diverge.
   */
  private async parseFile(
    path: string,
    session: Session,
  ): Promise<{ success: boolean; error?: string }> {
    const result = await this.loopDeps.tools.resolve('parse_resume').execute({ path } as never, {
      session,
      queryEngine: this.queryEngine,
      knowledge: this.knowledge,
      abortSignal: session.abortController.signal,
    });
    return result.success
      ? { success: true }
      : { success: false, error: result.error?.message ?? 'could not read the file' };
  }

  async handle(input: string, session: Session): Promise<Session> {
    return handleInput(input, session, this.loopDeps);
  }

  /**
   * One per session, on both paths.
   *
   * A sub-agent runs tools against the session it was started for, so a shared
   * instance would attribute every call to whichever session the process
   * opened first. Cheap enough to rebuild: it holds two semaphores and a
   * reference to the runtime.
   */
  private orchestratorFor(session: Session): DefaultOrchestrator {
    return new DefaultOrchestrator(
      new SubAgentRuntime({
        queryEngine: this.queryEngine,
        toolRegistry: this.loopDeps.tools,
        knowledge: this.knowledge,
        ...(this.search ? { search: this.search } : {}),
        session,
      }),
    );
  }

  close(): void {
    for (const close of this.closers) close();
  }
}
