import type { AppConfig } from '../config.js';
import { resolveModel, type ProviderName } from '../config.js';
import type { Effort, RouteRule, TaskKind } from './types.js';

export interface Route {
  provider: ProviderName;
  model: string;
  effort: Effort | undefined;
  reason: string;
}

/**
 * Picks the model for a task.
 *
 * The split is by *kind of judgement*, not by importance: work that needs
 * domain reasoning goes to the primary model, work that is mechanical
 * restructuring goes to the cheap one. Sending bullet segmentation to a
 * frontier model buys nothing and costs 10x.
 */
export class ModelRouter {
  private readonly rules: Map<TaskKind, RouteRule>;
  private readonly efforts: Map<TaskKind, Effort>;

  constructor(
    private readonly config: AppConfig,
    overrides: RouteRule[] = [],
  ) {
    this.rules = new Map(defaultRules(config).map((rule) => [rule.task, rule]));
    for (const rule of overrides) this.rules.set(rule.task, rule);
    this.efforts = new Map(DEFAULT_EFFORTS);
  }

  resolve(task?: TaskKind, explicitModel?: string): Route {
    if (explicitModel) {
      return {
        provider: resolveModel(explicitModel).provider,
        model: explicitModel,
        effort: task ? this.efforts.get(task) : undefined,
        reason: 'caller named the model explicitly',
      };
    }

    const rule = task ? this.rules.get(task) : undefined;
    const model = rule?.model ?? this.config.models.primary;

    return {
      provider: resolveModel(model).provider,
      model,
      effort: task ? this.efforts.get(task) : undefined,
      reason: rule?.reason ?? 'no rule matched; fell back to the primary model',
    };
  }

  /** Rendered by `/config` so routing decisions are inspectable, not folklore. */
  list(): RouteRule[] {
    return [...this.rules.values()];
  }
}

function defaultRules(config: AppConfig): RouteRule[] {
  const { primary, cheap } = config.models;

  return [
    {
      task: 'diagnose_bullet',
      model: primary,
      reason: 'needs domain judgement about technical depth and credibility',
    },
    {
      task: 'judge_wording',
      model: cheap,
      reason: 'mechanical language judgement, no domain knowledge or retrieval needed',
    },
    {
      task: 'research_domain',
      model: primary,
      reason: 'the questions only a practitioner in that field would think to ask',
    },
    {
      task: 'rewrite_bullet',
      model: primary,
      reason: 'must rewrite without inventing metrics — the hardest constraint here',
    },
    {
      task: 'match_jd',
      model: primary,
      reason: 'requires reading intent behind a job description, not keyword overlap',
    },
    {
      task: 'assess_narrative',
      model: primary,
      reason: 'reads every entry at once to judge whether they form one story',
    },
    {
      task: 'generate_report',
      model: primary,
      reason: 'long structured output synthesising every other result',
    },
    {
      task: 'summarize',
      model: cheap,
      reason: 'context compaction, where fidelity matters more than insight',
    },
  ];
}

/**
 * Effort trades thinking depth against spend. Rewriting earns the top setting
 * because a fabricated metric is worse than no suggestion; splitting text earns
 * the bottom one because there is nothing to deliberate about.
 */
const DEFAULT_EFFORTS: ReadonlyArray<[TaskKind, Effort]> = [
  ['diagnose_bullet', 'high'],
  ['judge_wording', 'low'],
  ['research_domain', 'high'],
  ['rewrite_bullet', 'xhigh'],
  ['match_jd', 'high'],
  ['assess_narrative', 'high'],
  ['generate_report', 'high'],
  ['summarize', 'low'],
];
