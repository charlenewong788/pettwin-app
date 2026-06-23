(()=>{const $=s=>document.querySelector(s),petMarkup=`<svg viewBox="0 0 250 180" role="img" aria-label="PetTwin desktop pet">
<defs>
  <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#172226" stop-opacity=".30"/><stop offset=".55" stop-color="#172226" stop-opacity=".13"/><stop offset="1" stop-color="#172226" stop-opacity="0"/></radialGradient>
  <radialGradient id="coat3d" cx="35%" cy="18%" r="88%"><stop offset="0" stop-color="var(--pet-coat-light)"/><stop offset=".42" stop-color="var(--pet-coat)"/><stop offset=".78" stop-color="var(--pet-coat)"/><stop offset="1" stop-color="var(--pet-coat-dark)"/></radialGradient>
  <radialGradient id="cream3d" cx="35%" cy="20%" r="82%"><stop offset="0" stop-color="#ffffff"/><stop offset=".48" stop-color="var(--pet-cream)"/><stop offset="1" stop-color="#ded8cf"/></radialGradient>
  <radialGradient id="nose3d" cx="38%" cy="24%" r="75%"><stop offset="0" stop-color="#9a6b57"/><stop offset=".62" stop-color="#5a3328"/><stop offset="1" stop-color="#2d1b17"/></radialGradient>
  <radialGradient id="eye3d" cx="34%" cy="25%" r="70%"><stop offset="0" stop-color="#ffffff"/><stop offset=".13" stop-color="#ffffff"/><stop offset=".16" stop-color="#3b302b"/><stop offset=".68" stop-color="#090807"/><stop offset="1" stop-color="#000000"/></radialGradient>
  <filter id="softToy" x="-20%" y="-25%" width="145%" height="155%"><feGaussianBlur in="SourceAlpha" stdDeviation="2.6" result="blur"/><feOffset dx="-2.2" dy="-3" result="offset"/><feComposite in="offset" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="inner"/><feColorMatrix in="inner" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .33 0"/><feComposite in2="SourceGraphic" operator="over"/></filter>
  <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2"/></filter>
</defs>
<ellipse cx="139" cy="152" rx="86" ry="18" fill="url(#floorShadow)"/>
<g class="pet-bob">
  <path class="pet-tail" d="M201 96c19 3 27 16 20 29-4 8-13 12-24 11" fill="none" stroke="url(#coat3d)" stroke-width="21" stroke-linecap="round"/>
  <ellipse cx="143" cy="91" rx="65" ry="45" fill="url(#coat3d)" filter="url(#softToy)"/>
  <path d="M91 74c23-18 66-24 99-2" fill="none" stroke="#ffffff" stroke-width="13" stroke-linecap="round" opacity=".22" filter="url(#softGlow)"/>
  <ellipse cx="123" cy="108" rx="40" ry="31" fill="url(#cream3d)" opacity=".98"/>
  <rect class="pet-leg-b" x="167" y="113" width="25" height="39" rx="13" fill="url(#coat3d)" filter="url(#softToy)"/>
  <ellipse cx="181" cy="149" rx="17" ry="8" fill="url(#cream3d)"/>
  <rect class="pet-leg-a" x="134" y="112" width="24" height="42" rx="13" fill="url(#cream3d)" filter="url(#softToy)"/>
  <ellipse cx="146" cy="151" rx="17" ry="8" fill="#fffdf7"/>
  <rect class="pet-leg-b" x="98" y="114" width="25" height="40" rx="13" fill="url(#coat3d)" filter="url(#softToy)"/>
  <ellipse cx="110" cy="151" rx="17" ry="8" fill="url(#cream3d)"/>
  <rect class="pet-leg-a" x="72" y="111" width="25" height="43" rx="13" fill="url(#cream3d)" filter="url(#softToy)"/>
  <ellipse cx="84" cy="151" rx="17" ry="8" fill="#fffdf7"/>
  <path d="M69 56c-6-26 7-44 24-24l11 29z" fill="url(#coat3d)" filter="url(#softToy)"/>
  <path d="M111 55c8-27 25-38 31-10l-11 30z" fill="url(#coat3d)" filter="url(#softToy)"/>
  <path d="M80 39l10 20-16 1zM126 43l-9 22 17-5z" fill="#ffcfc8" opacity=".92"/>
  <ellipse cx="81" cy="83" rx="47" ry="43" fill="url(#coat3d)" filter="url(#softToy)"/>
  <ellipse cx="61" cy="94" rx="38" ry="27" fill="url(#cream3d)" filter="url(#softToy)"/>
  <path d="M57 92c-14-1-27 2-38 9M58 99c-14 4-25 11-33 20" fill="none" stroke="#6b5c55" stroke-width="2.2" stroke-linecap="round" opacity=".28"/>
  <path d="M83 65c8-4 17-4 25 1" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" opacity=".35"/>
  <ellipse cx="80" cy="78" rx="10" ry="11" fill="url(#eye3d)"/>
  <circle cx="77" cy="74" r="3" fill="#ffffff"/>
  <path d="M107 78c7 4 11 10 12 18" fill="none" stroke="var(--pet-coat-dark)" stroke-width="4.2" stroke-linecap="round" opacity=".12"/>
  <ellipse cx="44" cy="92" rx="8" ry="6" fill="url(#nose3d)"/>
  <path d="M51 99c11 9 25 9 36 0" fill="none" stroke="#61463f" stroke-width="3" stroke-linecap="round" opacity=".42"/>
  <path d="M52 107c6 6 15 7 23 2" fill="none" stroke="#df7380" stroke-width="4" stroke-linecap="round" opacity=".7"/>
  <ellipse cx="65" cy="102" rx="9" ry="5" fill="#f2a5ad" opacity=".82"/>
</g>
</svg>`;let ready=false;function mix(hex,amt){const n=parseInt(hex.slice(1),16),rgb=[n>>16&255,n>>8&255,n&255].map(v=>Math.round(Math.max(0,Math.min(255,v+(amt>0?(255-v)*amt:v*amt)))));return"#"+rgb.map(v=>v.toString(16).padStart(2,"0")).join("")}function ensurePet(){let pet=$("#pet-sprite");if(!pet){pet=document.createElement("div");pet.id="pet-sprite";pet.setAttribute("aria-hidden","true");document.body.prepend(pet)}if(!pet.querySelector("svg"))pet.innerHTML=petMarkup;return pet}function movePet(x,y){const pet=ensurePet();pet.classList.remove("hidden");pet.classList.add("walking");pet.style.left=Math.max(115,Math.min(innerWidth-115,x))+"px";pet.style.top=Math.max(135,Math.min(innerHeight-100,y))+"px";clearTimeout(movePet.timer);movePet.timer=setTimeout(()=>pet.classList.remove("walking"),1700)}function setCoat(hex,light=true){const pet=ensurePet();pet.style.setProperty("--pet-coat",hex);pet.style.setProperty("--pet-coat-light",mix(hex,.28));pet.style.setProperty("--pet-coat-dark",mix(hex,-.28));pet.style.setProperty("--pet-cream",light?"#f7f1e8":mix(hex,.48))}function readPhotoColour(file){return new Promise(resolve=>{const img=new Image(),url=URL.createObjectURL(file);img.onload=()=>{const c=document.createElement("canvas"),s=72;c.width=c.height=s;const x=c.getContext("2d",{willReadFrequently:true});x.drawImage(img,0,0,s,s);const d=x.getImageData(0,0,s,s).data;let r=0,g=0,b=0,n=0,light=0;for(let i=0;i<d.length;i+=16){const l=(d[i]+d[i+1]+d[i+2])/3;if(l>34&&l<232){r+=d[i];g+=d[i+1];b+=d[i+2];n++}if(l>184)light++}URL.revokeObjectURL(url);if(!n)return resolve(null);resolve({hex:"#"+[r/n,g/n,b/n].map(v=>Math.round(Math.max(46,Math.min(190,v*.86))).toString(16).padStart(2,"0")).join(""),light:light>n*.1})};img.onerror=()=>resolve(null);img.src=url})}function polishResult(){const line=$("#studio-result");if(line)line.textContent=document.documentElement.lang.startsWith("zh")?"桌面宠物预览已生成。它现在采用 PawPal 式角色素材风格，会根据你的点击慢慢移动。":"Desktop pet preview created. It now uses a PawPal-style character asset and gently follows your clicks."}function bind(){if(ready)return;ready=true;ensurePet();movePet(innerWidth*.72,innerHeight*.54);document.addEventListener("pointerdown",e=>{if(e.target.closest("button,input,label,a"))return;movePet(e.clientX,e.clientY)});const input=$("#pet-photo");if(input)input.addEventListener("change",async e=>{const file=e.target.files&&e.target.files[0];if(!file)return;const colour=await readPhotoColour(file);if(colour)setCoat(colour.hex,colour.light);movePet(innerWidth*.7,innerHeight*.52)});const btn=$("#generate-twin");if(btn)btn.addEventListener("click",()=>setTimeout(()=>{polishResult();movePet(innerWidth*.7,innerHeight*.52)},1800));const toggle=$("#pet-toggle");if(toggle)toggle.addEventListener("click",()=>setTimeout(()=>ensurePet().classList.toggle("hidden",toggle.textContent.includes("显示")||toggle.textContent.includes("Show")),0))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bind):bind()})();
