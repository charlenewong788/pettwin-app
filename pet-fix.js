(()=>{
const $=s=>document.querySelector(s);
let ready=false,ctx=null,coat="#9b9690",cream="#f5f1e8",action="idle",actionUntil=0,spinUntil=0,motion="calm";
let look={coat:"#9b9690",cream:"#f5f1e8",dark:"#5d5a52",warm:"#c58a48",pattern:"solid",whiteRatio:.18,stripe:.18,lightPet:false,zones:{}};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const hexRgb=h=>{h=(h||"#999999").replace("#","");return{r:parseInt(h.slice(0,2),16)||153,g:parseInt(h.slice(2,4),16)||153,b:parseInt(h.slice(4,6),16)||153}};
const rgbHex=({r,g,b})=>"#"+[r,g,b].map(v=>Math.round(clamp(v,0,255)).toString(16).padStart(2,"0")).join("");
const mix=(a,b,t)=>({r:a.r+(b.r-a.r)*t,g:a.g+(b.g-a.g)*t,b:a.b+(b.b-a.b)*t});
const cuteTone=(c,amount=.16)=>mix(c,{r:246,g:241,b:232},amount);
const naturalWhite=c=>({r:clamp(c.r,214,242),g:clamp(c.g,211,240),b:clamp(c.b,205,236)});
const softDark=(dark,base)=>mix(cuteTone(dark,.22),cuteTone(base,.1),.34);
const avoidMud=c=>lum(c)<118?cuteTone(c,.28):c;
const rescueLight=(c,base,cream)=>look.lightPet&&lum(c)<145?mix(mix(c,base,.58),cream,.34):c;
const goldLift=c=>mix(c,{r:218,g:166,b:96},.18);
const keepWarm=(base,warm,ratio)=>mix(base,warm,clamp(.56+ratio*3.8,.56,.9));
const smooth=v=>{v=clamp(v,0,1);return v*v*(3-2*v)};
const zoneRgb=(name,fallback)=>hexRgb((look.zones&&look.zones[name])||fallback);
const blendZone=(c,name,w,fallback)=>mix(c,zoneRgb(name,fallback||look.coat||coat),smooth(w));
const lum=c=>(c.r+c.g+c.b)/3;
const sat=c=>(Math.max(c.r,c.g,c.b)-Math.min(c.r,c.g,c.b))/255;
const mat=(c,r=.66)=>new THREE.MeshStandardMaterial({color:c,roughness:r,metalness:0});
function eachMat(root,fn){root.traverse(o=>{if(!o.isMesh||!o.material)return;(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m&&fn(m,o))})}
function standardMaterial(m){
  const base=(m&&m.color&&m.color.isColor)?m.color.clone():new THREE.Color(coat);
  const nm=new THREE.MeshStandardMaterial({
    name:m&&m.name||"",
    color:base,
    map:null,
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
  const d=x.getImageData(0,0,w,h),a=d.data,base=hexRgb(look.coat||coat),light=hexRgb(look.cream||cream),dark=hexRgb(look.dark||coat),warm=hexRgb(look.warm||coat),lightPet=!!look.lightPet||lum(base)>158||lum(light)>205;
  for(let i=0;i<a.length;i+=4){
    if(a[i+3]<20)continue;
    const px=(i/4)%w,py=Math.floor((i/4)/w),u=px/w,v=py/h;
    const r=a[i],g=a[i+1],b=a[i+2],l=(r+g+b)/3;
    const pink=r>135&&g<130&&b<135&&r-g>24;
    if(pink)continue;
    const nearlyWhite=l>172&&Math.max(r,g,b)-Math.min(r,g,b)<58;
    const bellyMask=(v>.56&&u>.28&&u<.72)?clamp((v-.56)*2.2,0,.72):0;
    const faceMask=(v<.33&&u>.35&&u<.67)?clamp((.33-v)*2.4,0,.58):0;
    const tabby=Math.max(0,Math.sin(u*58+v*34)+Math.sin(u*24-v*70)-.72);
    const tiger=Math.max(0,Math.sin(v*92+u*18)-.48);
    let target=nearlyWhite?naturalWhite(light):base;
    if(look.pattern==="tabby"||look.pattern==="ginger")target=mix(target,dark,clamp((tabby+tiger)*look.stripe*.22,0,.2));
    if(look.pattern==="ginger")target=mix(target,warm,.12);
    target=mix(target,naturalWhite(light),clamp(bellyMask+faceMask+(nearlyWhite?.22:0),0,.64));
    target=rescueLight(target,base,light);
    const shade=lightPet?clamp((l+150)/260,.82,1.04):clamp((l+68)/192,.58,1.08);
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
function applyVertexCoat(root){
  root.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(root),min=box.min,max=box.max,span=new THREE.Vector3().subVectors(max,min);
  const base=hexRgb(look.coat||coat),light=hexRgb(look.cream||cream),dark=hexRgb(look.dark||coat),warm=hexRgb(look.warm||coat);
  const meshBox=new THREE.Box3(),center=new THREE.Vector3();
  root.traverse(o=>{
    if(!o.isMesh)return;
    meshBox.setFromObject(o);meshBox.getCenter(center);
    const nx=(center.x-min.x)/(span.x||1),ny=(center.y-min.y)/(span.y||1),nz=(center.z-min.z)/(span.z||1);
    let c={...base};
    const left=clamp((.52-nx)*2.25,0,1);
    const right=clamp((nx-.48)*2.25,0,1);
    const front=clamp((nz-.44)*2.4,0,1);
    const back=clamp((.56-nz)*2.4,0,1);
    const high=clamp((ny-.48)*2.2,0,1);
    const low=clamp((.48-ny)*2.2,0,1);
    const mid=clamp(1-Math.abs(nx-.5)*2.5,0,1);
    const underside=clamp((.43-ny)*2.5,0,1)*mid;
    const chest=clamp((.62-ny)*2,0,1)*front*mid;
    const muzzle=high*front*mid;
    const leftWeight=left*clamp(1-chest*.55-muzzle*.35,0,1);
    const rightWeight=right*clamp(1-chest*.55-muzzle*.35,0,1);
    c=blendZone(c,"left",leftWeight,"#"+rgbHex(base).replace("#",""));
    c=blendZone(c,"right",rightWeight,"#"+rgbHex(base).replace("#",""));
    c=blendZone(c,"back",back*clamp(1-low*.28,0,1),look.coat||coat);
    c=blendZone(c,"face",muzzle*.55,look.coat||coat);
    c=blendZone(c,"chest",chest*.58,look.cream||cream);
    c=blendZone(c,"belly",underside*.52,look.cream||cream);
    c=mix(c,naturalWhite(light),clamp((underside+chest+muzzle)*look.whiteRatio*.18,0,.1));
    if(look.pattern==="tabby"||look.pattern==="ginger"){
      const stripe=(Math.max(0,Math.sin(ny*44+nx*16)-.36)+Math.max(0,Math.sin(nx*50+ny*9)-.52)*clamp(.36-ny,0,.36)*2.2)*look.stripe;
      c=mix(c,dark,clamp(stripe,0,.13));
    }
    if(look.pattern==="ginger")c=mix(c,warm,clamp(.36+high*.08,0,.48));
    c=rescueLight(c,base,light);
    const hex=rgbHex(c);
    (Array.isArray(o.material)?o.material:[o.material]).forEach(m=>{if(m.color&&m.color.isColor)m.color.set(hex);m.vertexColors=false;m.needsUpdate=true});
  });
}
function tint(root){
  look.coat=coat;look.cream=cream;
  eachMat(root,m=>{
    const name=(m.name||"").toLowerCase();
    if(name.includes("eye")||name.includes("nose")||name.includes("mouth")||name.includes("whisker"))return;
    m.map=null;
    m.lightMap=null;
    m.aoMap=null;
    if(m.color)m.color.set(coat);
    m.roughness=.82;m.metalness=0;m.needsUpdate=true;
  });
  applyVertexCoat(root);
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
  new THREE.GLTFLoader().load(url,gltf=>{if(ctx.model)ctx.scene.remove(ctx.model);ctx.model=fit(gltf.scene);ctx.scene.add(ctx.model);setLabel("Sitting");move(innerWidth*.7,innerHeight*.52,false)},undefined,()=>setLabel("Fallback"));
}
function init(pet){
  if(ctx||!window.THREE)return;
  pet.innerHTML="";
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;pet.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(30,1,.1,100);camera.position.set(0,.28,6.35);
  scene.add(new THREE.AmbientLight(0xffffff,.58));
  const key=new THREE.DirectionalLight(0xffffff,1.05);key.position.set(-3,4,5);scene.add(key);
  const rim=new THREE.DirectionalLight(0xd9efff,.28);rim.position.set(3,2,-3);scene.add(rim);
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
function setCoat(hex){coat=hex;look.coat=hex;if(ctx&&ctx.model)tint(ctx.model)}
function setCream(hex){cream=hex||cream;look.cream=cream;if(ctx&&ctx.model)tint(ctx.model)}
function setLook(next){look={...look,...next};coat=look.coat||coat;cream=look.cream||cream;if(ctx&&ctx.model)tint(ctx.model)}
function setAction(type){
  action=type||"idle";actionUntil=performance.now()+2700;clearProps();
  if(ctx&&ctx.model&&(type==="feed"||type==="shake"||type==="play"))ctx.model.add(prop(type));
  if(type==="spin")spinUntil=performance.now()+4300;
  const line=$("#studio-result"),zh=(document.documentElement.lang||"en").startsWith("zh");
  if(line){const msg={feed:["Feeding preview: bowl placed and the twin leans toward food.","喂食预览：食盆出现，数字猫会靠近食物。"],shake:["Handshake preview: a front paw reaches toward the owner.","握手预览：前爪会伸向主人。"],play:["Play preview: toy ball appears and the twin reacts curiously.","玩耍预览：玩具球出现，数字猫会好奇互动。"],calm:["Calm mode: softer breathing and slower motion.","安静模式：呼吸和动作变得更柔和。"],spin:["360 view: the complete model rotates for inspection.","360 查看：完整模型会旋转展示。"]}[type]||["Interactive preview ready.","互动预览已准备好。"];line.textContent=msg[zh?1:0]}}
function regionStats(data,size,rx0,ry0,rx1,ry1){
  let r=0,g=0,b=0,n=0,lr=0,lg=0,lb=0,ln=0,wr=0,wg=0,wb=0,wn=0,dr=0,dg=0,db=0,dn=0,gr=0,ggg=0,gb=0,gn=0,orange=0,striped=0;
  const x0=Math.floor(rx0*size),x1=Math.ceil(rx1*size),y0=Math.floor(ry0*size),y1=Math.ceil(ry1*size);
  for(let y=y0;y<y1;y+=2)for(let x=x0;x<x1;x+=2){
    const i=(y*size+x)*4,rr=data[i],gg=data[i+1],bb=data[i+2],l=(rr+gg+bb)/3,spread=Math.max(rr,gg,bb)-Math.min(rr,gg,bb);
    const greenBackground=gg>rr*1.06&&gg>bb*1.05&&spread>18;
    const blueWindow=bb>rr*1.12&&bb>gg*1.04&&l<160;
    if(l<34||l>246||greenBackground||blueWindow)continue;
    const warm=rr>gg*.96&&gg>bb*1.08&&rr>bb+28&&gg>bb+14&&l>72;
    r+=rr;g+=gg;b+=bb;n++;
    if(l>158&&spread<92){lr+=rr;lg+=gg;lb+=bb;ln++}
    if(l>184&&spread<56){wr+=rr;wg+=gg;wb+=bb;wn++}
    if(l<130&&spread>18){dr+=rr;dg+=gg;db+=bb;dn++}
    if(warm){orange++;gr+=rr;ggg+=gg;gb+=bb;gn++}
    if(l>38&&l<128&&spread>22)striped++;
  }
  if(!n)return null;
  const avg={r:r/n,g:g/n,b:b/n},light=ln?{r:lr/ln,g:lg/ln,b:lb/ln}:cuteTone(avg,.2),white=wn?naturalWhite({r:wr/wn,g:wg/wn,b:wb/wn}):naturalWhite(light),dark=dn?{r:dr/dn,g:dg/dn,b:db/dn}:avg,warmAvg=gn?goldLift({r:gr/gn,g:ggg/gn,b:gb/gn}):goldLift(avg);
  const whiteRatio=wn/n,warmRatio=orange/n,stripeRatio=striped/n;
  let softened=avoidMud(cuteTone(avg,warmRatio>.08?.04:.08));
  if(warmRatio>.025)softened=keepWarm(softened,warmAvg,warmRatio);
  const zoneColor=whiteRatio>.38&&warmRatio<.025?mix(softened,white,clamp(whiteRatio*.52,0,.36)):softened;
  return{avg,light:white,dark,warm:warmAvg,color:rgbHex(zoneColor),cream:rgbHex(white),darkHex:rgbHex(softDark(dark,softened)),warmHex:rgbHex(warmAvg),warmRatio,stripeRatio,whiteRatio};
}
function readPhoto(file,view=0){return new Promise(res=>{const img=new Image(),url=URL.createObjectURL(file);img.onload=()=>{const c=document.createElement("canvas"),s=128;c.width=c.height=s;const x=c.getContext("2d",{willReadFrequently:true});x.drawImage(img,0,0,s,s);const d=x.getImageData(0,0,s,s).data;URL.revokeObjectURL(url);const whole=regionStats(d,s,.04,.04,.96,.96);if(!whole)return res(null);const zones={},stats=[];const add=(name,rect)=>{const st=regionStats(d,s,...rect);if(st){zones[name]=st.warmRatio>.025?rgbHex(keepWarm(hexRgb(st.color),hexRgb(st.warmHex),st.warmRatio)):st.color;stats.push(st)}};if(view===0){add("face",[.2,.04,.8,.42]);add("chest",[.26,.42,.74,.92]);add("belly",[.18,.58,.82,.98]);add("left",[.03,.16,.45,.88]);add("right",[.55,.16,.97,.88])}else if(view===1){add("left",[.08,.18,.94,.86]);add("belly",[.16,.56,.88,.96]);add("back",[.28,.2,.9,.7])}else if(view===2){add("right",[.08,.18,.94,.86]);add("belly",[.16,.56,.88,.96]);add("back",[.1,.2,.72,.7])}else{add("back",[.14,.28,.84,.82]);add("left",[.08,.32,.5,.84]);add("right",[.5,.32,.92,.84])}stats.push(whole);const warmAvg=stats.reduce((s,v)=>s+v.warmRatio,0)/stats.length,isGinger=warmAvg>.025||stats.some(v=>v.warmRatio>.05),striped=stats.reduce((s,v)=>s+v.stripeRatio,0)/stats.length>.075;res({coat:whole.warmRatio>.025?rgbHex(keepWarm(hexRgb(whole.color),hexRgb(whole.warmHex),whole.warmRatio)):whole.color,cream:whole.cream,dark:whole.darkHex,warm:whole.warmHex,zones,whiteRatio:clamp(stats.reduce((s,v)=>s+v.whiteRatio,0)/stats.length*1.05,.08,.42),warmRatio:warmAvg,pattern:isGinger?"ginger":striped?"tabby":"solid",stripe:clamp(stats.reduce((s,v)=>s+v.stripeRatio,0)/stats.length*1.8,.06,.28)})};img.onerror=()=>res(null);img.src=url})}
async function readPhotos(files){
  const all=(await Promise.all([...files].slice(0,4).map((file,i)=>readPhoto(file,i)))).filter(Boolean);
  if(!all.length)return null;
  const avg=key=>rgbHex(["r","g","b"].reduce((o,k)=>{o[k]=all.reduce((s,c)=>s+hexRgb(c[key]||c.coat)[k],0)/all.length;return o},{}));
  const pattern=all.filter(c=>c.pattern==="ginger").length>=Math.ceil(all.length/2)?"ginger":all.filter(c=>c.pattern==="tabby").length>=Math.ceil(all.length/2)?"tabby":"solid";
  const zoneNames=["face","chest","belly","left","right","back"],zones={};
  zoneNames.forEach(name=>{const items=all.filter(c=>c.zones&&c.zones[name]);if(items.length)zones[name]=rgbHex(["r","g","b"].reduce((o,k)=>{o[k]=items.reduce((s,c)=>s+hexRgb(c.zones[name])[k],0)/items.length;return o},{}))});
  let coatOut=avg("coat"),creamOut=all.some(c=>c.cream)?avg("cream"):null,darkOut=all.some(c=>c.dark)?avg("dark"):null,warmOut=avg("warm");
  const warmScore=all.reduce((s,c)=>s+(c.warmRatio||0),0)/all.length,maxWarm=Math.max(...all.map(c=>c.warmRatio||0)),warmPet=warmScore>.025||maxWarm>.05,lightPet=warmPet||lum(hexRgb(creamOut||coatOut))>204;
  if(warmPet){
    const warmRgb=hexRgb(warmOut),coatRgb=hexRgb(coatOut);
    coatOut=rgbHex(mix(coatRgb,warmRgb,.88));
    darkOut=rgbHex(mix(hexRgb(darkOut||coatOut),warmRgb,.76));
    ["left","right","back","face"].forEach(name=>{zones[name]=rgbHex(mix(hexRgb(zones[name]||coatOut),warmRgb,.88))});
    ["chest","belly"].forEach(name=>{if(zones[name])zones[name]=rgbHex(mix(hexRgb(zones[name]),hexRgb(creamOut||coatOut),.34))});
  }else if(lightPet){
    const creamRgb=hexRgb(creamOut||coatOut),warmRgb=hexRgb(warmOut),coatRgb=hexRgb(coatOut);
    if(lum(coatRgb)<168)coatOut=rgbHex(mix(mix(coatRgb,warmRgb,.32),creamRgb,.22));
    darkOut=rgbHex(mix(hexRgb(darkOut||coatOut),hexRgb(coatOut),.72));
    zoneNames.forEach(name=>{if(zones[name]&&lum(hexRgb(zones[name]))<145)zones[name]=rgbHex(mix(hexRgb(zones[name]),hexRgb(coatOut),.78))});
  }
  if(zones.back){
    const back=hexRgb(zones.back),body=hexRgb(zones.left||zones.right||coatOut),main=hexRgb(coatOut);
    if(lum(back)<lum(main)-12||lum(back)<145)zones.back=rgbHex(mix(mix(back,body,.62),main,.28));
  }
  return{coat:coatOut,cream:creamOut,dark:darkOut,warm:warmOut,zones,lightPet,whiteRatio:clamp(all.reduce((s,c)=>s+(c.whiteRatio||.18),0)/all.length,.04,warmPet?.2:.5),pattern:warmPet?"ginger":pattern,stripe:warmPet?clamp(all.reduce((s,c)=>s+(c.stripe||.12),0)/all.length,.1,.24):lightPet?.05:clamp(all.reduce((s,c)=>s+(c.stripe||.12),0)/all.length,.06,.36)};
}
function bind(){
  if(ready)return;ready=true;ensure();move(innerWidth*.7,innerHeight*.52);
  document.addEventListener("pointerdown",e=>{if(e.target.closest("button,input,textarea,select,label,a,#pet-sprite"))return;move(e.clientX,e.clientY)});
  $("#pet-photo")?.addEventListener("change",async e=>{const files=e.target.files;if(!files||!files.length)return;const c=await readPhotos(files);if(c){setLook(c);const line=$("#studio-result"),zh=(document.documentElement.lang||"en").startsWith("zh");if(line)line.textContent=zh?`已按照片分区生成：脸部、胸口、左右身体和背部颜色会柔和渐变。`:`Photo regions mapped: face, chest, sides and back now blend softly.`}setLabel((document.documentElement.lang||"en").startsWith("zh")?"照片分区外观":"Photo-region appearance")});
  document.querySelectorAll("[data-pet-action]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-pet-action]").forEach(x=>x.classList.toggle("active",x===b));setAction(b.dataset.petAction)}));
  $("#glb-file")?.addEventListener("change",e=>{const f=e.target.files&&e.target.files[0];if(f)load(URL.createObjectURL(f))});
  $("#generate-twin")?.addEventListener("click",()=>setTimeout(()=>setAction("spin"),700));
}
window.PetFix={load,setCoat,setCream,setLook,setAction,move};
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bind):bind();
})();
