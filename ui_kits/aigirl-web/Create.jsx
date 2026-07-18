// Create studio — character builder form with a live preview panel.
const { Button, Chip, Input, Textarea, CharacterCard } = window.AIGirlNoirEditorialDesignSystem_ffacee;
const { useState } = React;

function Field({ label, hint, children }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600,
        color: 'var(--text-high)', marginBottom: 8 }}>{label}</label>
      {children}
      {hint && <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 7, lineHeight: 1.45 }}>{hint}</div>}
    </div>
  );
}

function StepHead({ n, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      <span style={{ width: 26, height: 26, borderRadius: 'var(--radius-sm)', background: 'var(--gold)',
        color: 'var(--gold-ink)', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center',
        justifyContent: 'center' }}>{n}</span>
      <span style={{ font: 'var(--display-sm)', fontSize: 20, color: 'var(--text-primary)' }}>{title}</span>
    </div>
  );
}

const ALL_TAGS = ['Female', 'Male', 'Original', 'Anime', 'Romantic', 'Fantasy', 'Story', 'Non-human', 'Mystery'];

function Create() {
  const [name, setName] = useState('Marina');
  const [intro, setIntro] = useState('Your devoted little sister');
  const [tags, setTags] = useState(['Female', 'Romantic']);
  const [vis, setVis] = useState('public');

  function toggle(t) { setTags(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]); }

  return (
    <div>
      <div style={{ padding: '30px 40px', borderBottom: '1px solid var(--border-faint)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ font: 'var(--kicker)', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: 8 }}>Studio</div>
          <h2 style={{ font: 'var(--display-xl)', color: 'var(--text-primary)', margin: 0,
            letterSpacing: 'var(--tracking-snug)' }}>Create your character</h2>
        </div>
        <span style={{ fontSize: 13, color: 'var(--gold)', cursor: 'pointer' }}>Read the full guide →</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px' }}>
        {/* form */}
        <div style={{ padding: '34px 40px', display: 'flex', flexDirection: 'column', gap: 34,
          borderRight: '1px solid var(--border-faint)' }}>
          <div>
            <StepHead n="1" title="Basics" />
            <div style={{ display: 'flex', gap: 24 }}>
              <div style={{ width: 130, flexShrink: 0 }}>
                <div style={{ aspectRatio: '1/1', borderRadius: 'var(--radius-lg)',
                  border: '1.5px dashed var(--border-strong)', background: 'var(--surface-1)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: 6, color: 'var(--text-muted)', cursor: 'pointer' }}>
                  <Icon name="plus" size={24} /><span style={{ fontSize: 11 }}>Avatar</span>
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <Field label="Name" hint="First and last names allowed (3–40 characters).">
                  <Input value={name} onChange={e => setName(e.target.value)} placeholder="Character name" />
                </Field>
                <Field label="Introduction" hint="A one-line hook shown on the card and detail page.">
                  <Input value={intro} onChange={e => setIntro(e.target.value)} placeholder="Short intro" />
                </Field>
              </div>
            </div>
          </div>

          <div>
            <StepHead n="2" title="Tags" />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {ALL_TAGS.map(t => <Chip key={t} active={tags.includes(t)} onClick={() => toggle(t)}>{t}</Chip>)}
            </div>
          </div>

          <div>
            <StepHead n="3" title="Personality" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Field label="Greeting" hint="What would they say to start a conversation? (3–1000 characters)">
                <Textarea rows={2} defaultValue="Hey, you actually showed up — I was starting to think you forgot about me." />
              </Field>
              <Field label="Personality & Scenario" hint="In a few sentences, how would they describe themselves? (500–5000 characters)">
                <Textarea rows={3} defaultValue="Marina is warm, a little clingy, and endlessly loyal. She lights up the moment you walk in." />
              </Field>
            </div>
          </div>

          <div>
            <StepHead n="4" title="Visibility" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['public', 'Public', 'Anyone can chat'], ['private', 'Private', 'Only you can chat']].map(([id, t, d]) => (
                <div key={id} onClick={() => setVis(id)} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
                  <span style={{ width: 18, height: 18, borderRadius: '999px',
                    border: `2px solid ${vis === id ? 'var(--gold)' : 'var(--border-strong)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {vis === id && <span style={{ width: 8, height: 8, borderRadius: '999px', background: 'var(--gold)' }} />}
                  </span>
                  <span style={{ fontSize: 15, color: 'var(--text-primary)' }}><b>{t}:</b> <span style={{ color: 'var(--text-secondary)' }}>{d}</span></span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="secondary">Advanced settings</Button>
            <Button variant="primary">Save character</Button>
          </div>
        </div>

        {/* live preview */}
        <div style={{ padding: '34px 30px' }}>
          <div style={{ font: 'var(--meta)', letterSpacing: '.14em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: 16 }}>Live preview</div>
          <CharacterCard name={name || 'Unnamed'} category="Original" blurb={intro} tags={tags} views="0" />
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Create });
