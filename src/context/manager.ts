import type { Message } from '../types.js';
import type { QueryEngine } from '../query-engine/types.js';
import { Compressor, countMessageTokens, estimateTokens } from './compressor.js';
import {
  DEFAULT_CONTEXT_CONFIG,
  type CompactionLevel,
  type ContextConfig,
  type ContextManager,
  type ContextWindow,
} from './types.js';

/**
 * Five layers, each with its own allowance.
 *
 * The total is 16k against a model window of 1M, and that gap is the point.
 * Input tokens are billed per request, so a fan-out over twenty entries pays
 * for whatever is resident twenty times over; and a long window dilutes
 * attention, so the entry actually being judged competes with transcript for
 * the model's notice. Diagnosis quality goes down as the window fills.
 *
 * The layers differ in lifetime, which is why they are budgeted separately:
 * the system prompt never changes, the profile changes between sessions, the
 * task block changes every entry, and the recent messages change every turn.
 */
export class LayeredContextManager implements ContextManager {
  private readonly config: ContextConfig;
  private readonly compressor = new Compressor();

  private systemPrompt = '';
  private profileBlock = '';
  private taskBlock = '';
  private historySummary = '';
  private recent: Message[] = [];
  private evicted: Message[] = [];
  private compactions = 0;

  constructor(config: Partial<ContextConfig> = {}) {
    this.config = { ...DEFAULT_CONTEXT_CONFIG, ...config };
  }

  setSystemPrompt(prompt: string): void {
    this.systemPrompt = this.compressor.truncate(prompt, this.config.systemPromptBudget);
  }

  setProfile(profile: string): void {
    this.profileBlock = this.compressor.truncate(profile, this.config.profileBudget);
  }

  setTaskContext(context: string): void {
    this.taskBlock = this.compressor.truncate(context, this.config.taskBudget);
  }

  addMessage(message: Message): void {
    this.recent.push(message);

    // A sliding window over recent turns. What is pushed out is both held for
    // the summariser and appended to the running history immediately.
    //
    // The immediate append is what makes compaction reachable at all. Without
    // it the history layer stays empty, the layer budgets cap the total below
    // the compaction threshold, and levels 2 and 3 are unreachable code.
    while (
      this.recent.length > 1 &&
      countMessageTokens(this.recent) > this.config.recentBudget
    ) {
      const message = this.recent.shift()!;
      this.evicted.push(message);
      this.appendToHistory(message);
    }

    this.dropOrphanedToolResults();

    // Evicted turns are held so a later summariser can read them verbatim, but
    // that queue only drains when compaction runs — and on a typical resume it
    // never does. Capping it keeps a long session from holding every message it
    // has ever seen; the oldest are already folded into the running history.
    if (this.evicted.length > MAX_EVICTED) {
      this.evicted = this.evicted.slice(-MAX_EVICTED);
    }
  }

  addToolResult(toolCallId: string, result: string): void {
    // Tool output is the largest thing that enters the window and the least
    // worth keeping whole, so it is compressed on the way in rather than
    // waiting for compaction to notice.
    //
    // What it drops is real: strings past 120 characters and array items past
    // the third, so on an entry with eight bullets the last five diagnoses go,
    // leaving a `... 5 more` marker. Scores survive — only prose is cut. That
    // is tolerable today because the batch diagnosis holds tool results in
    // ordinary variables and never routes them through here. Revisit if the
    // conversation starts carrying whole diagnoses, and decide then whether to
    // raise the budget or keep the authoritative copy in session state.
    this.addMessage({
      role: 'tool',
      toolCallId,
      content: this.compressor.compressToolOutput(result, this.config.toolResultBudget),
    });
  }

  build(): ContextWindow {
    const systemPrompt = this.buildSystemBlock();
    const messages = this.buildMessages();

    return {
      systemPrompt,
      messages,
      tokenCount: estimateTokens(systemPrompt) + countMessageTokens(messages),
      layers: {
        system: estimateTokens(this.systemPrompt),
        profile: estimateTokens(this.profileBlock),
        task: estimateTokens(this.taskBlock),
        history: estimateTokens(this.historySummary),
        recent: countMessageTokens(this.recent),
      },
    };
  }

