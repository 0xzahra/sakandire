window.BOOKS=window.BOOKS||[];
window.BOOKS.push({id:'economics',title:'Economics Made Simple',icon:'📈',color:'#0f766e',blurb:'The full SS1–SS3 WAEC/NECO/JAMB syllabus in short, plain notes with worked examples and answered exercises.',
further:['Comprehensive Economics for Senior Secondary Schools','Senior Secondary Economics (your school\'s approved text)'],
chapters:[
{title:'Basic economic ideas',topic:'Basic concepts: wants, scarcity, choice, scale of preference, opportunity cost',html:`
<p>Economics studies how people make choices when resources are limited.</p>
<div class="box key"><b>Wants</b> are unlimited. <b>Resources</b> (money, time, land) are <b>scarce</b>. So we must make <b>choices</b>. Listing wants in order of importance is a <b>scale of preference</b>. The next best thing you give up is the <b>opportunity cost</b>.</div>
<svg viewBox="0 0 320 130"><rect x="10" y="20" width="90" height="90" rx="10" fill="#d7f0eb"/><text x="22" y="50" font-size="11">Wants</text><text x="22" y="66" font-size="11">unlimited</text>
<rect x="115" y="20" width="90" height="90" rx="10" fill="#ffe7c7"/><text x="125" y="50" font-size="11">Resources</text><text x="125" y="66" font-size="11">scarce</text>
<rect x="220" y="20" width="90" height="90" rx="10" fill="#e9dcff"/><text x="235" y="50" font-size="11">Choice</text><text x="228" y="66" font-size="11">+ opp. cost</text><text x="100" y="70" font-size="18">+</text><text x="205" y="70" font-size="18">→</text></svg>
<h2>Example</h2><p>Funmi has ₦5,000. Her scale of preference: (1) textbook ₦5,000, (2) new sandals ₦5,000, (3) recharge card. She buys the textbook. Her opportunity cost is the <b>sandals</b> (the next best alternative), not everything she didn't buy.</p>
<h2>Factors of production</h2><ul><li><b>Land</b> (all natural resources) — reward: rent.</li><li><b>Labour</b> (human effort) — reward: wages.</li><li><b>Capital</b> (man-made aids to production, e.g. machines) — reward: interest.</li><li><b>Entrepreneur</b> (organises and takes risk) — reward: profit.</li></ul>
<h2>Production possibility curve (PPC)</h2><svg viewBox="0 0 320 170"><line x1="40" y1="150" x2="300" y2="150" stroke="#333"/><line x1="40" y1="150" x2="40" y2="10" stroke="#333"/><path d="M40 20 Q230 30 260 150" fill="none" stroke="#0f766e" stroke-width="3"/><text x="250" y="166" font-size="11">Rice</text><text x="2" y="16" font-size="11">Cars</text><circle cx="110" cy="100" r="4" fill="#b3261e"/><text x="116" y="104" font-size="10">inside: unused resources</text><circle cx="260" cy="40" r="4" fill="#999"/><text x="200" y="36" font-size="10">outside: not yet possible</text></svg>
<p>Points on the curve use all resources efficiently. Moving along the curve shows opportunity cost: more rice means fewer cars.</p>
<div class="box ex"><b>Worked example.</b> A farmer can use his land for maize or cassava. He plants maize. What is his opportunity cost?<br>The <b>cassava</b> he could have grown.</div>`,
ex:[{q:'Define opportunity cost.',a:'The alternative forgone (the next best alternative given up) when a choice is made.'},
{q:'Why must people make choices?',a:'Because wants are unlimited but the resources to satisfy them are scarce.'},
{q:'Name the reward for each factor of production.',a:'Land — rent; labour — wages/salaries; capital — interest; entrepreneur — profit.'},
{q:'What does a point inside the production possibility curve show?',a:'Resources are unemployed or used inefficiently.'},
{q:'Is a tailor\'s sewing machine land, labour or capital?',a:'Capital — a man-made aid to production.'}]},
{title:'Demand and supply',topic:'Theory of demand, supply, price determination, elasticity',html:`
<h2>1. Demand</h2><p><b>Demand</b> is the quantity of a good consumers are willing and able to buy at a given price at a particular time. <b>Law of demand</b>: the higher the price, the lower the quantity demanded (other things being equal).</p>
<h2>2. Supply</h2><p><b>Supply</b> is the quantity sellers are willing and able to offer at a given price. <b>Law of supply</b>: the higher the price, the greater the quantity supplied.</p>
<h2>3. Equilibrium</h2><svg viewBox="0 0 320 190"><line x1="40" y1="170" x2="300" y2="170" stroke="#333"/><line x1="40" y1="170" x2="40" y2="10" stroke="#333"/><text x="250" y="186" font-size="11">Quantity</text><text x="2" y="16" font-size="11">Price</text>
<line x1="60" y1="30" x2="280" y2="160" stroke="#2f6fd6" stroke-width="3"/><text x="270" y="150" font-size="12" fill="#2f6fd6">D</text><line x1="60" y1="160" x2="280" y2="30" stroke="#c2410c" stroke-width="3"/><text x="270" y="30" font-size="12" fill="#c2410c">S</text>
<circle cx="170" cy="95" r="5" fill="#111"/><line x1="40" y1="95" x2="170" y2="95" stroke="#999" stroke-dasharray="4 3"/><line x1="170" y1="95" x2="170" y2="170" stroke="#999" stroke-dasharray="4 3"/><text x="10" y="99" font-size="11">P*</text><text x="164" y="184" font-size="11">Q*</text><text x="178" y="92" font-size="10">equilibrium</text></svg>
<p>Where demand equals supply, we get the <b>equilibrium price</b> and quantity. Above it there is a <b>surplus</b>; below it a <b>shortage</b>.</p>
<h2>4. Changes in demand vs quantity demanded</h2><div class="box key">A change in the good's own price → movement <b>along</b> the curve. A change in income, tastes, prices of related goods, population, etc. → the whole curve <b>shifts</b>.</div>
<p><b>Substitutes</b> (e.g. Coke and Pepsi): if one's price rises, demand for the other rises. <b>Complements</b> (car and petrol): if petrol price rises, demand for cars falls.</p>
<h2>5. Price elasticity of demand</h2><div class="box key">PED = % change in quantity demanded ÷ % change in price (ignore the minus sign). PED &gt; 1: elastic. PED &lt; 1: inelastic. PED = 1: unitary.</div>
<div class="box ex"><b>Worked example 1.</b> Price of bread rises from ₦500 to ₦600, and quantity falls from 100 to 70 loaves. Find PED.<br>% change in Q = −30/100 × 100 = −30%. % change in P = 100/500 × 100 = 20%. PED = 30 ÷ 20 = <b>1.5 (elastic)</b>.</div>
<div class="box ex"><b>Worked example 2.</b> Qd = 100 − 2P and Qs = 20 + 2P. Find the equilibrium price and quantity.<br>100 − 2P = 20 + 2P → 80 = 4P → <b>P = 20</b>. Q = 100 − 40 = <b>60</b>.</div>`,
ex:[{q:'State the law of demand.',a:'Other things being equal, the higher the price of a commodity, the lower the quantity demanded, and the lower the price, the higher the quantity demanded.'},
{q:'What happens to the demand for tea if the price of coffee rises sharply?',a:'Demand for tea rises (shifts right), because tea and coffee are substitutes.'},
{q:'Give two factors that shift a supply curve.',a:'Any two: cost of production, technology, weather (for farm goods), taxes or subsidies, prices of other goods, number of producers.'},
{q:'If price falls by 10% and quantity demanded rises by 5%, what is the PED? Is demand elastic?',a:'PED = 5 ÷ 10 = 0.5 — inelastic.'},
{q:'Qd = 60 − P and Qs = 2P. Find the equilibrium price and quantity.',a:'60 − P = 2P → P = 20; Q = 40.'}]},
{title:'Money and inflation',topic:'Money: functions, qualities, demand for money; inflation',html:`
<p>Before money, people used <b>barter</b> — exchanging goods for goods. It had problems: <b>double coincidence of wants</b> (you must find someone who has what you want and wants what you have), indivisibility, and no store of value.</p>
<h2>1. Functions of money</h2><ul><li><b>Medium of exchange</b> — generally accepted in payment.</li><li><b>Unit of account</b> (measure of value) — prices are stated in naira.</li><li><b>Store of value</b> — you can save it.</li><li><b>Standard of deferred payment</b> — debts can be paid later.</li></ul>
<h2>2. Qualities of good money</h2><p>Acceptable, portable, durable, divisible, homogeneous (uniform), scarce (limited supply), and hard to forge.</p>
<h2>3. Why people hold money (Keynes)</h2><p><b>Transactions</b> motive (daily spending), <b>precautionary</b> motive (emergencies), <b>speculative</b> motive (to take advantage of changes in interest rates or asset prices).</p>
<h2>4. Inflation</h2><p>A persistent rise in the general price level. Money buys less (its value falls).</p>
<svg viewBox="0 0 320 120"><text x="10" y="30" font-size="12">2020: ₦1,000 → 🛒🛒🛒🛒</text><text x="10" y="70" font-size="12">Later: ₦1,000 → 🛒🛒</text><text x="10" y="105" font-size="11" fill="#b3261e">Same money, fewer goods = falling value of money</text></svg>
<div class="box key"><b>Demand-pull</b>: too much money chasing too few goods. <b>Cost-push</b>: rising costs of production (fuel, wages, imported inputs) push prices up. Control: reduce money supply, raise interest rates, increase production, cut government spending.</div>
<div class="box ex"><b>Worked example.</b> A price index rose from 120 to 150 in one year. Find the inflation rate.<br>(150 − 120) ÷ 120 × 100 = <b>25%</b>.</div>`,
ex:[{q:'What is "double coincidence of wants"?',a:'In barter, each trader must have what the other wants, and want what the other has, at the same time.'},
{q:'List four functions of money.',a:'Medium of exchange, unit of account, store of value, standard of deferred payment.'},
{q:'Give two causes of cost-push inflation.',a:'Any two: rising fuel prices, higher wages, higher cost of imported raw materials, higher taxes on production.'},
{q:'A price index moved from 200 to 230. What is the inflation rate?',a:'(230 − 200) ÷ 200 × 100 = 15%.'},
{q:'Which motive for holding money is about emergencies?',a:'The precautionary motive.'}]}
]});
