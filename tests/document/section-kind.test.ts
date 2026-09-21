import { describe, expect, it } from 'vitest';

import { DefaultResumeParser } from '../../src/document/index.js';
import { classifySection } from '../../src/document/section-kind.js';
import type { ResumeSection, SectionBullet } from '../../src/domain.js';

/**
 * B4: what a section is, from the assembled section and nothing else.
 *
 * Built from sections written out by hand, because the point is that this
 * reads a shape rather than a page. Nothing here has rows, font sizes or
 * indents to offer, which is the guarantee: a classifier that cannot see them
 * cannot move a bullet however wrong it thinks the shape is.
 */
function section(over: Partial<ResumeSection> = {}): ResumeSection {
  return {
    id: 's0',
    kind: 'other',
    heading: '',
    entries: [],
    looseLines: [],
    infoLines: [],
    span: { start: 0, end: 1 },
    ...over,
  };
}

function entry(headerLines: string[], bullets: string[] = [], infoLines: string[] = []) {
  return {
    id: 's0:e0',
    sectionId: 's0',
    index: 0,
    headerLines,
    infoLines,
    bullets: bullets.map((text, i) => ({
      id: `s0:e0:b${i}`,
      entryId: 's0:e0',
      index: i,
      text,
      span: { start: 0, end: text.length },
    })),
    span: { start: 0, end: 1 },
  };
}

function sectionBullets(texts: string[]): SectionBullet[] {
  return texts.map((text, i) => ({
    id: `s0:b${i}`,
    sectionId: 's0',
    index: i,
    text,
    span: { start: 0, end: text.length },
  }));
}

const kindOf = (over: Partial<ResumeSection>) => classifySection(section(over)).kind;

describe('reading a section by its shape', () => {
  it('reads entries with bullets under them as work', () => {
    expect(
      kindOf({
        heading: 'Experience',
        entries: [entry(['Mobility Systems Company  2024 - 2025'], ['Built an inspection system'])],
      }),
    ).toBe('experience');
  });

  it('reads dated entries with no bullets as education', () => {
    expect(
      kindOf({
        heading: 'Education',
        entries: [entry(['Western State University', 'M.S. in Computer Engineering  2025 - 2027'])],
      }),
    ).toBe('education');
  });

  it('reads a list with no entries as skills', () => {
    expect(
      kindOf({ heading: 'Skills', infoLines: ['Languages: TypeScript, Python, Go'] }),
    ).toBe('skills');
  });

  it('reads prose with no entries as a summary', () => {
    expect(
      kindOf({
        heading: 'Summary',
        infoLines: ['Backend engineer moving into agent infrastructure.'],
      }),
    ).toBe('summary');
  });

  it('reads a block nobody introduced as the contact block', () => {
    const { kind, classification } = classifySection(
      section({ infoLines: ['Jordan Lee', 'jordan.lee@example.com | +1 (555) 010-2468'] }),
    );

    expect(kind).toBe('contact');
    // No heading is not the same as a heading nobody knows.
    expect(classification.headingUnknown).toBe(false);
  });

  it('reads a section carrying its own bullets by what those bullets say', () => {
    expect(
      kindOf({
        heading: 'Skills',
        bullets: sectionBullets(['Languages: TypeScript, Python, Go']),
      }),
    ).toBe('skills');
  });
});

