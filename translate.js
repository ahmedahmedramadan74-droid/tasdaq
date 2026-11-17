/* =====================================================================
   الترجمة التلقائية الديناميكية (عربي ⇄ إنجليزي)
   ---------------------------------------------------------------------
   كيف تعمل:
   - أي عنصر/عنوان/وصف/شركة/مصدر/بطاقة جديدة يكتفي بلغة واحدة (الجانب الآخر فارغ "" أو نص مفرد)
     تُترجَم لغته الناقصة تلقائيًا عند فتح الموقع.
   - أي نص له اللغتان معًا (كل المحتوى الحالي) لا يُلمس إطلاقًا.
   - أثناء انتظار الترجمة (أو إن تعذّرت) يُعرض النص الأصلي، ولا يُعرض فراغ أبدًا.
   - الترجمة تُحفظ في localStorage (وفي data/translations-seed.js إن صدّرتها) فلا تُعاد.
   - المترجم: مترجم Chrome المدمج إن كان متاحًا دون تنزيل، وإلا خدمة MyMemory المجانية.
   إعدادات اختيارية (اضبطها قبل تحميل هذا الملف): window.TRANSLATE_CONTACT_EMAIL = "you@example.com"
   (يرفع حصة MyMemory اليومية المجانية).
   ===================================================================== */
(function(){
"use strict";
const LS="tr-cache-v1", AR=/[\u0600-\u06FF]/g, LAT=/[A-Za-z]/g, HAS_AR=/[\u0600-\u06FF]/, HAS_LAT=/[A-Za-z]/;
const has=s=>typeof s==="string"&&s.trim()!=="";
const isAr=s=>(s.match(AR)||[]).length>(s.match(LAT)||[]).length;
const h53=s=>{let a=0xdeadbeef,b=0x41c6ce57;for(let i=0,c;i<s.length;i++){c=s.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677)}
  a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);
  return (4294967296*(2097151&b)+(a>>>0)).toString(36)+s.length.toString(36)};
const ck=(from,to,t)=>from+">"+to+":"+h53(t);

/* ---------- الذاكرة ---------- */
let cache={}; try{cache=JSON.parse(localStorage.getItem(LS)||"{}")||{}}catch(_){cache={}}
const seed=()=>(typeof TRANSLATION_SEED!=="undefined"&&TRANSLATION_SEED)||{};
let saveT=null;
const save=()=>{clearTimeout(saveT);saveT=setTimeout(()=>{try{localStorage.setItem(LS,JSON.stringify(cache))}catch(_){}},300)};
const lookup=k=>seed()[k]||cache[k]||null;

/* ---------- المترجمات ---------- */
const okOut=(out,src,to)=>has(out)&&out.trim()!==src.trim()&&(to==="ar"?HAS_AR.test(out):HAS_LAT.test(out))&&!/MYMEMORY WARNING|INVALID (LANGUAGE|REQUEST)|QUERY LENGTH LIMIT/i.test(out);
const tcache={};
async function viaBrowser(text,from,to){
  if(!("Translator" in self)) return null;
  const k=from+">"+to;
  if(!tcache[k]) tcache[k]=(async()=>{
    try{ if(await Translator.availability({sourceLanguage:from,targetLanguage:to})!=="available") return null;
         return await Translator.create({sourceLanguage:from,targetLanguage:to}) }catch(_){return null}})();
  const t=await tcache[k]; if(!t) return null;
  try{return await t.translate(text)}catch(_){return null}
}
function chunks(text,max=450){
  const parts=text.split(/(?<=[.!?؟۔])\s+/), out=[]; let cur="";
  for(let p of parts){
    while(p.length>max){const cut=p.lastIndexOf(" ",max)>0?p.lastIndexOf(" ",max):max; if(cur){out.push(cur);cur=""} out.push(p.slice(0,cut)); p=p.slice(cut).trim()}
    if((cur+" "+p).trim().length>max){out.push(cur);cur=p}else cur=(cur+" "+p).trim();
  }
  if(cur) out.push(cur); return out.filter(has);
}
let pausedUntil=0;
async function viaMyMemory(text,from,to){
  if(Date.now()<pausedUntil) return null;
  const res=[];
  for(const c of chunks(text)){
    const ctl=new AbortController(), tm=setTimeout(()=>ctl.abort(),12000);
    try{
      const email=window.TRANSLATE_CONTACT_EMAIL?"&de="+encodeURIComponent(window.TRANSLATE_CONTACT_EMAIL):"";
      const r=await fetch("https://api.mymemory.translated.net/get?q="+encodeURIComponent(c)+"&langpair="+from+"|"+to+email,{signal:ctl.signal});
      if(r.status===429){pausedUntil=Date.now()+30*60e3;return null}
      const j=await r.json(), st=+j.responseStatus, t=j&&j.responseData&&j.responseData.translatedText;
      if(st===429||/MYMEMORY WARNING/i.test(t||"")){pausedUntil=Date.now()+30*60e3;return null}
      if(st!==200||!has(t)) return null;
      res.push(t);
    }catch(_){return null}finally{clearTimeout(tm)}
  }
  return res.join(" ");
}
const inflight={}, failedUntil={}, failures=[];
function translate(text,from,to){
  const k=ck(from,to,text), hit=lookup(k); if(hit) return Promise.resolve(hit);
  if((failedUntil[k]||0)>Date.now()) return Promise.resolve(null);
  return inflight[k]||(inflight[k]=(async()=>{
    for(const fn of [viaBrowser,viaMyMemory]){
      const out=await fn(text,from,to);
      if(okOut(out,text,to)){cache[k]=out.trim();save();return cache[k]}
    }
    failedUntil[k]=Date.now()+10*60e3; failures.push({from,to,text:text.slice(0,80)});
    return null;
  })().finally(()=>{delete inflight[k]}));
}

