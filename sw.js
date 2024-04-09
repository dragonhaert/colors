var GHPATH = '/colors';

var APP_PREFIX = 'colors_';

var VERSION = 'version_00';

var URLS = [
    `${GHPATH}/`,
    `${GHPATH}/index.html`,
    `${GHPATH}/js/script.js`,
    `${GHPATH}/css/styles.css`,
    `${GHPATH}/manifest.json`,
    `${GHPATH}/icons/manifest-icon-192.maskable.png`,
    `${GHPATH}/icons/manifest-icon-512.maskable.png`
]

var CACHE_NAME = APP_PREFIX + VERSION;
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing Service Worker:', event);
    // event.waitUntil(self.skipWaiting());
    event.waitUntil(
        caches.open(CACHE_NAME).then( cache => {
            console.log('[Service Worker] Caching:',CACHE_NAME);
            return cache.addAll(URLS)
        })
    )
});

self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating Service Worker:', event);
    event.waitUntil(
        caches.keys().then( keyList => {
            var cacheWhitelist = keyList.filter((key) => {key.indexOf(APP_PREFIX)})
            cacheWhitelist.push(CACHE_NAME)
            return Promise.all(keyList.map((key,i) => {
                if (cacheWhitelist.indexOf(key) === -1) {
                    console.log('[Service Worker] Deleting cache:', keyList[i]);
                    return caches.delete(keyList[i]);
                }
            }));
        })
    )

    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    console.log('[Service Worker] Fetching:', event.request.url);

    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
    }

    event.respondWith(
        caches.match(event.request).then( request => {
            if (request) {
                console.log("[Service Worker] Retrieved from cache:", request.url)
                return request
            } else {
                console.log("[Service Worker] File not found in cache. Fetching:", event.request.url)
                return fetch(event.request)
            }
        })
    );
});