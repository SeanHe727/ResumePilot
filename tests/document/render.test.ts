import { describe, expect, it } from 'vitest';

import { DefaultResumeParser } from '../../src/document/index.js';
import { renderEntry, renderResume } from '../../src/document/render.js';

/** Markdown fixtures need no model to label their lines. */
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
