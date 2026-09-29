import { describe, expect, it } from 'vitest';

import type { ResumeDocument, ResumeEntry } from '../../src/domain.js';
import { DefaultOrchestrator, SINGLE_AGENT, SubAgentRuntime } from '../../src/agent/index.js';
import { SUB_AGENT_CONTEXT } from '../../src/agent/sub-agent.js';
import { coordinatorTools, singleAgentMode } from '../../src/agent/loop.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { createToolRegistry } from '../../src/tools/index.js';
import { estimateTokens } from '../../src/context/compressor.js';

const bullet = (entryId: string, i: number, text: string) => ({
  id: `${entryId}:${i}`, entryId, index: i, text, span: { start: 0, end: text.length },
});

const job: ResumeEntry = {
  id: 'experience:0', sectionId: 'experience', index: 0, organization: 'Acme', title: 'Engineer',
  headerLines: ['Acme — Engineer | 2024 – 2025'],
  bullets: [bullet('experience:0', 0, 'Built the thing'), bullet('experience:0', 1, 'Ran the other thing')],
  span: { start: 0, end: 50 },
};
const degree: ResumeEntry = {
  id: 'education:0', sectionId: 'education', index: 0, organization: 'Uni', title: 'BSc',
  headerLines: ['Uni — BSc | 2020 – 2024'], bullets: [], span: { start: 50, end: 80 },
};
const resume: ResumeDocument = {
  sourcePath: 'r.md', format: 'markdown', rawText: '',
  sections: [
    { id: 'experience', kind: 'experience', heading: 'EXPERIENCE', entries: [job], looseLines: [], span: { start: 0, end: 50 } },
    { id: 'education', kind: 'education', heading: 'EDUCATION', entries: [degree], looseLines: [], span: { start: 50, end: 80 } },
  ],
  meta: { wordCount: 10, quality: 'clean', layoutWarnings: [] },
};

const ANSWER = {
  entries: [
    {
      entryId: '[experience:0]',
      content: {
        bullets: [
          { bulletId: 'experience:0:0', overallScore: 40, dimensions: {}, issues: [{ axis: 'impact', kind: 'missing', what: 'no result', why: 'w', fix: 'f', costWords: 3 }], strengths: [] },
          { bulletId: 'experience:0:1', overallScore: 60, dimensions: {}, issues: [], strengths: [] },
        ],
      },
      claims: { errors: [{ bulletId: 'experience:0:1', axis: 'measurement', what: 'does not add up', why: 'w', fix: 'f' }] },
      wording: { perBullet: [{ bulletId: '[experience:0:0]', verbStrength: { score: 50, detail: '' }, concision: { score: 70, detail: '' }, issues: [] }] },
    },
  ],
  narrative: { overallScore: 70, arc: 'one career', gaps: [], orderingNotes: ['Keep Education last', 'Move Education up'], withinEntries: [] },
  consistency: { conflicts: ['a against b'], unsupportedSkills: [], misspellings: ['Pyhton in skills'] },
};

function orchestratorReplying(reply: ParsedResponse) {
  const seen: QueryParams[] = [];
  const engine: QueryEngine = {
    async query(params) { seen.push(params); return reply; },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
  const runtime = new SubAgentRuntime({
    queryEngine: engine,
    toolRegistry: createToolRegistry(),
    knowledge: { async search() { return []; } } as never,
    session: new SqliteSessionManager().create({ sourcePath: 'r.md' }),
  });
  return { orchestrator: new DefaultOrchestrator(runtime), seen };
}

const text = (content: string): ParsedResponse => ({
  type: 'text', content, usage: { inputTokens: 10, outputTokens: 20 }, stopReason: 'end_turn',
});

describe('single-agent ablation', () => {
  it('is off unless asked for, and then swaps the split reviews for one', () => {
    expect(singleAgentMode({})).toBe(false);
    expect(coordinatorTools({})).toContain('review_content');
    expect(coordinatorTools({})).not.toContain('review_resume');

    const tools = coordinatorTools({ RESUMEPILOT_SINGLE_AGENT: '1' });
    expect(tools).toContain('review_resume');
    for (const gone of ['review_content', 'review_wording', 'review_narrative']) expect(tools).not.toContain(gone);
    // Everything downstream of the reviews is still there.
    for (const kept of ['review_format', 'generate_report', 'review_jd_match']) expect(tools).toContain(kept);
  });

  it('keeps its merged prompt whole', () => {
    // Truncation reports nothing, and what falls off is the answer section.
    const budget = SINGLE_AGENT.context?.systemPromptBudget ?? SUB_AGENT_CONTEXT.systemPromptBudget;
    expect(estimateTokens(`${SINGLE_AGENT.systemPrompt}\n\n${SINGLE_AGENT.optionalPrompt}`)).toBeLessThan(budget);
    expect(SINGLE_AGENT.tools).toEqual(expect.arrayContaining(['query_knowledge_base', 'verify_claims', 'examine_technical_depth']));
  });

  it('splits one answer into what each specialist would have returned', async () => {
    const { orchestrator, seen } = orchestratorReplying(text(JSON.stringify(ANSWER)));

    const review = await orchestrator.reviewWhole(resume);

    // One agent, one call, the whole résumé in front of it.
    expect(seen).toHaveLength(1);
    const sent = seen[0]!.messages.map((m) => m.content).join('\n');
    expect(sent).toContain('Built the thing');
    expect(sent).toContain('Uni');
    expect(sent).toContain('[experience:0]');

    const verdict = review.verdicts.find((v) => v.entryId === 'experience:0')!;
    expect(verdict.substance?.bullets).toHaveLength(2);
    // The claim error joins the content reading, first among its issues.
    const second = verdict.substance?.bullets.find((b) => b.bulletId === 'experience:0:1');
    expect(second?.issues[0]).toMatchObject({ what: 'does not add up', kind: 'wrong' });
    expect(verdict.wording?.perBullet[0]?.bulletId).toBe('experience:0:0');

    // The degree has no lines, as on the multi-agent path.
    expect(review.verdicts.find((v) => v.entryId === 'education:0')?.substance).toBeNull();

    expect(review.narrative?.arc).toBe('one career');
    expect(review.narrative?.orderingNotes).toEqual(['Move Education up']);
    expect(review.narrative?.conflicts).toEqual(['a against b']);
    expect(review.narrative?.misspellings).toEqual(['Pyhton in skills']);
    expect(review.stat.success).toBe(true);
  });

  it('says why an entry it skipped has no reading', async () => {
    const { orchestrator } = orchestratorReplying(text(JSON.stringify({ ...ANSWER, entries: [] })));

    const review = await orchestrator.reviewWhole(resume);

    expect(review.verdicts.find((v) => v.entryId === 'experience:0')?.substance).toBeNull();
    expect(orchestrator.failures.get('content:experience:0')).toMatch(/no content reading/);
  });
});
