// App shell — routing between Explore, Chat, and Create.
const { useEffect, useState } = React;

function App() {
  const [route, setRoute] = useState('explore');
  const [character, setCharacter] = useState(null);
  const [theme, setTheme] = useState(() => {
    try { return window.localStorage.getItem('aigirl-theme') === 'light' ? 'light' : 'dark'; }
    catch (_) { return 'dark'; }
  });
  useLucide();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { window.localStorage.setItem('aigirl-theme', theme); } catch (_) {}
  }, [theme]);

  function openChat(c) { setCharacter(c); setRoute('chat'); }
  function navigate(id) {
    if (id === 'chats') { setCharacter(window.AIGIRL_CHARS[0]); setRoute('chat'); }
    else setRoute(id === 'blog' ? 'explore' : id);
  }

  const panel = {
    width: 1360, margin: '0 auto', background: 'var(--surface-panel)',
    border: '1px solid var(--border-faint)', borderRadius: 'var(--radius-panel)',
    overflow: 'hidden', boxShadow: 'var(--shadow-panel)',
  };

  return (
    <div data-theme={theme} style={{ background: 'var(--bg)', minHeight: '100vh', padding: 40,
      fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
      <div style={panel}>
        {route === 'chat'
          ? <Chat character={character} onBack={() => setRoute('explore')} />
          : (<>
              <TopNav route={route} onNavigate={navigate} theme={theme}
                onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
              {route === 'create' ? <Create /> : <Explore onOpenChat={openChat} />}
            </>)}
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
