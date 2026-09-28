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
    body = re.sub(r'^- (?:format|skills|whole resume, (?:order|dates|consistency)|[^:\n]*, wording): ', '- ', body, flags=re.M)
    body = body.replace('## Start here', '## Top priorities')
    body = body.replace('## Already working', '## What already works')
    body = re.sub(r'## Set aside \((\d+)\)\n\n[^\n]*\n', '', body)
    body = body.replace('Worth knowing, and not worth the space on this page:', '')
    body = re.sub(r'- …and (\d+) more, in `/report --full`\.', r'- …and \1 more.', body)
    body = re.sub(r'\n{3,}', '\n\n', body)
    return body.strip() + '\n'


def plain(text):
    return re.sub(r'\n{3,}', '\n\n', text).strip() + '\n'


JUDGE = """# Judging résumé reviews

You are a hiring manager. Candidates sent their résumés to four reviewers and
each got written feedback back. Judge how good each review is for the
candidate: if they acted on it, would the résumé get better, and could they
trust what it says?

## The test set

Each case is one early-career, one-page résumé from one of three fields:
machine learning and software engineering, product management, or
quantitative research. Each was written clean and then had about ten problems
put into it on purpose, across five kinds: wording; numbers; how a line is
built; technical or methodological content; and the career as a whole (order,
gaps, an entry that does not belong, skills nothing supports, personal
details). Some are subtle, and a résumé can also have problems nobody planted.

The four reviews of a case are shuffled, and the labels say nothing about who
wrote them. Every reviewer was asked not to rewrite lines for the candidate.

## Score each review from 1 to 10 on

1. Accuracy: is what it says about the résumé true? Invented figures, results,
   scope or methods presented as the candidate's count against it (a word
   offered for the candidate to choose, or a bracketed placeholder to fill, is
   not invention).
2. Problems found: does it catch what actually weakens this résumé? An error a
   practitioner in the field would catch outweighs a wording issue; a review
   that misses one, or praises or keeps it, has missed what matters most.
3. Actionability: could the candidate make each change today? Saying which
   words to change is enough; a rewritten line earns nothing extra.
4. Readability: can the candidate understand the review and work through it?
   Each problem's reason is explained; the review is organised and clearly
   worded; the key problems stand out rather than sitting among small ones.

Then rank the four from best to worst, with two or three sentences on what
decided it.

## What to pay attention to

- Check: verify what a review claims against the résumé yourself (the
  arithmetic, the dates, what a line actually says).
- The whole review: the candidate will read and act on all of it, not only the
  first few points.
- Length: length is not quality. Extra material counts only if it is correct
  and worth acting on.
- Judge each review against the résumé, not against the other reviews.

## Output

Reply with JSON for each case:

{
  "case": "<case id>",
  "scores": {
    "Reviewer 1": {"accuracy": 0, "problems": 0, "actionability": 0, "readability": 0},
    "Reviewer 2": {...}, "Reviewer 3": {...}, "Reviewer 4": {...}
  },
  "invented": {"Reviewer 1": ["each invented fact, figure or method, quoted"], "Reviewer 2": [], ...},
  "ranking": ["Reviewer 2", "Reviewer 4", "Reviewer 1", "Reviewer 3"],
  "why": "two or three sentences"
}
"""


def main(tests):
    rng = random.Random(int(sys.argv[1]) if sys.argv[1].isdigit() else 20260926)
    if sys.argv[1].isdigit():
        tests = tests[1:]
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
