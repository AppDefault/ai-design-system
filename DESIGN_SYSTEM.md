# AIGirl design system specification

Status: **normative**. This document tells humans and AI models how to reproduce the product represented by `index.html`.

## 1. Authority and precedence

When sources disagree, use this order:

1. `index.html` — visual hierarchy, responsive composition, content density, interaction and product flow.
2. `tokens/*.css` — exact reusable values and theme mappings.
3. `components/` — reusable primitive APIs and implementation patterns.
4. `ui_kits/aigirl-web/` — React composition examples.
5. `README.md`, prompt notes and guideline cards — explanation and specimens.

Do not copy a raw color, radius, shadow, font or repeated spacing value from the prototype into new code. Resolve it to the closest semantic token. If the correct role does not exist, add a role token and map it to an existing primitive before adding a new primitive value.

## 2. Design grammar

AIGirl is a cinematic editorial interface, not a generic SaaS dashboard. Preserve these signatures together:

- Warm near-black or warm paper canvas, flat editorial surfaces and hairline structure.
- Newsreader for identity, page headings, section headings and character names.
- Manrope at weight 500 for body and interface copy; 600 for labels; 700 for decisive actions.
- JetBrains Mono for short metadata, categories, counts and uppercase kickers.
- Gold is the primary action and selection color. Magenta is exclusively premium/PRO. Status colors never become decoration.
- One dominant CTA per region. Do not make several gold actions compete.
- Cards are flat. Use the panel shadow only on top-level or floating surfaces.
- Character cards lift with relative `top`, never `transform` or `filter` on the whole card.

## 3. Token architecture

Load only `styles.css`. It imports every layer in dependency order.

| Layer | File | Purpose | Override policy |
| --- | --- | --- | --- |
| Theme palette | `tokens/colors.css` | Canvas, surfaces, text, accents, borders, imagery and overlays | Override inside a theme scope only |
| Type primitives and roles | `tokens/typography.css` | Font families, size/weight/line-height primitives and semantic type roles | Prefer `--type-*` in composed UI |
| Space and geometry | `tokens/spacing.css` | Spacing scale, layout, radii, control geometry, motion and z-index | Prefer role tokens to raw `--sp-*` in reusable components |
| Component roles | `tokens/components.css` | Public skin of fields, buttons, chips, badges, menus, cards and messages | First choice for product customization |

Token selection rule:

`component role` → `semantic foundation` → `primitive` → raw value.

For example, a character image border uses `--character-card-media-border`, which resolves to `--border-1`. A reusable field uses `--field-border`, not `--border-2` directly. Raw values are allowed only for content-dependent geometry, one-off illustration coordinates or a documented new primitive.

### Theme contract

- Dark is the default palette on `:root`.
- Set `data-theme="light"` on the document or app shell for light mode.
- Theme switching changes presentation only. It must not alter routes, copy, forms, filters or responsive behavior.
- Persist the preference in `localStorage` under `aigirl-theme` and mirror it to `data-theme`.
- Never branch component markup by theme. Both modes use the same semantic role tokens.

### Product-level customization

Override a small role set on an app shell instead of editing components:

```css
.compact-embed {
  --layout-max: 960px;
  --layout-gutter: 16px;
  --layout-grid-gap: 14px;
  --field-radius: var(--radius-sm);
  --button-radius-md: var(--radius-sm);
}
```

## 4. Typography roles

| Content | Token/family | Rules |
| --- | --- | --- |
| Hero or age-gate headline | `--type-display-hero` / Newsreader | Weight 500, tight tracking, balanced wrapping |
| Page title | `--type-page-title` / Newsreader | One per screen |
| Section heading | `--type-section-title` / Newsreader | Short, sentence case |
| Card/character title | `--type-card-title` / Newsreader | Single line with ellipsis where needed |
| Body copy | `--type-body` / Manrope | Weight 500 in both themes |
| Supporting copy | `--type-supporting` | Lower contrast, never lighter than weight 500 |
| Caption/blurb | `--type-caption` | Compact; character blurbs clamp to 1–2 lines |
| Button/control | `--type-control`, `--type-control-strong` | Sentence case |
| Kicker | `--type-kicker` / JetBrains Mono | Uppercase, short, gold or tertiary text |
| Metadata | `--type-meta` / JetBrains Mono | Counts, handles, timestamps, categories |

