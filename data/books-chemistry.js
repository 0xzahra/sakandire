window.BOOKS=window.BOOKS||[];
window.BOOKS.push({id:'chemistry',title:'Chemistry Made Simple',icon:'⚗️',color:'#c2410c',blurb:'The full SS1–SS3 WAEC/NECO/JAMB syllabus in short, plain notes with worked examples and answered exercises.',
further:['New School Chemistry for Senior Secondary Schools','Senior Secondary Chemistry (your school\'s approved text)'],
chapters:[
{title:'Atoms and the periodic table',topic:'Atomic structure, electronic configuration, periodic table',html:`
<p>Everything — water, garri, your phone — is made of tiny particles called <b>atoms</b>.</p>
<h2>1. Inside an atom</h2><svg viewBox="0 0 320 170"><circle cx="160" cy="85" r="18" fill="#f8c27a" stroke="#333"/><text x="146" y="90" font-size="10">nucleus</text>
<circle cx="160" cy="85" r="45" fill="none" stroke="#999"/><circle cx="160" cy="85" r="75" fill="none" stroke="#999"/>
<circle cx="205" cy="85" r="5" fill="#2f6fd6"/><circle cx="115" cy="85" r="5" fill="#2f6fd6"/><circle cx="160" cy="10" r="5" fill="#2f6fd6"/><circle cx="160" cy="160" r="5" fill="#2f6fd6"/><circle cx="235" cy="85" r="5" fill="#2f6fd6"/><circle cx="85" cy="85" r="5" fill="#2f6fd6"/>
<text x="240" y="30" font-size="11">● electron (−)</text><text x="200" y="150" font-size="11">Carbon: 2, 4</text></svg>
<div class="box key"><b>Proton</b>: charge +1, mass 1, in nucleus. <b>Neutron</b>: charge 0, mass 1, in nucleus. <b>Electron</b>: charge −1, mass about 1/1840, in shells around the nucleus.</div>
<p><b>Atomic number (Z)</b> = number of protons. <b>Mass number (A)</b> = protons + neutrons. So neutrons = A − Z. A neutral atom has as many electrons as protons.</p>
<p><b>Isotopes</b> are atoms of the same element with different numbers of neutrons, e.g. ¹²C and ¹⁴C; ³⁵Cl and ³⁷Cl.</p>
<h2>2. Arranging electrons</h2><p>Shells fill from the inside: first shell up to 2, second up to 8, third holds 8 before the fourth starts (for the first 20 elements). Sodium (Z = 11): 2, 8, 1. Chlorine (Z = 17): 2, 8, 7.</p>
<p>In s, p, d notation: Na = 1s² 2s² 2p⁶ 3s¹.</p>
<h2>3. The periodic table</h2><p>Elements are arranged by atomic number. <b>Groups</b> (columns) share the same number of outer electrons and similar reactions. <b>Periods</b> (rows) show the number of shells. Across a period, atoms get smaller and more non-metallic; down a group, atoms get bigger and metals get more reactive.</p>
<p class="muted">Open the <a href="#/ref/periodic">interactive periodic table</a>.</p>
<h2>4. Relative atomic mass from isotopes</h2><div class="box ex"><b>Worked example 1.</b> Chlorine is 75% ³⁵Cl and 25% ³⁷Cl. Find its relative atomic mass.<br>(75 × 35 + 25 × 37) ÷ 100 = (2625 + 925) ÷ 100 = <b>35.5</b>.</div>
<div class="box ex"><b>Worked example 2.</b> An atom has mass number 27 and atomic number 13. How many protons, neutrons and electrons? Give its configuration.<br>Protons 13, electrons 13, neutrons 27 − 13 = 14. Configuration <b>2, 8, 3</b> (aluminium, group 13, period 3).</div>`,
ex:[{q:'Give the charge and location of a neutron.',a:'No charge (neutral); found in the nucleus.'},
{q:'²³Na has atomic number 11. How many neutrons does it have?',a:'23 − 11 = 12 neutrons.'},
{q:'Write the electron arrangement of (a) magnesium, Z = 12 (b) sulfur, Z = 16.',a:'(a) 2, 8, 2 (b) 2, 8, 6.'},
{q:'What are isotopes?',a:'Atoms of the same element (same number of protons) with different numbers of neutrons, so different mass numbers.'},
{q:'Element X has configuration 2, 8, 8, 1. State its group and period.',a:'Group 1 (one outer electron), period 4 (four shells). It is potassium.'}]},
{title:'The mole concept',topic:'Mole concept, molar mass, stoichiometry, molar volume',html:`
<p>Chemists count tiny particles by weighing them. The counting unit is the <b>mole</b>, just as a "dozen" means 12.</p>
<div class="box key">1 mole = 6.02 × 10²³ particles (Avogadro's constant).<br><b>Number of moles n = mass ÷ molar mass</b> (n = m/M).<br>At s.t.p., 1 mole of any gas occupies <b>22.4 dm³</b>.<br>Concentration (mol/dm³) = moles ÷ volume in dm³.</div>
<h2>1. Molar mass</h2><p>Add the relative atomic masses. H₂O: 2(1) + 16 = 18 g/mol. CaCO₃: 40 + 12 + 3(16) = 100 g/mol. NaOH: 23 + 16 + 1 = 40 g/mol.</p>
<svg viewBox="0 0 320 120"><circle cx="160" cy="60" r="40" fill="#fde7c7" stroke="#333"/><text x="145" y="64" font-size="14" font-weight="bold">mol</text>
<rect x="10" y="40" width="80" height="40" rx="8" fill="#cfe0ff"/><text x="22" y="64" font-size="12">mass (g)</text><rect x="230" y="10" width="85" height="36" rx="8" fill="#d7f0d0"/><text x="238" y="32" font-size="11">particles</text><rect x="230" y="74" width="85" height="36" rx="8" fill="#f2d7ff"/><text x="236" y="96" font-size="11">gas vol (dm³)</text>
<g stroke="#333" stroke-width="2"><line x1="90" y1="60" x2="120" y2="60"/><line x1="198" y1="48" x2="230" y2="28"/><line x1="198" y1="72" x2="230" y2="92"/></g><text x="88" y="52" font-size="9">÷ M</text><text x="196" y="25" font-size="9">× 6.02×10²³</text><text x="196" y="112" font-size="9">× 22.4</text></svg>
<h2>2. Using equations (stoichiometry)</h2><p>A balanced equation tells you the <b>mole ratio</b>. Steps: (1) moles of what you know, (2) use the ratio, (3) convert to what you want.</p>
<div class="box ex"><b>Worked example 1.</b> How many moles are in 8.0 g of NaOH?<br>n = 8.0 ÷ 40 = <b>0.20 mol</b>.</div>
<div class="box ex"><b>Worked example 2.</b> CaCO₃ → CaO + CO₂. What mass of CaO comes from heating 50 g of CaCO₃? (Ca = 40, C = 12, O = 16)<br>n(CaCO₃) = 50 ÷ 100 = 0.5 mol. Ratio 1 : 1, so 0.5 mol CaO. M(CaO) = 56. Mass = 0.5 × 56 = <b>28 g</b>.</div>
<div class="box ex"><b>Worked example 3.</b> What volume of CO₂ at s.t.p. is produced in example 2?<br>0.5 mol × 22.4 dm³ = <b>11.2 dm³</b>.</div>
<div class="box ex"><b>Worked example 4.</b> 4.0 g of NaOH is dissolved to make 500 cm³ of solution. Find the concentration.<br>n = 4.0 ÷ 40 = 0.10 mol. Volume = 0.500 dm³. C = 0.10 ÷ 0.500 = <b>0.20 mol/dm³</b>.</div>`,
ex:[{q:'Calculate the molar mass of H₂SO₄ (H = 1, S = 32, O = 16).',a:'2(1) + 32 + 4(16) = 98 g/mol.'},
{q:'How many moles are in 36 g of water?',a:'36 ÷ 18 = 2 mol.'},
{q:'How many molecules are in 0.5 mol of CO₂?',a:'0.5 × 6.02 × 10²³ = 3.01 × 10²³ molecules.'},
{q:'2H₂ + O₂ → 2H₂O. What mass of water forms from 4 g of hydrogen?',a:'n(H₂) = 4 ÷ 2 = 2 mol. Ratio H₂ : H₂O = 2 : 2, so 2 mol water = 2 × 18 = 36 g.'},
{q:'What volume does 0.25 mol of oxygen occupy at s.t.p.?',a:'0.25 × 22.4 = 5.6 dm³.'}]},
{title:'Acids, bases and salts',topic:'Acids, bases, salts, pH, neutralisation, volumetric analysis',html:`
<p>Lemon juice and vinegar taste sour — they are acids. Soap and wood ash feel slippery — they contain bases.</p>
<h2>1. Definitions</h2><div class="box key"><b>Acid</b>: gives hydrogen ions (H⁺) in water, e.g. HCl, H₂SO₄, ethanoic acid.<br><b>Base</b>: reacts with an acid to give salt and water only. A base that dissolves in water is an <b>alkali</b> (gives OH⁻), e.g. NaOH, KOH.<br><b>Salt</b>: formed when the H⁺ of an acid is replaced by a metal or ammonium ion, e.g. NaCl.</div>
<h2>2. The pH scale</h2><svg viewBox="0 0 320 70">${[...Array(15).keys()].map(i=>`<rect x="${10+i*20}" y="10" width="20" height="30" fill="hsl(${i*18},80%,55%)"/><text x="${15+i*20}" y="55" font-size="10">${i}</text>`).join('')}<text x="10" y="68" font-size="10">strong acid</text><text x="140" y="68" font-size="10">neutral</text><text x="245" y="68" font-size="10">strong alkali</text></svg>
<p>pH below 7 is acidic, 7 is neutral (pure water), above 7 is alkaline. Indicators change colour: litmus is red in acid, blue in alkali; phenolphthalein is colourless in acid and pink in alkali; methyl orange is red in acid and yellow in alkali.</p>
<h2>3. Reactions of acids</h2><ul><li>Acid + metal → salt + hydrogen (e.g. Zn + 2HCl → ZnCl₂ + H₂)</li><li>Acid + base → salt + water (neutralisation)</li><li>Acid + carbonate → salt + water + carbon dioxide</li></ul>
<h2>4. Titration (volumetric analysis)</h2><p>We find an unknown concentration by reacting a measured volume with a solution of known concentration until the indicator just changes. Formula from the balanced equation <b>aA + bB → …</b>:</p>
<div class="box key">C_A V_A ÷ (C_B V_B) = a ÷ b (mole ratio)</div>
<p class="muted">Practise in the <a href="#/lab/titration">titration dry lab</a>.</p>
<div class="box ex"><b>Worked example 1.</b> 25.0 cm³ of NaOH needed 20.0 cm³ of 0.100 mol/dm³ HCl. Find the concentration of NaOH. (HCl + NaOH → NaCl + H₂O)<br>Ratio 1 : 1. C_B = (0.100 × 20.0) ÷ 25.0 = <b>0.080 mol/dm³</b>.</div>
<div class="box ex"><b>Worked example 2.</b> 25.0 cm³ of 0.10 mol/dm³ NaOH is neutralised by H₂SO₄ (2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O). The titre was 12.5 cm³. Find the acid concentration.<br>n(NaOH) = 0.10 × 0.025 = 0.0025 mol. n(H₂SO₄) = 0.0025 ÷ 2 = 0.00125 mol. C = 0.00125 ÷ 0.0125 = <b>0.10 mol/dm³</b>.</div>`,
ex:[{q:'Define an alkali and give two examples.',a:'A base that dissolves in water to give hydroxide (OH⁻) ions, e.g. sodium hydroxide and potassium hydroxide.'},
{q:'What colour is phenolphthalein in (a) acid (b) alkali?',a:'(a) Colourless (b) pink.'},
{q:'Complete: CaCO₃ + 2HCl → ?',a:'CaCl₂ + H₂O + CO₂.'},
{q:'20.0 cm³ of 0.20 mol/dm³ NaOH neutralised 25.0 cm³ of HCl. Find the concentration of HCl.',a:'1 : 1 ratio. C = (0.20 × 20.0) ÷ 25.0 = 0.16 mol/dm³.'},
{q:'A solution has pH 3. Is it acidic, neutral or alkaline? What colour would it turn blue litmus?',a:'Acidic; blue litmus turns red.'}]}
]});
