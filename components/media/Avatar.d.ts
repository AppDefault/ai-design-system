import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Serif initial shown when no image is set. */
  initial?: string;
  /** Optional image URL; falls back to gradient + initial. */
  src?: string | null;
  /** Pixel size (square). Default 40. */
  size?: number;
  shape?: 'rounded' | 'circle';
}

/** Avatar — gradient-initial tile (or image) for characters, personas, and message rows. */
export function Avatar(props: AvatarProps): JSX.Element;
