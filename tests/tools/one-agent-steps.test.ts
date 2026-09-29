import { afterEach, describe, expect, it } from 'vitest';

import { LayeredContextManager } from '../../src/context/manager.js';
import type { QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { reportStepQuery } from '../../src/tools/one-agent-steps.js';

function setup() {
  const seen: QueryParams[] = [];
  let n = 0;
  const engine: QueryEngine = {
    async query(params) {
      seen.push(params);
      n += 1;
      return { type: 'text', content: `answer ${n}`, usage: { inputTokens: 1, outputTokens: 1 }, stopReason: 'end_turn' };
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
  const contextManager = new LayeredContextManager({ maxTotalTokens: 400_000, recentBudget: 360_000 });
  contextManager.setSystemPrompt('THE AGENT');
  contextManager.addMessage({ role: 'user', content: 'review my resume' });
  contextManager.addMessage({ role: 'assistant', content: '', toolCalls: [{ id: 'call-1', name: 'generate_report', input: {} }] });
  const ctx = { queryEngine: engine, session: { contextManager } } as never;
  return { ctx, seen };
}

const step = (rules: string, material: string): QueryParams => ({
  task: 'generate_report',
  systemPrompt: rules,
  messages: [{ role: 'user', content: material }],
});

describe('report steps under the one-agent ablation', () => {
  afterEach(() => { delete process.env.RESUMEPILOT_SINGLE_AGENT; });

  it('are ordinary calls of their own otherwise', async () => {
    const { ctx, seen } = setup();
    await reportStepQuery(ctx, step('FILTER RULES', 'findings'));
    expect(seen[0]!.systemPrompt).toBe('FILTER RULES');
    expect(seen[0]!.messages).toHaveLength(1);
  });

  it('run in the agent\'s own growing context, rules as a user turn', async () => {
    process.env.RESUMEPILOT_SINGLE_AGENT = 'one';
    const { ctx, seen } = setup();

    await reportStepQuery(ctx, step('FILTER RULES', 'findings'));
    await reportStepQuery(ctx, step('WRITER RULES', 'chosen'));

    const [filter, writer] = seen;
    expect(filter!.systemPrompt).toContain('THE AGENT');
    const said = (p: QueryParams) => p.messages.map((m) => m.content).join('\n');
    expect(said(filter!)).toContain('review my resume');
    expect(said(filter!)).toContain('FILTER RULES\n\nfindings');
    // The running call gets a placeholder result, or the provider refuses the turn.
    expect(filter!.messages.some((m) => m.role === 'tool' && m.toolCallId === 'call-1')).toBe(true);

    // The writer sees the filter's exchange in front of its own turn.
    expect(said(writer!)).toContain('FILTER RULES');
    expect(said(writer!)).toContain('answer 1');
    expect(writer!.messages.at(-1)!.content).toContain('WRITER RULES\n\nchosen');
  });
});
