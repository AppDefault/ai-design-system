---
name: aigirl-design
description: Use this skill to generate well-branded interfaces and assets for AIGirl (the "Noir Editorial" design direction), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/`, `components/`, `ui_kits/aigirl-web/`, `guidelines/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css`, use the tokens, and reuse the component patterns and the character-placeholder motif rather than inventing new ones. If working on production code, copy assets and read the rules here to become an expert in designing with the AIGirl brand.

Key rules to honor: warm near-black canvas (`#07060a`); Newsreader (serif display/names) + Manrope (body/UI) + JetBrains Mono (uppercase tracked kickers/meta); one gold accent (`#facc15`) for actions, magenta (`#d946ef`) reserved for premium/PRO; flat hairline-bordered cards, one deep panel shadow; spring hover/press (~130ms). No logo file exists — set the wordmark in type ("AI" white + "Girl" gold, Newsreader 600). Keep all character imagery to the neutral placeholder motif.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
