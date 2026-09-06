import Anthropic from '@anthropic-ai/sdk';

import type { Message, StopReason, ToolSchema } from '../../types.js';
import type { LLMProvider, StreamEvent, StreamParams } from '../types.js';

const DEFAULT_MAX_TOKENS = 8_192;

export class ClaudeProvider implements LLMProvider {
  readonly name = 'claude';
  private readonly client: Anthropic;

  constructor(apiKey?: string) {
    // Passing `undefined` lets the SDK resolve ANTHROPIC_API_KEY, an auth token
    // or an `ant auth login` profile on its own.
    this.client = apiKey ? new Anthropic({ apiKey }) : new Anthropic();
  }

  async *stream(params: StreamParams): AsyncIterable<StreamEvent> {
    const { system, messages } = splitSystem(params.messages, params.systemPrompt);

    const systemParam = toSystemParam(system, params.cacheSystemPrompt !== false);

    const stream = this.client.messages.stream(
      {
        model: params.model,
        max_tokens: params.maxTokens ?? DEFAULT_MAX_TOKENS,
        ...(systemParam ? { system: systemParam } : {}),
        messages,
        ...(params.tools?.length ? { tools: params.tools.map(toAnthropicTool) } : {}),
        // Thinking is adaptive by default on current models; `effort` is the
        // supported way to trade depth against spend. The old `budget_tokens`
        // knob is rejected outright by these models.
        ...(params.effort ? { output_config: { effort: params.effort } } : {}),
      },
      params.abortSignal ? { signal: params.abortSignal } : undefined,
    );

    // `content_block_stop` fires for every block, not just tool blocks, so the
    // block type has to be tracked or text blocks would emit phantom tool calls.
    let inToolBlock = false;

    for await (const event of stream) {
      switch (event.type) {
        case 'content_block_start':
          if (event.content_block.type === 'tool_use') {
            inToolBlock = true;
            yield { type: 'tool_use_start', id: event.content_block.id, name: event.content_block.name };
          }
          break;

        case 'content_block_delta':
          if (event.delta.type === 'text_delta') {
            yield { type: 'text_delta', content: event.delta.text };
          } else if (event.delta.type === 'input_json_delta') {
            yield { type: 'tool_use_delta', input: event.delta.partial_json };
          }
          // `thinking_delta` is intentionally dropped: reasoning is not part of
          // the diagnosis output and must not leak into a report.
          break;

        case 'content_block_stop':
          if (inToolBlock) {
            inToolBlock = false;
            yield { type: 'tool_use_end' };
          }
          break;

        default:
          break;
      }
    }

    // Totals only settle once the message closes, so usage is read from the
    // final message rather than accumulated from deltas. This also covers
    // abort: `finalMessage()` throws on a stream that was cut short, so a
    // truncated response cannot reach the parser looking complete — the
    // OpenAI-shaped providers need an explicit check for the same reason.
    const final = await stream.finalMessage();
    yield {
      type: 'message_end',
      usage: {
        inputTokens: final.usage.input_tokens,
        outputTokens: final.usage.output_tokens,
        ...(final.usage.cache_read_input_tokens != null
          ? { cacheReadTokens: final.usage.cache_read_input_tokens }
          : {}),
        ...(final.usage.cache_creation_input_tokens != null
          ? { cacheWriteTokens: final.usage.cache_creation_input_tokens }
          : {}),
      },
      stopReason: mapStopReason(final.stop_reason),
    };
  }

  async countTokens(messages: Message[], tools?: ToolSchema[]): Promise<number> {
    const { system, messages: converted } = splitSystem(messages);
    const result = await this.client.messages.countTokens({
      model: 'claude-opus-5',
      ...(system ? { system } : {}),
      messages: converted,
      ...(tools?.length ? { tools: tools.map(toAnthropicTool) } : {}),
    });
    return result.input_tokens;
  }
}

/**
 * Anthropic carries the system prompt outside `messages`, so any system turns
 * are hoisted out and concatenated with an explicit `systemPrompt`.
 */
