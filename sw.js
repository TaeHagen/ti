if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>s(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-b049dfa0.css",revision:null},{url:"assets/index-efc356e4.js",revision:null},{url:"cemu-sdl.js",revision:"9b86b2d9056ec825cb0d6abf1998ff3d"},{url:"index.html",revision:"04db6066e5805989570d0d2812745073"},{url:"registerSW.js",revision:"b3bc8a55be520acd83a9a193a8df49ca"},{url:"icons/pwa-192x192.png",revision:"fdce2067185112492acf852204365daf"},{url:"icons/pwa-512x512.png",revision:"e71bf5e17752ebc0d21f1e6897156d28"},{url:"manifest.webmanifest",revision:"aaa9ddda78e2e8699c01b084d42bfecb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
