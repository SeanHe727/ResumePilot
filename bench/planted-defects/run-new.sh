#!/bin/zsh
# The new bases: ResumePilot (A, at the middle test's commit) and sol (C), each
# résumé twice, then claims extracted by gpt-6-sol (medium) and F1 scored.
# A goes to mid1/mid2 and C to run1/run2, beside the older bases' runs.
# Resumable: a review or an extraction already on disk is kept.
# Usage: zsh bench/planted-defects/run-new.sh   (from anywhere)
cd "${0:A:h}/../.."
set -a; . ./.env >/dev/null 2>&1; set +a
[ -n "$TAVILY_API_KEY_2" ] && export TAVILY_API_KEY=$TAVILY_API_KEY_2
export RESUMEPILOT_MODEL_PRIMARY=gpt-6-luna RESUMEPILOT_MODEL_SECONDARY=gpt-6-luna RESUMEPILOT_MODEL_CHEAP=gpt-6-luna
export TESTS=tests-final
P=bench/planted-defects
T=(b1-ux b1-ops b2-ux b2-ops b3-ux b3-ops b4-ux b4-ops b5-ux b5-ops)

a_done() { grep -q "Wrote the full review to" $1/A.log 2>/dev/null }

for r in 1 2; do
  for i in 0 5; do
    for t in ${T[@]:$i:5}; do
      d=$P/$TESTS/$t/mid$r; mkdir -p $d $P/$TESTS/$t/run$r
      a_done $d || pnpm -s scenario scenarios/bench-review.txt --resume $P/$TESTS/$t/resume.pdf > $d/A.log 2>&1 &
      [ -s $P/$TESTS/$t/run$r/C.md ] || OUT=run$r npx tsx $P/arms.ts C $t > $P/$TESTS/$t/run$r/C.run.log 2>&1 &
    done
    wait
  done
  for t in $T; do
    d=$P/$TESTS/$t/mid$r
    if a_done $d; then
      awk '/^> Here is my resume/{f=1} /requests ·/{f=0} f' $d/A.log | sed 's/\x1b\[[0-9;]*m//g' > $d/A.md
      full=$(sed 's/\x1b\[[0-9;]*m//g' $d/A.log | sed -n 's/^Wrote the full review to \(.*\)\.$/\1/p' | tail -1)
      [ -n "$full" ] && [ -f "$full" ] && mv "$full" $d/A-full.md
      echo "$t mid $r: $(grep -h 'requests ·' $d/A.log)"
    else
      echo "$t mid $r: A DID NOT FINISH (see $d/A.log)"
    fi
    [ -s $P/$TESTS/$t/run$r/C.md ] || echo "$t run $r: C DID NOT FINISH"
  done
  for t in $T; do
    [ -s $P/$TESTS/$t/mid$r/A.md ] && [ ! -s $P/$TESTS/$t/mid$r/A.claims.sol.json ] && OUT=mid$r EXTRACTOR=sol npx tsx $P/extract-claims.ts $t A &
    [ -s $P/$TESTS/$t/run$r/C.md ] && [ ! -s $P/$TESTS/$t/run$r/C.claims.sol.json ] && OUT=run$r EXTRACTOR=sol npx tsx $P/extract-claims.ts $t C &
  done
  wait
  OUT=mid$r CLAIMS=.sol F1_OUT=f1.new.mid$r.json python3 $P/f1.py $T
  OUT=run$r CLAIMS=.sol F1_OUT=f1.new.run$r.json python3 $P/f1.py $T
done
