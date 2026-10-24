/* Sakandire core: router, library, reader, bookmarks, search. No build step. */
(function(){
const $=s=>document.querySelector(s), app=$('#app');
const LS={get:(k,d)=>{try{return JSON.parse(localStorage.getItem('sakandire.'+k))??d}catch(e){return d}},set:(k,v)=>localStorage.setItem('sakandire.'+k,JSON.stringify(v))};
window.LS=LS;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));window.esc=esc;
// theme + font
const themes=['light','sepia','dark'];
function applyPrefs(){document.documentElement.dataset.theme=LS.get('theme','light');document.documentElement.style.setProperty('--fs',LS.get('fs',17)+'px')}
applyPrefs();
$('#themeBtn').onclick=()=>{const t=themes[(themes.indexOf(LS.get('theme','light'))+1)%3];LS.set('theme',t);applyPrefs()};
const BOOKS=window.BOOKS||[];
const book=id=>BOOKS.find(b=>b.id===id);
const SYLL='<span class="tag">WAEC</span><span class="tag">NECO</span><span class="tag">JAMB</span><span class="tag">Post-UTME</span>';
function tags(ch){return (ch.syl||['WAEC','NECO','JAMB','Post-UTME']).map(t=>`<span class="tag">${t}</span>`).join('')}
function home(){
  app.innerHTML=`<h1>Welcome to Sakandire 🎒</h1>
  <p>A free study companion for SS1–SS3. Simple notes, a dry lab, exam-style practice and handy tables. Works offline after your first visit. No login.</p>
  <div class="grid">
   <a class="card spine" href="#/library"><h3>📚 Books</h3><p>Simplified notes with diagrams</p></a>
   <a class="card spine" href="#/lab"><h3>🧪 Dry lab</h3><p>Titration, projectile, Ohm's law</p></a>
   <a class="card spine" href="#/exam"><h3>⏱️ Exam prep</h3><p>JAMB / WAEC / NECO / Post-UTME-style CBT practice</p></a>
   <a class="card spine" href="#/grad"><h3>💼 Graduate Trainee Prep</h3><p>Aptitude-test practice (SHL/"dragnet"-style)</p></a>
   <a class="card spine" href="#/careers"><h3>🎓 Courses & Careers</h3><p>Pick the right JAMB subjects for your dream course</p></a>
   <a class="card spine" href="#/ref"><h3>📐 Reference</h3><p>Periodic table, four-figure tables, maps</p></a>
   <a class="card spine" href="#/bookmarks"><h3>🔖 Bookmarks</h3><p>Your saved chapters</p></a>
  </div>
  <p class="note" style="margin-top:14px"><b>Honest note:</b> Sakandire's notes and questions are written fresh by us, following the topics in the official WAEC, NECO and JAMB syllabuses. They are <b>not</b> copied from any textbook and are <b>not</b> real past questions. Use them with your school textbook and teacher. Practice helps, but no app can promise exam results.</p>
  <p class="muted" style="font-size:.85rem">Map outlines: geoBoundaries (CC BY 4.0) and Natural Earth (public domain). Made for Nigerian students by Zahra. <a href="#/about">About & sources</a></p>`;
}
function library(){
  app.innerHTML=`<h1>Library</h1><p class="muted">Pick a book. Each chapter is tagged with the exam syllabuses it serves.</p><div class="grid">${
   BOOKS.map(b=>`<a class="card spine" style="--c:${b.color}" href="#/book/${b.id}"><h3>${b.icon||''} ${esc(b.title)}</h3><p>${b.chapters.length} chapters</p></a>`).join('')}
   <a class="card spine" style="--c:#555" href="#/grad"><h3>💼 Graduate Trainee Prep</h3><p>Aptitude tests guide + practice</p></a></div>
   <p class="muted" style="font-size:.85rem">More chapters will be added over time.</p>`;
}
function bookPage(id){
  const b=book(id); if(!b) return notFound();
  app.innerHTML=`<p><a href="#/library">← Library</a></p><h1>${b.icon||''} ${esc(b.title)}</h1><p>${esc(b.blurb||'')}</p>
  ${b.chapters.map((c,i)=>`<a class="card" style="margin:8px 0" href="#/read/${b.id}/${i}"><h3>Chapter ${i+1}: ${esc(c.title)}</h3><p>Syllabus topic: ${esc(c.topic||c.title)}</p>${tags(c)}</a>`).join('')}
  <div class="note"><b>Further reading: your school textbook.</b> Ask your teacher which approved textbook your school uses${b.further?`, for example: ${b.further.map(esc).join('; ')}`:''}. Titles are given for reference only; Sakandire does not copy them.</div>`;
}
function read(id,i){
  const b=book(id),c=b&&b.chapters[i]; if(!c) return notFound();
  const key=id+'/'+i, bm=LS.get('bm',[]), on=bm.includes(key);
  LS.set('last',key);
  app.innerHTML=`<p><a href="#/book/${id}">← ${esc(b.title)}</a></p>
  <div class="toolbar"><button class="btn sm" id="fsm" aria-label="Smaller text">A−</button><button class="btn sm" id="fsp" aria-label="Bigger text">A+</button>
  <button class="btn sm" id="th">Theme: ${LS.get('theme','light')}</button><button class="btn sm" id="bm">${on?'🔖 Saved':'＋ Bookmark'}</button></div>
  <article class="reader"><h1>Chapter ${+i+1}: ${esc(c.title)}</h1><p>${tags(c)} <span class="muted" style="font-size:.85rem">Syllabus topic: ${esc(c.topic||c.title)}</span></p>
  ${c.html}
  <h2>End-of-chapter exercises</h2><p class="muted">Try each one first, then tap “Show answer”.</p>
  ${(c.ex||[]).map((e,k)=>`<div class="box"><p><b>Q${k+1}.</b> ${e.q}</p><details><summary>Show answer</summary><div>${e.a}</div></details></div>`).join('')}
  <div class="note"><b>Further reading: your school textbook</b>${b.further?` (e.g. ${b.further.map(esc).join('; ')})`:''} — chapter on “${esc(c.topic||c.title)}”.</div></article>
  <div class="row" style="justify-content:space-between;margin:16px 0">${i>0?`<a class="btn" href="#/read/${id}/${+i-1}">← Previous</a>`:'<span></span>'}${b.chapters[+i+1]?`<a class="btn pri" href="#/read/${id}/${+i+1}">Next chapter →</a>`:''}</div>`;
  $('#fsm').onclick=()=>{LS.set('fs',Math.max(13,LS.get('fs',17)-1));applyPrefs()};
  $('#fsp').onclick=()=>{LS.set('fs',Math.min(28,LS.get('fs',17)+1));applyPrefs()};
  $('#th').onclick=()=>{$('#themeBtn').click();$('#th').textContent='Theme: '+LS.get('theme')};
  $('#bm').onclick=()=>{let l=LS.get('bm',[]);l=l.includes(key)?l.filter(x=>x!==key):[...l,key];LS.set('bm',l);$('#bm').textContent=l.includes(key)?'🔖 Saved':'＋ Bookmark'};
  window.scrollTo(0,0);
}
function bookmarks(){
  const l=LS.get('bm',[]);
  app.innerHTML=`<h1>Bookmarks</h1>${l.length?l.map(k=>{const[id,i]=k.split('/'),b=book(id),c=b&&b.chapters[i];return c?`<a class="card" style="margin:8px 0" href="#/read/${k}"><h3>${esc(c.title)}</h3><p>${esc(b.title)}</p></a>`:''}).join(''):'<p class="muted">No bookmarks yet. Open a chapter and tap “＋ Bookmark”.</p>'}`;
}
const strip=h=>h.replace(/<svg[\s\S]*?<\/svg>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z]+;/g,' ').replace(/\s+/g,' ');
function search(q){
  q=q||'';
  app.innerHTML=`<h1>Search</h1><input id="q" type="search" placeholder="e.g. osmosis, mole, demand, tense" value="${esc(q)}" style="width:100%"><div id="res"></div>`;
  const inp=$('#q'),res=$('#res');
  const run=()=>{const t=inp.value.trim().toLowerCase();history.replaceState(null,'','#/search/'+encodeURIComponent(inp.value));if(t.length<2){res.innerHTML='<p class="muted">Type at least 2 letters.</p>';return}
    const out=[];BOOKS.forEach(b=>b.chapters.forEach((c,i)=>{const txt=strip(c.title+' '+c.html+' '+(c.ex||[]).map(e=>e.q+' '+e.a).join(' '));const p=txt.toLowerCase().indexOf(t);if(p>=0||c.title.toLowerCase().includes(t)){const s=Math.max(0,p-60);const snip=esc(txt.slice(s,p+t.length+80)).replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'ig'),m=>`<mark>${m}</mark>`);out.push(`<a class="card" style="margin:8px 0" href="#/read/${b.id}/${i}"><h3>${esc(c.title)}</h3><p>${esc(b.title)} · …${snip}…</p></a>`)}}));
    res.innerHTML=out.length?out.join(''):'<p class="muted">Nothing found. Try a shorter word.</p>'};
  inp.oninput=run;run();inp.focus();
}
function about(){
  app.innerHTML=`<h1>About Sakandire</h1><p><b>Sakandire</b> (Hausa for “secondary school”) is a free study companion for every Nigerian senior secondary student: light, offline-friendly and free.</p>
  <h2>Copyright and sources</h2><ul><li>All notes, diagrams and questions are original, written to follow the topic lists in the official WAEC WASSCE, NECO SSCE and JAMB UTME syllabuses. Post-UTME tests are set by each university and generally follow the UTME syllabus.</li><li>No text is copied from any textbook. Textbook titles are mentioned only as “further reading”.</li><li>Practice questions are <b>not</b> real past questions and Sakandire is not linked to WAEC, NECO, JAMB, any university, SHL or any employer.</li><li>Element data: IUPAC periodic table (names approved up to 2016; standard atomic weights abridged).</li><li>Maps: Nigeria state boundaries © geoBoundaries / GRID3, CC BY 4.0; country outlines from Natural Earth (public domain). Simplified for small screens, not for navigation.</li></ul>
  <p>Found a mistake? Please tell your teacher and open an issue on the project's GitHub page.</p>`;
}
function notFound(){app.innerHTML='<h1>Not found</h1><p><a href="#/">Go home</a></p>'}
const routes=[[/^#?\/?$/,home],[/^#\/library$/,library],[/^#\/book\/([\w-]+)$/,bookPage],[/^#\/read\/([\w-]+)\/(\d+)$/,read],[/^#\/bookmarks$/,bookmarks],[/^#\/search(?:\/(.*))?$/,m=>search(decodeURIComponent(m||''))],[/^#\/about$/,about],
 [/^#\/lab(?:\/(\w+))?$/,m=>window.Lab.route(app,m)],[/^#\/exam(?:\/(.*))?$/,m=>window.Exam.route(app,m)],[/^#\/grad(?:\/(.*))?$/,m=>window.Exam.grad(app,m)],[/^#\/ref(?:\/(\w+))?$/,m=>window.Ref.route(app,m)],[/^#\/careers(?:\/(\w+))?$/,m=>window.Careers.route(app,m)]];
function router(){
  if(window.Exam&&Exam.leaving&&!Exam.leaving())return;
  const h=location.hash||'#/';
  for(const[re,fn]of routes){const m=h.match(re);if(m){fn(...m.slice(1));break}}
  if(!routes.some(([re])=>re.test(h)))notFound();
  const t=h.split('/')[1]||'';document.querySelectorAll('.tabs a').forEach(a=>a.classList.toggle('on',a.dataset.tab===t||(t==='book'||t==='read')&&a.dataset.tab==='library'));
}
window.addEventListener('hashchange',router);router();
if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('sw.js');
})();
