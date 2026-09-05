import { describe, expect, it } from 'vitest';

import { toAnthropicMessages, toSystemParam } from '../../src/query-engine/providers/claude.js';
import { estimateTokens, toOpenAIMessages } from '../../src/query-engine/providers/openai.js';
import type { Message } from '../../src/types.js';

const assistantWithTwoCalls: Message = {
  role: 'assistant',
  content: 'Checking both entries.',
  toolCalls: [
    { id: 'call_a', name: 'query_knowledge_base', input: { question: 'quantify' } },
    { id: 'call_b', name: 'query_knowledge_base', input: { question: 'verbs' } },
  ],
};

const twoResults: Message[] = [
  { role: 'tool', toolCallId: 'call_a', content: '{"hits":1}' },
  { role: 'tool', toolCallId: 'call_b', content: '{"hits":2}' },
];

describe('toAnthropicMessages', () => {
  it('merges every tool result of one turn into a single user message', () => {
    const out = toAnthropicMessages([
      { role: 'user', content: 'diagnose this' },
      assistantWithTwoCalls,
      ...twoResults,
    ]);

    // Splitting results across messages trains the model out of parallel calls.
    expect(out).toHaveLength(3);
    expect(out[2]?.role).toBe('user');
    expect(out[2]?.content).toHaveLength(2);
    expect(out[2]?.content).toMatchObject([
      { type: 'tool_result', tool_use_id: 'call_a' },
      { type: 'tool_result', tool_use_id: 'call_b' },
    ]);
  });

  it('keeps results from separate turns in separate messages', () => {
    const out = toAnthropicMessages([
      assistantWithTwoCalls,
      twoResults[0]!,
      { role: 'assistant', content: 'now the second', toolCalls: [] },
      twoResults[1]!,
    ]);

    const userTurns = out.filter((m) => m.role === 'user');
    expect(userTurns).toHaveLength(2);
  });

  it('emits text and tool_use blocks together on an assistant turn', () => {
    const out = toAnthropicMessages([assistantWithTwoCalls]);

    expect(out[0]?.content).toMatchObject([
      { type: 'text', text: 'Checking both entries.' },
      { type: 'tool_use', id: 'call_a', name: 'query_knowledge_base' },
      { type: 'tool_use', id: 'call_b' },
    ]);
  });

  it('drops an assistant turn that would carry no content blocks', () => {
    // The API rejects an empty content array, so it must not be sent at all.
    expect(toAnthropicMessages([{ role: 'assistant', content: '' }])).toEqual([]);
  });

  it('emits tool_use blocks even when the assistant said nothing', () => {
    const out = toAnthropicMessages([
      { role: 'assistant', content: '', toolCalls: [{ id: 'x', name: 't', input: {} }] },
    ]);

    expect(out[0]?.content).toMatchObject([{ type: 'tool_use', id: 'x' }]);
  });
});

describe('toSystemParam', () => {
  it('marks the system prompt as a cache breakpoint by default', () => {
    expect(toSystemParam('You diagnose resumes.', true)).toEqual([
      { type: 'text', text: 'You diagnose resumes.', cache_control: { type: 'ephemeral' } },
    ]);
  });

  it('sends a plain string when caching is off', () => {
    expect(toSystemParam('You diagnose resumes.', false)).toBe('You diagnose resumes.');
  });

  it('sends nothing when there is no system prompt', () => {
    expect(toSystemParam(undefined, true)).toBeUndefined();
  });
});

describe('cache key independence from caching hints', () => {
  it('ignores cacheSystemPrompt, which changes billing but not the answer', async () => {
    const { QueryCache } = await import('../../src/query-engine/cache.js');
    const cache = new QueryCache(':memory:');
    const base = {
      model: 'claude-opus-5',
      systemPrompt: 'You diagnose resumes.',
      messages: [{ role: 'user' as const, content: 'Led a team' }],
    };

    expect(cache.generateKey({ ...base, cacheSystemPrompt: true })).toBe(
      cache.generateKey({ ...base, cacheSystemPrompt: false }),
    );
  });
});

describe('toOpenAIMessages', () => {
  it('puts the system prompt first', () => {
    const out = toOpenAIMessages([{ role: 'user', content: 'hi' }], 'You diagnose resumes.');

    expect(out[0]).toEqual({ role: 'system', content: 'You diagnose resumes.' });
  });

  it('keeps one message per tool result, unlike Anthropic', () => {
    const out = toOpenAIMessages(twoResults);

    expect(out).toHaveLength(2);
    expect(out[0]).toMatchObject({ role: 'tool', tool_call_id: 'call_a' });
    expect(out[1]).toMatchObject({ role: 'tool', tool_call_id: 'call_b' });
  });

  it('serialises tool call arguments to a JSON string', () => {
    const out = toOpenAIMessages([assistantWithTwoCalls]);

    expect(out[0]).toMatchObject({
      role: 'assistant',
      tool_calls: [
        { id: 'call_a', type: 'function', function: { arguments: '{"question":"quantify"}' } },
        { id: 'call_b', type: 'function', function: { arguments: '{"question":"verbs"}' } },
      ],
    });
  });

  it('sends null rather than an empty string for silent assistant turns', () => {
    const out = toOpenAIMessages([
      { role: 'assistant', content: '', toolCalls: [{ id: 'x', name: 't', input: {} }] },
    ]);

    expect(out[0]).toMatchObject({ content: null });
  });
});

describe('estimateTokens', () => {
  it('charges CJK far more per character than Latin text', () => {
    // A naive chars/4 rule under-counts Chinese resumes by roughly 6x.
    expect(estimateTokens('简历诊断')).toBe(6);
    expect(estimateTokens('resume')).toBe(2);
  });
});
