import { segmenterPrompt } from '../prompts/index.js';
import type { SectionKind } from '../domain.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { DocumentSegmenter, ExtractionResult, LabelledLine, LineRole } from './types.js';

const ROLES: readonly LineRole[] = [
  'section-heading',
  'entry-header',
  'bullet',
  'continuation',
  'loose',
];

const KINDS: readonly SectionKind[] = [
  'contact',
  'summary',
  'experience',
  'project',
  'education',
  'skills',
  'other',
];

const PROMPT = segmenterPrompt(KINDS);

/**
 * Beyond this a resume is not a resume, and sending it would cost more than
 * the rules would.
 */
const MAX_LINES = 400;


/**
 * The model decides what each line is; the text still comes from the extractor.
 *
 * That split is the point. The model never returns resume text — only a role
 * per line number — so a paraphrase cannot reach the diagnosis, and the bullets
 * a candidate is judged on are the bullets they wrote.
 */
export class ModelDocumentSegmenter implements DocumentSegmenter {
  constructor(private readonly queryEngine: QueryEngine) {}

  async segment(result: ExtractionResult): Promise<LabelledLine[] | null> {
    const { blocks } = result;
    if (blocks.length === 0 || blocks.length > MAX_LINES) return null;

    const body = blocks
      .map((block, index) => {
        const size = block.fontSize === undefined ? '' : ` [size ${block.fontSize.toFixed(1)}]`;
        return `${index}${size}: ${block.text}`;
      })
      .join('\n');

    let response;
    try {
      response = await this.queryEngine.query({
        task: 'split_sections',
        systemPrompt: PROMPT,
        messages: [{ role: 'user', content: `<resume_lines>\n${body}\n</resume_lines>` }],
        jsonMode: true,
      });
    } catch {
      // Retries already happened inside the engine. Reaching here means the
      // call is not going to work, and the rules are a working answer.
      return null;
    }

    return parseLabels(response.content ?? '', blocks.length);
  }
}

/**
 * Strict about the shape, because a partial labelling is worse than none.
 *
 * A missing line is a line with no role, and the builder would have to guess —
 * which is the rules, applied to a document they were not asked about, mixed
 * with labels they know nothing of.
 */
function parseLabels(content: string, expected: number): LabelledLine[] | null {
  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch {
    return null;
  }

  const rows = (parsed as { lines?: unknown })?.lines;
  if (!Array.isArray(rows) || rows.length !== expected) return null;

  const labels: LabelledLine[] = [];
  const seen = new Set<number>();

  for (const row of rows as Array<Record<string, unknown>>) {
    const index = typeof row.index === 'number' ? row.index : NaN;
    const role = row.role as LineRole;

    if (!Number.isInteger(index) || index < 0 || index >= expected) return null;
    if (seen.has(index) || !ROLES.includes(role)) return null;
    seen.add(index);

    const kind = row.kind as SectionKind | undefined;
    labels.push({
      index,
      role,
      ...(role === 'section-heading' && kind && KINDS.includes(kind) ? { kind } : {}),
      ...(role === 'entry-header' && row.startsEntry === true ? { startsEntry: true } : {}),
    });
  }

  return labels.sort((a, b) => a.index - b.index);
}
