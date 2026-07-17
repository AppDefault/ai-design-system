// Top navigation bar — shared across all AIGirl web screens.
const { Badge, Avatar } = window.AIGirlNoirEditorialDesignSystem_ffacee;

function TopNav({ route, onNavigate }) {
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
          fontWeight: 600, color: '#fff', letterSpacing: '-.01em', cursor: 'pointer' }}>
          AI<span style={{ color: 'var(--gold)' }}>Girl</span>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 14, fontWeight: 500 }}>
          {links.map(l => (
            <span key={l.id} onClick={() => onNavigate(l.id)} style={{ cursor: 'pointer',
              color: route === l.id ? '#fff' : 'var(--text-secondary)',
              transition: 'color var(--dur) ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = route === l.id ? '#fff' : 'var(--text-secondary)'}>
              {l.label}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Badge variant="premium" style={{ cursor: 'pointer' }}>✦ Premium</Badge>
        <Avatar initial="M" size={38} shape="circle" />
      </div>
    </div>
  );
}
Object.assign(window, { TopNav });
