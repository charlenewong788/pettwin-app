(()=>{
const $=s=>document.querySelector(s);
let ready=false,state=null,coat="#8f8980",cream="#f7f1e8",modelUrl="assets/Dingus%20the%20cat.glb";
function clamp(v,min,max){return Math.max(min,Math.min(max,v))}
function mix(hex,amt){const n=parseInt(hex.slice(1),16),rgb=[n>>16&255,n>>8&255,n&255].map(v=>Math.round(clamp(v+(amt>0?(255-v)*amt:v*amt),0,255)));return"#"+rgb.map(v=>v.toString(16).padStart(2,"0")).join("")}
function material(color,rough=.64,metal=0){return new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal})}
function ellipsoid(scene,mat,pos,scale,segments=48){const mesh=new THREE.Mesh(new THREE.SphereGeometry(1,segments,segments/2),mat);mesh.position.set(...pos);mesh.scale.set(...scale);mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);return mesh}
function makePetModel(){
  const group=new THREE.Group();
  group.rotation.set(-.08,.55,0);
  const coatMat=material(coat,.58),coatDark=material(mix(coat,-.18),.62),coatLight=material(mix(coat,.24),.5);
  const creamMat=material(cream,.52),pinkMat=material("#f5a7aa",.55),eyeMat=material("#070707",.38),noseMat=material("#6a3c2f",.48);

  ellipsoid(group,coatMat,[.35,.38,0],[1.36,.78,.68]);
  ellipsoid(group,creamMat,[.08,.2,.38],[.78,.48,.16],40);
  ellipsoid(group,coatLight,[.07,.78,.22],[.95,.13,.035],32);

  ellipsoid(group,coatMat,[-.88,.63,.05],[.72,.64,.58]);
  ellipsoid(group,creamMat,[-1.16,.48,.42],[.48,.34,.18],40);
  ellipsoid(group,creamMat,[-1.33,.43,.52],[.32,.22,.18],40);
  ellipsoid(group,noseMat,[-1.58,.5,.62],[.095,.07,.065],32);
  ellipsoid(group,eyeMat,[-.98,.75,.55],[.105,.14,.05],40);
  ellipsoid(group,material("#ffffff",.2),[-1.02,.81,.59],[.03,.035,.012],24);
  ellipsoid(group,eyeMat,[-.73,.74,.41],[.055,.09,.025],32);
  ellipsoid(group,pinkMat,[-1.16,.28,.62],[.15,.06,.04],24);

  const earGeo=new THREE.ConeGeometry(.22,.56,48);
  const earA=new THREE.Mesh(earGeo,coatMat);earA.position.set(-1.12,1.22,.1);earA.rotation.set(.08,0,-.24);earA.castShadow=true;group.add(earA);
  const earB=new THREE.Mesh(earGeo,coatMat);earB.position.set(-.62,1.18,-.02);earB.rotation.set(.12,.16,.24);earB.castShadow=true;group.add(earB);
  const innerA=new THREE.Mesh(new THREE.ConeGeometry(.13,.35,36),pinkMat);innerA.position.set(-1.1,1.18,.18);innerA.rotation.copy(earA.rotation);group.add(innerA);
  const innerB=new THREE.Mesh(new THREE.ConeGeometry(.1,.28,36),pinkMat);innerB.position.set(-.61,1.14,.06);innerB.rotation.copy(earB.rotation);group.add(innerB);

  [[-.55,-.32,.38],[-.05,-.34,.4],[.62,-.33,.35],[.98,-.32,.22]].forEach((p,i)=>{
    const leg=ellipsoid(group,i%2?coatMat:creamMat,p,[.18,.38,.18],32);
    leg.userData.walk=i%2?1:-1;
    ellipsoid(group,creamMat,[p[0],-.72,p[2]+.03],[.26,.09,.19],32);
  });
  ellipsoid(group,coatDark,[1.48,.38,-.05],[.2,.54,.24],32).rotation.z=-.35;

  const whiskerMat=new THREE.LineBasicMaterial({color:0x6b5c55,transparent:true,opacity:.42});
  [[[-1.35,.47,.64],[-1.78,.45,.72]],[[-1.35,.39,.64],[-1.76,.32,.7]],[[-1.12,.43,.63],[-.76,.38,.66]]].forEach(points=>{
    const geo=new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p)));
    group.add(new THREE.Line(geo,whiskerMat));
  });
  return group;
}
function forEachMaterial(root,fn){root.traverse(obj=>{if(!obj.isMesh||!obj.material)return;const list=Array.isArray(obj.material)?obj.material:[obj.material];list.forEach(mat=>mat&&fn(mat,obj))})}
function recolorTexture(mat){
  if(!mat.map||!mat.map.image)return false;
  const img=mat.userData.sourceImage||mat.map.image;
  mat.userData.sourceImage=img;
  const canvas=document.createElement("canvas"),w=img.naturalWidth||img.width,h=img.naturalHeight||img.height;
  if(!w||!h)return false;
  canvas.width=w;canvas.height=h;
  const ctx=canvas.getContext("2d",{willReadFrequently:true});
  ctx.drawImage(img,0,0,w,h);
  const data=ctx.getImageData(0,0,w,h),px=data.data,n=parseInt(coat.slice(1),16),base=[n>>16&255,n>>8&255,n&255];
  for(let i=0;i<px.length;i+=4){
    const r=px[i],g=px[i+1],b=px[i+2],a=px[i+3],l=(r+g+b)/3;
    if(a<20||l<18||l>236)continue;
    const warmth=Math.max(r,g,b)-Math.min(r,g,b),keepPink=r>120&&g<105&&b<115&&warmth>40;
    if(keepPink)continue;
    const shade=clamp(l/132,.38,1.42),soft=l>178?.18:0;
    px[i]=Math.round(clamp(base[0]*shade+(255-base[0])*soft,0,255));
    px[i+1]=Math.round(clamp(base[1]*shade+(255-base[1])*soft,0,255));
    px[i+2]=Math.round(clamp(base[2]*shade+(255-base[2])*soft,0,255));
  }
  ctx.putImageData(data,0,0);
  mat.map=new THREE.CanvasTexture(canvas);
  mat.map.flipY=false;
  mat.map.needsUpdate=true;
  return true;
}
function tintModel(root){forEachMaterial(root,(mat)=>{const name=(mat.name||"").toLowerCase();if(name.includes("whisker"))return;const textured=recolorTexture(mat);if(mat.color)mat.color.set(textured?"#ffffff":coat);mat.roughness=.78;mat.metalness=0;mat.needsUpdate=true})}
function makeWalkRig(){
  const rig=new THREE.Group(),pawMat=material(mix(coat,.38),.72);pawMat.name="walk-paw";
  [[-.52,-.83,.34,0],[-.18,-.84,.3,Math.PI],[.38,-.84,.24,Math.PI],[.72,-.84,.12,0]].forEach(p=>{
    const paw=new THREE.Mesh(new THREE.SphereGeometry(1,24,12),pawMat);
    paw.position.set(p[0],p[1],p[2]);paw.scale.set(.17,.08,.14);paw.castShadow=true;paw.receiveShadow=true;paw.userData.phase=p[3];rig.add(paw);
  });
  rig.visible=false;
  return rig;
}
function updateWalkRig(root){root.traverse(obj=>{if(obj.material&&obj.material.name==="walk-paw"){obj.material.color.set(mix(coat,.38));obj.material.needsUpdate=true}})}
function setSourceLabel(name){
  const label=$("#model-source");
  if(label)label.textContent=(document.documentElement.lang||"en").startsWith("zh")?`已选择 ${name}`:`${name} model selected`;
}
function fitModel(root){
  const box=new THREE.Box3().setFromObject(root),size=new THREE.Vector3(),center=new THREE.Vector3();
  box.getSize(size);box.getCenter(center);root.position.sub(center);
  const max=Math.max(size.x,size.y,size.z)||1;
  root.scale.setScalar(2.15/max);
  root.rotation.set(-.08,.55,0);
  root.traverse(obj=>{if(obj.isMesh){obj.castShadow=true;obj.receiveShadow=true;if(obj.material&&!Array.isArray(obj.material))obj.material=obj.material.clone();if(Array.isArray(obj.material))obj.material=obj.material.map(m=>m.clone())}});
  root.userData.isGltf=true;
  root.add(makeWalkRig());
  tintModel(root);
  return root;
}
function replaceModel(root){
  if(!state)return;
  const fitted=fitModel(root);
  if(state.model)state.scene.remove(state.model);
  state.model=fitted;
  state.scene.add(state.model);
}
function loadModel(url=modelUrl,name="Dingus"){
  modelUrl=url;
  if(!state||!window.THREE||!THREE.GLTFLoader)return;
  new THREE.GLTFLoader().load(url,gltf=>{
    replaceModel(gltf.scene);
    setSourceLabel(name);
    movePet(innerWidth*.7,innerHeight*.52);
  },undefined,()=>setSourceLabel("Fallback"));
}
function initThree(pet){
  if(state||!window.THREE)return state;
  pet.innerHTML="";
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.setSize(pet.clientWidth,pet.clientHeight,false);
  renderer.shadowMap.enabled=true;
  renderer.outputEncoding=THREE.sRGBEncoding;
  pet.appendChild(renderer.domElement);

  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(33,pet.clientWidth/pet.clientHeight,.1,100);
  camera.position.set(0,.35,5.2);
  scene.add(new THREE.AmbientLight(0xffffff,.68));
  const key=new THREE.DirectionalLight(0xffffff,1.45);key.position.set(-3,4,5);key.castShadow=true;scene.add(key);
  const rim=new THREE.DirectionalLight(0xcce8ff,.7);rim.position.set(3,2,-3);scene.add(rim);
  const floor=new THREE.Mesh(new THREE.CircleGeometry(1.8,64),new THREE.ShadowMaterial({opacity:.18}));
  floor.position.y=-.86;floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;scene.add(floor);
  const model=makePetModel();scene.add(model);
  state={renderer,scene,camera,model,drag:false,lastX:0,lastY:0,spin:0,walkUntil:0};
  loadModel(modelUrl,"Dingus");

  function resize(){const w=pet.clientWidth,h=pet.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
  addEventListener("resize",resize);
  pet.addEventListener("pointerdown",e=>{state.drag=true;state.lastX=e.clientX;state.lastY=e.clientY;state.spin=0;pet.setPointerCapture(e.pointerId)});
  pet.addEventListener("pointermove",e=>{if(!state.drag)return;const dx=e.clientX-state.lastX,dy=e.clientY-state.lastY;state.lastX=e.clientX;state.lastY=e.clientY;state.model.rotation.y+=dx*.018;state.model.rotation.x=clamp(state.model.rotation.x+dy*.012,-.65,.55)});
  pet.addEventListener("pointerup",e=>{state.drag=false;state.spin=0;try{pet.releasePointerCapture(e.pointerId)}catch(_){}});
  function frame(t){
    const active=state.model,walking=t<state.walkUntil;
    active.rotation.y+=state.drag?0:state.spin;
    active.position.y=Math.sin(t*.003)*.025+(walking?Math.abs(Math.sin(t*.012))*.035:0);
    active.rotation.z=walking?Math.sin(t*.01)*.035:0;
    active.children.forEach(child=>{
      if(child.userData.walk)child.position.y+=Math.sin(t*.008+child.userData.walk)*.00045;
      if(child.children&&child.children.length&&child.children.every(c=>c.userData.phase!==undefined)){
        child.visible=walking;
        child.children.forEach(paw=>{paw.position.x+=Math.sin(t*.012+paw.userData.phase)*.0012;paw.position.y=-.84+Math.max(0,Math.sin(t*.012+paw.userData.phase))*.09});
      }
    });
    renderer.render(scene,camera);requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame);
  return state;
}
function ensurePet(){let pet=$("#pet-sprite");if(!pet){pet=document.createElement("div");pet.id="pet-sprite";pet.setAttribute("aria-hidden","true");document.body.prepend(pet)}initThree(pet);return pet}
function movePet(x,y){const pet=ensurePet();pet.classList.remove("hidden");pet.classList.add("walking");if(state)state.walkUntil=performance.now()+1800;pet.style.left=clamp(x,115,innerWidth-115)+"px";pet.style.top=clamp(y,135,innerHeight-100)+"px";clearTimeout(movePet.timer);movePet.timer=setTimeout(()=>pet.classList.remove("walking"),1800)}
function setCoat(hex,light=true){coat=hex;cream=light?"#f7f1e8":mix(hex,.48);if(state){if(state.model.userData.isGltf){tintModel(state.model);updateWalkRig(state.model)}else{state.scene.remove(state.model);state.model=makePetModel();state.scene.add(state.model)}}}
function readPhotoColour(file){return new Promise(resolve=>{const img=new Image(),url=URL.createObjectURL(file);img.onload=()=>{const c=document.createElement("canvas"),s=72;c.width=c.height=s;const x=c.getContext("2d",{willReadFrequently:true});x.drawImage(img,0,0,s,s);const d=x.getImageData(0,0,s,s).data;let r=0,g=0,b=0,n=0,light=0;for(let i=0;i<d.length;i+=16){const l=(d[i]+d[i+1]+d[i+2])/3;if(l>34&&l<232){r+=d[i];g+=d[i+1];b+=d[i+2];n++}if(l>184)light++}URL.revokeObjectURL(url);if(!n)return resolve(null);resolve({hex:"#"+[r/n,g/n,b/n].map(v=>Math.round(clamp(v*.86,46,190)).toString(16).padStart(2,"0")).join(""),light:light>n*.1})};img.onerror=()=>resolve(null);img.src=url})}
function polishResult(){const line=$("#studio-result");if(line)line.textContent=document.documentElement.lang.startsWith("zh")?"真正的 3D 数字宠物预览已生成。按住它可以 360 度旋转，点击页面会移动。":"True 3D desktop pet preview created. Drag it to rotate 360 degrees, or click the page to move it."}
function bind(){if(ready)return;ready=true;ensurePet();movePet(innerWidth*.72,innerHeight*.54);document.addEventListener("pointerdown",e=>{if(e.target.closest("button,input,label,a,#pet-sprite"))return;movePet(e.clientX,e.clientY)});const input=$("#pet-photo");if(input)input.addEventListener("change",async e=>{const file=e.target.files&&e.target.files[0];if(!file)return;const colour=await readPhotoColour(file);if(colour)setCoat(colour.hex,colour.light);movePet(innerWidth*.7,innerHeight*.52)});document.querySelectorAll("[data-model-url]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("[data-model-url]").forEach(b=>b.classList.toggle("active",b===btn));loadModel(btn.dataset.modelUrl,btn.dataset.modelName||btn.textContent.trim())}));const glb=$("#glb-file");if(glb)glb.addEventListener("change",e=>{const file=e.target.files&&e.target.files[0];if(!file)return;loadModel(URL.createObjectURL(file),file.name.replace(/\.glb$/i,""))});const btn=$("#generate-twin");if(btn)btn.addEventListener("click",()=>setTimeout(()=>{polishResult();movePet(innerWidth*.7,innerHeight*.52)},1800));const toggle=$("#pet-toggle");if(toggle)toggle.addEventListener("click",()=>setTimeout(()=>ensurePet().classList.toggle("hidden",toggle.textContent.includes("显示")||toggle.textContent.includes("Show")),0))}
document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bind):bind()
})();
