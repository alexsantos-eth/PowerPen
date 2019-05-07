const CACHE_NAME = "v1_cache";
const urlsToCache=[
  "./",
  "./css/style.css",
  "./js/main.js", 
  "./img/icon.png", 
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js", 
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css", 
  "https://cdn.jsdelivr.net/gh/blobysoftware/GeckoJs/gecko.min.js"
]

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(caches => {
        return caches.addAll(urlsToacache)
          .then(() => self.skipWaiting)
      })
      .catch(err => console.log(err))
  )
})

self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]
  
  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          return res
        }
        return fetch(e.request)
      })
  )
})
