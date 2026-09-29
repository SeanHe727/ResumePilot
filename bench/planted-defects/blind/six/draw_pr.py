"""Draws precision against recall for every arm in pr-summary.json.
Hollow markers with dashed bars are the GPT-5.6 versions of the same arm.
Usage: python3 draw_pr.py   (writes precision-recall.svg beside it)
"""
import json, pathlib

HERE = pathlib.Path(__file__).parent
s = json.loads((HERE / 'pr-summary.json').read_text())
names = {'A': 'ResumePilot (luna 6)', 'L': 'ResumePilot (luna 5.6)', 'S': 'ResumePilot (sol 6)', 'M': 'ResumePilot (sol 5.6)',
         'I': 'sol 5.6', 'H': 'luna 5.6', 'B': 'luna 6', 'C': 'sol 6', 'G': 'LLMInternSkill (luna 6)',
         'E': 'cyber-resume-reviewer (luna 6)', 'F': 'ResumeSkills (luna 6)'}
col = {'A': '#2a78d6', 'L': '#2a78d6', 'S': '#4a3aa7', 'M': '#4a3aa7', 'C': '#eb6834', 'I': '#eb6834',
       'B': '#1baf7a', 'H': '#1baf7a', 'G': '#eda100', 'E': '#e87ba4', 'F': '#008300'}
hollow = {'H', 'I', 'L', 'M'}
big = {'A', 'L', 'S', 'M'}
W, H = 1000, 680
L, R, T, B = 80, 280, 60, 60
x0, x1, y0, y1 = 0.55, 0.95, 0.85, 1.00
X = lambda v: L + (v - x0) / (x1 - x0) * (W - L - R)
Y = lambda v: H - B - (v - y0) / (y1 - y0) * (H - T - B)

o = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" font-family="Helvetica, Arial, sans-serif">',
     f'<rect width="{W}" height="{H}" fill="#fcfcfb"/>',
     f'<text x="{L}" y="32" font-size="17" font-weight="600" fill="#0b0b0b">Precision vs recall on planted résumé defects</text>',
     f'<clipPath id="plot"><rect x="{L}" y="{T}" width="{W - L - R}" height="{H - T - B}"/></clipPath>']
for v in [0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95]:
    o.append(f'<line x1="{X(v):.1f}" y1="{T}" x2="{X(v):.1f}" y2="{H - B}" stroke="#e6e5e0"/><text x="{X(v):.1f}" y="{H - B + 18}" font-size="11" fill="#52514e" text-anchor="middle">{v:.2f}</text>')
for v in [0.85, 0.88, 0.91, 0.94, 0.97, 1.00]:
    o.append(f'<line x1="{L}" y1="{Y(v):.1f}" x2="{W - R}" y2="{Y(v):.1f}" stroke="#e6e5e0"/><text x="{L - 8}" y="{Y(v) + 4:.1f}" font-size="11" fill="#52514e" text-anchor="end">{v:.2f}</text>')
for f in (0.70, 0.75, 0.80, 0.85, 0.90):
    pts, r = [], x0
    while r <= x1 + 1e-9:
        if 2 * r - f > 0:
            p = f * r / (2 * r - f)
            if y0 - 0.02 <= p <= 1.02:
                pts.append(f'{X(r):.1f},{Y(p):.1f}')
        r += 0.002
    o.append(f'<polyline clip-path="url(#plot)" points="{" ".join(pts)}" fill="none" stroke="#b5b3aa" stroke-width="1" stroke-dasharray="4 4"/>')
    rl = f / (2 - f)
    if x0 < rl < x1:
        o.append(f'<text x="{X(rl) + 4:.1f}" y="{T + 12}" font-size="10" fill="#8a8880">F1 {f:.2f}</text>')
o.append(f'<text x="{(L + W - R) / 2}" y="{H - B + 42}" font-size="12" fill="#0b0b0b" text-anchor="middle">Recall</text>')
o.append(f'<text transform="translate(26,{(T + H - B) / 2}) rotate(-90)" font-size="12" fill="#0b0b0b" text-anchor="middle">Precision</text>')


def dot(a, cx, cy, r, title=''):
    t = f'<title>{title}</title>' if title else ''
    if a in hollow:
        return f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r - 1}" fill="#fcfcfb" stroke="{col[a]}" stroke-width="2.5">{t}</circle>'
    return f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r}" fill="{col[a]}" stroke="#fcfcfb" stroke-width="2">{t}</circle>'


# Small arms first, so ResumePilot draws on top.
for a in sorted(s, key=lambda a: (a in big, s[a]['f1'])):
    d = s[a]
    cx, cy = X(d['recall']), Y(d['precision'])
    dash = ' stroke-dasharray="3 2"' if a in hollow else ''
    o.append(f'<line x1="{X(d["recall"] - d["recall_se"]):.1f}" y1="{cy:.1f}" x2="{X(d["recall"] + d["recall_se"]):.1f}" y2="{cy:.1f}" stroke="{col[a]}" stroke-width="2"{dash}/>'
             f'<line x1="{cx:.1f}" y1="{Y(max(y0, d["precision"] - d["precision_se"])):.1f}" x2="{cx:.1f}" y2="{Y(min(1, d["precision"] + d["precision_se"])):.1f}" stroke="{col[a]}" stroke-width="2"{dash}/>')
    o.append(dot(a, cx, cy, 7 if a in big else 5.5, f'{names[a]}: recall {d["recall"]:.3f}, precision {d["precision"]:.3f}, F1 {d["f1"]:.3f}'))
lx, ly = W - R + 30, T + 8
for a in sorted(s, key=lambda a: -s[a]['f1']):
    d = s[a]
    o.append(dot(a, lx, ly, 5) + f'<text x="{lx + 12}" y="{ly + 4}" font-size="12" fill="#0b0b0b">{names[a]}</text>'
             f'<text x="{lx + 12}" y="{ly + 19}" font-size="11" fill="#52514e">F1 {d["f1"]:.3f} · R {d["recall"]:.2f} · P {d["precision"]:.2f}</text>')
    ly += 50
o.append('</svg>')
(HERE / 'precision-recall.svg').write_text('\n'.join(o))
