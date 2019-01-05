/* eslint-disable */
const CACHE_NAME = 'js-cache';
const offlinePageURL = "/public/offline.html"

/**
 * Installing the service worker.  Fetching the list of hashed resources from assets.json
 * on event installation.  That way our cache remains fresh.
 */
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(async cache => {
			// Reading assets to be cached from assets.json file
			const response = await fetch('build/assets.json');
			const res = await response.json();
			let filesToBeCached = [];
			if (res) {
				const resKeys = Object.keys(res).filter(Boolean);
				filesToBeCached = resKeys.map(keys => res[keys].js);
			}
			// Add offline page to cache
			filesToBeCached.push(offlinePageURL)
			return cache.addAll(filesToBeCached);
		})
	);
});

/**
 * Handling fetch requests
 */

self.addEventListener('fetch', event => {
	event.respondWith(
		/**
		 * Matching if requested resource is in cache
		 * If yes, then serve it otherwise make a network request.
		 */
		caches.match(event.request, { ignoreSearch: true }).then(response => {
			if (response) {
				return response;
			}

			/**
			 * Not found in cache, making network request
			 */
			const fetchRequest = event.request.clone();
			return fetch(fetchRequest).then(response => {
				// Checking if its not a opaque response
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}
				/**
				 * Not found in cache, making network request
				 * Clone the response stream.  Stream can be consumed once.
				 * Hence by cloning it, we send one copy back to browser and another copy to cache.
				 */
				const responseClone = response.clone();
				caches.open(CACHE_NAME).then(cache => {
					// Storing the response of network request in cache
					cache.put(event.request, responseClone);
				});
				return response;
			})
		}).catch(error => {
			return caches.match(offlinePageURL)
		})
	);
});

function activate(event) {
	const cacheWhiteList = [CACHE_NAME]
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					if(cacheWhiteList.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
	
}
/**
 * Delete old caches when new service worker activates.
 */
self.addEventListener('activate', activate);