function splitSystem(
  messages: Message[],
  systemPrompt?: string,
): { system: string | undefined; messages: Anthropic.MessageParam[] } {
  const systemParts = systemPrompt ? [systemPrompt] : [];
  const rest: Message[] = [];

  for (const message of messages) {
    if (message.role === 'system') systemParts.push(message.content);
    else rest.push(message);
  }

  return {
    system: systemParts.length ? systemParts.join('\n\n') : undefined,
    messages: toAnthropicMessages(rest),
  };
}

/**
 * Anthropic has no `tool` role — results are `tool_result` blocks inside a user
 * turn, and every result for one assistant turn must arrive in a *single* user
 * message. Emitting one message per result teaches the model to stop making
 * parallel tool calls, so consecutive results are merged here.
 */
export function toAnthropicMessages(messages: Message[]): Anthropic.MessageParam[] {
  const out: Anthropic.MessageParam[] = [];
  let pendingResults: Anthropic.ToolResultBlockParam[] = [];

  const flushResults = (): void => {
    if (pendingResults.length === 0) return;
    out.push({ role: 'user', content: pendingResults });
    pendingResults = [];
  };

  for (const message of messages) {
    if (message.role === 'tool') {
      pendingResults.push({
        type: 'tool_result',
        tool_use_id: message.toolCallId ?? '',
        content: message.content,
      });
      continue;
    }

    flushResults();

    if (message.role === 'assistant') {
      const blocks: Anthropic.ContentBlockParam[] = [];
      if (message.content) blocks.push({ type: 'text', text: message.content });
      for (const call of message.toolCalls ?? []) {
        blocks.push({ type: 'tool_use', id: call.id, name: call.name, input: call.input });
      }
      // An assistant turn with no content at all is rejected by the API.
      if (blocks.length > 0) out.push({ role: 'assistant', content: blocks });
      continue;
    }

    out.push({ role: 'user', content: [{ type: 'text', text: message.content }] });
  }

  flushResults();
  return out;
}

/**
 * Turns the system prompt into a cache breakpoint.
 *
 * Requests are rendered as `tools → system → messages`, so marking the end of
 * the system block caches the tool definitions with it — everything that stays
 * byte-identical across a fan-out — while the entry text that varies sits after
 * the breakpoint. The top-level `cache_control` shortcut is deliberately not
 * used: it lands on the *last* cacheable block, which here is the varying
 * message, caching a prefix that by definition never recurs.
 *
 * Two things silently switch this off, neither of them an error:
 * a prefix under the model's minimum (512 tokens on Claude Opus 5), and any
 * byte that changes between requests — so a system prompt must never carry a
 * timestamp, a request id, or a non-deterministically ordered list.
 *
 * Economics at the 5-minute default TTL: a write costs 1.25x and a read 0.1x,
 * so the second request that shares the prefix already pays it back.
 */
export function toSystemParam(
  system: string | undefined,
  cache: boolean,
): string | Anthropic.TextBlockParam[] | undefined {
  if (!system) return undefined;
  if (!cache) return system;
  return [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }];
}

function toAnthropicTool(tool: ToolSchema): Anthropic.Tool {
  return {
    name: tool.name,
    description: tool.description,
    input_schema: tool.parameters as Anthropic.Tool.InputSchema,
  };
}

/**
 * The SDK reports seven stop reasons; the Harness only distinguishes the five
 * that change what the caller does next.
 */
function mapStopReason(reason: Anthropic.StopReason | null): StopReason {
  switch (reason) {
    case 'tool_use':
      return 'tool_use';
    case 'max_tokens':
      return 'max_tokens';
    case 'refusal':
      return 'refusal';
    case 'model_context_window_exceeded':
      return 'context_exceeded';
    // `stop_sequence` and `pause_turn` both mean "this turn is over"; the
    // latter only occurs with server-side tools, which this project does not use.
    default:
      return 'end_turn';
  }
}
