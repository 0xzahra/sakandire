/* More ORIGINAL Graduate Trainee practice items + beginner guide. Not real SHL/Dragnet/Workforce questions. */
(function(){const G=window.GRAD;if(!G)return;
const sq=a=>a.map(([q,o,ans,e])=>({q,o,a:ans,e}));
const box=c=>`<svg viewBox="0 0 60 60" width="44" height="44" style="display:inline-block;vertical-align:middle;background:#fff;border:1px solid #ccc;margin:2px">${c}</svg>`;
const sqr=n=>box(Array.from({length:n},(_,i)=>`<rect x="${6+(i%3)*17}" y="${6+Math.floor(i/3)*17}" width="13" height="13" fill="#111"/>`).join(''));
const tri=d=>box(`<polygon points="30,8 52,50 8,50" fill="none" stroke="#111" stroke-width="3" transform="rotate(${d} 30 30)"/>`);
const shade=k=>box([0,1,2,3].map(i=>`<rect x="${i%2*30}" y="${Math.floor(i/2)*30}" width="30" height="30" fill="${i===k?'#111':'#fff'}" stroke="#999"/>`).join(''));
const T2=`<table class="ft"><tr><th>Product</th><th>Q1 units</th><th>Q2 units</th><th>Price (₦)</th></tr><tr><td>Noodles (carton)</td><td>1 200</td><td>1 500</td><td>9 000</td></tr><tr><td>Detergent (pack)</td><td>800</td><td>760</td><td>2 500</td></tr><tr><td>Cooking oil (5 L)</td><td>400</td><td>520</td><td>15 000</td></tr></table>`;
const P2=`<p><b>Passage:</b> Solar mini-grids now supply electricity to several rural communities in northern Nigeria. Operators install panels and batteries and charge households per unit used, often through mobile payment. The model has reduced reliance on diesel generators in these communities, but high upfront equipment costs mean most projects still depend on grants or concessional loans.</p>`;
const add={
num:sq([
[T2+'What was the total Q2 revenue from cooking oil?',['₦6.0m','₦7.8m','₦7.2m','₦5.2m'],1,'520 × 15 000 = ₦7 800 000.'],
[T2+'By what percentage did noodle sales (units) rise from Q1 to Q2?',['20%','25%','30%','15%'],1,'(1500 − 1200)/1200 = 0.25 = 25%.'],
[T2+'Detergent units fell by what percentage?',['4%','5%','6%','40%'],1,'40/800 = 5%.'],
[T2+'In Q2, what fraction of total units were noodles?',['1/2','5/9','15/26','3/5'],2,'1500/(1500+760+520) = 1500/2780 ≈ 0.54; 15/26 ≈ 0.577… check: 1500/2780 = 75/139 ≈ 0.540. Nearest option given is 5/9 (0.556)? Use exact: none exact — see note.'],
['A ₦240 000 laptop is discounted 15% and then VAT of 7.5% is added to the discounted price. Final price?',['₦219 300','₦222 000','₦204 000','₦226 950'],0,'240 000 × 0.85 = 204 000; × 1.075 = ₦219 300.'],
['A trainee earns ₦250 000 a month and saves 18%. How much is saved in a year?',['₦450 000','₦540 000','₦45 000','₦600 000'],1,'0.18 × 250 000 = 45 000 per month × 12 = ₦540 000.'],
['The ratio of male to female staff is 3:5. There are 120 staff. How many are female?',['45','75','72','80'],1,'5/8 × 120 = 75.'],
['$1 = ₦1 500. A supplier quotes $2 400. In naira?',['₦3.6m','₦360 000','₦1.6m','₦36m'],0,'2 400 × 1 500 = ₦3 600 000.'],
['Output rose from 80 to 92 units per hour. Percentage increase?',['12%','15%','13%','18%'],1,'12/80 = 15%.'],
['A team of 4 finishes a task in 6 days. At the same rate, how long would 3 people take?',['8 days','4.5 days','7 days','9 days'],0,'Work = 24 person-days ÷ 3 = 8 days.']]),
verbal:sq([
[P2+'Statement: Solar mini-grids have completely replaced diesel generators in northern Nigeria.',['True','False','Cannot say'],1,'The passage says reliance has been <i>reduced</i> in some communities, not completely replaced everywhere.'],
[P2+'Statement: Some households pay for mini-grid electricity using mobile payments.',['True','False','Cannot say'],0,'“often through mobile payment”.'],
[P2+'Statement: Most mini-grid projects are profitable without outside funding.',['True','False','Cannot say'],1,'Most “still depend on grants or concessional loans”.'],
[P2+'Statement: Mini-grid electricity is cheaper per unit than grid electricity.',['True','False','Cannot say'],2,'Grid prices are not mentioned.'],
['Choose the word closest in meaning to “mitigate”.',['Worsen','Lessen','Ignore','Measure'],1,'Mitigate = make less severe.'],
['Choose the word opposite in meaning to “transparent”.',['Clear','Opaque','Honest','Obvious'],1,'Opaque means not see-through / not open.'],
['Complete: The manager was ____ about the proposal, asking many careful questions before agreeing.',['sceptical','ecstatic','indifferent','hostile'],0,'Careful questions before agreeing suggests doubt — sceptical.'],
['Which sentence is correct?',['Each of the trainees have a laptop.','Each of the trainees has a laptop.','Each of the trainee has laptops.','Each trainees has a laptop.'],1,'“Each” is singular → has.']]),
abstract:sq([
['Next in the series: '+sqr(1)+sqr(3)+sqr(5)+' ?',[sqr(6),sqr(7),sqr(9),sqr(4)],1,'Add 2 squares each time: 1, 3, 5, 7.'],
['Next: '+tri(0)+tri(90)+tri(180)+' ?',[tri(270),tri(0),tri(45),tri(180)],0,'Rotates 90° clockwise each step.'],
['Next: '+shade(0)+shade(1)+shade(3)+' ?',[shade(2),shade(0),shade(1),shade(3)],0,'The shaded quarter moves clockwise: top-left → top-right → bottom-right → bottom-left.'],
['Number series: 2, 6, 12, 20, 30, ?',['40','42','44','36'],1,'Differences 4, 6, 8, 10, 12 → 42 (or n(n+1)).'],
['Letter series: B, E, H, K, ?',['M','N','O','L'],1,'Skip two letters each time (+3): N.'],
['Odd one out: 9, 16, 25, 30, 36',['16','25','30','36'],2,'All others are perfect squares.'],
['Series: 3, 9, 27, 81, ?',['162','243','108','324'],1,'×3 each time.'],
['Series: 1, 1, 2, 3, 5, 8, ?',['11','12','13','15'],2,'Each term is the sum of the two before (Fibonacci).']]),
sjt:sq([
['Your supervisor gives you an urgent task while you are finishing another task for a different manager. Best response?',['Ignore the new task','Do both badly to save time','Explain your current deadline to both and agree on priorities','Complain to HR'],2,'Clarify priorities openly with the people involved.'],
['A customer is angry about a delayed transfer. Best first step?',['Tell them it is not your fault','Listen calmly, apologise for the inconvenience, check the facts and explain next steps','Transfer them to someone else immediately','End the call'],1,'Acknowledge, investigate and give a clear next step.'],
['You notice a colleague sharing customer data on a personal WhatsApp group.',['Ignore it','Join the group','Raise it with the colleague and report it through the proper channel, since it breaches data rules','Post about it on social media'],2,'Data protection breaches must be reported properly (NDPA compliance).'],
['You are asked to present but you are nervous and underprepared.',['Cancel at the last minute','Prepare key points, practise, and ask a senior colleague for feedback beforehand','Read from your phone without preparation','Ask someone else to present without telling the manager'],1,'Prepare and seek support early.'],
['During rotation you are given boring, repetitive work.',['Do it carelessly','Do it well, learn the process, and politely ask your supervisor for additional responsibilities','Refuse','Leave early every day'],1,'Show reliability first, then ask for growth.'],
['A vendor offers you a gift to speed up their invoice payment.',['Accept quietly','Decline politely and follow the company’s gifts and conflict-of-interest policy','Accept and share with the team','Ask for cash instead'],1,'Integrity and policy compliance.']])};
// fix the deliberately checked item: replace ambiguous fraction question with a clean one
add.num[3]={q:T2+'In Q2, how many more units of noodles than cooking oil were sold?',o:['880','980','1 080','780'],a:1,e:'1500 − 520 = 980.'};
G.sections.forEach(s=>{const n=s.name.toLowerCase();const k=n.includes('numer')?'num':n.includes('verbal')?'verbal':(n.includes('abstract')||n.includes('diagram'))?'abstract':n.includes('situation')?'sjt':null;if(k)s.qs=s.qs.concat(add[k])});
G.guide+=`<div class="card"><h2>New to this? Start here</h2><p>After NYSC (or in your final year), large employers recruit through <b>graduate trainee programmes</b>. The usual stages are:</p><ol><li><b>Online application</b> on the company careers site (CV, grades — many want at least a 2:1, and NYSC status).</li><li><b>Online aptitude tests</b> (the sections below), often within 3–7 days of an email invitation.</li><li><b>Assessment centre / written test</b> in person: group exercise, case study, presentation, essay.</li><li><b>Interviews</b>: HR and technical/panel; sometimes a final interview with senior managers.</li><li><b>Medicals, background checks and offer</b>.</li></ol>
<h3>Who uses them?</h3><p>Commercial banks, oil and gas and energy companies, FMCGs (food, drinks, consumer goods), telecoms, big audit and consulting firms, and some public agencies. Each firm picks its own test provider, so check the email instructions.</p>
<h3>Timing</h3><ul><li>Numerical: typically about 1 minute per question; use the calculator and read units (₦m vs ₦).</li><li>Verbal: about 30–60 seconds per statement; judge only from the passage.</li><li>Abstract: 30–45 seconds per item; look for rotation, counting, shading, position.</li><li>SJT: often untimed or generous; choose what a fair, professional employee would do.</li></ul>
<h3>Preparation plan (2 weeks)</h3><ol><li>Days 1–3: learn each question type here, untimed.</li><li>Days 4–10: timed sections daily; review every mistake.</li><li>Days 11–14: full assessments under exam conditions with a quiet room, good internet and a charged device.</li></ol><p class="note">Beware of anyone selling “leaked answers” or offering to take the test for you — it is fraud, and many employers re-test at the assessment centre.</p></div>`;
})();
