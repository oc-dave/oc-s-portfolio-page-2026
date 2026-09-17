#!/usr/bin/env python3
"""Generate a print-ready CV PDF from the portfolio content."""

from pathlib import Path

OUT = Path("/workspace/public/assets/David_Okechukwu_CV.pdf")

# Minimal single-page PDF (Helvetica). Content mirrors src/lib/site.ts.
# Swap this file anytime — the site downloads /assets/David_Okechukwu_CV.pdf.

def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


lines = [
    ("B", 22, "DAVID OKECHUKWU"),
    ("", 11, "Frontend Developer  ·  Web Designer  ·  Lagos, Nigeria"),
    ("", 10, "+234 814 227 7301  ·  davidokechukwu18@gmail.com  ·  ocdave18@gmail.com"),
    ("", 10, "github.com/oc-dave  ·  linkedin.com/in/david-chinenye-okechukwu-86971333a"),
    ("SP", 0, ""),
    ("B", 12, "SUMMARY"),
    (
        "",
        10,
        "Front-End Developer with experience in Next.js, React, HTML, CSS, and TypeScript (TSX).",
    ),
    (
        "",
        10,
        "Passionate about building responsive, user-friendly web applications with clean, maintainable",
    ),
    (
        "",
        10,
        "code. Quick learner with a problem-solving mindset and a solid foundation in Java and Python.",
    ),
    (
        "",
        10,
        "Always eager to take on new challenges, collaborate with teams, and grow in a dynamic environment.",
    ),
    ("SP", 0, ""),
    ("B", 12, "SKILLS"),
    (
        "",
        10,
        "HTML5  ·  CSS3  ·  JavaScript  ·  TypeScript  ·  React  ·  Next.js  ·  Responsive Design",
    ),
    ("", 10, "UI/UX  ·  Git  ·  Java  ·  Python"),
    ("SP", 0, ""),
    ("B", 12, "SELECTED WORK"),
    ("B", 11, "AHO Mansions  —  React, Node.js  —  aho-mansions.vercel.app"),
    (
        "",
        10,
        "Real-estate investment platform that makes property investing accessible, with an intuitive",
    ),
    ("", 10, "interface and an affordable entry point."),
    ("B", 11, "Ekekhen Think Tank  —  Bootstrap, Tailwind, JavaScript  —  ekekhenthinktank.com.ng"),
    (
        "",
        10,
        "Civic website for the association improving Ekekhen, Edo State through roads, streetlights,",
    ),
    ("", 10, "and water installations. Fully responsive with interactive sections."),
    ("B", 11, "TicTacToe  —  React  —  dave-s-x-and-o.vercel.app"),
    (
        "",
        10,
        "A difficult computer opponent, sleek interface, and high-intensity play.",
    ),
    ("B", 11, "QR Code Generator  —  React, TypeScript  —  qr-gen-omega-two.vercel.app"),
    (
        "",
        10,
        "Generate and download QR codes for any URL, with empty-input handling and a clean UI.",
    ),
    ("B", 11, "Dictionary Web App  —  HTML, CSS, JavaScript  —  oc-dave.github.io/dictionary-web-app"),
    (
        "",
        10,
        "Live definitions, pronunciations, examples, and audio — responsive across devices.",
    ),
    ("SP", 0, ""),
    ("B", 12, "SERVICES"),
    ("", 10, "Web Development  ·  UI/UX Design  ·  Mobile Optimization"),
]

# Build PDF content stream
y = 780
chunks: list[str] = []
for kind, size, text in lines:
    if kind == "SP":
        y -= 14
        continue
    font = "F2" if kind == "B" else "F1"
    y -= size + 6
    chunks.append(f"BT /{font} {size} Tf 48 {y} Td ({esc(text)}) Tj ET")

stream = "\n".join(chunks).encode("latin-1", "replace")

objects = []

def add(obj: bytes) -> int:
    objects.append(obj)
    return len(objects)

add(b"<< /Type /Catalog /Pages 2 0 R >>")
add(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
add(
    b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>"
)
add(b"<< /Length %d >>\nstream\n" % len(stream) + stream + b"\nendstream")
add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

out = bytearray(b"%PDF-1.4\n")
offsets = [0]
for i, obj in enumerate(objects, 1):
    offsets.append(len(out))
    out.extend(f"{i} 0 obj\n".encode())
    out.extend(obj)
    out.extend(b"\nendobj\n")

xref = len(out)
out.extend(f"xref\n0 {len(objects)+1}\n".encode())
out.extend(b"0000000000 65535 f \n")
for off in offsets[1:]:
    out.extend(f"{off:010d} 00000 n \n".encode())
out.extend(
    f"trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode()
)

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_bytes(out)
print(f"wrote {OUT} ({len(out)} bytes)")
