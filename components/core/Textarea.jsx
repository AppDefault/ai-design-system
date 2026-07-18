import React from 'react';

/**
 * Textarea — multi-line field matching Input's styling. Used for greetings,
 * personality/scenario, and message composition in the Create studio.
 */
export function Textarea({ rows = 3, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows}
      onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
      style={{
        width: '100%', resize: 'vertical',
        background: 'var(--field-background)',
        border: `1px solid ${focus ? 'var(--field-border-focus)' : 'var(--field-border)'}`,
        borderRadius: 'var(--field-radius)', padding: 'var(--field-padding)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--field-font-size)', lineHeight: 'var(--field-line-height)',
        color: 'var(--field-text)', outline: 'none',
        transition: 'border-color var(--dur) ease',
        ...style,
      }}
      {...rest}
    />
  );
}
