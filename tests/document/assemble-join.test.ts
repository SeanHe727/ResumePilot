import { describe, expect, it } from 'vitest';

import { joinWrapped } from '../../src/document/assemble.js';

describe('rows of one line, joined where the page broke them', () => {
  it('keeps a compound broken at its hyphen whole', () => {
    expect(joinWrapped('taking over the weekend on-', 'call rotation')).toBe('taking over the weekend on-call rotation');
  });

  it('joins anything else with a space', () => {
    expect(joinWrapped('cut latency', 'by 40%')).toBe('cut latency by 40%');
    expect(joinWrapped('from 2019 -', '2021')).toBe('from 2019 - 2021');
  });
});
