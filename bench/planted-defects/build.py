"""Builds the planted-defect test resumes, version 2.

Five categories of defect — wording, data, structure, technical content and
narrative — and each test resume carries two from every category, ten in all.
Version 1 (in v1/) planted twenty types that were mostly writing and format
errors; this one tests whether a reviewer catches what a careful reader in
the field would: numbers that do not add up, results buried behind method,
methods that contradict each other, and a career that stops making sense.

Every defect replaces one line of a clean base resume (or reorders, redates,
or adds a line or an entry), from a fixed seed, and the answer key is written
alongside. Writes tests/<id>/resume.pdf, source.txt and key.json.
"""
import json, pathlib, random, re, textwrap

HERE = pathlib.Path(__file__).parent
exec(re.search(r"def pdf\(.*?\n    return bytes\(out\)\n",
               (HERE / '../../tests/fixtures/make-pdfs.py').read_text(), re.S).group(0))

CATEGORIES = {
    'wording': ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
    'data': ['A1', 'A2', 'A3', 'A4'],
    'structure': ['S1', 'S2', 'S3', 'S4'],
    'technical': ['T1', 'T2', 'T3', 'T4'],
    'narrative': ['N1', 'N2', 'N3', 'N4', 'N5'],
}

# Which line of the base a defect replaces, by the slot names the bases use.
SLOT = {
    'W1': 'D1', 'W2': 'D6', 'W3': 'D9', 'W4': 'D16', 'W5': 'D5',
    'A1': 'D2', 'A2': 'D18', 'A3': 'D11', 'A4': 'D12',
    'S1': 'D4', 'S2': 'D15', 'S3': 'D17',
    'T1': 'D3', 'T2': 'D13', 'T3': 'anchor4', 'T4': 'D1',
}
# Where the sentence comes from: the v1 subtle variant of that slot, or v2.
FROM_V1 = {'W1', 'W2', 'W3', 'W4', 'W5', 'A1', 'A3', 'A4', 'S3'}

DESC = {
    'W1': "Duty framing ('Owned ...') naming what the candidate was in charge of, with no action taken and no outcome.",
    'W2': "A first-person pronoun ('my') inside a bullet.",
    'W3': "A present-tense verb in a role that has already ended.",
    'W4': "Passive voice with no actor: the bullet does not say what the candidate did.",
    'W5': "Generic claims with no concrete action, subject or result.",
    'W6': "A spelling mistake in the skills section.",
    'A1': "A percentage with a named metric but no baseline or evaluation set, and no sign of whether it is relative or absolute.",
    'A2': "Percent and percentage points confused: the stated '%' change is a difference in percentage points, and the relative change is different.",
    'A3': "The numbers contradict each other: the stated percentage does not match the before and after values.",
    'A4': "The same achievement is claimed twice, in different words and figures, under two different entries.",
    'S1': "The result is buried at the end of a long method list instead of leading the bullet.",
    'S2': "An activity with no result or impact at all.",
    'S3': "An overlong bullet packing several unrelated activities into one line.",
    'S4': "The entry's strongest, most quantified achievement is its last bullet instead of its first.",
    'T1': "A methodological contradiction: the evaluation described is not valid for the claim made from it.",
    'T2': "Steps in an order that does not work: a later step undoes or invalidates an earlier one.",
    'T3': "A technical term used wrongly: the named method cannot do what the bullet says it did.",
    'T4': "An overclaim for the role's level: a junior role claiming to have designed or set something organisation-wide.",
    'N1': "An entire entry from an unrelated field, which breaks the career narrative.",
    'N2': "Experience is not in reverse-chronological order: the older role is listed above the newer one.",
    'N3': "An unexplained gap between graduating and the first role.",
    'N4': "A listed skill with no supporting evidence anywhere in the experience or projects.",
    'N5': "Irrelevant personal information (date of birth, nationality).",
}


def pick(n, rng):
    """Two per category per resume, balanced across the set, no two on one line."""
    used = {t: 0 for ts in CATEGORIES.values() for t in ts}
    sets = []
    while len(sets) < n:
        chosen = []
        for ts in CATEGORIES.values():
            chosen += sorted(ts, key=lambda t: (used[t], rng.random()))[:2]
        slots = [SLOT[t] for t in chosen if t in SLOT]
        # A line can carry one planted defect. The unrelated entry and the gap
        # are kept apart as well: no longer necessary, but dropping the rule
        # would change every draw from this seed.
        if len(slots) != len(set(slots)) or {'N1', 'N3'} <= set(chosen):
            rng.random()
            used = {t: used[t] + (0.01 if t in chosen else 0) for t in used}
            continue
        for t in chosen:
            used[t] += 1
        sets.append(chosen)
    return sets


