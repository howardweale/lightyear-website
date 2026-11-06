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
