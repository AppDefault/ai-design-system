import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'premium' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = gold CTA · secondary = outline · premium = magenta gradient (Pro) · ghost = bare text */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Leading icon node (e.g. a Lucide <i data-lucide> or glyph). */
  icon?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  /** Stretch to fill container width. */
  full?: boolean;
  children?: React.ReactNode;
}

/**
 * Button — AIGirl's primary action control.
 * @startingPoint section="Core" subtitle="Gold / outline / premium buttons" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
