/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="webworker" />

declare let self: ServiceWorkerGlobalScope;

import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files, // everything in 'static'
	'/'
];

// install service worker
self.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

// activate service worker
self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

// listen to fetch events
self.addEventListener('fetch', (event) => {
	// Ignore any requests that are not GET
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const cachedResponse = await cache.match(url.pathname);

			if (cachedResponse) {
				return cachedResponse;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);
			const isNotExtension = url.protocol === 'http:';
			const isSuccess = response.status === 200;

			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (isNotExtension && isSuccess) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			// fall back to cache
			const cachedResponse = await cache.match(url.pathname);
			if (cachedResponse) {
				return cachedResponse;
			}

			return new Response(
				`
				<!DOCTYPE html>
				<html>
				<head>
					<style>
						* {
							margin: 0;
							padding: 0;
							color: #FFFFFF;
							user-select: none;
						}
						body {
							background-color: #000080;
							padding-top: 2rem;
						}
						.container {
							height: 100%;
							display: grid;
							grid-template-columns: 1fr;
							grid-template-rows: repeat(auto-fill, min-content);
							justify-items: center;
							row-gap: 1rem;
						}
						.headings {
							display: grid;
							grid-template-columns: 1fr;
							grid-template-rows: repeat(3, min-content);
							justify-items: center;
							align-items: center;
							row-gap: 0.5rem;
						}
					</style>
				</head>
				<body>
					<div class="container">
						<div class="headings">
							<h1>SUIT YOURSELF</h1>
							<h2>The Calisthenics Workout App</h2>
							<h4>Based-off Playing Cards</h4>
						</div>
						<h3>
							Oops! No network connection!
						</h3>
						<ol>
							<li>
								Connect to a network!
							</li>
							<li>
								Reload the app!
							</li>
						</ol>
						<p>The app will be available offline after being launched from a network connection</p>
					</div>
				</body>
				</html>
				`,
				{
					status: 404,
					statusText: 'You appear to be offline',
					headers: new Headers({
						'Content-Type': 'text/html'
					})
				}
			);
		}
	}

	event.respondWith(respond());
});

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});
