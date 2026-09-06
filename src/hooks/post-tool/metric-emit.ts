import type { Hook, HookContext, HookOutcome } from '../types.js';

/** Set by the dispatcher before the pre hooks run. */
export const TOOL_START_TIME = 'toolStartTime';

export interface MetricPoint {
  tool: string;
  durationMs: number;
  success: boolean;
  timestamp: string;
}

export interface MetricSummary {
  totalCalls: number;
  avgDurationMs: number;
  successRate: number;
  byTool: Record<string, { calls: number; avgMs: number; failures: number }>;
}

/**
 * Timings, kept in memory for the length of the run.
 *
 * Last in the chain so the duration covers the tool and everything the other
 * post hooks did to its result — that is the latency the user actually waited
 * through, not the model call in isolation.
 */
export class MetricCollector {
  private readonly points: MetricPoint[] = [];

  createHook(): Hook {
    return {
      name: 'metric-emit',
      timing: 'post-tool',
      priority: 50,
      enabled: true,

      execute: async (ctx: HookContext): Promise<HookOutcome> => {
        const started = ctx.metadata.get(TOOL_START_TIME);

        this.points.push({
          tool: ctx.toolCall.name,
          // Zero when the dispatcher did not stamp a start, which is honest:
          // an invented duration would quietly skew the average.
          durationMs: typeof started === 'number' ? Date.now() - started : 0,
          success: ctx.result?.success ?? false,
          timestamp: new Date().toISOString(),
        });

        return { action: 'continue' };
      },
    };
  }

  getSummary(): MetricSummary {
    if (this.points.length === 0) {
      return { totalCalls: 0, avgDurationMs: 0, successRate: 0, byTool: {} };
    }

    const byTool: MetricSummary['byTool'] = {};
    for (const point of this.points) {
      const bucket = (byTool[point.tool] ??= { calls: 0, avgMs: 0, failures: 0 });
      bucket.calls += 1;
      bucket.avgMs += point.durationMs;
      if (!point.success) bucket.failures += 1;
    }
    for (const bucket of Object.values(byTool)) {
      bucket.avgMs = Math.round(bucket.avgMs / bucket.calls);
    }

    const total = this.points.length;
    return {
      totalCalls: total,
      avgDurationMs: Math.round(this.points.reduce((s, p) => s + p.durationMs, 0) / total),
      successRate: this.points.filter((p) => p.success).length / total,
      byTool,
    };
  }

  reset(): void {
    this.points.length = 0;
  }
}
