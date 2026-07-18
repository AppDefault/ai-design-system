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
        fontFamily: 'var(--font-sans)', fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-ui)',
        padding: 'var(--chip-padding)', borderRadius: 'var(--chip-radius)',
        cursor: 'pointer', whiteSpace: 'nowrap',
        transition: 'transform var(--dur-fast) var(--ease-spring), border-color var(--dur-fast) ease, color var(--dur-fast) ease',
        ...(active
          ? { background: 'var(--chip-active-bg)', color: 'var(--chip-active-text)', fontWeight: 'var(--font-weight-bold)', border: '1px solid var(--chip-active-border)' }
          : { background: 'var(--chip-bg)', color: 'var(--chip-text)', fontWeight: 'var(--font-weight-medium)', border: '1px solid var(--chip-border)' }),
        ...style,
      }}
      onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = 'var(--chip-hover-border)'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
      onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = 'var(--chip-border)'; e.currentTarget.style.transform = 'none'; } }}
      {...rest}
    >
      {children}
    </span>
  );
}
