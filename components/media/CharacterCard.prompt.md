**CharacterCard** — the core discovery unit on the Explore grid: a 4:5 portrait placeholder (gradient + diagonal hatch + giant serif initial) with optional PRO / view-count overlays, then a serif name, a gold mono category kicker, a 2-line blurb, and trait tags.

```jsx
<CharacterCard
  name="Annie" category="Original"
  blurb="Your composed new secretary — organized, warm, a little curious."
  tags={['Female', 'Romantic']} views="1.8M" pro
/>
```

Composes `Tag` and `Badge`. Lifts 4px on hover. In a grid use `repeat(5,1fr)` (desktop) / `1fr 1fr` (mobile) with a 20px / 14px gap.
