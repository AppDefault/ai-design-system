import React from 'react';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Solid gold when true, hairline outline when false. */
  active?: boolean;
  children?: React.ReactNode;
}

/** Chip — pill filter / category toggle. */
export function Chip(props: ChipProps): JSX.Element;
