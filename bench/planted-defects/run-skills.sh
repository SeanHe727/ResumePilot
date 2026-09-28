#!/bin/zsh
# Three published skills (E, F, G) on luna, once each, on two variants of every
# base; claims extracted by gpt-6-sol and F1 scored beside A and C in run1.
# Usage: zsh bench/planted-defects/run-skills.sh   (from anywhere)
cd "${0:A:h}/../.."
set -a; . ./.env >/dev/null 2>&1; set +a
export TESTS=tests-final
P=bench/planted-defects
T=($(for b in 1 2; do for k in ce pm quant ux ops da fe clin fin emb; do print b$b-$k; done; done))
for t in $T; do for a in E F G; do
  [ -s $P/$TESTS/$t/run1/$a.md ] || OUT=run1 npx tsx $P/arms.ts $a $t > $P/$TESTS/$t/run1/$a.run.log 2>&1 &
done; done
wait
for t in $T; do for a in E F G; do
  [ -s $P/$TESTS/$t/run1/$a.md ] || echo "$t $a DID NOT FINISH"
  [ -s $P/$TESTS/$t/run1/$a.md ] && [ ! -s $P/$TESTS/$t/run1/$a.claims.sol.json ] && OUT=run1 EXTRACTOR=sol npx tsx $P/extract-claims.ts $t $a &
done; done
wait
OUT=run1 CLAIMS=.sol F1_OUT=f1.skills.json python3 $P/f1.py $T
