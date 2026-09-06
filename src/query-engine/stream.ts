import type { StopReason, ToolCall, TokenUsage } from '../types.js';
import { QueryEngineError, type ParsedResponse, type StreamEvent } from './types.js';

/**
 * Collapses the normalised event stream into one structured response.
 *
 * `onTextDelta` is how the CLI shows the diagnosis as it is written instead of
 * making the user watch a spinner; the assembled result is returned regardless.
 */
export async function parseStream(
  events: AsyncIterable<StreamEvent>,
  onTextDelta?: (text: string) => void,
): Promise<ParsedResponse> {
  let text = '';
  let reasoning = '';
  const toolCalls: ToolCall[] = [];
  let current: { id: string; name: string; input: string } | null = null;
  let usage: TokenUsage = { inputTokens: 0, outputTokens: 0 };
  let stopReason: StopReason = 'end_turn';

  for await (const event of events) {
    switch (event.type) {
      case 'text_delta':
        text += event.content;
        onTextDelta?.(event.content);
        break;

      // Deliberately not passed to `onTextDelta`: this is the model's working,
      // not its answer, and printing it would bury the diagnosis.
      case 'reasoning_delta':
        reasoning += event.content;
        break;

      case 'tool_use_start':
        current = { id: event.id, name: event.name, input: '' };
        break;

      case 'tool_use_delta':
        if (current) current.input += event.input;
        break;

      case 'tool_use_end': {
        if (!current) break;
        toolCalls.push({
          id: current.id,
          name: current.name,
          input: parseToolInput(current.input, current.name),
        });
        current = null;
        break;
      }

      case 'message_end':
        usage = event.usage;
        stopReason = event.stopReason;
        break;
    }
  }

  // A stream cut off mid-tool-call leaves an unterminated block. Dropping it
  // silently would hand the caller a response that looks complete but has lost
  // a call, so it is surfaced as a retryable failure instead.
  if (current !== null) {
    throw new QueryEngineError(
      `Stream ended inside tool call "${current.name}"`,
      'network',
      true,
      1_000,
    );
  }

  if (stopReason === 'refusal') {
    throw new QueryEngineError(
      'The model declined this request (stop_reason: refusal)',
      'refusal',
      false,
    );
  }

  if (stopReason === 'context_exceeded') {
    throw new QueryEngineError(
      'Prompt exceeded the model context window',
      'context_length',
      true,
    );
  }

  return {
    type: toolCalls.length > 0 ? 'tool_use' : 'text',
    ...(text ? { content: text } : {}),
    ...(reasoning ? { reasoning } : {}),
    ...(toolCalls.length > 0 ? { toolCalls } : {}),
    usage,
    stopReason,
  };
}

/**
 * Tool arguments arrive as concatenated JSON fragments. A provider that
 * truncates or garbles them must not take down the whole turn, so a bad payload
 * becomes an empty input the tool layer can reject with a normal error.
 */
function parseToolInput(raw: string, toolName: string): Record<string, unknown> {
  if (!raw.trim()) return {};
  try {
    const parsed: unknown = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }
    return { _malformed: raw, _reason: `expected a JSON object for "${toolName}"` };
  } catch {
    return { _malformed: raw, _reason: `invalid JSON arguments for "${toolName}"` };
  }
}
