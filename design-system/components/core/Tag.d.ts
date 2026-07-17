import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/** Tag — small quiet metadata pill (character traits). */
export function Tag(props: TagProps): JSX.Element;
