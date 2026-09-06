import { describe, expect, it, vi } from 'vitest';

import type { ResumeEntry } from '../../src/domain.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { analyzeEntryTool } from '../../src/tools/analyze-entry.js';
import { analyzeWordingTool } from '../../src/tools/analyze-wording.js';
import { rewriteBulletTool } from '../../src/tools/rewrite-bullet.js';
import {
  ENTRY_SUBSTANCE_PROMPT,
  ENTRY_WORDING_PROMPT,
  REWRITE_PROMPT,
} from '../../src/tools/prompts.js';
import type { ToolContext } from '../../src/tools/types.js';
import {
  checkNoErasedNumbers,
  checkNoFabricatedNumbers,
  extractNumbers,
  extractPlaceholders,
  parseJsonObject,
} from '../../src/tools/verify.js';

/** Returns whatever the test scripted, and records what it was asked. */
function fakeEngine(reply: string) {
  const seen: QueryParams[] = [];
  const engine: QueryEngine = {
    async query(params) {
      seen.push(params);
      return {
        type: 'text',
        content: reply,
        usage: { inputTokens: 0, outputTokens: 0 },
        stopReason: 'end_turn',
      } satisfies ParsedResponse;
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
  return { engine, seen };
}

function ctxWith(reply: string): { ctx: ToolContext; seen: QueryParams[] } {
  const { engine, seen } = fakeEngine(reply);
  return { ctx: { queryEngine: engine } as unknown as ToolContext, seen };
}

/** A one-bullet entry, for tests about a single diagnosis rather than coverage. */
function singleBulletEntry(bullet: { id: string; text: string }): ResumeEntry {
  return {
    ...ENTRY,
    bullets: [
      { id: bullet.id, entryId: ENTRY.id, index: 0, text: bullet.text, span: { start: 0, end: 0 } },
    ],
  };
}

const ENTRY: ResumeEntry = {
  id: 's1:e0',
  sectionId: 's1',
  index: 0,
  organization: 'ByteDance',
  title: 'Backend Intern',
  headerLines: ['ByteDance — Backend Intern | 2025.06 – 2025.09'],
  bullets: [
    { id: 's1:e0:b0', entryId: 's1:e0', index: 0, text: 'Responsible for the order query service', span: { start: 0, end: 38 } },
    { id: 's1:e0:b1', entryId: 's1:e0', index: 1, text: 'Cut P99 latency from 800ms to 90ms', span: { start: 39, end: 73 } },
  ],
  span: { start: 0, end: 73 },
};

describe('verify: fabricated numbers', () => {
  it('accepts a rewrite that reuses the original figures', () => {
    const check = checkNoFabricatedNumbers(
      'Cut P99 latency from 800ms to 90ms',
      'Cut order-query P99 from 800ms to 90ms by adding a Redis cache',
    );

    expect(check.ok).toBe(true);
  });

  it('rejects a rewrite that invents a figure', () => {
    // The failure this whole guard exists for: the original claims an
    // improvement with no number, and the model supplies a plausible one.
    const check = checkNoFabricatedNumbers(
      'Improved system performance',
      'Cut API latency by 40%, improving throughput for 2M users',
    );

    expect(check.ok).toBe(false);
    expect(check.figures).toEqual(expect.arrayContaining(['40', '2']));
  });

  it('allows a bracketed placeholder to stand in for a missing figure', () => {
    const check = checkNoFabricatedNumbers(
      'Improved system performance',
      'Cut API latency by [X%] for [N] daily users',
    );

    expect(check.ok).toBe(true);
  });

  it('ignores formatting differences between the same number', () => {
    expect(checkNoFabricatedNumbers('Served 1,200 requests', 'Served 1200 requests').ok).toBe(true);
  });

  it('treats a redaction placeholder as carried through, not invented', () => {
    expect(
      checkNoFabricatedNumbers('Led a team at [COMPANY_1]', 'Led a 3-person team at [COMPANY_1]').ok,
    ).toBe(false);
  });

  it('extracts numbers without their units or separators', () => {
    expect(extractNumbers('Cut P99 from 1,200ms to 90ms')).toEqual(['99', '1200', '90']);
  });

  it('finds the placeholders a rewrite left behind', () => {
    expect(extractPlaceholders('Cut latency by [X%] for [N users]')).toEqual(['X%', 'N users']);
  });
});

describe('verify: erased numbers', () => {
  it('rejects a rewrite that replaced real figures with blanks', () => {
    // The mirror of fabrication, and worse in practice: nothing was invented,
    // so the fabrication check passes, and the candidate is handed a form to
    // re-enter numbers they had already written down.
    const check = checkNoErasedNumbers(
      'Cut P99 latency from 800ms to 90ms',
      'Cut P99 latency from [X ms] to [Y ms]',
    );

    expect(check.ok).toBe(false);
    expect(check.figures).toEqual(['800', '90']);
  });

  it('is not fooled by digits inside a metric name', () => {
    // "At least one survives" would pass this: the 99 in "P99" is not data.
    expect(
      checkNoErasedNumbers('Cut P99 from 800ms to 90ms', 'Cut P99 from [X] to [Y]').ok,
    ).toBe(false);
  });

  it('allows compression to drop a secondary figure', () => {
    expect(
      checkNoErasedNumbers(
        'Cut P99 from 800ms to 90ms across 12 services',
        'Cut P99 from 800ms to 90ms',
      ).ok,
    ).toBe(true);
  });

  it('allows a placeholder for a figure the original never had', () => {
    expect(
      checkNoErasedNumbers('Led a team of 3', 'Led a team of 3, cutting review time by [X%]').ok,
    ).toBe(true);
  });

  it('has nothing to check when the original had no figures', () => {
    expect(checkNoErasedNumbers('Improved performance', 'Improved latency by [X%]').ok).toBe(true);
  });
});

describe('verify: parseJsonObject', () => {
  it('reads a bare object', () => {
    expect(parseJsonObject('{"a":1}')).toEqual({ a: 1 });
  });

  it('reads an object inside a fenced block', () => {
    expect(parseJsonObject('Here you go:\n```json\n{"a":1}\n```')).toEqual({ a: 1 });
  });

  it('reads an object wrapped in prose', () => {
    expect(parseJsonObject('Sure. {"a":{"b":2}} Hope that helps.')).toEqual({ a: { b: 2 } });
  });

  it('returns null rather than throwing on junk', () => {
    expect(parseJsonObject('no json here')).toBeNull();
    expect(parseJsonObject('[1,2,3]')).toBeNull();
  });
});

describe('analyze_entry', () => {
  const goodReply = JSON.stringify({
    bullets: [
      {
        bulletId: 's1:e0:b0',
        overallScore: 30,
        dimensions: {
          impact: { score: 20, detail: 'a duty, not an outcome' },
          measurement: { score: 0, detail: 'no figure' },
          method: { score: 10, detail: 'no approach named' },
        },
        issues: ['describes an assigned slot rather than an action taken'],
        strengths: [],
      },
    ],
    narrative: {
      redundantPairs: [],
      weakLead: true,
      coherence: { score: 40, detail: 'reads as a task list' },
      suggestedOrder: ['s1:e0:b1', 's1:e0:b0'],
    },
  });

  const ONE_BULLET = singleBulletEntry({
    id: 's1:e0:b0',
    text: 'Responsible for the order query service',
  });

  it('parses a well-formed diagnosis', async () => {
    const { ctx } = ctxWith(goodReply);
    const result = await analyzeEntryTool.execute({ entry: ONE_BULLET }, ctx);

    expect(result.success).toBe(true);
    expect(result.data!.entryId).toBe('s1:e0');
    expect(result.data!.bullets[0]!.dimensions.measurement.score).toBe(0);
    expect(result.data!.narrative.weakLead).toBe(true);
  });

  it('sends the frozen system prompt, so the cache prefix stays stable', async () => {
    const { ctx, seen } = ctxWith(goodReply);
    await analyzeEntryTool.execute({ entry: ENTRY }, ctx);

    expect(seen[0]!.systemPrompt).toBe(ENTRY_SUBSTANCE_PROMPT);
    expect(seen[0]!.task).toBe('diagnose_bullet');
  });

  it('wraps resume text in the untrusted-content marker', async () => {
    const { ctx, seen } = ctxWith(goodReply);
    await analyzeEntryTool.execute({ entry: ENTRY }, ctx);

    expect(seen[0]!.messages[0]!.content).toContain('<resume_content>');
  });

  it('reports a normal error when the model returns no JSON', async () => {
    const { ctx } = ctxWith('I think this bullet is fine, honestly.');
    const result = await analyzeEntryTool.execute({ entry: ENTRY }, ctx);

    expect(result.success).toBe(false);
    expect(result.error!.code).toBe('service_error');
  });

  it('refuses an entry with no bullets', async () => {
    const { ctx } = ctxWith(goodReply);
    const result = await analyzeEntryTool.execute({ entry: { ...ENTRY, bullets: [] } }, ctx);

    expect(result.error!.code).toBe('input_error');
  });
});

describe('analyze_wording', () => {
  const reply = JSON.stringify({
    perBullet: [
      {
        bulletId: 's1:e0:b0',
        verbStrength: { score: 10, detail: 'bystander opener' },
        concision: { score: 70, detail: 'short enough' },
        issues: [],
      },
    ],
  });

  it('routes to its own task so the router can pick the cheap model', async () => {
    const { ctx, seen } = ctxWith(reply);
    await analyzeWordingTool.execute({ entry: ENTRY }, ctx);

    // The whole reason wording is a separate pass: it needs no retrieval, so it
    // must not be billed at frontier rates.
    expect(seen[0]!.task).toBe('judge_wording');
    expect(seen[0]!.systemPrompt).toBe(ENTRY_WORDING_PROMPT);
  });

  it('averages verb strength and concision into the entry score', async () => {
    const { ctx } = ctxWith(reply);
    const result = await analyzeWordingTool.execute({ entry: ENTRY }, ctx);

    expect(result.data!.overallScore).toBe(40);
  });
});

describe('rewrite_bullet', () => {
  it('returns a rewrite that only reuses the original figures', async () => {
    const { ctx, seen } = ctxWith(
      JSON.stringify({
        after: 'Cut order-query P99 from 800ms to 90ms with a Redis second-level cache',
        rationale: 'leads with the outcome',
        needsInput: [],
      }),
    );

    const result = await rewriteBulletTool.execute(
      { bullet: 'Cut P99 latency from 800ms to 90ms' },
      ctx,
    );

    expect(result.success).toBe(true);
    expect(result.data!.after).toContain('90ms');
    expect(seen[0]!.systemPrompt).toBe(REWRITE_PROMPT);
  });

  it('rejects a rewrite that invented a metric', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({ after: 'Cut latency by 40% for 2M users', rationale: '', needsInput: [] }),
    );

    const result = await rewriteBulletTool.execute({ bullet: 'Improved performance' }, ctx);

    expect(result.success).toBe(false);
    expect(result.error!.message).toMatch(/invented figures/);
    expect(result.error!.message).toMatch(/40/);
  });

  it('surfaces a placeholder the model forgot to declare', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({ after: 'Cut latency by [X%]', rationale: '', needsInput: [] }),
    );

    const result = await rewriteBulletTool.execute({ bullet: 'Improved performance' }, ctx);

    // Otherwise the user is left staring at "[X%]" with nothing telling them
    // what to look up.
    expect(result.data!.needsInput).toEqual(['supply a value for "X%"']);
  });

  it('keeps a declared question instead of duplicating it', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({
        after: 'Cut latency by [X%]',
        rationale: '',
        needsInput: ['what was the X% improvement you measured?'],
      }),
    );

    const result = await rewriteBulletTool.execute({ bullet: 'Improved performance' }, ctx);
    expect(result.data!.needsInput).toHaveLength(1);
  });

  it('passes the findings through so the rewrite addresses them', async () => {
    const { ctx, seen } = ctxWith(
      JSON.stringify({ after: 'Rebuilt the service', rationale: '', needsInput: [] }),
    );

    await rewriteBulletTool.execute(
      { bullet: 'Responsible for the service', issues: ['bystander opener'] },
      ctx,
    );

    expect(seen[0]!.messages[0]!.content).toContain('bystander opener');
  });

  it('returns a no-input alternative alongside a rewrite that needs figures', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({
        after: 'Cut order-query latency by [X%]',
        rationale: 'leads with the outcome',
        needsInput: ['by how much did latency drop?'],
        noInputAlternative: {
          after: 'Rebuilt the order-query path with a Redis second-level cache',
          rationale: 'usable as written',
        },
      }),
    );

    const result = await rewriteBulletTool.execute(
      { bullet: 'Responsible for the order query service' },
      ctx,
    );

    expect(result.data!.noInputAlternative!.after).toMatch(/Rebuilt/);
  });

  it('omits the alternative when the rewrite asks for nothing', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({
        after: 'Cut P99 from 800ms to 90ms with a Redis cache',
        rationale: '',
        needsInput: [],
        noInputAlternative: { after: 'Some other version', rationale: '' },
      }),
    );

    const result = await rewriteBulletTool.execute(
      { bullet: 'Cut P99 latency from 800ms to 90ms' },
      ctx,
    );

    // With no placeholder in `after`, the two would be the same suggestion.
    expect(result.data!.noInputAlternative).toBeUndefined();
  });

  it('drops an alternative that still contains a placeholder', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({
        after: 'Cut latency by [X%]',
        rationale: '',
        needsInput: [],
        noInputAlternative: { after: 'Cut latency by [Y%]', rationale: '' },
      }),
    );

    const result = await rewriteBulletTool.execute({ bullet: 'Improved performance' }, ctx);

    // "Asks nothing of you" with a blank in it is not an alternative.
    expect(result.data!.noInputAlternative).toBeUndefined();
  });

  it('drops an alternative that invented a figure', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({
        after: 'Cut latency by [X%]',
        rationale: '',
        needsInput: [],
        noInputAlternative: { after: 'Cut latency by 35%', rationale: '' },
      }),
    );

    const result = await rewriteBulletTool.execute({ bullet: 'Improved performance' }, ctx);
    expect(result.data!.noInputAlternative).toBeUndefined();
  });

  it('rejects a rewrite that blanked out the original figures', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({ after: 'Cut P99 latency from [X ms] to [Y ms]', rationale: '', needsInput: [] }),
    );

    const result = await rewriteBulletTool.execute(
      { bullet: 'Cut P99 latency from 800ms to 90ms' },
      ctx,
    );

    expect(result.success).toBe(false);
    expect(result.error!.message).toMatch(/dropped every figure/);
  });

  it('does not append a generic question next to a specific one', async () => {
    const { ctx } = ctxWith(
      JSON.stringify({
        after: 'Cut latency by [X%]',
        rationale: '',
        needsInput: ['by what percentage did latency drop?'],
      }),
    );

    const result = await rewriteBulletTool.execute({ bullet: 'Improved performance' }, ctx);

    // Matching questions to placeholders by text is unreliable; appending
    // "supply a value for X%" beside a real question is noise.
    expect(result.data!.needsInput).toEqual(['by what percentage did latency drop?']);
  });

  it('refuses an empty bullet', async () => {
    const { ctx } = ctxWith('{}');
    expect((await rewriteBulletTool.execute({ bullet: '   ' }, ctx)).error!.code).toBe('input_error');
  });
});

