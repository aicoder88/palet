# Šlišurić pilana — Palet Site

Croatian B2B marketing site (Next.js 14, App Router, Tailwind, Radix, framer-motion) for Šlišurić d.o.o. — family-run sawmill and wooden pallet manufacturer in Slavonia.

## Design System

**Always read `DESIGN.md` before making any visual or UI decisions.** All font choices, colors, spacing, border-radius, and aesthetic direction are defined there. Do not deviate without explicit user approval.

Quick summary (do not use as a substitute for reading `DESIGN.md`):
- Fonts: **Fraunces** (display/serif, variable opsz) + **Inter** (body/UI).
- Palette: cream `#EDE3CC` canvas, ochre `#B88A43` primary action, sage `#5F6B4E` for inversion, warm ink `#2B2418`.
- Italic serif is rare — one word per headline, always `--ochre-deep`.
- No yellow, no neon, no cool grays, no Apple-sterile white, no hi-vis.
- Asymmetric layouts, typography-first, ochre radial glows on dark sections.

In QA mode, flag any code that doesn't match `DESIGN.md`.

## Tailwind integration

When implementing `DESIGN.md`, add the palette to `tailwind.config.ts` as CSS-variable-backed tokens, load Fraunces + Inter via `next/font` or a `<link>` in the root layout, and replace current Tailwind color classes incrementally (hero first, then products, then secondary pages).

## Routes

8 Croatian-language routes: `/`, `/proizvodi`, `/usluge`, `/o-nama`, `/reference-kupci`, `/lokacija`, `/kontakt`, `/uvjeti-poslovanja`. All SEO-optimized for Google Croatia rankings on wood-pallet keywords.

## Dev

- Dev server runs on port 3003 (ports 3000–3002 may be occupied).
- If a stale `.next` cache causes chunk errors, kill the server + `rm -rf .next` + restart.
