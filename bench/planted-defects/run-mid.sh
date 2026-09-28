#!/bin/zsh
# The middle test: ResumePilot (arm A) only, every résumé in tests-final twice,
# at the frozen commit; sol's existing runs are reused as the comparison.
# Claims extracted by gpt-6-sol (medium) and F1 scored per run, as in run-final.sh.
# Resumable: a review or an extraction already on disk is kept.
# Usage: zsh bench/planted-defects/run-mid.sh   (from anywhere)
cd "${0:A:h}/../.."
set -a; . ./.env >/dev/null 2>&1; set +a
[ -n "$TAVILY_API_KEY_2" ] && export TAVILY_API_KEY=$TAVILY_API_KEY_2
export RESUMEPILOT_MODEL_PRIMARY=gpt-6-luna RESUMEPILOT_MODEL_SECONDARY=gpt-6-luna RESUMEPILOT_MODEL_CHEAP=gpt-6-luna
export TESTS=tests-final
P=bench/planted-defects
T=(b1-ce b1-pm b1-quant b2-ce b2-pm b2-quant b3-ce b3-pm b3-quant b4-ce b4-pm b4-quant b5-ce b5-pm b5-quant)

a_done() { grep -q "Wrote the full review to" $1/A.log 2>/dev/null }

for r in 1 2; do
  for i in 0 5 10; do
    for t in ${T[@]:$i:5}; do
      d=$P/$TESTS/$t/mid$r; mkdir -p $d
      a_done $d || pnpm -s scenario scenarios/bench-review.txt --resume $P/$TESTS/$t/resume.pdf > $d/A.log 2>&1 &
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
  done
  for i in 0 5 10; do
    for t in ${T[@]:$i:5}; do
      d=$P/$TESTS/$t/mid$r
      [ -s $d/A.md ] && [ ! -s $d/A.claims.sol.json ] && OUT=mid$r EXTRACTOR=sol npx tsx $P/extract-claims.ts $t A &
    done
    wait
  done
  OUT=mid$r CLAIMS=.sol F1_OUT=f1.mid$r.json python3 $P/f1.py $T
done
