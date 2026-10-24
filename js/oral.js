/* Oral English / phonics. Original drills. Audio via the browser Web Speech API (no audio files). */
(function(){
const V=[
['iː','long i','see, feet, key, people','Lips spread, tongue high and front, hold it long.'],
['ɪ','short i','sit, bit, women, busy','Like iː but short and relaxed.'],
['e','short e','bed, head, said, many','Tongue mid-front, mouth half open.'],
['æ','a as in cat','cat, man, bag, plait','Mouth wide open, tongue low front. Do not say it like "e" or "a:".'],
['ɑː','long a','car, father, heart, calm','Mouth wide open, tongue low back, long.'],
['ɒ','short o','hot, dog, want, knowledge','Lips slightly rounded, short.'],
['ɔː','long o','saw, law, door, caught','Lips rounded, long. Not a diphthong.'],
['ʊ','short u','put, book, could, woman','Lips loosely rounded, short.'],
['uː','long u','food, blue, shoe, through','Lips tightly rounded, long.'],
['ʌ','u as in cup','cup, love, blood, country','Mouth half open, tongue central. Different from ɒ.'],
['ɜː','er sound','bird, work, learn, journey','Tongue central, lips neutral, long. No r is sounded in British English.'],
['ə','schwa','about, sofa, teacher, photograph','The weak, unstressed vowel. The commonest vowel in English.']];
const D=[
['eɪ','day, rain, great, eight','Glide from e to ɪ.'],
['aɪ','my, time, buy, height','Glide from a to ɪ.'],
['ɔɪ','boy, coin, noise, buoy','Glide from ɔ to ɪ.'],
['aʊ','now, house, bough, drought','Glide from a to ʊ.'],
['əʊ','go, home, though, sew','Glide from ə to ʊ.'],
['ɪə','here, ear, beer, idea','Glide from ɪ to ə.'],
['eə','hair, care, where, their','Glide from e to ə.'],
['ʊə','tour, poor, cure, jury','Glide from ʊ to ə (many speakers now say ɔː).']];
const C=[
['p','pen, happy, cup','voiceless bilabial plosive'],['b','bag, rubber, cab','voiced bilabial plosive'],
['t','top, letter, sat','voiceless alveolar plosive'],['d','dog, ladder, bad','voiced alveolar plosive'],
['k','cat, school, back, queue','voiceless velar plosive'],['g','go, bigger, egg, ghost','voiced velar plosive'],
['f','fan, phone, laugh','voiceless labiodental fricative'],['v','van, never, of','voiced labiodental fricative'],
['θ','think, author, bath','voiceless dental fricative (tongue between teeth; not "t")'],['ð','this, mother, breathe','voiced dental fricative (not "d")'],
['s','sit, city, pass','voiceless alveolar fricative'],['z','zoo, roses, was','voiced alveolar fricative'],
['ʃ','shoe, nation, sugar, machine','voiceless palato-alveolar fricative'],['ʒ','measure, vision, garage','voiced palato-alveolar fricative'],
['h','hat, who, ahead','voiceless glottal fricative (silent in hour, honest)'],
['tʃ','chair, nature, watch','voiceless affricate'],['dʒ','jam, age, bridge, soldier','voiced affricate'],
['m','man, summer, lamb','bilabial nasal'],['n','no, dinner, knee','alveolar nasal'],['ŋ','sing, think, finger','velar nasal'],
['l','leg, yellow, ball','lateral approximant'],['r','red, sorry, wrong','post-alveolar approximant (not rolled)'],
['w','wet, one, quick','bilabial approximant'],['j','yes, use, onion','palatal approximant']];
const STRESS=[
['Noun vs verb pairs','Nouns/adjectives usually stress the 1st syllable, verbs the 2nd.',[['REcord (n)','reCORD (v)'],['PREsent (n)','preSENT (v)'],['OBject (n)','obJECT (v)'],['CONduct (n)','conDUCT (v)'],['PERmit (n)','perMIT (v)'],['REbel (n)','reBEL (v)'],['CONtract (n)','conTRACT (v)'],['IMport (n)','imPORT (v)']]],
['Suffix rules','-tion/-sion/-ic/-ical: stress the syllable just before. -ee/-eer/-ese: stress the suffix.',[['eduCAtion','popuLAtion'],['ecoNOMic','eLECtric'],['employEE','engiNEER'],['ChiNESE','JapaNESE']]],
['Words Nigerians often mis-stress','Tap and copy the model.',[['CHAMpion','deVELop'],['HOStel','apPROXimately'],['CAtegory','comMITtee'],['adVERtisement','inTEResting']]]];
const INTON=[
['Falling tune (↘) – statements','I live in Kano.'],['Falling tune (↘) – commands','Close the door.'],
['Falling tune (↘) – wh-questions','Where are you going?'],['Rising tune (↗) – yes/no questions','Are you coming?'],
['Rising tune (↗) – unfinished lists','I bought rice, beans, yam, and oil.'],['Rising (↗) – polite question tags (unsure)',"You're a student, aren't you?"],
['Falling (↘) – question tags (sure)',"It's hot today, isn't it?"],['Emphatic stress – meaning changes','I didn\'t say SHE stole the money.']];
const CONTRAST=[['ship','sheep'],['full','fool'],['cat','cut'],['hot','hut'],['bird','bed'],['thin','tin'],['then','den'],['van','fan'],['shoe','sue'],['live','leave'],['pull','pool'],['law','low'],['work','walk'],['hair','here'],['chair','share'],['berry','bury']];
let voice=null;
function pick(){const vs=speechSynthesis.getVoices();voice=vs.find(v=>/en[-_]GB/i.test(v.lang))||vs.find(v=>/^en/i.test(v.lang))||null}
if('speechSynthesis'in window){pick();speechSynthesis.onvoiceschanged=pick}
window.sayIt=function(t,rate){if(!('speechSynthesis'in window)){alert('Your browser has no speech voice. Try Chrome on Android.');return}
 speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t.replace(/\(.*?\)/g,''));u.lang='en-GB';if(voice)u.voice=voice;u.rate=rate||0.85;speechSynthesis.speak(u)};
const b=t=>`<button class="say" aria-label="Hear ${esc(t)}" onclick="sayIt(${esc(JSON.stringify(t))})">▶</button>`;
const words=s=>s.split(', ').map(w=>`<span class="chip">${esc(w)} ${b(w)}</span>`).join(' ');
window.Oral={render(sub){
 const noVoice=!('speechSynthesis'in window);
 let h=`<p class="muted"><a href="#/book/english">← English</a></p><h1>Oral English & Phonics</h1>
 <div class="emph">Tap ▶ to hear a word in a British English (en-GB) voice from your phone. The voice comes from your device, so quality varies; Chrome on Android works best and some phones work offline once the voice is installed (Settings → Text-to-speech). Single sounds are shown through example words because speech engines read words, not isolated phonemes.${noVoice?' <b>Your browser has no speech support.</b>':''}</div>
 <p>Tags: WAEC/NECO English Paper 3 (Oral) · JAMB UTME English "Oral forms" · 44 sounds of RP (12 vowels, 8 diphthongs, 24 consonants).</p>
 <div class="row"><a class="btn" href="#/oral/vowels">Vowels</a><a class="btn" href="#/oral/diph">Diphthongs</a><a class="btn" href="#/oral/cons">Consonants</a><a class="btn" href="#/oral/pairs">Minimal pairs</a><a class="btn" href="#/oral/stress">Stress</a><a class="btn" href="#/oral/inton">Intonation</a><a class="btn" href="#/oral/tips">Exam tips</a></div>`;
 sub=sub||'vowels';
 if(sub=='vowels')h+=`<h2>12 pure vowels (monophthongs)</h2><div class="sound">`+V.map(v=>`<div class="card"><span class="ipa">/${v[0]}/</span> <span class="muted">${v[1]}</span><p>${words(v[2])}</p><p class="muted small">${v[3]}</p></div>`).join('')+'</div><p>Length mark ː means a long vowel. Pairs to practise: iː–ɪ, uː–ʊ, ɔː–ɒ, ɑː–æ–ʌ, ɜː–e.</p>';
 if(sub=='diph')h+=`<h2>8 diphthongs (gliding vowels)</h2><div class="sound">`+D.map(v=>`<div class="card"><span class="ipa">/${v[0]}/</span><p>${words(v[1])}</p><p class="muted small">${v[2]}</p></div>`).join('')+'</div><p>Triphthongs combine a diphthong with ə: fire /aɪə/, power /aʊə/, player /eɪə/.</p>';
 if(sub=='cons')h+=`<h2>24 consonants</h2><div class="sound">`+C.map(v=>`<div class="card"><span class="ipa">/${v[0]}/</span><p>${words(v[1])}</p><p class="muted small">${v[2]}</p></div>`).join('')+`</div><h3>Silent letters</h3><p>${words('knife, write, lamb, island, honest, debt, psychology, castle, autumn, salmon')}</p><h3>-ed endings</h3><p>/t/ after voiceless sounds: ${words('walked, kissed')} · /d/ after voiced: ${words('played, robbed')} · /ɪd/ after t or d: ${words('wanted, needed')}</p><h3>-s endings</h3><p>/s/: ${words('cats, books')} · /z/: ${words('dogs, bags')} · /ɪz/: ${words('buses, judges')}</p>`;
 if(sub=='pairs')h+=`<h2>Minimal pairs</h2><p>Words that differ by one sound. Hear both; then cover the screen and test a friend.</p><div class="sound">`+CONTRAST.map(p=>`<div class="card">${p.map(w=>`<b>${w}</b> ${b(w)}`).join(' &nbsp;vs&nbsp; ')}</div>`).join('')+'</div>';
 if(sub=='stress')h+=`<h2>Word stress drills</h2><p>Capital letters mark the stressed syllable. Listen and repeat aloud.</p>`+STRESS.map(s=>`<div class="card"><h3>${s[0]}</h3><p class="muted">${s[1]}</p>${s[2].map(p=>`<p>${p.map(w=>`${esc(w)} ${b(w.toLowerCase())}`).join(' · ')}</p>`).join('')}</div>`).join('')+`<h3>Sentence stress</h3><p>Content words (nouns, main verbs, adjectives, adverbs) are stressed; function words (a, the, of, to, and) are weak and often use /ə/: "I want to GO to the MARket" ${b('I want to go to the market')}</p>`;
 if(sub=='inton')h+=`<h2>Intonation drills</h2>`+INTON.map(i=>`<div class="card"><b>${i[0]}</b><p>${esc(i[1])} ${b(i[1])}</p></div>`).join('')+'<p class="muted">Synthetic voices do not always produce perfect tunes; use the patterns described (↘ / ↗) as your guide.</p>';
 if(sub=='tips')h+=`<h2>How Oral English questions are set</h2><ul><li><b>Vowel/consonant contrast:</b> "Choose the word that has the same vowel sound as the underlined letters." Say every option aloud in your head; spelling misleads (e.g. <i>blood</i> has /ʌ/, not /uː/).</li><li><b>Rhymes:</b> match the final vowel + consonant sounds, not letters (<i>height</i> rhymes with <i>kite</i>).</li><li><b>Stress:</b> "Which word is stressed on the 2nd syllable?" Use the noun/verb and suffix rules.</li><li><b>Emphatic stress:</b> the capitalised word answers a hidden question. "TUNDE bought the car" → <i>Was it Musa who bought the car?</i></li><li><b>Intonation:</b> statements and wh-questions fall; yes/no questions rise.</li></ul><p>Further reading: your school Oral English textbook (title only) and a good learner's dictionary with IPA.</p>`;
 return h}};
})();
