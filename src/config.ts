/**
 * Configuration and the model registry.
 *
 * Pricing lives here rather than in the Query Engine because two layers need
 * it: the Token Counter charges every response against the session budget, and
 * the Router weighs cost when picking a model for a task.
 */

export type ProviderName = 'claude' | 'openai' | 'deepseek';

export interface ModelPricing {
  /** USD per 1M input tokens. */
  inputPerMTok: number;
  /** USD per 1M output tokens. */
  outputPerMTok: number;
}

export interface ModelSpec {
  id: string;
  provider: ProviderName;
  pricing: ModelPricing;
  contextWindow: number;
  /**
   * Newer OpenAI reasoning models reject `max_tokens` outright and want
   * `max_completion_tokens`. The two mean the same thing to us.
   */
  usesMaxCompletionTokens?: boolean;
  /**
   * Takes `reasoning_effort`, and refuses function tools unless it is `none`.
   *
   * On `/v1/chat/completions` those two are mutually exclusive: a model that
   * reasons cannot be handed tools. Sub-agents need tools, so they run without
   * reasoning; the deterministic pipeline calls no tools and gets the full
   * setting. Lifting that would mean an adapter for `/v1/responses`.
   */
  reasoningEffort?: boolean;
  /**
   * Reachable only through `/v1/responses`.
   *
   * The chat endpoint refuses function tools on these models unless reasoning
   * is off, and a sub-agent needs both.
   */
  responsesApi?: boolean;
}

/**
 * Verified 2026-09-04. Anthropic rates are first-party API rates.
 *
 * DeepSeek bills different rates at peak and off-peak hours; the peak rate is
 * recorded so the budget guard over-estimates rather than under-estimates.
 * `deepseek-chat` is a deprecated alias — use the v4 model ids.
 *
 * The OpenAI chat models are here so a session holding only an OpenAI key can
 * still run: `RESUMEPILOT_MODEL_PRIMARY=gpt-4.1` swaps the whole pipeline over
 * without a code change. Verified 2026-09-05.
 */
export const MODEL_REGISTRY: Readonly<Record<string, ModelSpec>> = {
  'claude-opus-5': {
    id: 'claude-opus-5',
    provider: 'claude',
    pricing: { inputPerMTok: 5.0, outputPerMTok: 25.0 },
    contextWindow: 1_000_000,
  },
  'claude-sonnet-5': {
    id: 'claude-sonnet-5',
    provider: 'claude',
    pricing: { inputPerMTok: 2.0, outputPerMTok: 10.0 },
    contextWindow: 1_000_000,
  },
  'claude-haiku-4-5': {
    id: 'claude-haiku-4-5',
    provider: 'claude',
    pricing: { inputPerMTok: 1.0, outputPerMTok: 5.0 },
    contextWindow: 200_000,
  },
  'gpt-4.1': {
    id: 'gpt-4.1',
    provider: 'openai',
    pricing: { inputPerMTok: 2.0, outputPerMTok: 8.0 },
    contextWindow: 1_000_000,
  },
  'gpt-4.1-mini': {
    id: 'gpt-4.1-mini',
    provider: 'openai',
    pricing: { inputPerMTok: 0.4, outputPerMTok: 1.6 },
    contextWindow: 1_000_000,
  },
  'deepseek-v4-pro': {
    id: 'deepseek-v4-pro',
    provider: 'deepseek',
    // ESTIMATE, not verified against the price list. The budget guard divides
    // by these, so an understated rate lets a run spend past its ceiling —
    // check them before relying on `maxCostUsd` with this model selected.
    pricing: { inputPerMTok: 1.1, outputPerMTok: 4.4 },
    contextWindow: 128_000,
  },
  'deepseek-v4-flash': {
    id: 'deepseek-v4-flash',
    provider: 'deepseek',
    pricing: { inputPerMTok: 0.44, outputPerMTok: 1.32 },
    contextWindow: 128_000,
  },
  'gpt-5.6-luna': {
    id: 'gpt-5.6-luna',
    provider: 'openai',
    // ESTIMATE, not verified against the price list — see the note on
    // `deepseek-v4-pro`. The budget guard divides by these.
    pricing: { inputPerMTok: 1.25, outputPerMTok: 10 },
    contextWindow: 400_000,
    usesMaxCompletionTokens: true,
    reasoningEffort: true,
    responsesApi: true,
  },
  'text-embedding-3-small': {
    id: 'text-embedding-3-small',
    provider: 'openai',
    pricing: { inputPerMTok: 0.02, outputPerMTok: 0 },
    contextWindow: 8_191,
  },
};

