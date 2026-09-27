"""For each planted defect: what ResumePilot's readers found before selection,
whether selection kept it, and whether the plain sol review (C) caught it.
Usage: python3 bench/planted-defects/raw-vs-c.py <run dir name> b1-ce b1-pm b1-quant
"""
import json, pathlib, re, sys

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parent.parent
run = sys.argv[1]

def findings_of(trace):
    ev = [json.loads(l) for l in trace.read_text().splitlines()]
    for i, e in enumerate(ev):
        inp = e.get('input')
        if e.get('phase') == 'input' and isinstance(inp, dict) and inp.get('task') == 'generate_report':
            msg = inp.get('messages', [{}])[-1].get('content', '')
            if 'setAside' not in msg:
                continue
            lines = [l for l in msg.split('\n') if re.match(r'- [a-z]\d+ \[', l)]
            for f in ev[i + 1:]:
                o = f.get('output')
                if f.get('phase') == 'result' and isinstance(o, dict) and o.get('type') == 'text' and 'chosen' in o.get('content', ''):
                    reply = json.loads(o['content'][o['content'].find('{'):])
                    chosen = {n for g in reply.get('chosen', []) for n in g['findings']}
                    return lines, chosen
    return [], set()

out = ['# 植入缺陷：ResumePilot 原始诊断 vs sol（C）', '',
       f'运行：`{run}`。「原始发现」是选择步骤之前所有审查员对这一行的发现（✓ 表示被选进报告）。',
       '「报告里」「C」两列来自自动评委（deepseek）按答案表的判定。', '']
for t in sys.argv[2:]:
    d = HERE / 'tests' / t
    key = json.loads((d / 'key.json').read_text())
    ids = json.loads((d / 'ids.json').read_text())
    log = (d / 'out' / run / 'A.log').read_text()
    trace = ROOT / 'tmp' / re.search(r'trace/[^/\s]+/trace\.jsonl', log).group(0)
    lines, chosen = findings_of(trace)
    a_found = set(json.loads((d / 'out' / run / 'A.judge.json').read_text())['found'])
    c_found = set(json.loads((d / 'out' / 'C.judge.json').read_text())['found'])
    out += [f'## {t}（原始发现 {len(lines)} 条，选中 {len(chosen)} 条）', '',
            '| 缺陷 | 内容 | 原始发现（该行） | 报告里 | C |', '|---|---|---|---|---|']
    for k in key:
        text = k['line']
        norm = lambda x: re.sub(r'[’‘]', "'", x)
        bid = next((i for i, v in ids.items() if ':b' in i and (norm(text)[:40] in norm(v) or norm(v)[:40] in norm(text))), None)
        hits = [l for l in lines if bid and (f'[{bid}' in l or f'[{bid},' in l)] if bid else []
        if not bid:  # order, dates, skills, personal details: search the words instead
            words = [w for w in re.findall(r'[A-Za-z]{5,}', text)][:3]
            hits = [l for l in lines if any(w.lower() in l.lower() for w in words) and ('whole resume' in l or 'skills' in l or 'format' in l)]
        cell = '<br>'.join(('✓ ' if l.split()[1] in chosen else '✗ ') + re.sub(r'\s+', ' ', l[2:])[:110].replace('|', '/') for l in hits[:4]) or '（没有发现）'
        out.append(f"| {k['id']} | {k['defect'][:70]} | {cell} | {'✅' if k['id'] in a_found else '❌'} | {'✅' if k['id'] in c_found else '❌'} |")
    out.append('')
(HERE / 'blind' / 'raw-vs-c.md').write_text('\n'.join(out))
print('\n'.join(out)[:3000])
