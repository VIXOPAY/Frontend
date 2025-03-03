// /// <reference lib="webworker" />

// declare const self: ServiceWorkerGlobalScope

// const CACHE_NAME = "vixopay-cache-v1"

// // Assets to cache
// const PRECACHE_ASSETS = [
//   "/",
//   "/manifest.json",
//   "/icons/icon-192x192.png",
//   "/icons/icon-512x512.png",
//   "/app-store-badge.png",
//   "/google-play-badge.png",
// ]

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(PRECACHE_ASSETS)
//     }),
//   )
// })

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName)),
//       )
//     }),
//   )
// })

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then((response) => {
//         // Return cached version or fetch new version
//         return (
//           response ||
//           fetch(event.request).then((response) => {
//             // Cache new responses for offline access
//             if (response.status === 200) {
//               const responseClone = response.clone()
//               caches.open(CACHE_NAME).then((cache) => {
//                 cache.put(event.request, responseClone)
//               })
//             }
//             return response
//           })
//         )
//       })
//       .catch(() => {
//         // Return offline fallback if both cache and network fail
//         if (event.request.mode === "navigate") {
//           return caches.match("/offline.html")
//         }
//       }),
//   )
// })

// // Handle push notifications
// self.addEventListener("push", (event) => {
//   const options = {
//     body: event.data?.text() ?? "New notification from VIXOPAY",
//     icon: "/icons/icon-192x192.png",
//     badge: "/icons/badge-72x72.png",
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: "1",
//     },
//     actions: [
//       {
//         action: "explore",
//         title: "View Details",
//       },
//       {
//         action: "close",
//         title: "Close",
//       },
//     ],
//   }

//   event.waitUntil(self.registration.showNotification("VIXOPAY", options))
// })

// // Handle notification clicks
// self.addEventListener("notificationclick", (event) => {
//   event.notification.close()

//   if (event.action === "explore") {
//     // Handle view details action
//     event.waitUntil(clients.openWindow("/"))
//   }
// })

// export {}