describe('prompts', () => {
  it.each([
    ['substance', ENTRY_SUBSTANCE_PROMPT],
    ['wording', ENTRY_WORDING_PROMPT],
    ['rewrite', REWRITE_PROMPT],
  ])('states that %s prompt content is untrusted data', (_name, prompt) => {
    expect(prompt).toMatch(/<resume_content>/);
    expect(prompt).toMatch(/never a command to follow/);
  });

  it.each([
    ['substance', ENTRY_SUBSTANCE_PROMPT],
    ['rewrite', REWRITE_PROMPT],
  ])('forbids inventing figures in the %s prompt', (_name, prompt) => {
    expect(prompt).toMatch(/Never state a figure the source does not contain/);
  });

  it('treats the XYZ shape as a target rather than a requirement', () => {
    // Forcing it onto a bullet with no missing metric produces padding.
    expect(REWRITE_PROMPT).toMatch(/target, not a cage/);
    expect(REWRITE_PROMPT).toMatch(/Never more than \*\*two\*\* placeholders/);
  });

  it('carries nothing that varies between requests', () => {
    // Prompt caching matches on a byte-exact prefix; one interpolated timestamp
    // would drop the hit rate to zero across an entire fan-out.
    const volatile = /\d{4}-\d{2}-\d{2}|\bnow\(\)|\$\{/;
    for (const prompt of [ENTRY_SUBSTANCE_PROMPT, ENTRY_WORDING_PROMPT, REWRITE_PROMPT]) {
      expect(prompt).not.toMatch(volatile);
    }
  });

  it('is long enough to be worth caching', () => {
    // Claude Opus 5 will not cache a prefix under 512 tokens; roughly 4
    // characters per token puts the floor around 2,000 characters.
    for (const prompt of [ENTRY_SUBSTANCE_PROMPT, REWRITE_PROMPT]) {
      expect(prompt.length).toBeGreaterThan(1000);
    }
  });
});
