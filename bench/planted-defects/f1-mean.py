"""Mean F1 per arm over several scored runs (extractions or review runs).
Usage: python3 bench/planted-defects/f1-mean.py tests-v3/f1.b1.x1.json tests-v3/f1.b1.x2.json ...
"""
import json, sys, statistics as st
runs = [json.load(open(p)) for p in sys.argv[1:]]
for arm in sorted(runs[0]):
    per = [[(r['recall'], r['precision'], r['f1']) for r in run[arm]] for run in runs if arm in run]
    means = [tuple(st.mean(x[j] for x in rs) for j in range(3)) for rs in per]
    col = lambda j: [m[j] for m in means]
    sd = lambda xs: st.pstdev(xs) if len(xs) > 1 else 0.0
    print(f"{arm}  recall {st.mean(col(0)):.2f}±{sd(col(0)):.2f}  precision {st.mean(col(1)):.2f}±{sd(col(1)):.2f}  "
          f"F1 {st.mean(col(2)):.2f}±{sd(col(2)):.2f}  runs " + ' '.join(f"{m[2]:.2f}" for m in means))