  /** True once the window is close enough that the next turn might not fit. */
  needsCompaction(): boolean {
    const usable = this.config.maxTotalTokens - this.config.outputReserve;
    return this.build().tokenCount > usable * 0.9;
  }

  /**
   * Escalating compaction: each level runs only if the one before it left the
   * window over budget.
   *
   * Ordered by what they cost. Re-compressing tool output is free; summarising
   * history costs a model call; compressing the task block costs a call and
   * risks losing detail about the entry under diagnosis, which is why it is
   * last.
   *
   * Runs at most `maxCompactions` times per session, and once per turn — never
   * in a `while (needsCompaction())` loop. Reaching level 3 is the end of the
   * ladder, not a guarantee: if the system prompt and profile alone overrun the
   * window, no level touches them and the window stays over budget forever.
   */
  async autoCompact(queryEngine: QueryEngine): Promise<CompactionLevel | null> {
    if (!this.needsCompaction()) return null;
    if (this.compactions >= this.config.maxCompactions) return null;
    this.compactions += 1;

    this.compressRecentToolOutputs();
    if (!this.needsCompaction()) return 1;

    this.historySummary = await this.compressor.summarizeHistory(
      this.historySummary,
      [...this.evicted, ...this.recent.slice(0, -KEEP_VERBATIM)],
      queryEngine,
    );
    this.evicted = [];
    this.recent = this.recent.slice(-KEEP_VERBATIM);
    // Level 2 shortens the window too, and by a fixed count rather than by
    // tokens — so it lands mid-exchange more readily than eviction does. Three
    // messages back from a turn that made five tool calls is three results and
    // no call to answer, which the provider refuses with a 400 naming a
    // `call_id` that appears nowhere. It went unseen because compaction had
    // never once run; the first conversation long enough to trigger it broke
    // on the next request.
    this.dropOrphanedToolResults();
    if (!this.needsCompaction()) return 2;

    // Guarded because the ladder is walked unconditionally: with no task block
    // set, summarising it spent a model call on an empty string and wrote the
    // reply back as the task, growing the window instead of shrinking it.
    if (this.taskBlock) {
      this.taskBlock = await this.compressor.summarize(
        this.taskBlock,
        this.config.taskBudget / 2,
        queryEngine,
      );
    }

    // Level 3 is the end of the ladder, not a guarantee. If the window is still
    // over budget here, the fixed layers alone do not fit and no further call
    // will help — so callers must run this once per turn, never in a
    // `while (needsCompaction())` loop.
    return 3;
  }

  getRecentMessages(): Message[] {
    return [...this.recent];
  }

  /** The counter `getStats` prints, for callers that report rather than display. */
  getCompactions(): number {
    return this.compactions;
  }

  getStats(): string {
    const window = this.build();
    const { layers } = window;
    const pct = Math.round((window.tokenCount / this.config.maxTotalTokens) * 100);
    return (
      `context ${window.tokenCount}/${this.config.maxTotalTokens} (${pct}%) · ` +
      `system ${layers.system} profile ${layers.profile} task ${layers.task} ` +
      `history ${layers.history} recent ${layers.recent}` +
      // Only once it has happened: on a one-shot diagnosis it never does, and
      // an always-zero counter is noise in the CLI footer.
      (this.compactions > 0 ? ` · compacted ${this.compactions}x` : '')
    );
  }

  private buildSystemBlock(): string {
    const parts = [this.systemPrompt];
    // Said to be from before, because it was being passed on as what the
    // candidate had said: measured, a note from an earlier session reached every
    // specialist on turn one as a supplied fact.
    if (this.profileBlock) {
      parts.push(
        `\n## From earlier sessions\nBackground only. The candidate has not said any of this in this ` +
          `conversation, so never pass it on as what they told you.\n${this.profileBlock}`,
      );
    }
    if (this.historySummary) parts.push(`\n## Already diagnosed\n${this.historySummary}`);
    return parts.join('\n');
  }

