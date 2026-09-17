import type { Hook, HookContext, HookOutcome, HookPipeline, HookTiming } from './types.js';

/**
 * Where governance lives, so the dispatcher does not have to.
 *
 * Without it, permission checks, budget checks, audit logging, compression,
 * memory writes and progress reporting all end up inline in the one function
 * that calls a tool — and every new concern makes that function longer and
 * harder to test. Here each is a small object with a priority, and the
 * dispatcher is reduced to "run the pre hooks, call the tool, run the post
 * hooks".
 */
export class DefaultHookPipeline implements HookPipeline {
  private hooks: Hook[] = [];

  register(hook: Hook): void {
    if (this.hooks.some((h) => h.name === hook.name)) {
      throw new Error(`hook "${hook.name}" is already registered`);
    }
    // Copied, because `enable`/`disable` mutate. A hook exported as a shared
    // object rather than built per pipeline would otherwise be switched off
    // everywhere in the process at once.
    this.hooks.push({ ...hook });
    this.hooks.sort((a, b) => a.priority - b.priority);
  }

  unregister(name: string): void {
    this.hooks = this.hooks.filter((h) => h.name !== name);
  }

  enable(name: string): void {
    this.setEnabled(name, true);
  }

  disable(name: string): void {
    this.setEnabled(name, false);
  }

  async runPre(ctx: HookContext): Promise<HookOutcome> {
    return this.run('pre-tool', ctx);
  }

  async runPost(ctx: HookContext): Promise<HookOutcome> {
    return this.run('post-tool', ctx);
  }

  list(): Array<{
    name: string;
    timing: HookTiming;
    priority: number;
    enabled: boolean;
    watches?: readonly string[];
  }> {
    return this.hooks.map((h) => ({
      name: h.name,
      timing: h.timing,
      ...(h.watches ? { watches: h.watches } : {}),
      priority: h.priority,
      enabled: h.enabled,
    }));
  }

  /**
   * Mutations accumulate on the context as the chain runs, so a later hook
   * sees what an earlier one changed. `block` stops everything; `skip` stops
   * the chain but lets the tool proceed.
   */
  private async run(timing: HookTiming, ctx: HookContext): Promise<HookOutcome> {
    for (const hook of this.hooks) {
      if (hook.timing !== timing || !hook.enabled) continue;
      // Declared on the hook rather than checked inside it, so what a hook is
      // waiting for is visible from outside and a stale name is visible at all.
      if (hook.watches && !hook.watches.includes(ctx.toolCall.name)) continue;

      let outcome: HookOutcome;
      try {
        outcome = await hook.execute(ctx);
      } catch (err) {
        // A broken hook must not take the diagnosis down with it. The one
        // place this is the wrong answer is permission, and that hook catches
        // its own failures and returns `block` rather than relying on this.
        process.stderr.write(`hook "${hook.name}" failed: ${describe(err)}\n`);
        continue;
      }

      switch (outcome.action) {
        case 'continue':
          break;
        case 'modify_input':
          ctx.toolCall.input = outcome.input;
          break;
        case 'modify_result':
          ctx.result = outcome.result;
          break;
        case 'block':
          return outcome;
        case 'skip':
          return { action: 'continue' };
      }
    }

    // Reports what the chain settled on, so the dispatcher can tell whether
    // anything replaced the result without diffing it.
    return ctx.result ? { action: 'modify_result', result: ctx.result } : { action: 'continue' };
  }

  private setEnabled(name: string, enabled: boolean): void {
    const hook = this.hooks.find((h) => h.name === name);
    if (hook) hook.enabled = enabled;
  }
}

function describe(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}
