// Chat screen — 3-pane: recent rail · conversation · character panel. Composer sends real messages.
const { Button, Tag, Avatar } = window.AIGirlNoirEditorialDesignSystem_ffacee;
const { useState, useRef, useEffect } = React;

function Chat({ character, onBack }) {
  const c = character || { name: 'Annie', initial: 'A', category: 'Original',
    blurb: 'Your composed new secretary — organized, warm, a little curious about the man behind the desk.',
    tags: ['Female', 'Original', 'Romantic'], views: '1.8M' };
  const [messages, setMessages] = useState(window.AIGIRL_MESSAGES);
  const [draft, setDraft] = useState('');
  const scrollRef = useRef(null);
  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages]);

  function send() {
    const t = draft.trim();
    if (!t) return;
    setMessages(m => [...m, { isUser: true, text: t }]);
    setDraft('');
    setTimeout(() => setMessages(m => [...m, { isAi: true, hasAction: true,
      action: `${c.name} leans in, considering your words.`,
      text: 'Mm. You always know just what to say, don\u2019t you?' }]), 600);
  }

  return (
    <div style={{ height: 720, display: 'flex' }}>
      {/* rail */}
      <div style={{ width: 250, flexShrink: 0, borderRight: '1px solid var(--border-faint)',
        display: 'flex', flexDirection: 'column' }}>
        <div onClick={onBack} style={{ padding: '20px 22px', borderBottom: '1px solid var(--border-faint)',
          fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer' }}>
          AI<span style={{ color: 'var(--gold)' }}>Girl</span>
        </div>
        <div style={{ padding: '16px 18px' }}>
          <Button variant="primary" full icon={<Icon name="plus" size={16} />}>New chat</Button>
        </div>
        <div style={{ font: 'var(--meta)', letterSpacing: '.14em', textTransform: 'uppercase',
          color: 'var(--text-muted)', padding: '4px 22px 10px' }}>Recent</div>
        <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 2, padding: '0 12px' }}>
          {window.AIGIRL_RECENT.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: 11,
              borderRadius: 'var(--radius-md)', cursor: 'pointer',
              background: r.name === c.name ? 'var(--surface-3)' : 'transparent' }}
              onMouseEnter={e => { if (r.name !== c.name) e.currentTarget.style.background = 'var(--surface-1)'; }}
              onMouseLeave={e => { if (r.name !== c.name) e.currentTarget.style.background = 'transparent'; }}>
              <Avatar initial={r.initial} size={38} />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{r.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-tertiary)', whiteSpace: 'nowrap',
                  overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.snippet}</div>
              </div>
              <span style={{ font: 'var(--meta)', color: 'var(--text-muted)' }}>{r.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* center */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 24px',
          borderBottom: '1px solid var(--border-faint)' }}>
          <span onClick={onBack} style={{ color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex' }}>
            <Icon name="chevron-left" size={20} /></span>
          <Avatar initial={c.initial} size={40} />
          <div>
            <div style={{ font: 'var(--display-md)', color: 'var(--text-primary)' }}>{c.name}</div>
            <div style={{ fontSize: 12, color: 'var(--success)' }}>● online</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13,
              color: 'var(--text-secondary)', border: '1px solid var(--border-strong)',
              padding: '8px 14px', borderRadius: 'var(--radius-pill)', cursor: 'pointer' }}>
              <Icon name="sparkles" size={14} color="var(--magenta-light)" /> Deepseek — High quality
              <Icon name="chevron-down" size={14} /></span>
            <span style={{ color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex' }}>
              <Icon name="more-horizontal" size={20} /></span>
          </div>
        </div>

        <div ref={scrollRef} style={{ flex: 1, overflow: 'auto', padding: '26px 28px',
          display: 'flex', flexDirection: 'column', gap: 18, background: 'var(--glow-magenta)' }}>
          <div style={{ alignSelf: 'center', fontSize: 12, color: 'var(--text-muted)',
            background: 'var(--surface-1)', padding: '6px 14px', borderRadius: 'var(--radius-pill)' }}>
            This is an AI chatbot. Conversations are fictional.</div>
          {messages.map((m, i) => m.isAi ? (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', maxWidth: '74%' }}>
              <Avatar initial={c.initial} size={34} />
              <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border-1)',
                borderRadius: '4px 16px 16px 16px', padding: '14px 18px' }}>
                {m.hasAction && <div style={{ fontStyle: 'italic', fontSize: 14,
                  color: 'var(--text-muted)', marginBottom: 6 }}>{m.action}</div>}
                <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-high)' }}>{m.text}</div>
              </div>
            </div>
          ) : (
            <div key={i} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ maxWidth: '70%', background: 'var(--gold-soft)',
                border: '1px solid var(--gold-soft-border)', borderRadius: '16px 4px 16px 16px',
                padding: '13px 18px', fontSize: 15, lineHeight: 1.5, color: 'var(--gold-tint-text)' }}>{m.text}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: '16px 24px 20px', borderTop: '1px solid var(--border-faint)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface-1)',
            border: '1px solid var(--border-2)', borderRadius: 'var(--radius-lg)', padding: '12px 16px' }}>
            <Icon name="image" size={18} color="var(--text-muted)" />
            <Icon name="mic" size={18} color="var(--text-muted)" />
            <input value={draft} onChange={e => setDraft(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()} placeholder={`Message ${c.name}…`}
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none',
                fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-primary)' }} />
            <span onClick={send} style={{ width: 38, height: 38, borderRadius: 'var(--radius-md)',
              background: 'var(--gold)', color: 'var(--gold-ink)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer' }}><Icon name="send" size={16} /></span>
          </div>
        </div>
      </div>

      {/* right panel */}
      <div style={{ width: 300, flexShrink: 0, borderLeft: '1px solid var(--border-faint)',
        padding: '26px 22px', display: 'flex', flexDirection: 'column', gap: 18, overflow: 'auto' }}>
        <div style={{ aspectRatio: '1/1', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-1)',
          background: 'var(--placeholder-hatch), var(--placeholder-fill)', display: 'flex',
          alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 96, color: 'var(--text-faint)' }}>{c.initial}</span>
        </div>
        <div>
          <div style={{ font: 'var(--display-lg)', color: 'var(--text-primary)' }}>{c.name}</div>
          <div style={{ font: 'var(--meta)', fontSize: 12, color: 'var(--text-tertiary)' }}>
            @{c.name.toLowerCase().replace(/\s+/g, '')} · {c.views} chats</div>
        </div>
        <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
          {(c.tags || []).map((t, i) => <Tag key={i}>{t}</Tag>)}
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)', margin: 0 }}>{c.blurb}</p>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 9 }}>
          <Button variant="primary" full icon={<Icon name="pencil" size={15} />}>Edit character</Button>
          <Button variant="secondary" full icon={<Icon name="rotate-ccw" size={15} />}>Restart chat</Button>
          <Button variant="ghost" size="sm" icon={<Icon name="flag" size={14} />}>Report content</Button>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Chat });