def build(base, defects):
    v2 = base['v2']
    key = []
    # A technical defect is described in its own terms: what is wrong, and why,
    # as someone in the field would put it.
    note = lambda t, line: key.append({'id': t, 'category': next(c for c, ts in CATEGORIES.items() if t in ts),
                                       'line': line, 'defect': v2.get('desc', {}).get(t, DESC[t])})
    by_slot = {SLOT[t]: t for t in defects if t in SLOT}

    lines = [('name', base['name']), ('text', base['contact'])]
    if 'N5' in defects:
        lines.append(('text', base['personalSubtle'])); note('N5', base['personalSubtle'])
    lines.append(('head', 'EDUCATION'))
    lines += [('text', e) for e in base['education']]

    def entry(e, dates):
        out = [('text', f"{e['head']} | {dates}")]
        bullets = list(e['bullets'])
        for b in bullets:
            t = by_slot.get(b['slot'])
            if t:
                text = b['subtle'] if t in FROM_V1 else v2[t]
                note(t, text)
            else:
                text = b['clean']
            out.append(('bullet', text))
        return out

    exp0, exp1 = base['exp']
    # S4: the strongest line of the first role moved to the bottom of it.
    if 'S4' in defects:
        strongest = next(b for b in exp0['bullets'] if b['slot'] == 'anchor12')
        exp0 = {**exp0, 'bullets': [b for b in exp0['bullets'] if b is not strongest] + [strongest]}
        note('S4', strongest['clean'])
    exp1_dates = exp1['dates']
    if 'N3' in defects:
        exp1_dates = exp1['datesD10Subtle']
        note('N3', f"{base['graduated']} graduation to {exp1_dates.split(' - ')[0]}")
    blocks = [entry(exp0, exp0['dates']), entry(exp1, exp1_dates)]
    if 'N2' in defects:
        blocks[0], blocks[1] = blocks[1], blocks[0]
        note('N2', 'EXPERIENCE section order')
    # The unrelated role is the most recent one and listed first, so no other
    # role is shortened to make room for it. Measured: shifting a role to fit
    # it in left three months carrying a paper, a semester of teaching and a
    # year of downloads — an inconsistency the answer key did not list.
    if 'N1' in defects:
        n1 = v2['N1']
        blocks.insert(0, [('text', f"{n1['head']} | {n1['dates']}")] + [('bullet', b) for b in n1['bullets']])
        note('N1', f"{n1['head']} | {n1['dates']}")
    lines.append(('head', 'EXPERIENCE'))
    for b in blocks:
        lines += b

    lines.append(('head', 'PROJECTS'))
    for p in base['projects']:
        lines += entry(p, p['dates'])

    lines.append(('head', 'SKILLS'))
    skills = list(base['skills'])
    if 'W6' in defects:
        skills = list(base['skillsD20Subtle'])
        note('W6', ' / '.join(t for t, c in zip(skills, base['skills']) if t != c))
    if 'N4' in defects:
        i, skill = base['skillsD8Subtle']
        skills[i] = f"{skills[i]}, {skill}"
        note('N4', skills[i])
        key[-1]['defect'] += f" ({skill})"
    lines += [('text', s) for s in skills]
    key.sort(key=lambda k: (list(CATEGORIES).index(k['category']), k['id']))
    return lines, key


def render(lines):
    text, draw, y = [], [], 752
    size, lead = 10, 11.8
    # A resume carrying an extra entry can run long; tighten rather than spill.
    count = sum(len(textwrap.wrap(t, 92)) if k == 'bullet' else 1 for k, t in lines)
    if count > 54:
        size, lead = 9.4, 11.0
    wrap = 92 if size == 10 else 98
    for kind, t in lines:
        if kind == 'name':
            draw.append((72, y, 16, t)); y -= 19; text.append(t)
        elif kind == 'head':
            y -= 5; draw.append((72, y, 12, t)); y -= 14; text.append(t)
        elif kind == 'bullet':
            # About 15 words a line, as on the first template resume.
            for k, w in enumerate(textwrap.wrap(t, wrap)):
                draw.append((80 if k == 0 else 86, y, size, ('- ' + w) if k == 0 else w)); y -= lead
            text.append('- ' + t)
        else:
            draw.append((72, y, size, t)); y -= lead + 0.7; text.append(t)
    assert y > 30, f'page overflow, bottom at {y}'
    return pdf(draw), '\n'.join(text) + '\n', y


def main():
    rng = random.Random(20260926)
    bases = {k: json.loads((HERE / 'bases' / f'{k}.json').read_text()) for k in ('ce', 'pm', 'quant')}
    sets = pick(9, rng)
    manifest = []
    for i, defects in enumerate(sets):
        batch = i // 3 + 1
        base_id = ('ce', 'pm', 'quant')[i % 3]
        tid = f'b{batch}-{base_id}'
        lines, key = build(bases[base_id], set(defects))
        assert sorted(k['id'] for k in key) == sorted(defects), (tid, defects, [k['id'] for k in key])
        pdf_bytes, text, bottom = render(lines)
        out = HERE / 'tests' / tid
        out.mkdir(parents=True, exist_ok=True)
        (out / 'resume.pdf').write_bytes(pdf_bytes)
        (out / 'source.txt').write_text(text)
        (out / 'key.json').write_text(json.dumps(key, indent=2, ensure_ascii=False))
        manifest.append({'id': tid, 'batch': batch, 'base': base_id, 'defects': defects, 'bottom': round(bottom)})
    for base_id, base in bases.items():
        lines, _ = build(base, set())
        pdf_bytes, text, _ = render(lines)
        out = HERE / 'tests' / f'clean-{base_id}'
        out.mkdir(parents=True, exist_ok=True)
        (out / 'resume.pdf').write_bytes(pdf_bytes)
        (out / 'source.txt').write_text(text)
    (HERE / 'tests' / 'manifest.json').write_text(json.dumps(manifest, indent=2))
    for m in manifest:
        print(m)


main()
