// Shared helpers for the AIGirl UI kit (exports Icon + useLucide to window)
const { useEffect, useRef } = React;

// Lucide line icons — the icon system this kit uses. We render a React-owned empty
// <span> and imperatively inject an <i data-lucide> into it, so React never diffs the
// <svg> Lucide swaps in. A global createIcons() pass (useLucide) does the swap.
function Icon({ name, size = 18, color = 'currentColor', style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      if (window.lucide) window.lucide.createIcons({ attrs: { width: size, height: size }, root: ref.current });
    }
  });
  return React.createElement('span', {
    ref,
    style: { display: 'inline-flex', alignItems: 'center', width: size, height: size, color, ...style },
  });
}

// Call once near the app root; runs Lucide's global DOM swap after every render.
function useLucide() {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

Object.assign(window, { Icon, useLucide });
