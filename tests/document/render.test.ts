import { describe, expect, it } from 'vitest';

import { DefaultResumeParser } from '../../src/document/index.js';
import { renderEntry, renderResume } from '../../src/document/render.js';

/** Markdown fixtures need no model to label their lines. */
const parse = (fixture: string) => new DefaultResumeParser().parse(`tests/fixtures/${fixture}`);

describe('how a document reaches a model', () => {
  it('addresses every entry and every line by id', async () => {
    // An entry id used to be inferable only from the bullet ids beneath it,
    // which an entry with no bullets — a degree — does not have.
    const resume = await parse('sample-resume.md');
    const rendered = renderResume(resume);

    for (const entry of resume.sections.flatMap((s) => s.entries)) {
      expect(rendered, `entry ${entry.id} is not addressable`).toContain(`[${entry.id}]`);
      for (const bullet of entry.bullets) {
        expect(rendered, `bullet ${bullet.id} is not addressable`).toContain(`[${bullet.id}]`);
      }
    }
  });

  it('leads with the dates the parser already found', async () => {
    // Left inside the header they sit at the end of employer, title, team and
    // location, and a reader asked whether two entries are in order had to
    // extract them again first. It got that right once and wrong the next time.
    const resume = await parse('sample-resume.md');
    const dated = resume.sections.flatMap((s) => s.entries).find((e) => e.dateRange);

    expect(dated, 'the fixture has no dated entry to check').toBeDefined();
    expect(renderEntry(dated!)).toContain(`(${dated!.dateRange})`);
  });

  it('carries the sections that hold lines rather than entries', async () => {
    // Skills and Summary have no entries, and the whole-document renderer
    // dropped them — so the reader comparing a resume against a posting could
    // not see the skills list it was matching against, and the one reading the
    // career story could not see the summary stating what that story is.
    const resume = await parse('sample-resume.md');
    const rendered = renderResume(resume);
    const loose = resume.sections.filter(
      (s) => s.kind !== 'contact' && s.entries.length === 0 && s.looseLines.length > 0,
    );

    expect(loose.length, 'the fixture has no loose-line section to check').toBeGreaterThan(0);
    for (const section of loose) {
      expect(rendered, `${section.kind} was dropped`).toContain(section.looseLines[0]!);
    }
  });

  it('leaves the contact block out, wherever it renders from', async () => {
    const resume = await parse('sample-resume.md');
    const contact = resume.sections.find((s) => s.kind === 'contact');
    const rendered = renderResume(resume);

    expect(contact, 'the fixture has no contact block').toBeDefined();
    for (const line of contact!.looseLines) {
      expect(rendered, 'a contact line reached the model').not.toContain(line);
    }
  });
});
