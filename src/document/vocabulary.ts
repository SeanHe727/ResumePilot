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

/**
 * `2025.06 – 2025.09`, `Jun 2024 – Sep 2024`, `2023 – Present`, `2024年6月至今`.
 *
 * A date range is the single most reliable marker that a line opens a new
 * position: bullets describe the work, headers say where and when it happened.
 *
 * Both ends use the same sub-pattern deliberately. Written asymmetrically — a
 * month allowed on the start but not the end — it still matches, just short,
 * swallowing `2025.06 – 2025` and silently dropping the closing month.
 */
const MONTH_NAME = '(?:jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*';
const DATE_POINT = `(?:${MONTH_NAME}\\.?\\s+)?(?:19|20)\\d{2}(?:\\s*[.\\-/年]\\s*\\d{1,2}\\s*月?)?`;
const OPEN_ENDED = 'present|now|current|ongoing|至今|现在';
/**
 * The separator is optional so that `至` can serve both roles it has in
 * Chinese: a range separator in `2024年6月至2025年3月`, and the first character
 * of `至今`. Required, it would consume the `至` of `至今` and then fail on the
 * dangling `今`; optional, the engine backtracks and matches `至今` whole.
 */
/**
 * Words a resume puts in front of an end date it has not reached yet.
 *
 * `Sep 2025 - Expected Jun 2027` is how a degree in progress is written, and
 * without this the range matched nothing at all: the qualifier sits exactly
 * where the closing date was expected, so the engine gave up rather than
 * matching short. Measured on two resumes, both of which have one.
 */
const QUALIFIER = '(?:expected|anticipated|estimated|预计)\\s+';

export const DATE_RANGE = new RegExp(
  `(${DATE_POINT})\\s*(?:[-–—~至到]+\\s*)?(?:${QUALIFIER})?(${DATE_POINT}|${OPEN_ENDED})`,
  'i',
);
