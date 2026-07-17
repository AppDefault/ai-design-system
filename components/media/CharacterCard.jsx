import React from 'react';
import { Tag } from '../core/Tag.jsx';
import { Badge } from '../core/Badge.jsx';

/**
 * CharacterCard — the core discovery unit on Explore. A 4:5 portrait placeholder
 * (gradient + hatch + giant serif initial) with optional PRO + view-count overlays,
 * then serif name, gold mono category kicker, 2-line blurb, and trait tags.
 * Hovers up by 4px.
 */
export function CharacterCard({
  name = 'Annie',
  initial,
  category = 'Original',
  blurb = '',
  tags = [],
  views = null,
  pro = false,
  src = null,
  style = {},
  ...rest
}) {
  const letter = initial || (name ? name[0].toUpperCase() : 'A');
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 11, cursor: 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-spring)', ...style }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      <div style={{
        position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--radius-card)',
        overflow: 'hidden', border: '1px solid var(--border-1)',
        background: src ? `center/cover no-repeat url(${src})`
          : 'var(--placeholder-hatch), var(--placeholder-fill)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {!src && (
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 84, fontWeight: 600,
            color: 'var(--text-faint)' }}>{letter}</span>
        )}
        {pro && <Badge variant="pro" style={{ position: 'absolute', top: 14, left: 14 }}>PRO</Badge>}
        {views != null && <Badge variant="stat" style={{ position: 'absolute', top: 14, right: 14 }}>{views}</Badge>}
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18,
            color: 'var(--text-primary)', margin: 0, letterSpacing: 'var(--tracking-snug)',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em',
            textTransform: 'uppercase', color: 'var(--gold)', whiteSpace: 'nowrap' }}>{category}</span>
        </div>
        {blurb && (
          <p style={{ font: 'var(--body-xs)', color: 'var(--text-secondary)', margin: '6px 0 10px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{blurb}</p>
        )}
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
          </div>
        )}
      </div>
    </div>
  );
}
