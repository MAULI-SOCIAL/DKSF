/* ===== EDIT THESE ===== */
const EMAIL="maulikatkeoffice@gmail.com",WA="919096929856";/* WhatsApp number with country code, e.g. "919876543210". Empty = button hidden */
const SOCIAL={Facebook:"",Instagram:"",YouTube:""};/* paste full profile links; empty = hidden */
/* TOP SLIDESHOW: [file inside /img, Marathi title, English title]. Photos (.jpg .png .webp) and videos (.mp4 .webm) can be mixed in any order. Add, remove or reorder rows freely. */
const SLIDES=[["slide1.jpg","विद्यार्थ्यांसाठी शिष्यवृत्ती","Scholarships for students"],["slide2.jpg","गावोगावी आरोग्य सेवा","Health services close to home"],["slide3.jpg","महिलांना रोजगाराची संधी","Work opportunities for women"],["slide4.jpg","गरजू कुटुंबांना अन्नधान्य","Food grain for families in need"],["slide5.jpg","सण, संस्कृती आणि एकोपा","Festivals, culture and togetherness"]];
const IMG_SECONDS=5.5,VIDEO_MAX_SECONDS=15;/* a video moves on when it ends, or after VIDEO_MAX_SECONDS */
/* GALLERY (home slideshow + About gallery) and JANTA DARBAR videos need NO editing here: just put g1.jpg, g2.jpg, g3.jpg ... (or g4.mp4) and darbar1.mp4, darbar2.mp4 ... in /img and they appear by themselves. Text shown when a photo is opened goes in details.js */
/* NEWS SNAPSHOTS (news page): clippings named news1.jpg, news2.jpg, news3.jpg ... are found AUTOMATICALLY. This list only holds the first seven headlines. For any new clipping, add its date and headline in details.js instead (see the example there). */
const NEWS=[["news1.jpg","४ ऑक्टोबर २०२२","4 Oct 2022","नवरात्रोत्सव २०२२ – रास दांडिया","Navratri 2022: Raas Dandiya"],["news2.jpg","२९ ऑगस्ट २०२२","29 Aug 2022","शाडू माती गणपती मूर्ती कार्यशाळा","Clay Ganesh idol workshop"],["news3.jpg","२२ ऑगस्ट २०२२","22 Aug 2022","रेनकोट व छत्रीचे वाटप","Raincoats and umbrellas given out"],["news4.jpg","२० ऑगस्ट २०२२","20 Aug 2022","विद्यार्थी गुणगौरव","Student achievers honoured"],["news5.jpg","३ मे २०२२","3 May 2022","रमजान ईदनिमित्त इफ्तारी भेट","Iftar gifts for Ramzan Eid"],["news6.jpg","१८ एप्रिल २०२२","18 Apr 2022","फॅमिलीथॉन","Familython"],["news7.jpg","११ एप्रिल २०२२","11 Apr 2022","प्रो बास्केटबॉल लीग","Pro Basketball League"]];
const IMPACT=[{mr:"नागरिकांचे कोविड लसीकरण",en:"Citizens vaccinated against Covid",v:50000},{mr:"महिलांना रोजगार",en:"Women given livelihood",v:30000},{mr:"महिलांना पीठ गिरणी / शिलाई मशीन",en:"Women given flour mills / sewing machines",v:1000},{mr:"भाविकांची मोफत तीर्थयात्रा",en:"Devotees on free pilgrimages",v:50000}];/* v:0 = hidden. Publish only figures the Foundation itself can document */
/* ====================== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let L="mr";try{L=localStorage.getItem("l")||"mr"}catch(e){}
const N=[["index","मुख्यपृष्ठ","Home"],["about","आमच्याबद्दल","About"],["programs","उपक्रम","Programs"],["news","बातम्या","News"],["transparency","कागदपत्रे","Documents"],["get-involved","सहभागी व्हा","Get involved"]];
const pg=location.pathname.split("/").pop().replace(".html","")||"index";
const W=[["edu","शिक्षण","Education"],["health","आरोग्य","Health"],["women","महिला रोजगार","Women's livelihood"],["relief","मदतकार्य","Relief"],["culture","संस्कृती","Culture"],["sports","क्रीडा","Sports"],["env","पर्यावरण","Environment"]],so=Object.entries(SOCIAL).filter(e=>e[1]).map(e=>'<a href="'+e[1]+'" target="_blank" rel="noopener">'+e[0]+"</a>").join(" · ");
$("#hd").outerHTML='<a class="skip" href="#main" data-en="Skip to content">मजकुराकडे जा</a><header id="top"><a class="logo" href="index.html"><img src="img/logo.png" alt="Logo"><b data-en="Dnyaneshwar Katke Social Foundation">ज्ञानेश्वर कटके सोशल फाउंडेशन</b></a><button id="mb" aria-expanded="false" aria-label="Menu">☰</button><nav id="nav">'+N.slice(0,5).map(n=>'<a href="'+n[0]+'.html"'+(n[0]==pg?' aria-current="page"':"")+' data-en="'+n[2]+'">'+n[1]+"</a>").join("")+'<button id="lg"><span>मराठी</span><span>EN</span></button><a class="btn dn" href="get-involved.html" data-en="Donate">देणगी द्या</a></nav></header>';
$("#ft").outerHTML='<footer><div class="w fg"><div><img class="fl" src="img/logo.png" alt="Logo"><strong data-en="Dnyaneshwar Katke Social Foundation">ज्ञानेश्वर कटके सोशल फाउंडेशन</strong><p data-en="A public charitable trust in Pune, Maharashtra, registered under the Bombay Public Trust Act.">पुणे, महाराष्ट्र येथील सार्वजनिक धर्मादाय न्यास, मुंबई सार्वजनिक न्यास कायद्यान्वये नोंदणीकृत.</p><p class="np" data-en="Non-political and non-partisan.">अराजकीय व पक्षनिरपेक्ष.</p></div><div><strong data-en="Our work">आमचे कार्य</strong><p>'+W.map(w=>'<a href="programs.html#'+w[0]+'" data-en="'+w[2]+'">'+w[1]+"</a>").join("<br>")+'</p></div><div><strong data-en="Pages">पाने</strong><p>'+N.map(n=>'<a href="'+n[0]+'.html" data-en="'+n[2]+'">'+n[1]+"</a>").join("<br>")+'</p></div><div><strong data-en="Get in touch">संपर्क</strong><p><mark class="ph" data-en="[Dnyaneshwar Katke Social Foundation, Wagholi, Pune, Maharashtra]">[ज्ञानेश्वर कटके सोशल फाउंडेशन, वाघोली]</mark><br><mark class="ph">[919096929856]</mark><br><mark class="ph">'+EMAIL+'</mark></p>'+(so?"<p>"+so+"</p>":"")+'</div></div><div class="w cp">© <span id="yr"></span> <span data-en="Dnyaneshwar Katke Social Foundation. All rights reserved.">ज्ञानेश्वर कटके सोशल फाउंडेशन. सर्व हक्क राखीव.</span></div></footer>'+(WA?'<a class="wa" href="https://wa.me/'+WA+'" aria-label="WhatsApp">✆</a>':"")+'<a class="dm" href="get-involved.html" data-en="Donate">देणगी द्या</a>';
$("#yr").textContent=new Date().getFullYear();
$("#mb").onclick=()=>$("#top").classList.toggle("open");
/* build slideshow and news snapshots from the lists above */
const isV=f=>/\.(mp4|webm|mov)$/i.test(f),esc=s=>String(s).replace(/"/g,"&quot;"),sl=$(".sl");
if(sl)sl.insertAdjacentHTML("afterbegin",SLIDES.map(s=>'<figure class="sd">'+(isV(s[0])?'<video muted playsinline preload="metadata" src="img/'+s[0]+'"></video>':'<img src="img/'+s[0]+'" alt="">')+'<figcaption class="cap" data-en="'+esc(s[2])+'">'+s[1]+"</figcaption></figure>").join(""));
/* stats */
const st=$("#stats");if(st){const live=IMPACT.filter(i=>i.v>0);if(!live.length)st.closest("section").hidden=true;
live.forEach(i=>st.insertAdjacentHTML("beforeend",'<div class="c"><span class="n" data-v="'+i.v+'">0</span><span data-en="'+i.en+'">'+i.mr+"</span></div>"));
const run=()=>$$(".n",st).forEach(n=>{const t=+n.dataset.v;let k=0;const s=()=>{k=Math.min(t,k+Math.ceil(t/40));n.textContent=k.toLocaleString("en-IN")+"+";if(k<t)requestAnimationFrame(s)};s()});
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){run();o.disconnect()}}).observe(st)}
/* filter chips */
$$(".chips").forEach(ch=>ch.onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("button",ch).forEach(x=>x.classList.toggle("on",x===b));$$("#"+ch.dataset.for+" .pc").forEach(c=>c.hidden=b.dataset.f!=="all"&&c.dataset.c!==b.dataset.f)});
const hh=$('.chips [data-f="'+location.hash.slice(1)+'"]');if(hh)hh.click();
/* arrow buttons for sliders */
$$(".ar[data-for]").forEach(a=>{const t=$("#"+a.dataset.for);$$("button",a).forEach(b=>b.onclick=()=>t.scrollBy({left:b.dataset.d*t.clientWidth*.8,behavior:"smooth"}))});
/* missing photos fall back to colour blocks */
const bad=i=>i.classList.add("x");addEventListener("error",e=>{if(/^(IMG|VIDEO)$/.test(e.target.tagName))bad(e.target)},true);$$("img").forEach(i=>{if(i.complete&&!i.naturalWidth)bad(i)});
/* lightbox with details, plus gallery and Janta Darbar videos that are found automatically */
const dt=k=>typeof DETAILS!="undefined"&&DETAILS[k]||[],item=f=>{const d=dt(f.replace(/\.\w+$/,""));return{f,mr:d[0]||"",en:d[1]||d[0]||""}};
const has=f=>new Promise(r=>{if(isV(f)){const v=document.createElement("video");v.preload="metadata";v.onloadedmetadata=()=>r(1);v.onerror=()=>r(0);v.src="img/"+f}else{const m=new Image();m.onload=()=>r(1);m.onerror=()=>r(0);m.src="img/"+f}});
async function find(p,ex){const out=[];let n=1,miss=0;while(miss<6&&n<300){const r=await Promise.all([...Array(8)].map(async(_,k)=>{for(const e of ex){const f=p+(n+k)+"."+e;if(await has(f))return f}return null}));r.forEach(f=>{if(f){out.push(f);miss=0}else miss++});n+=8}return out}
let LB;
function lb(items,i){if(!LB){LB=document.createElement("dialog");LB.className="lb";LB.innerHTML='<button class="lx" aria-label="Close">×</button><button class="lp" aria-label="Previous">‹</button><button class="ln" aria-label="Next">›</button><img alt=""><video controls playsinline></video><p class="ld"></p>';document.body.append(LB);
$(".lx",LB).onclick=()=>LB.close();$(".lp",LB).onclick=()=>lbShow(LB.k-1);$(".ln",LB).onclick=()=>lbShow(LB.k+1);LB.onclick=e=>{if(e.target===LB)LB.close()};LB.onclose=()=>$("video",LB).pause();
addEventListener("keydown",e=>{if(LB.open){if(e.key=="ArrowLeft")lbShow(LB.k-1);if(e.key=="ArrowRight")lbShow(LB.k+1)}})}
LB.items=items;lbShow(i);LB.showModal()}
function lbShow(k){const d=LB,n=d.items.length;k=(k+n)%n;d.k=k;const it=d.items[k],im=$("img",d),v=$("video",d),vv=isV(it.f);v.pause();im.hidden=vv;v.hidden=!vv;if(vv){v.src="img/"+it.f;v.play().catch(()=>{})}else im.src="img/"+it.f;$(".ld",d).textContent=(L=="en"?it.en:it.mr)||"";$(".lp",d).hidden=$(".ln",d).hidden=n<2}
function auto(el){if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;let t;const step=()=>{if(el.scrollLeft+el.clientWidth>=el.scrollWidth-4)el.scrollTo({left:0,behavior:"smooth"});else el.scrollBy({left:el.firstElementChild.offsetWidth+16,behavior:"smooth"})},on=()=>{clearInterval(t);t=setInterval(step,4500)};on();el.onmouseenter=()=>clearInterval(t);el.onmouseleave=on;el.ontouchstart=()=>clearInterval(t)}
const gs=$("#gs"),gl=$("#gal"),rl=$("#reels");
if(gs||gl)find("g",["jpg","mp4"]).then(fs=>{const items=fs.map(item),tile=(it,k)=>'<div class="im" data-i="'+k+'">'+(isV(it.f)?'<video muted playsinline preload="metadata" src="img/'+it.f+'#t=0.6"></video><i class="pl">▶</i>':'<img src="img/'+it.f+'" alt="" loading="lazy">')+"</div>";
[gs,gl].forEach(el=>{if(!el)return;el.innerHTML=items.length?items.map(tile).join(""):'<p><mark class="ph">[img फोल्डरमध्ये g1.jpg, g2.jpg, g3.jpg ... जोडा]</mark></p>';el.onclick=e=>{const m=e.target.closest(".im");if(m&&!$(".x",m))lb(items,+m.dataset.i)}});
if(gs&&items.length>1)auto(gs)});
if(rl)find("darbar",["mp4"]).then(fs=>{rl.innerHTML=fs.length?fs.map(f=>{const d=item(f);return'<figure class="rl"><video controls playsinline preload="metadata" src="img/'+f+'#t=0.5"></video>'+(d.mr?'<figcaption data-en="'+esc(d.en)+'">'+d.mr+"</figcaption>":"")+"</figure>"}).join(""):'<p><mark class="ph">[img फोल्डरमध्ये darbar1.mp4, darbar2.mp4 ... जोडा]</mark></p>';
rl.addEventListener("play",e=>$$("video",rl).forEach(v=>v!==e.target&&v.pause()),true);tr()});
const nw=$("#news");
if(nw)find("news",["jpg","jpeg","png"]).then(fs=>{const sp=t=>{const a=(t||"").split("|");return a.length>1?[a[0].trim(),a.slice(1).join("|").trim()]:["",a[0].trim()]},
items=fs.map(f=>{const r=NEWS.find(n=>n[0]==f),d=dt(f.replace(/\.\w+$/,""));if(r)return{f,dm:r[1],de:r[2],hm:r[3],he:r[4]};const a=sp(d[0]),b=sp(d[1]||d[0]);return{f,dm:a[0],de:b[0]||a[0],hm:a[1],he:b[1]||a[1]}});
nw.innerHTML=items.length?items.map((n,i)=>'<figure class="nc" data-i="'+i+'"><div class="im"><img src="img/'+n.f+'" alt="" loading="lazy"></div>'+(n.hm||n.dm?'<figcaption><small data-en="'+esc(n.de)+'">'+n.dm+'</small><b data-en="'+esc(n.he)+'">'+n.hm+"</b></figcaption>":"")+"</figure>").join(""):'<p><mark class="ph">[img फोल्डरमध्ये news1.jpg, news2.jpg, news3.jpg ... जोडा]</mark></p>';
nw.onclick=e=>{const c=e.target.closest(".nc");if(c&&!$(".x",c))lb(items.map(n=>({f:n.f,mr:[n.dm,n.hm].filter(Boolean).join(" · "),en:[n.de,n.he].filter(Boolean).join(" · ")})),+c.dataset.i)};tr()});
/* copy buttons */
$$(".cv").forEach(td=>{const b=document.createElement("button");b.className="cb";b.type="button";b.dataset.en="Copy";b.textContent="कॉपी";b.onclick=()=>navigator.clipboard.writeText(td.firstChild.textContent.trim()).then(()=>{b.textContent=L=="en"?"Copied":"कॉपी झाले"},()=>{});td.append(b)});
/* contact form */
const f=$("#f");if(f){const g=k=>f.elements[k].value.trim(),msg=()=>"Type: "+g("t")+"\nName: "+g("n")+"\nPhone: "+g("p")+"\nVillage: "+g("v")+"\n\n"+g("m");
const ok=()=>{let v=true;["n","p","m"].forEach(k=>{const b=!g(k)||(k=="p"&&g(k).replace(/\D/g,"").length<10);f.elements[k].classList.toggle("bad",b);if(b)v=false});$("#fm").textContent=v?"":L=="en"?"Please enter your name, a 10-digit phone number and a message.":"कृपया नाव, १०-अंकी फोन नंबर आणि संदेश भरा.";return v};
f.onsubmit=e=>{e.preventDefault();if(ok())location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Website enquiry: "+g("t"))+"&body="+encodeURIComponent(msg())};
const w=$("#wa");if(WA){w.hidden=false;w.onclick=()=>ok()&&open("https://wa.me/"+WA+"?text="+encodeURIComponent(msg()))}}
/* hero slideshow: photos and videos */
if(sl&&SLIDES.length){const S=$$(".sd",sl),dots=$(".dots",sl),RM=matchMedia("(prefers-reduced-motion:reduce)").matches,vid=k=>{const v=$("video",S[k]);return v&&!v.classList.contains("x")?v:null};let i=0,t;
const nxt=()=>go(i+1),sched=()=>{clearTimeout(t);if(RM)return;const v=vid(i);if(v){v.onended=nxt;t=setTimeout(nxt,VIDEO_MAX_SECONDS*1000)}else t=setTimeout(nxt,IMG_SECONDS*1000)};
function go(k){S.forEach(s=>{const v=$("video",s);if(v)v.pause()});i=(k+S.length)%S.length;S.forEach((s,j)=>s.classList.toggle("on",j==i));$$("button",dots).forEach((b,j)=>b.classList.toggle("on",j==i));const v=vid(i);if(v&&!RM){v.currentTime=0;v.play().catch(()=>{})}sched()}
S.forEach((_,k)=>{const b=document.createElement("button");b.setAttribute("aria-label",k+1);b.onclick=()=>go(k);dots.append(b)});
$$(".sb",sl).forEach(b=>b.onclick=()=>go(i+ +b.dataset.d));
sl.onmouseenter=()=>{clearTimeout(t);const v=vid(i);if(v)v.pause()};sl.onmouseleave=()=>{const v=vid(i);if(v&&!RM&&!v.ended)v.play().catch(()=>{});sched()};
let x0=0;sl.ontouchstart=e=>x0=e.touches[0].clientX;sl.ontouchend=e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)go(i+(d<0?1:-1))};
go(0)}
/* language: Marathi is the default, English via the toggle */
function tr(){document.documentElement.lang=L;$$("[data-en]").forEach(e=>{if(e.dataset.mr===undefined)e.dataset.mr=e.innerHTML;e.innerHTML=L=="en"?e.dataset.en:e.dataset.mr});
$$("[data-en-ph]").forEach(e=>{if(!e.dataset.mrPh)e.dataset.mrPh=e.placeholder;e.placeholder=L=="en"?e.dataset.enPh:e.dataset.mrPh});
$$("#lg span").forEach((x,i)=>x.classList.toggle("on",(i==1)==(L=="en")));$("#lg").setAttribute("aria-label",L=="en"?"मराठीत वाचा":"Read in English")}
$("#lg").onclick=()=>{L=L=="en"?"mr":"en";try{localStorage.setItem("l",L)}catch(e){}tr()};tr();
