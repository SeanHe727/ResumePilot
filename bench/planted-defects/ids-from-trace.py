"""Rebuilds tests/<id>/ids.json from the run's own trace.

The parse can number sections differently from one run to the next (a model
groups the rows), so the ids a report uses are the ones its own run rendered,
not the ones a fresh parse would give.
Usage: python3 bench/planted-defects/ids-from-trace.py b1-ce b1-pm b1-quant
"""
import json, pathlib, re, sys

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parent.parent
for t in sys.argv[1:]:
    log = (HERE / 'tests' / t / 'out' / 'A.log').read_text()
    trace = ROOT / 'tmp' / re.search(r'trace/[^/\s]+/trace\.jsonl', log).group(0)
    ids = {}
    for line in trace.read_text().splitlines():
        for m in re.finditer(r'\[(s\d+:e\d+(?::b\d+)?)\] ([^\n\\]+)', line):
            ids.setdefault(m.group(1), m.group(2).strip())
    (HERE / 'tests' / t / 'ids.json').write_text(json.dumps(ids, indent=2, ensure_ascii=False))
    print(t, len(ids))
