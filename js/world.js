/* World atlas: countries (Natural Earth, public domain) + first-level divisions (Natural Earth admin-1), lazy-loaded per country. */
(function(){
const esc=s=>window.esc(s);let W=null;const cache={};
const CONT=['Africa','Asia','Europe','North America','South America','Oceania','Antarctica'];
function box(items){let a=1e9,b=1e9,c=-1e9,d=-1e9;items.forEach(o=>{(o.d.match(/-?[\d.]+,-?[\d.]+/g)||[]).forEach(p=>{const[x,y]=p.split(',').map(Number);a=Math.min(a,x);b=Math.min(b,y);c=Math.max(c,x);d=Math.max(d,y)})});return[a-5,b-5,c-a+10,d-b+10]}
window.World={async route(app,arg){
 app.innerHTML='<p class="loading">Loading world map…</p>';
 if(!W){try{W=await (await fetch('data/world.json')).json()}catch(e){app.innerHTML='<p>Could not load the world map. Connect to the internet once so it can be saved for offline use.</p>';return}}
 const [cont,iso]=(arg||'').split(':');const c=CONT.includes(cont)?cont:'';
 const items=W.items.filter(o=>!c||o.cont===c);const vb=c?box(items).join(' '):`0 0 ${W.w} ${W.h}`;
 app.innerHTML=`<p><a href="#/ref">← Reference</a></p><h1>🗺️ World atlas</h1><p class="muted">${W.items.length} countries and territories. Tap a country for details and its states/provinces/regions.</p>
 <div class="row">${['',...CONT].map(k=>`<a class="btn sm ${k===c?'pri':''}" href="#/ref/world${k?'/'+encodeURIComponent(k):''}">${k||'Whole world'}</a>`).join('')}</div>
 <input id="wq" type="search" placeholder="Find a country…" style="width:100%;margin:8px 0" list="wl"><datalist id="wl">${W.items.map(o=>`<option>${esc(o.name)}</option>`).join('')}</datalist>
 <svg id="wm" viewBox="${vb}" style="width:100%;background:#cfe6f5;border-radius:12px;touch-action:manipulation">${items.map(o=>`<path d="${o.d}" data-id="${o.id}" fill="${{'Africa':'#e9c46a','Asia':'#f4a261','Europe':'#90be6d','North America':'#e76f51','South America':'#43aa8b','Oceania':'#c77dff','Antarctica':'#eee'}[o.cont]||'#ccc'}" stroke="#fff" stroke-width="${c?0.25:0.3}"><title>${esc(o.name)}</title></path>`).join('')}</svg>
 <div id="wi"></div>
 <p class="muted small">Boundaries simplified for speed; disputed borders are shown as in Natural Earth and do not imply endorsement. Source: Natural Earth (public domain).</p>`;
 const show=async id=>{const o=W.items.find(x=>x.id===id);if(!o)return;app.querySelectorAll('#wm path').forEach(p=>p.style.opacity=p.dataset.id===id?1:.55);
  const wi=app.querySelector('#wi');wi.innerHTML=`<div class="card"><h2>${esc(o.name)}</h2><p>${esc(o.cont)} · ${esc(o.sub)}${o.pop?` · population ≈ ${(o.pop/1e6).toFixed(o.pop<1e6?2:1)} million (Natural Earth estimate, c. 2019)`:''}</p><div id="a1"><p class="muted">Loading divisions…</p></div></div>`;
  let A=cache[id];if(!A){try{const k=o.cont.replace(/ /g,'_').replace(/[()]/g,'');const Bn=cache['@'+k]||(cache['@'+k]=await (await fetch('data/adm1-'+k+'.json')).json());A=cache[id]=Bn[id]||null}catch(e){A=null}}
  const a1=wi.querySelector('#a1');if(!A||!A.items.length){a1.innerHTML='<p class="muted">No first-level divisions in our dataset.</p>';return}
  const types=[...new Set(A.items.map(x=>x.t).filter(Boolean))].join(', ');
  a1.innerHTML=`<p><b>${A.items.length}</b> first-level divisions${types?` (${esc(types)})`:''}. Tap one to see its name.</p><svg viewBox="-5 -5 ${A.w+10} ${A.h+10}" style="width:100%;max-height:70vh;background:#f6f6f0;border-radius:10px">${A.items.map((x,i)=>`<path d="${x.d}" fill="hsl(${i*47%360} 55% 72%)" stroke="#fff" stroke-width="1" data-n="${esc(x.n)}"><title>${esc(x.n)}</title></path>`).join('')}</svg><p id="an" class="muted">Tap a region.</p><details><summary>List all (${A.items.length})</summary><p>${A.items.map(x=>`<span class="chip">${esc(x.n)}</span>`).join(' ')}</p></details>`;
  a1.querySelectorAll('path').forEach(p=>p.onclick=()=>{a1.querySelector('#an').innerHTML='<b>'+p.dataset.n+'</b>'});wi.scrollIntoView({behavior:'smooth'})};
 app.querySelectorAll('#wm path').forEach(p=>p.onclick=()=>show(p.dataset.id));
 app.querySelector('#wq').onchange=e=>{const o=W.items.find(x=>x.name.toLowerCase()===e.target.value.toLowerCase());if(o)show(o.id)};
 if(iso)show(iso);
}};
})();
