import React from 'react';

/**
 * Button — AIGirl's primary action control.
 * Gold "primary" is the single strongest CTA; "secondary" is a hairline outline;
 * "premium" is the magenta gradient reserved for Pro/upgrade; "ghost" is bare text.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  full = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '9px 16px', fontSize: 13, radius: 'var(--radius-md)' },
    md: { padding: '12px 24px', fontSize: 15, radius: 'var(--radius-md)' },
    lg: { padding: '14px 28px', fontSize: 15, radius: 'var(--radius-card)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--gold)', color: 'var(--gold-ink)',
      border: '1px solid transparent', fontWeight: 700,
    },
    secondary: {
      background: 'transparent', color: 'var(--text-high)',
      border: '1px solid var(--border-strong)', fontWeight: 500,
    },
    premium: {
      background: 'var(--premium-cta)', color: 'var(--premium-ink)',
      border: '1px solid transparent', fontWeight: 700,
    },
    ghost: {
      background: 'transparent', color: 'var(--text-secondary)',
      border: '1px solid transparent', fontWeight: 600,
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: 8, cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-sans)', lineHeight: 1,
        padding: s.padding, fontSize: s.fontSize, borderRadius: s.radius,
        width: full ? '100%' : 'auto',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-spring), filter var(--dur-fast) ease',
        ...v, ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.22)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(.96)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {icon}{children}{iconRight}
    </button>
  );
}
