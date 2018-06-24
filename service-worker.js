/* eslint-disable */
const CACHE_NAME = 'js-cache';

/**
 * Installing the service worker.  Fetching the list of hashed resources from assets.json
 * on event installation.  That way our cache remains fresh.
 */
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			console.log('opened cache 😎');
			// Reading assets to be cached from assets.json file
			return fetch('build/assets.json')
				.then(response => {
					return response.json();
				})
				.then(res => {
					if (res) {
						const resKeys = Object.keys(res).filter(Boolean);
						return resKeys.map(keys => res[keys].js);
					}
					return [];
				})
				.then(filesToBeCached => {
					return cache.addAll(filesToBeCached);
				});
		})
	);
});

/**
 * Handling fetch requests
 */

self.addEventListener('fetch', event => {
	event.respondWith(
		// Matching if requested resource is in cache
		// If yes, then serve it otherwise make a network request.
		caches.match(event.request, { ignoreSearch: true }).then(response => {
			if (response) {
				return response;
			}

			console.log('Not found in cache 😱', event.request);
			const fetchRequest = event.request.clone();
			return fetch(fetchRequest).then(response => {
				// Checking if its not a opaque response
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}
				// Not found in cache, making network request
				console.log('caching response from network 🤓', event.request);
				// Clone the response stream.  Stream can be consumed once.
				// Hence by cloning it, we send one copy back to browser
				// and another copy to cache.
				const responseClone = response.clone();
				caches.open(CACHE_NAME).then(cache => {
					// Storing the response of network request in cache
					cache.put(event.request, responseClone);
				});
				return response;
			});
		})
	);
});

/**
 * Delete old caches when new service worker activates.
 */
self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					return caches.delete(cacheName);
				})
			);
		})
	);
});
