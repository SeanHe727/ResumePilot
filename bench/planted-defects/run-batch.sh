#!/bin/zsh
# Usage: bench/planted-defects/run-batch.sh <batch number>   (run from the repo root)
set -a; . ./.env >/dev/null 2>&1; set +a
tests=($(python3 -c "import json;print(' '.join(m['id'] for m in json.load(open('bench/planted-defects/tests/manifest.json')) if m['batch']==$1))"))
for t in $tests; do
  mkdir -p bench/planted-defects/tests/$t/out
  pnpm -s scenario scenarios/bench-review.txt --resume bench/planted-defects/tests/$t/resume.pdf > bench/planted-defects/tests/$t/out/A.log 2>&1 &
  for a in B C D; do npx tsx bench/planted-defects/arms.ts $a $t > bench/planted-defects/tests/$t/out/$a.run.log 2>&1 & done
done
wait
for t in $tests; do
  awk '/^> Here is my resume/{f=1} /requests ·/{f=0} f' bench/planted-defects/tests/$t/out/A.log | sed 's/\x1b\[[0-9;]*m//g' > bench/planted-defects/tests/$t/out/A.md
  full=$(sed 's/\x1b\[[0-9;]*m//g' bench/planted-defects/tests/$t/out/A.log | sed -n 's/^Wrote the full review to \(.*\)\.$/\1/p' | tail -1)
  [ -n "$full" ] && [ -f "$full" ] && mv "$full" bench/planted-defects/tests/$t/out/A-full.md
  for a in A B C D; do npx tsx bench/planted-defects/judge.ts $t $a > bench/planted-defects/tests/$t/out/$a.judge.log 2>&1 & done
done
wait
for t in $tests; do grep -h "requests ·" bench/planted-defects/tests/$t/out/A.log; cat bench/planted-defects/tests/$t/out/*.run.log bench/planted-defects/tests/$t/out/*.judge.log; done
