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

/**
 * An email address, and a phone number.
 *
 * Worth recognising by shape alone, because neither shape occurs on a resume
 * for any other reason: an `@` appears in an address and nowhere else, and a
 * run of eight digits is a phone number and not a figure anybody quotes.
 *
 * The digit count is the part that had to be measured. Counting *characters*
 * from a class of digits, spaces, parens and hyphens — which is what this did
 * — reads `COCO-2017 (100K images)` as a phone number, and `2025.06 - 2025.09`
 * as another. Counting digits, and allowing at most two characters between
 * them, leaves both alone and still reads every way a number is printed:
 * `+1 (555) 010-2468`, `+86 138 0000 0000`, `555-010-2468`.
 */
export const EMAIL = /[\w.+-]+@[\w-]+\.[\w.]+/;
export const PHONE = /\+?\d(?:[\s()-]{0,2}\d){7,}/;

/**
 * Every run of digits that could be a phone number, opening bracket included.
 *
 * Wider than `PHONE` on purpose, and never used to answer a question. Asking
 * whether a resume gives a number at all can afford to be approximate; cutting
 * a number out of a sentence cannot, so the candidates this finds are each put
 * to `isPhoneNumber` before anything is removed.
 */
const PHONE_CANDIDATE = /\+?\(?\d(?:[\s()-]{0,2}\d){7,}/g;

/**
 * Whether a run of digits is a phone number rather than a number.
 *
 * Detecting one and deleting one are different jobs and had been sharing a
 * pattern. Eight digits with something between them is a low enough bar to ask
 * "is there a number here", and far too low to cut: measured, it took
 * `2025-2026` out of an entry header, `10000000 users` out of a bullet, and
 * `Employee ID 12345678` out of a line about a system. The first of those is
 * the dates of a job, and a reader asked whether a career reads in order lost
 * them without being told.
 *
 * So a date range is left alone whatever it is made of, and what is cut has to
 * look dialled rather than counted: an international prefix, an area code in
 * brackets, three groups of digits, or ten digits in total. A round number and
 * a pair of years have none of those.
 */
function isPhoneNumber(candidate: string): boolean {
  const trimmed = candidate.trim();
  const date = DATE_RANGE.exec(trimmed);
  if (date && date[0].length === trimmed.length) return false;

  if (trimmed.startsWith('+')) return true;
  if (/\(\d{2,4}\)/.test(trimmed)) return true;
  if ((trimmed.match(/\d/g) ?? []).length >= 10) return true;
  return trimmed.split(/[\s()-]+/).filter(Boolean).length >= 3;
}

/**
 * The text with any way of reaching the candidate taken out of it.
 *
 * Applied where a resume becomes a prompt, and applied to all of it rather
 * than to the block a classifier called `contact`. Filing is a judgement and
 * this is not something to be wrong about once: an address written under a
 * heading that says `Profile` is still an address, and a section named
 * anything at all would have carried it out of the machine.
 *
 * Replaced rather than deleted, because a reader asked why a line is weak
 * should be able to tell that something stood there. What it was is not
 * needed to say anything useful about a resume.
 */
export function withoutContactDetails(text: string): string {
  return text
    .replace(new RegExp(EMAIL.source, 'g'), '[email]')
    .replace(PHONE_CANDIDATE, (match) => (isPhoneNumber(match) ? '[phone]' : match));
}

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