describe('when the shape and the heading disagree', () => {
  it('files a section as the candidate named it, and records the disagreement', () => {
    // Called EXPERIENCE, and holding a labelled line of languages. People are
    // more consistent about what they call a section than about how they set
    // one, and only `contact` decides anything downstream — which is settled
    // by a block having no heading at all, not by the vocabulary. So the
    // heading is followed, and what the shape wanted is written down.
    const { kind, classification } = classifySection(
      section({ heading: 'EXPERIENCE', infoLines: ['Languages: TypeScript, Python, Go'] }),
    );

    expect(kind).toBe('experience');
    expect(classification.confidence).toBe(0);
    expect(classification.runnerUp).toEqual({ kind: 'skills', score: 4 });
  });

  it('leaves the shape to decide where the vocabulary knows nothing', () => {
    // `Leadership` is not a word the vocabulary has, so nothing overrules the
    // three dated entries with bullets under them.
    const { kind, classification } = classifySection(
      section({
        heading: 'Leadership',
        entries: [
          entry(['Student Council, Tongji University  2021 - 2023'], ['Ran the society for two years']),
        ],
      }),
    );

    expect(kind).toBe('experience');
    expect(classification.headingUnknown).toBe(true);
  });

  it('keeps a recognised heading that only one shape signal argues with', () => {
    // One signal is not enough. `PROJECTS` whose entries are listed without
    // bullets is still projects, not education.
    expect(
      kindOf({
        heading: 'PROJECTS',
        entries: [entry(['Agent Runtime Suite  2024 - 2025'])],
      }),
    ).toBe('project');
  });
});

describe('what the classification says about itself', () => {
  it('records an unrecognised heading apart from the kind it gave the section', () => {
    // These used to be one value. A section nobody could name still has a
    // shape, and reading it as prose because of its name dropped its bullets
    // where nothing downstream looks.
    const { kind, classification } = classifySection(
      section({
        heading: 'What I Have Built',
        entries: [entry(['Agent Runtime Suite  2024 - 2025'], ['Improved localization to 94%'])],
      }),
    );

    expect(kind).toBe('experience');
    expect(classification.headingUnknown).toBe(true);
  });

  it('reports the margin over the runner-up, not a score out of anything', () => {
    const { classification } = classifySection(
      section({
        heading: 'Projects',
        entries: [entry(['Agent Runtime Suite'], ['Improved localization to 94%'])],
        infoLines: [],
      }),
    );

    expect(classification.runnerUp?.kind).toBe('experience');
    expect(classification.confidence).toBeGreaterThan(0);
  });

  it('says nothing was there to weigh, rather than guessing', () => {
    // A heading with nothing under it. The integrity pass has its own name for
    // that; naming it a kind here would be inventing a shape it does not have.
    const { kind, classification } = classifySection(section({ heading: 'Addenda' }));

    expect(kind).toBe('other');
    expect(classification.confidence).toBe(0);
    expect(classification.evidence).toEqual([]);
    expect(classification.headingUnknown).toBe(true);
  });

  it('names what it saw, in the words a reader of the findings would want', () => {
    const { classification } = classifySection(
      section({
        heading: 'Education',
        entries: [entry(['Western State University', 'M.S. in Computer Engineering  2025 - 2027'])],
      }),
    );

    expect(classification.evidence).toEqual([
      'called "Education"',
      '1 entries with dates and no bullets',
      'names a degree',
    ]);
  });
});

describe('the sections a PDF actually produces', () => {
  it('names every section of a real page', async () => {
    const doc = await new DefaultResumeParser().parse('tests/fixtures/resume_example.pdf');

    expect(doc.sections.map((s) => s.kind)).toEqual([
      'contact',
      'education',
      'experience',
      'project',
      'skills',
    ]);
  });

  it('settles every one of them by a margin rather than a coin toss', async () => {
    const doc = await new DefaultResumeParser().parse('tests/fixtures/resume_example.pdf');

    for (const s of doc.sections) {
      expect(s.classification!.confidence, `${s.kind} was a tie`).toBeGreaterThan(0);
    }
  });

  it('recognises every heading on a resume that uses the usual words', async () => {
    const doc = await new DefaultResumeParser().parse('tests/fixtures/resume_example.pdf');

    expect(doc.sections.every((s) => !s.classification!.headingUnknown)).toBe(true);
  });

  it('flags a heading outside the vocabulary without misreading the section', async () => {
    const doc = await new DefaultResumeParser().parse('tests/fixtures/messy-resume.pdf');
    const unusual = doc.sections.find((s) => s.classification!.headingUnknown)!;

    expect(unusual.heading).toBe('What I Have Done');
    expect(unusual.kind).toBe('experience');
    expect(unusual.entries.length).toBeGreaterThan(0);
  });
});
