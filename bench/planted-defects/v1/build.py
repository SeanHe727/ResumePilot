"""Builds the planted-defect test resumes.

Each base resume has a clean version of every line; a defect swaps in its
defective variant (or reorders / redates / adds a line). Ten of twenty defect
types per resume, balanced across the nine resumes, from a fixed seed.

Writes tests/<id>/resume.pdf, resume.txt (what the parser extracts is produced
later), key.json.
"""
import json, pathlib, random, re, textwrap

HERE = pathlib.Path(__file__).parent
exec(re.search(r"def pdf\(.*?\n    return bytes\(out\)\n",
               (HERE / '../../../tests/fixtures/make-pdfs.py').read_text(), re.S).group(0))

TYPES = [f'D{i}' for i in range(1, 21)]
DESC = {
    'D1': "Duty-style opener ('Responsible for') naming an assigned duty, with no action taken and no outcome.",
    'D2': "A percentage with no defined metric and no baseline: which measure, compared against what.",
    'D3': "Implausible overclaim for the role's level: sole credit for something company-wide.",
    'D4': "Duplicate of another bullet in the same entry, restated in other words: {anchor4}",
    'D5': "Empty buzzwords with no concrete action, subject or result.",
    'D6': "First-person pronoun and a conversational full sentence, with a weak verb and no result.",
    'D7': "Experience is not in reverse-chronological order: the older role ({older}) is listed before the newer one ({newer}).",
    'D8': "Skills listed with no supporting evidence anywhere in the experience or projects: {unevidenced}.",
    'D9': "Present tense in a role that has already ended.",
    'D10': "An unexplained gap between graduating ({grad}) and the first role (starting {start}).",
    'D11': "The numbers contradict each other: the stated change does not match the before and after values.",
    'D12': "The same achievement is claimed in two different entries; it also appears under {exp0}.",
    'D13': "Responsibilities far beyond the job title ({title}).",
    'D14': "Impossible dates: the end date is before the start date ({dates}).",
    'D15': "Vague scope: no concrete project, action or result.",
    'D16': "Passive, filler-heavy wording ('was involved in the process of helping to ...').",
    'D17': "An overlong bullet (70+ words) packing many unrelated activities into one line.",
    'D18': "Unexplained internal code names or acronyms that an outside reader cannot interpret.",
    'D19': "Irrelevant personal information (age, marital status, hobbies).",
    'D20': "Spelling mistakes in the skills section.",
}


# Wording for the subtle variants where the obvious description would not fit.
DESC_SUBTLE = {
    'D1': "Duty-style framing ('Owned ...') naming what the candidate was in charge of, with no action taken and no outcome.",
    'D3': "Overclaim for the role's level: an intern claiming to have designed or set something used company-wide.",
    'D5': "Generic claims with no concrete action, subject or result.",
    'D6': "A first-person pronoun ('my') inside a bullet.",
    'D8': "A listed skill with no supporting evidence anywhere in the experience or projects: {unevidenced}.",
    'D9': "A present-tense verb in a role that has already ended.",
    'D16': "Passive voice with no actor: the bullet does not say what the candidate did.",
    'D17': "An overlong bullet packing several unrelated activities into one line.",
    'D19': "Irrelevant personal information (date of birth, nationality).",
    'D20': "A spelling mistake in the skills section.",
}


def pick_sets(n, rng):
    used = {t: 0 for t in TYPES}
    sets = []
    for _ in range(n):
        order = sorted(TYPES, key=lambda t: (used[t], rng.random()))
        chosen = sorted(order[:10], key=lambda t: int(t[1:]))
        for t in chosen:
            used[t] += 1
        sets.append(chosen)
    return sets


