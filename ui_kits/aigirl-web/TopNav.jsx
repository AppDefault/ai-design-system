// Top navigation bar — shared across all AIGirl web screens.
const { Badge, Avatar } = window.AIGirlNoirEditorialDesignSystem_ffacee;

function TopNav({ route, onNavigate, theme, onToggleTheme }) {
  const links = [
    { id: 'explore', label: 'Explore' },
    { id: 'chats', label: 'My Chats' },
    { id: 'create', label: 'Create' },
    { id: 'blog', label: 'Blog' },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '22px 40px', borderBottom: '1px solid var(--border-faint)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <div onClick={() => onNavigate('explore')} style={{ fontFamily: 'var(--font-display)', fontSize: 26,
          fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-.01em', cursor: 'pointer' }}>
          AI<span style={{ color: 'var(--gold)' }}>Girl</span>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 14, fontWeight: 500 }}>
          {links.map(l => (
            <span key={l.id} onClick={() => onNavigate(l.id)} style={{ cursor: 'pointer',
              color: route === l.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              transition: 'color var(--dur) ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = route === l.id ? 'var(--text-primary)' : 'var(--text-secondary)'}>
              {l.label}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={onToggleTheme} aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}
          title={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}
          style={{ height: 34, padding: '0 13px', borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-strong)', background: 'var(--surface-1)',
            color: 'var(--text-high)', fontFamily: 'var(--font-sans)', fontSize: 12,
            cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          <span style={{ fontSize: 16, lineHeight: 1 }}>{theme === 'dark' ? '☀︎' : '☾'}</span>
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <Badge variant="premium" style={{ cursor: 'pointer' }}>✦ Premium</Badge>
        <Avatar initial="M" size={38} shape="circle" />
      </div>
    </div>
  );
}
Object.assign(window, { TopNav });
