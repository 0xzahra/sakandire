window.BOOKS=window.BOOKS||[];
window.BOOKS.push({id:'english',title:'English Made Simple',icon:'📝',color:'#be123c',blurb:'Parts of speech, concord, and essay writing.',
further:['Countdown to WASSCE/SSCE, NECO, UTME English Language','Senior Secondary English (your school\'s approved text)'],
chapters:[
{title:'Parts of speech',topic:'Grammar: word classes (lexis and structure)',html:`
<p>Every English word belongs to a <b>word class</b> (part of speech), depending on the job it does in a sentence.</p>
<svg viewBox="0 0 320 120"><text x="10" y="40" font-size="15"><tspan fill="#2f6fd6">Ada</tspan> <tspan fill="#15803d">quickly</tspan> <tspan fill="#be123c">bought</tspan> <tspan fill="#7c3aed">fresh</tspan> <tspan fill="#c2410c">tomatoes</tspan> <tspan fill="#555">at</tspan> <tspan fill="#555">the</tspan> <tspan fill="#c2410c">market</tspan>.</text>
<text x="10" y="70" font-size="10" fill="#2f6fd6">noun</text><text x="45" y="70" font-size="10" fill="#15803d">adverb</text><text x="105" y="70" font-size="10" fill="#be123c">verb</text><text x="150" y="70" font-size="10" fill="#7c3aed">adjective</text><text x="195" y="70" font-size="10" fill="#c2410c">noun</text><text x="250" y="70" font-size="10" fill="#555">prep., article</text></svg>
<ul><li><b>Noun</b>: names a person, place, thing or idea — Chinedu, Kano, book, honesty.</li><li><b>Pronoun</b>: stands for a noun — he, she, they, it, who.</li><li><b>Verb</b>: shows action or state — run, is, seem.</li><li><b>Adjective</b>: describes a noun — tall, red, three.</li><li><b>Adverb</b>: describes a verb, adjective or adverb — quickly, very, yesterday.</li><li><b>Preposition</b>: shows relationship — in, on, at, under, between.</li><li><b>Conjunction</b>: joins words or clauses — and, but, because, although.</li><li><b>Interjection</b>: shows feeling — Oh! Wow! Ehen!</li></ul>
<div class="box key">The same word can change class. "She will <b>book</b> a ticket" (verb). "I read a <b>book</b>" (noun). Always look at what the word is doing.</div>
<div class="box ex"><b>Worked example 1.</b> Identify the word class of "fast" in: (a) He ran fast. (b) It is a fast car.<br>(a) <b>Adverb</b> (tells how he ran). (b) <b>Adjective</b> (describes car).</div>
<div class="box ex"><b>Worked example 2.</b> "Between you and ___" — I or me?<br>After a preposition we use the object pronoun: <b>between you and me</b>.</div>`,
ex:[{q:'Name the word class of the underlined word: "She sang <u>beautifully</u>."',a:'Adverb — it describes how she sang.'},
{q:'Give the word class of "light" in "Please light the lamp."',a:'Verb.'},
{q:'Choose the correct pronoun: "The prize was shared between Musa and (I/me)."',a:'me — object pronoun after the preposition "between".'},
{q:'Identify the conjunction: "We stayed indoors because it rained."',a:'because.'},
{q:'Write a sentence using "round" as a preposition.',a:'Example: "The children ran round the compound." (Any sentence where "round" shows position/direction relative to a noun.)'}]},
{title:'Concord (subject–verb agreement)',topic:'Grammar: concord',html:`
<p><b>Concord</b> means agreement. A singular subject takes a singular verb; a plural subject takes a plural verb.</p>
<div class="box key">The boy <b>plays</b>. The boys <b>play</b>. (In the present tense, the singular verb usually ends in -s.)</div>
<h2>Rules that often appear in exams</h2><ol>
<li><b>Words between subject and verb do not change it</b>: "The box of oranges <b>is</b> heavy." (subject = box)</li>
<li><b>Either/neither … or/nor</b>: the verb agrees with the nearer subject: "Neither the teacher nor the students <b>were</b> late." / "Neither the students nor the teacher <b>was</b> late."</li>
<li><b>Each, every, everyone, nobody, somebody</b> take singular verbs: "Everyone <b>has</b> arrived."</li>
<li><b>Two subjects joined by "and"</b> are plural: "Bola and Ngozi <b>are</b> here." But a single idea is singular: "Rice and stew <b>is</b> my favourite meal."</li>
<li><b>As well as, together with, along with</b> do not add to the subject: "The principal, as well as the teachers, <b>is</b> coming."</li>
<li><b>Collective nouns</b> (team, committee, family): singular when acting as one unit, plural when members act separately. "The committee <b>has</b> decided." "The committee <b>are</b> arguing among themselves."</li>
<li><b>Nouns plural in form but singular in meaning</b>: news, mathematics, physics: "The news <b>is</b> good."</li>
<li><b>Always plural</b>: trousers, scissors, cattle, police: "The police <b>are</b> here."</li>
<li><b>"One of the + plural noun + who/that"</b>: the verb agrees with the plural noun: "She is one of the girls who <b>sing</b> in the choir."</li></ol>
<svg viewBox="0 0 320 80"><rect x="10" y="20" width="120" height="40" rx="8" fill="#cfe0ff"/><text x="22" y="45" font-size="13">SUBJECT (1)</text><rect x="190" y="20" width="120" height="40" rx="8" fill="#ffe0e6"/><text x="200" y="45" font-size="13">VERB (1)</text><path d="M130 40h55" stroke="#333" stroke-width="2"/><path d="M180 34l8 6-8 6" fill="none" stroke="#333" stroke-width="2"/></svg>
<div class="box ex"><b>Worked example 1.</b> "The quality of the mangoes (is/are) poor."<br>Subject = quality (singular) → <b>is</b>.</div>
<div class="box ex"><b>Worked example 2.</b> "Neither Emeka nor his brothers (has/have) paid."<br>Nearer subject = brothers (plural) → <b>have</b>.</div>`,
ex:[{q:'Choose: "Mathematics (is/are) my best subject."',a:'is — "mathematics" is singular in meaning.'},
{q:'Choose: "Each of the students (has/have) a textbook."',a:'has — "each" is singular.'},
{q:'Choose: "The cattle (is/are) grazing."',a:'are — "cattle" is always plural.'},
{q:'Correct the error: "The leader, together with his followers, are here."',a:'"The leader, together with his followers, is here." — "together with" does not make the subject plural.'},
{q:'Choose: "Either the girls or Tunde (is/are) to blame."',a:'is — the verb agrees with the nearer subject, Tunde.'}]},
{title:'Writing a good essay and letter',topic:'Essay writing: letters, narrative, argumentative, articles',html:`
<p>In WAEC/NECO English Paper 1 you write an essay (often around 450 words). Marks are given for <b>Content, Organisation, Expression and Mechanical accuracy</b>.</p>
<h2>1. Plan first (5 minutes)</h2><ol><li>Read the question twice. Underline who, what, and the type of essay.</li><li>Jot 4–5 main points.</li><li>Put them in a sensible order: introduction, body paragraphs (one point each), conclusion.</li></ol>
<h2>2. Informal letter (to a friend or relative)</h2><svg viewBox="0 0 320 200"><rect x="10" y="10" width="300" height="180" fill="#fffdf6" stroke="#333"/><text x="210" y="30" font-size="9">Writer's address</text><text x="210" y="42" font-size="9">Date</text><text x="20" y="62" font-size="9">Dear Amina,</text>
<rect x="20" y="70" width="270" height="20" fill="#eef"/><text x="25" y="84" font-size="9">Opening: greetings, purpose</text><rect x="20" y="95" width="270" height="40" fill="#efe"/><text x="25" y="118" font-size="9">Body: paragraphs on each point</text><rect x="20" y="140" width="270" height="16" fill="#fee"/><text x="25" y="152" font-size="9">Closing remarks</text><text x="200" y="172" font-size="9">Yours sincerely / Your friend,</text><text x="200" y="184" font-size="9">Ngozi</text></svg>
<p>One address (yours), date, salutation ("Dear …"), no title. Friendly tone, but no slang or text-speak.</p>
<h2>3. Formal letter (to a principal, editor, company)</h2><p>Two addresses (yours at top right; recipient's on the left), date, "Dear Sir/Madam," a <b>title</b> in capitals (e.g. "REQUEST FOR A SCHOOL BUS"), formal tone, close with "Yours faithfully," then your signature and full name.</p>
<h2>4. Argumentative / debate essay</h2><p>Address the audience ("The Chairman, panel of judges…"), state your stand clearly, give 3–4 points with examples, then a strong conclusion restating your stand.</p>
<h2>5. Expression tips</h2><ul><li>Use short and long sentences for variety.</li><li>Link ideas: firstly, moreover, however, therefore, in conclusion.</li><li>Avoid clichés and Pidgin unless quoting speech.</li><li>Check spelling, punctuation and concord at the end (5 minutes).</li></ul>
<div class="box ex"><b>Worked example.</b> Question: "Write a letter to your principal suggesting two ways to improve the school library."<br>Type: <b>formal</b>. Title: "SUGGESTIONS FOR IMPROVING THE SCHOOL LIBRARY". Points: (1) buy new textbooks and add a reading corner with fans; (2) extend opening hours to after school. Close: "Yours faithfully," signature, full name, class.</div>`,
ex:[{q:'How do you end a formal letter that begins "Dear Sir"?',a:'"Yours faithfully," followed by your signature and full name.'},
{q:'How many addresses does an informal letter have?',a:'One — the writer\'s address (with the date).'},
{q:'Name the four areas examiners mark in an essay.',a:'Content, Organisation, Expression and Mechanical accuracy.'},
{q:'Give two linking words for adding a point.',a:'Any two: moreover, furthermore, in addition, also, besides.'},
{q:'Write a suitable title for a letter to the Chairman of your Local Government about bad roads.',a:'Example: "THE BAD STATE OF ROADS IN OUR COMMUNITY" (any clear title in capitals stating the issue).'}]}
]});
