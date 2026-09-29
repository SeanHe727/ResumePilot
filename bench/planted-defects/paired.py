"""Paired comparison of one ResumePilot variant against the multi-agent baseline.

The baseline is ResumePilot at 71fe18d on gpt-6-luna, run twice (mid1, mid2),
averaged per résumé. The variant is one or more F1 files written by f1.py.
Usage: python3 bench/planted-defects/paired.py single-b1 single-b2
"""
import json, math, statistics as st, sys
from pathlib import Path

D = Path(__file__).parent / 'tests-final'
# Two-sided 95% t critical values, by degrees of freedom.
T95 = {1: 12.71, 2: 4.30, 3: 3.18, 4: 2.78, 5: 2.57, 6: 2.45, 7: 2.36, 8: 2.31, 9: 2.26,
       10: 2.23, 11: 2.20, 12: 2.18, 13: 2.16, 14: 2.14, 15: 2.13, 16: 2.12, 17: 2.11, 18: 2.10, 19: 2.09}

def load(tag):
    return {x['test']: x for x in json.load(open(D / f'f1.{tag}.json'))['A']}

def baseline(run):
    out = {}
    for tag in (run, f'ten.{run}', f'new.{run}'):
        if (D / f'f1.{tag}.json').exists():
            out.update(load(tag))
    return out

variant = {}
for tag in sys.argv[1:]:
    variant.update(load(tag))
base = [baseline('mid1'), baseline('mid2')]
tests = sorted(t for t in variant if all(t in b for b in base))

for k in ('f1', 'recall', 'precision'):
    diff = [variant[t][k] - (base[0][t][k] + base[1][t][k]) / 2 for t in tests]
    m = st.mean(diff)
    half = T95.get(len(diff) - 1, 1.96) * st.stdev(diff) / math.sqrt(len(diff)) if len(diff) > 1 else float('nan')
    print(f"{k:9} variant {st.mean(variant[t][k] for t in tests):.3f}  "
          f"multi {st.mean((base[0][t][k] + base[1][t][k]) / 2 for t in tests):.3f}  "
          f"diff {m:+.3f}  95% CI [{m - half:+.3f}, {m + half:+.3f}]  n={len(diff)}")

print('false alarms  variant', sum(variant[t]['falseAlarms'] for t in tests),
      ' mid1', sum(base[0][t]['falseAlarms'] for t in tests), ' mid2', sum(base[1][t]['falseAlarms'] for t in tests))
cats = {}
for t in tests:
    for i, v in variant[t]['verdicts'].items():
        c = cats.setdefault(i[0], [0, 0, 0, 0])
        c[0] += v == 'right'; c[1] += base[0][t]['verdicts'][i] == 'right'
        c[2] += base[1][t]['verdicts'][i] == 'right'; c[3] += 1
for c, (v, a, b, n) in sorted(cats.items()):
    print(f"category {c}: variant {v}/{n}  mid1 {a}/{n}  mid2 {b}/{n}")
