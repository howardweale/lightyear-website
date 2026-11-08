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

## (f) 7 Nov, 11:10: Product page
- Removed the "What we have qualified, and what we haven't yet" section (the coverage catalogue table above it stays, now with id="coverage" so the homepage link still works).
- New section #platform: "The new environment gets a receipt too" (target platform as code, verified by Prism; status: in build).
- Closing CTA now names our own factory: "Use our factory or bring any AI. We tell you whether it's right."

## (g) 7 Nov, 12:05: product names
- "Verdict Engine" is now "Lightyear Prism" on every page (copy, diagrams and labels).
- "Lightyear Verify" is retired as a name; the Verify page now says "Lightyear Prism over MCP". The MCP server's technical id (lightyear-verify) is unchanged in the diagram because that is its name in the code.
- No page uses CardDemo, Verdict Engine or Lightyear Verify.

## (h) 7 Nov, afternoon: accuracy corrections
- Knowledge-graph size corrected to 11,336 entities and 13,491 links (homepage). The earlier 11,347 / 13,504 came from an older build of the graph.
- The "2.7M values checked exactly" figure is gone from the homepage, Product and Proof stat strips: it came from a separate preflight check, not the 12-minute run the strip describes. The strip now reads "1 of 11 approved model calls used", and the homepage sentence says the first candidate passed with 1 of 11 approved model calls and no lines written or fixed by a person.
- Product page #platform status now says all 28 platform scenarios passed on our reference core-banking estate on Google Kubernetes Engine in September 2026 (synthetic, nonproduction), that the estate is now written as Terraform and tested offline, and that generating the environment from a customer's legacy inventory is in build. This replaces "drills partly run".

## (i) 8 Nov: Lightyear Factory
- The factory is now named "Lightyear Factory". Eyebrows read "Lightyear Factory · the agent dark factory" (homepage and Product); "our factory" / "our dark factory" became "Lightyear Factory" on the homepage, Product, Pricing and the Proof crew eyebrow. "Dark factory" stays only as the description of how it works.

## (j) 8 Nov: Products menu
- Top navigation is now: Products (menu) · Solutions · Proof · Pricing · Resources · For engineers · Book a Verification Sprint. "Research" is no longer a separate link (the section stays on resources.html#research).
- The Products menu lists Lightyear Prism, Lightyear Factory and Lightyear Aperture, with their icons. It is a plain HTML details/summary menu and needs no JavaScript.
- New pages: prism.html (the old Product page's verification content plus the old Verify page's MCP content, under #mcp), factory.html (the factory section, crew animation, platform as code) and aperture.html (what it checks, its four answers, status).
- Homepage: new "One system, three products" strip under the hero.
- Retired: product.html and verify.html. Both are now small redirect pages (to prism.html and prism.html#mcp) so existing links keep working.

## (k) 8 Nov: where it runs
- Homepage trust strip now reads "Read-only: nothing is written back to your systems" and "Runs where you choose: our infrastructure, yours or a partner's" (was "Runs read-only in your cloud" / "Your code and data stay in your environment"), matching the Security Overview's three Sprint deployment modes.
- Sprint section: "Old and new run side by side, read-only, on our infrastructure, yours or a partner's"; checklist item "Read-only, and runs where you choose".

## (l) 8 Nov: phone layout
- The build now carries the live site's Nov 7 phone fixes itself: code blocks wrap below 600 px, tables with a header row become labelled cards (class mobile-card-table, data-label on each cell), and header-less tables fit the width (mobile-fit-table). Checked at 375 px: no page overflows and no nested sideways scrolling on any of the nine pages.
