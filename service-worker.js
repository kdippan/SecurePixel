const CACHE_NAME = "securepixel-v2";
const OFFLINE_URL = "/offline.html";

const ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/404.html",
  OFFLINE_URL, // Add offline page to cache
  "https://cdn.tailwindcss.com",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js",
  "https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Saira:wght@400;500;600;700&display=swap"
];

// Install Event
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Force the offline page to be cached immediately
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event (With Offline Fallback)
self.addEventListener("fetch", (e) => {
  // Only handle GET requests
  if (e.request.method !== "GET") return;

  e.respondWith(
    caches.match(e.request)
      .then((cachedResponse) => {
        // Return cached response if found, else fetch from network
        return cachedResponse || fetch(e.request)
          .catch(() => {
            // If network fails and request is for an HTML page, show offline.html
            if (e.request.headers.get("accept").includes("text/html")) {
              return caches.match(OFFLINE_URL);
            }
          });
      })
  );
});
