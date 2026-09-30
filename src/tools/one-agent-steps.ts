import { singleAgentVariant } from '../config.js';
import type { ParsedResponse, QueryParams } from '../query-engine/types.js';
import type { Session } from '../session/types.js';
import type { Message } from '../types.js';
import type { ToolContext } from './types.js';

/**
 * A report step's model call: its own, or, under the `one` ablation, the
 * coordinator's, in the coordinator's context.
 *
 * In the product the selection and the write-up are calls of their own, with
 * their own system prompts and nothing else in front of them. Under `one` the
 * same agent that did the review does them too: the session's window as it
 * stands, then each step's rules and material as a new user turn, and every
 * earlier step's exchange kept in front of the next, so the context only
 * grows. The step's own prompt becomes the head of its user turn; the system
 * prompt stays the agent's.
 */
export async function reportStepQuery(ctx: ToolContext, params: QueryParams): Promise<ParsedResponse> {
  if (singleAgentVariant() !== 'one' || !ctx.session?.contextManager) return ctx.queryEngine.query(params);

  const window = ctx.session.contextManager.build();
  const [first, ...rest] = params.messages;
  const turn: Message[] = [
    { role: 'user', content: `${params.systemPrompt ?? ''}\n\n${first?.content ?? ''}` },
    ...rest,
  ];
  const earlier = stepsSoFar(ctx.session, window.messages);

  const response = await ctx.queryEngine.query({
    ...params,
    systemPrompt: window.systemPrompt,
    messages: [...window.messages, ...pendingResults(window.messages), ...earlier.messages, ...turn],
    // The coordinator's own settings, since it is the coordinator answering.
    effort: 'medium',
    maxTokens: 64_000,
  });

  earlier.messages.push(...turn, { role: 'assistant', content: response.content ?? '' });
  return response;
}

/**
 * The report steps already run in this tool call, per session.
 *
 * Keyed on the call that is running, so a second report in a later turn starts
 * from its own window rather than from the first report's steps.
 */
const STEPS = new WeakMap<Session, { callKey: string; messages: Message[] }>();

function stepsSoFar(session: Session, window: Message[]): { messages: Message[] } {
  const callKey = pendingCalls(window).join(',');
  const held = STEPS.get(session);
  if (held && held.callKey === callKey) return held;
  const fresh = { callKey, messages: [] as Message[] };
  STEPS.set(session, fresh);
  return fresh;
}

/** The last assistant turn's calls that have no result yet: this one among them. */
function pendingCalls(window: Message[]): string[] {
  const at = window.map((m) => m.role).lastIndexOf('assistant');
  const calls = at >= 0 ? (window[at]!.toolCalls ?? []) : [];
  const answered = new Set(window.slice(at + 1).map((m) => m.toolCallId));
  return calls.map((c) => c.id).filter((id) => !answered.has(id));
}

/**
 * Placeholders for the calls still running, this one included.
 *
 * A provider refuses a user turn after tool calls with no results, and the
 * report is being written from inside one of them. The real results replace
 * these when the turn's calls finish; the steps are not kept past the call.
 */
function pendingResults(window: Message[]): Message[] {
  return pendingCalls(window).map((id) => ({
    role: 'tool' as const,
    toolCallId: id,
    content: JSON.stringify({ status: 'running', note: 'the report is being written; its steps follow' }),
  }));
}
