import React from 'react';

/**
 * Chip — a pill-shaped filter / category toggle (the "All · Anime · Movie…" row).
 * Active chips are solid gold with dark ink; inactive are hairline outlines.
 */
export function Chip({ active = false, children, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1,
        padding: '8px 18px', borderRadius: 'var(--radius-pill)',
        cursor: 'pointer', whiteSpace: 'nowrap',
        transition: 'transform var(--dur-fast) var(--ease-spring), border-color var(--dur-fast) ease, color var(--dur-fast) ease',
        ...(active
          ? { background: 'var(--gold)', color: 'var(--gold-ink)', fontWeight: 700, border: '1px solid transparent' }
          : { background: 'transparent', color: 'rgba(255,255,255,.7)', fontWeight: 500, border: '1px solid var(--border-3)' }),
        ...style,
      }}
      onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = 'rgba(250,204,21,.6)'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
      onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = 'var(--border-3)'; e.currentTarget.style.transform = 'none'; } }}
      {...rest}
    >
      {children}
    </span>
  );
}
