import { describe, expect, it, vi } from 'vitest';

import { parseStream } from '../../src/query-engine/stream.js';
import { QueryEngineError, type StreamEvent } from '../../src/query-engine/types.js';

async function* emit(events: StreamEvent[]): AsyncIterable<StreamEvent> {
  for (const event of events) yield event;
}

const END: StreamEvent = {
  type: 'message_end',
  usage: { inputTokens: 10, outputTokens: 5 },
  stopReason: 'end_turn',
};

describe('parseStream', () => {
  it('joins text deltas and reports them live', async () => {
    const seen: string[] = [];
    const result = await parseStream(
      emit([
        { type: 'text_delta', content: 'Reduced ' },
        { type: 'text_delta', content: 'P99 latency' },
        END,
      ]),
      (text) => seen.push(text),
    );

    expect(result.type).toBe('text');
    expect(result.content).toBe('Reduced P99 latency');
    expect(seen).toEqual(['Reduced ', 'P99 latency']);
    expect(result.usage).toEqual({ inputTokens: 10, outputTokens: 5 });
  });

  it('assembles tool calls from fragmented argument deltas', async () => {
    const result = await parseStream(
      emit([
        { type: 'tool_use_start', id: 'call_1', name: 'query_knowledge_base' },
        { type: 'tool_use_delta', input: '{"question":' },
        { type: 'tool_use_delta', input: '"quantify impact"}' },
        { type: 'tool_use_end' },
        { ...END, stopReason: 'tool_use' },
      ]),
    );

    expect(result.type).toBe('tool_use');
    expect(result.toolCalls).toEqual([
      { id: 'call_1', name: 'query_knowledge_base', input: { question: 'quantify impact' } },
    ]);
  });

  it('keeps multiple tool calls separate and ordered', async () => {
    const result = await parseStream(
      emit([
        { type: 'tool_use_start', id: 'a', name: 'first' },
        { type: 'tool_use_delta', input: '{"n":1}' },
        { type: 'tool_use_end' },
        { type: 'tool_use_start', id: 'b', name: 'second' },
        { type: 'tool_use_delta', input: '{"n":2}' },
        { type: 'tool_use_end' },
        { ...END, stopReason: 'tool_use' },
      ]),
    );

    expect(result.toolCalls?.map((c) => c.id)).toEqual(['a', 'b']);
    expect(result.toolCalls?.[1]?.input).toEqual({ n: 2 });
  });

  it('degrades malformed tool arguments instead of throwing', async () => {
    const result = await parseStream(
      emit([
        { type: 'tool_use_start', id: 'call_1', name: 'analyze_entry' },
        { type: 'tool_use_delta', input: '{"broken":' },
        { type: 'tool_use_end' },
        { ...END, stopReason: 'tool_use' },
      ]),
    );

    // The turn survives; the tool layer rejects the payload with a normal error.
    expect(result.toolCalls).toHaveLength(1);
    expect(result.toolCalls?.[0]?.input._malformed).toBe('{"broken":');
  });

  it('treats a stream cut off inside a tool call as retryable', async () => {
    const promise = parseStream(
      emit([
        { type: 'tool_use_start', id: 'call_1', name: 'analyze_entry' },
        { type: 'tool_use_delta', input: '{"a":1}' },
        // No tool_use_end — the connection dropped.
      ]),
    );

    await expect(promise).rejects.toThrow(QueryEngineError);
    await expect(promise).rejects.toMatchObject({ category: 'network', retryable: true });
  });

  it('surfaces a refusal rather than returning empty content', async () => {
    const promise = parseStream(emit([{ ...END, stopReason: 'refusal' }]));

    await expect(promise).rejects.toMatchObject({ category: 'refusal', retryable: false });
  });

  it('maps an exceeded context window to the compaction path', async () => {
    const promise = parseStream(emit([{ ...END, stopReason: 'context_exceeded' }]));

    await expect(promise).rejects.toMatchObject({ category: 'context_length', retryable: true });
  });

  it('omits content when the model produced no text', async () => {
    const onDelta = vi.fn();
    const result = await parseStream(emit([END]), onDelta);

    expect(result.content).toBeUndefined();
    expect(onDelta).not.toHaveBeenCalled();
  });
});

describe('a stream that stops early', () => {
  it('is an error, not an answer that happens to be empty', async () => {
    // An abort firing mid-response leaves nothing to mark it: the events that
    // did arrive look ordinary and `stopReason` keeps its default, so the
    // result is a well-formed response with no content. Read as success it is
    // written to the cache, and then served instantly to every identical
    // request that follows — one timeout poisoning every later run.
    async function* cutOff(): AsyncIterable<StreamEvent> {
      yield { type: 'reasoning_delta', content: 'Working through the bullets...' };
    }

    await expect(parseStream(cutOff())).rejects.toThrow(/ended before the response completed/);
  });

  it('accepts a stream that reached message_end', async () => {
    async function* complete(): AsyncIterable<StreamEvent> {
      yield { type: 'text_delta', content: '{"ok":true}' };
      yield {
        type: 'message_end',
        usage: { inputTokens: 1, outputTokens: 1 },
        stopReason: 'end_turn',
      };
    }

    expect((await parseStream(complete())).content).toBe('{"ok":true}');
  });

  it('keeps a model\'s own reasoning out of the answer', async () => {
    async function* thinking(): AsyncIterable<StreamEvent> {
      yield { type: 'reasoning_delta', content: 'Let me check the second bullet.' };
      yield { type: 'text_delta', content: '{"score":40}' };
      yield {
        type: 'message_end',
        usage: { inputTokens: 1, outputTokens: 1 },
        stopReason: 'end_turn',
      };
    }

    const parsed = await parseStream(thinking());
    expect(parsed.content).toBe('{"score":40}');
    expect(parsed.reasoning).toBe('Let me check the second bullet.');
  });
});
