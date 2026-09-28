"""Rebuilds tests/<id>/ids.json from the run's own trace.

The parse can number sections differently from one run to the next (a model
groups the rows), so the ids a report uses are the ones its own run rendered,
not the ones a fresh parse would give.
Usage: TESTS=tests-v3 python3 bench/planted-defects/ids-from-trace.py b1-ce b2-ce:out-r1 ...
(a test, or test:outdir; the ids are written into that out dir)
"""
import json, os, pathlib, re, sys

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parent.parent
TESTS = os.environ.get('TESTS', 'tests')
for spec in sys.argv[1:]:
    t, _, out = spec.partition(':')
    out = out or 'out'
    log = (HERE / TESTS / t / out / 'A.log').read_text()
    trace = ROOT / 'tmp' / re.search(r'trace/[^/\s]+/trace\.jsonl', log).group(0)
    ids = {}
    for line in trace.read_text().splitlines():
        for m in re.finditer(r'\[(s\d+:e\d+(?::b\d+)?)\] ([^\n\\]+)', line):
            ids.setdefault(m.group(1), m.group(2).strip())
    (HERE / TESTS / t / out / 'ids.json').write_text(json.dumps(ids, indent=2, ensure_ascii=False))
    print(t, len(ids))
