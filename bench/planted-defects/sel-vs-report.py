"""Selection order vs report order for one run: which groups the selection
chose and in what order, how the code reordered them, and where each landed in
the written report. Usage: python3 bench/planted-defects/sel-vs-report.py <test>"""
import json, pathlib, re, sys
HERE = pathlib.Path(__file__).parent; ROOT = HERE.parent.parent
t = sys.argv[1]
log = (HERE / 'tests' / t / 'out' / 'A.log').read_text()
ev = [json.loads(l) for l in (ROOT / 'tmp' / re.search(r'trace/[^/\s]+/trace\.jsonl', log).group(0)).read_text().splitlines()]
lines, reply, plan = {}, None, None
for i, e in enumerate(ev):
    inp = e.get('input')
    if e.get('phase') == 'input' and isinstance(inp, dict) and inp.get('task') == 'generate_report' and reply is None:
        msg = inp.get('messages', [{}])[-1].get('content', '')
        if 'setAside' in msg:
            for l in msg.split('\n'):
                m = re.match(r'- ([a-z]\d+) \[(.*?)\] (.*)', l)
                if m: lines[m.group(1)] = (m.group(2), m.group(3))
            for f in ev[i + 1:]:
                o = f.get('output')
                if f.get('phase') == 'result' and isinstance(o, dict) and o.get('type') == 'text' and 'chosen' in o.get('content', ''):
                    reply = json.loads(o['content'][o['content'].find('{'):]); break
    if e.get('purpose') == 'plan chosen': plan = e['output']
print(f'# {t}\n\n## A. Selection output, in its own order ({len(reply["chosen"])} groups, {sum(len(g["findings"]) for g in reply.get("setAside", []))} set aside)\n')
for n, g in enumerate(reply['chosen'], 1):
    first = g['findings'][0]; tag, what = lines.get(first, ('?', '?'))
    print(f'{n}. [{g["kind"]}] {",".join(g["findings"])} [{tag}] {what[:110]}')
report = (HERE / 'tests' / t / 'out' / 'A.md').read_text()
body = report[report.find('## Start here'):]
print('\n## B. Report: Start here, then sections in order\n')
for l in body.split('\n'):
    if l.startswith('## ') or re.match(r'(\d+\. |- )\*\*', l): print(l[:150])
