import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { DIAGNOSIS_DIMENSIONS, type DiagnosisDimension } from '../domain.js';
import type { KnowledgeEntry } from './types.js';

/**
 * Human-readable label per dimension, used in retrieval output and reports.
 * The keys are the directory-and-id vocabulary from `DIAGNOSIS_DIMENSIONS`.
 */
export const DIMENSION_LABELS: Readonly<Record<DiagnosisDimension, string>> = {
  'impact-quantification': 'Impact & quantification',
  'action-verbs': 'Action verbs & voice',
  'xyz-structure': 'XYZ structure',
  'scope-ownership': 'Scope & ownership',
  'tech-specificity': 'Technical specificity',
  'project-narrative': 'Entry narrative',
  'skills-section': 'Skills section',
  'education-early-career': 'Education & early career',
  'conciseness-language': 'Concision & language',
  'format-ats': 'Format & ATS',
  'jd-alignment': 'Job-description alignment',
  'red-flags': 'Red flags',
};

/**
 * The corpus format:
 *
 * ```
 * ### Q: <the situation this entry answers>
 * > Source: <the public rule it is grounded in>
 * **Weak**: "<the version most people write>"
 * **Strong**:
 * <the version that works, plus a breakdown>
 * **Gap**: <what separates them>
 * ```
 *
 * Weak/strong/gap is a deliberate shape borrowed from the reference project: a
 * rule on its own ("quantify your impact") is advice anyone could give, while a
 * pair plus the distance between them is something a model can compare a real
 * bullet against.
 *
 * Both the English labels and the reference project's Chinese ones are accepted,
 * so corpora in either shape parse without a flag.
 */
const ENTRY_SPLIT = /(?=^#{2,3}\s*Q[：:])/m;
const QUESTION = /^#{2,3}\s*Q[：:]\s*(.+)$/m;
const SOURCE = /^>\s*(?:Source|来源)[：:]\s*(.+)$/im;
const WEAK =
  /\*\*(?:Weak|新手答)\*\*[：:]\s*([\s\S]+?)(?=\n\*\*(?:Strong|高手答)\*\*)/i;
const STRONG =
  /\*\*(?:Strong|高手答)\*\*[：:]\s*\n([\s\S]+?)(?=\n\*\*(?:Gap|差距在哪|考察点|关键差距)\*\*)/i;
const GAP =
  /\*\*(?:Gap|差距在哪|考察点|关键差距)\*\*[：:]\s*([\s\S]+?)(?=\n---|\n#{2,3}\s*Q|$)/i;

/** `01-impact-quantification.md` → `impact-quantification`. */
export function dimensionFromFilename(filename: string): DiagnosisDimension | null {
  const stem = filename.replace(/\.md$/i, '').replace(/^\d+-/, '');
  return (DIAGNOSIS_DIMENSIONS as readonly string[]).includes(stem)
    ? (stem as DiagnosisDimension)
    : null;
}

export function parseCorpusFile(content: string, dimension: DiagnosisDimension): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = [];

  for (const section of content.split(ENTRY_SPLIT)) {
    if (!QUESTION.test(section)) continue;

    const question = QUESTION.exec(section)?.[1]?.trim();
    const strong = STRONG.exec(section)?.[1]?.trim();
    // An entry without a strong version teaches nothing, so it is skipped
    // rather than stored half-formed.
    if (!question || !strong) continue;

    const source = SOURCE.exec(section)?.[1]?.trim();
    const weak = stripQuotes(WEAK.exec(section)?.[1]?.trim() ?? '');
    const gap = GAP.exec(section)?.[1]?.trim() ?? '';

    entries.push({
      id: `${dimension}:${entries.length + 1}`,
      dimension,
      dimensionLabel: DIMENSION_LABELS[dimension],
      question,
      ...(source ? { source } : {}),
      weakAnswer: weak,
      strongAnswer: strong,
      gapAnalysis: gap,
      keywords: extractKeywords(`${question} ${strong} ${gap}`),
    });
  }

  return entries;
}

export async function importAll(corpusDir: string): Promise<KnowledgeEntry[]> {
  const files = (await readdir(corpusDir)).filter((f) => f.endsWith('.md')).sort();
  const entries: KnowledgeEntry[] = [];

  for (const file of files) {
    const dimension = dimensionFromFilename(file);
    if (!dimension) {
      throw new Error(
        `"${file}" does not map to a known dimension. Expected one of: ${DIAGNOSIS_DIMENSIONS.join(', ')}`,
      );
    }
    entries.push(...parseCorpusFile(await readFile(join(corpusDir, file), 'utf-8'), dimension));
  }

  return entries;
}

/** Leading/trailing quotes of either width, plus the markdown emphasis around them. */
function stripQuotes(text: string): string {
  return text.replace(/^["'“”„「』]+/, '').replace(/["'“”„」』]+$/, '').trim();
}

/**
 * Terms worth matching on literally.
 *
 * The named rules matter most — a violation cites `harvard.no-pronouns`, and
 * the entry that explains it has to be findable by that name.
 */
const TERM_PATTERN =
  /\b(?:XYZ|STAR|ATS|Harvard|Google|FAANG|Workday|Greenhouse|Lever|iCIMS|Taleo|Sovren|Textkernel|DaXtra|P\d{2}|QPS|SLA|docx?|PDF|bystander|passive|quantif\w*|baseline|gutter|multi-column|header|footer|bullet|pronoun|verb)\b/gi;
/** The corpus is English, but a resume being diagnosed may not be. */
const CJK_TERM_PATTERN =
  /(?:量化|动词|被动|主动|旁观者|人称代词|自评|双栏|多栏|页眉|页脚|项目符号|分区|标题|叙事|冗余|基线|度量|成果)/g;

export function extractKeywords(text: string): string[] {
  const latin = text.match(TERM_PATTERN) ?? [];
  const cjk = text.match(CJK_TERM_PATTERN) ?? [];
  return [...new Set([...latin.map((t) => t.toLowerCase()), ...cjk])];
}
