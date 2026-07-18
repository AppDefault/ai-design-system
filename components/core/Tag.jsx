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
        fontFamily: 'var(--font-sans)', fontSize: 'var(--font-size-sm)', lineHeight: 1.2,
        color: 'var(--tag-text)', border: '1px solid var(--tag-border)',
        padding: 'var(--tag-padding)', borderRadius: 'var(--tag-radius)', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
