(()=>{
const $=s=>document.querySelector(s);
let ready=false,ctx=null,coat="#9b9690",cream="#f5f1e8",action="idle",actionUntil=0,spinUntil=0,motion="calm";
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const hexRgb=h=>{h=(h||"#999999").replace("#","");return{r:parseInt(h.slice(0,2),16)||153,g:parseInt(h.slice(2,4),16)||153,b:parseInt(h.slice(4,6),16)||153}};
const rgbHex=({r,g,b})=>"#"+[r,g,b].map(v=>Math.round(clamp(v,0,255)).toString(16).padStart(2,"0")).join("");
const mat=(c,r=.66)=>new THREE.MeshStandardMaterial({color:c,roughness:r,metalness:0});
function eachMat(root,fn){root.traverse(o=>{if(!o.isMesh||!o.material)return;(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m&&fn(m,o))})}
function standardMaterial(m){
  const base=(m&&m.color&&m.color.isColor)?m.color.clone():new THREE.Color(coat);
  const nm=new THREE.MeshStandardMaterial({
    name:m&&m.name||"",
    color:base,
    map:m&&m.map||null,
    normalMap:m&&m.normalMap||null,
    transparent:!!(m&&m.transparent),
    opacity:m&&typeof m.opacity==="number"?m.opacity:1,
    alphaTest:m&&typeof m.alphaTest==="number"?m.alphaTest:0,
    side:m&&m.side!==undefined?m.side:THREE.FrontSide,
    roughness:.82,
    metalness:0
  });
  return nm;
}
function normalizeMaterials(root){
  root.traverse(o=>{
    if(!o.isMesh||!o.material)return;
    const list=Array.isArray(o.material)?o.material:[o.material];
    const next=list.map(m=>standardMaterial(m));
    o.material=Array.isArray(o.material)?next:next[0];
  });
}
function recolorTexture(m){
  const source=m.userData.sourceMap||m.map;
  const img=source&&source.image;
  const w=img&&(img.naturalWidth||img.videoWidth||img.width),h=img&&(img.naturalHeight||img.videoHeight||img.height);
  if(!img||!w||!h)return false;
  m.userData.sourceMap=source;
  const c=document.createElement("canvas"),x=c.getContext("2d",{willReadFrequently:true});
  c.width=w;c.height=h;x.drawImage(img,0,0,w,h);
  const d=x.getImageData(0,0,w,h),a=d.data,base=hexRgb(coat),light=hexRgb(cream);
  for(let i=0;i<a.length;i+=4){
    if(a[i+3]<20)continue;
    const r=a[i],g=a[i+1],b=a[i+2],l=(r+g+b)/3;
    const pink=r>135&&g<130&&b<135&&r-g>24;
    if(pink)continue;
    const nearlyWhite=l>185&&Math.max(r,g,b)-Math.min(r,g,b)<54;
    const target=nearlyWhite?light:base;
    const shade=clamp((l+76)/170,.6,1.34);
    a[i]=clamp(target.r*shade,0,255);
    a[i+1]=clamp(target.g*shade,0,255);
    a[i+2]=clamp(target.b*shade,0,255);
  }
  x.putImageData(d,0,0);
  const tex=new THREE.CanvasTexture(c);
  tex.flipY=source.flipY;
  tex.encoding=source.encoding;
  tex.wrapS=source.wrapS;tex.wrapT=source.wrapT;
  tex.repeat.copy(source.repeat);tex.offset.copy(source.offset);
  tex.needsUpdate=true;
  m.map=tex;
  return true;
}
function tint(root){
  eachMat(root,m=>{
    const name=(m.name||"").toLowerCase();
    if(name.includes("eye")||name.includes("nose")||name.includes("mouth")||name.includes("whisker"))return;
    const textured=recolorTexture(m);
    if(m.color)m.color.set(textured?"#ffffff":coat);
    m.roughness=.82;m.metalness=0;m.needsUpdate=true;
  });
}
function prop(type){
  const g=new THREE.Group();g.name="action-prop";
  if(type==="feed"){
    const bowl=new THREE.Mesh(new THREE.CylinderGeometry(.38,.48,.16,48),mat("#e88470",.48));
    bowl.position.set(-.82,-.78,.72);bowl.scale.z=.62;g.add(bowl);
    const food=new THREE.Mesh(new THREE.SphereGeometry(.18,32,16),mat("#8a5635",.78));
    food.position.set(-.82,-.62,.72);food.scale.set(1,.32,.72);g.add(food);
  }
  if(type==="shake"){
    const paw=new THREE.Mesh(new THREE.SphereGeometry(1,32,16),mat(cream,.7));
    paw.name="action-paw";paw.position.set(-.78,-.44,.78);paw.scale.set(.22,.09,.18);paw.rotation.z=-.25;g.add(paw);
    const hand=new THREE.Mesh(new THREE.SphereGeometry(1,32,16),mat("#f4c6a7",.6));
    hand.position.set(-1.15,-.38,.86);hand.scale.set(.16,.08,.13);g.add(hand);
  }
  if(type==="play"){
    const ball=new THREE.Mesh(new THREE.SphereGeometry(.2,40,20),mat("#75bdd0",.42));
    ball.name="action-ball";ball.position.set(-.78,-.65,.86);g.add(ball);
  }
  return g;
}
function clearProps(){if(ctx&&ctx.model)[...ctx.model.children].forEach(c=>c.name==="action-prop"&&ctx.model.remove(c))}
function setLabel(name){
  const el=$("#model-source");if(!el)return;
  el.textContent=(document.documentElement.lang||"en").startsWith("zh")?name:`${name} model selected`;
}
function fit(root){
  const box=new THREE.Box3().setFromObject(root),size=new THREE.Vector3(),center=new THREE.Vector3();
  box.getSize(size);box.getCenter(center);root.position.sub(center);
  root.scale.setScalar(1.76/(Math.max(size.x,size.y,size.z)||1));
  root.position.y-=.06;
  root.rotation.set(-.08,.55,0);
  root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});
  normalizeMaterials(root);
  tint(root);return root;
}
function load(url="assets/sitting_blue_cat.glb"){
  if(!ctx||!window.THREE||!THREE.GLTFLoader)return;
  const src=url+(url.includes("?")?"&":"?")+"cache="+Date.now();
  new THREE.GLTFLoader().load(src,gltf=>{if(ctx.model)ctx.scene.remove(ctx.model);ctx.model=fit(gltf.scene);ctx.scene.add(ctx.model);setLabel("Sitting");move(innerWidth*.7,innerHeight*.52,false)},undefined,()=>setLabel("Fallback"));
}
function init(pet){
  if(ctx||!window.THREE)return;
  pet.innerHTML="";
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;pet.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(30,1,.1,100);camera.position.set(0,.28,6.35);
  scene.add(new THREE.AmbientLight(0xffffff,.72));
  const key=new THREE.DirectionalLight(0xffffff,1.5);key.position.set(-3,4,5);scene.add(key);
  const rim=new THREE.DirectionalLight(0xcce8ff,.65);rim.position.set(3,2,-3);scene.add(rim);
  const floor=new THREE.Mesh(new THREE.CircleGeometry(1.8,64),new THREE.ShadowMaterial({opacity:.16}));floor.position.y=-.86;floor.rotation.x=-Math.PI/2;scene.add(floor);
  ctx={renderer,scene,camera,model:null,drag:false,lastX:0,lastY:0,w:0,h:0};
  function resize(){const w=pet.clientWidth,h=pet.clientHeight;if(!w||!h)return;ctx.w=w;ctx.h=h;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
  addEventListener("resize",resize);
  pet.addEventListener("pointerdown",e=>{ctx.drag=true;ctx.lastX=e.clientX;ctx.lastY=e.clientY;pet.setPointerCapture(e.pointerId)});
  pet.addEventListener("pointermove",e=>{if(!ctx.drag||!ctx.model)return;const dx=e.clientX-ctx.lastX,dy=e.clientY-ctx.lastY;ctx.lastX=e.clientX;ctx.lastY=e.clientY;ctx.model.rotation.y+=dx*.018;ctx.model.rotation.x=clamp(ctx.model.rotation.x+dy*.012,-.65,.55)});
  pet.addEventListener("pointerup",e=>{ctx.drag=false;try{pet.releasePointerCapture(e.pointerId)}catch(_){}});
  function frame(t){
    if(pet.clientWidth!==ctx.w||pet.clientHeight!==ctx.h)resize();
    if(ctx.model){
      const live=t<actionUntil,spin=t<spinUntil,energy=motion==="playful"?1.55:motion==="curious"?1.2:.78;
      ctx.model.rotation.y+=ctx.drag?0:(spin?0.028:0);
      ctx.model.position.y=Math.sin(t*.003)*.018*energy+(action==="feed"&&live?Math.sin(t*.01)*.012:0);
      const tx=(action==="feed"&&live)?0.18:(action==="calm"&&live)?-0.04:0,tz=(action==="shake"&&live)?Math.sin(t*.018)*.045:0;
      ctx.model.rotation.x+=(tx-ctx.model.rotation.x)*.035;ctx.model.rotation.z+=(tz-ctx.model.rotation.z)*.045;
      ctx.model.children.forEach(c=>{if(c.name==="action-prop"){const b=c.getObjectByName("action-ball"),p=c.getObjectByName("action-paw");if(b){b.position.x=-.78+Math.sin(t*.009)*.18;b.position.y=-.65+Math.abs(Math.sin(t*.012))*.12}if(p)p.position.y=-.44+Math.sin(t*.02)*.055}});
      if(!live&&action!=="idle"){action="idle";clearProps()}
    }
    renderer.render(scene,camera);requestAnimationFrame(frame);
  }
  load();requestAnimationFrame(frame);
}
function ensure(){let p=$("#pet-sprite");if(!p){p=document.createElement("div");p.id="pet-sprite";p.setAttribute("aria-hidden","true");document.body.prepend(p)}init(p);return p}
function move(x,y){const p=ensure();p.classList.remove("hidden");p.style.left=clamp(x,115,innerWidth-115)+"px";p.style.top=clamp(y,135,innerHeight-100)+"px"}
function setCoat(hex){coat=hex;if(ctx&&ctx.model)tint(ctx.model)}
function setCream(hex){cream=hex||cream;if(ctx&&ctx.model)tint(ctx.model)}
function setAction(type){
  action=type||"idle";actionUntil=performance.now()+2700;clearProps();
  if(ctx&&ctx.model&&(type==="feed"||type==="shake"||type==="play"))ctx.model.add(prop(type));
  if(type==="spin")spinUntil=performance.now()+4300;
  const line=$("#studio-result"),zh=(document.documentElement.lang||"en").startsWith("zh");
  if(line){const msg={feed:["Feeding preview: bowl placed and the twin leans toward food.","喂食预览：食盆出现，数字猫会靠近食物。"],shake:["Handshake preview: a front paw reaches toward the owner.","握手预览：前爪会伸向主人。"],play:["Play preview: toy ball appears and the twin reacts curiously.","玩耍预览：玩具球出现，数字猫会好奇互动。"],calm:["Calm mode: softer breathing and slower motion.","安静模式：呼吸和动作变得更柔和。"],spin:["360 view: the complete model rotates for inspection.","360 查看：完整模型会旋转展示。"]}[type]||["Interactive preview ready.","互动预览已准备好。"];line.textContent=msg[zh?1:0]}}
function promptColor(text){
  const v=(text||"").toLowerCase();
  let picked=null,light=null;
  if(v.includes("蓝白")||v.includes("英短")||v.includes("蓝猫")||v.includes("灰")||v.includes("grey")||v.includes("gray")){picked="#8d9498";light="#f5f1e8"}
  else if(v.includes("黑白")){picked="#303335";light="#f7f3ea"}
  else if(v.includes("橘")||v.includes("金")||v.includes("orange")||v.includes("ginger")||v.includes("golden")){picked="#d99545";light="#fff1dc"}
  else if(v.includes("白")||v.includes("white")){picked="#d9d7d0";light="#fbf8ef"}
  else if(v.includes("brown"))picked="#8d6855";
  else if(v.includes("tabby"))picked="#8b8075";
  else if(v.includes("black"))picked="#343638";
  if(picked){setCoat(picked);const p=$("#coat-picker");if(p)p.value=picked}
  if(light){setCream(light);const p=$("#cream-picker");if(p)p.value=light}
  if(v.includes("playful")||v.includes("活泼")||v.includes("玩"))motion="playful";
  if(v.includes("curious")||v.includes("好奇"))motion="curious";
  if(v.includes("calm")||v.includes("quiet")||v.includes("安静"))motion="calm";
  const s=$("#motion-style");if(s)s.value=motion;setLabel((document.documentElement.lang||"en").startsWith("zh")?"定制坐姿猫":"Custom sitting cat")}
function readPhoto(file){return new Promise(res=>{const img=new Image(),url=URL.createObjectURL(file);img.onload=()=>{const c=document.createElement("canvas"),s=92;c.width=c.height=s;const x=c.getContext("2d",{willReadFrequently:true});x.drawImage(img,0,0,s,s);const d=x.getImageData(0,0,s,s).data;let r=0,g=0,b=0,n=0,lr=0,lg=0,lb=0,ln=0;for(let i=0;i<d.length;i+=16){const rr=d[i],gg=d[i+1],bb=d[i+2],l=(rr+gg+bb)/3,spread=Math.max(rr,gg,bb)-Math.min(rr,gg,bb);if(l>42&&l<218){r+=rr;g+=gg;b+=bb;n++}if(l>166&&l<246&&spread<68){lr+=rr;lg+=gg;lb+=bb;ln++}}URL.revokeObjectURL(url);res(n?{coat:rgbHex({r:clamp(r/n*.92,58,188),g:clamp(g/n*.92,58,188),b:clamp(b/n*.92,58,188)}),cream:ln?rgbHex({r:lr/ln,g:lg/ln,b:lb/ln}):null}:null)};img.onerror=()=>res(null);img.src=url})}
async function readPhotos(files){
  const all=(await Promise.all([...files].slice(0,4).map(readPhoto))).filter(Boolean);
  if(!all.length)return null;
  const avg=key=>rgbHex(["r","g","b"].reduce((o,k)=>{o[k]=all.reduce((s,c)=>s+hexRgb(c[key]||c.coat)[k],0)/all.length;return o},{}));
  return{coat:avg("coat"),cream:all.some(c=>c.cream)?avg("cream"):null};
}
function bind(){
  if(ready)return;ready=true;ensure();move(innerWidth*.7,innerHeight*.52);
  document.addEventListener("pointerdown",e=>{if(e.target.closest("button,input,textarea,select,label,a,#pet-sprite"))return;move(e.clientX,e.clientY)});
  $("#coat-picker")?.addEventListener("input",e=>setCoat(e.target.value));
  $("#cream-picker")?.addEventListener("input",e=>setCream(e.target.value));
  $("#motion-style")?.addEventListener("change",e=>{motion=e.target.value;setAction(motion==="playful"?"play":motion==="curious"?"shake":"calm")});
  $("#pet-prompt")?.addEventListener("input",e=>promptColor(e.target.value));
  $("#pet-photo")?.addEventListener("change",async e=>{const files=e.target.files;if(!files||!files.length)return;const c=await readPhotos(files);if(c){setCoat(c.coat);const p=$("#coat-picker");if(p)p.value=c.coat;if(c.cream){setCream(c.cream);const q=$("#cream-picker");if(q)q.value=c.cream}}setLabel((document.documentElement.lang||"en").startsWith("zh")?"照片定制坐姿猫":"Photo-custom sitting cat")});
  document.querySelectorAll("[data-pet-action]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-pet-action]").forEach(x=>x.classList.toggle("active",x===b));setAction(b.dataset.petAction)}));
  $("#glb-file")?.addEventListener("change",e=>{const f=e.target.files&&e.target.files[0];if(f)load(URL.createObjectURL(f))});
  $("#generate-twin")?.addEventListener("click",()=>setTimeout(()=>{promptColor($("#pet-prompt")?.value);setAction("spin")},700));
}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bind):bind();
})();
