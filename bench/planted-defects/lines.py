"""Which résumé lines a review talks about, by shared five-word runs."""
import re
def norm(t): return re.sub(r'[^a-z0-9%.$ ]', ' ', t.lower().replace('’', "'")).split()
def grams(words, n=5): return {' '.join(words[i:i+n]) for i in range(len(words)-n+1)}
def resume_lines(text):
    out=[]
    for l in text.split('\n'):
        l=l.strip()
        if not l or l.isupper(): continue
        out.append(l.lstrip('- ').strip())
    return out
def mentioned(review, lines, n=5):
    r=' '.join(norm(review)); hits=[]
    for i,l in enumerate(lines):
        g=grams(norm(l), n) if len(norm(l))>=n else {' '.join(norm(l))}
        if any(x in r for x in g): hits.append(i)
    return hits
