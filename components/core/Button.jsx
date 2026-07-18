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
    sm: { padding: 'var(--control-padding-sm)', fontSize: 'var(--button-font-size-sm)', radius: 'var(--button-radius-sm)' },
    md: { padding: 'var(--control-padding-md)', fontSize: 'var(--button-font-size-md)', radius: 'var(--button-radius-md)' },
    lg: { padding: 'var(--control-padding-lg)', fontSize: 'var(--button-font-size-lg)', radius: 'var(--button-radius-lg)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--button-primary-bg)', color: 'var(--button-primary-text)',
      border: '1px solid transparent', fontWeight: 'var(--font-weight-bold)',
    },
    secondary: {
      background: 'var(--button-secondary-bg)', color: 'var(--button-secondary-text)',
      border: '1px solid var(--button-secondary-border)', fontWeight: 'var(--font-weight-medium)',
    },
    premium: {
      background: 'var(--button-premium-bg)', color: 'var(--button-premium-text)',
      border: '1px solid transparent', fontWeight: 'var(--font-weight-bold)',
    },
    ghost: {
      background: 'transparent', color: 'var(--button-ghost-text)',
      border: '1px solid transparent', fontWeight: 'var(--font-weight-semibold)',
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
        opacity: disabled ? 'var(--button-disabled-opacity)' : 1,
        transition: 'var(--interactive-transition)',
        ...v, ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'var(--interactive-hover-filter)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {icon}{children}{iconRight}
    </button>
  );
}
