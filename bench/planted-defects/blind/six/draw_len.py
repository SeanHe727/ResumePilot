"""Draws F1 against review length (words) for every arm on the 20 résumés.
Same encoding as draw_pr.py: GPT-5.6 cool, GPT-6 warm; ResumePilot solid and
filled, everything else dashed and hollow. For ResumePilot the words counted
are the brief's, the part that is scored.
Usage: python3 draw_len.py   (writes f1-vs-length.svg and length-summary.json)
"""
import json, pathlib, statistics as st

HERE = pathlib.Path(__file__).parent
TF = HERE.parent.parent / 'tests-final'
T = [f'b{b}-{k}' for b in (1, 2) for k in ('ce', 'pm', 'quant', 'ux', 'ops', 'da', 'fe', 'clin', 'fin', 'emb')]


def load(f, arm):
    return {x['test']: x for x in json.loads((TF / f).read_text()).get(arm, [])}


# Where each arm's reviews and scores live: (run folder, review file, F1 file, arm key in it).
SRC = {
    'A': [('mid1', 'A.md', ('f1.mid1.json', 'f1.new.mid1.json', 'f1.ten.mid1.json'), 'A'),
          ('mid2', 'A.md', ('f1.mid2.json', 'f1.new.mid2.json', 'f1.ten.mid2.json'), 'A')],
    'L': [('l56', 'A.md', ('f1.rp-l56.json',), 'A')],
    'S': [('sol1', 'A.md', ('f1.rp-sol.json', 'f1.rp-sol-b2.json'), 'A')],
    'M': [('s56', 'A.md', ('f1.rp-s56.json',), 'A')],
    'B': [('run1', 'B.md', ('f1.skills-b.json',), 'B')],
    'C': [('run1', 'C.md', ('f1.run1.json', 'f1.new.run1.json', 'f1.ten.run1.json'), 'C')],
    'E': [('run1', 'E.md', ('f1.skills.json',), 'E')],
    'F': [('run1', 'F.md', ('f1.skills.json',), 'F')],
    'G': [('run1', 'G.md', ('f1.skills.json',), 'G')],
    'H': [('run1', 'H.md', ('f1.gpt56.json',), 'H')],
    'I': [('run1', 'I.md', ('f1.gpt56.json',), 'I')],
}


def words(path, brief):
    t = path.read_text()
    if brief and '# Review' in t:
        t = t[t.index('# Review'):]
    return len(t.split())


summary = {}
for a, runs in SRC.items():
    per_w, per_f = [], []
    for t in T:
        ws, fs = [], []
        for folder, name, files, key in runs:
            scores = {}
            for f in files:
                scores.update(load(f, key))
            ws.append(words(TF / t / folder / name, name == 'A.md'))
            fs.append(scores[t]['f1'])
        per_w.append(st.mean(ws))
        per_f.append(st.mean(fs))
    n = len(T)
    summary[a] = {'words': st.mean(per_w), 'words_se': st.stdev(per_w) / n ** .5,
                  'f1': st.mean(per_f), 'f1_se': st.stdev(per_f) / n ** .5}
(HERE / 'length-summary.json').write_text(json.dumps(summary, indent=1))

names = {'A': 'ResumePilot (luna 6)', 'L': 'ResumePilot (luna 5.6)', 'S': 'ResumePilot (sol 6)', 'M': 'ResumePilot (sol 5.6)',
         'I': 'sol 5.6', 'H': 'luna 5.6', 'B': 'luna 6', 'C': 'sol 6', 'G': 'LLMInternSkill (luna 6)',
         'E': 'cyber-resume-reviewer (luna 6)', 'F': 'ResumeSkills (luna 6)'}
col = {'L': '#2a78d6', 'M': '#4a3aa7', 'H': '#1baf7a', 'I': '#0f8a8a',
       'A': '#e34948', 'S': '#eb6834', 'B': '#eda100', 'C': '#e87ba4',
       'G': '#b5541f', 'E': '#a8324a', 'F': '#c98500'}
