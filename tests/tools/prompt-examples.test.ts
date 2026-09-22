import { describe, expect, it } from 'vitest';

import type { ResumeEntry } from '../../src/domain.js';
import { buildEntryMessage } from '../../src/tools/analyze-entry.js';
import { buildWordingMessage } from '../../src/tools/analyze-wording.js';
import { rewriteBulletTool } from '../../src/tools/rewrite-bullet.js';
import type { ToolContext } from '../../src/tools/types.js';

/**
 * Every prompt that says "return exactly this shape" is checked against its
 * own example.
 *
 * Three of them did not parse, in three different ways: two alternatives
 * written inline with an `or` between them, a range (`0-100`) where a value
 * belongs, and a trailing comma. A model copying the shape it was told to copy
 * would produce a reply nothing downstream can read — and the failure surfaces
 * as a score of zero, which reads in a report as a verdict rather than as a
 * parse that gave up.
 *
 * Checked on the prompt that actually goes out, never on the source. The two
 * differ exactly where this matters: `\"six words\"` inside a template literal
 * reads as valid JSON in the file and emits bare quotes that end the string
 * early.
 */
function example(prompt: string): unknown {
  const tail = prompt.slice(prompt.lastIndexOf('Return JSON of exactly this shape:'));
  expect(tail, 'no example found in this prompt').not.toBe('');
  return JSON.parse(tail.slice(tail.indexOf('{'), tail.lastIndexOf('}') + 1));
}

const ENTRY = {
  id: 'experience:0',
  sectionId: 'experience',
  index: 0,
  headerLines: ['A Company | Engineer | 2024'],
  span: { start: 0, end: 1 },
  bullets: [
    {
      id: 'experience:0:0',
      entryId: 'experience:0',
      index: 0,
      text: 'Reduced latency',
      span: { start: 0, end: 1 },
    },
  ],
} as unknown as ResumeEntry;

/** Captures the prompt and answers with something the tool will accept. */
function capturing(): { ctx: ToolContext; asked: string[] } {
  const asked: string[] = [];
  return {
    asked,
    ctx: {
      queryEngine: {
        async query(params: { messages: Array<{ content: string }> }) {
          asked.push(params.messages.map((m) => m.content).join('\n'));
          return {
            type: 'text',
            content: JSON.stringify({ after: 'Cut p99 latency', rationale: 'named the metric' }),
            usage: { inputTokens: 0, outputTokens: 0 },
            stopReason: 'end_turn',
          };
        },
        getUsageSummary: () => '',
        checkBudget: () => ({ ok: true }),
      },
      knowledge: { async search() { return []; } },
      abortSignal: new AbortController().signal,
    } as unknown as ToolContext,
  };
}

describe('the shape a prompt tells a model to copy', () => {
  it('is valid JSON in the entry diagnosis', () => {
    const shape = example(buildEntryMessage({ entry: ENTRY })) as {
      bullets: Array<{ overallScore: unknown; dimensions: { impact: { score: unknown } } }>;
    };

    // Numbers, not a range written where a number goes. A model that copied
    // `0-100` literally would return the string, and `typeof !== 'number'`
    // substitutes zero without saying so.
    expect(typeof shape.bullets[0]?.overallScore).toBe('number');
    expect(typeof shape.bullets[0]?.dimensions.impact.score).toBe('number');
  });

  it('is valid JSON in the wording diagnosis', () => {
    const shape = example(buildWordingMessage(ENTRY)) as {
      perBullet: Array<{ verbStrength: { score: unknown } }>;
    };

    expect(typeof shape.perBullet[0]?.verbStrength.score).toBe('number');
  });

  it('says the range in words, since the example can only hold one number', () => {
    // The zeros are placeholders and are named as such, so they are not read
    // as a scoring hint.
    for (const prompt of [buildEntryMessage({ entry: ENTRY }), buildWordingMessage(ENTRY)]) {
      expect(prompt).toContain('whole number from 0 to 100');
      expect(prompt).toContain('placeholders');
    }
  });

  it('is valid JSON in the rewrite', async () => {
    const { ctx, asked } = capturing();

    await rewriteBulletTool.execute({ bullet: 'Improved performance' }, ctx);

    expect(asked).toHaveLength(1);
    expect(example(asked[0]!)).toMatchObject({ after: expect.any(String) });
  });
});
