**Button** — the main action control; gold `primary` is the one dominant CTA per view, `premium` (magenta gradient) is reserved for Pro/upgrade actions.

```jsx
<Button variant="primary" size="md">Search</Button>
<Button variant="secondary">Restart chat</Button>
<Button variant="premium" icon={<span>✦</span>}>Go Premium</Button>
<Button variant="ghost" size="sm">Report content</Button>
```

Variants: `primary` (gold, dark ink), `secondary` (hairline outline), `premium` (magenta gradient, white), `ghost` (bare). Sizes: `sm` / `md` / `lg`. Props: `icon`, `iconRight`, `full`, `disabled`. Hover lifts brightness; press scales to .96 (spring).
