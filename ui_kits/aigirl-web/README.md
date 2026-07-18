# AIGirl Web — UI kit

For canonical component choice, token roles, anatomy and states, read [`../../DESIGN_SYSTEM.md`](../../DESIGN_SYSTEM.md). This UI kit is an implementation example; `index.html` at the repository root is the visual and behavioral reference.

Interactive, high-fidelity recreation of the **AIGirl "Noir Editorial"** web redesign. Open `index.html` for the click-through demo.

## Flow
- **Explore** — hero + search, category filter chips, and a 5-up character discovery grid. Click any card to open a chat.
- **Chat** — three-pane layout: recent conversations rail · message thread · character detail panel. The composer sends real messages (type + Enter or the send button); the character replies after a beat.
- **Create** — the character studio: avatar dropzone, name/intro fields, tag chips, greeting & personality textareas, visibility radios, and a **live preview** `CharacterCard` that updates as you type.

Nav: **Explore / My Chats / Create** in the top bar; the logo and back affordances return to Explore. The Light/Dark control switches the semantic token set and persists the preference between visits.

## Composition
Screens compose the design-system primitives — `Button`, `Chip`, `Tag`, `Badge`, `Input`, `Textarea`, `Avatar`, `CharacterCard` — from `_ds_bundle.js`. Layout-only shell pieces (`TopNav`, screen bodies) live here as small JSX files loaded via Babel. Icons are **Lucide** (CDN). All character imagery uses the brand placeholder motif (no real portraits).

## Files
`index.html` · `data.js` (mock characters/messages) · `shared.jsx` (Icon + Lucide helper) · `TopNav.jsx` · `Explore.jsx` · `Chat.jsx` · `Create.jsx` · `App.jsx` (routing).
