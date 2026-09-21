import { resolveModel, type AppConfig, type ProviderName } from '../config.js';
import { NoTrace, type Trace } from '../trace/index.js';
import type { Message } from '../types.js';
import { QueryCache } from './cache.js';
import { ClaudeProvider } from './providers/claude.js';
import { DeepSeekProvider, OpenAIProvider } from './providers/openai.js';
import { OpenAIResponsesProvider } from './providers/responses.js';
import { TokenBucketLimiter, type RateLimiter } from './rate-limiter.js';
import { DEFAULT_RETRY_CONFIG, withRetry } from './retry.js';
import { ModelRouter } from './router.js';
import { parseStream } from './stream.js';
import { TokenCounter } from './token-counter.js';
import { type Effort,
  QueryEngineError,
  type LLMProvider,
  type ParsedResponse,
  type QueryEngine as QueryEngineContract,
  type QueryParams,
  type RetryConfig,
  type RouteRule,
  type StreamParams,
} from './types.js';

export interface QueryEngineOptions {
  config: AppConfig;
  /**
   * Where a debug run records what was asked and what came back.
   *
   * Absent in production, and absent is the default: the no-op costs an empty
   * method call. Attached here rather than at each caller because this is the
   * one place every model call in the system passes through — the main agent,
   * every specialist, Deep Research, the report writer. Instrumenting the
   * callers instead would be eight places to keep in step and one of them
   * always missed.
   */
  trace?: Trace;
  cachePath?: string;
  /** Requests that may burst before pacing kicks in. */
  rateCapacity?: number;
  rateRefillPerSecond?: number;
  retry?: RetryConfig;
  routes?: RouteRule[];
  defaultCacheTtlSeconds?: number;
}

/**
 * The reliability boundary.
 *
 * Everything above this class calls `query()` and gets an answer or a
 * classified failure. Provider differences, transient errors, pacing, spend and
 * model choice all stop here — which is the point: if this layer is not solid,
 * nothing built on top of it can be.
 */
export class QueryEngine implements QueryEngineContract {
  private readonly providers = new Map<ProviderName, LLMProvider>();
  private readonly cache: QueryCache;
  private readonly limiter: RateLimiter;
  private readonly router: ModelRouter;
  private readonly tokenCounter: TokenCounter;
  private readonly retryConfig: RetryConfig;
  private readonly defaultCacheTtl: number;
  private readonly trace: Trace;

  constructor(private readonly options: QueryEngineOptions) {
    const { config } = options;

    this.cache = new QueryCache(options.cachePath ?? `${config.dataDir}/cache.db`);
    this.limiter = new TokenBucketLimiter(
      options.rateCapacity ?? 4,
      options.rateRefillPerSecond ?? 2,
    );
    this.router = new ModelRouter(config, options.routes ?? []);
    this.tokenCounter = new TokenCounter({ maxTotalCostUsd: config.maxCostUsd });
    this.retryConfig = options.retry ?? DEFAULT_RETRY_CONFIG;
    this.defaultCacheTtl = options.defaultCacheTtlSeconds ?? 3_600;
    this.trace = options.trace ?? new NoTrace();
  }

  async query(params: QueryParams): Promise<ParsedResponse> {
    // Checked first so an exhausted budget costs nothing further, not even a
    // cache lookup's worth of work.
    const budget = this.tokenCounter.checkBudget();
    if (!budget.ok) {
      throw new QueryEngineError(`Budget exhausted: ${budget.reason}`, 'budget', false);
    }

    const route = this.router.resolve(params.task, params.model);
    const spec = resolveModel(route.model);
    // An explicit effort from the caller wins over the route's default.
    const effort = params.effort ?? route.effort;
    const streamParams: StreamParams = {
      model: route.model,
      messages: params.messages,
      ...(params.systemPrompt ? { systemPrompt: params.systemPrompt } : {}),
      ...(params.tools?.length ? { tools: params.tools } : {}),
      ...(params.maxTokens ? { maxTokens: params.maxTokens } : {}),
      ...(params.jsonMode ? { jsonMode: true } : {}),
      ...(effort ? { effort } : {}),
      // Model-shaped differences, not provider-shaped: which token-cap name to
      // send, and whether the model takes a reasoning setting at all.
      ...(spec.usesMaxCompletionTokens ? { usesMaxCompletionTokens: true } : {}),
      ...(spec.reasoningEffort ? { reasoningEffort: toReasoningEffort(effort) } : {}),
      ...(params.cacheSystemPrompt !== undefined
        ? { cacheSystemPrompt: params.cacheSystemPrompt }
        : {}),
      ...(params.abortSignal ? { abortSignal: params.abortSignal } : {}),
    };

    const started = Date.now();
    const asked = {
      task: params.task,
      model: route.model,
      provider: route.provider,
      systemPrompt: streamParams.systemPrompt,
      messages: forTrace(streamParams.messages),
      tools: streamParams.tools?.map((tool) => tool.name),
      effort,
      jsonMode: streamParams.jsonMode === true,
    };

    const cacheKey = params.useCache === false ? null : this.cache.generateKey(streamParams);
    if (cacheKey) {
      const hit = this.cache.get(cacheKey);
      if (hit) {
        // Replay in one go so a cached answer renders like a fresh one, and
        // charge nothing — no request was made.
        if (hit.content) params.onTextDelta?.(hit.content);
        // Recorded all the same. A run that answered from cache and one that
        // asked look identical in a conversation and are different runs, and a
        // reader asking why two identical questions cost different amounts has
        // nowhere else to find out.
        this.trace.event({
          phase: 'result',
          model: route.model,
          provider: route.provider,
          input: asked,
          output: answerFor(hit),
          success: true,
          cached: true,
          durationMs: Date.now() - started,
          usage: hit.usage,
        });
        return hit;
      }
    }

    const provider = this.providerFor(route.provider, spec.responsesApi === true);

    let attempts = 0;
    let response;
    try {
      response = await withRetry(
        async () => {
          // Inside the retry body: every attempt is a real request and must be
          // paced like one, or a retry storm walks straight past the limiter.
          attempts += 1;
          await this.limiter.acquire(params.abortSignal);
          return parseStream(provider.stream(streamParams), params.onTextDelta);
        },
        this.retryConfig,
        params.onRetry ? { onAttempt: params.onRetry } : {},
      );
    } catch (err) {
      // A failure is the more interesting half. What was asked is on the
      // record even when nothing came back, which is the case a reader is
      // most often trying to explain.
      this.trace.event({
        phase: 'failure',
        model: route.model,
        provider: route.provider,
        input: asked,
        success: false,
        error: err instanceof Error ? err.message : String(err),
        durationMs: Date.now() - started,
        attempts,
      });
      throw err;
    }

    this.trace.event({
      phase: 'result',
      model: route.model,
      provider: route.provider,
      input: asked,
      output: answerFor(response),
      success: true,
      durationMs: Date.now() - started,
      usage: response.usage,
      ...(attempts > 1 ? { attempts } : {}),
    });

    this.tokenCounter.record(response.usage, route.model);

    // Tool calls are decisions, not answers: replaying one from cache would
    // re-issue a side effect the model only meant to request once.
    //
    // A response cut off at the token cap is not an answer either, and caching
    // one is worse than not caching it: a single truncated run then serves
    // every later identical call from a poisoned entry. Same rule that keeps
    // an aborted stream out.
    if (cacheKey && response.type === 'text' && response.stopReason !== 'max_tokens') {
      this.cache.set(cacheKey, response, params.cacheTtlSeconds ?? this.defaultCacheTtl);
    }

    return response;
  }

