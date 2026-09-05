import type { AppConfig, ProviderName } from '../config.js';
import { QueryCache } from './cache.js';
import { ClaudeProvider } from './providers/claude.js';
import { DeepSeekProvider, OpenAIProvider } from './providers/openai.js';
import { TokenBucketLimiter, type RateLimiter } from './rate-limiter.js';
import { DEFAULT_RETRY_CONFIG, withRetry } from './retry.js';
import { ModelRouter } from './router.js';
import { parseStream } from './stream.js';
import { TokenCounter } from './token-counter.js';
import {
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
  }

  async query(params: QueryParams): Promise<ParsedResponse> {
    // Checked first so an exhausted budget costs nothing further, not even a
    // cache lookup's worth of work.
    const budget = this.tokenCounter.checkBudget();
    if (!budget.ok) {
      throw new QueryEngineError(`Budget exhausted: ${budget.reason}`, 'budget', false);
    }

    const route = this.router.resolve(params.task, params.model);
    // An explicit effort from the caller wins over the route's default.
    const effort = params.effort ?? route.effort;
    const streamParams: StreamParams = {
      model: route.model,
      messages: params.messages,
      ...(params.systemPrompt ? { systemPrompt: params.systemPrompt } : {}),
      ...(params.tools?.length ? { tools: params.tools } : {}),
      ...(params.maxTokens ? { maxTokens: params.maxTokens } : {}),
      ...(effort ? { effort } : {}),
      ...(params.cacheSystemPrompt !== undefined
        ? { cacheSystemPrompt: params.cacheSystemPrompt }
        : {}),
      ...(params.abortSignal ? { abortSignal: params.abortSignal } : {}),
    };

    const cacheKey = params.useCache === false ? null : this.cache.generateKey(streamParams);
    if (cacheKey) {
      const hit = this.cache.get(cacheKey);
      if (hit) {
        // Replay in one go so a cached answer renders like a fresh one, and
        // charge nothing — no request was made.
        if (hit.content) params.onTextDelta?.(hit.content);
        return hit;
      }
    }

    const provider = this.providerFor(route.provider);

    const response = await withRetry(
      async () => {
        // Inside the retry body: every attempt is a real request and must be
        // paced like one, or a retry storm walks straight past the limiter.
        await this.limiter.acquire(params.abortSignal);
        return parseStream(provider.stream(streamParams), params.onTextDelta);
      },
      this.retryConfig,
      params.onRetry ? { onAttempt: params.onRetry } : {},
    );

    this.tokenCounter.record(response.usage, route.model);

    // Tool calls are decisions, not answers: replaying one from cache would
    // re-issue a side effect the model only meant to request once.
    if (cacheKey && response.type === 'text') {
      this.cache.set(cacheKey, response, params.cacheTtlSeconds ?? this.defaultCacheTtl);
    }

    return response;
  }

  async countTokens(params: Pick<QueryParams, 'task' | 'model' | 'messages' | 'tools'>): Promise<number> {
    const route = this.router.resolve(params.task, params.model);
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
  private providerFor(name: ProviderName): LLMProvider {
    const existing = this.providers.get(name);
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
        created = new OpenAIProvider(requireKey(apiKeys.openai, 'OPENAI_API_KEY'));
        break;
      case 'deepseek':
        created = new DeepSeekProvider(requireKey(apiKeys.deepseek, 'DEEPSEEK_API_KEY'));
        break;
    }

    this.providers.set(name, created);
    return created;
  }
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
