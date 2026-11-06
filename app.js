/* ===== EDIT THESE ===== */
const EMAIL="contact@yourfoundation.org",WA="";/* WhatsApp number with country code, e.g. "919876543210". Empty = button hidden */
const SOCIAL={Facebook:"",Instagram:"",YouTube:""};/* paste full profile links; empty = hidden */
const IMPACT=[{mr:"नागरिकांचे कोविड लसीकरण",en:"Citizens vaccinated against Covid",v:50000},{mr:"महिलांना रोजगार",en:"Women given livelihood",v:30000},{mr:"महिलांना पीठ गिरणी / शिलाई मशीन",en:"Women given flour mills / sewing machines",v:1000},{mr:"भाविकांची मोफत तीर्थयात्रा",en:"Devotees on free pilgrimages",v:50000}];/* v:0 = hidden. Publish only figures the Foundation itself can document */
/* ====================== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let L="mr";try{L=localStorage.getItem("l")||"mr"}catch(e){}
const N=[["index","मुख्यपृष्ठ","Home"],["about","आमच्याबद्दल","About"],["programs","उपक्रम","Programs"],["news","बातम्या","News"],["transparency","कागदपत्रे","Documents"],["get-involved","सहभागी व्हा","Get involved"]];
const pg=location.pathname.split("/").pop().replace(".html","")||"index";
const W=[["edu","शिक्षण","Education"],["health","आरोग्य","Health"],["women","महिला रोजगार","Women's livelihood"],["relief","मदतकार्य","Relief"],["culture","संस्कृती","Culture"],["sports","क्रीडा","Sports"],["env","पर्यावरण","Environment"]],so=Object.entries(SOCIAL).filter(e=>e[1]).map(e=>'<a href="'+e[1]+'" target="_blank" rel="noopener">'+e[0]+"</a>").join(" · ");
$("#hd").outerHTML='<a class="skip" href="#main" data-en="Skip to content">मजकुराकडे जा</a><header id="top"><a class="logo" href="index.html"><img src="img/logo.png" alt="Logo"><b data-en="Dnyaneshwar Katke Social Foundation">ज्ञानेश्वर कटके सोशल फाउंडेशन</b></a><button id="mb" aria-expanded="false" aria-label="Menu">☰</button><nav id="nav">'+N.slice(0,5).map(n=>'<a href="'+n[0]+'.html"'+(n[0]==pg?' aria-current="page"':"")+' data-en="'+n[2]+'">'+n[1]+"</a>").join("")+'<button id="lg"><span>मराठी</span><span>EN</span></button><a class="btn dn" href="get-involved.html" data-en="Donate">देणगी द्या</a></nav></header>';
$("#ft").outerHTML='<footer><div class="w fg"><div><img class="fl" src="img/logo.png" alt="Logo"><strong data-en="Dnyaneshwar Katke Social Foundation">ज्ञानेश्वर कटके सोशल फाउंडेशन</strong><p data-en="A public charitable trust in Pune, Maharashtra, registered under the Bombay Public Trust Act.">पुणे, महाराष्ट्र येथील सार्वजनिक धर्मादाय न्यास, मुंबई सार्वजनिक न्यास कायद्यान्वये नोंदणीकृत.</p><p class="np" data-en="Non-political and non-partisan.">अराजकीय व पक्षनिरपेक्ष.</p></div><div><strong data-en="Our work">आमचे कार्य</strong><p>'+W.map(w=>'<a href="programs.html#'+w[0]+'" data-en="'+w[2]+'">'+w[1]+"</a>").join("<br>")+'</p></div><div><strong data-en="Pages">पाने</strong><p>'+N.map(n=>'<a href="'+n[0]+'.html" data-en="'+n[2]+'">'+n[1]+"</a>").join("<br>")+'</p></div><div><strong data-en="Get in touch">संपर्क</strong><p><mark class="ph" data-en="[Office address, Pune, Maharashtra]">[कार्यालयाचा पत्ता, पुणे, महाराष्ट्र]</mark><br><mark class="ph">[Phone]</mark><br><mark class="ph">'+EMAIL+'</mark></p>'+(so?"<p>"+so+"</p>":"")+'</div></div><div class="w cp">© <span id="yr"></span> <span data-en="Dnyaneshwar Katke Social Foundation. All rights reserved.">ज्ञानेश्वर कटके सोशल फाउंडेशन. सर्व हक्क राखीव.</span></div></footer>'+(WA?'<a class="wa" href="https://wa.me/'+WA+'" aria-label="WhatsApp">✆</a>':"")+'<a class="dm" href="get-involved.html" data-en="Donate">देणगी द्या</a>';
$("#yr").textContent=new Date().getFullYear();
$("#mb").onclick=()=>$("#top").classList.toggle("open");
/* stats */
const st=$("#stats");if(st){const live=IMPACT.filter(i=>i.v>0);if(!live.length)st.closest("section").hidden=true;
live.forEach(i=>st.insertAdjacentHTML("beforeend",'<div class="c"><span class="n" data-v="'+i.v+'">0</span><span data-en="'+i.en+'">'+i.mr+"</span></div>"));
const run=()=>$$(".n",st).forEach(n=>{const t=+n.dataset.v;let k=0;const s=()=>{k=Math.min(t,k+Math.ceil(t/40));n.textContent=k.toLocaleString("en-IN")+"+";if(k<t)requestAnimationFrame(s)};s()});
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){run();o.disconnect()}}).observe(st)}
/* filter chips */
$$(".chips").forEach(ch=>ch.onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("button",ch).forEach(x=>x.classList.toggle("on",x===b));$$("#"+ch.dataset.for+" .pc").forEach(c=>c.hidden=b.dataset.f!=="all"&&c.dataset.c!==b.dataset.f)});
const hh=$('.chips [data-f="'+location.hash.slice(1)+'"]');if(hh)hh.click();
/* journey carousel */
const car=$("#car");if(car){const w=()=>car.firstElementChild.offsetWidth+16,cc=$("#cc");
$$(".ar button").forEach(b=>b.onclick=()=>car.scrollBy({left:b.dataset.d*w(),behavior:"smooth"}));
car.onscroll=()=>cc.textContent=Math.round(car.scrollLeft/w())+1+"/"+car.children.length;car.onscroll()}
/* missing photos fall back to colour blocks */
const bad=i=>i.classList.add("x");addEventListener("error",e=>{if(e.target.tagName=="IMG")bad(e.target)},true);$$("img").forEach(i=>{if(i.complete&&!i.naturalWidth)bad(i)});
/* lightbox */
const gal=$(".gal");if(gal){const d=document.createElement("dialog");d.innerHTML="<img alt=''>";document.body.append(d);d.onclick=()=>d.close();
gal.onclick=e=>{const i=e.target.closest("img");if(i&&!i.classList.contains("x")){d.firstChild.src=i.src;d.showModal()}}}
/* copy buttons */
$$(".cv").forEach(td=>{const b=document.createElement("button");b.className="cb";b.type="button";b.dataset.en="Copy";b.textContent="कॉपी";b.onclick=()=>navigator.clipboard.writeText(td.firstChild.textContent.trim()).then(()=>{b.textContent=L=="en"?"Copied":"कॉपी झाले"},()=>{});td.append(b)});
/* contact form */
const f=$("#f");if(f){const g=k=>f.elements[k].value.trim(),msg=()=>"Type: "+g("t")+"\nName: "+g("n")+"\nPhone: "+g("p")+"\nVillage: "+g("v")+"\n\n"+g("m");
const ok=()=>{let v=true;["n","p","m"].forEach(k=>{const b=!g(k)||(k=="p"&&g(k).replace(/\D/g,"").length<10);f.elements[k].classList.toggle("bad",b);if(b)v=false});$("#fm").textContent=v?"":L=="en"?"Please enter your name, a 10-digit phone number and a message.":"कृपया नाव, १०-अंकी फोन नंबर आणि संदेश भरा.";return v};
f.onsubmit=e=>{e.preventDefault();if(ok())location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Website enquiry: "+g("t"))+"&body="+encodeURIComponent(msg())};
const w=$("#wa");if(WA){w.hidden=false;w.onclick=()=>ok()&&open("https://wa.me/"+WA+"?text="+encodeURIComponent(msg()))}}
/* hero slideshow */
const sl=$(".sl");if(sl){const S=$$(".sd",sl),dots=$(".dots",sl);let i=0,t;
const go=k=>{i=(k+S.length)%S.length;S.forEach((s,j)=>s.classList.toggle("on",j==i));$$("button",dots).forEach((b,j)=>b.classList.toggle("on",j==i))};
const play=()=>{clearInterval(t);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)t=setInterval(()=>go(i+1),5500)};
S.forEach((_,k)=>{const b=document.createElement("button");b.setAttribute("aria-label",k+1);b.onclick=()=>{go(k);play()};dots.append(b)});
$$(".sb",sl).forEach(b=>b.onclick=()=>{go(i+ +b.dataset.d);play()});
sl.onmouseenter=()=>clearInterval(t);sl.onmouseleave=play;
let x0=0;sl.ontouchstart=e=>x0=e.touches[0].clientX;sl.ontouchend=e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40){go(i+(d<0?1:-1));play()}};
go(0);play()}
/* language: Marathi is the default, English via the toggle */
function tr(){document.documentElement.lang=L;$$("[data-en]").forEach(e=>{if(e.dataset.mr===undefined)e.dataset.mr=e.innerHTML;e.innerHTML=L=="en"?e.dataset.en:e.dataset.mr});
$$("[data-en-ph]").forEach(e=>{if(!e.dataset.mrPh)e.dataset.mrPh=e.placeholder;e.placeholder=L=="en"?e.dataset.enPh:e.dataset.mrPh});
$$("#lg span").forEach((x,i)=>x.classList.toggle("on",(i==1)==(L=="en")));$("#lg").setAttribute("aria-label",L=="en"?"मराठीत वाचा":"Read in English")}
$("#lg").onclick=()=>{L=L=="en"?"mr":"en";try{localStorage.setItem("l",L)}catch(e){}tr();if(car)car.onscroll()};tr();
