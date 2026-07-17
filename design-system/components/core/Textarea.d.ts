import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

/** Textarea — multi-line field matching Input's styling. */
export function Textarea(props: TextareaProps): JSX.Element;
