/* Sakandire references: periodic table, four-figure tables, maps */
(function(){
const R={};const esc=s=>window.esc(s);
R.route=function(app,w){
  if(w==='periodic')return periodic(app);if(w==='tables')return tables(app);if(w==='maps')return maps(app);
  app.innerHTML=`<h1>Reference</h1>
  <a class="card" style="margin:8px 0" href="#/ref/periodic"><h3>⚛️ Periodic table (IUPAC, 118 elements)</h3><p>Tap any element for details.</p></a>
  <a class="card" style="margin:8px 0" href="#/ref/tables"><h3>🔢 Four-figure tables</h3><p>Logarithms, antilogarithms, sine/cosine/tangent, square roots — with how-to guides.</p></a>
  <a class="card" style="margin:8px 0" href="#/ref/maps"><h3>🗺️ Maps</h3><p>Nigeria (36 states + FCT), West Africa, Africa.</p></a>`;
};
/* ---- periodic ---- */
const CAT={am:['Alkali metal','#ffb3a7'],ae:['Alkaline earth metal','#ffd8a0'],tm:['Transition metal','#f6e39a'],pt:['Post-transition metal','#c8e6a0'],md:['Metalloid','#a8e0c8'],nm:['Reactive non-metal','#a9d4ff'],hg:['Halogen','#c6b8ff'],ng:['Noble gas','#f0b8e8'],ln:['Lanthanide','#ffc9d9'],ac:['Actinide','#e8c0a8'],uk:['Properties not yet known (synthetic)','#ddd']};
function pos(z){
  if(z===1)return[1,1];if(z===2)return[18,1];
  const P=[[3,10,2],[11,18,3],[19,36,4],[37,54,5],[55,86,6],[87,118,7]];
  for(const[a,b,p]of P)if(z>=a&&z<=b){let i=z-a;
    if(p<=3){return[i<2?i+1:i+11,p]}
    if(p<=5)return[i+1,p];
    if(z>=57&&z<=71||z>=89&&z<=103)return[z-(p===6?57:89)+3,p===6?9:10]; // f-block rows
    if(i<2)return[i+1,p];return[i-14+1,p]}
}
function config(z){
  const order=['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p'],cap={s:2,p:6,d:10,f:14};
  const ex={24:'[Ar] 3d⁵ 4s¹',29:'[Ar] 3d¹⁰ 4s¹'};if(ex[z])return ex[z];if(z>36)return null;
  let n=z;const out=[];for(const o of order){if(n<=0)break;const c=Math.min(n,cap[o[1]]);out.push(o+String(c).replace(/./g,d=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[d]));n-=c}return out.join(' ')}
function shells(z){if(z>20)return null;const s=[];let n=z;for(const c of[2,8,8,2]){if(n<=0)break;s.push(Math.min(n,c));n-=c}return s.join(', ')}
function periodic(app){
  const E=window.ELEMENTS;
  let cells='';for(const e of E){const[g,p]=pos(e.z);cells+=`<button class="el" style="grid-column:${g};grid-row:${p>7?p+1:p};background:${CAT[e.c][1]}" data-z="${e.z}" title="${e.n}"><span>${e.z}</span><b>${e.s}</b></button>`}
  cells+=`<div style="grid-column:3;grid-row:6;font-size:.6rem;align-self:center;text-align:center">57–71</div><div style="grid-column:3;grid-row:7;font-size:.6rem;align-self:center;text-align:center">89–103</div><div style="grid-row:8;grid-column:1/19;height:8px"></div>`;
  app.innerHTML=`<p><a href="#/ref">← Reference</a></p><h1>Periodic table</h1><p class="muted">IUPAC table with all 118 confirmed elements (names approved up to 2016: Nh, Mc, Ts, Og). Scroll sideways on small phones. Tap an element.</p>
  <div id="eld" class="card" style="margin-bottom:8px">Tap an element to see its details.</div>
  <div class="scroll"><div class="pt">${cells}</div></div>
  <div class="row" style="margin-top:8px;font-size:.8rem">${Object.values(CAT).map(([n,c])=>`<span><span style="display:inline-block;width:12px;height:12px;background:${c};border-radius:3px"></span> ${n}</span>`).join(' ')}</div>
  <h2>How to use the periodic table</h2><ul><li><b>Atomic number (Z)</b> = number of protons = number of electrons in a neutral atom. Elements are arranged in order of Z.</li><li><b>Groups</b> are columns (1–18). Elements in a group have the same number of outer (valence) electrons for main groups, so they react in similar ways. Group 1 = 1 valence electron; groups 13–18 have (group − 10) valence electrons.</li><li><b>Periods</b> are rows (1–7). The period number = number of electron shells in use.</li><li><b>Relative atomic mass</b> is the average mass of the atoms compared with 1/12 of carbon-12. Exams often round: H = 1, C = 12, O = 16, Na = 23, Cl = 35.5.</li><li>Values in [brackets] are mass numbers of the most stable known isotope of radioactive elements.</li><li>Metals are on the left and centre; non-metals on the right; metalloids (B, Si, Ge, As, Sb, Te) lie along the staircase between them.</li></ul>`;
  app.querySelectorAll('.el').forEach(b=>b.onclick=()=>{const e=E[b.dataset.z-1],[g,p]=pos(e.z),grp=p>7?'f-block (shown below main table)':g,per=p===9?6:p===10?7:p;
    const block=p>7?'f':(g<=2||e.z===2)?'s':g>=13?'p':'d';
    app.querySelector('#eld').innerHTML=`<h2 style="margin:0">${e.n} (${e.s})</h2><p>Atomic number: <b>${e.z}</b> · Relative atomic mass: <b>${e.m}</b><br>Group: <b>${grp}</b> · Period: <b>${per}</b> · Block: <b>${block}</b><br>Type: <b>${CAT[e.c][0]}</b>${shells(e.z)?`<br>Electron shells (K, L, M, N): <b>${shells(e.z)}</b>`:''}${config(e.z)?`<br>Electron configuration: <b>${config(e.z)}</b>`:''}</p>`;
    app.querySelector('#eld').scrollIntoView({behavior:'smooth',block:'nearest'})});
}
/* ---- four figure tables ---- */
const r4=x=>Math.round(x*1e4);
function lt(fn,rowStart,rowEnd,rowLabel,pad=4,md=true){
  let h='<table class="ft"><tr><th></th>'+[...Array(10).keys()].map(d=>`<th>${d}</th>`).join('')+(md?'<th style="border-left:3px solid var(--line)" colspan="9">Mean differences 1–9 (add)</th>':'')+'</tr>';
  for(let r=rowStart;r<=rowEnd;r++){const v=[...Array(10).keys()].map(d=>fn(r,d));
    let mdc='';if(md){const diff=(fn(r,9)-fn(r,0))/9;mdc=[1,2,3,4,5,6,7,8,9].map(k=>`<td class="muted">${Math.round(diff*k/10)}</td>`).join('')}
    h+=`<tr><th>${rowLabel(r)}</th>${v.map(x=>`<td>${String(x).padStart(pad,'0')}</td>`).join('')}${mdc}</tr>`}
  return h+'</table>'}
function tables(app){
  const T={
   log:{n:'Logarithms (base 10)',html:()=>lt((r,d)=>r4(Math.log10((r*10+d)/100)),10,99,r=>r),guide:`<p>The table gives the <b>mantissa</b> (decimal part) of log₁₀ for numbers 1.000–9.999. Rows are the first two figures, columns the third, mean differences the fourth.</p><p><b>Example:</b> log 47.36. Standard form: 4.736 × 10¹, so the characteristic (whole part) is 1. Row 47, column 3 → 6749; mean difference column 6 → add 5 → 6754. So log 47.36 = <b>1.6754</b>.</p><p>For numbers less than 1, e.g. 0.04736 = 4.736 × 10⁻², the log is written <b>2̄.6754</b> (“bar two point six seven five four”).</p>`},
   antilog:{n:'Antilogarithms',html:()=>lt((r,d)=>Math.round(10**((r*10+d)/1000)*1000),0,99,r=>'.'+String(r).padStart(2,'0')),guide:`<p>Use this to turn a logarithm back into a number. Look up only the decimal part (mantissa); the characteristic tells you where the decimal point goes.</p><p><b>Example:</b> antilog 2.6754. Row .67, column 5 → 4732; mean difference 4 → add 4 → 4736. Characteristic 2 means 4.736 × 10² = <b>473.6</b>.</p>`},
   sin:{n:'Natural sines',trig:Math.sin},cos:{n:'Natural cosines',trig:Math.cos,cos:true},tan:{n:'Natural tangents',trig:Math.tan},
   sqrt1:{n:'Square roots 1–9.99',html:()=>lt((r,d)=>Math.round(Math.sqrt((r*10+d)/100)*1000),10,99,r=>(r/10).toFixed(1)),guide:`<p>Entries are √x × 1000 for x from 1.00 to 9.99 (put the decimal point after the first figure). Example: √4.73 → row 4.7, column 3 → 2175 → <b>2.175</b>.</p><p>For numbers 10–99.9 use the other square-root table. For larger or smaller numbers, move the decimal point an <b>even</b> number of places: √473 = √4.73 × 10 = 21.75.</p>`},
   sqrt2:{n:'Square roots 10–99.9',html:()=>lt((r,d)=>Math.round(Math.sqrt(r+d/10)*1000),10,99,r=>r),guide:`<p>Entries are √x × 1000 for x from 10.0 to 99.9 (decimal point after the first figure). Example: √47.3 → row 47, column 3 → 6877 → <b>6.877</b>.</p>`}};
  const trigTable=(f,isCos)=>{let h=`<table class="ft"><tr><th>°</th>${[0,6,12,18,24,30,36,42,48,54].map(m=>`<th>${m}′</th>`).join('')}</tr>`;for(let d=0;d<90;d++){h+=`<tr><th>${d}</th>${[0,1,2,3,4,5,6,7,8,9].map(k=>{const v=f((d+k/10)*Math.PI/180);return`<td>${v>=10?v.toFixed(2):v.toFixed(4)}</td>`}).join('')}</tr>`}return h+'</table>'};
  const trigGuide=n=>`<p>Rows are whole degrees, columns are minutes in steps of 6′ (0.1°). Example: ${n==='Natural sines'?'sin 35°24′ → row 35, column 24′ → <b>0.5793</b>':n==='Natural cosines'?'cos 60°0′ → <b>0.5000</b>; note cosines get <b>smaller</b> as the angle grows':'tan 45°0′ → <b>1.0000</b>; tan grows very fast near 90°'}.</p><p>For minutes between columns, use the nearest column or a calculator-style interpolation. Remember: sin θ = cos(90° − θ).</p>`;
  app.innerHTML=`<p><a href="#/ref">← Reference</a></p><h1>Four-figure tables</h1><p class="muted">Every value here is calculated live by your phone, so it is exact to 4 figures. Mean differences are averages per row, as in printed tables, so the last figure may differ by 1.</p>
  <div class="row">${Object.entries(T).map(([k,t])=>`<button class="btn sm" data-t="${k}">${t.n}</button>`).join('')}</div>
  <div class="card" style="margin:10px 0"><b>Quick check:</b> <input id="qv" size="8" inputmode="decimal" placeholder="e.g. 47.36"> <button class="btn sm" id="qb">log, √, sin/cos/tan</button><div id="qo"></div></div>
  <div id="tg"></div><div class="scroll" id="tt"></div>`;
  const show=k=>{const t=T[k];app.querySelectorAll('[data-t]').forEach(b=>b.classList.toggle('pri',b.dataset.t===k));
    app.querySelector('#tg').innerHTML=`<h2>${t.n}</h2><div class="box key"><b>How to use:</b> ${t.trig?trigGuide(t.n):t.guide}</div>`;
    app.querySelector('#tt').innerHTML=t.trig?trigTable(t.trig):t.html()};
  app.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>show(b.dataset.t));show('log');
  app.querySelector('#qb').onclick=()=>{const x=parseFloat(app.querySelector('#qv').value);if(!(x>0))return;const r=Math.PI/180;
    app.querySelector('#qo').innerHTML=`log₁₀ ${x} = ${Math.log10(x).toFixed(4)} · √${x} = ${Math.sqrt(x).toFixed(4)}${x<=90?` · sin ${x}° = ${Math.sin(x*r).toFixed(4)} · cos ${x}° = ${Math.cos(x*r).toFixed(4)}${x<90?` · tan ${x}° = ${Math.tan(x*r).toFixed(4)}`:''}`:''}`};
}
/* ---- maps ---- */
const NG={'Abia':['Umuahia','South-East'],'Adamawa':['Yola','North-East'],'Akwa Ibom':['Uyo','South-South'],'Anambra':['Awka','South-East'],'Bauchi':['Bauchi','North-East'],'Bayelsa':['Yenagoa','South-South'],'Benue':['Makurdi','North-Central'],'Borno':['Maiduguri','North-East'],'Cross River':['Calabar','South-South'],'Delta':['Asaba','South-South'],'Ebonyi':['Abakaliki','South-East'],'Edo':['Benin City','South-South'],'Ekiti':['Ado-Ekiti','South-West'],'Enugu':['Enugu','South-East'],'FCT (Abuja)':['Abuja (federal capital)','North-Central'],'Gombe':['Gombe','North-East'],'Imo':['Owerri','South-East'],'Jigawa':['Dutse','North-West'],'Kaduna':['Kaduna','North-West'],'Kano':['Kano','North-West'],'Katsina':['Katsina','North-West'],'Kebbi':['Birnin Kebbi','North-West'],'Kogi':['Lokoja','North-Central'],'Kwara':['Ilorin','North-Central'],'Lagos':['Ikeja','South-West'],'Nasarawa':['Lafia','North-Central'],'Niger':['Minna','North-Central'],'Ogun':['Abeokuta','South-West'],'Ondo':['Akure','South-West'],'Osun':['Osogbo','South-West'],'Oyo':['Ibadan','South-West'],'Plateau':['Jos','North-Central'],'Rivers':['Port Harcourt','South-South'],'Sokoto':['Sokoto','North-West'],'Taraba':['Jalingo','North-East'],'Yobe':['Damaturu','North-East'],'Zamfara':['Gusau','North-West']};
const ZC={'North-West':'#7fb77e','North-East':'#c9b458','North-Central':'#6fa8dc','South-West':'#e69a6b','South-East':'#b58ad6','South-South':'#5fc2b5'};
const WA={'Benin':'Porto-Novo','Burkina Faso':'Ouagadougou','Cabo Verde':'Praia',"Côte d'Ivoire":'Yamoussoukro (official); Abidjan (economic)','Gambia':'Banjul','Ghana':'Accra','Guinea':'Conakry','Guinea-Bissau':'Bissau','Liberia':'Monrovia','Mali':'Bamako','Mauritania':'Nouakchott','Niger':'Niamey','Nigeria':'Abuja','Senegal':'Dakar','Sierra Leone':'Freetown','Togo':'Lomé'};
function maps(app){
  const M=window.MAPS;let cur='nigeria';
  const draw=()=>{const m=M[cur];const col=n=>cur==='nigeria'?ZC[NG[n][1]]:(cur==='westafrica'?'#7fb77e':(WA[n]?'#e69a6b':'#9cc7a4'));
    app.querySelector('#mp').innerHTML=`<svg class="map" viewBox="-5 -5 ${m.w+10} ${m.h+10}">${m.items.map((it,i)=>`<path d="${it.d}" fill="${col(it.name)}" data-i="${i}"><title>${esc(it.name)}</title></path>`).join('')}
    ${cur!=='africa'?m.items.map(it=>`<text x="${it.cx}" y="${it.cy}" font-size="${cur==='nigeria'?9:11}" text-anchor="middle" pointer-events="none" fill="#111">${esc(cur==='nigeria'?it.name.replace(' (Abuja)','').replace('Akwa Ibom','A. Ibom').replace('Cross River','C. River'):it.name)}</text>`).join(''):''}</svg>`;
    app.querySelector('#leg').innerHTML=cur==='nigeria'?Object.entries(ZC).map(([z,c])=>`<span><span style="display:inline-block;width:12px;height:12px;background:${c}"></span> ${z}</span>`).join(' '):cur==='africa'?'<span>Orange = West African countries. Tap any country for its name.</span>':'';
    app.querySelectorAll('.map path').forEach(p=>p.onclick=()=>{app.querySelectorAll('.map path').forEach(q=>q.classList.remove('hi'));p.classList.add('hi');const n=m.items[p.dataset.i].name;
      app.querySelector('#mi').innerHTML=cur==='nigeria'?`<b>${esc(n)}</b> State — capital: <b>${NG[n][0]}</b> · Zone: ${NG[n][1]}`.replace('FCT (Abuja) State','Federal Capital Territory'):`<b>${esc(n)}</b>${WA[n]?' — capital: <b>'+WA[n]+'</b>':''}`})};
  app.innerHTML=`<p><a href="#/ref">← Reference</a></p><h1>Maps</h1><div class="row"><button class="btn sm pri" data-m="nigeria">Nigeria</button><button class="btn sm" data-m="westafrica">West Africa</button><button class="btn sm" data-m="africa">Africa</button></div>
  <p id="mi" class="card" style="margin:8px 0">Tap a state or country.</p><div id="mp"></div><div id="leg" class="row" style="font-size:.8rem"></div>
  <h2>How to use these maps</h2><ul><li>Tap a shape to see its name (and capital, for Nigerian states and West African countries).</li><li><b>Nigeria</b> has 36 states and the Federal Capital Territory (Abuja), grouped into six geopolitical zones (colours).</li><li>Quiz yourself: cover the label in your mind, tap, then check.</li><li>These are simplified outlines for study, not for navigation. North is at the top.</li></ul>
  <p class="muted" style="font-size:.8rem">Nigeria state boundaries: geoBoundaries / GRID3 (CC BY 4.0). Country outlines: Natural Earth (public domain). Simplified by Sakandire.</p>`;
  app.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{cur=b.dataset.m;app.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('pri',x===b));app.querySelector('#mi').textContent='Tap a state or country.';draw()});draw();
}
window.Ref=R;
})();
