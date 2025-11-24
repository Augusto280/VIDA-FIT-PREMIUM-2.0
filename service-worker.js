const CACHE_NAME = 'vida-fit-premium-v1';
const urlsToCache = [
  '/',
  '/VIDA-FIT-PREMIUM-2.0/',
  '/VIDA-FIT-PREMIUM-2.0/index.html',
  '/VIDA-FIT-PREMIUM-2.0/manifest.json',
  '/VIDA-FIT-PREMIUM-2.0/icons/icon-192x192.png',
  '/VIDA-FIT-PREMIUM-2.0/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
