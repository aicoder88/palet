# Design System — Šlišurić pilana

## Product Context
- **What this is:** Croatian B2B marketing site for a family-run sawmill producing EUR pallets, custom wooden packaging, and ISPM-15 treated lumber.
- **Who it's for:** European procurement buyers (automotive, chemical, food industry), logistics managers, wholesale resellers.
- **Space/industry:** Wooden pallet manufacturing, sawmill, industrial packaging.
- **Project type:** SEO-optimized Next.js 14 marketing site, 7 Croatian-language routes.
- **Positioning:** Three generations of lumber. Vlastita pilana, vlastita kontrola. Sophisticated, warm, confident — Aesop for lumber, not hi-vis industrial and not Apple-sterile.

## Aesthetic Direction
- **Direction:** Editorial-industrial with natural material warmth.
- **Decoration level:** Intentional — typography does the heavy lifting. Italic serif emphasis, subtle ochre radial glows on dark blocks, ochre-tint circular icon marks echoing the brand logo.
- **Mood:** Confident, warm, unhurried. The product speaks; the page gets out of the way.
- **Source artifacts:** Brand logo (SLIŠURIĆ serif wordmark + ochre woodgrain circle) and two brand illustrations (cream-on-ochre and sage-on-cream variants with ring/woodgrain motif).
- **NOT this:** hi-vis industrial yellow, fintech-tech blue, Apple pristine white, heritage wine-country warmth, forest-cosplay green.

## Typography

Two families. Italic is used sparingly — one word per headline — so it carries weight when it appears.

- **Display/Headlines:** Artifex CF (variable, opsz axis), 500 weight, italic 400 for accents. Use `font-variation-settings: 'opsz' 144` at display sizes, `'opsz' 72` at UI sizes.
- **Body:** Inter 400, 19px, 1.6 leading.
- **UI/Labels:** Inter 500.
- **Specs/Numbers:** Artifex CF 500 with `font-variant-numeric: tabular-nums` for specification values (reads like a drawing); Inter 500 tabular-nums for in-card rows.
- **Loading:** Google Fonts `<link>` with `Artifex CF:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Inter:wght@400;500;600;700&display=swap`.

### Scale (px)
- Display 1: clamp(56, 8.5vw, 128) — hero h1
- Display 2: clamp(40, 5.5vw, 80) — section titles
- Headline: 40 / 1.08 / -0.025em
- Lead: 20 / 1.5 / -0.01em
- Body: 19 / 1.6 / -0.01em
- UI: 15 / 1.5 / -0.005em
- Caption: 13 / 1.5 / -0.005em
- Eyebrow: 12 / uppercase / 0.16em tracking

### Global type rules
- `-webkit-font-smoothing: antialiased`
- Body `letter-spacing: -0.011em` and `font-feature-settings: 'ss01', 'cv11'`
- Display `letter-spacing: -0.03em` to `-0.045em`
- Italic serif accents always colored `--ochre-deep` (light) or `--ochre-soft` (dark inverted)

## Color

Derived directly from brand artwork. Analogous warm base with split-complementary sage accent.

### Neutrals (cream family)
- `--canvas` `#EDE3CC` — page background
- `--paper` `#F5EDD8` — card surfaces, sunken panels
- `--paper-2` `#FAF4E4` — alternating section background
- `--divider` `#D4C9AE` — 1px hairlines

### Primary — Ochre (warm action)
- `--ochre` `#B88A43` — primary CTA, italic emphasis, brand marks
- `--ochre-deep` `#8F6A30` — hover, serif italic text on cream
- `--ochre-soft` `#D8B878` — accents on dark surfaces, italic on sage/ink
- `--ochre-tint` `#E8D8B0` — icon mark backgrounds, subtle fills

### Secondary — Sage (cool emphasis)
- `--sage` `#5F6B4E` — inverted stat strips, feature posters
- `--sage-deep` `#434D39` — hover for ink buttons
- `--sage-soft` `#8C9777` — divider on sage backgrounds

### Ink
- `--ink` `#2B2418` — warm near-black, all body text
- `--ink-soft` `#4A3E2A` — body copy on cream, secondary text
- `--muted` `#8B7F68` — captions, metadata, labels

### Semantic (palette-matched, never pure red/green/yellow)
- `--success` `#5F6B4E` (sage)
- `--warning` `#B88A43` (ochre)
- `--error` `#A04B3A` (clay red, warm)

### Dark mode
Flips to warm ink `#1E1A12` canvas, `#2B2418` paper, cream text, lightened ochre `#D8A45C`, lightened sage `#8C9777`. Never pure black; never cool.

## Spacing
- **Base unit:** 4px
- **Density:** Comfortable for marketing sections, tighter for spec tables.
- **Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 88, 112, 120
- **Section vertical padding:** 120px desktop, 72px mobile
- **Card padding:** 32–40px
- **Max content width:** 1240px
- **Gutter:** 40px desktop, 22px mobile

