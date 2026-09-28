"""F1 per arm from extracted claims, by rules written from the answer key alone.

Recall: a planted defect counts as found when an item on its line (or on the page,
for page-level defects) says what the rule for that defect looks for. Technical
defects count only when the item calls it an error. Technical and number defects
weigh 2, the rest 1.
Precision: of the items a review marks as errors, the share on a planted line.
An error claimed about a line nothing was planted in is a false alarm.
Usage: TESTS=tests-v3 python3 bench/planted-defects/f1.py b1-ce b1-pm ...
"""
import json, os, pathlib, re, sys

HERE = pathlib.Path(__file__).parent
TESTS = HERE / os.environ.get('TESTS', 'tests')

R = {
    'W1': r"\bown|responsib|in charge|dut(y|ies)|action verb|what (you|they) (did|built|changed)|accomplish",
    'W2': r"pronoun|first[- ]person|\bmy\b",
    'W3': r"tense|present|past|completed role|role (has )?ended|role dates",
    'W4': r"passive|who (did|performed|mapped)|actor|active voice|\bactive\b|your role",
    'W5': r"vague|generic|buzzword|concrete|specif|filler|empty|unclear what|broad|promotional|self-assess|substantiate|does not (say|show|tell|identify) what",
    'W6': r"spell|typo",
    'A1': r"baseline|relative|absolute|compar|against|from what|before|starting",
    'A2': r"percentage[- ]point|\bpoints?\b|\bpp\b|relative",
    'A3': r"incorrect|wrong|actually|math|arithmetic|should be|inconsistent|does not match|doesn.t match|not \d|miscalculat|not (a |an )?\d|conflicts? with|misstat|does not (equal|represent|follow)|correct the|cannot all be right",
    'A4': r"duplicat|same (achievement|result|claim|work|project|figure)|repeat|copied|appears (twice|in both|also)|twice|both entries|double|does not belong|another entry|other entry|wrong entry|same\b.{0,40}\b(achievement|result|claim|work|project|figure|signal|branch)|two (different )?entries|misattribut|wrongly assign",
    'S1': r"lead with|front|buried|bury|end of|start with|result first|beginning|comes (after|last)|after (the|a) (long|list)|hides the result|obscures? .{0,40}(outcome|result)",
    'S2': r"result|impact|outcome|what changed|so what",
    'S3': r"too long|overload|pack|several|split|multiple|cram|dense|too many|unrelated (activities|tasks|duties)|run[- ]on|long|separate|combin|crowded|compete for attention|many contributions",
    'S4': r"strongest|most impressive|(move|put|lead|place).{0,40}(first|top|earlier)|reorder|strong lead",
    'N1': r"unrelated|irrelevant|different (field|career)|not relevant|off[- ]target|distract|additional experience|remove|cut|not (clearly |directly )?(connected|relevant)|relevance is (unexplained|unclear)|departure|interrupt|outside (the )?(product|target|field)|less space|less directly relevant",
    'N2': r"chronolog|reverse|newest|most recent|out of order|more recent|by date|ended .{0,25}after|back to (19|20)\d\d",
    'N3': r"\bgap|unexplained|between",
    'N5': r"birth|nationality|personal",
}
T = {  # technical: both patterns must match, and the item must call it an error
    ('b1-ce', 'T1'): [r"group|single rollout|one rollout|advantage|scored rollout|within-prompt"],
    ('b1-ce', 'T3'): [r"batch", r"single|latency|queue|throughput"],
    ('b1-pm', 'T2'): [r"self[- ]select|selection bias|opt[- ]in|opted|confound|random"],
    ('b1-pm', 'T4'): [r"definition|exclud|denominator|redefin|reclassif|gam|calculation|reporting|metric change|population"],
    ('b1-quant', 'T1'): [r"square root|sqrt|√"],
    ('b1-quant', 'T3'): [r"nested", r"clark|west|invalid|not valid|inappropriate|not (be )?appropriate|not suitable|unsuitable|not provide .{0,20}valid"],
    ('b2-ce', 'T2'): [r"mask", r"tool output|reproduce|exclud|contradict|cannot|can.t|won.t"],
    ('b2-ce', 'T4'): [r"master weight|optimi[sz]er|fp32|precision", r"less than|not 4|cannot|can.t|overstat|won.t|far less|unlikely|not (be )?supported|does not (by itself )?(explain|support)|would not|not adequately"],
    ('b2-pm', 'T1'): [r"session", r"customer|user|independen|same (user|person|customer)|unit"],
    ('b2-pm', 'T3'): [r"reach", r"ticket|impact|double|misplac|wrong|incorrect"],
    ('b2-quant', 'T2'): [r"best of|\b400\b|multiple[- ]testing|deflated|selection bias|snoop|overfit|cherry"],
    ('b2-quant', 'T4'): [r"seed", r"same|identical|independen|correlat"],
}
WEIGHT = {'technical': 2, 'data': 2}

def said_(it):
    """What an item says, with the review's reason for it where the extraction kept one."""
    return norm(it['says'] + ' ' + it.get('because', ''))

def norm(s): return re.sub(r'\s+', ' ', s.replace('’', "'").lower()).strip()

