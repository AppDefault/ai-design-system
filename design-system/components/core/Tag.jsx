import React from 'react';

/**
 * Tag — a small, quiet metadata pill (character traits: Female · Original · Romantic).
 * Always outline-only, smaller than a Chip, not interactive by default.
 */
export function Tag({ children, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center',
        fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: 1.2,
        color: 'var(--text-secondary)', border: '1px solid var(--border-strong)',
        padding: '3px 10px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
