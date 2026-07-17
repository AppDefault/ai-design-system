// AIGirl UI kit — mock data (window globals, shared across babel scripts)
window.AIGIRL_CHARS = [
  { name: 'Annie', initial: 'A', category: 'Original', views: '1.8M', pro: true,
    blurb: 'Your composed new secretary — organized, warm, a little curious about the man behind the desk.',
    tags: ['Female', 'Original', 'Romantic'] },
  { name: 'Son Goku', initial: 'S', category: 'Anime', views: '512K',
    blurb: 'The Saiyan raised on Earth. Cheerful, loyal, always hungry.', tags: ['Male', 'Hero'] },
  { name: 'Lana', initial: 'L', category: 'Story', views: '340K', pro: true,
    blurb: 'Your caring step-sister who wants to cheer you up tonight.', tags: ['Female', 'Romantic'] },
  { name: 'Truth or Dare', initial: 'T', category: 'Game', views: '221K',
    blurb: 'The classic party game, reimagined with your own rules.', tags: ['Party', 'Fun'] },
  { name: 'Scarra', initial: 'S', category: 'Fantasy', views: '96K',
    blurb: 'A loyal companion from the northern woods — devoted and shy.', tags: ['Non-human'] },
  { name: 'Lana Del Rey', initial: 'L', category: 'Celebrity', views: '68K', pro: true,
    blurb: 'Graceful, dreamy, hopelessly nostalgic about everything.', tags: ['Female'] },
  { name: 'Sophie', initial: 'S', category: 'Original', views: '512K',
    blurb: 'Warm, easygoing and endlessly patient with your worst days.', tags: ['Female'] },
  { name: 'Kaito', initial: 'K', category: 'Anime', views: '44K',
    blurb: 'A rooftop loner with a soft spot for late-night conversation.', tags: ['Male', 'Story'] },
  { name: 'The Detective', initial: 'D', category: 'Story', views: '31K',
    blurb: 'Sharp, weary, three coffees deep into an unsolvable case.', tags: ['Mystery'] },
  { name: 'Nyx', initial: 'N', category: 'Fantasy', views: '18K', pro: true,
    blurb: 'A night-spirit who trades secrets for company until dawn.', tags: ['Non-human', 'Fantasy'] },
];

window.AIGIRL_FILTERS = ['All', 'Anime', 'Movie', 'Celebrity', 'Original', 'Fantasy'];

window.AIGIRL_RECENT = [
  { initial: 'A', name: 'Annie', snippet: 'She tilts her head, smiling…', time: '2m' },
  { initial: 'L', name: 'Lana', snippet: 'Wait, you actually came back?', time: '1h' },
  { initial: 'S', name: 'Sophie', snippet: 'Take your time, no rush.', time: '3h' },
  { initial: 'K', name: 'Kaito', snippet: 'The city looks better from up here.', time: '1d' },
  { initial: 'N', name: 'Nyx', snippet: 'One more secret, then?', time: '2d' },
];

window.AIGIRL_MESSAGES = [
  { isAi: true, hasAction: true, action: 'Annie looks up from her desk as you walk in, straightening a stack of papers.',
    text: 'Oh — you\u2019re early today. I like that. Coffee\u2019s still hot if you want some before we start.' },
  { isUser: true, text: 'Morning, Annie. Busy schedule?' },
  { isAi: true, hasAction: true, action: 'She glances at the calendar, then back at you with a small smile.',
    text: 'Nothing I can\u2019t handle. Though I did move your 3pm — figured you\u2019d rather have the afternoon free.' },
  { isUser: true, text: 'You read my mind.' },
];
