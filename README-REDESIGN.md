# Lightyear website redesign — November 2026

Drop-in replacements for the eight pages of `howardweale/lightyear-website`:
`index.html`, `product.html`, `verify.html`, `solutions.html`, `proof.html`,
`pricing.html`, `resources.html`, `engineers.html`.

- Static HTML, no build step, no dependencies beyond Google Fonts (IBM Plex, Archivo).
- Brand system: navy #15184D, violet #7D57EA, bronze #A7702C, IBM Plex.
- Animations are inline (no iframes): the 10-second repair loop (index),
  Dark Factory at Work (proof) and Your Agent, One Judge (verify), each with
  Pause, and prefers-reduced-motion respected.
- Leave `CNAME` as it is. `loop-in-10-seconds.html`, `dark-factory-at-work.html`,
  `verify-animation.html`, `verify-how-it-works.html` and `index-9.html` are no
  longer linked and can be kept or removed.
- Placeholder links to fill before publishing: "View receipt", "Get the verifier",
  "Download the evidence pack", "Send us one job", and the Sprint booking buttons
  (they point at in-page anchors today).

## Update 2026-11-06: one-cent section
Homepage now has an interactive "One cent. A different verdict." section directly under the hero
(`#one-cent`). One button toggles the rewrite's MONTHLY-INT value from 18.27 to 18.28 and the verdict
from MATCH to NOT EQUIVALENT. Plain inline JS at the bottom of index.html; no dependencies.
Brand colours unchanged (navy #15184D, violet #7D57EA, bronze #A7702C, lavender #EFEBFB).

## Update 2026-11-07: competitive improvements (after modelcode.ai review)
Homepage (index.html):
1. "The product" section with an illustrated (HTML) view of Control Tower: gates, a blocked
   promotion and a signed audit trail. No real screenshot is published.
2. "Cost certainty" section: what the Sprint's backlog business case contains.
3. Trust strip at the bottom of the hero (runs read-only in your cloud, data stays put, hardware-key
   sign-off, replayable evidence, Security pack link).
4. Proof section rebuilt as four reference-workload case cards (core banking, ERP, Oracle→AlloyDB,
   SQL Server procedures) plus the knowledge-graph line.
5. "Who grades the work?" comparison (builder on its own vs with Lightyear) with the RepoMod-Bench
   statistic, cited to arXiv:2602.22518.
6. Research added to the menu on every page (Docs removed until a public docs location exists); Research section added to resources.html (#research).
7. Verifier section: run command and exit codes; Get the verifier / guide links are placeholders
   until the public verifier repository exists.
Placeholder links still to set: View receipt (x2), Explore the graph, Security pack, Book a Verification Sprint, Contact.

All mentions of CardDemo, its program names and the GitHub repository were removed site-wide on 2026-11-07.

## Update 2026-11-07 (b): product names Prism and Aperture
- New homepage section "Lightyear Prism · the verdict engine" (#prism): animated SVG of a legacy
  monolith's light refracted by a prism into a spectrum, with an HTML legend of verdicts
  (five EQUIVALENT, one INDETERMINATE). Pause button; reduced-motion shows the final frame.
- Verifier section renamed "Lightyear Aperture · free and open" (#verifier): animated aperture
  iris letting light onto an evidence pack whose four checks light up, then PASS. Pause button.
- Hero copy names Prism; hero secondary CTA "Don’t trust us: check it with Aperture"; footer
  "Aperture verifier". Other pages still say "Verdict Engine" (descriptor) pending a site-wide pass.

## Update 2026-11-07 (c)
- Prism headline now "Decades of business logic, brought into full view."; standout product badges for
  Lightyear Prism and Lightyear Aperture.
- Prism animation now shows legacy COBOL being read line by line and sent into the prism.
- "Don't let AI grade its own homework" condensed to heading + stat + four-row comparison.

## Update 2026-11-07 (d): homepage cuts (~25% shorter)
- Agent dark factory animation moved to product.html (#factory); homepage keeps a compact strip
  (12m 25s · 2.7M values · 0 human lines) linking to it.
- "Indeterminate is an answer" section removed (covered by the Prism legend and comparison table).
- Coverage section moved to product.html (#coverage); "How it works" links to it.
- Business outcomes and cost certainty merged into one section.

## Update 2026-11-07 (e): contact and request links
All booking, contact, security-pack and evidence-pack actions now open an email to howard@lightyr.ai
with a pre-filled subject. "View receipt" became "Request the evidence pack"; the knowledge-graph link
was removed; Aperture's "Read the guide" button was removed until the public repository exists.

## Browser validation

Run `npm ci`, `npx playwright install chromium`, then `npm run test:site`.
The PR workflow checks all eight pages at 1440×900 and 375×900, rejects
JavaScript errors and horizontal scrolling, tests both one-cent toggle
directions, and tests play/pause/resume for the repair loop on Product,
Proof, Verify, Prism and Aperture. Screenshots and failure traces are retained.
Phone tables retain readable column labels and code examples wrap.

The homepage product section is an illustrated HTML panel captioned
“Illustrative view”; no real Control Tower screenshot is published.
The browser checks verify the panel and caption at both viewport sizes.