/* ---------- اكتشاف النصوص الناقصة ---------- */
const slots=[];
/* بصمة كل زوج نصوص كما شُحن (data/translations-baseline.js): إن تغيّر أحد الجانبين وحده بعد ذلك
   (عدّلتَ العربية مثلًا) فالجانب الآخر قديم، فيُعاد ترجمته من الجانب المعدَّل. إن عدّلتَ الجانبين معًا لا يُلمس شيء. */
const BASE=(typeof TRANSLATION_BASELINE!=="undefined"&&TRANSLATION_BASELINE)||{}, known={};
/* النص الأصلي يظهر مؤقتًا في الخانة المراد ترجمتها إلى أن تصل الترجمة (أو دائمًا إن تعذّرت) */
function queue(text,from,to,setTo){
  setTo(text);
  if(to==="en"&&!HAS_AR.test(text)) return;      // النص ليس عربيًا أصلًا (مثل اسم لاتيني أو تاريخ): يبقى كما هو
  if(!/\p{L}/u.test(text)) return;               // لا حروف تُترجم (أرقام/رموز)
  slots.push({setTo,text,from,to,done:false});
}
function consider(key,ve,setE,va,setA){
  const hE=has(ve), hA=has(va);
  if(hE&&hA){
    known[key]=[h53(ve),h53(va)];
    const b=BASE[key]; if(!b) return;
    const enSame=known[key][0]===b[0], arSame=known[key][1]===b[1];
    if(enSame===arSame) return;                   // كلاهما كما شُحن، أو كلاهما عُدِّل: لا تدخّل
    const from=enSame?"ar":"en", to=enSame?"en":"ar";
    return queue(enSame?va:ve,from,to,to==="en"?setE:setA);
  }
  if(hE===hA) return;
  const text=(hE?ve:va), src=isAr(text)?"ar":"en", to=src==="en"?"ar":"en";
  (src==="en"?setE:setA)(text);
  queue(text,src,to,src==="en"?setA:setE);
}
function pairArr(key,a,ke,ka){ if(Array.isArray(a)) consider(key,a[ke],v=>{a[ke]=v},a[ka],v=>{a[ka]=v}) }
function pairObj(key,o){ if(o&&typeof o==="object"&&!Array.isArray(o)) consider(key,o.en,v=>{o.en=v},o.ar,v=>{o.ar=v}) }
function parallel(pre,en,ar){ // UI / P3T: كائنان متوازيان
  if(!en||!ar||typeof en!=="object"||typeof ar!=="object") return;
  new Set([...Object.keys(en),...Object.keys(ar)]).forEach(k=>{
    const a=en[k], b=ar[k];
    if(typeof a==="string"||typeof b==="string"){ if((a===undefined||typeof a==="string")&&(b===undefined||typeof b==="string")) consider(pre+"."+k,a,v=>{en[k]=v},b,v=>{ar[k]=v}) }
    else if(a&&b&&typeof a==="object"&&typeof b==="object"&&!Array.isArray(a)) parallel(pre+"."+k,a,b);
  });
}
const toPair=x=>typeof x==="string"?(isAr(x)?["",x]:[x,""]):x;
function scan(){
  const before=slots.length, seen=new Set(), once=(o,f)=>{if(o&&typeof o==="object"&&!seen.has(o)){seen.add(o);f(o)}};
  if(typeof PRODUCTS!=="undefined") PRODUCTS.forEach(p=>{
    if(typeof p.n==="string") p.n=toPair(p.n); if(typeof p.co==="string") p.co=toPair(p.co);
    once(p.n,a=>pairArr("P:"+p.id+":n",a,0,1)); once(p.co,a=>pairArr("P:"+p.id+":co",a,0,1)); once(p.r,o=>pairObj("P:"+p.id+":r",o)); once(p.src,o=>pairObj("P:"+p.id+":src",o));
  });
  if(typeof COLLECTIONS!=="undefined") Object.entries(COLLECTIONS).forEach(([cid,c])=>{
    Object.entries(c).forEach(([k,v])=>{ if(v&&typeof v==="object"&&!Array.isArray(v)&&("en" in v||"ar" in v)) once(v,o=>pairObj("C"+cid+":"+k,o)) });
    (c.cards||[]).forEach((k,n)=>once(k,a=>{pairArr("C"+cid+":card"+n+":a",a,0,1);pairArr("C"+cid+":card"+n+":b",a,2,3)}));
  });
  if(typeof UI!=="undefined") parallel("UI",UI.en,UI.ar);
  if(typeof P3T!=="undefined") parallel("P3T",P3T.en,P3T.ar);
  if(slots.length>before) refresh();
  run();
  return slots.length-before;
}

