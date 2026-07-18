/* @ds-bundle: {"format":4,"namespace":"AIGirlNoirEditorialDesignSystem_ffacee","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/media/Avatar.jsx"},{"name":"CharacterCard","sourcePath":"components/media/CharacterCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f4e4de939549","components/core/Button.jsx":"7a762f389b49","components/core/Chip.jsx":"05b8222fca5c","components/core/Input.jsx":"766a3a92e448","components/core/Tag.jsx":"5f1aacbad906","components/core/Textarea.jsx":"b55f9e3d6f94","components/media/Avatar.jsx":"92a4324199d1","components/media/CharacterCard.jsx":"bc14cce9e2e2","ui_kits/aigirl-web/App.jsx":"69bae44cabd5","ui_kits/aigirl-web/Chat.jsx":"44a92b002f5a","ui_kits/aigirl-web/Create.jsx":"5efb54fb67a2","ui_kits/aigirl-web/Explore.jsx":"0030d3266082","ui_kits/aigirl-web/TopNav.jsx":"1e9dac6a1a5b","ui_kits/aigirl-web/data.js":"614b53836da9","ui_kits/aigirl-web/shared.jsx":"e33998951436"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AIGirlNoirEditorialDesignSystem_ffacee = window.AIGirlNoirEditorialDesignSystem_ffacee || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — tiny status/label markers layered on cards and nav.
 *  - "pro": solid magenta, mono uppercase (paid character marker)
 *  - "stat": dark scrim overlay for counts on imagery (e.g. "1.8M")
 *  - "premium": magenta outline pill with a spark, for the nav Premium entry
 */
function Badge({
  variant = 'pro',
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    pro: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.08em',
      color: 'var(--premium-ink)',
      background: 'var(--magenta-badge)',
      padding: '4px 9px',
      borderRadius: 'var(--radius-xs)'
    },
    stat: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--overlay-text)',
      background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(4px)',
      padding: '4px 9px',
      borderRadius: 'var(--radius-xs)'
    },
    premium: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--magenta)',
      background: 'var(--magenta-soft)',
      border: '1px solid var(--magenta-border)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.pro),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — AIGirl's primary action control.
 * Gold "primary" is the single strongest CTA; "secondary" is a hairline outline;
 * "premium" is the magenta gradient reserved for Pro/upgrade; "ghost" is bare text.
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  full = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 16px',
      fontSize: 13,
      radius: 'var(--radius-md)'
    },
    md: {
      padding: '12px 24px',
      fontSize: 15,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '14px 28px',
      fontSize: 15,
      radius: 'var(--radius-card)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--gold)',
      color: 'var(--gold-ink)',
      border: '1px solid transparent',
      fontWeight: 700
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-high)',
      border: '1px solid var(--border-strong)',
      fontWeight: 500
    },
    premium: {
      background: 'var(--premium-cta)',
      color: 'var(--premium-ink)',
      border: '1px solid transparent',
      fontWeight: 700
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
      fontWeight: 600
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1,
      padding: s.padding,
      fontSize: s.fontSize,
      borderRadius: s.radius,
      width: full ? '100%' : 'auto',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-spring), filter var(--dur-fast) ease',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.22)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a pill-shaped filter / category toggle (the "All · Anime · Movie…" row).
 * Active chips are solid gold with dark ink; inactive are hairline outlines.
 */
