import type { ToolCall } from '../types.js';
import type { Session } from '../session/types.js';
import type { ToolResult } from '../tools/types.js';

export type HookTiming = 'pre-tool' | 'post-tool';

export interface HookContext {
  toolCall: ToolCall;
  /** Only populated on post-tool hooks. */
  result?: ToolResult;
  session: Session;
  /** Side channel between hooks in the same run, e.g. the permission decision. */
  metadata: Map<string, unknown>;
}

export type HookOutcome =
  | { action: 'continue' }
  | { action: 'modify_input'; input: Record<string, unknown> }
  | { action: 'modify_result'; result: ToolResult }
  /** Terminates the pipeline; the tool does not run. */
  | { action: 'block'; reason: string }
  /** Skips the remaining hooks but lets the tool proceed. */
  | { action: 'skip' };

export interface Hook {
  readonly name: string;
  readonly timing: HookTiming;
  /** Lower runs first. */
  readonly priority: number;
  enabled: boolean;
  execute(ctx: HookContext): Promise<HookOutcome>;
}

export interface HookPipeline {
  register(hook: Hook): void;
  unregister(name: string): void;
  enable(name: string): void;
  disable(name: string): void;
  runPre(ctx: HookContext): Promise<HookOutcome>;
  runPost(ctx: HookContext): Promise<HookOutcome>;
  list(): Array<{ name: string; timing: HookTiming; priority: number; enabled: boolean }>;
}

/**
 * Default pipeline order.
 *
 * A hook that throws is logged and skipped — governance failing must not take
 * the run down with it. The exception is `permission-check`, which converts
 * its own failures into a block: a gate that opens when it breaks is not a
 * gate, and catch-and-continue would open it.
 *
 * The reference project also ran an `input-sanitize` hook here, masking phone
 * numbers and emails in tool arguments on the way to the model. It is absent
 * deliberately: this tool diagnoses resumes, and masking the employer costs
 * the model the context that makes scope and impact judgeable. Contact details
 * never reach a tool argument in the first place — see the note in
 * `structure-builder.ts`.
 */
export const DEFAULT_HOOK_ORDER = [
  { name: 'permission-check', timing: 'pre-tool', priority: 10 },
  { name: 'budget-check', timing: 'pre-tool', priority: 30 },
  { name: 'dispatch-trace', timing: 'pre-tool', priority: 50 },
  { name: 'audit-log', timing: 'post-tool', priority: 10 },
  { name: 'result-compress', timing: 'post-tool', priority: 20 },
  { name: 'memory-trigger', timing: 'post-tool', priority: 30 },
  { name: 'progress-update', timing: 'post-tool', priority: 40 },
  { name: 'metric-emit', timing: 'post-tool', priority: 50 },
] as const;
