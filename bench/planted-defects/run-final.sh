#!/bin/zsh
# The final validation run: every résumé in tests-final, every arm, each run
# twice, then claims extracted by gpt-6-sol (medium) and F1 scored per run.
# Resumable: a review, a report or an extraction already on disk is kept, so
# running this again after a break picks up where it stopped.
# Usage: zsh bench/planted-defects/run-final.sh   (from anywhere)
cd "${0:A:h}/../.."
set -a; . ./.env >/dev/null 2>&1; set +a
# The first Tavily key is near its limit; the second one takes the run.
[ -n "$TAVILY_API_KEY_2" ] && export TAVILY_API_KEY=$TAVILY_API_KEY_2
# Every arm on the GPT-6 generation: ResumePilot and B/D on luna, C and the extractor on sol.
export RESUMEPILOT_MODEL_PRIMARY=gpt-6-luna RESUMEPILOT_MODEL_SECONDARY=gpt-6-luna RESUMEPILOT_MODEL_CHEAP=gpt-6-luna
export TESTS=tests-final
P=bench/planted-defects
T=(b1-ce b1-pm b1-quant b2-ce b2-pm b2-quant b3-ce b3-pm b3-quant b4-ce b4-pm b4-quant b5-ce b5-pm b5-quant)

# A finished ResumePilot run is one whose log says where the full review went.
a_done() { grep -q "Wrote the full review to" $1/A.log 2>/dev/null }

for r in 1 2; do
  # Five résumés at a time, all four arms each: at most 20 reviews in flight.
  for i in 0 5 10; do
    for t in ${T[@]:$i:5}; do
      d=$P/$TESTS/$t/run$r; mkdir -p $d
      a_done $d || pnpm -s scenario scenarios/bench-review.txt --resume $P/$TESTS/$t/resume.pdf > $d/A.log 2>&1 &
      for a in B C D; do
        [ -s $d/$a.md ] || OUT=run$r npx tsx $P/arms.ts $a $t > $d/$a.run.log 2>&1 &
      done
    done
    wait
  done
  for t in $T; do
    d=$P/$TESTS/$t/run$r
    if a_done $d; then
      awk '/^> Here is my resume/{f=1} /requests ·/{f=0} f' $d/A.log | sed 's/\x1b\[[0-9;]*m//g' > $d/A.md
      full=$(sed 's/\x1b\[[0-9;]*m//g' $d/A.log | sed -n 's/^Wrote the full review to \(.*\)\.$/\1/p' | tail -1)
      [ -n "$full" ] && [ -f "$full" ] && mv "$full" $d/A-full.md
      echo "$t run $r: $(grep -h 'requests ·' $d/A.log)"
    else
      echo "$t run $r: A DID NOT FINISH (see $d/A.log)"
    fi
    for a in B C D; do [ -s $d/$a.md ] || echo "$t run $r: $a DID NOT FINISH (see $d/$a.run.log)"; done
  done
  for i in 0 5 10; do
    for t in ${T[@]:$i:5}; do
      d=$P/$TESTS/$t/run$r
      for a in A B C D; do
        [ -s $d/$a.md ] && [ ! -s $d/$a.claims.sol.json ] && OUT=run$r EXTRACTOR=sol npx tsx $P/extract-claims.ts $t $a &
      done
    done
    wait
  done
  OUT=run$r CLAIMS=.sol F1_OUT=f1.run$r.json python3 $P/f1.py $T
done
python3 $P/f1-mean.py $P/$TESTS/f1.run1.json $P/$TESTS/f1.run2.json
