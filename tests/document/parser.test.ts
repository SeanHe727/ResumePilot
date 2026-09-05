import { describe, expect, it } from 'vitest';

import { extractFromText } from '../../src/document/extractors/markdown.js';
import { HeuristicSectionDetector, isBulletLine } from '../../src/document/section-detector.js';
import { HeuristicStructureBuilder, countWords } from '../../src/document/structure-builder.js';
import { DefaultResumeParser, UnsupportedFormatError } from '../../src/document/parser.js';
import type { ResumeDocument } from '../../src/domain.js';

function parse(markdown: string): ResumeDocument {
  const extracted = extractFromText(markdown, 'markdown');
  const sections = new HeuristicSectionDetector().detect(extracted);
  return new HeuristicStructureBuilder().build(extracted, sections, 'test.md');
}

const RESUME = `# Sean Chen

sean@example.com · Shanghai

## Experience

### ByteDance — Backend Engineer Intern | Shanghai | 2025.06 – 2025.09

- Responsible for the order query service
- Reduced P99 latency from 800ms to 90ms

### Tencent — SWE Intern | Shenzhen | 2024.06 – 2024.09

- Built an internal log tool

## Skills

Languages: TypeScript, Python
`;

describe('section detection', () => {
  it('recognises the standard heading vocabulary', () => {
    const doc = parse(RESUME);

    expect(doc.sections.map((s) => s.kind)).toEqual(['contact', 'experience', 'skills']);
  });

  it('keeps the candidate name in the contact block rather than making it a section', () => {
    // The name is the largest text on the page, which naively reads as a
    // heading — but a section called "Sean Chen" would orphan the contact line.
    const doc = parse(RESUME);
    const contact = doc.sections[0]!;

    expect(contact.kind).toBe('contact');
    expect(contact.looseLines).toContain('Sean Chen');
    expect(contact.looseLines.some((l) => l.includes('sean@example.com'))).toBe(true);
  });

  it('treats a smaller emphasized heading as an entry, not a section', () => {
    // `### ByteDance …` is bold and larger than body text, exactly like a
    // section heading. Only its rank distinguishes them.
    const doc = parse(RESUME);

    expect(doc.sections.map((s) => s.kind)).not.toContain('other');
    expect(doc.sections[1]!.entries).toHaveLength(2);
  });

  it('reads Chinese headings', () => {
    const doc = parse('## 工作经历\n\n- 做了一些事\n\n## 专业技能\n\nPython\n');

    expect(doc.sections.map((s) => s.kind)).toEqual(['experience', 'skills']);
  });

  it('recognises a fully bold line as a heading without any # marker', () => {
    const doc = parse('**Experience**\n\n- Did a thing\n');

    expect(doc.sections[0]!.kind).toBe('experience');
  });

  it('flags an unknown section rather than dropping its content', () => {
    const doc = parse('## Experience\n\n- a\n\n## Publications\n\n- Some paper\n');
    const unknown = doc.sections.find((s) => s.heading === 'Publications');

    expect(unknown?.kind).toBe('other');
  });
});

describe('entry and bullet structure', () => {
  const doc = parse(RESUME);
  const experience = doc.sections.find((s) => s.kind === 'experience')!;

  it('splits a section into one entry per position', () => {
    expect(experience.entries.map((e) => e.organization)).toEqual(['ByteDance', 'Tencent']);
  });

  it('attaches bullets to the entry above them', () => {
    expect(experience.entries[0]!.bullets.map((b) => b.text)).toEqual([
      'Responsible for the order query service',
      'Reduced P99 latency from 800ms to 90ms',
    ]);
    expect(experience.entries[1]!.bullets).toHaveLength(1);
  });

  it('gives every bullet an id that traces back to its entry and section', () => {
    const bullet = experience.entries[0]!.bullets[0]!;

    expect(bullet.entryId).toBe(experience.entries[0]!.id);
    expect(bullet.id.startsWith(bullet.entryId)).toBe(true);
  });

  it('records source offsets so a diagnosis can quote the original line', () => {
    const bullet = experience.entries[0]!.bullets[0]!;

    expect(RESUME.slice(bullet.span.start, bullet.span.end)).toContain(
      'Responsible for the order query service',
    );
  });

  it('keeps the header text verbatim even when fields are parsed out', () => {
    expect(experience.entries[0]!.headerLines[0]).toContain('ByteDance');
  });

  it('puts prose sections in looseLines rather than inventing an entry', () => {
    const skills = doc.sections.find((s) => s.kind === 'skills')!;

    expect(skills.entries).toHaveLength(0);
    expect(skills.looseLines).toEqual(['Languages: TypeScript, Python']);
  });
});

