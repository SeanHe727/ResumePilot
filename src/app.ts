import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

import { DefaultOrchestrator, DefaultRoleSelector, SubAgentRuntime } from './agent/index.js';
import { Dispatcher } from './agent/dispatcher.js';
import { handleInput, type LoopDeps } from './agent/loop.js';
import { createCommandParser } from './command/index.js';
import type { AppConfig } from './config.js';
import type { CandidateProfile } from './domain.js';
import {
  DefaultHookPipeline,
  MetricCollector,
  createAuditLogHook,
  createBudgetCheckHook,
  createMemoryTriggerHook,
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
import { createSkillRegistry } from './skills/index.js';
import type { SkillContext, SkillOutput } from './skills/types.js';
import { createToolRegistry } from './tools/index.js';

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
  readonly hooks: DefaultHookPipeline;
  private readonly loopDeps: LoopDeps;
  private readonly retriever: DefaultMemoryRetriever;
  private readonly roleSelector = new DefaultRoleSelector();
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
    const restorer = new DefaultSessionRestorer(this.sessions, checkpoints);
    this.closers.push(() => this.sessions.close());

    this.memory = new SqliteMemoryStore<CandidateProfile>(join(dir, 'memory.db'));
    const triggers = new MemoryTriggers(this.memory);
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
      createAuditLogHook(audit),
      createResultCompressHook(),
      createMemoryTriggerHook(triggers),
      createProgressUpdateHook(),
      this.metrics.createHook(),
    ]) {
      this.hooks.register(hook);
    }

    const tools = createToolRegistry();
    const skills = createSkillRegistry();
    const dispatcher = new Dispatcher({
      registry: tools,
      hooks: this.hooks,
      queryEngine: this.queryEngine,
      knowledge: this.knowledge,
    });

    const commands = createCommandParser({
      sessions: this.sessions,
      restorer,
      hooks: this.hooks,
      engine: this.queryEngine,
      runSkill: (name, input, sessionId) => this.runSkill(name, input, sessionId),
    });

    this.loopDeps = {
      commands,
      skills,
      tools,
      dispatcher,
      queryEngine: this.queryEngine,
      knowledge: this.knowledge,
      sessions: this.sessions,
      print: options.print ?? ((text) => process.stdout.write(`${text}\n`)),
    };

    // Recall is injected at session start, which is what fills the Context's
    // profile layer — see the note in `MemoryRetriever`.
    this.retriever = new DefaultMemoryRetriever(this.memory);
  }

  /** Starts a session and primes its context with what memory knows. */
  start(sourcePath: string): Session {
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

    return session;
  }

  async handle(input: string, session: Session): Promise<void> {
    return handleInput(input, session, this.loopDeps);
  }

  async runSkill(
    name: string,
    input: { rawInput: string; parsedArgs?: Record<string, unknown> },
    sessionId: string,
  ): Promise<SkillOutput> {
    const session = this.sessions.get(sessionId);
    if (!session) return { success: false, error: `session ${sessionId} not found` };

    const runtime = new SubAgentRuntime({
      queryEngine: this.queryEngine,
      toolRegistry: this.loopDeps.tools,
      knowledge: this.knowledge,
      session,
    });

    const ctx: SkillContext = {
      session,
      toolRegistry: this.loopDeps.tools,
      queryEngine: this.queryEngine,
      knowledge: this.knowledge,
      hooks: this.hooks,
      // Built per session: a sub-agent runs tools against the session it was
      // started for, so one shared instance would attribute them all to the
      // first session the process ever opened.
      orchestrator: new DefaultOrchestrator(runtime),
      roleSelector: this.roleSelector,
    };

    return this.loopDeps.skills.resolve(name).execute(input, ctx);
  }

  close(): void {
    for (const close of this.closers) close();
  }
}
