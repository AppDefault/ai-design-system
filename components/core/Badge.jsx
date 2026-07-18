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
      fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-semibold)', letterSpacing: '.08em',
      color: 'var(--badge-pro-text)', background: 'var(--badge-pro-bg)',
      padding: 'var(--badge-padding)', borderRadius: 'var(--badge-radius)',
    },
    stat: {
      fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-sm)',
      color: 'var(--badge-stat-text)', background: 'var(--badge-stat-bg)',
      backdropFilter: 'blur(4px)', boxShadow: 'var(--badge-stat-ring)',
      padding: 'var(--badge-padding)', borderRadius: 'var(--badge-radius)',
    },
    premium: {
      fontFamily: 'var(--font-sans)', fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)',
      color: 'var(--badge-premium-text)', background: 'var(--badge-premium-bg)',
      border: '1px solid var(--badge-premium-border)',
      padding: '8px 16px', borderRadius: 'var(--radius-pill)',
    },
  };
  return (
    <span style={{ ...base, ...(variants[variant] || variants.pro), ...style }} {...rest}>
      {children}
    </span>
  );
}
