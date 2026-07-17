import React from 'react';

/**
 * Input — single-line text field. Dark subtle fill, hairline border,
 * gold focus ring. Optional leading icon (search glyph, etc).
 */
export function Input({ icon = null, style = {}, wrapperStyle = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%',
        background: 'var(--surface-1)',
        border: `1px solid ${focus ? 'var(--gold-soft-border)' : 'var(--border-2)'}`,
        borderRadius: 'var(--radius-card)', padding: '13px 16px',
        transition: 'border-color var(--dur) ease',
        ...wrapperStyle,
      }}
    >
      {icon ? <span style={{ color: 'var(--text-muted)', fontSize: 16, display: 'flex' }}>{icon}</span> : null}
      <input
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        style={{
          flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none',
          fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-primary)',
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
