const V='sakandire-v1';
const FILES=['./','index.html','style.css','icon.svg','manifest.webmanifest','js/app.js','js/lab.js','js/ref.js','js/exam.js','data/maps.js','data/elements.js',
...['physics','chemistry','biology','maths','english','economics'].flatMap(s=>['data/books-'+s+'.js','data/q-'+s+'.js']),'data/q-grad.js','data/courses.js','js/careers.js','data/institutions.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&new URL(e.request.url).origin===location.origin){const cl=res.clone();caches.open(V).then(c=>c.put(e.request,cl))}return res})).catch(()=>caches.match('index.html')))});
