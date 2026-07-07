/* Kill-switch service worker.
   The previous PetTwin app registered a caching service worker at this path.
   PetPersona ships no offline cache; this worker unregisters any old one and
   clears its caches so returning visitors always get the current app. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    } catch (e) { /* ignore */ }
    try { await self.registration.unregister(); } catch (e) { /* ignore */ }
    /* No client.navigate() here: the page re-registers this worker on each load,
       so navigating on activate would create a reload loop. Fresh content is
       served on the visitor's next natural navigation. */
  })());
});
