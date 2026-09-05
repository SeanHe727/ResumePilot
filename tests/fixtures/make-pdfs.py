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

# A page with no text operators at all — what a scanned resume looks like.
(here / "scanned.pdf").write_bytes(pdf([]))

for f in ("single-column.pdf", "two-column.pdf", "scanned.pdf"):
    print(f, (here / f).stat().st_size, "bytes")