## Layout
- **Approach:** Grid-disciplined with deliberate asymmetry in hero and feature sections.
- **Grid:** 12-col, 1240px max, 40px gutters.
- **Hero pattern:** 7/5 split (headline left, sub+CTA right, aligned to baseline).
- **Border radius scale:** 4px (micro), 8px (cards/buttons/badges), 16px (large cards), 24px (feature posters, hero visuals). Buttons are `999px` pill.
- **Hairlines** at 1px in `--divider`. Never heavier.

## Motion
- **Approach:** Minimal-functional. No scroll choreography, no parallax.
- **Easing:** `ease-out` for enters and moves. `ease-in` for exits.
- **Duration:** micro 100ms, short 150–200ms, medium 250–350ms.
- **Uses:** hover state transitions (border-color, background, transform: translateY(-2px) on card lift, transform: translateX(3px) on arrow advance), modal/disclosure open. That's it.

## Components

### Buttons
- **Primary:** `--ochre` bg, `--paper` text, pill 999px, 14/24 padding, hover `--ochre-deep`.
- **Ink:** `--ink` bg, `--paper` text, hover `--sage-deep`.
- **Ghost:** transparent, `--ink` text + border, hover `--ink` bg + `--paper` text.
- **Link:** `--ochre-deep` text, no bg, gap grows on hover (8→12px), color darkens to `--ink`.
- Arrow `→` advances 3px on `:hover .btn-arrow`.

### Cards
- `--paper` bg, 1px `--divider` border, 16px radius, 36px padding.
- Hover: border `--ochre`, `translateY(-2px)`.
- Serif card title with one italic ochre-deep word.
- Ochre-tint circular icon mark (48px, echoes brand logo circle).
- Card link: underlined `--ink`, hover gap grows + color → `--ochre-deep`.

### Product cards
- Same paper/divider/radius as cards. 380px min-height.
- Artifex CF 500 at 44px for dimensions (`1200 × 800`). `--ochre-deep` italic for "custom".
- Dashed underline spec rows with uppercase Inter labels + serif values.

### Nav
- Sticky, translucent `rgba(237,227,204,0.78)` with `backdrop-filter: saturate(180%) blur(20px)`.
- 68px tall. Artifex CF wordmark with ochre circular `Š` mark.
- Ink pill CTA on the right.
- Links `--ink-soft`, hover `--ochre-deep`.

### Stat strip
- Full-bleed `--sage` background, `--paper` text.
- 4 columns, 1px left border per stat, first-stat border is `--ochre-soft`.
- Artifex CF 500 tabular numbers at clamp(44, 5.5vw, 76), italic ochre-soft accents (`+`, `h`, `%`).

### Feature poster
- `--sage` bg, 24px radius, 88/72 padding.
- Soft `--ochre` radial glow top-right (`opacity: 0.22`, `filter: blur(10px)`).
- Glass-style spec plate: 8% white bg, 18% white border, 8px radius.

### CTA banner
- `--ink` bg, `--paper` text, 24px radius.
- Ochre radial glow bottom-right (`opacity: 0.3`).
- Serif headline with italic ochre-soft emphasis.

### Pull-quote (editorial)
- `--paper` full-bleed section, Artifex CF italic at clamp(28, 3.6vw, 48).
- Ochre `"` marks in CSS `::before`/`::after`.
- 1/2 grid: label left, quote right.

### Alerts
- `--paper` bg, 1px `--divider` border, 3px left border in semantic color.
- Uppercase `b` tag with semantic color + caption text.

### Certifications
- Quiet Artifex CF 500 typographic list, 48px gap, centered on `--divider` top border. No boxes.

## Accessibility
- Body text contrast ratio 12:1+ (`--ink` on `--canvas`).
- `--muted` on `--canvas` is 4.6:1 (AA for large+UI).
- `--ochre` on `--paper` (CTA) is 4.1:1 — large text / UI only; never used for body copy.
- Focus visible: 2px `--ochre` outline, 2px offset.
- Motion respects `prefers-reduced-motion`.

## Do not
- No hi-vis safety yellow, no electric/neon, no pure black, no cool grays, no purple.
- No icon-in-circle feature grids that look AI-generated. Our card icon marks are ochre-tint circles with serif glyphs — brand-derived, not template.
- No sans-serif display type. Serif display is the signature.
- No italic on entire sentences. One or two words, rare and meaningful.
- No decorative blobs, no gradient buttons, no drop-shadows on cards (use border + translateY).
- No centered-everything marketing layout. Asymmetry is the personality.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-24 | Initial design system derived from existing brand artwork (wordmark + two brand illustrations) via /design-consultation | Grounds system in assets already approved; cream+ochre+sage palette pulled directly from brand art; Artifex CF selected to match existing SLIŠURIĆ wordmark's editorial serif energy |
| 2026-04-24 | Dropped signal-yellow and tech-blue accents (v3 iteration) | User feedback: too loud, wrong category feeling; ochre provides action-warmth without noise |
| 2026-04-24 | Artifex CF chosen over Instrument Serif | Variable optical-size axis supports the full display-to-UI scale; italic has character; matches logo wordmark more closely |

## Preview
Design-system preview page: `/tmp/slish-design-preview.html` (v4).

| 2026-04-24 | Fraunces replaced with Artifex CF (per client font selection) | Self-hosted via next/font/local from `public/fonts/`; CSS variable renamed `--font-artifex` |
