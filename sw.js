const CACHE = 'sooraj-v9';
const CDN_CACHE = 'sooraj-cdn-v1';
const FILES = ['/Sooraj-Accounts/', '/Sooraj-Accounts/index.html', '/Sooraj-Accounts/icon.png'];
const CDN_HOSTS = ['gstatic.com', 'unpkg.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => { e.waitUntil(clients.claim().then(() => caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== CDN_CACHE).map(k => caches.delete(k)))))); });

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // CDN resources: cache-first, fallback to network and cache for next time
  if (CDN_HOSTS.some(h => url.hostname.endsWith(h))) {
    e.respondWith(
      caches.open(CDN_CACHE).then(c =>
        c.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(res => {
            if (res.ok) c.put(e.request, res.clone());
            return res;
          }).catch(() => cached || new Response('', { status: 503 }));
        })
      )
    );
    return;
  }

  // App files: cache-first, network fallback
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