Do not use mono for paragraphs or serif for form controls. Do not introduce a language-specific font override.

## 5. Component selection map

Use this table before inventing a component.

| Need | Component | Use when | Do not use when |
| --- | --- | --- | --- |
| Execute an action | `Button` | Submit, save, search, restart, upgrade | Toggling a category or displaying status |
| Toggle one filter | `Chip` | Category, filter or selectable compact option | Passive character traits |
| Show passive metadata | `Tag` | Trait, property or compact descriptor | Status, count or navigation |
| Mark status/count/tier | `Badge` | PRO, media count, Premium nav status | General tags or CTAs |
| Enter one line | `Input` | Search, name, email, short settings | Long-form prompts or chat messages |
| Enter multiple lines | `Textarea` | Greeting, personality, notes | A single-line value |
| Show identity | `Avatar` | User, persona, character in rows/messages | Explore discovery card hero media |
| Discover a character | `CharacterCard` | Explore grid and live card preview | Compact recent-chat or owned-character rows |
| Choose one from a list | `ComboMenu` pattern | More filters, sorting, model, persona, language | Two or three always-visible mutually exclusive choices |
| Choose a billing period | `SegmentedControl` pattern | Month/3 months/year | Site navigation |
| Show conversation content | `MessageBubble` pattern | AI and user turns | Warnings, tips or marketing cards |
| Present a paid plan | `TierCard` pattern | Paywall comparison | Account subscription summary |

## 6. Primitive component contracts

### Button

Variants:

- `primary`: gold background, high-contrast gold ink. The dominant non-premium CTA.
- `secondary`: transparent with a semantic hairline. Equal or lower priority than primary.
- `premium`: magenta gradient. Only purchase, upgrade or paid-feature activation.
- `ghost`: bare low-priority action such as report, cancel or tertiary navigation.

Sizes use `--control-padding-*`, `--button-font-size-*` and `--button-radius-*`. Disabled buttons keep their geometry and use `--button-disabled-opacity`. Hover uses the shared brightness role; press uses `--press-scale`.

### Input and Textarea

Use `--field-*` roles for background, border, radius, padding, text and placeholder. Focus changes the border to `--field-border-focus` and may use `--focus-ring`. Inputs and textareas must render at 16px or larger on mobile to prevent iOS zoom.

### Chip, Tag and Badge

- Chip is interactive, pill-shaped, and has a single active state. Active is gold.
- Tag is passive, outline-only and visually smaller than a chip.
- Badge is a compact status layer. `pro` is magenta, `stat` is a media scrim, `premium` is a magenta outline/tint pill.

Never use a tag as a button or a chip as passive decoration.

### Avatar

Use the semantic avatar fill and a serif initial when an image is absent. Rounded rectangles represent characters/personas; circles may represent the signed-in user. Images use `cover` and do not change with theme.

### CharacterCard

Required anatomy:

1. 4:5 media region using `--character-card-*` roles.
2. Optional PRO badge at top-left and stat badge at top-right.
3. Serif character name and mono gold category on one row.
4. One- or two-line supporting blurb.
5. Optional passive trait tags; hide them on narrow mobile layouts when density requires it.

The entire card is interactive. Hover changes relative `top` to `--hover-lift`; keep `filter:none`. Do not add a per-card shadow.

## 7. Composite patterns from `index.html`

These are canonical compositions even where no exported React primitive exists yet.

### App shell and navigation

- `AppShell`: full viewport, theme canvas, one vertical attention flow.
- `TopNav`: wordmark + Explore/My Chats/Create + theme/language/premium/profile actions.
- `MobileTopNav`: wordmark + theme + compact premium + menu trigger.
- `MobileDrawer`: full-screen overlay with large serif destinations; theme and language remain available.
- `LanguageMenu`: floating `ComboMenu`; active language is gold, inactive options use semantic text.

### Onboarding

- `AgeGate`: centered wordmark, mono 18+ kicker, serif promise, one gold enter action and one secondary leave action.
- `SignInPanel`: raised panel with email field, primary continue, separator and secondary provider actions.
- Onboarding is not a marketing homepage. Keep it focused and short.

### Explore

