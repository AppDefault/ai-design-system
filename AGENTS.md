# AIGirl design system — agent notes

## Sources of truth

- `tokens/colors.css` defines both palettes. Dark is the default; light overrides semantic tokens under `[data-theme="light"]`.
- `index.html` is the main interactive prototype and contains its state/handlers.
- `ui_kits/aigirl-web/` is the React UI-kit version of the same product flow.
- `_ds_bundle.js` is the compiled design-system bundle used by previews; keep it in sync when changing bundled components.

## Theme behavior

- The switch changes only presentation. Navigation, chat, forms, onboarding, language selection, paywall and responsive behavior must remain unchanged.
- Theme preference is stored in `localStorage` under `aigirl-theme` and mirrored to `data-theme` on the document/app shell.
- The light page background is intentionally almost white (`--bg: #fefdfb`). Use semantic variables instead of hard-coded dark colors.
- Typography is shared across languages: Newsreader for display, Manrope for body/UI and JetBrains Mono for meta text. There is no Russian-only font override.
- Body, supporting and meta text use weight 500 in both themes. Do not reintroduce 400-weight UI copy without an explicit design decision.

## Interaction behavior

- Character cards lift 4px on hover via relative `top`, not `transform`, and keep `filter:none`. Transforming or filtering the entire card causes subtle Chromium text blur.
- Journal titles and footer links use `--text-primary` at rest and gold on hover/focus; text links are never underlined.
- More/Trending options use the shared `.combo-option` hover treatment. Pagination hover applies only to inactive page numbers and the arrows; the active page retains its filled state.

## Verification

- Run `git diff --check` after edits.
- Smoke-test both themes in `index.html`, including onboarding, desktop/mobile navigation, language menu, Explore, Chat, Create, Profile and Paywall.
- Confirm a reload preserves the selected theme.
