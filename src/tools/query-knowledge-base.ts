import { DIAGNOSIS_DIMENSIONS, type DiagnosisDimension } from '../domain.js';
import type { Tool, ToolResult } from './types.js';

interface KnowledgeQueryInput {
  query: string;
  dimension?: DiagnosisDimension;
  limit?: number;
}

/** What the model gets back — the corpus entry, flattened and annotated. */
interface KnowledgeHit {
  id: string;
  dimension: DiagnosisDimension;
  dimensionLabel: string;
  question: string;
  /** The version most people write. Usually the closest match to a real bullet. */
  weakExample: string;
  /** The version that works, with the breakdown of why. */
  strongExample: string;
  /** What separates them. */
  gap: string;
  source?: string;
  similarity: number;
  matchedBy: 'fts' | 'embedding' | 'both';
}

interface KnowledgeQueryOutput {
  hits: KnowledgeHit[];
  /** Echoed back so a caller can see whether the scope it asked for was applied. */
  scopedTo?: DiagnosisDimension;
}

const MAX_LIMIT = 5;

export const queryKnowledgeBaseTool: Tool<KnowledgeQueryInput, KnowledgeQueryOutput> = {
  name: 'query_knowledge_base',
  description:
    'Look up resume-writing rules with a weak/strong example pair and the gap between them. ' +
    'Always pass `dimension` when you know which rule you are checking — scoped lookups return the ' +
    'right entry reliably, while unscoped ones rank by topic overlap and often surface the wrong rule.',
  parameters: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'A resume bullet, or a question about resume writing',
      },
      dimension: {
        type: 'string',
        description: 'Restrict the lookup to one rule family. Strongly recommended.',
        enum: [...DIAGNOSIS_DIMENSIONS],
      },
      limit: { type: 'number', description: 'How many entries to return (1-5, default 3)' },
    },
    required: ['query'],
    additionalProperties: false,
  },

  async execute(input, ctx): Promise<ToolResult<KnowledgeQueryOutput>> {
    const query = input?.query?.trim();
    if (!query) {
      return { success: false, error: { code: 'input_error', message: 'query must not be empty' } };
    }

    const limit = clamp(input.limit ?? 3, 1, MAX_LIMIT);

    try {
      const results = await ctx.knowledge.search(query, {
        ...(input.dimension ? { dimension: input.dimension } : {}),
        limit,
      });

      return {
        success: true,
        data: {
          hits: results.map((r) => ({
            id: r.id,
            dimension: r.dimension,
            dimensionLabel: r.dimensionLabel,
            question: r.question,
            weakExample: r.weakAnswer,
            strongExample: r.strongAnswer,
            gap: r.gapAnalysis,
            ...(r.source ? { source: r.source } : {}),
            similarity: Number(r.similarity.toFixed(3)),
            matchedBy: r.matchType,
          })),
          ...(input.dimension ? { scopedTo: input.dimension } : {}),
        },
      };
    } catch (err) {
      // Retrieval failing must not take the diagnosis down: the model can still
      // judge a bullet on its own, just without a citable rule to point at.
      return {
        success: false,
        error: {
          code: 'service_error',
          message: `knowledge lookup failed: ${err instanceof Error ? err.message : String(err)}`,
        },
      };
    }
  },
};

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.round(value)));
}