export function resolveModel(id: string): ModelSpec {
  const spec = MODEL_REGISTRY[id];
  if (!spec) {
    throw new Error(
      `Unknown model "${id}". Known models: ${Object.keys(MODEL_REGISTRY).join(', ')}`,
    );
  }
  return spec;
}

export interface AppConfig {
  apiKeys: {
    anthropic?: string;
    openai?: string;
    deepseek?: string;
    /** Web search. Absent disables the tool rather than failing the run. */
    tavily?: string;
  };
  models: {
    /** Bullet diagnosis, rewriting, final report. */
    primary: string;
    /** Mid-tier Anthropic, where the primary model is overkill. */
    secondary: string;
    /** Section splitting, bullet segmentation — mechanical structural work. */
    cheap: string;
    embedding: string;
  };
  /** Hard USD ceiling for one diagnosis session. */
  maxCostUsd: number;
  dataDir: string;
}

const DEFAULTS = {
  primary: 'claude-opus-5',
  secondary: 'claude-sonnet-5',
  cheap: 'deepseek-v4-flash',
  embedding: 'text-embedding-3-small',
  maxCostUsd: 2.0,
  dataDir: './data',
} as const;

/**
 * Reads configuration without validating credentials — an absent key is only
 * an error once a provider is actually reached, so commands that never call a
 * model (`/help`, `/history`) work with no keys set at all.
 */
export function loadConfig(env: NodeJS.ProcessEnv = process.env): AppConfig {
  const models = {
    primary: env.RESUMEPILOT_MODEL_PRIMARY ?? DEFAULTS.primary,
    secondary: env.RESUMEPILOT_MODEL_SECONDARY ?? DEFAULTS.secondary,
    cheap: env.RESUMEPILOT_MODEL_CHEAP ?? DEFAULTS.cheap,
    embedding: env.RESUMEPILOT_MODEL_EMBEDDING ?? DEFAULTS.embedding,
  };

  // Fail at startup on a typo'd model id rather than mid-diagnosis.
  for (const id of Object.values(models)) resolveModel(id);

  const rawCost = env.RESUMEPILOT_MAX_COST_USD;
  const maxCostUsd = rawCost === undefined ? DEFAULTS.maxCostUsd : Number(rawCost);
  if (!Number.isFinite(maxCostUsd) || maxCostUsd <= 0) {
    throw new Error(`RESUMEPILOT_MAX_COST_USD must be a positive number, got "${rawCost}"`);
  }

  return {
    apiKeys: {
      ...(env.ANTHROPIC_API_KEY ? { anthropic: env.ANTHROPIC_API_KEY } : {}),
      ...(env.OPENAI_API_KEY ? { openai: env.OPENAI_API_KEY } : {}),
      ...(env.DEEPSEEK_API_KEY ? { deepseek: env.DEEPSEEK_API_KEY } : {}),
      ...(env.TAVILY_API_KEY ? { tavily: env.TAVILY_API_KEY } : {}),
    },
    models,
    maxCostUsd,
    dataDir: env.RESUMEPILOT_DATA_DIR ?? DEFAULTS.dataDir,
  };
}

export function estimateCostUsd(
  modelId: string,
  usage: { inputTokens: number; outputTokens: number },
): number {
  const { pricing } = resolveModel(modelId);
  return (
    (usage.inputTokens * pricing.inputPerMTok) / 1_000_000 +
    (usage.outputTokens * pricing.outputPerMTok) / 1_000_000
  );
}
