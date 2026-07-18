---
name: aigirl-design
description: Use this skill to generate well-branded interfaces and assets for AIGirl (the "Noir Editorial" design direction), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read `DESIGN_SYSTEM.md` first; it is the normative AI-readable specification and component decision map. Then read `README.md` for context and inspect only the relevant implementation files (`styles.css` + `tokens/`, `components/`, `ui_kits/aigirl-web/`, `guidelines/`). Treat `index.html` as the visual and behavioral reference whenever prose is ambiguous.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css`, use the tokens, and reuse the component patterns and the character-placeholder motif rather than inventing new ones. If working on production code, copy assets and read the rules here to become an expert in designing with the AIGirl brand.

Key rules to honor: consume component roles from `tokens/components.css` before lower-level tokens; warm near-black canvas; Newsreader (display/names) + Manrope 500 (body/UI) + JetBrains Mono (uppercase tracked kickers/meta); one gold action accent, magenta reserved for premium/PRO; flat hairline-bordered cards, one deep panel shadow; spring hover/press. No logo file exists — set the wordmark in type. Keep missing character imagery to the neutral placeholder motif.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
