import React from 'react';

export interface CharacterCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  /** Watermark initial; defaults to first letter of name. */
  initial?: string;
  /** Gold mono kicker (e.g. Anime, Celebrity, Original, Fantasy, Game). */
  category?: string;
  blurb?: string;
  /** Trait pills rendered under the blurb. */
  tags?: string[];
  /** View-count string shown top-right (e.g. "1.8M"); omit to hide. */
  views?: string | null;
  /** Shows the magenta PRO badge top-left. */
  pro?: boolean;
  /** Optional portrait image URL; falls back to gradient + initial. */
  src?: string | null;
}

/**
 * CharacterCard — the core discovery unit on Explore.
 * @startingPoint section="Media" subtitle="4:5 character discovery card" viewport="280x420"
 */
export function CharacterCard(props: CharacterCardProps): JSX.Element;
