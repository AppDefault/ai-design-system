// Explore screen — hero + search, filter chips, character discovery grid.
const { Chip, Button, Input, CharacterCard } = window.AIGirlNoirEditorialDesignSystem_ffacee;
const { useState } = React;

function Explore({ onOpenChat }) {
  const [active, setActive] = useState('All');
  const stats = [
    { v: '12,400+', l: 'characters' },
    { v: '48M', l: 'chats started' },
    { v: 'Live', l: '247 online now', gold: true },
  ];
  return (
    <div>
      {/* hero */}
      <div style={{ padding: '48px 40px 36px', display: 'flex', gap: 48, alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: 'var(--kicker)', letterSpacing: 'var(--kicker-tracking)',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>18+ · Chat &amp; Roleplay</div>
          <h1 style={{ font: 'var(--display-hero)', color: 'var(--text-primary)', margin: '0 0 26px',
            letterSpacing: 'var(--tracking-tight)' }}>Meet a character worth<br/>talking to tonight.</h1>
          <div style={{ display: 'flex', gap: 12, marginBottom: 22, maxWidth: 620 }}>
            <Input placeholder="Search characters by name or mood…" icon={<Icon name="search" size={16} />} />
            <Button variant="primary" size="lg">Search</Button>
          </div>
          <div style={{ display: 'flex', gap: 34 }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ font: 'var(--display-lg)', fontWeight: 500,
                  color: s.gold ? 'var(--gold)' : 'var(--text-primary)' }}>{s.v}</div>
                <div style={{ font: 'var(--meta)', letterSpacing: 'var(--meta-tracking)',
                  textTransform: 'uppercase', color: 'var(--text-muted)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* filters */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 40px 32px', flexWrap: 'wrap' }}>
        {window.AIGIRL_FILTERS.map(f => (
          <Chip key={f} active={active === f} onClick={() => setActive(f)}>{f}</Chip>
        ))}
        <span style={{ marginLeft: 'auto', font: 'var(--body-sm)', fontFamily: 'var(--font-mono)',
          color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="flame" size={14} color="var(--gold)" /> Trending
          <Icon name="chevron-down" size={14} />
        </span>
      </div>
      {/* grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20, padding: '0 40px 48px' }}>
        {window.AIGIRL_CHARS.map((c, i) => (
          <CharacterCard key={i} {...c} onClick={() => onOpenChat(c)} />
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { Explore });
