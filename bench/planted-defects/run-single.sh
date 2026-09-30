#!/bin/zsh
# The single-agent ablation on the 20 résumés of the unified table, once each,
# then the paired comparison against ResumePilot (mid1/mid2).
# VARIANT=1 merges the specialists into one agent and keeps the nested research;
# VARIANT=flat also removes every sub-agent beneath it.
# Usage: VARIANT=flat OUTDIR=flat zsh bench/planted-defects/run-single.sh
cd "${0:A:h}/../.."
: ${VARIANT:?set VARIANT to 1 or flat} ${OUTDIR:?set OUTDIR}
P=bench/planted-defects
for b in 1 2; do
  L=$(for k in ce pm quant ux ops da fe clin fin emb; do print -n "b$b-$k "; done)
  RESUMEPILOT_SINGLE_AGENT=$VARIANT MODEL=gpt-6-luna OUTDIR=$OUTDIR TESTS_LIST="$L" TAG=$OUTDIR-b$b \
    zsh $P/run-rp-model.sh
done
python3 $P/paired.py $OUTDIR-b1 $OUTDIR-b2
