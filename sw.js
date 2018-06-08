/* service worker script */

//declare caches

const  Reviews = 'reviews';


//install the service worker and cache files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('reviews').then(function(cache) {
      return cache.addAll(
        [
          '/',
          '/index.html',
          '/restaurant.html',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/js/dbhelper.js'
        ]
      );
    })
  )
})

//get from the cache if possible, if not check the network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      //if you have a match in the cache you are returning it
      if(response) { return response; }

      //clone the request since it cannot be used more than once
      let fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function(response){
        //Check if we are getting a valid response. Basic means that the request is from our origin and third part items are not cached at all.
        if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
          }

      //clone request again
      let responseToCache = response.clone();

      //open the cache and put the items into it
      caches.open('reviews').the(function(cache) {
        cache.put(event.request, responseToCache);
      })
      })
    })
  )
})


self.addEventListener('activate', function(event) {
  console.log('service worker is activating');
  )
})
