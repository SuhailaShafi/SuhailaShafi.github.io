'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b76dbbb6b1212c86c369bf43c98bf9f6",
".git/config": "34a1f61f76cccf9e4b309a1ad686cec8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ef4398e40fd1d7ab3fe39715c5210996",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9039dce4a76eef55d866dcfd48f698cb",
".git/logs/refs/heads/main": "2527f22291ec58d8980c6773e377e48d",
".git/logs/refs/remotes/origin/main": "9a3b41548ba8414c6260b1631c5c1a9e",
".git/objects/0b/29fa2ccd132e0e7ecfd4db3fbf6f122019e922": "48f0b64a9e794dfef3ff4d65a5a16f82",
".git/objects/18/9e871c21026a9477a5585fd707490c3a2948bc": "1cae61bcfe693390ec69194ed291b092",
".git/objects/22/40aca3e768fc08ed1bcab7f56fb880be76cc1a": "4f5dab9be142195ec2c092033e414b8b",
".git/objects/24/927177f9bfe2f7fed27456862b09c7da89029b": "72f99fab867afe2d067ed50c17ce4dc7",
".git/objects/2c/a092043463b540a4ef6c4b65529e35fdb768da": "d26118906080d23fed4696e6dcd73a2c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/f2be15a29eaf7742a3f662291d1ab4f32cb5de": "b363057686e6985a2337930d6b19f564",
".git/objects/3c/297a28f7d7a81569a9b32bd5331fde965fccbe": "513d615a47aa1632672c5e0f66af41e7",
".git/objects/41/2064fd73eb58c8d378f5cc9c941b278a505722": "144a3f1ceb8a383f7bba43ba9424ee30",
".git/objects/41/8ba48a73a5cef6f13196e811fb1f328388c8e2": "1b66c957cb9056e6ccb9af3d7e6cdda5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/1394b371e3e0da0b02aab2432cbc9c48c249a6": "a3502cae8bbdf55d6aa2d425490cfe2f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/12abcb3401c5fc1d95178cb7b770819a5dc336": "d328a1fab1f9dd50f7aa08363dd945b5",
".git/objects/58/82094cb14c1630afe585b80befab4ae25f85cf": "bf5a76a8ba3812097fcd510d251275ea",
".git/objects/60/07bb266492434111dbc7c4cbe0b9b92d3ddd43": "dc5d845d8266d608e7548780f1d27384",
".git/objects/64/8753e42e5eb66287839cda26606ec4b0c0b38a": "473dfebd891fc01dac06ee615ca208ee",
".git/objects/71/6006dcaffd8d645ade334b55d24c235cd3f680": "217f664f1a3a3497dc9a85e5d462bf92",
".git/objects/7b/50b8527e5b613125bd569396ff099fc694311e": "f107641af49b37ede2139c044d5b5e95",
".git/objects/7f/0b817725ee8f1ea046686c131f326b066f923d": "cb7b87e6c7c1865256f639a05d750d7d",
".git/objects/85/682068e1b45dae1d66cd5368bc744a525721b4": "c2f2d58eb5e65226633c100d06e2824a",
".git/objects/85/a971e0f26fd20a7112c62c9a540e31aa0f27d3": "96daa4229acab2af66a4e9f3ac06fb93",
".git/objects/85/e45c61b182315ada0f3412c390b4404cfd45d5": "3be83d1dc088a173cff2375e1f280896",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b6b1dba3d6c2c097d723ac67b137de33f0ec82": "44c72e6bad2d9c762a0c56a213a6a6c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/21a8f15d7e39c754728a9faa685c9ec9293d7c": "4a4dacb9de65c8221c738f87e825ee9d",
".git/objects/8e/90ce5dd961d0a802aa3efa9c2d15aa1d01f50b": "6454ebc34c9efb8b9b7e0ae8015eb2d6",
".git/objects/94/e44d056bfc358204f431350f42f62310885252": "975b09ec7ffc4eba2048d550852b4702",
".git/objects/97/15c62dd01dbf1a2a82dc809795f22ab50d5358": "2e579523248d9fd661e3199e52e76b9f",
".git/objects/98/8b4592d6f63b16650bc6f7c6bc8c3d653e98e3": "8cab1d8b445c8e7f438c53f2ac0b1198",
".git/objects/9c/226fd12f68738807e0cb278e89de477d192877": "26c9f5cce9be44216e902c9d3941745e",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a3/9d7bb75219020462846bd8c6b7c2d4b82275c9": "2f12a00c342f6c63536d6d74aafb0c88",
".git/objects/ab/fe311eee2d15c0d4bbbd3d5b07c47226b79c56": "b083e3b14ee6be9f29f113342708f849",
".git/objects/ac/187f227ccfb3ccad923b2f3cfaf4411297f532": "4abf7603d7335e04b47e531177e8ff0c",
".git/objects/ae/c935643abd17a033ec86be7a75c78b0f53dd6f": "299bd75cc31c4a33309db9631bba1484",
".git/objects/af/09d9ad0e00871105a07c90d96d4782e590ba9c": "103be7d7f7c57b0a37fbb66cb791fe3e",
".git/objects/b3/f3471cc9de6ce2df70a8273b067843e10dfe2c": "a4321c5605e60ae56c27159877e12f66",
".git/objects/b5/95984ad5905bb15208762d7ba064265389adfa": "aaaad76fb8028083c0379b2b93465ed8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/ca2d9aa3bd922185f47b2406d29578eb716726": "49446a43c0245b247c504e934172f1a7",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/cb/bdaac2413abfd04d244064c65757999247db59": "37f78c9bb534ece4bad896f47a3b7049",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dd/fba3e59b6264bb334ba4985ef428c4d501e8da": "9d5cff362b3742faa7ef26fb789ac930",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/235e1c0f910849407e15926a25a62d367051eb": "6ff601cbc2eb3b502abf095c4f63d844",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/89163e118fb8fd4d84cbb7af7eae3779cf4305": "56f076d3957ed7b126923814f925f2f2",
".git/objects/e8/636aeaba5baf44fe416f8d0e247d5f7d4d425f": "93de18693da349ba5abeb2ca77c1f89a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/3d16ac7ed08bde9a5b56aba887a0eb94621540": "354c2431287ccc961b4374ea29e251d8",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "bb15009f9fafb245b40b019d23001342",
".git/refs/remotes/origin/main": "bb15009f9fafb245b40b019d23001342",
"assets/AssetManifest.bin": "61fa1d264d35d0ba819e921048629da5",
"assets/AssetManifest.json": "ecff693ca345f29f3717b51311b4ef10",
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
"assets/assets/images/money_symbol.jpg": "5dbe6596e0e1221f8b62d40061eee966",
"assets/assets/images/person.jpeg": "099a33c01a3a9ffe5179d30f86c38418",
"assets/assets/images/scrnshot_addcat.png": "7fcf20f14ccee0d19269d574565917e6",
"assets/assets/images/scrnshot_add_trans.png": "e999c58d459a3d809a3c12a176613ad6",
"assets/assets/images/scrnshot_category.png": "0b7e2eae8a125470a182dd99f3f0e3b7",
"assets/assets/images/scrnshot_catlist.png": "ef790c32b960423d77031802ca207982",
"assets/assets/images/scrnshot_daterange.png": "96a2173d0eb6abc9be703ff0bf990399",
"assets/assets/images/scrnshot_edittrans.png": "67b3cd4274090f768710fb5451701f0c",
"assets/assets/images/scrnshot_month.png": "ec68d47fcbc4be059f261931c377640f",
"assets/assets/images/scrnshot_pie.png": "2ae3325ecf683e874ffeff11923c537e",
"assets/assets/images/scrnshot_seall.png": "05197b4c459d70abc9032910badf3fca",
"assets/assets/images/scrn_profile.png": "1d3f539f067e5d3d25de306ce3d7dc61",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "74664ac1add0ae4e5ea9d5b0b0e8536d",
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
"index.html": "2f8b1427a370979704458aa2041993f7",
"/": "2f8b1427a370979704458aa2041993f7",
"main.dart.js": "b5259eee4c06d26b0ce0df5943f2cd8a",
"manifest.json": "2f2c46a65c9a7927fa6d19f56daa3c45",
"version.json": "4808f0a0d124f237a59a4445367ce212"};
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
