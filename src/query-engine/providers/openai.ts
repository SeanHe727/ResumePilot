import OpenAI from 'openai';

import type { Message, StopReason, ToolSchema } from '../../types.js';
import type { LLMProvider, StreamEvent, StreamParams } from '../types.js';

const DEFAULT_MAX_TOKENS = 8_192;

export class OpenAIProvider implements LLMProvider {
  readonly name: string = 'openai';
  protected readonly client: OpenAI;

  constructor(apiKey?: string, baseURL?: string) {
    this.client = new OpenAI({
      ...(apiKey ? { apiKey } : {}),
      ...(baseURL ? { baseURL } : {}),
    });
  }

  async *stream(params: StreamParams): AsyncIterable<StreamEvent> {
    const stream = await this.client.chat.completions.create(
      {
        model: params.model,
        messages: toOpenAIMessages(params.messages, params.systemPrompt),
        ...(params.tools?.length ? { tools: params.tools.map(toOpenAITool) } : {}),
        max_tokens: params.maxTokens ?? DEFAULT_MAX_TOKENS,
        stream: true,
        // Without this, `chunk.usage` is null on every chunk and the budget
        // guard silently records zero cost for the whole session.
        stream_options: { include_usage: true },
      },
      params.abortSignal ? { signal: params.abortSignal } : undefined,
    );

    // OpenAI interleaves parallel tool calls by `index`, so a call's deltas can
    // arrive between another call's. The Harness stream vocabulary is sequential
    // (start → delta* → end), so calls are accumulated by index and replayed in
    // order once the message closes. Text still streams live; only tool
    // arguments are buffered, which nothing downstream consumes incrementally.
    const partials = new Map<number, { id: string; name: string; args: string }>();
    let usage = { inputTokens: 0, outputTokens: 0 };
    let stopReason: StopReason = 'end_turn';

    for await (const chunk of stream) {
      // The usage-bearing chunk carries an empty `choices` array.
      if (chunk.usage) {
        usage = {
          inputTokens: chunk.usage.prompt_tokens,
          outputTokens: chunk.usage.completion_tokens,
        };
      }

      const choice = chunk.choices[0];
      if (!choice) continue;

      if (choice.delta?.content) {
        yield { type: 'text_delta', content: choice.delta.content };
      }

      // Not in the OpenAI schema — DeepSeek's thinking models add it, and
      // refuse the next request in a tool-calling exchange without it.
      const reasoning = (choice.delta as { reasoning_content?: string } | undefined)
        ?.reasoning_content;
      if (reasoning) yield { type: 'reasoning_delta', content: reasoning };

      for (const call of choice.delta?.tool_calls ?? []) {
        const slot = partials.get(call.index) ?? { id: '', name: '', args: '' };
        if (call.id) slot.id = call.id;
        if (call.function?.name) slot.name = call.function.name;
        if (call.function?.arguments) slot.args += call.function.arguments;
        partials.set(call.index, slot);
      }

      if (choice.finish_reason) stopReason = mapFinishReason(choice.finish_reason);
    }

    for (const index of [...partials.keys()].sort((a, b) => a - b)) {
      const call = partials.get(index)!;
      yield { type: 'tool_use_start', id: call.id, name: call.name };
      if (call.args) yield { type: 'tool_use_delta', input: call.args };
      yield { type: 'tool_use_end' };
    }

    yield { type: 'message_end', usage, stopReason };
  }

  async countTokens(messages: Message[], tools?: ToolSchema[]): Promise<number> {
    // OpenAI exposes no token-counting endpoint. Rather than pull in tiktoken
    // for an estimate that only feeds a budget guard, approximate directly —
    // and account for CJK, where the naive chars/4 rule is off by ~6x.
    const text = JSON.stringify(messages) + (tools ? JSON.stringify(tools) : '');
    return estimateTokens(text);
  }
}

export class DeepSeekProvider extends OpenAIProvider {
  override readonly name = 'deepseek';

  constructor(apiKey?: string) {
    super(apiKey, 'https://api.deepseek.com');
  }
}

/** CJK runs about 1.5 tokens per character; Latin text about 0.25. */
export function estimateTokens(text: string): number {
  const cjk = text.match(/[一-鿿぀-ヿ가-힯]/g)?.length ?? 0;
  return Math.ceil(cjk * 1.5 + (text.length - cjk) * 0.25);
}

export function toOpenAIMessages(
  messages: Message[],
  systemPrompt?: string,
): OpenAI.ChatCompletionMessageParam[] {
  const out: OpenAI.ChatCompletionMessageParam[] = [];
  if (systemPrompt) out.push({ role: 'system', content: systemPrompt });

  for (const message of messages) {
    switch (message.role) {
      case 'system':
        out.push({ role: 'system', content: message.content });
        break;

      case 'tool':
        // Unlike Anthropic, OpenAI wants one message per result.
        out.push({
          role: 'tool',
          tool_call_id: message.toolCallId ?? '',
          content: message.content,
        });
        break;

      case 'assistant':
        out.push({
          role: 'assistant',
          content: message.content || null,
          // Handed back verbatim. The model is stateless, so without its own
          // working it cannot see the turn it is being asked to continue, and
          // DeepSeek rejects the request rather than guessing.
          ...(message.reasoning ? { reasoning_content: message.reasoning } : {}),
          ...(message.toolCalls?.length
            ? {
                tool_calls: message.toolCalls.map((call) => ({
                  id: call.id,
                  type: 'function' as const,
                  function: { name: call.name, arguments: JSON.stringify(call.input) },
                })),
              }
            : {}),
        });
        break;

      default:
        out.push({ role: 'user', content: message.content });
    }
  }

  return out;
}

function toOpenAITool(tool: ToolSchema): OpenAI.ChatCompletionTool {
  return {
    type: 'function',
    function: {
      name: tool.name,
      description: tool.description,
      parameters: tool.parameters as Record<string, unknown>,
    },
  };
}

function mapFinishReason(reason: string): StopReason {
  switch (reason) {
    case 'tool_calls':
    case 'function_call':
      return 'tool_use';
    case 'length':
      return 'max_tokens';
    case 'content_filter':
      return 'refusal';
    default:
      return 'end_turn';
  }
}