  async countTokens(params: Pick<QueryParams, 'task' | 'model' | 'messages' | 'tools'>): Promise<number> {
    const route = this.router.resolve(params.task, params.model);
    const spec = resolveModel(route.model);
    return this.providerFor(route.provider).countTokens(params.messages, params.tools);
  }

  checkBudget(): { ok: boolean; reason?: string } {
    return this.tokenCounter.checkBudget();
  }

  getUsageSummary(): string {
    const cache = this.cache.getStats();
    const hitRate = cache.hits + cache.misses > 0
      ? Math.round((cache.hits / (cache.hits + cache.misses)) * 100)
      : 0;
    return `${this.tokenCounter.getSummary()} · cache ${hitRate}% hit (${cache.hits}/${cache.hits + cache.misses})`;
  }

  getRoutes(): RouteRule[] {
    return this.router.list();
  }

  close(): void {
    this.cache.close();
  }

  /**
   * Providers are built on first use, so a session that never touches DeepSeek
   * does not need a DeepSeek key to start.
   */
  private providerFor(name: ProviderName, responsesApi = false): LLMProvider {
    // Keyed by endpoint too: one OpenAI key can be behind both adapters, and
    // they speak different protocols.
    const key = responsesApi ? `${name}:responses` : name;
    const existing = this.providers.get(key as ProviderName);
    if (existing) return existing;

    const { apiKeys } = this.options.config;
    let created: LLMProvider;

    switch (name) {
      case 'claude':
        // Undefined is fine: the SDK falls back to ANTHROPIC_API_KEY or a
        // logged-in profile on its own.
        created = new ClaudeProvider(apiKeys.anthropic);
        break;
      case 'openai':
        created = responsesApi
          ? new OpenAIResponsesProvider(requireKey(apiKeys.openai, 'OPENAI_API_KEY'))
          : new OpenAIProvider(requireKey(apiKeys.openai, 'OPENAI_API_KEY'));
        break;
      case 'deepseek':
        created = new DeepSeekProvider(requireKey(apiKeys.deepseek, 'DEEPSEEK_API_KEY'));
        break;
    }

    this.providers.set(key as ProviderName, created);
    return created;
  }
}

/**
 * Our five levels map onto the three the API takes.
 *
 * `none` is not reachable from here: it is what the chat endpoint demands
 * before it will accept tools, and this provider exists so that trade does not
 * have to be made.
 */
function toReasoningEffort(effort: Effort | undefined): 'low' | 'medium' | 'high' {
  if (effort === 'low') return 'low';
  if (effort === 'medium') return 'medium';
  return 'high';
}

function requireKey(key: string | undefined, envName: string): string {
  if (!key) {
    throw new QueryEngineError(
      `${envName} is not set, but a task routed to this provider. Set it in .env or route the task elsewhere.`,
      'auth',
      false,
    );
  }
  return key;
}

/**
 * The messages as they were sent, minus the model's own working.
 *
 * Reasoning is carried between turns because some models refuse to continue an
 * exchange without it, and it is the one thing a trace deliberately does not
 * keep: it is the longest field by far, it is not what the model answered, and
 * a record of what an agent *said* is what a reviewer can hold it to. Dropped
 * here, where the type that carries it is still in view.
 */
function forTrace(messages: readonly Message[]): Array<Omit<Message, 'reasoning'>> {
  return messages.map(({ reasoning: _reasoning, ...rest }) => rest);
}

/** What came back, on the same terms. */
function answerFor(response: ParsedResponse): Omit<ParsedResponse, 'reasoning'> {
  const { reasoning: _reasoning, ...rest } = response;
  return rest;
}
