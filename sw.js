const CACHE_NAME = 'stripdb-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './icon.png',
  './manifest.json'
];

// Menginstal Service Worker dan melakukan caching
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Mengambil aset dari cache jika offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
