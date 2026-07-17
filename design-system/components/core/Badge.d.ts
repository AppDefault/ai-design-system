import React from 'react';

export type BadgeVariant = 'pro' | 'stat' | 'premium';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** pro = solid magenta mono · stat = dark scrim count · premium = magenta outline pill */
  variant?: BadgeVariant;
  children?: React.ReactNode;
}

/** Badge — status/label markers (PRO, view counts, Premium nav pill). */
export function Badge(props: BadgeProps): JSX.Element;
