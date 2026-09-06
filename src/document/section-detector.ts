import type { SectionKind } from '../domain.js';
import type { ExtractionResult, SectionCandidate, SectionDetector, TextBlock } from './types.js';

/**
 * Heading vocabulary, English and Chinese.
 *
 * Order matters: the first matching pattern wins, so specific kinds precede
 * `summary`, whose words ("profile", "about") are generic enough to swallow
 * other headings.
 */
const SECTION_PATTERNS: ReadonlyArray<{ kind: SectionKind; pattern: RegExp }> = [
  {
    kind: 'experience',
    pattern:
      /^(work\s+|professional\s+|relevant\s+)?(experience|employment|work\s+history|internships?)$|^(工作|实习|职业)(经历|经验)$/i,
  },
  {
    kind: 'project',
    pattern: /^(personal\s+|selected\s+|key\s+)?projects?(\s+experience)?$|^项目(经历|经验|实践)$/i,
  },
  {
    kind: 'education',
    pattern: /^(education|academic\s+background|academics)$|^教育(背景|经历)$/i,
  },
  {
    kind: 'skills',
    pattern:
      /^(technical\s+|core\s+|key\s+)?(skills|technologies|tech\s+stack|competencies)$|^(专业)?技能$|^技术栈$/i,
  },
  {
    kind: 'summary',
    pattern: /^(summary|objective|profile|about(\s+me)?|overview)$|^(个人)?(简介|概述|自我评价)$/i,
  },
  {
    kind: 'contact',
    pattern: /^(contact(\s+info(rmation)?)?|personal\s+details)$|^(联系方式|个人信息)$/i,
  },
];

/** Longer than this and it is a sentence, not a heading. */
const MAX_HEADING_CHARS = 48;

/**
 * Finds section boundaries from layout and vocabulary alone.
 *
 * The hard case is not spotting headings — it is telling a *section* heading
 * ("Experience") from an *entry* heading ("ByteDance — Backend Intern"). Both
 * are short, bold and set larger than body text. What separates them is rank:
 * entry headings always sit a level below section headings.
 *
 * So the vocabulary anchors the scale. Whatever size "Experience" is drawn at
 * defines the section rank; anything emphasized but smaller is an entry heading
 * and is deliberately left for the structure builder to pick up.
 */
export class HeuristicSectionDetector implements SectionDetector {
  detect(result: ExtractionResult): SectionCandidate[] {
    const bodySize = medianFontSize(result.blocks);
    const sectionSize = inferSectionRank(result.blocks, bodySize);
    const candidates: SectionCandidate[] = [];

    for (const block of result.blocks) {
      const text = headingText(block);
      if (text === null) continue;

      const known = SECTION_PATTERNS.find(({ pattern }) => pattern.test(text));
      const size = block.fontSize ?? bodySize;
      const emphasized = block.bold === true || size > bodySize;

      // The candidate's own name is typically the largest thing on the page and
      // sits above everything. It is a banner, not a section, and leaving it
      // here would strand the contact details in a section called "Sean Chen".
      if (!known && size > sectionSize && block.span.start === result.blocks[0]?.span.start) {
        continue;
      }

      if (known) {
        candidates.push({
          kind: known.kind,
          heading: text,
          confidence: emphasized ? 0.98 : 0.8,
          span: block.span,
        });
        continue;
      }

      // Unrecognised label drawn at section rank: structurally a section whose
      // name we do not know. Kept as `other` so the shape of the document
      // survives, flagged low so a model-assisted pass can revisit just these.
      //
      // The size has to be *near* that rank, not merely at or above it. Whether
      // an entry heading is drawn larger or smaller than its section is a
      // choice the template makes, and it goes both ways: Markdown nests `###`
      // under `##`, while a LaTeX resume commonly sets section names in small
      // caps at body size and the employer above them in bold. Accepting
      // anything at or above the rank turns every employer into a section and
      // leaves EXPERIENCE empty.
      if (emphasized && nearSectionRank(size, sectionSize) && text.split(/\s+/).length <= 5) {
        candidates.push({ kind: 'other', heading: text, confidence: 0.45, span: block.span });
      }
    }

    // Everything above the first heading is the contact block — name, email,
    // phone, links. It is never introduced by a heading of its own.
    const first = candidates[0];
    if (result.blocks.length > 0 && (!first || first.span.start > result.blocks[0]!.span.start)) {
      candidates.unshift({
        kind: 'contact',
        heading: '',
        confidence: 0.6,
        span: { start: 0, end: first?.span.start ?? result.rawText.length },
      });
    }

    return candidates;
  }
}

/**
 * The font size at which section headings are drawn.
 *
 * Anchored on the known vocabulary when it appears. Failing that — an unusual
 * resume with no standard headings — the largest emphasized size is assumed to
 * be the candidate's name and the next size down is taken as the section rank.
 */
function inferSectionRank(blocks: TextBlock[], bodySize: number): number {
  const known = blocks.filter((b) => {
    const text = headingText(b);
    return text !== null && SECTION_PATTERNS.some(({ pattern }) => pattern.test(text));
  });

  if (known.length > 0) {
    return Math.min(...known.map((b) => b.fontSize ?? bodySize));
  }

  const emphasized = [
    ...new Set(
      blocks
        .filter((b) => b.bold === true || (b.fontSize ?? bodySize) > bodySize)
        .map((b) => b.fontSize ?? bodySize),
    ),
  ].sort((a, b) => b - a);

  return emphasized[1] ?? emphasized[0] ?? bodySize;
}

/** The cleaned heading text, or null when the block cannot be a heading at all. */
function headingText(block: TextBlock): string | null {
  const text = block.text.trim().replace(/[:：]\s*$/, '');
  if (!text || text.length > MAX_HEADING_CHARS) return null;
  if (/[.。!?！？,，;；]$/.test(text)) return null;
  if (isBulletLine(block.text)) return null;
  return text;
}

export function isBulletLine(text: string): boolean {
  return /^\s*([-*+•‧◦·▪▫●○–—]|\d{1,2}[.)])\s+/.test(text);
}

export function stripBulletMarker(text: string): string {
  return text.replace(/^\s*([-*+•‧◦·▪▫●○–—]|\d{1,2}[.)])\s+/, '').trim();
}

/**
 * Font sizes vary by fractions of a point between a heading and its body, so
 * the comparison is a band rather than an equality.
 */
function nearSectionRank(size: number, sectionSize: number): boolean {
  return size >= sectionSize * 0.98 && size <= sectionSize * 1.02;
}

function medianFontSize(blocks: TextBlock[]): number {
  const sizes = blocks
    .map((b) => b.fontSize)
    .filter((s): s is number => typeof s === 'number')
    .sort((a, b) => a - b);
  if (sizes.length === 0) return 0;
  return sizes[Math.floor(sizes.length / 2)]!;
}
