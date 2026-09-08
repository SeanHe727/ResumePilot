import OpenAI from 'openai';

import type { Message, StopReason, ToolSchema } from '../../types.js';
import { QueryEngineError, type LLMProvider, type StreamEvent, type StreamParams } from '../types.js';

const DEFAULT_MAX_TOKENS = 16_000;

/**
 * Marks the carried raw items inside `Message.reasoning`.
 *
 * That field is a string because every other provider's reasoning is one. Here
 * it holds the items verbatim, and the prefix is what tells them apart from a
 * model's own prose on the way back in.
 */
const RAW_PREFIX = 'responses-items:';

/**
 * OpenAI's `/v1/responses`, which exists here for one reason.
 *
 * On `/v1/chat/completions` the newer reasoning models refuse function tools
 * unless reasoning is switched off — the two are mutually exclusive there, and
 * a sub-agent that cannot look anything up is not a sub-agent. This endpoint
 * allows both.
 *
 * It is a different protocol, not a different model: input is a list of items
 * rather than messages, a tool result is an item of its own, and the model's
 * reasoning comes back as an item that has to be handed back verbatim on the
 * next turn — with its id, which is why the raw items are carried rather than
 * the text.
 */
export class OpenAIResponsesProvider implements LLMProvider {
  readonly name = 'openai';
  private readonly client: OpenAI;

  constructor(apiKey?: string) {
    this.client = new OpenAI({ ...(apiKey ? { apiKey } : {}) });
  }

  async *stream(params: StreamParams): AsyncIterable<StreamEvent> {
    const stream = await this.client.responses.create(
      {
        model: params.model,
        input: toInput(params.messages) as never,
        ...(params.systemPrompt ? { instructions: params.systemPrompt } : {}),
        ...(params.tools?.length ? { tools: params.tools.map(toResponsesTool) as never } : {}),
        ...(params.reasoningEffort ? { reasoning: { effort: params.reasoningEffort } } : {}),
        ...(params.jsonMode ? { text: { format: { type: 'json_object' as const } } } : {}),
        max_output_tokens: params.maxTokens ?? DEFAULT_MAX_TOKENS,
        stream: true,
      },
      params.abortSignal ? { signal: params.abortSignal } : undefined,
    );

    let completed: OpenAI.Responses.Response | null = null;

    for await (const event of stream) {
      if (event.type === 'response.output_text.delta') {
        yield { type: 'text_delta', content: event.delta };
      } else if (event.type === 'response.reasoning_summary_text.delta') {
        // Reasoning is summarised rather than streamed verbatim, and only when
        // a summary was asked for. The items themselves are read off the
        // completed response below.
        yield { type: 'reasoning_delta', content: event.delta };
      } else if (event.type === 'response.completed') {
        completed = event.response;
      }
    }

    // The SDK ends the iteration on abort rather than throwing, so without this
    // a half-written answer would be assembled as a complete one.
    if (params.abortSignal?.aborted) {
      throw new QueryEngineError('Request timed out or was aborted', 'timeout', true, 1_000);
    }
    if (!completed) {
      throw new QueryEngineError('Response stream ended without completing', 'network', true, 1_000);
    }

    for (const item of completed.output) {
      if (item.type !== 'function_call') continue;
      yield { type: 'tool_use_start', id: item.call_id, name: item.name };
      if (item.arguments) yield { type: 'tool_use_delta', input: item.arguments };
      yield { type: 'tool_use_end' };
    }

    // Carried so the next turn can hand them back with their ids, which this
    // endpoint requires: a reasoning item stripped of its id is rejected.
    const carried = completed.output.filter(
      (item) => item.type === 'reasoning' || item.type === 'function_call',
    );
    if (carried.length > 0) {
      yield { type: 'reasoning_delta', content: RAW_PREFIX + JSON.stringify(carried) };
    }

    yield {
      type: 'message_end',
      usage: {
        inputTokens: completed.usage?.input_tokens ?? 0,
        outputTokens: completed.usage?.output_tokens ?? 0,
        ...(completed.usage?.input_tokens_details?.cached_tokens
          ? { cacheReadTokens: completed.usage.input_tokens_details.cached_tokens }
          : {}),
      },
      stopReason: mapStatus(completed),
    };
  }

  async countTokens(messages: Message[], tools?: ToolSchema[]): Promise<number> {
    const text = JSON.stringify(messages) + (tools ? JSON.stringify(tools) : '');
    const cjk = (text.match(/[一-鿿぀-ヿ가-힯]/g) ?? []).length;
    return Math.ceil(cjk * 1.5 + (text.length - cjk) * 0.25);
  }
}

function toInput(messages: Message[]): unknown[] {
  const input: unknown[] = [];

  for (const message of messages) {
    if (message.role === 'tool') {
      input.push({
        type: 'function_call_output',
        call_id: message.toolCallId ?? '',
        output: message.content,
      });
      continue;
    }

    if (message.role === 'assistant') {
      // The reasoning and the calls that produced it go back as the items they
      // were. Rebuilding them from `toolCalls` would lose the ids.
      const raw = readRawItems(message.reasoning);
      if (raw) {
        input.push(...raw);
        if (message.content) input.push({ role: 'assistant', content: message.content });
      } else {
        input.push({ role: 'assistant', content: message.content || '(no content)' });
      }
      continue;
    }

    input.push({
      role: message.role === 'system' ? 'system' : 'user',
      content: message.content,
    });
  }

  return input;
}

function readRawItems(reasoning: string | undefined): unknown[] | null {
  if (!reasoning?.startsWith(RAW_PREFIX)) return null;
  try {
    const parsed: unknown = JSON.parse(reasoning.slice(RAW_PREFIX.length));
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/** Flat, unlike the chat endpoint's `{ type: 'function', function: {...} }`. */
function toResponsesTool(tool: ToolSchema): unknown {
  return {
    type: 'function',
    name: tool.name,
    description: tool.description,
    parameters: tool.parameters,
    strict: false,
  };
}

function mapStatus(response: OpenAI.Responses.Response): StopReason {
  if (response.status === 'incomplete') {
    return response.incomplete_details?.reason === 'max_output_tokens' ? 'max_tokens' : 'end_turn';
  }
  return response.output.some((item) => item.type === 'function_call') ? 'tool_use' : 'end_turn';
}