- `ExploreHero`: kicker, serif headline, search field/button and optional desktop stats.
- `FilterBar`: visible chips plus `More` combo menu; mobile uses one filter combo.
- `SortMenu`: compact combo aligned to the filter row.
- `CharacterGrid`: responsive 2/3/4/auto-fill columns, `--layout-grid-gap-*`, maximum `--layout-max`.
- `Pagination`: active page stays filled; only inactive pages and arrows receive gold hover.
- `JournalCard`: serif link title, supporting excerpt and mono date/category metadata.
- `SiteFooter`: informational columns; links are primary text at rest and gold on hover.

### Chat

- `ConversationRail`: recent conversation rows with avatar, name, snippet and time.
- `ChatHeader`: back affordance, identity, status and low-priority actions.
- `MessageBubble`: AI uses `--message-ai-*` and `--message-radius-ai`; user uses `--message-user-*` and `--message-radius-user`.
- `VoiceControl`: an inline secondary action attached to an AI message, gold only while playing.
- `Composer`: model/persona controls, text input, media/mic affordances and one send action.
- `CharacterDetailPanel`: character summary and tags; desktop-only when space is limited.
- Always show the factual AI/fiction disclaimer near the conversation.

### Create

- `StudioForm`: grouped fields for basics, personality and visibility.
- `TagPicker`: selected tags as removable active chips plus a searchable combo menu.
- `VisibilityOption`: two explicit cards for public/private; gold denotes the selected option.
- `LivePreview`: character media, card metadata, first-message bubble and a restrained premium warning/tip.
- Preview updates from form state; it does not introduce a second visual language.

### Profile

- `ProfileHeader`: user avatar, serif account name, mono membership metadata and premium status.
- `AccountForm`: standard fields and one gold save action; logout is secondary, delete is danger text.
- `PersonaList`: compact selectable rows with avatar and active badge.
- `SubscriptionSummary`: magenta-tinted paid state or upgrade prompt; it is not a `TierCard`.
- `OwnedCharacterRow`: compact avatar/name/count/edit row, not a full `CharacterCard`.

### Paywall

- `BillingSegment`: month, 3 months and year; discount is a small badge.
- `TierCard`: plan name, price, savings, feature meters, coin benefit and one premium CTA.
- Only the recommended tier gets the gold border and ribbon.
- Magenta is the purchase action; gold communicates recommendation, savings or selection.

## 8. State, motion and interaction

- Use `--interactive-transition`, `--dur-fast`, `--dur` and `--ease-spring`.
- General hover may brighten. CharacterCard is the explicit no-filter exception.
- Press uses `--interactive-press-filter`; buttons may additionally scale to `--press-scale`.
- Focus-visible must be perceivable with `--focus-ring` or an equally clear semantic border.
- Dropdowns use `--z-dropdown`, overlays `--z-overlay`, modals `--z-modal`.
- Menus use `--menu-*`; option hover uses gold text, gold-soft background and a subtle inset border.
- Text links never underline. Journal and footer links are primary text at rest, gold on hover/focus.

## 9. Responsive behavior

- Use `--layout-gutter`, `--layout-max` and layout role tokens instead of duplicating clamps.
- Explore grid: 2 columns below 480px, 3 below 768px, 4 below 1200px, then auto-fill around `--layout-card-min`.
- Desktop chat is three-pane. Mobile alternates between conversation list and active conversation.
- Hide supporting rails and optional tags before shrinking primary content below comfortable reading width.
- Interactive targets should be at least `--control-min-target` where the control is icon-only.
- Keep `overflow-x:hidden` on the page shell.

## 10. Content and assets

- Sentence case for readable UI. Uppercase is reserved for short mono metadata/kickers.
- Voice is warm, direct and restrained. No decorative emoji or exclamation-heavy hype.
- Functional glyphs `✦` and `●` are allowed; icons otherwise use a consistent Lucide-style line set and `currentColor`.
- The wordmark is text: Newsreader 600, “AI” in primary text and “Girl” in gold. There is no logo image.
- Missing character art uses the placeholder gradient + hatch + serif initial. Never substitute explicit imagery.

## 11. AI implementation checklist

Before returning generated UI, verify:

- The component was selected from the map above instead of invented unnecessarily.
- Every repeated visual value resolves through a semantic or component role token.
- Gold and magenta have not been used for the same purpose.
- Both themes use identical markup and behavior.
- Body/supporting/meta copy is not weight 400.
- Form controls are at least 16px on mobile.
- Character cards use relative top lift and no filter/transform on the whole card.
- Link, menu, pagination, hover, press and focus states match this specification.
- The result remains usable at mobile and desktop widths.

