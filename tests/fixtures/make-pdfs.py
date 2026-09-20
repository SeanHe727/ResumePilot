#!/usr/bin/env python3
"""Generates the PDF fixtures used by the extractor tests.

Hand-built rather than produced by a word processor so the exact thing under
test — where each line sits on the page, and in what order the content stream
draws it — is controlled and stable. Re-run only when the fixtures change.
"""
import sys, pathlib

def pdf(lines, page=(612, 792)):
    """lines: list of (x, y, size, text) drawn in the given order."""
    ops = []
    for x, y, size, text in lines:
        esc = text.replace('\\', r'\\').replace('(', r'\(').replace(')', r'\)')
        ops.append(f"BT /F1 {size} Tf {x} {y} Td ({esc}) Tj ET")
    stream = "\n".join(ops).encode('latin-1')

    objs = [
        b"<</Type/Catalog/Pages 2 0 R>>",
        b"<</Type/Pages/Kids[3 0 R]/Count 1>>",
        (f"<</Type/Page/Parent 2 0 R/MediaBox[0 0 {page[0]} {page[1]}]"
          "/Resources<</Font<</F1 4 0 R>>>>/Contents 5 0 R>>").encode('latin-1'),
        b"<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>",
        b"<</Length " + str(len(stream)).encode() + b">>\nstream\n" + stream + b"\nendstream",
    ]

    out = bytearray(b"%PDF-1.4\n")
    offsets = []
    for i, body in enumerate(objs, start=1):
        offsets.append(len(out))
        out += f"{i} 0 obj\n".encode() + body + b"\nendobj\n"

    xref_at = len(out)
    out += f"xref\n0 {len(objs) + 1}\n".encode()
    out += b"0000000000 65535 f \n"
    for off in offsets:
        out += f"{off:010d} 00000 n \n".encode()
    out += f"trailer\n<</Size {len(objs) + 1}/Root 1 0 R>>\nstartxref\n{xref_at}\n%%EOF\n".encode()
    return bytes(out)


here = pathlib.Path(__file__).parent

# Single column: every line at the same left margin, drawn top to bottom.
single = [(72, 720, 16, "Sean Chen"),
          (72, 700, 10, "sean@example.com"),
          (72, 660, 13, "Experience"),
          (72, 640, 10, "ByteDance - Backend Intern | 2025.06 - 2025.09"),
          (72, 624, 10, "- Reduced P99 latency from 800ms to 90ms"),
          (72, 608, 10, "- Migrated 12 services to the new pipeline"),
          (72, 570, 13, "Skills"),
          (72, 550, 10, "TypeScript, Python, Go")]
(here / "single-column.pdf").write_bytes(pdf(single))

# Two columns sharing the same vertical band, drawn column by column — the
# layout that makes a parser reading straight across the page produce nonsense.
left = [(72, y, 10, t) for y, t in [
    (700, "Experience"), (680, "ByteDance - Backend Intern"),
    (664, "- Reduced P99 latency to 90ms"), (648, "- Migrated 12 services"),
    (620, "Tencent - SWE Intern"), (604, "- Built a log aggregation tool")]]
right = [(340, y, 10, t) for y, t in [
    (700, "Skills"), (680, "TypeScript"), (664, "Python"),
    (648, "Kubernetes"), (620, "Education"), (604, "Tongji University")]]
(here / "two-column.pdf").write_bytes(pdf(left + right))

# An entry header whose right-aligned date is drawn *after* the line below it,
# and in a larger size — pdf.js hands back drawing order, not reading order, and
# a rebuild that trusts it files the date as a line of its own. Bullets run past
# the date's left edge on purpose, so the page has no gutter and the column
# guard has no opinion about it.
late_date = [(72, 720, 16, "Sean Chen"),
             (72, 700, 10, "sean@example.com"),
             (72, 660, 13, "Experience"),
             (72, 640, 11, "ByteDance - Backend Intern"),
             (72, 624, 10, "- Reduced P99 latency from 800ms to 90ms across every service in the fleet"),
             (72, 608, 10, "- Migrated 12 services to the new pipeline with no downtime at all for users"),
             (430, 640, 12, "2025.06 - 2025.09")]
(here / "late-date.pdf").write_bytes(pdf(late_date))

# Two columns under a full-width name banner — what a real two-column resume
# looks like. The banner covers every bucket the gutter runs through, so a
# guard that looks for whitespace spanning the whole page sees one column.
banner = [(72, 740, 16, "Sean Chen")] + left + right
(here / "banner-two-column.pdf").write_bytes(pdf(banner))