  private buildMessages(): Message[] {
    const messages: Message[] = [];

    // The task block is injected as a completed exchange rather than appended
    // to the system prompt: it changes every entry, and anything after the
    // cache breakpoint must not sit inside the cached prefix.
    if (this.taskBlock) {
      messages.push({ role: 'user', content: this.taskBlock });

      // The acknowledgement exists only to close the task block into a valid
      // user/assistant pair. When the window already opens with an assistant
      // turn — which is what eviction inside an exchange leaves behind — the
      // pair is closed by that instead, and adding this one puts two assistant
      // turns back to back. Providers reject that, and DeepSeek reports it as
      // a missing `reasoning_content`, which sends you looking elsewhere.
      if (this.recent[0]?.role !== 'assistant') {
        messages.push({ role: 'assistant', content: 'Understood. Ready for the next instruction.' });
      }
    }

    return [...messages, ...this.recent];
  }

  /**
   * A crude running note of what left the window.
   *
   * Cheap and lossy on purpose: it exists so the history layer grows, which is
   * what eventually trips compaction and replaces this accumulation with a
   * proper summary.
   */
  /**
   * A tool result whose call is no longer in the window.
   *
   * Anything that shortens `recent` can cut inside an exchange: the assistant
   * turn carrying the calls costs nothing by `countMessageTokens` — empty
   * content, uncounted calls — so it is the cheapest thing to drop and the one
   * the results depend on. Every provider rejects a result with no call, and
   * the responses API does it with a `call_id` that leads nowhere.
   *
   * Leading results are dropped rather than kept because the call cannot be
   * recovered; the answer they carry is already folded into the running
   * history by the eviction that removed it.
   */
  private dropOrphanedToolResults(): void {
    const live = new Set(
      this.recent.flatMap((m) => (m.role === 'assistant' ? (m.toolCalls ?? []).map((c) => c.id) : [])),
    );

    this.recent = this.recent.filter((message) => {
      if (message.role !== 'tool') return true;
      const kept = message.toolCallId !== undefined && live.has(message.toolCallId);
      if (!kept) this.evicted.push(message);
      return kept;
    });
  }

  private appendToHistory(message: Message): void {
    if (message.role !== 'assistant' || !message.content) return;
    this.historySummary += `\n- ${message.content.slice(0, 120)}`;

    // Nothing else bounds this. `autoCompact` replaces it with a real summary,
    // but the caller decides when that runs, so between compactions the layer
    // would grow without limit. Keep the newest lines that fit its allowance.
    if (estimateTokens(this.historySummary) > this.config.historyBudget) {
      this.historySummary = keepNewestLines(this.historySummary, this.config.historyBudget);
    }
  }

  private compressRecentToolOutputs(): void {
    const half = Math.floor(this.config.toolResultBudget / 2);
    this.recent = this.recent.map((message) =>
      message.role === 'tool'
        ? { ...message, content: this.compressor.compressToolOutput(message.content, half) }
        : message,
    );
  }
}

/** Turns kept verbatim through a level-2 compaction. */
const KEEP_VERBATIM = 3;

/** How many evicted turns stay available to the summariser in full. */
const MAX_EVICTED = 40;

/**
 * Drops from the front, unlike `Compressor.truncate`.
 *
 * The history layer is ordered oldest-first, and the oldest lines are the ones
 * furthest from the entry under diagnosis — so here the tail is what to keep.
 */
function keepNewestLines(text: string, maxTokens: number): string {
  const lines = text.split('\n');
  const kept: string[] = [];
  let total = 0;

  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i] ?? '';
    const cost = estimateTokens(line) + 1;
    if (total + cost > maxTokens) break;
    kept.unshift(line);
    total += cost;
  }

  return kept.join('\n');
}
