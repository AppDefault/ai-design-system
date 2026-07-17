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
        background: 'var(--surface-1)',
        border: `1px solid ${focus ? 'var(--gold-soft-border)' : 'var(--border-2)'}`,
        borderRadius: 'var(--radius-card)', padding: '13px 16px',
        fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.5,
        color: 'var(--text-primary)', outline: 'none',
        transition: 'border-color var(--dur) ease',
        ...style,
      }}
      {...rest}
    />
  );
}
