# AIGirl — Noir Editorial Design System

A dark, editorial design system for **AIGirl**, an 18+ AI companion / character-chat product (chat & roleplay with created and featured characters). This system captures the **"Noir Editorial"** redesign direction: a warm near-black canvas, a serif/mono editorial voice, and a single confident gold accent, with magenta reserved for premium.

> **Product context.** AIGirl (aigirl.one, operated by SIGNLAB STUDIO CORP) lets users browse a catalogue of AI characters, chat/roleplay with them, create their own, manage personas, and upgrade to Premium tiers for unlimited messages, deeper memory, and image-generation coins. This design system is a *redesign* of that product — it keeps the product's structure and copy patterns but replaces the stock-dark UI with the Noir Editorial look. **All character imagery in this system is a neutral placeholder motif, never explicit content.**

## Sources
Built from the material attached to this project:
- **GitHub:** [`AppDefault/ai-design-system`](https://github.com/AppDefault/ai-design-system) — contains the "Noir Editorial" redesign prototype (`uploads/Aigirl Redesign - Noir Editorial.html`, `extracted/template.html`), a `design-system/tokens.json` + `Design System.dc.html` reference, and screenshots of both the live product and the redesign. Explore this repo for the full prototype and the exact source values behind these tokens.
- Product screenshots of the live app (Explore, Chat, Create, Profile/Pay) and of the redesigned Explore grid.

There is a second repo, `AppDefault/appdefault.github.io`, which was not needed for this system.

---

## Content fundamentals
How AIGirl writes.

- **Voice: warm, direct, second-person.** Copy talks to *you* and about the character in third person: *"Meet a character worth talking to tonight."*, *"Your composed new secretary — organized, warm, a little curious."* Product UI is plain and imperative: *New chat, Restart chat, Edit character, Save character, Report content*.
- **Character blurbs** are one or two sentences, evocative but compact, present tense: *"The Saiyan raised on Earth. Cheerful, loyal, always hungry."* / *"A loyal companion from the northern woods — devoted and shy."*
- **Casing.** Sentence case for everything readable (headings, buttons, body). **UPPERCASE + wide tracking** only in mono kickers and meta labels (`18+ · CHAT & ROLEPLAY`, `ORIGINAL`, `CHARACTERS`).
- **Categories** are single title-case words: *Anime, Movie, Celebrity, Original, Fantasy, Story, Game.*
- **Meta uses `@handle · count` mono format:** `@annie · 1.8M chats`, `247 online now`, `512K`.
- **Safety copy** is quiet and factual: *"This is an AI chatbot. Conversations are fictional."* Age-gating (`18+`) is stated as a kicker, not shouted.
- **No emoji as content.** The product uses a few functional glyphs (✦ for premium, ● for online) but does not decorate copy with emoji. Keep tone confident and a little cinematic; avoid exclamation-heavy hype.
- **Numbers** are abbreviated (`1.8M`, `512K`, `12,400+`, `48M`) and prices carry the `.9` retail convention (`$5.9 / month`).

---

## Visual foundations

**Overall vibe.** Noir editorial: a warm, almost-black stage where serif headlines and mono labels do the talking and a single gold accent points at the one thing to do next. Spacious, cinematic, quiet — closer to a film title sequence than a typical SaaS dashboard.

**Color.** Base is warm near-black `--bg #07060a`; panels sit one step up at `--surface-panel #0a0910`. All other neutrals are **white-alpha layers** (`.04 → .14`) for fills and hairline borders — never solid greys. Text is white stepped down through alpha (`1 → .55 → .35`). **Gold `#facc15` is the one action accent** (primary buttons, active filters, the "Girl" in the logo, live/stat highlights). **Magenta `#d946ef` is reserved for premium / PRO** (upgrade CTA gradient, PRO badges). Semantics: green `#4ade80` (online/active), red `#f87171` (destructive). Rule of thumb: at most gold **or** magenta as the loud color in a given region — never both competing.

**Type.** Three families. **Newsreader** (serif, 400/500/600) for display, headings, and character names — headings favour weight 500 with tight tracking (`-.02em`). **Manrope** (sans, 400–800) for all body and UI text. **JetBrains Mono** (400/500/600) for kickers, meta, counts, and category labels — always uppercase with `.08–.24em` tracking. The serif-headline / mono-label pairing is the signature move.

**Spacing & layout.** Generous and editorial: panel gutters at 40px, section rhythm at 34–48px, grid gaps at 20px. Desktop content is framed in a centered **1360px panel** with a 20px radius and one deep soft shadow, floating on the black stage (40px page margin). The Explore grid is 5-up desktop / 2-up mobile. Layouts are calm and single-column-of-attention; no dense multi-rail dashboards.

**Backgrounds & imagery.** Flat near-black — **no photographic or illustrated backgrounds**. The only ambient treatment is a faint magenta radial glow behind the hero and chat (`--glow-magenta`). Character imagery, when absent, uses the **placeholder motif**: a warm violet→black gradient (`#1b1626 → #0d0b12`), a 135° hairline diagonal hatch, and the character's initial in giant near-invisible serif (white `.055`). Real portraits, when present, fill 4:5 (cards) or 1:1 (panel) frames with dark scrim overlays for legibility.

**Corners & cards.** Radii: badges/overlays **6px**, controls/inputs **11–12px**, cards **12px**, large tiles **16px**, panels **20px**, pills **full**. Cards are **flat** — a 1px white-alpha border and the placeholder fill, no per-card drop shadow; only the top-level panel carries `--shadow-panel` (`0 40px 120px rgba(0,0,0,.55)`). No colored left-border accent cards, no heavy inner shadows.

**Borders, transparency & blur.** Structure is drawn almost entirely with hairline white-alpha borders (`.06–.14`) rather than fills. Blur appears only on scrim overlays (`backdrop-filter: blur(4px)` behind count badges on imagery). Message bubbles use asymmetric radii (AI: `4px 16px 16px 16px`; user: `16px 4px 16px 16px`) — the flat corner points back at the speaker.

**Motion & states.** One spring curve everywhere interactive: `cubic-bezier(.34,1.56,.64,1)` over ~130ms. **Hover** = `filter: brightness(1.22)` plus a role accent (chips gain a gold border and lift 1px; cards lift 4px; menu links slide right and go gold). **Press** = `scale(.94)` + slight dim. Fades are quick (`.13–.15s`); no bounce-in entrances, no parallax, no long easing. Restrained and snappy.

**Buttons.** Gold primary (dark ink, weight 700) is the single strongest CTA per view; secondary is a hairline outline; premium is the magenta gradient; ghost is bare text for low-priority actions (Report).

**Mobile implementation note.** Any `<input>`/`<textarea>` must use `font-size: 16px` or larger — below that, iOS Safari auto-zooms on focus and visually shifts the page sideways when the keyboard opens. Keep `overflow-x: hidden` on `html`/`body` as a safeguard.

---

## Iconography
- **System: [Lucide](https://lucide.dev) line icons (CDN).** The redesign source itself uses a light, uniform line-icon set plus a few functional Unicode glyphs; **Lucide is the closest clean, CDN-available match** (thin, consistent 2px stroke) and is used throughout the UI kit (`search, plus, chevron-left/down, sparkles, more-horizontal, image, mic, send, pencil, rotate-ccw, flag, flame`). *This is a flagged substitution — if AIGirl has a specific licensed icon set, drop it in and swap the `Icon` source.*
- **Functional glyphs** carried from the product: `✦` (premium/spark), `●` (online status, in `--success`). Keep these two; they read as brand shorthand.
- **No emoji** as UI or decoration.
- **No custom SVG illustrations** — the brand's "illustration" is the character placeholder motif (gradient + hatch + serif initial), not drawn art.
- Icons inherit `currentColor`; size 14–20px in UI. Pair a leading icon with a label for actions; standalone icons only for universally-understood controls (send, more, back).

## Assets
- **No logo file was provided.** The AIGirl mark is always **set in type** — Newsreader 600, "AI" in white and "Girl" in gold (`#facc15`). See the *Wordmark* brand card. Do not substitute or reconstruct a logo image.
- No brand photography or illustration assets exist; the system is intentionally image-light and uses the placeholder motif in their place.

---

## Components
Reusable React primitives (in `_ds_bundle.js`, namespace resolved by the compiler). Each has a `.d.ts` contract and `.prompt.md` usage note.

**Core** (`components/core/`)
- **Button** — gold `primary` / outline `secondary` / magenta `premium` / bare `ghost`; sizes sm·md·lg; icon slots.
- **Chip** — pill filter/category toggle; solid gold when active, outline otherwise.
- **Tag** — small quiet outline pill for metadata (character traits).
- **Badge** — `pro` (magenta), `stat` (dark-scrim count overlay), `premium` (nav upgrade pill).
- **Input** — single-line field with optional leading icon and gold focus ring.
- **Textarea** — multi-line field matching Input.

**Media** (`components/media/`)
- **Avatar** — gradient-initial tile (or image) for characters/personas/message rows; rounded-rect or circle.
- **CharacterCard** — the 4:5 discovery unit: placeholder portrait + PRO/view overlays, serif name, gold category kicker, 2-line blurb, trait tags.

*Intentional additions:* **Avatar** and **Chip/Tag/Badge** are split into distinct primitives even though the source prototype inlines them, so consumers get a clear, reusable API for each role.

## UI kits
- **AIGirl Web** (`ui_kits/aigirl-web/`) — interactive recreation of the redesign: **Explore** (hero + grid), **Chat** (3-pane, live composer), **Create** (studio with live preview). Open `index.html`.

## Foundation cards (Design System tab)
`guidelines/` holds the specimen cards grouped as **Colors** (surfaces, gold, magenta, semantic/text), **Type** (Newsreader, Manrope, JetBrains Mono), **Spacing** (scale, radius & shadow), and **Brand** (wordmark, character placeholder, interaction recipe).

---

## Root index / manifest
- `styles.css` — **the only file consumers link.** `@import`s the token + font files below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (CSS custom properties).
- `components/core/`, `components/media/` — React primitives (`.jsx` + `.d.ts` + `.prompt.md` + a card `.html`).
- `ui_kits/aigirl-web/` — the interactive web UI kit + its `README.md`.
- `guidelines/` — foundation specimen cards.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.
- `uploads/` — reference screenshots.

**Fonts note:** Newsreader, Manrope, and JetBrains Mono are loaded from Google Fonts via `@import` in `tokens/fonts.css` (they are the exact families used in the source, not substitutions). If you need self-hosted webfont binaries, drop the woff2 files in and replace the `@import` with local `@font-face` rules.
