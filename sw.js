/* service worker script */

//declare cache
const  Reviews = 'reviews';

//install the service worker and cache files
self.addEventListener('instal', function(event) {
  let filesToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    '/img'
  ]
  event.waitUntil(
    caches.open('reviews').then(function(cache) {
      return cache.addAll(filesToCache);
    })
  )
})
