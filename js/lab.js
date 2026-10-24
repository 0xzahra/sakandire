/* Sakandire dry lab: titration, projectile, Ohm's law */
(function(){
const Lab={};
const f=(x,d=2)=>Number(x).toFixed(d);
const steps=(arr)=>`<h3>Step-by-step guide</h3><ol class="steps">${arr.map((s,i)=>`<li id="st${i}">${s}</li>`).join('')}</ol>`;
const done=i=>{const e=document.getElementById('st'+i);if(e)e.classList.add('done')};
Lab.route=function(app,which){
  if(which==='titration')return titration(app);if(which==='projectile')return projectile(app);if(which==='ohm')return ohm(app);
  app.innerHTML=`<h1>Dry lab 🧪</h1><p>Practise practicals on your phone before the real lab. These are simulations: real lab work still needs real care and a teacher.</p>
  <a class="card" style="margin:8px 0" href="#/lab/titration"><h3>⚗️ Acid–base titration</h3><p>Chemistry practical (WAEC/NECO). Find the concentration of an acid with a base.</p></a>
  <a class="card" style="margin:8px 0" href="#/lab/projectile"><h3>🏀 Projectile motion</h3><p>Physics. Change speed and angle, see range, height and time.</p></a>
  <a class="card" style="margin:8px 0" href="#/lab/ohm"><h3>🔋 Ohm's law circuit</h3><p>Physics practical. Take readings of V and I, plot a graph, find R.</p></a>`;
};
/* ---------- Titration ---------- */
function titration(app){
  let Ca=0.100,Va=25.0,Cb=0.100,Vb=0,first=null;
  app.innerHTML=`<p><a href="#/lab">← Dry lab</a></p><h1>Acid–base titration</h1>
  <p>Acid in the conical flask: <b>HCl</b>, 25.0 cm³ (pipette). Base in the burette: <b>NaOH</b>, 0.100 mol/dm³. Indicator: phenolphthalein (colourless in acid, pink in base). Equation: HCl + NaOH → NaCl + H₂O (mole ratio 1 : 1).</p>
  <div class="row"><label>Unknown acid: <select id="acid"><option value="0.100">Sample A</option><option value="0.080">Sample B</option><option value="0.125">Sample C</option><option value="rand">Random</option></select></label><button class="btn sm" id="reset">Refill / reset</button></div>
  <div class="sim" style="margin-top:8px"><svg viewBox="0 0 300 300" id="tsv"></svg>
  <div class="row"><button class="btn" data-v="1">+1.00 cm³</button><button class="btn" data-v="0.5">+0.50</button><button class="btn" data-v="0.1">+0.10 (drop-wise)</button><button class="btn" data-v="0.05">+1 drop (0.05)</button></div>
  <p>Burette reading: <b id="vb">0.00</b> cm³ · pH in flask ≈ <b id="ph">1.00</b> · Colour: <b id="col">colourless</b></p>
  <button class="btn pri" id="rec">Record end point</button> <span id="recs" class="muted"></span></div>
  ${steps(['Rinse the burette with the base and fill it. Note the initial reading (0.00 cm³).','Pipette 25.0 cm³ of acid into the conical flask and add 2–3 drops of phenolphthalein.','Run in the base 1 cm³ at a time and swirl. Watch for a pink colour that disappears.','Near the end point (pink lasts longer), add drop by drop.','Stop at the FIRST permanent faint pink. Record the titre. Reset and repeat until two titres agree within ±0.10 cm³.','Use the average titre: Ca = (Cb × Vb) ÷ Va, because the mole ratio is 1 : 1.'])}
  <div class="card"><h3>Check your calculation</h3><label>Your concentration of acid (mol/dm³): <input id="ans" inputmode="decimal" size="8"></label> <button class="btn sm" id="chk">Check</button><p id="fb"></p></div>`;
  const $=s=>app.querySelector(s);
  const pH=()=>{const na=Ca*Va/1000,nb=Cb*Vb/1000,V=(Va+Vb)/1000;if(Math.abs(na-nb)<1e-9)return 7;if(na>nb)return -Math.log10((na-nb)/V);return 14+Math.log10((nb-na)/V)};
  const draw=()=>{const p=pH(),pink=p>8.2,lvl=Math.min(1,Vb/50);const strength=pink?Math.min(1,(p-8.2)/3+0.25):0;
    $('#tsv').innerHTML=`<rect x="140" y="10" width="20" height="170" fill="#eef" stroke="#555"/><rect x="141" y="${12+lvl*166}" width="18" height="${166-lvl*166}" fill="#cde"/>
    ${[0,10,20,30,40,50].map(v=>`<line x1="160" x2="168" y1="${12+v/50*166}" y2="${12+v/50*166}" stroke="#333"/><text x="170" y="${16+v/50*166}" font-size="9">${v}</text>`).join('')}
    <path d="M146 180h8l-2 14h-4z" fill="#999"/><text x="60" y="40" font-size="11">Burette (NaOH)</text>
    <path d="M125 210h50v20l35 55h-120l35-55z" fill="rgba(255,${Math.round(250-130*strength)},${Math.round(250-60*strength)},1)" stroke="#444" stroke-width="2"/>
    <text x="215" y="260" font-size="11">Flask (HCl)</text><rect x="70" y="287" width="160" height="6" fill="#bbb"/>`;
    $('#vb').textContent=f(Vb);$('#ph').textContent=f(p,2);$('#col').textContent=pink?(p<10?'faint pink':'deep pink (overshot!)'):'colourless';};
  const reset=()=>{const v=$('#acid').value;Ca=v==='rand'?Math.round((0.06+Math.random()*0.08)*1000)/1000:+v;Vb=0;draw()};
  $('#acid').onchange=reset;$('#reset').onclick=()=>{Vb=0;draw();done(0)};
  app.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{Vb=Math.min(50,Math.round((Vb+ +b.dataset.v)*100)/100);done(1);done(2);if(+b.dataset.v<0.2)done(3);draw()});
  const titres=[];
  $('#rec').onclick=()=>{titres.push(Vb);done(4);const p=pH();$('#recs').textContent='Titres: '+titres.map(t=>f(t)).join(', ')+' cm³'+(p<=8.2?' — not yet pink: that is before the end point.':p>10?' — overshot: the solution is deep pink; repeat.':' ✔ good end point.')};
  $('#chk').onclick=()=>{const u=parseFloat($('#ans').value);const ok=Math.abs(u-Ca)/Ca<0.03;done(5);
    $('#fb').innerHTML=ok?`✅ Correct! Ca = ${Cb} × ${f(Ca*Va/Cb)} ÷ 25.0 = <b>${f(Ca,3)} mol/dm³</b>.`:`❌ Not quite. Use Ca = Cb × (average titre) ÷ 25.0. The exact end point here is ${f(Ca*Va/Cb)} cm³.`};
  reset();
}
/* ---------- Projectile ---------- */
function projectile(app){
  app.innerHTML=`<p><a href="#/lab">← Dry lab</a></p><h1>Projectile motion</h1>
  <p>A ball is launched from the ground with speed <i>u</i> at angle θ. Air resistance is ignored.</p>
  <div class="sim"><svg viewBox="0 0 400 220" id="psv"></svg>
  <label>Speed u = <b id="uv">20</b> m/s<input type="range" id="u" min="5" max="40" value="20"></label>
  <label>Angle θ = <b id="av">45</b>°<input type="range" id="a" min="5" max="85" value="45"></label>
  <label>g = <select id="g"><option value="9.8">9.8 m/s²</option><option value="10">10 m/s² (often used in exams)</option></select></label>
  <p><button class="btn pri" id="fire">Launch ▶</button></p>
  <div id="out"></div></div>
  ${steps(['Choose a launch speed and angle.','Split the speed: horizontal uₓ = u cos θ (stays the same), vertical u_y = u sin θ (gravity slows it).','Time of flight T = 2u sin θ / g.','Maximum height H = u² sin²θ / (2g).','Range R = u² sin 2θ / g. Try 30° and 60°: same range! Maximum range is at 45°.','Write your own answer first, then press Launch to check.'])}`;
  const $=s=>app.querySelector(s);let anim;
  const calc=()=>{const u=+$('#u').value,a=+$('#a').value*Math.PI/180,g=+$('#g').value;return{u,a,g,T:2*u*Math.sin(a)/g,H:u*u*Math.sin(a)**2/(2*g),R:u*u*Math.sin(2*a)/g}};
  const draw=(t)=>{const c=calc();const sc=Math.min(340/c.R,170/c.H);const pts=[];for(let i=0;i<=60;i++){const tt=c.T*i/60;pts.push([20+c.u*Math.cos(c.a)*tt*sc,200-(c.u*Math.sin(c.a)*tt-0.5*c.g*tt*tt)*sc])}
    let ball='';if(t!=null){const x=20+c.u*Math.cos(c.a)*t*sc,y=200-(c.u*Math.sin(c.a)*t-0.5*c.g*t*t)*sc;ball=`<circle cx="${x}" cy="${y}" r="5" fill="#e07b24"/>`}
    $('#psv').innerHTML=`<line x1="0" y1="200" x2="400" y2="200" stroke="#1f6f4a" stroke-width="3"/><polyline points="${pts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#888" stroke-dasharray="4 3"/>
    <line x1="20" y1="200" x2="${20+40*Math.cos(c.a)}" y2="${200-40*Math.sin(c.a)}" stroke="#333" stroke-width="2"/><text x="66" y="196" font-size="11">θ</text>${ball}
    <text x="${20+c.R*sc/2}" y="${200-c.H*sc-6}" font-size="10" text-anchor="middle">H = ${f(c.H,1)} m</text><text x="${Math.min(360,20+c.R*sc)}" y="214" font-size="10" text-anchor="middle">R = ${f(c.R,1)} m</text>`;
    $('#uv').textContent=c.u;$('#av').textContent=Math.round(c.a*180/Math.PI);
    $('#out').innerHTML=`uₓ = ${f(c.u*Math.cos(c.a))} m/s, u_y = ${f(c.u*Math.sin(c.a))} m/s<br>Time of flight T = 2 × ${c.u} × sin ${Math.round(c.a*180/Math.PI)}° ÷ ${c.g} = <b>${f(c.T)} s</b><br>Max height H = <b>${f(c.H)} m</b> · Range R = <b>${f(c.R)} m</b>`};
  ['u','a','g'].forEach(i=>$('#'+i).oninput=()=>{cancelAnimationFrame(anim);draw();done(0)});
  $('#fire').onclick=()=>{done(0);done(1);done(2);done(3);done(4);done(5);const c=calc();const t0=performance.now();const step=n=>{const t=Math.min(c.T,(n-t0)/1000*Math.max(1,c.T/3));draw(t);if(t<c.T)anim=requestAnimationFrame(step)};cancelAnimationFrame(anim);anim=requestAnimationFrame(step)};
  draw();
}
/* ---------- Ohm's law ---------- */
function ohm(app){
  const E=6.0,r=0.5;let R=10,Rh=10,rows=[];
  app.innerHTML=`<p><a href="#/lab">← Dry lab</a></p><h1>Ohm's law circuit</h1>
  <p>A 6.0 V battery (internal resistance 0.5 Ω), a key, an ammeter, a rheostat and a fixed resistor R are in series. The voltmeter is connected in parallel across R. Moving the rheostat changes the current.</p>
  <div class="sim"><svg viewBox="0 0 320 200" id="osv"></svg>
  <label>Fixed resistor R: <select id="R"><option>5</option><option selected>10</option><option>20</option></select> Ω (pretend you don't know it!)</label>
  <label>Rheostat setting = <b id="rv">10</b> Ω<input type="range" id="Rh" min="0" max="40" step="1" value="10"></label>
  <p>Ammeter: <b id="I"></b> A · Voltmeter: <b id="V"></b> V</p><button class="btn pri" id="take">Record reading</button> <button class="btn sm" id="clr">Clear table</button>
  <div id="tbl"></div><svg viewBox="0 0 300 200" id="gph" style="margin-top:8px"></svg><p id="slope"></p></div>
  ${steps(['Connect battery, key, ammeter, rheostat and resistor R in series. Put the voltmeter across R only (in parallel).','Close the key. Read I on the ammeter and V on the voltmeter.','Move the rheostat and record at least 5 pairs of (I, V).','Plot V on the y-axis against I on the x-axis.','You get a straight line through the origin: V ∝ I at constant temperature. That is Ohm\'s law.','Slope = ΔV ÷ ΔI = R. Compare with the value you chose.'])}`;
  const $=s=>app.querySelector(s);
  const cur=()=>E/(R+Rh+r);
  const draw=()=>{const I=cur(),V=I*R;$('#I').textContent=f(I,3);$('#V').textContent=f(V,2);$('#rv').textContent=Rh;
    $('#osv').innerHTML=`<path d="M40 40H280V160H40Z" fill="none" stroke="#333" stroke-width="2"/>
    <rect x="25" y="85" width="30" height="30" fill="#fff"/><line x1="30" y1="95" x2="50" y2="95" stroke="#333" stroke-width="3"/><line x1="35" y1="105" x2="45" y2="105" stroke="#333" stroke-width="3"/><text x="0" y="132" font-size="10">6.0 V</text>
    <circle cx="120" cy="40" r="14" fill="#fff" stroke="#333" stroke-width="2"/><text x="115" y="45" font-size="13" font-weight="bold">A</text>
    <rect x="190" y="32" width="56" height="16" fill="#fff" stroke="#333" stroke-width="2"/><path d="M196 58L232 22" stroke="#e07b24" stroke-width="2"/><text x="190" y="18" font-size="10">rheostat ${Rh} Ω</text>
    <rect x="140" y="150" width="50" height="20" fill="#fde7c7" stroke="#333" stroke-width="2"/><text x="148" y="190" font-size="10">R</text>
    <path d="M140 160V118H190V160" fill="none" stroke="#666" stroke-dasharray="3 2"/><circle cx="165" cy="118" r="13" fill="#fff" stroke="#333" stroke-width="2"/><text x="160" y="123" font-size="13" font-weight="bold">V</text>`};
  const table=()=>{$('#tbl').innerHTML=rows.length?`<table class="ft" style="margin-top:8px"><tr><th>#</th><th>I (A)</th><th>V (V)</th><th>V/I (Ω)</th></tr>${rows.map((x,i)=>`<tr><td>${i+1}</td><td>${f(x.I,3)}</td><td>${f(x.V,2)}</td><td>${f(x.V/x.I,1)}</td></tr>`).join('')}</table>`:'';
    const mx=1.2,my=6;$('#gph').innerHTML=`<line x1="30" y1="170" x2="290" y2="170" stroke="#333"/><line x1="30" y1="10" x2="30" y2="170" stroke="#333"/><text x="150" y="195" font-size="10">I (A), 0 to 1.2</text><text x="2" y="90" font-size="10">V</text><text x="2" y="16" font-size="9">6 V</text>
    ${rows.map(x=>`<circle cx="${30+x.I/mx*250}" cy="${170-x.V/my*155}" r="3" fill="#e07b24"/>`).join('')}`;
    if(rows.length>=2){const a=rows[0],b=rows[rows.length-1];$('#slope').innerHTML=a.I!==b.I?`Slope from first and last points = (${f(b.V)} − ${f(a.V)}) ÷ (${f(b.I,3)} − ${f(a.I,3)}) = <b>${f((b.V-a.V)/(b.I-a.I),1)} Ω</b>`:''}else $('#slope').textContent=''};
  $('#R').onchange=()=>{R=+$('#R').value;rows=[];draw();table()};
  $('#Rh').oninput=()=>{Rh=+$('#Rh').value;draw();done(0);done(1)};
  $('#take').onclick=()=>{const I=cur();rows.push({I,V:I*R});done(1);if(rows.length>=5){done(2);done(3);done(4);done(5)}table()};
  $('#clr').onclick=()=>{rows=[];table()};draw();table();
}
window.Lab=Lab;
})();