ours = {'A', 'L', 'S', 'M'}
W, H = 1000, 680
L, R, T0, B = 80, 280, 60, 60
x0, x1, y0, y1 = 500, 3000, 0.70, 0.92
X = lambda v: L + (v - x0) / (x1 - x0) * (W - L - R)
Y = lambda v: H - B - (v - y0) / (y1 - y0) * (H - T0 - B)

o = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" font-family="Helvetica, Arial, sans-serif">',
     f'<rect width="{W}" height="{H}" fill="#fcfcfb"/>',
     f'<text x="{L}" y="32" font-size="17" font-weight="600" fill="#0b0b0b">F1 vs review length</text>']
for v in range(500, 3001, 500):
    o.append(f'<line x1="{X(v):.1f}" y1="{T0}" x2="{X(v):.1f}" y2="{H - B}" stroke="#e6e5e0"/><text x="{X(v):.1f}" y="{H - B + 18}" font-size="11" fill="#52514e" text-anchor="middle">{v:,}</text>')
for v in [0.70, 0.74, 0.78, 0.82, 0.86, 0.90]:
    o.append(f'<line x1="{L}" y1="{Y(v):.1f}" x2="{W - R}" y2="{Y(v):.1f}" stroke="#e6e5e0"/><text x="{L - 8}" y="{Y(v) + 4:.1f}" font-size="11" fill="#52514e" text-anchor="end">{v:.2f}</text>')
o.append(f'<text x="{(L + W - R) / 2}" y="{H - B + 42}" font-size="12" fill="#0b0b0b" text-anchor="middle">Words per review</text>')
o.append(f'<text transform="translate(26,{(T0 + H - B) / 2}) rotate(-90)" font-size="12" fill="#0b0b0b" text-anchor="middle">F1</text>')


def dot(a, cx, cy, r, title=''):
    t = f'<title>{title}</title>' if title else ''
    if a not in ours:
        return f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r - 1}" fill="#fcfcfb" stroke="{col[a]}" stroke-width="2.5">{t}</circle>'
    return f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r}" fill="{col[a]}" stroke="#fcfcfb" stroke-width="2">{t}</circle>'


for a in sorted(summary, key=lambda a: (a in ours, summary[a]['f1'])):
    d = summary[a]
    cx, cy = X(d['words']), Y(d['f1'])
    dash = '' if a in ours else ' stroke-dasharray="3 2"'
    o.append(f'<line x1="{X(d["words"] - d["words_se"]):.1f}" y1="{cy:.1f}" x2="{X(d["words"] + d["words_se"]):.1f}" y2="{cy:.1f}" stroke="{col[a]}" stroke-width="2"{dash}/>'
             f'<line x1="{cx:.1f}" y1="{Y(max(y0, d["f1"] - d["f1_se"])):.1f}" x2="{cx:.1f}" y2="{Y(d["f1"] + d["f1_se"]):.1f}" stroke="{col[a]}" stroke-width="2"{dash}/>')
    o.append(dot(a, cx, cy, 7 if a in ours else 5.5, f'{names[a]}: {d["words"]:.0f} words, F1 {d["f1"]:.3f}'))
lx, ly = W - R + 30, T0 + 8
for a in sorted(summary, key=lambda a: -summary[a]['f1']):
    d = summary[a]
    o.append(dot(a, lx, ly, 5) + f'<text x="{lx + 12}" y="{ly + 4}" font-size="12" fill="#0b0b0b">{names[a]}</text>'
             f'<text x="{lx + 12}" y="{ly + 19}" font-size="11" fill="#52514e">F1 {d["f1"]:.3f} · {d["words"]:,.0f} words</text>')
    ly += 50
o.append('</svg>')
(HERE / 'f1-vs-length.svg').write_text('\n'.join(o))
