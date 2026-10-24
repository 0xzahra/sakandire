/* helper: adds syllabus chapters (by class) to a book */
window.ADD=function(id,list,existingCls){const b=(window.BOOKS||[]).find(x=>x.id===id);if(!b)return;
 if(existingCls)b.chapters.forEach((c,i)=>{c.cls=c.cls||existingCls[i]||'SS1'});
 list.forEach(([cls,title,html,ex,syl])=>b.chapters.push({cls,title,topic:title,html,syl,ex:(ex||[]).map(([q,a])=>({q,a}))}))};
