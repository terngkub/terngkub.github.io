"use strict";var precacheConfig=[["/index.html","0f827d9dfb31e6ed92554662f611b1af"],["/static/css/main.09030d41.css","1b4ee636a8052e032135ffcf10d5a349"],["/static/js/main.6b38f021.js","b3675fa9c592b95b48b063e669011162"],["/static/media/blogen_admin_ui.0f3df0ac.png","0f3df0ac2a6d6e2a19ce358a50140280"],["/static/media/booklist_redux.92326856.png","923268562dec1f0f3951801afcda2aef"],["/static/media/candy_matching_game.30597b48.png","30597b48280048c2352df463e45a82ab"],["/static/media/farm_animals_toddlers.2bf0a80d.png","2bf0a80da1a390bccf348163ce434103"],["/static/media/header-background.8548df37.jpg","8548df379ebd8b56fbf208618a821cd3"],["/static/media/looplab_social_theme.179ac994.png","179ac994f5b61268134f6b254e0002f7"],["/static/media/mizuxe_book_theme.23f03199.png","23f031997ceb63b5344936001d185ec0"],["/static/media/platformer_monster_kong.182be5c8.png","182be5c8b4755761a9f1a5458c46976a"],["/static/media/racing.d41eefbd.png","d41eefbd62ec64199d4e655f35ef19b7"],["/static/media/redbull_gamejam.f6eb08eb.png","f6eb08eba81a26deb155b11be81d89cb"],["/static/media/spaceship_game.b7a7c97f.png","b7a7c97f1c40a16c6e9660edcbcecfeb"],["/static/media/tictactoe_reactjs.c12e88fb.png","c12e88fb0b77dce247e79ff9b4b4f4ce"],["/static/media/virtual_pet.26d760c7.png","26d760c79a47d72b8f6203c64b05d9c2"],["/static/media/weather_forecast_reactjs.4f3a5111.png","4f3a511142029ac54d41850b9c252546"],["/static/media/youtube_page_reactjs.e782bf0b.png","e782bf0b290d152b57aaf9a49326be99"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});