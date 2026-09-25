import { describe, expect, it } from 'vitest';

import { DefaultResumeParser } from '../../src/document/index.js';
import { renderEntry, renderResume } from '../../src/document/render.js';
import type { ResumeDocument } from '../../src/domain.js';

/** Parsing is all rules and geometry — no model is asked anything. */
const parse = (fixture: string) => new DefaultResumeParser().parse(`tests/fixtures/${fixture}`);

describe('how a document reaches a model', () => {
  it('addresses every entry and every line by id', async () => {
    // An entry id used to be inferable only from the bullet ids beneath it,
    // which an entry with no bullets — a degree — does not have.
    const resume = await parse('resume_example.pdf');
    const rendered = renderResume(resume);

    for (const entry of resume.sections.flatMap((s) => s.entries)) {
      expect(rendered, `entry ${entry.id} is not addressable`).toContain(`[${entry.id}]`);
      for (const bullet of entry.bullets) {
        expect(rendered, `bullet ${bullet.id} is not addressable`).toContain(`[${bullet.id}]`);
      }
    }
  });

  it('leads with a date range a session already carried', async () => {
    // Only sessions saved before the parser stopped guessing carry one. A new
    // parse keeps the header as printed rather than splitting an employer from
    // a title from a location, because the separators are a choice the
    // template made and a wrong split writes a field nobody wrote.
    const resume = await parse('resume_example.pdf');
    expect(resume.sections.flatMap((s) => s.entries).every((e) => !e.dateRange)).toBe(true);

    const legacy = { ...resume.sections[1]!.entries[0]!, dateRange: '2024.06 - 2024.09' };
    expect(renderEntry(legacy)).toContain('(2024.06 - 2024.09)');
  });

  it('carries the sections that hold lines rather than entries', async () => {
    // Skills and Summary have no entries, and the whole-document renderer
    // dropped them — so the reader comparing a resume against a posting could
    // not see the skills list it was matching against, and the one reading the
    // career story could not see the summary stating what that story is.
    const resume = await parse('resume_example.pdf');
    const rendered = renderResume(resume);
    const loose = resume.sections.filter(
      (s) => s.kind !== 'contact' && s.entries.length === 0 && s.looseLines.length > 0,
    );

    expect(loose.length, 'the fixture has no loose-line section to check').toBeGreaterThan(0);
    for (const section of loose) {
      expect(rendered, `${section.kind} was dropped`).toContain(section.looseLines[0]!);
    }
  });

  it('says when an entry has nothing for a line reader to score', async () => {
    // A coordinator reading a whole résumé dispatched a review for every entry
    // and got four refusals back, having had the answer in front of it: those
    // entries render with no lines beneath them. Absence is easy to miss and
    // costs a round trip each time; saying so costs a clause.
    const degree = {
      id: 's1:e0',
      sectionId: 's1',
      index: 0,
      organization: 'A University',
      dateRange: 'Sep 2021 - Jun 2025',
      headerLines: ['A University | B.S. in Engineering'],
      bullets: [],
      span: { start: 0, end: 1 },
    };

    expect(renderEntry(degree)).toContain('no bullets');
  });

  it('leaves the contact block out, wherever it renders from', async () => {
    const resume = await parse('resume_example.pdf');
    const contact = resume.sections.find((s) => s.kind === 'contact');
    const rendered = renderResume(resume);

    expect(contact, 'the fixture has no contact block').toBeDefined();
    for (const line of contact!.looseLines) {
      expect(rendered, 'a contact line reached the model').not.toContain(line);
    }
  });
});

describe('what an entry says about itself', () => {
  const entry = (infoLines: string[], bullets: string[]) => ({
    id: 's0:e0',
    sectionId: 's0',
    index: 0,
    headerLines: ['Agent Runtime Suite | Owner'],
    infoLines,
    bullets: bullets.map((text, i) => ({
      id: `s0:e0:b${i}`,
      entryId: 's0:e0',
      index: i,
      text,
      span: { start: 0, end: text.length },
    })),
    span: { start: 0, end: 1 },
  });

  it('shows the lines between what the entry is called and what it claims', () => {
    // A repository link, a line of technologies, a sentence of description.
    // The parse keeps these apart from the header deliberately; leaving them
    // out of what a model sees is the one place that costs a reader something.
    const rendered = renderEntry(entry(['example.com/code/agent-runtime'], ['Improved localization']));

    expect(rendered).toContain('example.com/code/agent-runtime');
    expect(rendered.indexOf('example.com/code/agent-runtime')).toBeGreaterThan(
      rendered.indexOf('Agent Runtime Suite'),
    );
    expect(rendered.indexOf('example.com/code/agent-runtime')).toBeLessThan(
      rendered.indexOf('Improved localization'),
    );
  });

  it('does not tell a reader there is nothing to go on while printing it', () => {
    const rendered = renderEntry(entry(['A resume diagnosis agent, in TypeScript.'], []));

    expect(rendered).toContain('A resume diagnosis agent');
    expect(rendered).not.toContain('no bullets');
  });

  it('still says so when the entry really is empty', () => {
    expect(renderEntry(entry([], []))).toContain('no bullets');
  });
});