/* ---------- التشغيل والتحديث ---------- */
let rT=null, active=0;
function refresh(){
  clearTimeout(rT); rT=setTimeout(()=>{
    try{
      if(typeof PRODUCTS!=="undefined"&&typeof norm==="function") PRODUCTS.forEach(p=>p.idx=norm([p.id,p.n[0],p.n[1],p.co[0],p.co[1],p.r.en,p.r.ar,P3T.en.cats[p.cat],P3T.ar.cats[p.cat]].join(" ")));
      if(typeof applyLang==="function") applyLang(lang);
    }catch(e){console.warn("[translate] refresh failed",e)}
  },350);
}
function run(){
  const L=typeof lang!=="undefined"?lang:"en";
  slots.filter(s=>!s.done&&!s.busy&&s.to===L).forEach(s=>{
    s.busy=true;
    (async()=>{
      while(active>=3) await new Promise(r=>setTimeout(r,60));
      active++;
      try{ const t=await translate(s.text,s.from,s.to); if(t){s.setTo(t);s.done=true;refresh()} }
      finally{active--;s.busy=false}
    })();
  });
}
const baseApply=typeof applyLang==="function"?applyLang:null;
if(baseApply) window.applyLang=function(l){const r=baseApply.apply(this,arguments);setTimeout(run,0);return r};

window.Translator={
  scan, run, baseline:()=>JSON.parse(JSON.stringify(known)),
  pending:()=>slots.filter(s=>!s.done).map(s=>({from:s.from,to:s.to,text:s.text.slice(0,60)})),
  failures:()=>failures.slice(),
  clearCache:()=>{cache={};try{localStorage.removeItem(LS)}catch(_){}},
  exportBaseline(){ /* بعد أن ترضى عن النصوص الحالية: يثبّتها كنقطة مرجعية جديدة */
    const body="/* مُصدَّر بـ Translator.exportBaseline() — لا تعدّله يدويًا */\nconst TRANSLATION_BASELINE = "+JSON.stringify(Object.assign({},BASE,known))+";\n";
    const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([body],{type:"text/javascript"})); a.download="translations-baseline.js"; a.click();
    return Object.keys(known).length;
  },
  exportSeed(){
    const all=Object.assign({},seed(),cache);
    const body="/* مُصدَّر تلقائيًا بـ Translator.exportSeed() — لا تعدّله يدويًا */\nconst TRANSLATION_SEED = "+JSON.stringify(all,null,1)+";\n";
    const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([body],{type:"text/javascript"})); a.download="translations-seed.js"; a.click();
    return Object.keys(all).length;
  }
};
scan();
})();