def build(base, defects, subtle=False):
    key = []
    def desc(t):
        return (DESC_SUBTLE.get(t) if subtle and t in DESC_SUBTLE else DESC[t])
    lines = [('name', base['name']), ('text', base['contact'])]
    if 'D19' in defects:
        personal = base['personalSubtle'] if subtle else base['personal']
        lines.append(('text', personal))
        key.append({'id': 'D19', 'type': 'D19', 'line': personal, 'defect': desc('D19')})
    lines.append(('head', 'EDUCATION'))
    lines += [('text', e) for e in base['education']]

    def entry(e, section_entry_index, kind):
        dates = e['dates']
        if kind == 'exp' and section_entry_index == 1 and 'D10' in defects:
            dates = e['datesD10Subtle'] if subtle else e['datesD10']
        if kind == 'proj' and section_entry_index == 1 and 'D14' in defects:
            dates = e['datesD14Subtle'] if subtle else e['datesD14']
        out = [('text', f"{e['head']} | {dates}")]
        for b in e['bullets']:
            slot = b['slot']
            text = (b['subtle'] if subtle else b['defect']) if slot in defects else b['clean']
            if slot in defects:
                d = desc(slot).format(anchor4=anchor4, exp0=base['exp'][0]['head'].split(' | ')[0],
                                      title=base['exp'][0]['head'].split(' | ')[1],
                                      unevidenced=base['unevidencedSubtle' if subtle else 'unevidenced'], grad=base['graduated'],
                                      start='', older='', newer='', dates='')
                key.append({'id': slot, 'type': slot, 'line': text, 'defect': d})
            out.append(('bullet', text))
        return out, dates

    anchor4 = next(b['clean'] for b in base['exp'][0]['bullets'] if b['slot'] == 'anchor4')
    exp_blocks = []
    for i, e in enumerate(base['exp']):
        block, dates = entry(e, i, 'exp')
        exp_blocks.append((block, dates, e))
    if 'D10' in defects:
        start = exp_blocks[1][1].split(' - ')[0]
        key.append({'id': 'D10', 'type': 'D10', 'line': f"{base['graduated']} graduation to {start}",
                    'defect': desc('D10').format(grad=base['graduated'], start=start)})
    if 'D7' in defects:
        exp_blocks = exp_blocks[::-1]
        older, newer = exp_blocks[0][2]['head'].split(' | ')[0], exp_blocks[1][2]['head'].split(' | ')[0]
        key.append({'id': 'D7', 'type': 'D7', 'line': 'EXPERIENCE section order',
                    'defect': desc('D7').format(older=older, newer=newer)})
    lines.append(('head', 'EXPERIENCE'))
    for block, _, _ in exp_blocks:
        lines += block

    lines.append(('head', 'PROJECTS'))
    for i, p in enumerate(base['projects']):
        block, dates = entry(p, i, 'proj')
        if i == 1 and 'D14' in defects:
            key.append({'id': 'D14', 'type': 'D14', 'line': f"{p['head'].split(' | ')[0]} | {dates}",
                        'defect': desc('D14').format(dates=dates)})
        lines += block

    lines.append(('head', 'SKILLS'))
    typo = base['skillsD20Subtle'] if subtle else base['skillsD20']
    skills = list(typo if 'D20' in defects else base['skills'])
    if 'D20' in defects:
        changed = [t for t, c in zip(typo, base['skills']) if t != c]
        key.append({'id': 'D20', 'type': 'D20', 'line': ' / '.join(changed), 'defect': desc('D20')})
    if 'D8' in defects:
        if subtle:
            # One unsupported skill slipped into a line of real ones.
            i, skill = base['skillsD8Subtle']
            skills[i] = f"{skills[i]}, {skill}"
            line = skills[i]
            unev = base['unevidencedSubtle']
        else:
            skills.append(base['skillsD8'])
            line, unev = base['skillsD8'], base['unevidenced']
        key.append({'id': 'D8', 'type': 'D8', 'line': line, 'defect': desc('D8').format(unevidenced=unev)})
    lines += [('text', s) for s in skills]
    key.sort(key=lambda k: int(k['id'][1:]))
    return lines, key


def render(lines):
    text = []
    draw = []
    y = 752
    for kind, t in lines:
        if kind == 'name':
            draw.append((72, y, 16, t)); y -= 19; text.append(t)
        elif kind == 'head':
            y -= 5; draw.append((72, y, 12, t)); y -= 14; text.append(t)
        elif kind == 'bullet':
            # About 15 words a line, as on the first template resume.
            wrapped = textwrap.wrap(t, 92)
            for k, w in enumerate(wrapped):
                draw.append((80 if k == 0 else 86, y, 10, ('- ' + w) if k == 0 else w)); y -= 11.8
            text.append('- ' + t)
        else:
            draw.append((72, y, 10, t)); y -= 12.5; text.append(t)
    assert y > 30, f'page overflow, bottom at {y}'
    return pdf(draw), '\n'.join(text) + '\n', y


def main():
    rng = random.Random(20260926)
    bases = {k: json.loads((HERE.parent / 'bases' / f'{k}.json').read_text()) for k in ('ce', 'pm', 'quant')}
    sets = pick_sets(9, rng)
    manifest = []
    for i, defects in enumerate(sets):
        batch = i // 3 + 1
        base_id = ('ce', 'pm', 'quant')[i % 3]
        tid = f'b{batch}-{base_id}'
        # Batch 1 plants the obvious variants; batches 2 and 3 the subtle ones.
        subtle = batch > 1
        lines, key = build(bases[base_id], set(defects), subtle)
        assert sorted(k['id'] for k in key) == sorted(defects), (tid, defects, [k['id'] for k in key])
        pdf_bytes, text, bottom = render(lines)
        out = HERE / 'tests' / tid
        out.mkdir(parents=True, exist_ok=True)
        (out / 'resume.pdf').write_bytes(pdf_bytes)
        (out / 'source.txt').write_text(text)
        (out / 'key.json').write_text(json.dumps(key, indent=2, ensure_ascii=False))
        manifest.append({'id': tid, 'batch': batch, 'base': base_id, 'variant': 'subtle' if subtle else 'obvious',
                         'defects': defects, 'bottom': round(bottom)})
    # Clean versions, for checking the bases themselves.
    for base_id, base in bases.items():
        lines, _ = build(base, set())
        pdf_bytes, text, bottom = render(lines)
        out = HERE / 'tests' / f'clean-{base_id}'
        out.mkdir(parents=True, exist_ok=True)
        (out / 'resume.pdf').write_bytes(pdf_bytes)
        (out / 'source.txt').write_text(text)
    (HERE / 'tests' / 'manifest.json').write_text(json.dumps(manifest, indent=2))
    for m in manifest:
        print(m)


main()
