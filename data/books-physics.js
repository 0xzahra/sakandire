window.BOOKS=window.BOOKS||[];
window.BOOKS.push({id:'physics',title:'Physics Made Simple',icon:'⚡',color:'#2f6fd6',blurb:'Motion, forces and electricity in plain words.',
further:['New School Physics for Senior Secondary Schools','Senior Secondary Physics (your school\'s approved text)'],
chapters:[
{title:'Motion in a straight line',topic:'Motion: speed, velocity, acceleration, equations of motion',html:`
<p>Everything around you moves: okada on the road, a ball you throw, even the Earth. Physics describes motion with a few simple ideas.</p>
<h2>1. Distance and displacement</h2><p><b>Distance</b> is how far you travel, in any direction. It is a <b>scalar</b> (size only). <b>Displacement</b> is how far you end up from where you started, <i>in a stated direction</i>. It is a <b>vector</b> (size and direction). Unit: metre (m).</p>
<svg viewBox="0 0 320 110"><circle cx="40" cy="80" r="6" fill="#1f6f4a"/><text x="25" y="100" font-size="11">Home</text><circle cx="280" cy="80" r="6" fill="#e07b24"/><text x="262" y="100" font-size="11">School</text>
<path d="M40 80 Q100 10 160 50 T280 80" fill="none" stroke="#2f6fd6" stroke-width="3" stroke-dasharray="6 4"/><text x="110" y="22" font-size="11" fill="#2f6fd6">distance (the road)</text>
<line x1="40" y1="80" x2="272" y2="80" stroke="#b3261e" stroke-width="3"/><path d="M272 75l10 5-10 5z" fill="#b3261e"/><text x="120" y="75" font-size="11" fill="#b3261e">displacement</text></svg>
<h2>2. Speed and velocity</h2><div class="box key"><b>Speed</b> = distance ÷ time &nbsp;&nbsp; <b>Velocity</b> = displacement ÷ time. Unit: m/s (metres per second).</div>
<p>A car that drives round a roundabout and stops where it started has travelled a distance but its displacement is zero, so its average velocity is zero.</p>
<h2>3. Acceleration</h2><p>Acceleration is how quickly velocity changes. <b>a = (v − u) ÷ t</b>, where u = starting velocity, v = final velocity, t = time. Unit: m/s². If the object slows down, a is negative (we call it deceleration or retardation).</p>
<h2>4. The equations of motion (constant acceleration)</h2><div class="box key">v = u + at<br>s = ut + ½at²<br>v² = u² + 2as<br>s = ½(u + v)t</div>
<p>Before you use them, write down what you know (u, v, a, s, t) and what you want. Pick the equation that contains only those.</p>
<h2>5. Velocity–time graphs</h2><svg viewBox="0 0 320 170"><line x1="40" y1="140" x2="300" y2="140" stroke="#333"/><line x1="40" y1="140" x2="40" y2="15" stroke="#333"/><text x="270" y="158" font-size="11">time (s)</text><text x="2" y="20" font-size="11">v (m/s)</text>
<polygon points="40,140 120,50 220,50 290,140" fill="#cfe0ff"/><polyline points="40,140 120,50 220,50 290,140" fill="none" stroke="#2f6fd6" stroke-width="3"/>
<text x="55" y="85" font-size="10">speeding up</text><text x="140" y="44" font-size="10">steady speed</text><text x="235" y="85" font-size="10">slowing</text><text x="130" y="110" font-size="11">area = distance</text></svg>
<p>The <b>slope</b> (gradient) of a velocity–time graph is the acceleration. The <b>area</b> under it is the distance travelled.</p>
<h2>6. Free fall</h2><p>Near the Earth, objects falling freely (no air resistance) accelerate at g ≈ 9.8 m/s² (exams often use 10 m/s²). Use the same equations with a = g.</p>
<div class="box ex"><b>Worked example 1.</b> A bus starts from rest and reaches 20 m/s in 10 s. Find its acceleration and the distance covered.<br>u = 0, v = 20 m/s, t = 10 s. a = (20 − 0) ÷ 10 = <b>2 m/s²</b>. s = ½(u + v)t = ½(0 + 20)(10) = <b>100 m</b>.</div>
<div class="box ex"><b>Worked example 2.</b> A stone is dropped from a cliff and hits the ground after 3 s. Find the height (g = 10 m/s²).<br>u = 0, t = 3 s, a = 10. s = ut + ½at² = 0 + ½(10)(9) = <b>45 m</b>.</div>
<div class="box ex"><b>Worked example 3.</b> A car moving at 30 m/s brakes and stops in 75 m. Find the deceleration.<br>v² = u² + 2as → 0 = 900 + 2a(75) → a = −900 ÷ 150 = <b>−6 m/s²</b>, i.e. a deceleration of 6 m/s².</div>`,
ex:[{q:'State one difference between distance and displacement.',a:'Distance is a scalar (size only, any path). Displacement is a vector: the straight-line distance from start to finish in a stated direction.'},
{q:'A runner covers 400 m round a track in 50 s and ends where she started. Find (a) her average speed (b) her average velocity.',a:'(a) Speed = 400 ÷ 50 = 8 m/s. (b) Displacement = 0, so average velocity = 0 m/s.'},
{q:'A car accelerates uniformly from 5 m/s to 25 m/s in 4 s. Find the acceleration and the distance travelled.',a:'a = (25 − 5) ÷ 4 = 5 m/s². s = ½(5 + 25) × 4 = 60 m.'},
{q:'A ball is thrown straight up at 20 m/s. How high does it go? (g = 10 m/s²)',a:'At the top v = 0. v² = u² − 2gs → 0 = 400 − 20s → s = 20 m.'},
{q:'What does the area under a velocity–time graph represent?',a:'The distance (displacement) travelled.'}]},
{title:'Forces and Newton\'s laws',topic:'Force, Newton\'s laws of motion, momentum',html:`
<p>A <b>force</b> is a push or a pull. It can start motion, stop it, change its direction or change the shape of an object. Unit: newton (N).</p>
<h2>1. Newton's first law</h2><p>An object stays at rest, or keeps moving in a straight line at constant speed, unless a resultant force acts on it. This "laziness" is called <b>inertia</b>. That is why passengers jerk forward when a danfo suddenly brakes — and why seat belts matter.</p>
<h2>2. Newton's second law</h2><div class="box key">Resultant force = mass × acceleration: <b>F = ma</b>. Also, force = rate of change of momentum.</div>
<svg viewBox="0 0 320 100"><rect x="120" y="40" width="80" height="40" fill="#ffe0b8" stroke="#333"/><text x="145" y="65" font-size="12">5 kg</text><line x1="200" y1="60" x2="280" y2="60" stroke="#1f6f4a" stroke-width="4"/><path d="M280 52l14 8-14 8z" fill="#1f6f4a"/><text x="225" y="50" font-size="11">20 N</text>
<line x1="120" y1="60" x2="60" y2="60" stroke="#b3261e" stroke-width="4"/><path d="M60 52l-14 8 14 8z" fill="#b3261e"/><text x="60" y="50" font-size="11">friction 5 N</text><line x1="10" y1="80" x2="310" y2="80" stroke="#666"/></svg>
<p>In the picture, the resultant force is 20 − 5 = 15 N to the right, so a = 15 ÷ 5 = 3 m/s².</p>
<h2>3. Newton's third law</h2><p>When A pushes on B, B pushes back on A with an equal force in the opposite direction. The two forces act on <b>different</b> bodies. A rocket pushes gas down; the gas pushes the rocket up.</p>
<h2>4. Weight and mass</h2><p><b>Mass</b> (kg) is the amount of matter. <b>Weight</b> (N) is the pull of gravity: <b>W = mg</b>. A 60 kg student weighs about 60 × 10 = 600 N on Earth, but less on the Moon; the mass stays 60 kg.</p>
<h2>5. Momentum</h2><div class="box key">Momentum p = mass × velocity (kg m/s). In a collision with no outside force, <b>total momentum before = total momentum after</b> (conservation of momentum). Impulse = F × t = change in momentum.</div>
<div class="box ex"><b>Worked example 1.</b> A force of 30 N acts on a 6 kg trolley on a smooth floor. Find the acceleration.<br>a = F ÷ m = 30 ÷ 6 = <b>5 m/s²</b>.</div>
<div class="box ex"><b>Worked example 2.</b> A 2 kg ball moving at 3 m/s hits a 1 kg ball at rest. They stick together. Find their common velocity.<br>Before: 2 × 3 + 1 × 0 = 6 kg m/s. After: (2 + 1)v = 6 → v = <b>2 m/s</b>.</div>
<div class="box ex"><b>Worked example 3.</b> A footballer kicks a 0.5 kg ball from rest to 20 m/s. The kick lasts 0.1 s. Find the average force.<br>Change in momentum = 0.5 × 20 − 0 = 10 kg m/s. F = 10 ÷ 0.1 = <b>100 N</b>.</div>`,
ex:[{q:'State Newton\'s first law and give one everyday example.',a:'A body stays at rest or in uniform motion in a straight line unless a resultant external force acts on it. Example: passengers lurch forward when a bus brakes suddenly.'},
{q:'Find the weight of a 45 kg bag of rice (g = 10 m/s²).',a:'W = mg = 45 × 10 = 450 N.'},
{q:'A 1200 kg car accelerates at 2 m/s². What resultant force acts on it?',a:'F = ma = 1200 × 2 = 2400 N.'},
{q:'A 50 g bullet leaves a 2 kg gun at 200 m/s. Find the recoil velocity of the gun.',a:'Total momentum before = 0. 0.05 × 200 + 2v = 0 → v = −10 ÷ 2 = −5 m/s, i.e. 5 m/s backwards.'},
{q:'Why do action and reaction forces not cancel out?',a:'Because they act on different bodies. Forces only cancel when they act on the same body.'}]},
{title:'Current electricity and Ohm\'s law',topic:'Current electricity: charge, current, p.d., resistance, Ohm\'s law, series and parallel',html:`
<p>When NEPA (sorry, the DisCo) brings light, electric charges flow through wires to your bulb. That flow is <b>current</b>.</p>
<h2>1. Key quantities</h2><div class="box key"><b>Current I</b> = charge ÷ time, I = Q/t. Unit: ampere (A), measured with an <b>ammeter in series</b>.<br><b>Potential difference V</b>: energy per unit charge, unit volt (V), measured with a <b>voltmeter in parallel</b>.<br><b>Resistance R</b> = V/I, unit ohm (Ω).</div>
<h2>2. Ohm's law</h2><p>The current through a metallic conductor is directly proportional to the potential difference across it, provided the temperature and other physical conditions stay constant: <b>V = IR</b>. A graph of V against I is a straight line through the origin; its slope is R.</p>
<svg viewBox="0 0 320 150"><g fill="none" stroke="#333" stroke-width="2"><path d="M40 30H280V120H40Z"/></g><rect x="30" y="62" width="20" height="26" fill="#fff"/><line x1="32" y1="68" x2="48" y2="68" stroke="#333" stroke-width="3"/><line x1="36" y1="78" x2="44" y2="78" stroke="#333" stroke-width="3"/><text x="2" y="100" font-size="10">cell</text>
<circle cx="140" cy="30" r="12" fill="#fff" stroke="#333" stroke-width="2"/><text x="135" y="35" font-size="12" font-weight="bold">A</text><rect x="180" y="112" width="50" height="16" fill="#fde7c7" stroke="#333" stroke-width="2"/><text x="195" y="146" font-size="10">R</text>
<path d="M180 120V85H230V120" fill="none" stroke="#666" stroke-dasharray="3 2"/><circle cx="205" cy="85" r="12" fill="#fff" stroke="#333" stroke-width="2"/><text x="200" y="90" font-size="12" font-weight="bold">V</text></svg>
<p class="muted">Try it in the <a href="#/lab/ohm">Ohm's law dry lab</a>.</p>
<h2>3. Resistors in series and parallel</h2><div class="box key"><b>Series:</b> R = R₁ + R₂ + R₃ (same current through each).<br><b>Parallel:</b> 1/R = 1/R₁ + 1/R₂ + … (same p.d. across each). For two resistors: R = R₁R₂ ÷ (R₁ + R₂).</div>
<h2>4. E.m.f. and internal resistance</h2><p>A cell's <b>e.m.f. (E)</b> is the total energy it gives each coulomb. Some is used inside the cell by its <b>internal resistance r</b>. So <b>E = I(R + r)</b>, and the terminal p.d. is V = E − Ir.</p>
<h2>5. Electrical energy and power</h2><div class="box key">Energy W = VIt = I²Rt = V²t/R (joules). Power P = VI = I²R = V²/R (watts). 1 kWh = 3.6 × 10⁶ J.</div>
<div class="box ex"><b>Worked example 1.</b> A 12 V battery drives a current of 3 A through a lamp. Find its resistance.<br>R = V/I = 12 ÷ 3 = <b>4 Ω</b>.</div>
<div class="box ex"><b>Worked example 2.</b> Find the total resistance of 6 Ω and 3 Ω (a) in series (b) in parallel.<br>(a) 6 + 3 = <b>9 Ω</b>. (b) (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = <b>2 Ω</b>.</div>
<div class="box ex"><b>Worked example 3.</b> A cell of e.m.f. 3 V and internal resistance 1 Ω is connected to a 5 Ω resistor. Find the current and terminal p.d.<br>I = E ÷ (R + r) = 3 ÷ 6 = <b>0.5 A</b>. V = IR = 0.5 × 5 = <b>2.5 V</b>.</div>
<div class="box ex"><b>Worked example 4.</b> A 2000 W pressing iron is used for 30 minutes. How many kWh?<br>2 kW × 0.5 h = <b>1 kWh</b>.</div>`,
ex:[{q:'State Ohm\'s law.',a:'The current in a metallic conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant.'},
{q:'How should (a) an ammeter (b) a voltmeter be connected in a circuit?',a:'(a) In series with the component. (b) In parallel (across) the component.'},
{q:'Three 4 Ω resistors are connected in parallel. Find the total resistance.',a:'1/R = 1/4 + 1/4 + 1/4 = 3/4, so R = 4/3 ≈ 1.33 Ω.'},
{q:'A 240 V supply drives 0.25 A through a bulb. Find the power and the resistance.',a:'P = VI = 240 × 0.25 = 60 W. R = V/I = 240 ÷ 0.25 = 960 Ω.'},
{q:'A cell of e.m.f. 1.5 V gives 0.3 A through a 4 Ω resistor. Find the internal resistance.',a:'E = I(R + r): 1.5 = 0.3(4 + r) → 4 + r = 5 → r = 1 Ω.'}]}
]});
