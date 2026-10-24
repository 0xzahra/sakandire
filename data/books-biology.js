window.BOOKS=window.BOOKS||[];
window.BOOKS.push({id:'biology',title:'Biology Made Simple',icon:'🌿',color:'#15803d',blurb:'Cells, movement of substances and nutrition.',
further:['Modern Biology for Senior Secondary Schools','Senior Secondary Biology (your school\'s approved text)'],
chapters:[
{title:'The cell',topic:'Cell structure and functions; plant and animal cells',html:`
<p>The <b>cell</b> is the smallest unit of life. Some living things are a single cell (Amoeba); you have trillions.</p>
<svg viewBox="0 0 320 170"><ellipse cx="80" cy="85" rx="65" ry="55" fill="#ffe6e6" stroke="#b3261e" stroke-width="2"/><circle cx="85" cy="80" r="16" fill="#c9a0dc" stroke="#333"/><text x="70" y="128" font-size="10">cytoplasm</text><text x="20" y="160" font-size="12" font-weight="bold">Animal cell</text><text x="72" y="84" font-size="9">nucleus</text>
<rect x="180" y="25" width="125" height="120" fill="#e5f6dd" stroke="#15803d" stroke-width="5"/><rect x="188" y="33" width="109" height="104" fill="none" stroke="#7a5" /><rect x="215" y="55" width="55" height="60" rx="8" fill="#cfe9ff" stroke="#333"/><text x="222" y="90" font-size="9">vacuole</text>
<circle cx="200" cy="50" r="9" fill="#c9a0dc" stroke="#333"/><ellipse cx="285" cy="125" rx="9" ry="5" fill="#2e8b3e"/><ellipse cx="200" cy="125" rx="9" ry="5" fill="#2e8b3e"/><text x="250" y="160" font-size="9">chloroplasts</text><text x="180" y="20" font-size="9">cell wall</text><text x="180" y="168" font-size="12" font-weight="bold">Plant cell</text></svg>
<h2>1. Parts and jobs</h2><ul><li><b>Cell membrane</b>: thin skin that controls what enters and leaves.</li><li><b>Cytoplasm</b>: jelly where many reactions happen.</li><li><b>Nucleus</b>: holds DNA; controls the cell.</li><li><b>Mitochondria</b>: release energy by respiration.</li><li><b>Ribosomes</b>: make proteins.</li><li><b>Cell wall</b> (plants only): made of cellulose; gives shape and support.</li><li><b>Chloroplasts</b> (plants): contain chlorophyll for photosynthesis.</li><li><b>Large permanent vacuole</b> (plants): holds cell sap, keeps the cell firm.</li></ul>
<h2>2. Plant vs animal cells</h2><div class="box key">Only plant cells have: a cellulose cell wall, chloroplasts, a large central vacuole. Animal cells store glycogen; plant cells store starch.</div>
<h2>3. Levels of organisation</h2><p>Cell → tissue → organ → system → organism. Example: muscle cells → muscle tissue → heart → circulatory system → you.</p>
<div class="box ex"><b>Worked example 1.</b> A cell has a cell wall, chloroplasts and a large vacuole. Is it from a plant or an animal? Explain.<br><b>Plant</b>: only plant cells have all three.</div>
<div class="box ex"><b>Worked example 2.</b> A cell is 0.02 mm wide. A drawing of it is 40 mm wide. What is the magnification?<br>Magnification = drawing size ÷ real size = 40 ÷ 0.02 = <b>×2000</b>.</div>`,
ex:[{q:'Name the part of the cell that controls its activities.',a:'The nucleus.'},
{q:'State two structures found in plant cells but not in animal cells.',a:'Any two: cellulose cell wall, chloroplasts, large permanent vacuole.'},
{q:'What is the function of mitochondria?',a:'They carry out aerobic respiration to release energy for the cell.'},
{q:'Arrange in order from simplest: organ, cell, system, tissue.',a:'Cell → tissue → organ → system.'},
{q:'Why do plant cells have a cell wall?',a:'The cellulose cell wall gives the cell a fixed shape, support and protection, and stops it bursting when it takes in water.'}]},
{title:'Movement in and out of cells',topic:'Diffusion, osmosis, active transport',html:`
<p>Cells need food and oxygen in, and wastes out. Three processes do this.</p>
<h2>1. Diffusion</h2><p>The movement of particles from a region of <b>higher concentration</b> to a region of <b>lower concentration</b>, until evenly spread. No energy from the cell is needed. Example: smell of jollof spreading from the kitchen; oxygen moving from lungs into blood.</p>
<svg viewBox="0 0 320 110"><rect x="10" y="10" width="140" height="90" fill="#f4f8ff" stroke="#333"/><rect x="170" y="10" width="140" height="90" fill="#f4f8ff" stroke="#333"/>
${[[20,20],[30,50],[25,80],[50,30],[55,65],[45,90],[70,20],[75,45],[65,80],[90,60],[95,30]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4" fill="#e07b24"/>`).join('')}<circle cx="130" cy="50" r="4" fill="#e07b24"/>
${[[185,25],[220,70],[260,30],[290,85],[200,90],[240,50],[275,60],[205,50],[250,85],[295,20],[230,20],[265,95]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4" fill="#e07b24"/>`).join('')}<text x="30" y="108" font-size="10">start: crowded on left</text><text x="200" y="108" font-size="10">later: evenly spread</text></svg>
<h2>2. Osmosis</h2><p>The movement of <b>water</b> molecules from a region of high water concentration (dilute solution) to a region of low water concentration (concentrated solution) through a <b>partially permeable membrane</b>.</p>
<ul><li>A plant cell in pure water swells and becomes firm (<b>turgid</b>).</li><li>A plant cell in strong salt solution loses water; the membrane pulls away from the wall (<b>plasmolysis</b>).</li><li>A red blood cell in pure water swells and may burst (<b>haemolysis</b>).</li></ul>
<h2>3. Active transport</h2><p>Moving substances <b>against</b> the concentration gradient (low to high), using <b>energy</b> from respiration. Example: root hairs taking in mineral ions from soil.</p>
<div class="box key">Diffusion: high → low, no energy. Osmosis: water only, through a membrane. Active transport: low → high, needs energy.</div>
<div class="box ex"><b>Worked example 1.</b> Slices of yam were placed in strong salt solution and became soft and lighter. Explain.<br>The salt solution has a lower water concentration than the yam cells, so water left the cells by <b>osmosis</b>. They lost mass and became flaccid.</div>
<div class="box ex"><b>Worked example 2.</b> Why do farmers not put too much fertiliser near plant roots?<br>It makes the soil solution very concentrated, so water moves <b>out</b> of the root cells by osmosis and the plant wilts.</div>`,
ex:[{q:'Define diffusion.',a:'The net movement of particles from a region of higher concentration to a region of lower concentration until they are evenly distributed.'},
{q:'What is needed for osmosis that is not needed for simple diffusion in air?',a:'A partially (selectively) permeable membrane.'},
{q:'Give one example of active transport in plants.',a:'Absorption of mineral ions by root hair cells from the soil.'},
{q:'What happens to a red blood cell placed in distilled water?',a:'Water enters by osmosis; the cell swells and may burst (haemolysis), because it has no cell wall.'},
{q:'Why is salt used to preserve fish?',a:'Salt draws water out of bacteria and fungi by osmosis, so they cannot grow and decay is slowed.'}]},
{title:'Nutrition in plants and animals',topic:'Photosynthesis, food classes, human digestive system',html:`
<h2>1. Photosynthesis</h2><p>Green plants make their own food using light energy.</p>
<div class="box key">carbon dioxide + water —(light, chlorophyll)→ glucose + oxygen<br>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</div>
<svg viewBox="0 0 320 140"><path d="M60 120 Q160 0 260 120 Q160 90 60 120Z" fill="#5fb85f" stroke="#2e6b2e" stroke-width="2"/><line x1="60" y1="120" x2="260" y2="120" stroke="#2e6b2e"/>
<circle cx="290" cy="20" r="16" fill="#f4c25b"/><line x1="275" y1="32" x2="210" y2="70" stroke="#f4c25b" stroke-width="3"/><text x="230" y="50" font-size="10">light</text>
<text x="10" y="40" font-size="10">CO₂ in →</text><text x="10" y="138" font-size="10">water from roots ↑</text><text x="200" y="138" font-size="10">O₂ out, glucose made</text></svg>
<p>Needed: light, chlorophyll, carbon dioxide and water. The glucose is used for energy or stored as starch. Test a leaf for starch with <b>iodine</b>: blue-black means starch present.</p>
<h2>2. Classes of food (for humans)</h2><ul><li><b>Carbohydrates</b> (yam, rice, garri): energy.</li><li><b>Proteins</b> (beans, fish, egg): growth and repair.</li><li><b>Fats and oils</b> (palm oil, groundnut): energy store, insulation.</li><li><b>Vitamins</b> and <b>minerals</b> (fruits, vegetables): keep the body healthy, e.g. lack of vitamin C causes scurvy; lack of iron causes anaemia.</li><li><b>Water</b> and <b>roughage</b> (fibre): roughage helps prevent constipation.</li></ul>
<p>A <b>balanced diet</b> contains all classes in the right amounts. Kwashiorkor is caused by lack of protein.</p>
<h2>3. Digestion in humans</h2><p>Digestion breaks large food molecules into small soluble ones that can be absorbed.</p>
<div class="box key">Mouth: salivary amylase — starch → maltose.<br>Stomach: pepsin (in acid) — proteins → peptides.<br>Small intestine: amylase, lipase, trypsin and others finish digestion; bile (from liver) emulsifies fats. Villi absorb digested food into blood.<br>Large intestine: water absorbed. Waste leaves through the anus (egestion).</div>
<div class="box ex"><b>Worked example 1.</b> A leaf kept in the dark for 48 hours tests negative for starch. Why?<br>Without light, photosynthesis stops; the stored starch is used up and no new starch is made.</div>
<div class="box ex"><b>Worked example 2.</b> Why does bread taste sweet after chewing for a long time?<br>Salivary amylase breaks starch into maltose, a sugar.</div>`,
ex:[{q:'Write the word equation for photosynthesis.',a:'Carbon dioxide + water → (light, chlorophyll) → glucose + oxygen.'},
{q:'What reagent tests for starch, and what colour shows a positive result?',a:'Iodine solution; it turns blue-black.'},
{q:'Name the food class that helps growth and repair, and give one Nigerian food rich in it.',a:'Proteins; e.g. beans, fish, eggs, meat or moi-moi.'},
{q:'What is the role of bile in digestion?',a:'It emulsifies fats (breaks them into small droplets) to give lipase a larger surface area, and neutralises stomach acid.'},
{q:'Name the deficiency disease caused by lack of vitamin C.',a:'Scurvy.'}]}
]});
