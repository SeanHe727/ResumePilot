/**
 * What a heading and a bullet look like, in words rather than in layout.
 *
 * Shared, because the same knowledge is wanted at two different altitudes: a
 * boundary pass asks whether a row *looks like* a section heading, and a later
 * pass asks what kind of section it opens. Splitting the vocabulary between
 * them would let the two drift apart, and a heading recognised by one and not
 * the other is the worst of both.
 */
import type { SectionKind } from '../domain.js';

/**
 * Heading vocabulary, English and Chinese.
 *
 * Order matters: the first matching pattern wins, so specific kinds precede
 * `summary`, whose words ("profile", "about") are generic enough to swallow
 * other headings.
 */
export const SECTION_PATTERNS: ReadonlyArray<{ kind: SectionKind; pattern: RegExp }> = [
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

export function isBulletLine(text: string): boolean {
  return /^\s*([-*+•‧◦·▪▫●○–—]|\d{1,2}[.)])\s+/.test(text);
}

export function stripBulletMarker(text: string): string {
  return text.replace(/^\s*([-*+•‧◦·▪▫●○–—]|\d{1,2}[.)])\s+/, '').trim();
}
