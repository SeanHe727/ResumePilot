"""Packs a blind-review bundle: each test resume and the four groups' reviews,
with anything that names the system stripped and the order shuffled.

Usage: python3 bench/planted-defects/pack.py b1-ce b1-pm b1-quant
Writes blind/bundle/ (for the judge) and blind/mapping.json (kept back).
"""
import json, pathlib, random, re, sys

HERE = pathlib.Path(__file__).parent
OUT = HERE / 'blind'
BUNDLE = OUT / 'bundle'


def named(ids):
    """A line id replaced by the line's opening words, as a reader would cite it."""
    def short(i):
        t = ids.get(i)
        if t is None:
            return None
        if ':b' not in i:
            return t.split(' | ')[0]
        words = t.split()
        return '“' + ' '.join(words[:6]) + ('…' if len(words) > 6 else '') + '”'
    def one(m):
        base, a, b = m.group(1), m.group(2), m.group(3)
        if a is None:
            return short(base) or m.group(0)
        first = short(f'{base}:b{a}')
        if b is None:
            return first or m.group(0)
        last = short(f'{base}:b{b}')
        return f'{first} to {last}' if first and last else m.group(0)
    return one


def resumepilot_report(text, ids):
    """The report ResumePilot hands over, without what marks it as ResumePilot's."""
    # The /report output: from its title to the end of the brief.
    start = text.find('# Review:')
    end = text.find('\n> /report --full')
    body = text[start:end if end > start else None]
    body = re.sub(r'^# Review:.*\n', '', body, flags=re.M)
    body = re.sub(r'^\*\*\d+/100\*\*.*\n', '', body, flags=re.M)          # the score line
    body = re.sub(r'^Read \d+ of \d+ entries.*\n', '', body, flags=re.M)     # the coverage line
    body = re.sub(r'\s*\*\((?:about [^)]*|saves [^)]*|no words)\)\*', '', body)  # word costs
    # Line ids, read as the lines they name: "s2:e0:b1" and "s2:e0:b2-b3".
    body = re.sub(r'\b([sS]\d+:e\d+)(?::b(\d+))?(?:[-–]b?(\d+))?\b', named(ids), body)
    # Internal target labels on set-aside lines.
    body = re.sub(r'^- (?:format|skills|whole resume, (?:order|dates)|[^:\n]*, wording): ', '- ', body, flags=re.M)
    body = body.replace('## Start here', '## Top priorities')
    body = body.replace('## Already working', '## What already works')
    body = re.sub(r'## Set aside \((\d+)\)', r'## Lower priority (\1)', body)
    body = body.replace('Worth knowing, and not worth the space on this page:', '')
    body = re.sub(r'- …and (\d+) more, in `/report --full`\.', r'- …and \1 more.', body)
    body = re.sub(r'\n{3,}', '\n\n', body)
    return body.strip() + '\n'


def plain(text):
    return re.sub(r'\n{3,}', '\n\n', text).strip() + '\n'


JUDGE = """# Blind review of résumé feedback

You are judging written feedback on résumés. For each case you get the résumé,
exactly as the reviewers saw it, and four reviews of it, labelled Reviewer 1 to
4. The labels are shuffled per case and say nothing about who wrote them.

Judge each review as the candidate would receive it: would acting on it make
this résumé better, and could they trust it?

## For each case

Score each review from 1 to 10 on:

1. **Accuracy** — is everything it says about the résumé true? Deduct for
   misreading a line, calling a correct method wrong, or advice built on a
   mistake.
2. **Important problems found** — does it catch what actually weakens this
   résumé, including technical and methodological errors a practitioner in the
   field would notice, numbers that do not add up, and a career story that
   does not hold together?
3. **Explanation** — for each problem, does the candidate understand why it is
   a problem, not only what to change?
4. **Actionability** — could the candidate make the change today? Specific
   beats general.
5. **Prioritization** — is it clear what matters most, and does the length fit
   what a one-page résumé can take?
6. **Faithfulness** — does it avoid inventing facts or figures the résumé does
   not contain? Placeholders the candidate must fill are fine; made-up numbers
   presented as theirs are not.

Length is not quality. A longer review is better only if the extra material is
correct and worth acting on.

Then rank the four from best to worst, and give two or three sentences on what
decided the ranking.

## Output

Reply with JSON for each case:

{
  "case": "<case id>",
  "scores": {
    "Reviewer 1": {"accuracy": 0, "problems": 0, "explanation": 0, "actionability": 0, "prioritization": 0, "faithfulness": 0},
    "Reviewer 2": {...}, "Reviewer 3": {...}, "Reviewer 4": {...}
  },
  "ranking": ["Reviewer 2", "Reviewer 4", "Reviewer 1", "Reviewer 3"],
  "why": "two or three sentences"
}
"""


def main(tests):
    rng = random.Random(20260926)
    BUNDLE.mkdir(parents=True, exist_ok=True)
    mapping = {}
    for t in tests:
        d = HERE / 'tests' / t
        reviews = {
            'A': resumepilot_report((d / 'out' / 'A.md').read_text(), json.loads((d / 'ids.json').read_text())),
            'B': plain((d / 'out' / 'B.md').read_text()),
            'C': plain((d / 'out' / 'C.md').read_text()),
            'D': plain((d / 'out' / 'D.md').read_text()),
        }
        order = list(reviews)
        rng.shuffle(order)
        case = f'case-{len(mapping) + 1}'
        mapping[case] = {'test': t, 'reviewers': {f'Reviewer {i + 1}': arm for i, arm in enumerate(order)}}
        parts = [f'# {case}\n', '## Résumé\n', '```\n' + (d / 'resume.txt').read_text().strip() + '\n```\n']
        for i, arm in enumerate(order):
            parts.append(f'## Reviewer {i + 1}\n\n{reviews[arm]}')
        (BUNDLE / f'{case}.md').write_text('\n'.join(parts))
    (BUNDLE / 'JUDGE.md').write_text(JUDGE)
    (OUT / 'mapping.json').write_text(json.dumps(mapping, indent=2))
    print(json.dumps(mapping, indent=2))


main(sys.argv[1:])