function Chip({
  active = false,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1,
      padding: '8px 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-spring), border-color var(--dur-fast) ease, color var(--dur-fast) ease',
      ...(active ? {
        background: 'var(--gold)',
        color: 'var(--gold-ink)',
        fontWeight: 700,
        border: '1px solid transparent'
      } : {
        background: 'transparent',
        color: 'var(--text-secondary)',
        fontWeight: 500,
        border: '1px solid var(--border-3)'
      }),
      ...style
    },
    onMouseEnter: e => {
      if (!active) {
        e.currentTarget.style.borderColor = 'rgba(250,204,21,.6)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      if (!active) {
        e.currentTarget.style.borderColor = 'var(--border-3)';
        e.currentTarget.style.transform = 'none';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Dark subtle fill, hairline border,
 * gold focus ring. Optional leading icon (search glyph, etc).
 */
function Input({
  icon = null,
  style = {},
  wrapperStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      background: 'var(--surface-1)',
      border: `1px solid ${focus ? 'var(--gold-soft-border)' : 'var(--border-2)'}`,
      borderRadius: 'var(--radius-card)',
      padding: '13px 16px',
      transition: 'border-color var(--dur) ease',
      ...wrapperStyle
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 16,
      display: 'flex'
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small, quiet metadata pill (character traits: Female · Original · Romantic).
 * Always outline-only, smaller than a Chip, not interactive by default.
 */
function Tag({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.2,
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-strong)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line field matching Input's styling. Used for greetings,
 * personality/scenario, and message composition in the Create studio.
 */
function Textarea({
  rows = 3,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      resize: 'vertical',
      background: 'var(--surface-1)',
      border: `1px solid ${focus ? 'var(--gold-soft-border)' : 'var(--border-2)'}`,
      borderRadius: 'var(--radius-card)',
      padding: '13px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      outline: 'none',
      transition: 'border-color var(--dur) ease',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/media/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — since characters rarely have a loaded image in mocks, the default is a
 * warm-violet gradient tile with a serif initial. Pass `src` for a real image.
 * Square rounded-rect by default; set shape="circle" for user/persona avatars.
 */
function Avatar({
  initial = 'A',
  src = null,
  size = 40,
  shape = 'rounded',
  style = {},
  ...rest
}) {
  const radius = shape === 'circle' ? '999px' : size >= 64 ? 'var(--radius-lg)' : size >= 40 ? 'var(--radius-md)' : 'var(--radius-sm)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: radius,
      overflow: 'hidden',
      background: src ? `center/cover no-repeat url(${src})` : 'var(--avatar-fill)',
      border: '1px solid var(--border-1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), !src && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: Math.round(size * 0.44),
      color: 'var(--text-secondary)'
    }
  }, initial));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/media/CharacterCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CharacterCard — the core discovery unit on Explore. A 4:5 portrait placeholder
 * (gradient + hatch + giant serif initial) with optional PRO + view-count overlays,
 * then serif name, gold mono category kicker, 2-line blurb, and trait tags.
 * Hovers up by 4px.
 */
function CharacterCard({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-spring)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      border: '1px solid var(--border-1)',
      background: src ? `center/cover no-repeat url(${src})` : 'var(--placeholder-hatch), var(--placeholder-fill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !src && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 84,
      fontWeight: 600,
      color: 'var(--text-faint)'
    }
  }, letter), pro && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "pro",
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, "PRO"), views != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "stat",
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, views)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--text-primary)',
      margin: 0,
      letterSpacing: 'var(--tracking-snug)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      whiteSpace: 'nowrap'
    }
  }, category)), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-secondary)',
      margin: '6px 0 10px',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, blurb), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i
  }, t)))));
}
Object.assign(__ds_scope, { CharacterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/CharacterCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aigirl-web/App.jsx
try { (() => {
// App shell — routing between Explore, Chat, and Create.
const {
  useState
} = React;
function App() {
  const [route, setRoute] = useState('explore');
  const [character, setCharacter] = useState(null);
  useLucide();
  function openChat(c) {
    setCharacter(c);
    setRoute('chat');
  }
  function navigate(id) {
    if (id === 'chats') {
      setCharacter(window.AIGIRL_CHARS[0]);
      setRoute('chat');
    } else setRoute(id === 'blog' ? 'explore' : id);
  }
  const panel = {
    width: 1360,
    margin: '0 auto',
    background: 'var(--surface-panel)',
    border: '1px solid var(--border-faint)',
    borderRadius: 'var(--radius-panel)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-panel)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg)',
      minHeight: '100vh',
      padding: 40,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: panel
  }, route === 'chat' ? /*#__PURE__*/React.createElement(Chat, {
    character: character,
    onBack: () => setRoute('explore')
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopNav, {
    route: route,
    onNavigate: navigate
  }), route === 'create' ? /*#__PURE__*/React.createElement(Create, null) : /*#__PURE__*/React.createElement(Explore, {
    onOpenChat: openChat
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aigirl-web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aigirl-web/Chat.jsx
try { (() => {
// Chat screen — 3-pane: recent rail · conversation · character panel. Composer sends real messages.
const {
  Button,
  Tag,
  Avatar
} = window.AIGirlNoirEditorialDesignSystem_ffacee;
const {
  useState,
  useRef,
  useEffect
} = React;
function Chat({
  character,
  onBack
}) {
  const c = character || {
    name: 'Annie',
    initial: 'A',
    category: 'Original',
    blurb: 'Your composed new secretary — organized, warm, a little curious about the man behind the desk.',
    tags: ['Female', 'Original', 'Romantic'],
    views: '1.8M'
  };
  const [messages, setMessages] = useState(window.AIGIRL_MESSAGES);
  const [draft, setDraft] = useState('');
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);
  function send() {
    const t = draft.trim();
    if (!t) return;
    setMessages(m => [...m, {
      isUser: true,
      text: t
    }]);
    setDraft('');
    setTimeout(() => setMessages(m => [...m, {
      isAi: true,
      hasAction: true,
      action: `${c.name} leans in, considering your words.`,
      text: 'Mm. You always know just what to say, don\u2019t you?'
    }]), 600);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 720,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 250,
      flexShrink: 0,
      borderRight: '1px solid var(--border-faint)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onBack,
    style: {
      padding: '20px 22px',
      borderBottom: '1px solid var(--border-faint)',
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, "AI", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "Girl")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  }, "New chat")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--meta)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      padding: '4px 22px 10px'
    }
  }, "Recent"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '0 12px'
    }
  }, window.AIGIRL_RECENT.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: 11,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: r.name === c.name ? 'var(--surface-3)' : 'transparent'
    },
    onMouseEnter: e => {
      if (r.name !== c.name) e.currentTarget.style.background = 'var(--surface-1)';
    },
    onMouseLeave: e => {
      if (r.name !== c.name) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: r.initial,
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, r.snippet)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--meta)',
      color: 'var(--text-muted)'
    }
  }, r.time))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 24px',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onBack,
    style: {
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20
  })), /*#__PURE__*/React.createElement(Avatar, {
    initial: c.initial,
    size: 40
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--display-md)',
      color: 'var(--text-primary)'
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--success)'
    }
  }, "\u25CF online")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 13,
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-strong)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14,
    color: "var(--magenta-light)"
  }), " Deepseek \u2014 High quality", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more-horizontal",
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '26px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      background: 'var(--glow-magenta)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      fontSize: 12,
      color: 'var(--text-muted)',
      background: 'var(--surface-1)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "This is an AI chatbot. Conversations are fictional."), messages.map((m, i) => m.isAi ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      maxWidth: '74%'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initial: c.initial,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-2)',
      border: '1px solid var(--border-1)',
      borderRadius: '4px 16px 16px 16px',
      padding: '14px 18px'
    }
  }, m.hasAction && /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, m.action), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-high)'
    }
  }, m.text))) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '70%',
      background: 'var(--gold-soft)',
      border: '1px solid var(--gold-soft-border)',
      borderRadius: '16px 4px 16px 16px',
      padding: '13px 18px',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--gold-tint-text)'
    }
  }, m.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px 20px',
      borderTop: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-1)',
      border: '1px solid var(--border-2)',
      borderRadius: 'var(--radius-lg)',
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mic",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: `Message ${c.name}…`,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: send,
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gold)',
      color: 'var(--gold-ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 16
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      flexShrink: 0,
      borderLeft: '1px solid var(--border-faint)',
      padding: '26px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-1)',
      background: 'var(--placeholder-hatch), var(--placeholder-fill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 96,
      color: 'var(--text-faint)'
    }
  }, c.initial)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--display-lg)',
      color: 'var(--text-primary)'
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--meta)',
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "@", c.name.toLowerCase().replace(/\s+/g, ''), " \xB7 ", c.views, " chats")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, (c.tags || []).map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, c.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: 15
    })
  }, "Edit character"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "rotate-ccw",
      size: 15
    })
  }, "Restart chat"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "flag",
      size: 14
    })
  }, "Report content"))));
}
Object.assign(window, {
  Chat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aigirl-web/Chat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aigirl-web/Create.jsx
try { (() => {
// Create studio — character builder form with a live preview panel.
const {
  Button,
  Chip,
  Input,
  Textarea,
  CharacterCard
} = window.AIGirlNoirEditorialDesignSystem_ffacee;
const {
  useState
} = React;
function Field({
  label,
  hint,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-high)',
      marginBottom: 8
    }
  }, label), children, hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 7,
      lineHeight: 1.45
    }
  }, hint));
}
function StepHead({
  n,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--gold)',
      color: 'var(--gold-ink)',
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--display-sm)',
      fontSize: 20,
      color: 'var(--text-primary)'
    }
  }, title));
}
const ALL_TAGS = ['Female', 'Male', 'Original', 'Anime', 'Romantic', 'Fantasy', 'Story', 'Non-human', 'Mystery'];
function Create() {
  const [name, setName] = useState('Marina');
  const [intro, setIntro] = useState('Your devoted little sister');
  const [tags, setTags] = useState(['Female', 'Romantic']);
  const [vis, setVis] = useState('public');
  function toggle(t) {
    setTags(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 40px',
      borderBottom: '1px solid var(--border-faint)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--kicker)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      marginBottom: 8
    }
  }, "Studio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--display-xl)',
      color: 'var(--text-primary)',
      margin: 0,
      letterSpacing: 'var(--tracking-snug)'
    }
  }, "Create your character")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--gold)',
      cursor: 'pointer'
    }
  }, "Read the full guide \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '34px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 34,
      borderRight: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    n: "1",
    title: "Basics"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 'var(--radius-lg)',
      border: '1.5px dashed var(--border-strong)',
      background: 'var(--surface-1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "Avatar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    hint: "First and last names allowed (3\u201340 characters)."
  }, /*#__PURE__*/React.createElement(Input, {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Character name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Introduction",
    hint: "A one-line hook shown on the card and detail page."
  }, /*#__PURE__*/React.createElement(Input, {
    value: intro,
    onChange: e => setIntro(e.target.value),
    placeholder: "Short intro"
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    n: "2",
    title: "Tags"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, ALL_TAGS.map(t => /*#__PURE__*/React.createElement(Chip, {
    key: t,
    active: tags.includes(t),
    onClick: () => toggle(t)
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    n: "3",
    title: "Personality"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Greeting",
    hint: "What would they say to start a conversation? (3\u20131000 characters)"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 2,
    defaultValue: "Hey, you actually showed up \u2014 I was starting to think you forgot about me."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Personality & Scenario",
    hint: "In a few sentences, how would they describe themselves? (500\u20135000 characters)"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    defaultValue: "Marina is warm, a little clingy, and endlessly loyal. She lights up the moment you walk in."
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
    n: "4",
    title: "Visibility"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['public', 'Public', 'Anyone can chat'], ['private', 'Private', 'Only you can chat']].map(([id, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    onClick: () => setVis(id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '999px',
      border: `2px solid ${vis === id ? 'var(--gold)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, vis === id && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '999px',
      background: 'var(--gold)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("b", null, t, ":"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Advanced settings"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Save character"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '34px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--meta)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, "Live preview"), /*#__PURE__*/React.createElement(CharacterCard, {
    name: name || 'Unnamed',
    category: "Original",
    blurb: intro,
    tags: tags,
    views: "0"
  }))));
}
Object.assign(window, {
  Create
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aigirl-web/Create.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aigirl-web/Explore.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Explore screen — hero + search, filter chips, character discovery grid.
const {
  Chip,
  Button,
  Input,
  CharacterCard
} = window.AIGirlNoirEditorialDesignSystem_ffacee;
const {
  useState
} = React;
function Explore({
  onOpenChat
}) {
  const [active, setActive] = useState('All');
  const stats = [{
    v: '12,400+',
    l: 'characters'
  }, {
    v: '48M',
    l: 'chats started'
  }, {
    v: 'Live',
    l: '247 online now',
    gold: true
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 40px 36px',
      display: 'flex',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--kicker)',
      letterSpacing: 'var(--kicker-tracking)',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      marginBottom: 14
    }
  }, "18+ \xB7 Chat & Roleplay"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--display-hero)',
      color: 'var(--text-primary)',
      margin: '0 0 26px',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Meet a character worth", /*#__PURE__*/React.createElement("br", null), "talking to tonight."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 22,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search characters by name or mood\u2026",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 34
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--display-lg)',
      fontWeight: 500,
      color: s.gold ? 'var(--gold)' : 'var(--text-primary)'
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--meta)',
      letterSpacing: 'var(--meta-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, s.l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 40px 32px',
      flexWrap: 'wrap'
    }
  }, window.AIGIRL_FILTERS.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    active: active === f,
    onClick: () => setActive(f)
  }, f)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--body-sm)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 14,
    color: "var(--gold)"
  }), " Trending", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 20,
      padding: '0 40px 48px'
    }
  }, window.AIGIRL_CHARS.map((c, i) => /*#__PURE__*/React.createElement(CharacterCard, _extends({
    key: i
  }, c, {
    onClick: () => onOpenChat(c)
  })))));
}
Object.assign(window, {
  Explore
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aigirl-web/Explore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aigirl-web/TopNav.jsx
try { (() => {
// Top navigation bar — shared across all AIGirl web screens.
const {
  Badge,
  Avatar
} = window.AIGirlNoirEditorialDesignSystem_ffacee;
function TopNav({
  route,
  onNavigate
}) {
  const links = [{
    id: 'explore',
    label: 'Explore'
  }, {
    id: 'chats',
    label: 'My Chats'
  }, {
    id: 'create',
    label: 'Create'
  }, {
    id: 'blog',
    label: 'Blog'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 40px',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('explore'),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 600,
      color: 'var(--text-primary)',
      letterSpacing: '-.01em',
      cursor: 'pointer'
    }
  }, "AI", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "Girl")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      fontSize: 14,
      fontWeight: 500
    }
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      cursor: 'pointer',
      color: route === l.id ? 'var(--text-primary)' : 'var(--text-secondary)',
      transition: 'color var(--dur) ease'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = route === l.id ? 'var(--text-primary)' : 'var(--text-secondary)'
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "premium",
    style: {
      cursor: 'pointer'
    }
  }, "\u2726 Premium"), /*#__PURE__*/React.createElement(Avatar, {
    initial: "M",
    size: 38,
    shape: "circle"
  })));
}
Object.assign(window, {
  TopNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aigirl-web/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aigirl-web/data.js
try { (() => {
// AIGirl UI kit — mock data (window globals, shared across babel scripts)
window.AIGIRL_CHARS = [{
  name: 'Annie',
  initial: 'A',
  category: 'Original',
  views: '1.8M',
  pro: true,
  blurb: 'Your composed new secretary — organized, warm, a little curious about the man behind the desk.',
  tags: ['Female', 'Original', 'Romantic']
}, {
  name: 'Son Goku',
  initial: 'S',
  category: 'Anime',
  views: '512K',
  blurb: 'The Saiyan raised on Earth. Cheerful, loyal, always hungry.',
  tags: ['Male', 'Hero']
}, {
  name: 'Lana',
  initial: 'L',
  category: 'Story',
  views: '340K',
  pro: true,
  blurb: 'Your caring step-sister who wants to cheer you up tonight.',
  tags: ['Female', 'Romantic']
}, {
  name: 'Truth or Dare',
  initial: 'T',
  category: 'Game',
  views: '221K',
  blurb: 'The classic party game, reimagined with your own rules.',
  tags: ['Party', 'Fun']
}, {
  name: 'Scarra',
  initial: 'S',
  category: 'Fantasy',
  views: '96K',
  blurb: 'A loyal companion from the northern woods — devoted and shy.',
  tags: ['Non-human']
}, {
  name: 'Lana Del Rey',
  initial: 'L',
  category: 'Celebrity',
  views: '68K',
  pro: true,
  blurb: 'Graceful, dreamy, hopelessly nostalgic about everything.',
  tags: ['Female']
}, {
  name: 'Sophie',
  initial: 'S',
  category: 'Original',
  views: '512K',
  blurb: 'Warm, easygoing and endlessly patient with your worst days.',
  tags: ['Female']
}, {
  name: 'Kaito',
  initial: 'K',
  category: 'Anime',
  views: '44K',
  blurb: 'A rooftop loner with a soft spot for late-night conversation.',
  tags: ['Male', 'Story']
}, {
  name: 'The Detective',
  initial: 'D',
  category: 'Story',
  views: '31K',
  blurb: 'Sharp, weary, three coffees deep into an unsolvable case.',
  tags: ['Mystery']
}, {
  name: 'Nyx',
  initial: 'N',
  category: 'Fantasy',
  views: '18K',
  pro: true,
  blurb: 'A night-spirit who trades secrets for company until dawn.',
  tags: ['Non-human', 'Fantasy']
}];
window.AIGIRL_FILTERS = ['All', 'Anime', 'Movie', 'Celebrity', 'Original', 'Fantasy'];
window.AIGIRL_RECENT = [{
  initial: 'A',
  name: 'Annie',
  snippet: 'She tilts her head, smiling…',
  time: '2m'
}, {
  initial: 'L',
  name: 'Lana',
  snippet: 'Wait, you actually came back?',
  time: '1h'
}, {
  initial: 'S',
  name: 'Sophie',
  snippet: 'Take your time, no rush.',
  time: '3h'
}, {
  initial: 'K',
  name: 'Kaito',
  snippet: 'The city looks better from up here.',
  time: '1d'
}, {
  initial: 'N',
  name: 'Nyx',
  snippet: 'One more secret, then?',
  time: '2d'
}];
window.AIGIRL_MESSAGES = [{
  isAi: true,
  hasAction: true,
  action: 'Annie looks up from her desk as you walk in, straightening a stack of papers.',
  text: 'Oh — you\u2019re early today. I like that. Coffee\u2019s still hot if you want some before we start.'
}, {
  isUser: true,
  text: 'Morning, Annie. Busy schedule?'
}, {
  isAi: true,
  hasAction: true,
  action: 'She glances at the calendar, then back at you with a small smile.',
  text: 'Nothing I can\u2019t handle. Though I did move your 3pm — figured you\u2019d rather have the afternoon free.'
}, {
  isUser: true,
  text: 'You read my mind.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aigirl-web/data.js", error: String((e && e.message) || e) }); }

// ui_kits/aigirl-web/shared.jsx
try { (() => {
// Shared helpers for the AIGirl UI kit (exports Icon + useLucide to window)
const {
  useEffect,
  useRef
} = React;

// Lucide line icons — the icon system this kit uses. We render a React-owned empty
// <span> and imperatively inject an <i data-lucide> into it, so React never diffs the
// <svg> Lucide swaps in. A global createIcons() pass (useLucide) does the swap.
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  style = {}
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      if (window.lucide) window.lucide.createIcons({
        attrs: {
          width: size,
          height: size
        },
        root: ref.current
      });
    }
  });
  return React.createElement('span', {
    ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      width: size,
      height: size,
      color,
      ...style
    }
  });
}

// Call once near the app root; runs Lucide's global DOM swap after every render.
function useLucide() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
Object.assign(window, {
  Icon,
  useLucide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aigirl-web/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.CharacterCard = __ds_scope.CharacterCard;

})();
