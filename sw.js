// Tatra Hut Trek service worker: keeps the app working with no signal.
// When you change any file, bump VERSION so phones pick up the update.
const VERSION = "tatra-app-v1";
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png",
  "./fonts/barlow-condensed-latin-500-normal.woff2",
  "./fonts/barlow-condensed-latin-600-normal.woff2",
  "./fonts/barlow-condensed-latin-700-normal.woff2",
  "./fonts/barlow-condensed-latin-ext-500-normal.woff2",
  "./fonts/barlow-condensed-latin-ext-600-normal.woff2",
  "./fonts/barlow-condensed-latin-ext-700-normal.woff2",
  "./fonts/barlow-latin-400-normal.woff2",
  "./fonts/barlow-latin-500-normal.woff2",
  "./fonts/barlow-latin-600-normal.woff2",
  "./fonts/barlow-latin-700-normal.woff2",
  "./fonts/barlow-latin-ext-400-normal.woff2",
  "./fonts/barlow-latin-ext-500-normal.woff2",
  "./fonts/barlow-latin-ext-600-normal.woff2",
  "./fonts/barlow-latin-ext-700-normal.woff2",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      // keep the current app files and the downloaded map tiles
      keys.filter(k => k !== VERSION && !k.startsWith("tatra-tiles")).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// App files: answer from the cache straight away (works offline),
// then refresh the cache in the background when there is signal.
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return; // map tiles are handled by the page
  e.respondWith(
    caches.open(VERSION).then(async cache => {
      const key = req.mode === "navigate" ? "./index.html" : req;
      const cached = await cache.match(key, { ignoreSearch: req.mode === "navigate" });
      const network = fetch(req).then(res => {
        if (res.ok) cache.put(key, res.clone());
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
