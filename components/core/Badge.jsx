import React from 'react';

/**
 * Badge — tiny status/label markers layered on cards and nav.
 *  - "pro": solid magenta, mono uppercase (paid character marker)
 *  - "stat": dark scrim overlay for counts on imagery (e.g. "1.8M")
 *  - "premium": magenta outline pill with a spark, for the nav Premium entry
 */
export function Badge({ variant = 'pro', children, style = {}, ...rest }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 5, lineHeight: 1,
    whiteSpace: 'nowrap',
  };
  const variants = {
    pro: {
      fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '.08em',
      color: 'var(--premium-ink)', background: 'var(--magenta-badge)',
      padding: '4px 9px', borderRadius: 'var(--radius-xs)',
    },
    stat: {
      fontFamily: 'var(--font-mono)', fontSize: 12,
      color: 'var(--overlay-text)', background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(4px)', padding: '4px 9px', borderRadius: 'var(--radius-xs)',
    },
    premium: {
      fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700,
      color: 'var(--magenta)', background: 'var(--magenta-soft)',
      border: '1px solid var(--magenta-border)',
      padding: '8px 16px', borderRadius: 'var(--radius-pill)',
    },
  };
  return (
    <span style={{ ...base, ...(variants[variant] || variants.pro), ...style }} {...rest}>
      {children}
    </span>
  );
}
