/* Courses & Careers */
(function(){
const K=window.CAREERS, esc=s=>window.esc(s);
const SUBNAME=k=>K.SUB[k]||k;
const WARN='<p class="note">⚠️ <b>Requirements vary by university and change from year to year.</b> Always confirm your course\'s UTME subjects, O\'Level subjects and any special conditions in the official JAMB brochure on <a href="https://ibass.jamb.gov.ng" target="_blank" rel="noopener">ibass.jamb.gov.ng</a> and on your chosen school\'s Post-UTME page before you register.</p>';
function utmeText(u){const p=['English Language'].concat(u.req.map(SUBNAME));(u.any||[]).forEach(g=>p.push(`${g.n===1?'one':g.n===2?'two':'three'} of: ${g.from.filter(x=>!u.req.includes(x)).map(SUBNAME).join(', ')}`));return p.join(' + ')}
function fits(u,chosen){ // chosen = 3 non-English subject keys
  let rest=chosen.slice();for(const r of u.req){const i=rest.indexOf(r);if(i<0)return false;rest.splice(i,1)}
  const groups=u.any||[];
  const tryG=(gi,rem)=>{if(gi===groups.length)return rem.length===0;const g=groups[gi];const cand=rem.filter(x=>g.from.includes(x));
    const combos=(arr,n)=>n===0?[[]]:arr.flatMap((x,i)=>combos(arr.slice(i+1),n-1).map(c=>[x,...c]));
    for(const c of combos(cand,g.n)){const r2=rem.filter(x=>!c.includes(x));if(tryG(gi+1,r2))return true}return false};
  return tryG(0,rest)}
function card(c){return `<details class="card" style="margin:8px 0"><summary>${esc(c.name)} <span class="tag">${esc(c.fac)}</span></summary>
 <p>${esc(c.desc)}</p><p><b>UTME subjects:</b> ${utmeText(c.utme)}</p><p><b>O'Level:</b> ${esc(c.olevel)}</p><p><b>Duration:</b> ${esc(c.years)}</p><p><b>Careers:</b> ${esc(c.careers)}</p>
 ${curr(c.name)}${c.tech?`<details><summary>💻 Tech careers this degree can lead to</summary><ul>${K.TECH.map(([n,d])=>`<li><b>${esc(n)}</b> — ${esc(d)}</li>`).join('')}</ul><p class="muted" style="font-size:.8rem">${esc(K.SRC)}</p></details>`:''}</details>`}
function curr(n){const R=window.CURRICULA&&window.CURRICULA[n];if(!R)return'';
 return `<details><summary>📅 Year-by-year courses (typical; varies by school)</summary>${R.map((y,i)=>{const[a,b]=y.split(' | ');return `<div class="yr"><h4>Year ${i+1} (${(i+1)*100} level)</h4>${b!==undefined?`<p><b>1st semester:</b> ${esc(a)}</p><p><b>2nd semester:</b> ${esc(b)}</p>`:`<p>${esc(a)}</p>`}</div>`}).join('')}<p class="muted small">${esc(window.CURR_NOTE)}</p></details>`}
const FAC=[
['Life Sciences (or Biological Sciences)','Biology; Applied Biology; Microbiology; Biochemistry; Plant Biology/Botany; Zoology; Genetics and Biotechnology','BSc Biology, BSc Microbiology, BSc Biochemistry…'],
['Physical Sciences','Physics; Chemistry; Industrial Chemistry; Mathematics; Statistics; Geology; Geophysics','BSc Physics, BSc Industrial Chemistry, BSc Statistics…'],
['Computing (newer schools) or inside Physical Sciences','Computer Science; Software Engineering; Information Technology; Cyber Security; Information Systems; Data Science','BSc Computer Science, BSc Cyber Security…'],
['Basic Medical Sciences (in a College of Health/Medical Sciences)','Anatomy; Physiology; Medical Biochemistry; Pharmacology (some schools)','BSc Anatomy, BSc Physiology; also the pre-clinical years of MBBS'],
['Clinical Sciences','Internal Medicine; Surgery; Paediatrics; Obstetrics & Gynaecology; Community Medicine; Psychiatry; Radiology; Anaesthesia; Ophthalmology','MBBS (taught across these departments in the clinical years)'],
['Dentistry','Restorative Dentistry; Oral Surgery; Child Dental Health; Preventive Dentistry','BDS'],
['Pharmaceutical Sciences','Pharmaceutics; Pharmaceutical Chemistry; Pharmacognosy; Pharmacology; Clinical Pharmacy; Pharmaceutical Microbiology','PharmD'],
['Allied Health / Health Sciences','Nursing Science; Medical Laboratory Science; Medical Radiography; Physiotherapy; Optometry; Nutrition and Dietetics; Public/Environmental Health; Health Information Management','BNSc, BMLS, BSc Radiography, DPT, OD…'],
['Engineering','Civil; Mechanical; Electrical/Electronic; Chemical; Petroleum; Computer; Mechatronics; Agricultural; Aerospace; Metallurgical and Materials','BEng (B.Eng.) in each'],
['Environmental Sciences (or Environmental Design)','Architecture; Building; Quantity Surveying; Estate Management; Urban and Regional Planning; Surveying and Geoinformatics; Fine/Industrial Design (some schools)','BSc Architecture (+MSc), BSc Building…'],
['Agriculture','Animal Science; Crop Science; Soil Science; Agricultural Economics; Agricultural Extension; Fisheries; Forestry; Food Science (some schools)','BAgric or BSc in each'],
['Veterinary Medicine','Veterinary Anatomy; Physiology; Pathology; Medicine; Surgery; Public Health','DVM'],
['Arts (or Humanities)','English and Literary Studies; History and International Studies; Linguistics; French; Philosophy; Religious Studies; Theatre Arts; Music; Nigerian languages','BA in each'],
['Social Sciences','Economics; Political Science; Sociology; Psychology; Geography; Mass Communication (some schools); Criminology; Social Work; Peace and Conflict','BSc in each'],
['Management Sciences (or Administration)','Accounting; Banking and Finance; Business Administration; Marketing; Insurance; Actuarial Science; Public Administration; Taxation','BSc in each'],
['Law','Private and Property Law; Public Law; Commercial and Industrial Law; International Law; Islamic Law (some schools)','LLB (5 years), then Nigerian Law School'],
['Education','Science Education; Arts and Social Science Education; Educational Management; Guidance and Counselling; Library Science; Human Kinetics','BSc(Ed), BA(Ed), BEd']];
function faculties(app,tabs){app.innerHTML=`<h1>How universities are organised</h1>${tabs}
 <div class="emph"><b>University → Faculty (or College/School) → Department → Degree programme.</b><br>A <b>faculty</b> is a big family of related subjects with a Dean. A <b>department</b> is one subject area with a Head of Department (HOD); it runs one or more <b>degree programmes</b>. Example: University of Lagos → Faculty of Science → Department of Microbiology → BSc Microbiology. Big health schools group faculties into a <b>College</b> (e.g. College of Medicine → Faculties of Basic Medical Sciences and Clinical Sciences → MBBS).</div>
 <svg viewBox="0 0 340 120" role="img" aria-label="University to faculty to department to degree"><g font-size="11" text-anchor="middle">${['University','Faculty','Department','Degree'].map((t,i)=>`<rect x="${8+i*83}" y="40" width="74" height="36" rx="8" fill="${['#1f6f4a','#2f8f5f','#e07b24','#2f6fd6'][i]}"/><text x="${45+i*83}" y="62" fill="#fff">${t}</text>${i<3?`<path d="M${82+i*83} 58h8" stroke="#888" stroke-width="2"/>`:''}`).join('')}</g><text x="170" y="100" font-size="10" text-anchor="middle" fill="#888">e.g. UNILAG → Science → Microbiology → BSc Microbiology</text></svg>
 ${FAC.map(([f,d,g])=>`<details class="card" style="margin:6px 0"><summary><b>Faculty of ${esc(f)}</b></summary><p><b>Departments:</b> ${d.split('; ').map(x=>`<span class="chip">${esc(x)}</span>`).join(' ')}</p><p><b>Degrees:</b> ${esc(g)}</p></details>`).join('')}
 <p class="note">Structure <b>varies by university</b>: a course in the Faculty of Science at one school may sit in Life Sciences, Agriculture or Computing at another (e.g. Mass Communication may be in Arts, Social Sciences or its own faculty). Check the school's website or brochure.</p>${WARN}`}
const C={};
C.route=function(app,sub){
  const T=[['','Courses'],['check','Check my combination'],['finder','Career finder'],['faculties','Faculties'],['path','Degree length'],['pg','Graduate study'],['routes','Diplomas & other routes'],['dir','Schools directory']];
  const tabs=`<div class="row" style="margin:8px 0">${T.map(([k,t])=>`<a class="btn sm ${(sub||'')===k?'pri':''}" href="#/careers${k?'/'+k:''}">${t}</a>`).join('')}</div>`;
  if(sub==='finder')return finder(app,tabs);if(sub==='check')return check(app,tabs);if(sub==='path'||sub==='pg')return path(app,tabs,sub);if(sub==='faculties')return faculties(app,tabs);if(sub==='routes')return routes(app,tabs);if(sub==='dir')return dir(app,tabs);
  app.innerHTML=`<h1>🎓 Courses & Careers</h1><p>Many students pick the wrong JAMB subjects and drift away from the career they wanted. Start here.</p>${tabs}${WARN}
  <input id="cq" type="search" placeholder="Search a course or career, e.g. nurse, law, data" style="width:100%"><select id="cf" style="margin-top:6px;width:100%"><option value="">All faculties</option>${[...new Set(K.COURSES.map(c=>c.fac.split(' / ')[0]))].sort().map(f=>`<option>${esc(f)}</option>`).join('')}</select><p class="muted" id="cn"></p><div id="cl"></div>`;
  const q=app.querySelector('#cq'),l=app.querySelector('#cl'),n=app.querySelector('#cn');
  const fs=app.querySelector('#cf');const run=()=>{const t=q.value.toLowerCase(),fv=fs.value;const r=K.COURSES.filter(c=>(!fv||c.fac.startsWith(fv))&&(c.name+c.fac+c.careers+c.desc+(c.tech?K.TECH.map(x=>x[0]).join(' '):'')).toLowerCase().includes(t));n.textContent=r.length+' courses';l.innerHTML=r.map(card).join('')};
  q.oninput=run;fs.onchange=run;run();
};
function finder(app,tabs){
  const Q=[['health','I want to care for sick people or keep people healthy'],['science','I enjoy Biology, Chemistry or Physics experiments'],['numbers','I like Maths and solving number puzzles'],['tech','I like computers, phones and building apps'],['build','I like designing or fixing machines, buildings or gadgets'],['money','I am interested in money, business or trading'],['people','I like working with and helping people'],['words','I love reading, writing, debating or speaking'],['law','I care about justice, rules and how government works'],['nature','I like farming, animals, plants or the environment'],['art','I love drawing, design, music, drama or film']];
  app.innerHTML=`<h1>Career finder</h1>${tabs}<p>Tick everything that sounds like you. Be honest — there are no wrong answers.</p>
  ${Q.map(([k,t])=>`<label class="card" style="display:block;margin:6px 0"><input type="checkbox" value="${k}"> ${t}</label>`).join('')}
  <button class="btn pri" id="fd">Show my suggestions</button><div id="fr"></div>${WARN}`;
  app.querySelector('#fd').onclick=()=>{const ch=[...app.querySelectorAll('input:checked')].map(x=>x.value);if(!ch.length)return alert('Tick at least one.');
    const sc=K.COURSES.map(c=>({c,s:c.tags.filter(t=>ch.includes(t)).length+c.tags.slice(0,1).filter(t=>ch.includes(t)).length*0.5})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s).slice(0,8);
    app.querySelector('#fr').innerHTML=`<h2>Courses to look at</h2><p class="muted">Open each to see the subject combination you will need from SS1/SS2.</p>${sc.map(x=>card(x.c)).join('')}<p>Next: <a href="#/careers/check">check your own subject combination</a>.</p>`};
}
function check(app,tabs){
  const keys=Object.keys(K.SUB);
  app.innerHTML=`<h1>Check my combination</h1>${tabs}<p>Use of English is compulsory. Pick your other 3 UTME subjects.</p>
  <div class="card"><p><b>1.</b> English Language ✔</p>${[2,3,4].map(i=>`<p><b>${i}.</b> <select class="cs"><option value="">— choose —</option>${keys.map(k=>`<option value="${k}">${K.SUB[k]}</option>`).join('')}</select></p>`).join('')}<button class="btn pri" id="ck">Check</button></div><div id="cr"></div>${WARN}`;
  app.querySelector('#ck').onclick=()=>{const ch=[...app.querySelectorAll('.cs')].map(s=>s.value);if(ch.some(x=>!x)||new Set(ch).size<3)return alert('Choose 3 different subjects.');
    const ok=K.COURSES.filter(c=>fits(c.utme,ch));
    app.querySelector('#cr').innerHTML=`<h2>${ok.length} course(s) usually accept English + ${ch.map(SUBNAME).join(', ')}</h2>${ok.length?ok.map(card).join(''):'<p>No course in our list matches this exact combination. Look at the courses you want and adjust your subjects.</p>'}`};
}
function path(app,tabs,sub){
  app.innerHTML=`<h1>The Nigerian degree path</h1>${tabs}
  <div class="card"><h2>1. Getting in</h2><ul><li><b>UTME (JAMB)</b>: 4 subjects including Use of English, scored out of 400. Then the school's <b>Post-UTME</b> screening (a test or credential screening).</li><li><b>O'Level</b>: usually five credits (WAEC/NECO/NABTEB) including English and Mathematics, at not more than two sittings. Medicine and some courses prefer one sitting.</li><li><b>Direct Entry (DE)</b>: with A-Level, IJMB, JUPEB, OND, NCE or HND you can apply through JAMB DE and usually start at <b>200 level</b> (one year shorter).</li></ul></div>
  <div class="card"><h2>2. How long is the degree?</h2><table class="ft" style="font-size:.9rem"><tr><th style="text-align:left">Programme</th><th style="text-align:left">Typical length</th></tr>
  <tr><td style="text-align:left">Most BSc / BA (sciences, arts, social and management sciences)</td><td style="text-align:left">4 years</td></tr>
  <tr><td style="text-align:left">Engineering, Agriculture, Nursing, Medical Lab Science, Radiography</td><td style="text-align:left">5 years</td></tr>
  <tr><td style="text-align:left">Architecture</td><td style="text-align:left">4-year BSc + 2-year MSc to qualify (some schools: 5 years)</td></tr>
  <tr><td style="text-align:left">Pharmacy (PharmD), Physiotherapy (DPT), Optometry (OD)</td><td style="text-align:left">6 years (NUC upgraded these from 2025 for new students)</td></tr>
  <tr><td style="text-align:left">Law (LLB)</td><td style="text-align:left">5 years + 1 year at the Nigerian Law School → call to the Bar</td></tr>
  <tr><td style="text-align:left">Medicine (MBBS), Dentistry, Veterinary Medicine</td><td style="text-align:left">6 years (+ 1 year housemanship for doctors and dentists)</td></tr></table>
  <p><b>SIWES / IT</b>: the Students Industrial Work Experience Scheme. Engineering, sciences, computing, agriculture and many management courses include an industrial attachment, often 3–12 months (commonly 6 months in 300 or 400 level). Health courses have clinical postings instead.</p>
  <p><b>NYSC</b>: after graduating, full-time graduates under 30 do one year of National Youth Service Corps. Most employers ask for the NYSC discharge or exemption certificate. Doctors usually do NYSC after housemanship; lawyers after Law School.</p></div>
  <div class="card"><h2>3. After the first degree: postgraduate options</h2><ul>
  <li><b>PGD (Postgraduate Diploma)</b> — about 1 year. For people with HND, a third-class degree, or a degree in a different field who want to switch or qualify for a Master's.</li>
  <li><b>Academic Master's (MSc, MA)</b> — usually 18 months to 2 years, with coursework and a research thesis. Often needs at least a Second Class Lower (some schools want 2:1). It is the normal road to a PhD.</li>
  <li><b>Professional Master's (MBA, MPH, MPA, LLM and similar)</b> — about 1–2 years, career-focused with more coursework and projects. Good for promotion and changing roles. Some are not accepted for direct PhD entry, so check.</li>
  <li><b>MPhil</b> — about 2 years of research. Often a bridge: an MPhil/PhD route for those whose Master's grade was not high enough for direct PhD.</li>
  <li><b>PhD</b> — usually at least 3 years of original research after a Master's (many schools ask for a Master's average around 60% / 4.0 on a 5-point CGPA). Needed for university lecturing and senior research.</li></ul>
  <p class="muted" style="font-size:.85rem">Durations and entry grades differ between universities. Check the school's postgraduate prospectus.</p></div>${WARN}`;
  const h=app.innerHTML,k=h.indexOf('<div class="card"><h2>3.');
  if(sub==='pg'&&k>0)app.innerHTML=h.slice(0,h.indexOf('</h1>')).replace('The Nigerian degree path','Graduate study: PGD, Master\'s, MPhil, PhD')+'</h1>'+tabs+h.slice(k).replace('3. After the first degree: postgraduate options','After the first degree');
  else if(k>0)app.innerHTML=h.slice(0,k)+'<p><a class="btn" href="#/careers/pg">Next: graduate study (PGD, Master\'s, PhD) →</a></p>'+WARN;
}
function routes(app,tabs){
  app.innerHTML=`<h1>Diplomas & other routes</h1>${tabs}<p>University is not the only road. These routes lead to good careers and many can take you to a degree later.</p>
  <div class="card"><h2>🏭 Polytechnics: OND and HND</h2><ul><li><b>OND (National Diploma)</b>: 2 years, followed by a compulsory <b>1-year industrial training (IT)</b> before HND.</li><li><b>HND (Higher National Diploma)</b>: another 2 years. HND holders do NYSC.</li><li>Admission into OND is through <b>JAMB UTME</b> (polytechnic cut-off marks are usually lower than universities').</li><li><b>Onward:</b> OND holders can enter university by Direct Entry (often 200 level). HND holders usually do a <b>PGD</b> before a Master's, or some universities admit them via DE.</li></ul></div>
  <div class="card"><h2>🏫 Colleges of Education: NCE</h2><ul><li><b>NCE (Nigeria Certificate in Education)</b>: 3 years, trains teachers for primary and junior secondary school. Admission through JAMB UTME.</li><li>NCE holders can enter a university B.Ed/B.Sc(Ed) programme by Direct Entry, usually at 200 level.</li></ul></div>
  <div class="card"><h2>🎓 Routes into 200 level</h2><ul><li><b>JUPEB</b> (Joint Universities Preliminary Examinations Board) and <b>IJMB</b> (Interim Joint Matriculation Board): about 1-year A-Level-type programmes. Good results let you apply through JAMB <b>Direct Entry</b> to start at 200 level.</li><li><b>University pre-degree / foundation / basic studies</b>: some universities run these for their own students; rules on direct entry differ.</li><li><b>University diploma</b> programmes (often 2 years) in some universities can also lead to DE admission.</li><li>You still register with JAMB (DE form) even when you have JUPEB, IJMB, OND or NCE.</li></ul></div>
  <div class="card"><h2>🩺 Nursing and midwifery</h2><ul><li><b>General (Basic) Nursing</b> at a <b>School/College of Nursing</b>: about 3 years. Pass the Nursing and Midwifery Council of Nigeria (NMCN) exam to become a <b>Registered Nurse (RN)</b>. Many schools are now upgrading to give a <b>National Diploma/HND-type nursing award</b> as well; check each school.</li><li><b>Basic Midwifery</b>: about 3 years → Registered Midwife (RM). <b>Post-Basic</b> programmes (midwifery, psychiatric, perioperative, etc.) take about 1–2 years after RN.</li><li><b>BNSc</b> at a university: 5 years, through JAMB UTME (English, Biology, Chemistry, Physics). Graduates also sit NMCN exams and become RN/RM.</li><li>Typical O'Level: five credits in English, Mathematics, Biology, Chemistry and Physics, at not more than two sittings.</li><li>Many nursing schools sell their <b>own forms</b> and run an entrance exam; some now also require JAMB. Follow the school's official website only.</li></ul></div>
  <div class="card"><h2>🏥 Health technology colleges</h2><p>Colleges/Schools of Health Technology train middle-level health workers: <b>CHEW</b> (Community Health Extension Worker, 3-year diploma), <b>JCHEW</b> (2-year certificate), Pharmacy Technician, Medical Laboratory Technician, Dental Surgery Technician, Health Information Management, Environmental Health and more. Some programmes are ND/HND under NBTE and use JAMB; certificate programmes often use the school's own form.</p></div>
  <div class="card"><h2>📍 Kano examples</h2><ul><li><b>Kano State College of Nursing Sciences</b> (often called the Kano State College of Nursing and Midwifery): schools of nursing at <b>Kano</b> and <b>Madobi</b>; schools of basic midwifery at <b>Dambatta</b> and <b>Gwarzo</b>; post-basic midwifery at <b>Gezawa</b> (as listed by NMCN; entrance exams in 2025 held across Kano, Madobi, Dambatta and Gwarzo).</li><li><b>Kano State College of Health Sciences and Technology (KASCOHSAT)</b>: School of Health Technology <b>Kano</b>, School of Health Technology <b>Bebeji</b>, and School of Hygiene <b>Kano</b>. Courses include CHEW, JCHEW, Pharmacy Technician, Dental Surgery Technician, Medical Lab Technician and ND programmes. Its ND programmes require UTME (with the school as first choice); its 2026/2027 portal (kascohsat.edu.ng) was open 13–27 October 2026.</li><li>Private nursing colleges approved by NMCN in Kano include Nafisatu College of Nursing Sciences (Kwankwaso, Madobi LGA), Dansharif College of Nursing Sciences and Aminu Dabo College of Nursing and Midwifery.</li><li>University route: <b>Bayero University Kano</b> runs BNSc Nursing Science.</li></ul></div>
  <div class="note">⚠️ <b>Beware of fake form sellers.</b> Many websites and phone numbers claim to sell "admission forms" for nursing and health schools. Buy forms only through the school's official website or office, and check approvals on <b>nmcn.gov.ng</b> (nursing), <b>nbte.gov.ng</b> (polytechnics and health technology) and <b>ncce.gov.ng</b> (colleges of education).</div>${WARN}`;
}
function dir(app,tabs){
  app.innerHTML=`<h1>Tertiary institutions directory</h1>${tabs}<p class="muted" id="dm">Loading…</p>
  <div class="row"><input id="dq" type="search" placeholder="Search name or town" style="flex:1"><select id="ds"><option value="">All states</option></select><select id="dt"><option value="">All types</option></select></div><p id="dn" class="muted"></p><div id="dl"></div>`;
  fetch('data/institutions.json').then(r=>r.json()).then(D=>{
    const I=D.items,$=s=>app.querySelector(s);
    [...new Set(I.map(i=>i.s).filter(Boolean))].sort().forEach(s=>$('#ds').insertAdjacentHTML('beforeend',`<option>${esc(s)}</option>`));
    [...new Set(I.map(i=>i.t))].sort().forEach(s=>$('#dt').insertAdjacentHTML('beforeend',`<option>${esc(s)}</option>`));
    const u=I.filter(i=>/university/i.test(i.t)).length;
    $('#dm').innerHTML=`${I.length} institutions (${u} universities). <b>Last checked: ${esc(D.checked)}</b>. Sources: ${Object.values(D.sources).map(esc).join(' · ')}. Lists change often — always confirm on the official NUC, NBTE, NCCE and NMCN websites.`;
    const run=()=>{const q=$('#dq').value.toLowerCase(),s=$('#ds').value,t=$('#dt').value;const r=I.filter(i=>(!s||i.s===s)&&(!t||i.t===t)&&(i.n+' '+i.c).toLowerCase().includes(q));
      $('#dn').textContent=r.length+' shown';$('#dl').innerHTML=r.slice(0,300).map(i=>`<div class="card" style="margin:6px 0;padding:10px"><b>${esc(i.n)}</b><br><span class="tag">${esc(i.t)}</span> <span class="muted">${esc([i.c,i.s].filter(Boolean).join(', '))}${i.y?' · est. '+esc(i.y):''}</span>${i.w?` · <a href="${esc(i.w)}" target="_blank" rel="noopener">website</a>`:''}</div>`).join('')+(r.length>300?'<p class="muted">Showing first 300. Narrow your search.</p>':'')};
    ['#dq','#ds','#dt'].forEach(x=>$(x).oninput=run);run()}).catch(()=>{app.querySelector('#dm').textContent='Could not load the directory. Connect once to download it for offline use.'});
}
window.Careers=C;
})();
