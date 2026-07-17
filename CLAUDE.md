## Mobile Safari input zoom (iOS)
Any `<input>`/`<textarea>` with `font-size` under 16px triggers iOS Safari's auto-zoom-on-focus, which visually shifts/pans the whole page sideways when the keyboard opens (looks like a layout bug but isn't one).

Rule: every `<input>` and `<textarea>` must have `font-size: 16px` or larger — no exceptions, including compact/mobile-only variants (search boxes, chat composer, dropdown search filters, form fields).

Also keep `overflow-x: hidden` on `html` and `body` as a safeguard against any accidental horizontal overflow on mobile.
