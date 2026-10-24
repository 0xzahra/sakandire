/* Sakandire CBT practice simulation engine */
(function(){
const QB=window.QB||{}, NAMES={english:'Use of English',maths:'Mathematics',physics:'Physics',chemistry:'Chemistry',biology:'Biology',economics:'Economics'};
const L='ABCDE';
function shuffle(a,seed){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function pick(subj,n,mode){const all=QB[subj]||[];const pref=all.filter(q=>!q.m||q.m.includes(mode));const rest=all.filter(q=>!pref.includes(q));return shuffle(shuffle(pref).concat(shuffle(rest)).slice(0,n)).map(mix)}
function mix(q){const idx=shuffle(q.o.map((_,i)=>i));return Object.assign({},q,{o:idx.map(i=>q.o[i]),a:idx.indexOf(q.a)})}
let S=null, tick=null;
const Exam={};
Exam.leaving=()=>{if(S&&!S.done&&!location.hash.startsWith('#/exam/run')&&!location.hash.startsWith('#/grad/run')){if(!confirm('Leave this practice session? Your answers will be lost.')){history.back();return false}stop();S=null}return true};
function stop(){clearInterval(tick);tick=null;document.onkeydown=null}
const BAN='<p class="note" style="font-size:.85rem">🧪 <b>Practice simulation.</b> Original practice questions written by Sakandire — not real past questions, not affiliated with JAMB, WAEC, NECO, any university or employer.</p>';
Exam.route=function(app,arg){
  arg=arg||'';
  if(arg==='run'&&S) return render(app);
  const subs=Object.keys(NAMES).filter(s=>QB[s]);
  const cnt=s=>(QB[s]||[]).length;
  app.innerHTML=`<h1>Exam prep (CBT practice)</h1>${BAN}
  <div class="card" style="margin:10px 0"><h2>JAMB UTME-style</h2><p>Use of English is compulsory + pick 3 subjects. 2-hour timer, subject tabs, score scaled to 400.</p>
   <div class="row">${subs.filter(s=>s!=='english').map(s=>`<label><input type="checkbox" class="js" value="${s}"> ${NAMES[s]}</label>`).join(' ')}</div>
   <p class="muted" style="font-size:.85rem">The real UTME has 60 English + 40 per other subject. Sakandire v1 gives up to 25 per subject from its practice bank, still on the 2-hour clock.</p>
   <button class="btn pri" id="goJ">Start JAMB-style session</button></div>
  ${[['waec','WAEC WASSCE-style CBT objectives','One subject, 20 objective questions, 25 minutes.',25],['neco','NECO SSCE-style objectives','One subject, 20 objective questions, 25 minutes.',25],['putme','Post-UTME-style','Short and fast: one subject, 20 questions, 15 minutes.',15]].map(([m,t,d])=>`
  <div class="card" style="margin:10px 0"><h2>${t}</h2><p>${d}</p><div class="row"><select id="s_${m}">${subs.map(s=>`<option value="${s}">${NAMES[s]} (${cnt(s)} in bank)</option>`).join('')}</select><button class="btn pri" data-m="${m}">Start</button></div></div>`).join('')}
  <div class="card" style="margin:10px 0"><h2>💼 Graduate Trainee aptitude-style</h2><p>Numerical, verbal, abstract and situational judgement sections.</p><a class="btn pri" href="#/grad">Open Graduate Trainee Prep</a></div>
  <h2>How to use the CBT</h2><ul><li>Tap an option or press <span class="k">A</span>–<span class="k">D</span>. <span class="k">N</span> = next, <span class="k">P</span> = previous.</li><li>The palette shows answered (green) and unanswered questions. Tap a number to jump.</li><li>When time runs out the test submits itself. Then review every answer with its explanation.</li></ul>`;
  app.querySelector('#goJ').onclick=()=>{const ch=[...app.querySelectorAll('.js:checked')].map(x=>x.value);if(ch.length!==3)return alert('Please pick exactly 3 subjects (English is added for you).');
    start({title:'JAMB UTME-style practice simulation',mode:'jamb',time:120*60,scale:400,sections:['english',...ch].map(s=>({name:NAMES[s],qs:pick(s,25,'jamb')}))})};
  app.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{const m=b.dataset.m,s=app.querySelector('#s_'+m).value;
    start({title:{waec:'WAEC WASSCE-style',neco:'NECO SSCE-style',putme:'Post-UTME-style'}[m]+' practice simulation — '+NAMES[s],mode:m,time:(m==='putme'?15:25)*60,scale:100,sections:[{name:NAMES[s],qs:pick(s,20,m)}]})});
};
function start(cfg){
  S=Object.assign({sec:0,idx:0,done:false,ans:cfg.sections.map(x=>x.qs.map(()=>null))},cfg);
  S.end=Date.now()+(cfg.time||cfg.sections[0].time)*1000;
  location.hash=(cfg.grad?'#/grad/run':'#/exam/run');
  if(location.hash===(cfg.grad?'#/grad/run':'#/exam/run'))render(document.getElementById('app'));
}
Exam.start=start;
function fmt(s){s=Math.max(0,Math.round(s));const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return(h?h+':':'')+String(m).padStart(2,'0')+':'+String(x).padStart(2,'0')}
function render(app){
  if(S.done) return report(app);
  const sec=S.sections[S.sec], q=sec.qs[S.idx], a=S.ans[S.sec][S.idx];
  const answered=S.ans.flat().filter(x=>x!==null).length,total=S.ans.flat().length;
  app.innerHTML=`<div class="card" style="padding:10px"><div class="row" style="justify-content:space-between"><b style="font-size:.9rem">${esc(S.title)}</b><span class="timer" id="tm">--:--</span></div>
  <div class="row muted" style="font-size:.8rem;justify-content:space-between"><span>Candidate: Practice user · No. SKD-${String(Date.now()).slice(-6)}</span><span>Answered ${answered}/${total}</span></div></div>
  ${S.sections.length>1?`<div class="row" style="margin:8px 0">${S.sections.map((x,i)=>`<button class="btn sm ${i===S.sec?'pri':''}" data-sec="${i}" ${S.noBack&&i!==S.sec?'disabled':''}>${esc(x.name)}</button>`).join('')}</div>`:''}
  ${S.grad&&sec.time?`<p class="muted">Section ${S.sec+1} of ${S.sections.length}: ${esc(sec.name)}. Section timer running. ${S.noBack?'You cannot go back to earlier questions in this section.':''}</p>`:''}
  <div class="card" style="margin:8px 0"><p class="muted" style="margin:0">Question ${S.idx+1} of ${sec.qs.length}</p>${q.ctx?`<div class="box">${q.ctx}</div>`:''}<p style="font-size:1.05rem"><b>${q.q}</b></p>
  ${q.o.map((o,i)=>`<button class="btn opt ${a===i?'sel':''}" data-o="${i}"><b>${L[i]}.</b> ${o}</button>`).join('')}</div>
  <div class="row" style="justify-content:space-between"><button class="btn" id="pv" ${S.idx===0||S.noBack?'disabled':''}>◀ Previous (P)</button><button class="btn" id="nx" ${S.idx===sec.qs.length-1?'disabled':''}>Next (N) ▶</button></div>
  ${S.noBack?'':`<h3 style="margin:12px 0 4px;font-size:.95rem">Question palette</h3><div class="qnav">${sec.qs.map((_,i)=>`<button data-j="${i}" class="${S.ans[S.sec][i]!==null?'ans':''} ${i===S.idx?'cur':''}">${i+1}</button>`).join('')}</div>`}
  <p style="margin-top:14px"><button class="btn pri" id="sub">${S.grad&&S.sec<S.sections.length-1?'Finish section →':'Submit'}</button></p>
  <p class="muted" style="font-size:.8rem">Keys: A–${L[q.o.length-1]} choose · N next · P previous. Practice simulation only.</p>`;
  const go=(i)=>{if(i<0||i>=sec.qs.length)return;if(S.noBack&&i<S.idx)return;S.idx=i;render(app)};
  app.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{S.ans[S.sec][S.idx]=+b.dataset.o;render(app)});
  app.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>go(+b.dataset.j));
  app.querySelectorAll('[data-sec]').forEach(b=>b.onclick=()=>{S.sec=+b.dataset.sec;S.idx=0;render(app)});
  app.querySelector('#pv').onclick=()=>go(S.idx-1);app.querySelector('#nx').onclick=()=>go(S.idx+1);
  app.querySelector('#sub').onclick=()=>{
    if(S.grad&&S.sec<S.sections.length-1){if(confirm('Finish this section? You cannot return to it.'))nextSection(app);return}
    const un=total-S.ans.flat().filter(x=>x!==null).length;
    if(confirm(`Submit now?${un?` You have ${un} unanswered question(s).`:''}`))finish(app)};
  document.onkeydown=e=>{if(e.target.tagName==='INPUT')return;const k=e.key.toUpperCase();const oi=L.indexOf(k);
    if(oi>=0&&oi<q.o.length){S.ans[S.sec][S.idx]=oi;render(app)}else if(k==='N')go(S.idx+1);else if(k==='P')go(S.idx-1)};
  if(!tick)tick=setInterval(()=>{const el=document.getElementById('tm');const left=(S.end-Date.now())/1000;if(el){el.textContent=fmt(left);el.style.color=left<300?'var(--bad)':''}
    if(left<=0){if(S.grad&&S.sec<S.sections.length-1){alert('Time up for this section.');nextSection(app)}else{alert('Time up! Your answers have been submitted.');finish(app)}}},500);
  const el=document.getElementById('tm');if(el)el.textContent=fmt((S.end-Date.now())/1000);
}
function nextSection(app){S.sec++;S.idx=0;if(S.sections[S.sec].time)S.end=Date.now()+S.sections[S.sec].time*1000;render(app)}
function finish(app){stop();S.done=true;const all=JSON.parse(localStorage.getItem('sakandire.hist')||'[]');
  const r=score();all.unshift({t:S.title,d:new Date().toLocaleString(),s:r.text});localStorage.setItem('sakandire.hist',JSON.stringify(all.slice(0,20)));render(app)}
