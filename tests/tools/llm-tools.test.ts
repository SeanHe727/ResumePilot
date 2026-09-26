import { describe, expect, it, vi } from 'vitest';

import type { FormatDiagnosis, ResumeDocument, ResumeEntry } from '../../src/domain.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { analyzeEntryTool } from '../../src/tools/analyze-entry.js';
import { analyzeWordingTool } from '../../src/tools/analyze-wording.js';
import { generateReportTool } from '../../src/tools/generate-report.js';
import { weakLead } from '../../src/agent/orchestrator.js';
import { rewriteBulletTool } from '../../src/tools/rewrite-bullet.js';
import {
  CONTENT_PROMPT,
  WORDING_PROMPT,
  REWRITE_PROMPT,
} from '../../src/prompts/index.js';
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
    // How the bullets sit against each other is the narrative reader's now, and
    // whether the strongest one opens is arithmetic over these same scores. The
    // model used to declare it, and on this one-bullet entry it declared `true`
    // — a single line is its own strongest and it opens. Nothing checked.
    expect(weakLead(result.data!)).toBe(false);
  });

  it('takes the brackets off a wording id too', async () => {
    // The substance reader was fixed for this and this one was not, so every
    // wording score was keyed to an id matching no bullet in the document.
    const { analyzeWordingTool } = await import('../../src/tools/analyze-wording.js');
    const entry = ONE_BULLET;
    const reply = JSON.stringify({
      perBullet: [
        {
          bulletId: `[${entry.bullets[0]!.id}]`,
          verbStrength: { score: 40, detail: '' },
          concision: { score: 60, detail: '' },
          issues: [],
        },
      ],
    });
    const { ctx } = ctxWith(reply);

    const result = await analyzeWordingTool.execute({ entry } as never, ctx);

    expect((result.data as { perBullet: Array<{ bulletId: string }> }).perBullet[0]?.bulletId).toBe(
      entry.bullets[0]!.id,
    );
  });

  it('takes the brackets off an id the model echoed back', async () => {
    // Every line is shown as `- [id] text`, so a model hands the id back
    // bracketed. Nothing caught it: the diagnosis parsed, scored, and came back
    // keyed to `[s2:e0:b0]`, which matches no bullet in the document — the
    // report finds no line to attach it to and a rewrite cannot find the text
    // it is rewriting. A real run surfaced it; no unit test did.
    const bracketed = JSON.parse(goodReply) as { bullets: Array<{ bulletId: string }> };
    bracketed.bullets[0]!.bulletId = `[${bracketed.bullets[0]!.bulletId}]`;
    const { ctx } = ctxWith(JSON.stringify(bracketed));

    const result = await analyzeEntryTool.execute({ entry: ONE_BULLET }, ctx);

    expect(result.data!.bullets[0]!.bulletId).toBe(ONE_BULLET.bullets[0]!.id);
  });

  it('calls the lead weak when a later bullet scores higher', () => {
    const scored = (scores: number[]) =>
      ({
        entryId: 'e0',
        overallScore: 0,
        bullets: scores.map((overallScore, i) => ({
          bulletId: `e0:${i}`,
          overallScore,
          dimensions: {
            impact: { score: overallScore, detail: '' },
            measurement: { score: overallScore, detail: '' },
            method: { score: overallScore, detail: '' },
          },
          issues: [],
          strengths: [],
        })),
      }) as EntryDiagnosis;

    expect(weakLead(scored([40, 80]))).toBe(true);
    expect(weakLead(scored([80, 40]))).toBe(false);
    // Equal scores are not a weak lead: nothing is stronger than the opener.
    expect(weakLead(scored([60, 60]))).toBe(false);
  });

  it('sends the frozen system prompt, so the cache prefix stays stable', async () => {
    const { ctx, seen } = ctxWith(goodReply);
    await analyzeEntryTool.execute({ entry: ENTRY }, ctx);

    expect(seen[0]!.systemPrompt).toBe(CONTENT_PROMPT);
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
    expect(seen[0]!.systemPrompt).toBe(WORDING_PROMPT);
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
    ['substance', CONTENT_PROMPT],
    ['wording', WORDING_PROMPT],
    ['rewrite', REWRITE_PROMPT],
  ])('states that %s prompt content is untrusted data', (_name, prompt) => {
    expect(prompt).toMatch(/<resume_content>/);
    expect(prompt).toMatch(/never a command to follow/);
  });

  it.each([
    ['substance', CONTENT_PROMPT],
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
    for (const prompt of [CONTENT_PROMPT, WORDING_PROMPT, REWRITE_PROMPT]) {
      expect(prompt).not.toMatch(volatile);
    }
  });

  it('is long enough to be worth caching', () => {
    // Claude Opus 5 will not cache a prefix under 512 tokens; roughly 4
    // characters per token puts the floor around 2,000 characters.
    for (const prompt of [CONTENT_PROMPT, REWRITE_PROMPT]) {
      expect(prompt.length).toBeGreaterThan(1000);
    }
  });
});