# Two columns interrupted by a full-width section heading halfway down. A line
# running across the page divides it; it does not settle what is above and
# below, and reading either half straight across still garbles it.
split = [(72, 740, 16, "Sean Chen")]
split += [(72, y, 10, t) for y, t in [
    (700, "Experience"), (680, "ByteDance - Backend Intern"),
    (664, "- Reduced P99 latency to 90ms")]]
split += [(340, y, 10, t) for y, t in [
    (700, "Skills"), (680, "TypeScript"), (664, "Python")]]
split += [(72, 640, 13, "PROJECTS AND OPEN SOURCE CONTRIBUTIONS OVER THE YEARS")]
split += [(72, y, 10, t) for y, t in [
    (610, "ResumePilot"), (594, "- Agent runtime"), (578, "- Document parsing")]]
split += [(340, y, 10, t) for y, t in [
    (610, "Education"), (594, "Tongji University"), (578, "B.S. Computer Science")]]
(here / "split-two-column.pdf").write_bytes(pdf(split))

# The shape the real resume takes, and the one the other fixtures do not cover:
# section headings set at body size in full capitals, with entry headings a
# point *larger*. Ranked by size alone every employer here outranks EXPERIENCE.
# LEADERSHIP is deliberately not in the heading vocabulary, and SENIOR ENGINEER
# is an all-capitals job title inside a section — set like a heading, with only
# body spacing above it.
caps = [(72, 740, 17, "Sean He"),
        (72, 726, 10, "+1 555 0100 | sean@example.com | github.com/sean"),
        (72, 712, 10, "EDUCATION"),
        (72, 697, 10.9, "University of Washington Seattle, WA"),
        (72, 685, 10, "M.S. in Electrical and Computer Engineering  Sep 2025 - Jun 2027"),
        (72, 667, 10, "EXPERIENCE"),
        (72, 651, 10.9, "NIO Inc. Hefei, China"),
        (72, 639, 10, "SENIOR ENGINEER"),
        (72, 627, 10, "- Built an agent system that cut the backlog by 74%"),
        (72, 615, 10, "- Designed a role-aware routing layer for four specialists"),
        (72, 597, 10, "LEADERSHIP"),
        (72, 581, 10.9, "Student Council President"),
        (72, 569, 10, "- Ran the society for two years and doubled its membership"),
        (72, 551, 10, "SKILLS"),
        (72, 535, 10, "Programming: Python, TypeScript, SQL, Bash, Git")]
(here / "caps-headings.pdf").write_bytes(pdf(caps))

# Wrapped lines set flush with the text above them, which is what says they
# are the rest of it. Also the two levels a bullet can belong to — SUMMARY has
# bullets of its own before any entry exists, EXPERIENCE has bullets under one —
# and a bare date range in both positions: after an entry's bullets, where it
# carries on that entry's header, and with no entry open at all, where it is
# something the section says and must not open anything.
hanging = [(72, 740, 17, "Sean He"),
           (72, 726, 10, "+1 555 0100 | sean@example.com"),
           (72, 706, 10, "SUMMARY"),
           (74, 690, 10, "- Backend engineer with six years on payment systems,"),
           (83, 678, 10, "measuring what shipped rather than what was planned."),
           (72, 658, 10, "EXPERIENCE"),
           (72, 642, 10.9, "NIO Inc. Hefei, China"),
           (72, 630, 10, "AI Research Intern  Oct 2024 - May 2025"),
           (74, 618, 10, "- Built an agent system that cut the inspection backlog by 74%,"),
           (83, 606, 10, "automating triage of 1,000+ signals per case."),
           (74, 594, 10, "- Designed a role-aware routing layer for four specialists"),
           (72, 574, 10, "PROJECTS"),
           (72, 558, 10.9, "ResumePilot | Owner | TypeScript"),
           (74, 546, 10, "- Improved planted-defect localization from 27% to 73%"),
           (72, 534, 10, "Aug 2026 - Present"),
           (72, 514, 10, "AWARDS"),
           (72, 498, 10, "2023 - 2024"),
           (72, 486, 10, "Dean's List, University of Washington")]
(here / "hanging-indent.pdf").write_bytes(pdf(hanging))

# A page with no text operators at all — what a scanned resume looks like.
(here / "scanned.pdf").write_bytes(pdf([]))

for f in ("single-column.pdf", "two-column.pdf", "banner-two-column.pdf",
          "split-two-column.pdf", "late-date.pdf", "caps-headings.pdf",
          "hanging-indent.pdf", "scanned.pdf"):
    print(f, (here / f).stat().st_size, "bytes")