function score(){const per=S.sections.map((x,i)=>{const c=x.qs.filter((q,j)=>S.ans[i][j]===q.a).length;return{name:x.name,c,n:x.qs.length,pct:Math.round(c/x.qs.length*100)}});
  let text;if(S.scale===400)text=`${per.reduce((t,p)=>t+p.pct,0)} / 400`;else{const c=per.reduce((t,p)=>t+p.c,0),n=per.reduce((t,p)=>t+p.n,0);text=`${c} / ${n} (${Math.round(c/n*100)}%)`}return{per,text}}
function report(app){
  const r=score();
  app.innerHTML=`<h1>Score report</h1>${BAN}<div class="card"><p class="muted">${esc(S.title)}</p><p style="font-size:2rem;margin:.2em 0"><b>${r.text}</b></p>
  ${r.per.map(p=>`<p>${esc(p.name)}: ${p.c}/${p.n} ${S.scale===400?`→ <b>${p.pct}</b>/100`:`(${p.pct}%)`}</p>`).join('')}
  ${S.scale===400?'<p class="muted" style="font-size:.85rem">Scaled like the UTME: each subject is turned into a mark out of 100 and the four are added. This is a practice estimate, not a prediction of your real score.</p>':''}</div>
  <div class="row" style="margin:10px 0"><a class="btn pri" href="${S.grad?'#/grad':'#/exam'}">New session</a></div>
  <h2>Review</h2>${S.sections.map((x,i)=>`<h3>${esc(x.name)}</h3>`+x.qs.map((q,j)=>{const u=S.ans[i][j];return`<div class="card" style="margin:8px 0">${q.ctx?`<div class="box">${q.ctx}</div>`:''}<p><b>${j+1}. ${q.q}</b></p>${q.o.map((o,k)=>`<div class="btn opt ${k===q.a?'right':k===u?'wrong':''}">${L[k]}. ${o}${k===q.a?' ✔':''}${k===u&&k!==q.a?' ✘ your answer':''}</div>`).join('')}${u===null?'<p class="muted">Not answered.</p>':''}<p><b>Explanation:</b> ${q.e}</p></div>`}).join('')).join('')}`;
  window.scrollTo(0,0);
}
/* Graduate Trainee Prep */
Exam.grad=function(app,arg){
  if(arg==='run'&&S)return render(app);
  const G=window.GRAD||{sections:[]};
  app.innerHTML=`<h1>💼 Graduate Trainee Prep</h1>${BAN}${G.guide||''}
  <h2>Practice</h2>${G.sections.map((s,i)=>`<div class="card" style="margin:8px 0"><h3>${esc(s.name)}</h3><p>${s.qs.length} questions · ${s.time/60} min · ${s.noBack?'no going back':'free navigation'}</p><p class="muted">${s.tip}</p><button class="btn pri" data-g="${i}">Start this section</button></div>`).join('')}
  <div class="card"><h3>Full assessment (all sections)</h3><p>Each section has its own timer and you move forward only, like many online graduate tests.</p><button class="btn pri" id="gall">Start full assessment</button></div>`;
  const mk=s=>({name:s.name,qs:s.qs,time:s.time});
  app.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{const s=G.sections[+b.dataset.g];start({title:'Graduate aptitude-style practice simulation — '+s.name,grad:true,noBack:s.noBack,time:s.time,scale:100,sections:[mk(s)]})});
  app.querySelector('#gall').onclick=()=>start({title:'Graduate aptitude-style full practice simulation',grad:true,noBack:true,time:G.sections[0].time,scale:100,sections:G.sections.map(mk)});
};
window.Exam=Exam;
})();
