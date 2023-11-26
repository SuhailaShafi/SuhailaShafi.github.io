'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d5e642e7a9416d17d98699307da9ce2a",
"assets/AssetManifest.json": "abfeb130a8145c6d5831cb631a9e2f39",
"assets/assets/images/avatar1.png": "c748588c07aac1c6c708aa2cd3876a64",
"assets/assets/images/avatar10.png": "4ba56ad424718f78565cf37645dd0fdd",
"assets/assets/images/avatar11.png": "651478a823b938245cb995ca11a7a135",
"assets/assets/images/avatar12.png": "fc5b4d9a38bf24e1d701733b29aa44a9",
"assets/assets/images/avatar2.png": "634bde3a361e6828763cbf35ac6d1cda",
"assets/assets/images/avatar3.png": "c972f57805bba4ff6786dbdf8e6d022d",
"assets/assets/images/avatar4.png": "f4c43673b6ad5edf3574ef374159013d",
"assets/assets/images/avatar5.png": "2bfb43e9f78bf019a2e1e71fd64aa5c1",
"assets/assets/images/avatar6.png": "50d9edcc2c775e8bd454d7fe313c805c",
"assets/assets/images/avatar7.png": "84c7d46114e575a02cdbb98b5df55cfe",
"assets/assets/images/avatar8.png": "01d6082caa00ff8252236bea105c1c2e",
"assets/assets/images/avatar9.png": "4cd8e4c627589a7b12bef547e8ad03cc",
"assets/assets/images/bann.png": "953accac58379e2db2c11f93a6217b68",
"assets/assets/images/ic_launcher.png": "521bf13abebcad84bb2f57b9fd318fa9",
"assets/assets/images/lasback.jpg": "a2dbdf383fac0ef092ec7197421399d0",
"assets/assets/images/person.jpeg": "099a33c01a3a9ffe5179d30f86c38418",
"assets/assets/images/scrnshot_addcat.png": "9b8ad24f6433a15fb4a40dd635db3d45",
"assets/assets/images/scrnshot_add_trans.png": "5ade201cd651a45f7cb7674af08c3b68",
"assets/assets/images/scrnshot_category.png": "ae6ae9a1c8a586ca6c19b85cf6ce6140",
"assets/assets/images/scrnshot_daterange.png": "96a2173d0eb6abc9be703ff0bf990399",
"assets/assets/images/scrnshot_edittrans.png": "b4cf5e32e78e2fd4e1b2659b1e3bdf4b",
"assets/assets/images/scrnshot_month.png": "ec68d47fcbc4be059f261931c377640f",
"assets/assets/images/scrnshot_nav.png": "3b034ee09ced9b97b0f615270ce2ea73",
"assets/assets/images/scrnshot_pie.png": "c0b9ab927f1cf42c17a71d3d48d89e03",
"assets/assets/images/scrnshot_seall.png": "8a740d212589c0cce2a3bc5de9f0ab18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "694717e775677e77f2e3652cd72cedb2",
"assets/NOTICES": "687b1043eb296adba45d2df033383fbd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "288bbbb30f2fc581592282bb9b01e1c3",
"/": "288bbbb30f2fc581592282bb9b01e1c3",
"main.dart.js": "133ab22cf8922a24fc906becb2b8f3d3",
"manifest.json": "2f2c46a65c9a7927fa6d19f56daa3c45",
"version.json": "5a7e69e5e5a1bca6f16b2e325e2c60e2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
