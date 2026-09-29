#!/bin/zsh
# ResumePilot with every reader on gpt-6-sol, once on one résumé per field;
# claims extracted by gpt-6-sol and F1 scored, beside sol reviewing directly.
# Usage: zsh bench/planted-defects/run-rp-sol.sh   (from anywhere)
cd "${0:A:h}/../.."
set -a; . ./.env >/dev/null 2>&1; set +a
[ -n "$TAVILY_API_KEY_2" ] && export TAVILY_API_KEY=$TAVILY_API_KEY_2
export RESUMEPILOT_MODEL_PRIMARY=gpt-6-sol RESUMEPILOT_MODEL_SECONDARY=gpt-6-sol RESUMEPILOT_MODEL_CHEAP=gpt-6-sol
export TESTS=tests-final
P=bench/planted-defects
T=(${=TESTS_LIST:-b1-ce b1-pm b1-quant b1-ux b1-ops b1-da b1-fe b1-clin b1-fin b1-emb})
a_done() { grep -q "Wrote the full review to" $1/A.log 2>/dev/null }
for t in $T; do
  d=$P/$TESTS/$t/sol1; mkdir -p $d
  a_done $d || pnpm -s scenario scenarios/bench-review.txt --resume $P/$TESTS/$t/resume.pdf > $d/A.log 2>&1 &
done
wait
for t in $T; do
  d=$P/$TESTS/$t/sol1
  if a_done $d; then
    awk '/^> Here is my resume/{f=1} /requests ·/{f=0} f' $d/A.log | sed 's/\x1b\[[0-9;]*m//g' > $d/A.md
    full=$(sed 's/\x1b\[[0-9;]*m//g' $d/A.log | sed -n 's/^Wrote the full review to \(.*\)\.$/\1/p' | tail -1)
    [ -n "$full" ] && [ -f "$full" ] && mv "$full" $d/A-full.md
    echo "$t: $(grep -h 'requests ·' $d/A.log)"
    [ -s $d/A.claims.sol.json ] || OUT=sol1 EXTRACTOR=sol npx tsx $P/extract-claims.ts $t A &
  else
    echo "$t: A DID NOT FINISH"
  fi
done
wait
OUT=sol1 CLAIMS=.sol F1_OUT=f1.${TAG:-rp-sol}.json python3 $P/f1.py $T
