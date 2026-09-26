import { describe, expect, it } from 'vitest';

import { verifyClaimsTool } from '../../src/tools/verify-claims.js';
import type { ToolContext } from '../../src/tools/types.js';

function withReply(content: string) {
  const seen: Array<{ task: string; messages: Array<{ content: string }> }> = [];
  const ctx = {
    queryEngine: {
      async query(req: { task: string; messages: Array<{ content: string }> }) {
        seen.push(req);
        return { content };
      },
    },
  } as unknown as ToolContext;
  return { ctx, seen };
}

describe('verify_claims: claims checked without the resume', () => {
  it('sends only the questions, and reads an answer per question', async () => {
    const { ctx, seen } = withReply(
      JSON.stringify({ answers: [{ n: 1, verdict: 'no', reason: 'batching adds queueing delay' }, { n: 2, verdict: 'yes', reason: '' }] }),
    );
    const result = await verifyClaimsTool.execute(
      { questions: ['Does dynamic batching lower single-request latency?', 'Is 900 to 600 a 33% cut?'] },
      ctx,
    );

    expect(seen[0]!.task).toBe('verify_claims');
    expect(seen[0]!.messages[0]!.content).not.toContain('resume_content');
    expect(result.success && result.data.answers.map((a) => a.verdict)).toEqual(['no', 'yes']);
  });

  it('reads a missing or unknown verdict as unsure, never as yes', async () => {
    const { ctx } = withReply(JSON.stringify({ answers: [{ n: 1, verdict: 'probably' }] }));
    const result = await verifyClaimsTool.execute({ questions: ['a?', 'b?'] }, ctx);

    expect(result.success && result.data.answers.map((a) => a.verdict)).toEqual(['unsure', 'unsure']);
  });

  it('refuses an empty list and an overlong one', async () => {
    const { ctx } = withReply('{}');
    expect((await verifyClaimsTool.execute({ questions: [] }, ctx)).success).toBe(false);
    expect((await verifyClaimsTool.execute({ questions: Array(11).fill('q?') }, ctx)).success).toBe(false);
  });
});
