import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading icon node (e.g. a search glyph). */
  icon?: React.ReactNode;
  /** Style overrides for the outer wrapper (border/fill). */
  wrapperStyle?: React.CSSProperties;
}

/** Input — single-line text field with optional leading icon and gold focus ring. */
export function Input(props: InputProps): JSX.Element;