describe('entry header parsing', () => {
  it.each([
    ['2025.06 – 2025.09', '2025.06 – 2025.09'],
    ['Jun 2024 - Sep 2024', 'Jun 2024 - Sep 2024'],
    ['2026.09 – Present', '2026.09 – Present'],
    ['2021 – 2025', '2021 – 2025'],
    ['2024年6月 至今', '2024年6月 至今'],
  ])('captures the full range %s', (range, expected) => {
    const doc = parse(`## Experience\n\n### Acme | ${range}\n\n- did a thing\n`);

    expect(doc.sections[0]!.entries[0]!.dateRange).toBe(expected);
  });

  it('does not truncate a range whose end carries a month', () => {
    // Written asymmetrically the pattern still matches, just short — yielding
    // "2025.06 – 2025" and silently losing September.
    const doc = parse('## Experience\n\n### Acme | 2025.06 – 2025.09\n\n- x\n');

    expect(doc.sections[0]!.entries[0]!.dateRange).not.toBe('2025.06 – 2025');
  });

  it('splits organisation, title and location off the header', () => {
    const doc = parse(
      '## Experience\n\n### ByteDance — Backend Intern | Shanghai | 2025.06 – 2025.09\n\n- x\n',
    );
    const entry = doc.sections[0]!.entries[0]!;

    expect(entry.organization).toBe('ByteDance');
    expect(entry.title).toBe('Backend Intern');
    expect(entry.location).toBe('Shanghai');
  });

  it('leaves fields undefined rather than guessing when the header is bare', () => {
    const doc = parse('## Experience\n\n### Some Project\n\n- x\n');
    const entry = doc.sections[0]!.entries[0]!;

    expect(entry.organization).toBe('Some Project');
    expect(entry.title).toBeUndefined();
    expect(entry.dateRange).toBeUndefined();
  });
});

describe('extraction details', () => {
  it('ignores fenced code blocks', () => {
    const doc = parse('## Skills\n\n```\nnot resume content\n```\n\nPython\n');

    expect(doc.sections[0]!.looseLines).toEqual(['Python']);
  });

  it('warns about table markup, which ATS parsers commonly mangle', () => {
    const doc = parse('## Skills\n\n| a | b |\n| - | - |\n');

    expect(doc.meta.layoutWarnings.some((w) => w.includes('table'))).toBe(true);
  });

  it('warns when a file yields no text at all', () => {
    expect(extractFromText('   \n\n  \n', 'markdown').layoutWarnings).toContain(
      'no readable text found',
    );
  });

  it('rates a clean text source as clean', () => {
    expect(parse(RESUME).meta.quality).toBe('clean');
  });

  it('downgrades a source carrying layout warnings to degraded', () => {
    expect(parse('## Skills\n\n| a | b |\n| - | - |\n').meta.quality).toBe('degraded');
  });
});

describe('helpers', () => {
  it.each(['- item', '* item', '• item', '1. item', '2) item', '  ◦ item'])(
    'treats %s as a bullet',
    (line) => expect(isBulletLine(line)).toBe(true),
  );

  it.each(['Experience', '2025.06 – 2025.09', 'Languages: TypeScript'])(
    'does not treat %s as a bullet',
    (line) => expect(isBulletLine(line)).toBe(false),
  );

  it('counts CJK characters individually and Latin by word', () => {
    expect(countWords('hello world')).toBe(2);
    expect(countWords('简历诊断')).toBe(4);
    expect(countWords('用 TypeScript 写')).toBe(3);
  });
});

describe('DefaultResumeParser', () => {
  it('parses a markdown file end to end', async () => {
    const doc = await new DefaultResumeParser().parse('tests/fixtures/sample-resume.md');

    expect(doc.sections.map((s) => s.kind)).toEqual([
      'contact',
      'summary',
      'experience',
      'project',
      'education',
      'skills',
    ]);
    expect(doc.sections.flatMap((s) => s.entries).flatMap((e) => e.bullets)).toHaveLength(8);
  });

  it('names the supported formats when it cannot handle a file', async () => {
    await expect(new DefaultResumeParser().parse('resume.pages')).rejects.toThrow(
      UnsupportedFormatError,
    );
  });

  it.each(['resume.md', 'resume.pdf', 'resume.docx'])('accepts %s', async (path) => {
    // Reaching the filesystem means an extractor claimed it; only the missing
    // file stops it here.
    await expect(new DefaultResumeParser().parse(path)).rejects.not.toThrow(
      UnsupportedFormatError,
    );
  });
});
