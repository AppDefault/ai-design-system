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
        background: 'var(--field-background)',
        border: `1px solid ${focus ? 'var(--field-border-focus)' : 'var(--field-border)'}`,
        borderRadius: 'var(--field-radius)', padding: 'var(--field-padding)',
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
          fontFamily: 'var(--font-sans)', fontSize: 'var(--field-font-size)', color: 'var(--field-text)',
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
