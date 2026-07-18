import React from 'react';

/**
 * Avatar — since characters rarely have a loaded image in mocks, the default is a
 * warm-violet gradient tile with a serif initial. Pass `src` for a real image.
 * Square rounded-rect by default; set shape="circle" for user/persona avatars.
 */
export function Avatar({ initial = 'A', src = null, size = 40, shape = 'rounded', style = {}, ...rest }) {
  const radius = shape === 'circle' ? 'var(--radius-pill)'
    : size >= 64 ? 'var(--radius-lg)'
    : size >= 40 ? 'var(--radius-md)' : 'var(--radius-sm)';
  return (
    <div
      style={{
        width: size, height: size, flexShrink: 0, borderRadius: radius, overflow: 'hidden',
        background: src ? `center/cover no-repeat url(${src})` : 'var(--avatar-fill)',
        border: '1px solid var(--border-1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        ...style,
      }}
      {...rest}
    >
      {!src && (
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-semibold)',
          fontSize: Math.round(size * 0.44), color: 'var(--text-secondary)',
        }}>{initial}</span>
      )}
    </div>
  );
}
