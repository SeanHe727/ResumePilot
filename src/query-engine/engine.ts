import { resolveModel, type AppConfig, type ProviderName } from '../config.js';
import {
  NoTrace,
  type Trace,
  type TraceError,
  type TraceRequest,
  type TraceStage,
  type TraceStatus,
} from '../trace/index.js';
import type { Message } from '../types.js';
import { QueryCache } from './cache.js';
import { classifyError } from './errors.js';
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
    // One span per call, so the tries inside it have a parent to hang from and
    // a reader sees `input`, the attempts and the outcome as one exchange
    // rather than four unrelated lines. Switched off this is the closure and
    // nothing else.
    return this.trace.span({}, () => this.runQuery(params));
  }

  private async runQuery(params: QueryParams): Promise<ParsedResponse> {
    const started = Date.now();

    // Checked first so an exhausted budget costs nothing further, not even a
    // cache lookup's worth of work.
    const budget = this.tokenCounter.checkBudget();
    if (!budget.ok) {
      const refusal = new QueryEngineError(`Budget exhausted: ${budget.reason}`, 'budget', false);
      // Recorded with what it was about to ask. A ceiling hit halfway through a
      // fan-out looks, from the conversation, exactly like a specialist that
      // chose to say nothing.
      this.refused('budget', refusal, started, { params });
      throw refusal;
    }

    let route;
    let spec;
    let effort;
    let streamParams: StreamParams;
    try {
      route = this.router.resolve(params.task, params.model);
      spec = resolveModel(route.model);
      // An explicit effort from the caller wins over the route's default.
      effort = params.effort ?? route.effort;
      streamParams = {
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
        // One key per kind of request: the same role sends the same system
        // prompt and tools every time, which is the part worth caching.
        promptCacheKey: `resumepilot:${params.task ?? 'main'}`,
      };
    } catch (err) {
      // An unroutable task or an unknown model. No request was made, and a
      // record that only said "failed" would send a reader looking at the
      // provider for something that never reached it.
      this.refused('routing', err, started, { params });
      throw err;
    }

    const resolved: Resolved = {
      model: route.model,
      provider: route.provider,
      ...(effort !== undefined ? { effort } : {}),
    };
    // The request, once. What follows — every attempt, the outcome — hangs off
    // this span and names none of it again.
    this.trace.event(() => ({
      phase: 'input',
      stage: 'request',
      model: route.model,
      provider: route.provider,
      input: requested(params, resolved),
    }));

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
        // nowhere else to find out. No attempt: nothing was tried.
        this.trace.event(() => ({
          phase: 'result',
          stage: 'request',
          model: route.model,
          provider: route.provider,
          output: answerFor(hit),
          status: 'success',
          cached: true,
          attempts: 0,
          durationMs: Date.now() - started,
          usage: hit.usage,
        }));
        return hit;
      }
    }

    let provider;
    try {
      provider = this.providerFor(route.provider, spec.responsesApi === true);
    } catch (err) {
      // A missing key for a provider this task routes to. Distinct from a
      // refusal by that provider, which is a fact about the service.
      this.refused('provider-init', err, started, { resolved });
      throw err;
    }

    let attempts = 0;
    // Kept only while something is listening: a list nobody reads is a list
    // every production call pays to build.
    const earlier: TraceError[] = [];
    let response;
    try {
      response = await withRetry(
        async () => {
          // Inside the retry body: every attempt is a real request and must be
          // paced like one, or a retry storm walks straight past the limiter.
          attempts += 1;
          const attempt = attempts;
          const tried = Date.now();
          try {
            await this.limiter.acquire(params.abortSignal);
            const answer = await parseStream(provider.stream(streamParams), params.onTextDelta);
            this.trace.event(() => ({
              phase: 'attempt',
              stage: 'request',
              model: route.model,
              provider: route.provider,
              attempt,
              status: 'success',
              durationMs: Date.now() - tried,
            }));
            return answer;
          } catch (err) {
            // Per attempt, not per call. Three tries that each failed
            // differently — a rate limit, a dropped socket, a refusal — are
            // three findings, and a single summary line keeps one of them.
            const failure = outcomeOf(err, params.abortSignal);
            if (this.trace.enabled) earlier.push(failure.error);
            this.trace.event(() => ({
              phase: 'attempt',
              stage: 'request',
              model: route.model,
              provider: route.provider,
              attempt,
              status: failure.status,
              error: failure.error,
              durationMs: Date.now() - tried,
            }));
            throw err;
          }
        },
        this.retryConfig,
        params.onRetry ? { onAttempt: params.onRetry } : {},
      );
    } catch (err) {
      // The summary of a call that ended with nothing. What was asked is on
      // the record above it, which is the case a reader is most often trying
      // to explain.
      const failure = outcomeOf(err, params.abortSignal);
      this.trace.event(() => ({
        phase: 'failure',
        stage: 'request',
        model: route.model,
        provider: route.provider,
        status: failure.status,
        error: failure.error,
        durationMs: Date.now() - started,
        attempts,
        ...(earlier.length > 1 ? { priorErrors: earlier.slice(0, -1) } : {}),
      }));
      throw err;
    }

    this.trace.event(() => ({
      phase: 'result',
      stage: 'request',
      model: route.model,
      provider: route.provider,
      output: answerFor(response),
      status: 'success',
      durationMs: Date.now() - started,
      usage: response.usage,
      attempts,
      // An answer that took three tries is a different fact about the run than
      // an answer that took one, and the two look the same once only the
      // outcome is kept.
      ...(earlier.length > 0 ? { priorErrors: earlier } : {}),
    }));

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

  /**
   * A failure that happened before anything was sent.
   *
   * `stage` is the whole point of it: a budget ceiling, an unroutable task, a
   * missing key and a provider that refused all arrive as one exception, and
   * they are four different findings about a run.
   */
  private refused(
    stage: TraceStage,
    err: unknown,
    started: number,
    detail: { params?: QueryParams; resolved?: Resolved },
  ): void {
    this.trace.event(() => ({
      phase: 'failure',
      stage,
      status: outcomeOf(err).status,
      error: outcomeOf(err).error,
      durationMs: Date.now() - started,
      attempts: 0,
      ...(detail.resolved
        ? { model: detail.resolved.model, provider: detail.resolved.provider }
        : {}),
      // Only where the request has not been recorded yet. Past that point it
      // is on the span already, and a second copy of a prompt is the one thing
      // this file is careful not to write.
      ...(detail.params ? { input: requested(detail.params, detail.resolved) } : {}),
    }));
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

/** What the router settled on, once it has settled on it. */
interface Resolved {
  model: string;
  provider: ProviderName;
  effort?: Effort;
}

/**
 * The request as the model saw it, in our vocabulary rather than a provider's.
 *
 * The tool definitions go in whole. They were names until a review asked what
 * the model had actually been offered: a model choosing badly among good tools
 * and a model offered a badly-described one are the same line in a record that
 * kept only the names, and they call for opposite fixes.
 *
 * What does not go in is the SDK's own request object — it carries the key, the
 * callbacks and the abort signal — nor anything the caller passed for the
 * stream's benefit rather than the model's.
 */
function requested(params: QueryParams, resolved?: Resolved): TraceRequest {
  const effort = resolved?.effort ?? params.effort;
  const model = resolved?.model ?? params.model;

  return {
    ...(params.task !== undefined ? { task: params.task } : {}),
    ...(model !== undefined ? { model } : {}),
    ...(resolved !== undefined ? { provider: resolved.provider } : {}),
    ...(params.systemPrompt !== undefined ? { systemPrompt: params.systemPrompt } : {}),
    messages: forTrace(params.messages),
    ...(params.tools?.length ? { tools: params.tools } : {}),
    ...(params.maxTokens !== undefined ? { maxTokens: params.maxTokens } : {}),
    jsonMode: params.jsonMode === true,
    ...(effort !== undefined ? { effort } : {}),
    // Whether the answer was allowed to come from cache, which is why two runs
    // of the same conversation can cost different amounts.
    useCache: params.useCache !== false,
    ...(params.cacheTtlSeconds !== undefined ? { cacheTtlSeconds: params.cacheTtlSeconds } : {}),
    ...(params.cacheSystemPrompt !== undefined
      ? { cacheSystemPrompt: params.cacheSystemPrompt }
      : {}),
  };
}

/**
 * What went wrong, and whether it counts as going wrong.
 *
 * A run the user stopped is not a failure of the system, and counting it as one
 * would put every interrupted session in the same column as the refusals.
 */
function outcomeOf(
  err: unknown,
  signal?: AbortSignal,
): { status: TraceStatus; error: TraceError } {
  const classified = classifyError(err);
  const cancelled =
    signal?.aborted === true || (err instanceof Error && err.name === 'AbortError');

  return {
    status: cancelled ? 'cancelled' : 'error',
    error: {
      category: classified.category,
      message: classified.message,
      retryable: classified.retryable,
      ...(classified.retryAfterMs !== undefined ? { retryAfterMs: classified.retryAfterMs } : {}),
    },
  };
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
