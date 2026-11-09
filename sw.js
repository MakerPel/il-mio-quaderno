// Il mio quaderno: funziona anche senza rete dopo la prima apertura.
const CACHE = 'qm-v17';
const FILES = ['./', './index.html', './matematica/', './matematica/index.html', './italiano/', './italiano/index.html', './inglese/', './inglese/index.html', './francese/', './francese/index.html', './tedesco/', './tedesco/index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return; // Supabase e font: sempre dalla rete
  // pagine e file dell'app: chiedi sempre la versione aggiornata (niente cache HTTP di 10 minuti)
  const req = (e.request.mode === 'navigate' || /\.(html|js|webmanifest)$|\/$/.test(u.pathname)) ? new Request(e.request, { cache: 'no-cache' }) : e.request;
  e.respondWith(
    fetch(req)
      .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
