#!/bin/zsh
# ResumePilot with every reader on MODEL, once per résumé in TESTS_LIST, into
# the run folder OUTDIR; claims extracted by gpt-6-sol and F1 scored as TAG.
# Usage: MODEL=gpt-5.6-luna OUTDIR=l56 TAG=rp-l56 zsh bench/planted-defects/run-rp-model.sh
cd "${0:A:h}/../.."
set -a; . ./.env >/dev/null 2>&1; set +a
[ -n "$TAVILY_API_KEY_2" ] && export TAVILY_API_KEY=$TAVILY_API_KEY_2
export RESUMEPILOT_MODEL_PRIMARY=$MODEL RESUMEPILOT_MODEL_SECONDARY=$MODEL RESUMEPILOT_MODEL_CHEAP=$MODEL
export TESTS=tests-final
P=bench/planted-defects
T=(${=TESTS_LIST:-$(for b in 1 2; do for k in ce pm quant ux ops da fe clin fin emb; do print -n "b$b-$k "; done; done)})
a_done() { grep -q "Wrote the full review to" $1/A.log 2>/dev/null }
for i in $(seq 0 10 $((${#T} - 1))); do
  for t in ${T[@]:$i:10}; do
    d=$P/$TESTS/$t/$OUTDIR; mkdir -p $d
    a_done $d || pnpm -s scenario scenarios/bench-review.txt --resume $P/$TESTS/$t/resume.pdf > $d/A.log 2>&1 &
  done
  wait
done
for t in $T; do
  d=$P/$TESTS/$t/$OUTDIR
  if a_done $d; then
    awk '/^> Here is my resume/{f=1} /requests ·/{f=0} f' $d/A.log | sed 's/\x1b\[[0-9;]*m//g' > $d/A.md
    full=$(sed 's/\x1b\[[0-9;]*m//g' $d/A.log | sed -n 's/^Wrote the full review to \(.*\)\.$/\1/p' | tail -1)
    [ -n "$full" ] && [ -f "$full" ] && mv "$full" $d/A-full.md
    echo "$t: $(grep -h 'requests ·' $d/A.log)"
    [ -s $d/A.claims.sol.json ] || OUT=$OUTDIR EXTRACTOR=sol npx tsx $P/extract-claims.ts $t A &
  else
    echo "$t: A DID NOT FINISH"
  fi
done
wait
OUT=$OUTDIR CLAIMS=.sol F1_OUT=f1.$TAG.json python3 $P/f1.py $T