def planted_lines(k, lines):
    """Line numbers a defect sits on; 0 stands for the page as a whole."""
    text = norm(k['line'])
    hits = {i + 1 for i, l in enumerate(lines) if norm(l)[:45] and (norm(l)[:45] in text or text[:45] in norm(l))}
    if k['id'] == 'N1':  # the whole entry: its header and every line under it
        start = min(hits) if hits else None
        if start:
            j = start + 1
            while j <= len(lines) and lines[j - 1].startswith('-'):
                hits.add(j); j += 1
    if k['id'] == 'N4':
        hits |= {i + 1 for i, l in enumerate(lines) if l.split(':')[0] in ('Programming', 'ML & Agents', 'Product', 'Tools', 'Methods')}
    if k['id'] == 'A4' and hits:  # a duplicate has two copies: the planted one and the line it copies
        words = lambda t: set(re.findall(r'[a-z0-9]+', norm(t)))
        copy = words(k['line'])
        overlap = lambda i: len(copy & words(lines[i])) / len(copy | words(lines[i]))
        rest = [i for i in range(len(lines)) if i + 1 not in hits and lines[i].startswith('-')]
        if rest: hits.add(max(rest, key=overlap) + 1)
    if k['id'] in ('N2', 'N3', 'A4', 'N1'):
        hits.add(0)
    if k['id'] in ('N2', 'N3'):  # the entry headers the order and dates live on
        hits |= {i + 1 for i, l in enumerate(lines) if re.search(r'\| (\w{3} \d{4}|Expected)', l) and not l.startswith('-')}
    return hits

def found(test, k, items, lines):
    where = planted_lines(k, lines)
    near = [it for it in items if it.get('line') in where]
    if k['category'] == 'technical':
        # A base's technical sentence is the same in every batch: b4-ce's T1 is b1-ce's.
        base = test.split('-', 1)[1]
        pats = next(v for (t, i), v in T.items() if i == k['id'] and t.split('-', 1)[1] == base)
        said = [it for it in near if all(re.search(p, said_(it)) for p in pats)]
        if any(it['kind'] == 'error' for it in said): return 'right'
        return 'mentioned' if said or near else 'missed'
    if k['id'] == 'N4':
        skill = norm(k['defect'].split('(')[-1].rstrip(')'))
        pat = rf"{re.escape(skill)}"
        ok = [it for it in items if re.search(pat, said_(it)) and re.search(r"evidence|support|not (shown|used|mentioned|demonstrat|reflect)|no .{0,20}(use|experience|project)|nowhere|isn.t|doesn.t appear|remove|only in (the )?skills|appears only|not in the experience|reconsider listing|what you used it for", said_(it))]
        return 'right' if ok else ('mentioned' if near else 'missed')
    if k['id'] == 'W6':
        bad = [w for w in re.findall(r"[a-z]+", norm(k['line'])) if len(w) > 4]
        ok = [it for it in items if re.search(R['W6'], said_(it)) or any(b in said_(it) for b in bad)]
        return 'right' if any(it.get('line') in where for it in ok) or ok else ('mentioned' if near else 'missed')
    ok = [it for it in near if re.search(R[k['id']], said_(it))]
    return 'right' if ok else ('mentioned' if near else 'missed')

rows = {}
for test in sys.argv[1:]:
    d = TESTS / test
    key = json.loads((d / 'key.json').read_text())
    for arm in 'ABCD':
        p = d / os.environ.get('OUT', 'out') / f"{arm}.claims{os.environ.get('CLAIMS', '')}.json"
        if not p.exists(): continue
        c = json.loads(p.read_text()); items, lines = c['items'], c['lines']
        verdicts = {k['id']: found(test, k, items, lines) for k in key}
        w = {k['id']: WEIGHT.get(k['category'], 1) for k in key}
        recall = sum(w[i] for i, v in verdicts.items() if v == 'right') / sum(w.values())
        planted = set().union(*(planted_lines(k, lines) for k in key))
        errors = [it for it in items if it['kind'] == 'error']
        tp = [it for it in errors if it.get('line') in planted]
        precision = len(tp) / len(errors) if errors else 0.0
        f1 = 2 * precision * recall / (precision + recall) if precision + recall else 0.0
        rows.setdefault(arm, []).append((test, recall, precision, f1, len(errors), len(errors) - len(tp), verdicts))
out = {}
for arm, rs in sorted(rows.items()):
    for test, r, p, f, ne, fp, v in rs:
        print(f"{arm} {test:9} recall {r:.2f} precision {p:.2f} F1 {f:.2f}  errors {ne} false {fp}  " +
              ' '.join(f"{i}:{'+' if x=='right' else '~' if x=='mentioned' else '-'}" for i, x in v.items()))
    avg = lambda j: sum(x[j] for x in rs) / len(rs)
    print(f"{arm} MEAN      recall {avg(1):.2f} precision {avg(2):.2f} F1 {avg(3):.2f}\n")
    out[arm] = [{'test': t, 'recall': r, 'precision': p, 'f1': f, 'errors': ne, 'falseAlarms': fp, 'verdicts': v} for t, r, p, f, ne, fp, v in rs]
(TESTS / os.environ.get('F1_OUT', 'f1.json')).write_text(json.dumps(out, indent=2))