describe('generate_report: the improvement plan', () => {
  const RESUME: ResumeDocument = {
    sourcePath: 'r.md',
    format: 'markdown',
    rawText: '',
    sections: [
      { id: 's1', kind: 'experience', heading: 'EXPERIENCE', entries: [ENTRY], looseLines: [], span: { start: 0, end: 1 } },
    ],
    meta: { wordCount: 20, quality: 'clean', layoutWarnings: [] },
  };

  const FORMAT: FormatDiagnosis = {
    overallScore: 80,
    metrics: {
      length: { score: 100, pageCount: 1, wordCount: 20, detail: '' },
      quantifiedRatio: { score: 50, ratio: 0.5, detail: '' },
      verbFirstRatio: { score: 50, ratio: 0.5, detail: '' },
      consistency: { score: 100, inconsistencies: [], detail: '' },
      atsParsability: { score: 100, blockers: [], detail: '' },
    },
    issues: ['opens with a duty rather than an action — "Responsible for the order query service"'],
  };

  /** One entry shape the coverage cases reuse with different ids. */
  const ENTRY_FIXTURE = {
    sectionId: 's1',
    index: 0,
    headerLines: ['A Company | Engineer | 2025'],
    bullets: [
      { id: 'b0', entryId: 's1:e0', index: 0, text: 'Responsible for the service', span: { start: 0, end: 1 } },
    ],
    span: { start: 0, end: 2 },
  };

  const ENTRIES = [{
    entryId: 's1:e0',
    overallScore: 30,
    bullets: [{
      bulletId: 's1:e0:b0',
      overallScore: 30,
      dimensions: {
        impact: { score: 20, detail: '' },
        measurement: { score: 0, detail: '' },
        method: { score: 20, detail: '' },
      },
      issues: [{ what: '"Responsible for" states a duty, not an outcome', costWords: 6 }],
      strengths: [],
    }],
  }];

  const PLAN = JSON.stringify({ chosen: [{ kind: 'immediate', findings: ['c1'], why: 'drop "Responsible for"' }] });

  /** Replies in the order given, so a test can script a retry. */
  function scriptedCtx(replies: ParsedResponse[]) {
    let call = 0;
    const seen: QueryParams[] = [];
    const engine: QueryEngine = {
      async query(params) {
        seen.push(params);
        return replies[Math.min(call++, replies.length - 1)]!;
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    };
    // The tool reads what the reviews left on the session rather than taking
    // them as arguments: a diagnosis retyped by a model is a reading of text
    // nobody wrote.
    return {
      ctx: {
        queryEngine: engine,
        session: { state: { resume: RESUME, formatDiagnosis: FORMAT, entryDiagnoses: ENTRIES } },
      } as unknown as ToolContext,
      calls: () => call,
      seen,
    };
  }

  const truncated: ParsedResponse = {
    type: 'text',
    content: '',
    usage: { inputTokens: 0, outputTokens: 0 },
    stopReason: 'max_tokens',
  };
  const answered: ParsedResponse = {
    type: 'text',
    content: PLAN,
    usage: { inputTokens: 0, outputTokens: 0 },
    stopReason: 'end_turn',
  };

  it('keeps the long form off the coordinator\'s window', async () => {
    // The write-up runs to about twice the rest of the report and the
    // coordinator has twelve thousand tokens. It is stored, not returned: the
    // coordinator relays the short form and points at the file.
    const written = {
      ...JSON.parse(PLAN),
      sections: [{ heading: 'x', points: [{ what: 'a finding', why: 'w', from: ['content'] }] }],
    };
    const { ctx } = scriptedCtx([answered, { ...answered, content: JSON.stringify(written) }]);

    const result = await generateReportTool.execute({} as never, ctx);
    const stored = (ctx as { session: { state: { latestReport?: { full?: unknown } } } }).session
      .state.latestReport;

    expect(result.data?.full, 'the long form came back through the tool result').toBeUndefined();
    expect(stored?.full, 'the long form was not kept anywhere').toBeDefined();
  });

  it('puts every reader in front of the chooser, not two of them', async () => {
    // The plan took the format check and the content reader, and only the
    // first eight of the latter. Three readers never reached it at all: the
    // wording reader raises something on almost every line, the career reading
    // knows what the dates leave unexplained, and the posting comparison knows
    // which requirements are unmet. The plan was described as choosing among
    // everything the review found.
    const { ctx, seen } = scriptedCtx([answered]);
    const state = (ctx as { session: { state: Record<string, unknown> } }).session.state;
    state.wordingDiagnoses = [
      {
        entryId: 's1:e0',
        overallScore: 40,
        perBullet: [
          {
            bulletId: 's1:e0:b0',
            verbStrength: { score: 30, detail: '' },
            concision: { score: 40, detail: '' },
            issues: ['WORDING-ONLY: three hedges in one clause'],
          },
        ],
      },
    ];
    state.narrative = {
      overallScore: 60,
      arc: '',
      gaps: ['eight months between two roles, unexplained'],
      orderingNotes: ['the newest entry is last'],
      withinEntries: [
        {
          entryId: 's1:e0',
          redundantPairs: [{ bulletA: 's1:e0:b0', bulletB: 's1:e0:b1', note: 'same result twice' }],
          coherence: { score: 40, detail: 'reads as an unordered task list' },
          weakLead: true,
        },
      ],
    };
    state.jdMatch = {
      overallScore: 50,
      covered: [],
      missing: [{ keyword: 'Kubernetes', required: true, suggestedSection: 'experience' }],
      gaps: ['the posting asks for eight years'],
    };

    await generateReportTool.execute({} as never, ctx);
    const sent = seen[0]?.messages.map((m) => m.content).join('\n') ?? '';

    // Distinct from anything the format fixture says, or this passes on a
    // string the format check happened to produce.
    expect(sent, 'wording').toContain('WORDING-ONLY: three hedges in one clause');
    expect(sent, 'dates').toContain('eight months between two roles');
    expect(sent, 'ordering').toContain('the newest entry is last');
    expect(sent, 'redundancy').toContain('same result twice');
    expect(sent, 'coherence').toContain('unordered task list');
    expect(sent, 'weak lead').toContain('strongest line is not the opening one');
    expect(sent, 'posting').toContain('Kubernetes');
    expect(sent, 'posting gaps').toContain('eight years');
  });

  it('says how much of the resume it actually read', async () => {
    // A report appeared once the format check and a single entry had been read,
    // and looked exactly like one where every reader covered everything.
    const { ctx } = scriptedCtx([answered]);
    const state = (ctx as { session: { state: Record<string, unknown> } }).session.state;
    // Two entries with bullets, one without: only two are eligible, and only
    // one of those was read.
    state.resume = {
      sections: [
        {
          id: 's1',
          kind: 'experience',
          heading: '',
          looseLines: [],
          span: { start: 0, end: 1 },
          entries: [
            { ...ENTRY_FIXTURE, id: 's1:e0' },
            { ...ENTRY_FIXTURE, id: 's1:e1' },
            { ...ENTRY_FIXTURE, id: 's1:e2', bullets: [] },
          ],
        },
      ],
    };
    state.entryDiagnoses = [{ ...ENTRIES[0]!, entryId: 's1:e0' }];
    state.wordingDiagnoses = undefined;

    const result = await generateReportTool.execute({} as never, ctx);
    const { coverage } = result.data!;

    expect(coverage.eligibleEntries).toBe(2);
    expect(coverage.notApplicableEntries).toBe(1);
    expect(coverage.contentReviewed).toBe(1);
    expect(coverage.wordingReviewed).toBe(0);
    expect(coverage.narrative).toBe('not-run');
    // Nothing was asked for, so nothing is missing.
    expect(coverage.jdMatch).toBe('no-posting');
  });

  it('tells an unscored entry apart from one scored at zero', async () => {
    // All three were zero, so a degree — a header and dates, with nothing a
    // bullet reader could score — read exactly like an entry judged worthless.
    const { ctx } = scriptedCtx([answered]);
    const state = (ctx as { session: { state: Record<string, unknown> } }).session.state;
    state.resume = {
      sections: [
        {
          id: 's1',
          kind: 'experience',
          heading: '',
          looseLines: [],
          span: { start: 0, end: 1 },
          entries: [
            { ...ENTRY_FIXTURE, id: 's1:e0' },
            { ...ENTRY_FIXTURE, id: 's1:e1' },
            { ...ENTRY_FIXTURE, id: 's1:e2', bullets: [] },
          ],
        },
      ],
    };
    state.entryDiagnoses = [{ ...ENTRIES[0]!, entryId: 's1:e0' }];

    const result = await generateReportTool.execute({} as never, ctx);
    const byId = new Map(result.data!.perEntry.map((e) => [e.entryId, e]));

    expect(byId.get('s1:e0')?.status).toBe('reviewed');
    expect(byId.get('s1:e1')?.status).toBe('not-run');
    expect(byId.get('s1:e2')?.status).toBe('not-applicable');
    // And no invented zero on either of the two that were not read.
    expect(byId.get('s1:e1')?.score).toBeUndefined();
    expect(byId.get('s1:e2')?.score).toBeUndefined();
  });

  it('does not let one dimension stand in for four', async () => {
    // Missing dimensions were filled with the substance average, so a review
    // that ran only the content reader had that score carrying 70% of the
    // weights while the report presented it as five readers agreeing.
    const { ctx } = scriptedCtx([answered]);
    const state = (ctx as { session: { state: Record<string, unknown> } }).session.state;
    state.wordingDiagnoses = undefined;
    state.narrative = undefined;
    state.jdMatch = undefined;

    const result = await generateReportTool.execute({} as never, ctx);
    const { summary } = result.data!;

    // Format 0.3 and substance 0.4, renormalised over the 0.7 that ran.
    expect(summary.overallScore).toBe(
      Math.round((summary.formatScore * 0.3 + summary.substanceAvg * 0.4) / 0.7),
    );
  });

  it('puts every finding in front of the chooser, not the first eight', async () => {
    // It used to take `issues.slice(0, 8)` in array order, which meant the
    // first entry read filled the list and the rest never appeared — a greedy
    // allocation by accident, and a silent one. Choosing among all of them is
    // the reason this call exists at all.
    const { ctx, seen } = scriptedCtx([answered]);
    const many = structuredClone(ENTRIES);
    many[0]!.bullets[0]!.issues = Array.from({ length: 12 }, (_, i) => ({
      what: `finding number ${i}`,
      costWords: i + 1,
    }));
    (ctx as { session: { state: { entryDiagnoses: unknown } } }).session.state.entryDiagnoses = many;

    await generateReportTool.execute({} as never, ctx);

    const sent = seen[0]?.messages.map((m) => m.content).join('\n') ?? '';
    expect(sent).toContain('finding number 0');
    expect(sent).toContain('finding number 11');
    // Priced and placed, so the chooser can compare across entries.
    expect(sent).toMatch(/~12 words/);
    // And told what it is spending.
    expect(sent).toMatch(/words of room|has to displace/);
  });

  it('keeps what it left out, in the readers\' words and without the selection\'s reason', async () => {
    // A list nobody can see was trimmed reads as a short list. Someone who can
    // see what was set aside can disagree with the order.
    const withSetAside: ParsedResponse = {
      ...answered,
      content: JSON.stringify({
        chosen: [],
        setAside: [{ findings: ['c1'], because: 'the page has no room left' }],
      }),
    };
    const { ctx } = scriptedCtx([withSetAside]);

    const result = await generateReportTool.execute({} as never, ctx);

    expect(result.data?.improvementPlan.setAside).toEqual([
      // In the reader's own words, about the line it named.
      { what: 's1:e0:b0: "Responsible for" states a duty, not an outcome' },
      // Not marked at all, and kept rather than dropped.
      { what: expect.stringContaining('opens with a duty') },
    ]);
  });

  it('retries when the model reasoned past writing an answer', async () => {
    // A thinking model charges reasoning against the same cap. Without the
    // retry this returns three empty lists and the report drops the plan with
    // no error raised anywhere.
    const { ctx, calls } = scriptedCtx([truncated, answered]);

    const result = await generateReportTool.execute({} as never, ctx);

    // Two for the plan — the truncated answer and its retry — then one more
    // for the write-up, which is a separate call on purpose.
    expect(calls()).toBe(3);
    expect(result.data?.improvementPlan.immediate).toEqual(['s1:e0:b0: "Responsible for" states a duty, not an outcome']);
  });

  it('does not retry an answer that merely ran long', async () => {
    // Truncated but non-empty is still an answer; retrying it buys a second
    // full-price call for content already in hand.
    const { ctx, calls } = scriptedCtx([{ ...answered, stopReason: 'max_tokens' }]);

    const result = await generateReportTool.execute({} as never, ctx);

    // One for the plan, no retry, then the write-up.
    expect(calls()).toBe(2);
    expect(result.data?.improvementPlan.immediate).toHaveLength(1);
  });
});

describe('analyze_entry: claims that need checking against the world', () => {
  const withClaims = JSON.stringify({
    bullets: [
      {
        bulletId: 's1:e0:b0',
        overallScore: 70,
        dimensions: {
          impact: { score: 70, detail: '' },
          measurement: { score: 70, detail: '' },
          method: { score: 70, detail: '' },
        },
        issues: [],
        strengths: [],
        claimsToVerify: [
          { kind: 'figure', claim: '71% peak VRAM reduction', basis: 'INT8 TensorRT', finding: 'INT8 halves a weight; the ordinary saving is ~50%' },
          { kind: 'technology', claim: 'Agent-as-Tool', basis: 'multi-agent vocabulary', finding: 'a recognised pattern name, though usually written "Agents as Tools"' },
          { kind: 'method', claim: 'KL-divergence sensitivity profiling', basis: 'layer selection for INT8', finding: 'standard practice for choosing quantisation targets' },
          { claim: '', basis: 'dropped', finding: 'no claim text' },
          'not an object',
          { claim: 'unlabelled check', basis: 'something' },
        ],
      },
    ],
  });

  it('keeps the checks the model recorded, including a null result', async () => {
    // "No published norm" is a fact about the technique, not a missing answer.
    const { ctx } = ctxWith(withClaims);

    const result = await analyzeEntryTool.execute(
      { entry: singleBulletEntry({ id: 's1:e0:b0', text: 'Reduced peak VRAM by 71% using INT8' }) },
      ctx,
    );

    const checks = result.data?.bullets[0]?.claimsToVerify ?? [];
    expect(checks).toHaveLength(4);
    expect(checks.map((c) => c.kind)).toEqual(['figure', 'technology', 'method', 'figure']);
    expect(checks[0]?.finding).toMatch(/~50%/);
    // An unlabelled check lands on `figure`: that is the axis a model reaches
    // for unprompted, so an untagged one is overwhelmingly likely to be one.
    expect(checks[3]).toEqual({ kind: 'figure', claim: 'unlabelled check', basis: 'something', finding: '' });
  });

  it('survives a model that skipped the field entirely', async () => {
    // Forgiving like the rest of this parser: a diagnosis minus one section
    // serves the user better than no diagnosis.
    const noClaims = JSON.stringify({
      bullets: [{
        bulletId: 's1:e0:b0',
        overallScore: 20,
        dimensions: {
          impact: { score: 20, detail: '' },
          measurement: { score: 0, detail: '' },
          method: { score: 10, detail: '' },
        },
        issues: ['a duty, not an outcome'],
        strengths: [],
      }],
    });
    const { ctx } = ctxWith(noClaims);

    const result = await analyzeEntryTool.execute(
      { entry: singleBulletEntry({ id: 's1:e0:b0', text: 'Responsible for the order query service' }) },
      ctx,
    );

    expect(result.success).toBe(true);
    expect(result.data?.bullets[0]?.claimsToVerify).toEqual([]);
  });

  it('names what earlier runs got wrong, as notes rather than as rules', async () => {
    // Both models scored the 71% bullet highest in its entry, twice, because
    // every number was present. Neither asked whether the number was ordinary.
    //
    // Matched against the prompt with its line wrapping flattened: these
    // sentences get rewrapped whenever the surrounding paragraph changes, and
    // a test that breaks on a reflow is testing the layout, not the rule.
    const prompt = CONTENT_PROMPT.replace(/\s+/g, ' ');

    // Whether a figure's size is ordinary for the technique behind it was a
    // notice here and was taken out deliberately: judging the technique is not
    // this reader's job. What stays is the reason a figure gets read as a
    // strength at all, and what scale counts are and are not.
    expect(prompt).toContain('A figure reads as a strength');
    expect(prompt).toContain('Repository stars');
    // Two axes, one gap: the fault this prompt is likeliest to produce.
    expect(prompt).toContain('counts one gap twice');
    // And no example carries content from anyone's actual resume: the resume
    // varies, the prompt does not.
    expect(prompt).not.toMatch(/INT8|VRAM|29k/);
    // What was checked against the world is recorded by whoever checks it, and
    // that is the searching prompt rather than this one.
    expect(prompt).not.toContain('claimsToVerify');
  });
});

describe('what the roles are told to look outward for', () => {
  it('names all three axes, not just the one it reaches for', async () => {
    // A full run under the first version produced twelve checks, of which
    // twelve were numeric. Figures are the axis a model takes unprompted, so
    // the other two are named. Making one search on each *mandatory* was the
    // fix after that and is gone: prior knowledge that settles it settles it,
    // and a search to confirm what you already know is a turn spent on nothing.
    const { ROLES } = await import('../../src/agent/roles.js');
    const prompt = (ROLES['content'].optionalPrompt ?? '').replace(/\s+/g, ' ');

    expect(prompt).toContain('technology named');
    expect(prompt).toContain('method named');
    expect(prompt).toContain("figure's size is ordinary");
    // Figures are judged, not searched: nobody has written about these numbers.
    expect(prompt).toContain("never for the candidate's own figures");
  });

  it('gives each role the axes its own judgement turns on', async () => {
    const { ROLES } = await import('../../src/agent/roles.js');
    const flat = (id: string) => (ROLES[id].optionalPrompt ?? '').replace(/\s+/g, ' ');

    // The whole-document role asks about standing, not about bullets.
    expect(flat('narrative')).toContain('Employers, programmes and institutions');
    expect(flat('narrative')).not.toContain('The figures.');
    // And the per-entry role does not ask about employer standing.
    expect(flat('content')).not.toContain('Employers, programmes');
    expect(flat('jd-match')).toContain('comparable live postings');
  });

  it('asks the loop whether it knows enough before it converges', async () => {
    // ReAct is there mechanically — reasoning carries across turns, tool
    // results come back into the window — but nothing asked "do I know enough
    // yet?", and the loop stopped at 3 of its 6 turns every single run.
    const { ROLES } = await import('../../src/agent/roles.js');

    for (const id of ['content', 'narrative', 'jd-match'] as const) {
      const prompt = (ROLES[id].optionalPrompt ?? '').replace(/\s+/g, ' ');
      expect(prompt, id).toContain('name what you still do not know');
      expect(prompt, id).toContain('you have turns left');
    }
  });
});

describe('checks the model did not actually make', () => {
  it('drops a finding that only reports what the resume left out', async () => {
    // Nothing couples this field to a tool call, so satisfying a required
    // check by writing a sentence is cheaper than making one — and 61% of a
    // real run's checks came back as some form of "the resume does not prove
    // this", which is true of every bullet ever written.
    const reply = JSON.stringify({
      bullets: [{
        bulletId: 's1:e0:b0',
        overallScore: 60,
        dimensions: {
          impact: { score: 60, detail: '' },
          measurement: { score: 60, detail: '' },
          method: { score: 60, detail: '' },
        },
        issues: [],
        strengths: [],
        claimsToVerify: [
          { kind: 'method', claim: 'role-aware routing', basis: 'implementation',
            finding: 'The approach is plausible, but the exact rules came back empty from the resume text.' },
          { kind: 'method', claim: 'assistant-only loss masking', basis: 'collator',
            finding: 'The method is specific, but the resume provides no artifact confirming which tokens received loss.' },
          { kind: 'figure', claim: '71% VRAM', basis: 'INT8',
            finding: 'INT8 halves a weight, so roughly 50% is the ordinary bit-width effect; 71% needs activation evidence.' },
          { kind: 'technology', claim: 'Agents as Tools', basis: 'multi-agent vocabulary',
            finding: 'A recognised hierarchical-delegation pattern, widely used in vendor and practitioner writing.' },
        ],
      }],
    });
    const { ctx } = ctxWith(reply);

    const result = await analyzeEntryTool.execute(
      { entry: singleBulletEntry({ id: 's1:e0:b0', text: 'Reduced peak VRAM by 71% using INT8' }) },
      ctx,
    );

    const checks = result.data?.bullets[0]?.claimsToVerify ?? [];
    // The two that describe reading the line are gone; the two that describe
    // what came back from outside it survive.
    expect(checks.map((c) => c.kind)).toEqual(['figure', 'technology']);
  });

  it('sends an empty search back to the corpus rather than to silence', async () => {
    const { ROLES } = await import('../../src/agent/roles.js');
    const prompt = (ROLES['content'].optionalPrompt ?? '').replace(/\s+/g, ' ');

    expect(prompt).toContain('that is a result, not a dead end');
    expect(prompt).toContain('put a corpus lookup to work with it');
    expect(prompt).toContain('Record only what you actually looked up');
  });
});

describe('figures the candidate supplied in conversation', () => {
  const ORIGINAL = 'Reduced context contamination by enforcing context isolation across 4 diagnostic agents';
  const WITH_FIGURES = 'Cut context contamination from 12% to 3% on held-out cases across 4 diagnostic agents';

  it('are not fabrications', () => {
    // The refine loop contradicted itself: someone reads "no figure here",
    // says what the figure was, and every rewrite carrying it was thrown out.
    expect(checkNoFabricatedNumbers(ORIGINAL, WITH_FIGURES).ok).toBe(false);
    expect(
      checkNoFabricatedNumbers(ORIGINAL, WITH_FIGURES, 'contamination went from 12% to 3%').ok,
    ).toBe(true);
  });

  it('still catch a figure nobody ever gave', () => {
    const invented = 'Cut context contamination from 12% to 3%, cutting review time 40%';

    const check = checkNoFabricatedNumbers(ORIGINAL, invented, 'contamination went from 12% to 3%');

    expect(check.ok).toBe(false);
    expect(check.figures).toEqual(['40']);
  });

  it('only reach the line they were given about', async () => {
    // A figure given about the quantisation bullet is not licence to put it
    // into the fine-tuning one, and the two sit next to each other.
    const rewrite = JSON.stringify({
      after: 'Cut context contamination from 12% to 3% across 4 diagnostic agents',
      rationale: 'uses the measured figure',
      needsInput: [],
    });
    const { engine } = fakeEngine(rewrite);
    const ctx = {
      queryEngine: engine,
      session: {
        state: {
          suppliedFacts: [{ fact: 'contamination went from 12% to 3%', bulletId: 's2:e0:b1' }],
        },
      },
    } as unknown as ToolContext;

    const mine = await rewriteBulletTool.execute({ bullet: ORIGINAL, bulletId: 's2:e0:b1' }, ctx);
    const someoneElses = await rewriteBulletTool.execute({ bullet: ORIGINAL, bulletId: 's2:e1:b0' }, ctx);
    const unscoped = await rewriteBulletTool.execute({ bullet: ORIGINAL }, ctx);

    expect(mine.success).toBe(true);
    expect(someoneElses.success).toBe(false);
    // The batch path passes no id, and widening the guard for it would let a
    // figure supplied about one line pass into any other.
    expect(unscoped.success).toBe(false);
  });
});
