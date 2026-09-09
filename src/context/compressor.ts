import type { Message } from '../types.js';
import type { QueryEngine } from '../query-engine/types.js';

/**
 * Token estimation.
 *
 * Deliberately local and approximate. The exact count is available from
 * `countTokens`, but that is a network round trip, and this is called on every
 * message on every turn purely to decide whether compaction is due — a decision
 * that a 10% error does not change.
 *
 * CJK runs about 1.5 tokens per character against Latin's 0.25, so the two are
 * counted separately; a single ratio is wrong by 6x on a Chinese resume.
 */
export function estimateTokens(text: string): number {
  const cjk = (text.match(/[一-鿿぀-ヿ가-힯]/g) ?? []).length;
  return Math.ceil(cjk * 1.5 + (text.length - cjk) * 0.25);
}

export function countMessageTokens(messages: Message[]): number {
  return messages.reduce((sum, m) => sum + estimateTokens(m.content), 0);
}

const TRUNCATION_MARKER = '\n\n[... truncated]';

/**
 * Three ways to make text smaller, in increasing order of what they cost.
 *
 * Truncation is free and lossy at the tail. Structural compression keeps the
 * shape of a tool result while dropping its bulk. Summarising costs a model
 * call, so it is the last resort rather than the first.
 */
export class Compressor {
  /** Cuts to a token budget, leaving a marker so the gap is visible. */
  truncate(text: string, maxTokens: number): string {
    const estimated = estimateTokens(text);
    if (estimated <= maxTokens) return text;

    // The marker is part of what the caller pays for, so it comes out of the
    // budget rather than being added on top of it. On a small budget it is a
    // large fraction of the total, and adding it afterwards overshot.
    const budget = Math.max(0, maxTokens - estimateTokens(TRUNCATION_MARKER));

    // Scale by the ratio rather than counting characters: the CJK/Latin mix
    // makes tokens-per-character vary across the string.
    const ratio = budget / estimated;
    const keep = Math.max(0, Math.floor(text.length * ratio * 0.9));
    return `${text.slice(0, keep)}${TRUNCATION_MARKER}`;
  }

  /**
   * Shrinks a tool result without destroying its shape.
   *
   * A diagnosis result is a deep object whose bulk is in a few long strings and
   * repeated array items. Truncating the JSON text would cut mid-structure and
   * leave the model something it cannot parse; trimming the values instead
   * keeps every key readable.
   */
  compressToolOutput(output: string, maxTokens: number): string {
    if (estimateTokens(output) <= maxTokens) return output;

    try {
      const parsed: unknown = JSON.parse(output);
      const compressed = JSON.stringify(this.compressValue(parsed));
      // Structural compression can still overshoot on a very wide object.
      return estimateTokens(compressed) <= maxTokens
        ? compressed
        : this.truncate(compressed, maxTokens);
    } catch {
      return this.truncate(output, maxTokens);
    }
  }

  /**
   * Folds older turns into a running summary.
   *
   * Diagnosing twenty entries would otherwise accumulate twenty full exchanges,
   * and by the fifth the window is spent on transcript rather than on the entry
   * being judged. The summary is rebuilt from the previous summary plus the
   * turns being evicted, so it stays bounded however long the session runs.
   */
  async summarizeHistory(
    existing: string,
    evicted: Message[],
    queryEngine: QueryEngine,
  ): Promise<string> {
    // Tool results belong here, and used not to.
    //
    // Filtering to assistant messages threw away every lookup this session
    // made — a search result was not compressed, it was dropped, and the
    // summariser was then asked to "keep every score and figure" from prose
    // that no longer had any. The 300-character slice cut the rest before the
    // model ever saw it, so the instruction to keep figures applied to an
    // opening sentence.
    //
    // Roles are labelled because they are not the same kind of evidence: what
    // the agent concluded is its own, what it looked up is somebody else's,
    // and a summary that blurs the two invites the next turn to treat a
    // retrieved figure as a finding.
    const content = evicted
      .filter((m) => (m.role === 'assistant' || m.role === 'tool') && m.content)
      .map((m) => `${m.role === 'tool' ? 'looked up' : 'concluded'}: ${m.content.slice(0, SUMMARY_INPUT_CAP)}`)
      .join('\n')
      .slice(0, SUMMARY_INPUT_TOTAL);

    if (!content) return existing;

    const response = await queryEngine.query({
      task: 'summarize',
      systemPrompt: HISTORY_SUMMARY_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Existing summary:\n${existing || '(none)'}\n\nNew turns to fold in:\n${content}`,
        },
      ],
      maxTokens: 600,
    });

    return response.content?.trim() || existing;
  }

  /** Compresses one block to a budget. Used on the task block at level 3. */
  async summarize(text: string, maxTokens: number, queryEngine: QueryEngine): Promise<string> {
    const response = await queryEngine.query({
      task: 'summarize',
      systemPrompt: HISTORY_SUMMARY_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Compress the following to under ${maxTokens} tokens, keeping every figure and conclusion:\n\n${text}`,
        },
      ],
      maxTokens: Math.min(maxTokens, 1_000),
    });

    return response.content?.trim() || this.truncate(text, maxTokens);
  }

  private compressValue(value: unknown): unknown {
    if (typeof value === 'string') {
      return value.length > 120 ? `${value.slice(0, 120)}...` : value;
    }
    if (Array.isArray(value)) {
      // Three items convey the shape; the rest is repetition.
      const head = value.slice(0, 3).map((v) => this.compressValue(v));
      return value.length > 3 ? [...head, `... ${value.length - 3} more`] : head;
    }
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [k, this.compressValue(v)]),
      );
    }
    return value;
  }
}

/**
 * How much of one evicted message reaches the summariser.
 *
 * Wide enough that a retrieved figure survives with the condition attached to
 * it — "roughly 50% versus FP16" is useless without the "versus FP16".
 */
const SUMMARY_INPUT_CAP = 1_200;

/** And a ceiling on the whole request, so compaction cannot cost more than it saves. */
const SUMMARY_INPUT_TOTAL = 24_000;

const HISTORY_SUMMARY_PROMPT = `You compress the history of a resume diagnosis so a long session stays inside
its context window.

Keep every score, figure and conclusion, and keep what each one was measured
against — a figure without its baseline cannot be used again. Drop the
reasoning that produced them, the phrasing, and anything the next turn could
re-derive from the resume itself.

Lines marked "looked up" came from outside the document and lines marked
"concluded" are the agent's own. Keep that distinction: a retrieved figure is
evidence about the world, never a finding about this candidate.

Write bullet points. No preamble, no closing remark.`;
