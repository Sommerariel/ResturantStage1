/* service worker script */

//declare caches

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

//get from the cache if possible, if not check the network
/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      //if you have a match in the cache you are returning it
      if(!response || response.status !== 200 || response.type !== 'basic'){
        return response;
      }

    })
  )
})*/
