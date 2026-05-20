const CACHE = 'sooraj-v4';
const FILES = ['/Sooraj-Accounts/', '/Sooraj-Accounts/index.html', '/Sooraj-Accounts/icon.png'];

self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => { e.waitUntil(clients.claim().then(() => caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))))); });
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
