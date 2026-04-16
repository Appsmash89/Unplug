const CACHE_NAME = 'unplug-pwa-cache-v1';
const urlsToCache = [
  '/Unplug/',
  '/Unplug/index.html',
  '/Unplug/manifest.json',
  '/Unplug/icon-192.svg',
  '/Unplug/icon-512.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
