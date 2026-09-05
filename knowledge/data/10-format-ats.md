# Format & ATS

Most major applicant tracking systems (Workday, Greenhouse, Lever, iCIMS, Taleo) do not write their
own parser — they license Sovren (now Textkernel), DaXtra or RChilli. Those run a five-stage
pipeline:

```
text extraction → tokenisation → section segmentation → entity recognition → field mapping
```

The known error distribution: **multi-column layout ~34%, headers and footers ~22%, non-standard
headings ~17%, decorative glyphs ~12%** — about 85% between them. And the best commercial parsers
manage only about 87% field-level accuracy on a **clean** resume.

This dimension is scored by pure computation; no model call is involved.

---

### Q: Will a two-column layout actually be misread

> Source: ATS parsing error distribution / per-vendor behaviour

**Weak**: "Two-column template, experience on the left and skills on the right — compact and
professional."

**Strong**:

Single column, top to bottom: contact → summary → experience → education → skills.

- The text extractor **reads across the page by position**, weaving the two columns into one
  garbled stream
- Greenhouse parses two columns correctly, but **Taleo, Workday and Lever do not**
- You do not know which one is on the other end, so write for the worst

**Gap**: Multi-column is the **single largest** cause of parsing failure (~34%). What makes it
dangerous is that it fails **silently**: the resume is accepted, and the database stores
"Experience Skills ByteDance Python Backend Intern Docker". No error is raised — you simply never
hear back. Note also that Lever **actively discards sidebar content**, so everything in the right
column disappears.

---

### Q: Is putting contact details in the page header a good use of space

> Source: ATS parsing error distribution — headers and footers ~22%

**Weak**: Name and email in the Word header, body starting at the summary.

**Strong**:

Contact details as the first block of body text, directly under the name; no header or footer
region.

- Many parsers **ignore header and footer XML nodes entirely**
- Others extract them into ghost fields that never reach the application form

**Gap**: Of all formatting mistakes this one has **the worst consequences**, because what is lost
is the contact details. The rest of the resume can parse perfectly and the application is still
dead. Two saved lines, at the cost of the whole document.

---

### Q: Are glyphs like ➤ ✔ ★ a problem as bullet markers

> Source: ATS parsing error distribution — decorative glyphs ~12%

**Weak**: "➤ Led the payment module rebuild ✔ Error rate down 90% after launch"

**Strong**:

"- Led the payment module rebuild, cutting reconciliation error rate from 0.3% to 0.02%"

- Only a handful of markers are safe: `-` `*` `•` `·` `◦`
- Decorative glyphs tokenise as **unknown entities**, polluting every later stage

**Gap**: This is the worst cost-benefit ratio of any formatting error — purely cosmetic, in
exchange for a 12% share of parsing failures. iCIMS drops non-standard bullet characters outright;
other parsers treat them as tokens, swallowing the first word of the bullet or shifting the whole
line.

---

### Q: Should I submit PDF or Word

> Source: DOCX's guaranteed XML order / PDF's drawing-order indeterminacy

**Weak**: "PDF looks the same everywhere, so PDF must be safer."

**Strong**:

Prefer `.docx`; use PDF only when you know the receiving system handles it.

- `.docx` is XML with a **guaranteed element order** — extraction is lossless and no reading-order
  question exists
- A PDF stores only glyphs and coordinates; extraction order follows **the producing tool's
  internal drawing order**
- A scanned PDF has no text layer at all — an ATS reads **nothing**

**Gap**: "Looks the same everywhere" is an advantage for the **human** reader; "parses in a
deterministic order" is an advantage for the **machine** — and the machine is the first gate.
Submitting .docx removes the entire 34% failure class. If PDF is required, make sure it is a **text
PDF** — one where you can select the text with a cursor, not a scan or a screenshot.

---

### Q: What happens with non-standard section headings

> Source: ATS error distribution ~17%; Taleo requires exact matches

**Weak**: "My Journey", "Skill Tree", "Career Journey"

**Strong**:

"Experience", "Projects", "Education", "Skills"

- Parsers maintain a table of **known heading variants**; a hit is what maps the block to a
  standard section
- **Taleo requires an exact match** and handles two-line headings badly
- A miss does not mis-file the content — it leaves the whole block **unclassified**

**Gap**: A creative heading is a **zero-upside, 17%-risk** choice. No recruiter has ever given
someone a second look for renaming "Experience" to "My Journey", but a parser may well drop the
entire work history over it. Section headings are the part of a resume that should have **no
personality at all**.

---

### Q: What about tables, charts and skill progress bars

> Source: DOCX structure warnings / text invisible inside shapes

**Weak**: Skills laid out in a table, with bars like "Python ████████░░ 80%".

**Strong**:

"Skills: TypeScript, Python, Go; Infrastructure: Docker, Kubernetes, PostgreSQL"

- Tables are commonly **flattened row-wise**, scrambling the fields
- Text inside text boxes and drawings is **invisible** to parsers
- A progress bar is both a graphic and an unverifiable self-rating — wrong on both counts

**Gap**: A table looks structured, but the parser sees a flattened run of words with the row and
column relationships gone. The progress bar adds a second error: "Python 80%" has no objective
scale, and Harvard's fact-based requirement asks for something quantifiable **and** checkable — a
self-rating is neither.