describe('what stops at the boundary', () => {
  /** A contact block filed as a summary, which is where a wrong cut puts it. */
  function misfiled(): ResumeDocument {
    return {
      sourcePath: 'cv.pdf',
      format: 'pdf',
      rawText: '',
      sections: [
        {
          id: 's0',
          kind: 'summary',
          heading: 'Profile',
          entries: [],
          looseLines: [],
          infoLines: ['Jordan Lee', 'jordan.lee@example.com | +1 (555) 010-2468'],
          span: { start: 0, end: 1 },
        },
      ],
      meta: { wordCount: 8, quality: 'clean', layoutWarnings: [] },
    };
  }

  it('keeps an address and a phone number out, whatever section they were filed in', () => {
    // Dropping the section a classifier called `contact` was the whole guard,
    // and a guard a classification can switch off is not one.
    const rendered = renderResume(misfiled());

    expect(rendered).not.toContain('jordan.lee@example.com');
    expect(rendered).not.toContain('010-2468');
    expect(rendered).toContain('[email]');
    expect(rendered).toContain('[phone]');
  });

  it('keeps everything else in the section it was filed under', () => {
    const rendered = renderResume(misfiled());

    expect(rendered).toContain('Profile');
    expect(rendered).toContain('Jordan Lee');
  });

  it('keeps them out of a single entry too, which is rendered on its own', async () => {
    const entry = {
      id: 's0:e0',
      sectionId: 's0',
      index: 0,
      headerLines: ['Mobility Systems | jordan.lee@example.com'],
      infoLines: ['Reachable on +1 (555) 010-2468'],
      bullets: [
        {
          id: 's0:e0:b0',
          entryId: 's0:e0',
          index: 0,
          text: 'Built an inspection system; questions to jordan.lee@example.com',
          span: { start: 0, end: 1 },
        },
      ],
      span: { start: 0, end: 1 },
    };

    const rendered = renderEntry(entry);
    expect(rendered).not.toContain('jordan.lee@example.com');
    expect(rendered).not.toContain('010-2468');
    expect(rendered).toContain('Built an inspection system');
  });
});

describe("a section's own lines, when the parse built no entries", () => {
  /** Titles and bullets alternating, as a projects section does. */
  const raw = [
    'PROJECTS',
    'Agent Runtime Suite | Owner',
    'example.com/code/agents',
    'Improved localization 82% to 94%',
    'Research-Agent Evaluation | Contributor',
    'Built an evaluation infrastructure',
  ].join('\n');
  const at = (text: string) => ({ start: raw.indexOf(text), end: raw.indexOf(text) + text.length });

  const doc = {
    sourcePath: 'r.pdf',
    format: 'pdf',
    rawText: raw,
    meta: { wordCount: 30, quality: 'clean', layoutWarnings: [] },
    sections: [
      {
        id: 's3',
        kind: 'project',
        heading: 'PROJECTS',
        span: { start: 0, end: raw.length },
        entries: [],
        looseLines: [],
        infoLines: ['Agent Runtime Suite | Owner', 'example.com/code/agents', 'Research-Agent Evaluation | Contributor'],
        bullets: [
          { id: 's3:b0', text: 'Improved localization 82% to 94%', span: at('Improved localization 82% to 94%') },
          { id: 's3:b1', text: 'Built an evaluation infrastructure', span: at('Built an evaluation infrastructure') },
        ],
      },
    ],
  } as unknown as ResumeDocument;

  it('keeps the order the page had, so which bullet belongs to which title is readable', () => {
    // They were rendered as two blocks — every prose line, then every bullet —
    // so two titles came out followed by every bullet, and nothing could say
    // which belonged to which. That is the relationship a reader needs most,
    // because these lines only exist when the parse failed to build entries.
    const lines = renderResume(doc)
      .split('\n')
      .filter((line) => line.trim() && !line.startsWith('<') && !line.startsWith('#'));

    expect(lines).toEqual([
      'Agent Runtime Suite | Owner',
      'example.com/code/agents',
      '- [s3:b0] Improved localization 82% to 94%',
      'Research-Agent Evaluation | Contributor',
      '- [s3:b1] Built an evaluation infrastructure',
    ]);
  });

  it('gives those bullets their ids, like every other line', () => {
    // A reader that cannot name a line cannot say two of them repeat each other
    // — which is what `render.ts` says about ids, and what these lines lacked.
    expect(renderResume(doc)).toContain('[s3:b0]');
  });
});
