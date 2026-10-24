window.BOOKS=window.BOOKS||[];
window.BOOKS.push({id:'maths',title:'Mathematics Made Simple',icon:'➗',color:'#7c3aed',blurb:'The full SS1–SS3 WAEC/NECO/JAMB syllabus in short, plain notes with worked examples and answered exercises.',
further:['New General Mathematics for Senior Secondary Schools','Senior Secondary Mathematics (your school\'s approved text)'],
chapters:[
{title:'Indices and logarithms',topic:'Number and numeration: indices, logarithms, standard form',html:`
<h2>1. Laws of indices</h2><div class="box key">aᵐ × aⁿ = aᵐ⁺ⁿ &nbsp; aᵐ ÷ aⁿ = aᵐ⁻ⁿ &nbsp; (aᵐ)ⁿ = aᵐⁿ<br>a⁰ = 1 &nbsp; a⁻ⁿ = 1/aⁿ &nbsp; a^(1/n) = ⁿ√a &nbsp; a^(m/n) = (ⁿ√a)ᵐ</div>
<div class="box ex"><b>Worked example 1.</b> Simplify 8^(2/3).<br>Cube root of 8 is 2; 2² = <b>4</b>.</div>
<div class="box ex"><b>Worked example 2.</b> Solve 2^(x+1) = 32.<br>32 = 2⁵, so x + 1 = 5 → <b>x = 4</b>.</div>
<h2>2. Logarithms</h2><p>A logarithm answers: "what power?" If 10² = 100 then log₁₀ 100 = 2. In general, <b>if aˣ = N then logₐ N = x</b>.</p>
<svg viewBox="0 0 320 90"><text x="20" y="40" font-size="22">2³ = 8</text><text x="140" y="40" font-size="22">⇔</text><text x="190" y="40" font-size="22">log₂ 8 = 3</text><text x="20" y="75" font-size="11">base 2, power 3, answer 8</text></svg>
<div class="box key">log(xy) = log x + log y &nbsp; log(x/y) = log x − log y &nbsp; log xⁿ = n log x &nbsp; logₐ a = 1 &nbsp; logₐ 1 = 0</div>
<div class="box ex"><b>Worked example 3.</b> Without tables, evaluate log₁₀ 25 + log₁₀ 4.<br>= log₁₀ (25 × 4) = log₁₀ 100 = <b>2</b>.</div>
<div class="box ex"><b>Worked example 4.</b> Use four-figure tables to find 47.36 × 2.5.<br>log 47.36 = 1.6754, log 2.5 = 0.3979. Sum = 2.0733. Antilog: 0.0733 → 1184; characteristic 2 → <b>118.4</b>. (Check: 47.36 × 2.5 = 118.4.)</div>
<p class="muted">Open the <a href="#/ref/tables">four-figure tables</a>.</p>
<h2>3. Standard form</h2><p>Write a number as A × 10ⁿ with 1 ≤ A &lt; 10. 45 000 = 4.5 × 10⁴; 0.0032 = 3.2 × 10⁻³.</p>`,
ex:[{q:'Simplify 27^(−2/3).',a:'27^(1/3) = 3; 3² = 9; negative power gives 1/9.'},
{q:'Solve 3^(2x) = 81.',a:'81 = 3⁴, so 2x = 4 and x = 2.'},
{q:'Evaluate log₂ 32.',a:'2⁵ = 32, so log₂ 32 = 5.'},
{q:'Simplify log 8 + log 5 − log 4 (base 10).',a:'log(8 × 5 ÷ 4) = log 10 = 1.'},
{q:'Write 0.000507 in standard form.',a:'5.07 × 10⁻⁴.'}]},
{title:'Quadratic equations',topic:'Algebraic processes: quadratic equations by factorisation, formula, completing the square',html:`
<p>A quadratic equation has the form <b>ax² + bx + c = 0</b> (a ≠ 0). It has at most two solutions (roots).</p>
<h2>1. Factorisation</h2><p>Find two numbers that multiply to give <b>ac</b> and add to give <b>b</b>.</p>
<div class="box ex"><b>Worked example 1.</b> Solve x² − 5x + 6 = 0.<br>Numbers that multiply to 6 and add to −5: −2 and −3. (x − 2)(x − 3) = 0, so <b>x = 2 or x = 3</b>.</div>
<div class="box ex"><b>Worked example 2.</b> Solve 2x² + 7x + 3 = 0.<br>ac = 6; numbers 6 and 1. 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3) = 0. <b>x = −½ or x = −3</b>.</div>
<h2>2. The formula</h2><div class="box key">x = [−b ± √(b² − 4ac)] ÷ 2a. The <b>discriminant</b> b² − 4ac tells you: &gt; 0 two real roots; = 0 one repeated root; &lt; 0 no real roots.</div>
<div class="box ex"><b>Worked example 3.</b> Solve x² + 4x − 1 = 0 to 2 decimal places.<br>a = 1, b = 4, c = −1. b² − 4ac = 16 + 4 = 20. x = (−4 ± √20) ÷ 2 = (−4 ± 4.472) ÷ 2. <b>x = 0.24 or x = −4.24</b>.</div>
<h2>3. Graph of a quadratic</h2><svg viewBox="0 0 320 180"><line x1="20" y1="140" x2="300" y2="140" stroke="#333"/><line x1="160" y1="10" x2="160" y2="175" stroke="#333"/>

<path d="M147.5,35 ${[...Array(31).keys()].map(i=>{const x=-0.5+i*0.2;return 'L'+(160+x*25).toFixed(1)+','+(140-(x-2)*(x-3)*12).toFixed(1)}).join(' ')}" fill="none" stroke="#7c3aed" stroke-width="3"/>
<circle cx="210" cy="140" r="4" fill="#e07b24"/><circle cx="235" cy="140" r="4" fill="#e07b24"/><text x="196" y="158" font-size="10">x=2</text><text x="232" y="158" font-size="10">x=3</text><text x="235" y="40" font-size="11">y = x² − 5x + 6</text></svg>
<p>The roots are where the curve crosses the x-axis.</p>
<h2>4. Forming equations from roots</h2><p>If roots are α and β: <b>x² − (α + β)x + αβ = 0</b>.</p>
<div class="box ex"><b>Worked example 4.</b> Find the equation whose roots are 3 and −5.<br>Sum = −2, product = −15. x² + 2x − 15 = 0.</div>`,
ex:[{q:'Solve x² − 9 = 0.',a:'(x − 3)(x + 3) = 0, so x = 3 or x = −3.'},
{q:'Solve x² + x − 12 = 0.',a:'(x + 4)(x − 3) = 0, so x = −4 or x = 3.'},
{q:'Solve 3x² − 5x − 2 = 0.',a:'ac = −6: numbers −6 and 1. 3x² − 6x + x − 2 = 3x(x − 2) + 1(x − 2) = (3x + 1)(x − 2). x = −⅓ or x = 2.'},
{q:'Find the discriminant of 2x² + 3x + 5 = 0 and say what it means.',a:'b² − 4ac = 9 − 40 = −31 < 0, so there are no real roots.'},
{q:'Form the quadratic equation whose roots are ½ and 4.',a:'Sum = 4.5, product = 2: x² − 4.5x + 2 = 0, or 2x² − 9x + 4 = 0.'}]},
{title:'Trigonometry of right-angled triangles',topic:'Trigonometry: sine, cosine, tangent, angles of elevation and depression',html:`
<svg viewBox="0 0 320 160"><polygon points="40,140 260,140 260,30" fill="#efe7ff" stroke="#333" stroke-width="2"/><rect x="248" y="128" width="12" height="12" fill="none" stroke="#333"/><text x="65" y="135" font-size="14">θ</text>
<text x="130" y="158" font-size="12">adjacent</text><text x="265" y="90" font-size="12">opposite</text><text x="110" y="75" font-size="12" transform="rotate(-27 130 80)">hypotenuse</text></svg>
<div class="box key">SOH CAH TOA:<br>sin θ = opposite ÷ hypotenuse<br>cos θ = adjacent ÷ hypotenuse<br>tan θ = opposite ÷ adjacent<br>Pythagoras: hyp² = opp² + adj²</div>
<h2>Special angles</h2><p>sin 30° = ½, cos 60° = ½, sin 45° = cos 45° = 1/√2, tan 45° = 1, tan 60° = √3, sin 60° = √3/2.</p>
<div class="box ex"><b>Worked example 1.</b> A ladder 10 m long leans on a wall making 60° with the ground. How high up the wall does it reach?<br>sin 60° = h ÷ 10 → h = 10 × 0.8660 = <b>8.66 m</b>.</div>
<div class="box ex"><b>Worked example 2.</b> A right triangle has opposite 5 cm and adjacent 12 cm. Find the hypotenuse and the angle θ.<br>hyp = √(25 + 144) = √169 = <b>13 cm</b>. tan θ = 5/12 = 0.4167 → θ ≈ <b>22.6°</b>.</div>
<h2>Angles of elevation and depression</h2><svg viewBox="0 0 320 140"><line x1="20" y1="120" x2="300" y2="120" stroke="#1f6f4a" stroke-width="3"/><rect x="250" y="30" width="20" height="90" fill="#cfd8e3" stroke="#333"/><circle cx="50" cy="114" r="6" fill="#e07b24"/><line x1="50" y1="114" x2="260" y2="30" stroke="#333" stroke-dasharray="4 3"/><text x="80" y="112" font-size="11">elevation</text>
<line x1="260" y1="30" x2="180" y2="30" stroke="#999"/><text x="185" y="25" font-size="11">depression</text></svg>
<p>The angle of <b>elevation</b> is measured <i>up</i> from the horizontal; the angle of <b>depression</b> is measured <i>down</i> from the horizontal. They are equal (alternate angles).</p>
<div class="box ex"><b>Worked example 3.</b> From a point 40 m from the foot of a mast, the angle of elevation of the top is 30°. Find the height.<br>tan 30° = h ÷ 40 → h = 40 × 0.5774 = <b>23.1 m</b>.</div>`,
ex:[{q:'In a right triangle the hypotenuse is 20 cm and an angle is 30°. Find the side opposite the angle.',a:'opp = 20 × sin 30° = 20 × 0.5 = 10 cm.'},
{q:'Find x if tan x = 1 (0° < x < 90°).',a:'x = 45°.'},
{q:'The sides of a right triangle are 6 cm and 8 cm. Find the hypotenuse.',a:'√(36 + 64) = √100 = 10 cm.'},
{q:'From the top of a 50 m cliff, the angle of depression of a boat is 45°. How far is the boat from the foot of the cliff?',a:'tan 45° = 50 ÷ d → d = 50 m.'},
{q:'Given sin θ = 3/5 and θ is acute, find cos θ and tan θ.',a:'Using a 3-4-5 triangle: cos θ = 4/5, tan θ = 3/4.'}]}
]});
