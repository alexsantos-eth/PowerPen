const CACHE_NAME = "v1_cache";
const urlsToCache=[
  "./",
  "./css/style.css",
  "./js/main.js", 
  "./img/icon.png", 
  "./img/logoP.png",
  "./img/classroom2.jpg",
  "./img/user2.jpg", 
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js", 
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css", 
  "https://fonts.googleapis.com/icon?family=Material+Icons", 
  "https://fonts.googleapis.com/css?family=Poppins", 
  "https://cdn.jsdelivr.net/npm/vue"
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
