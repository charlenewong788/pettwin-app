/* PetTwin desktop pet v2 — 3D companion in the Douyin "little flame" pattern:
   bouncy squash-and-stretch idle, three growth forms (bond level scales it up),
   goes grey and slumps when neglected, brightens back with interaction.
   Keeps the oneko/Shimeji behaviors: wander, nap, chase cursor, purr on stroke.
   Exposes window.PetFix (same API the app uses). */
(() => {
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const MODELS = {
    sitting: { file: "assets/sitting.glb", zh: "英短", en: "Shorthair", tint: true },
    dingus: { file: "assets/dingus.glb", zh: "丁格斯", en: "Dingus", tint: true }
  };
  let look = { coat: "#8f9aa6" };
  let modelId = "sitting", wearing = null, tier = 1;
  let mood = "content", napping = false, neglected = false, chaseUntil = 0, lastPointer = null;
  let petAccum = 0, petAccumT = 0, lastPetBurst = 0, actionUntil = 0, action = "idle", spinUntil = 0;
  let root = null, ctx = null, napEl = null, mats = [];

  const STYLE = `
#pet-sprite{position:fixed;left:70%;top:58%;z-index:40;width:150px;height:150px;pointer-events:auto;cursor:grab;
  transform:translate(-50%,-50%);transition:left 1.5s ease-in-out,top 1.5s ease-in-out,opacity .2s;
  filter:drop-shadow(0 14px 16px rgba(32,44,48,.2))}
#pet-sprite.hidden{opacity:0;visibility:hidden}
#pet-sprite canvas{width:100%!important;height:100%!important}
.pt-zzz{position:absolute;top:-4px;right:6px;font-weight:900;color:#8ea3b5;font-size:19px;letter-spacing:2px;
  font-family:Georgia,serif;animation:ptZzz 2.6s ease-in-out infinite;pointer-events:none}
@keyframes ptZzz{0%,100%{transform:translateY(0);opacity:.65}50%{transform:translateY(-10px);opacity:1}}
.pt-p{position:fixed;z-index:70;width:13px;height:13px;pointer-events:none;opacity:0;animation:ptFloat 1.35s ease-out forwards}
.pt-p.heart{background:#ef7d94;transform:rotate(45deg)}
.pt-p.heart:before,.pt-p.heart:after{content:"";position:absolute;width:13px;height:13px;border-radius:50%;background:#ef7d94}
.pt-p.heart:before{left:-7px}.pt-p.heart:after{top:-7px}
.pt-p.dot{border-radius:50%;background:#75bdd0}
.pt-p.spark{border-radius:50%;background:#e7c678}
@keyframes ptFloat{0%{opacity:0;translate:0 0;scale:.5}18%{opacity:1}100%{opacity:0;translate:var(--dx,0) -85px;scale:1.1}}`;

  function burst(type, count = 5) {
    if (!root) return;
    const r = root.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "pt-p " + (type === "heart" ? "heart" : type === "spark" ? "spark" : "dot");
      s.style.left = (r.left + r.width * .3 + Math.random() * r.width * .4) + "px";
      s.style.top = (r.top + r.height * .2 + Math.random() * r.height * .3) + "px";
      s.style.setProperty("--dx", (Math.random() * 70 - 35) + "px");
      s.style.animationDelay = (Math.random() * .28) + "s";
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1500);
    }
  }

  function init() {
    if (ctx || !window.THREE) return;
    const st = document.createElement("style"); st.textContent = STYLE; document.head.appendChild(st);
    root = document.getElementById("pet-sprite");
    if (!root) { root = document.createElement("div"); root.id = "pet-sprite"; document.body.prepend(root); }
    root.innerHTML = "";
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(150, 150);
    renderer.outputEncoding = THREE.sRGBEncoding;
    root.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, .1, 100);
    camera.position.set(0, .5, 6.4);
    camera.lookAt(0, 0, 0);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8a9490, 1.15));
    const key = new THREE.DirectionalLight(0xffffff, 1.1); key.position.set(-3, 4, 5); scene.add(key);
    ctx = { renderer, scene, camera, group: null, drag: false, lastX: 0, spinY: .5 };
    root.addEventListener("pointerdown", e => { ctx.drag = true; ctx.lastX = e.clientX; root.setPointerCapture(e.pointerId); });
    root.addEventListener("pointermove", e => { if (ctx.drag) { ctx.spinY += (e.clientX - ctx.lastX) * .02; ctx.lastX = e.clientX; } });
    root.addEventListener("pointerup", e => { ctx.drag = false; try { root.releasePointerCapture(e.pointerId); } catch (_) { } });
    loadModel(modelId);
    requestAnimationFrame(frame);
  }

  function loadModel(id) {
    if (!ctx || !window.THREE || !THREE.GLTFLoader) return;
    modelId = MODELS[id] ? id : "sitting";
    new THREE.GLTFLoader().load(MODELS[modelId].file, gltf => {
      if (ctx.group) ctx.scene.remove(ctx.group);
      const model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);
      model.scale.setScalar(2.05 / (Math.max(size.x, size.y, size.z) || 1));
      const g = new THREE.Group();
      g.add(model);
      g.position.y = -.15;
      ctx.group = g;
      ctx.scene.add(g);
      mats = [];
      model.traverse(o => {
        if (o.isMesh && o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => {
          if (m.color) mats.push({ m, orig: m.color.clone() });
        });
      });
      applyLook(); applyNeglect(); applyAdorn();
      setTimeout(() => burst("heart", 4), 600);
      document.dispatchEvent(new CustomEvent("pt-model-ready"));
    }, undefined, () => { });
  }

  /* growth forms: young / grown / mature (little-flame pattern) */
  function tierScale() { return tier >= 3 ? 1.14 : tier === 2 ? 1 : .84; }
  function setTier(lv) {
    tier = lv >= 6 ? 3 : lv >= 3 ? 2 : 1;
    applyAdorn();
  }
  /* neglect: grey + slump, like the flame going out */
  function applyNeglect() {
    mats.forEach(({ m, orig }) => {
      if (neglected) { const l = (orig.r + orig.g + orig.b) / 3; m.color.setRGB(l * .75 + .12, l * .75 + .12, l * .75 + .12); }
      else m.color.copy(orig);
      m.needsUpdate = true;
    });
  }
  function setNeglected(on) {
    if (neglected === !!on) return;
    neglected = !!on;
    applyNeglect();
    if (!on) burst("spark", 5);
  }
  function applyLook() {
    if (!MODELS[modelId].tint || !look.coat) return;
    const c = new THREE.Color(look.coat);
    mats.forEach(({ m, orig }) => { orig.copy(c); });
    applyNeglect();
  }
  function setLook(next) { if (next && next.coat) { look = next; applyLook(); } }
  function setModel(id) { loadModel(id); }

  /* wearables — y-axis symmetric, scene-attached so drag-spin doesn't matter */
  function applyAdorn() {
    if (!ctx) return;
    const old = ctx.scene.getObjectByName("pt-adorn"); if (old) ctx.scene.remove(old);
    const g = new THREE.Group(); g.name = "pt-adorn";
    const gold = () => new THREE.MeshStandardMaterial({ color: 0xe7c678, roughness: .32, metalness: .4, emissive: 0xe7c678, emissiveIntensity: .16 });
    const ts = tierScale();
    if (wearing === "collar") {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(.42 * ts, .05, 24, 64), new THREE.MeshStandardMaterial({ color: 0xc95f54, roughness: .5 }));
      ring.position.y = .28 * ts; ring.rotation.x = Math.PI / 2; g.add(ring);
      const bell = new THREE.Mesh(new THREE.SphereGeometry(.07, 24, 16), gold());
      bell.position.set(0, .18 * ts, .42 * ts); g.add(bell);
    }
    if (wearing === "scarf") {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(.44 * ts, .09, 24, 64), new THREE.MeshStandardMaterial({ color: 0x5e8fbf, roughness: .7 }));
      ring.position.y = .22 * ts; ring.rotation.x = Math.PI / 2; g.add(ring);
    }
    if (wearing === "cushion") {
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(.95, 1.05, .18, 48), new THREE.MeshStandardMaterial({ color: 0xf0b7c3, roughness: .7 }));
      pad.position.y = -1.12; g.add(pad);
    }
    if (wearing === "sparkles") {
      [[-.85, .3, .2], [.9, .5, -.1], [.55, 1.05, .15], [-.55, 1.15, -.15], [.1, .2, .75]].forEach((p, i) => {
        const s = new THREE.Mesh(new THREE.OctahedronGeometry(.06), gold());
        s.position.set(...p); s.userData = { baseY: p[1], sp: .0016 + i * .0003, ph: i * 1.3 }; g.add(s);
      });
    }
    if (wearing === "halo") {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(.3, .035, 20, 64), new THREE.MeshStandardMaterial({ color: 0xf5d87a, roughness: .25, metalness: .45, emissive: 0xf5d87a, emissiveIntensity: .45 }));
      ring.position.y = 1.22 * ts; ring.rotation.x = Math.PI / 2; ring.userData = { baseY: 1.22 * ts, sp: .0012, ph: 0 }; g.add(ring);
    }
    if (wearing === "crown") {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(.19, .22, .1, 32), gold());
      base.position.y = 1.12 * ts; g.add(base);
      for (let i = 0; i < 5; i++) {
        const a = i / 5 * Math.PI * 2;
        const spike = new THREE.Mesh(new THREE.ConeGeometry(.045, .13, 12), gold());
        spike.position.set(Math.cos(a) * .18, 1.23 * ts, Math.sin(a) * .18); g.add(spike);
      }
    }
    if (tier >= 3 && !wearing) { // mature form gets a soft golden aura
      const aura = new THREE.Mesh(new THREE.TorusGeometry(.75, .02, 16, 64), gold());
      aura.position.y = -.95; aura.rotation.x = Math.PI / 2; g.add(aura);
    }
    ctx.scene.add(g);
  }
  function setAdornment(id) { wearing = id || null; applyAdorn(); }
  function setAction(type) {
    action = type || "idle";
    actionUntil = performance.now() + 2600;
    if (type === "spin") spinUntil = performance.now() + 2600;
    nap(false);
    if (type === "feed") burst("spark", 3);
    if (type === "play") burst("dot", 3);
    if (type === "calm") burst("heart", 4);
  }

  /* frame loop — squash & stretch bounce is the soul of the little-flame look */
  function frame(t) {
    if (ctx && ctx.group) {
      const g = ctx.group;
      const live = t < actionUntil;
      const energy = neglected ? .3 : mood === "playful" ? 1.6 : napping ? .35 : 1;
      const bounce = Math.abs(Math.sin(t * .004 * (mood === "playful" ? 1.6 : 1))) * .1 * energy;
      const s = tierScale();
      g.scale.set(s * (1 - bounce * .5), s * (1 + bounce), s * (1 - bounce * .5));
      g.position.y = -.15 + bounce * .55 + (action === "play" && live ? Math.abs(Math.sin(t * .012)) * .18 : 0);
      g.rotation.y += ctx.drag ? 0 : (t < spinUntil ? .06 : (Math.sin(t * .0006) * .003 * energy));
      if (!ctx.drag && Math.abs(g.rotation.y - ctx.spinY) > .01) g.rotation.y += (ctx.spinY - g.rotation.y) * .06;
      if (ctx.drag) ctx.spinY = g.rotation.y;
      g.rotation.x = neglected ? .22 : (action === "feed" && live ? .12 : 0) + Math.sin(t * .002) * .02;
      const ad = ctx.scene.getObjectByName("pt-adorn");
      if (ad) ad.children.forEach(ch => { if (ch.userData && ch.userData.sp) ch.position.y = ch.userData.baseY + Math.sin(t * ch.userData.sp + ch.userData.ph) * .05; });
      ctx.renderer.render(ctx.scene, ctx.camera);
    }
    requestAnimationFrame(frame);
  }

  /* behaviors */
  function nap(on) {
    if (napping === !!on || !root) return;
    napping = !!on;
    if (on && !napEl) { napEl = document.createElement("span"); napEl.className = "pt-zzz"; napEl.textContent = "z z"; root.appendChild(napEl); }
    if (!on && napEl) { napEl.remove(); napEl = null; }
  }
  function move(x, y) {
    if (!root) return;
    root.style.left = clamp(x, 85, innerWidth - 85) + "px";
    root.style.top = clamp(y, 130, innerHeight - 95) + "px";
  }
  function wander() { move(innerWidth * (.12 + Math.random() * .76), innerHeight * (.45 + Math.random() * .35)); }
  setInterval(() => {
    if (!ctx || document.hidden) return;
    const r = Math.random();
    if (napping) { if (r < .3) nap(false); return; }
    if (neglected && r < .6) return; // a neglected pet barely moves
    if (mood === "sleepy" && r < .65) { nap(true); return; }
    if (mood === "playful" && r < .5) { chaseUntil = performance.now() + 6000; return; }
    if (mood === "missing" && r < .45) { move(innerWidth * .5, innerHeight * .55); burst("heart", 3); return; }
    if (r < .45) wander();
    else if (r < .58) chaseUntil = performance.now() + 4500;
    else if (r < .66) nap(true);
  }, 9000);
  setInterval(() => { if (lastPointer && performance.now() < chaseUntil && !napping) move(lastPointer.x, lastPointer.y - 30); }, 1600);
  addEventListener("pointermove", e => {
    lastPointer = { x: e.clientX, y: e.clientY };
    if (!root || root.classList.contains("hidden")) return;
    const r = root.getBoundingClientRect();
    if (e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom) {
      const now = performance.now();
      if (now - petAccumT > 2500) petAccum = 0;
      petAccum += Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0);
      petAccumT = now;
      if (petAccum > 420 && now - lastPetBurst > 3500) {
        lastPetBurst = now; petAccum = 0;
        nap(false); burst("heart", 6); setAction("calm");
        document.dispatchEvent(new CustomEvent("pt-petted"));
      }
    }
  });
  document.addEventListener("pointerdown", e => {
    if (e.target.closest("button,input,textarea,select,label,a,#pet-sprite,.modal,.share-modal")) return;
    move(e.clientX, e.clientY);
  });
  function setMood(next) { mood = next || "content"; if (mood !== "sleepy") nap(false); }

  /* photo colour extraction (background-aware; used for tintable models) */
  const rgbHex = ({ r, g, b }) => "#" + [r, g, b].map(v => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, "0")).join("");
  function readPhoto(file) {
    return new Promise(res => {
      const img = new Image(), url = URL.createObjectURL(file);
      img.onload = () => {
        const s = 128, c = document.createElement("canvas"); c.width = c.height = s;
        const x = c.getContext("2d", { willReadFrequently: true });
        x.drawImage(img, 0, 0, s, s);
        const d = x.getImageData(0, 0, s, s).data;
        URL.revokeObjectURL(url);
        const clusters = [];
        const add = (px, py) => {
          const i = (py * s + px) * 4, sr = d[i], sg = d[i + 1], sb = d[i + 2];
          for (const cl of clusters) if (Math.abs(sr - cl.r / cl.n) + Math.abs(sg - cl.g / cl.n) + Math.abs(sb - cl.b / cl.n) < 60) { cl.r += sr; cl.g += sg; cl.b += sb; cl.n++; return; }
          clusters.push({ r: sr, g: sg, b: sb, n: 1 });
        };
        for (let p = 2; p < s - 2; p += 3) { add(p, 2); add(p, s - 3); add(2, p); add(s - 3, p); }
        const total = clusters.reduce((a, c2) => a + c2.n, 0);
        const bg = clusters.filter(c2 => c2.n > total * .12).map(c2 => ({ r: c2.r / c2.n, g: c2.g / c2.n, b: c2.b / c2.n }));
        let r = 0, g2 = 0, b = 0, n = 0;
        for (let y = 5; y < s - 5; y += 2) for (let px = 5; px < s - 5; px += 2) {
          const i = (y * s + px) * 4, rr = d[i], gg = d[i + 1], bb = d[i + 2], l = (rr + gg + bb) / 3, sp = Math.max(rr, gg, bb) - Math.min(rr, gg, bb);
          if (l < 34 || l > 246) continue;
          if (bb > rr * 1.18 && bb > gg * 1.06 && sp > 26 && l < 160) continue;
          if (bg.length && bg.some(v => Math.abs(rr - v.r) + Math.abs(gg - v.g) + Math.abs(bb - v.b) < 72)) continue;
          r += rr; g2 += gg; b += bb; n++;
        }
        res(n > 200 ? { r: r / n, g: g2 / n, b: b / n } : null);
      };
      img.onerror = () => res(null);
      img.src = url;
    });
  }
  async function readPhotos(files) {
    const all = (await Promise.all([...files].slice(0, 4).map(readPhoto))).filter(Boolean);
    if (!all.length) return null;
    const avg = { r: all.reduce((s, c) => s + c.r, 0) / all.length, g: all.reduce((s, c) => s + c.g, 0) / all.length, b: all.reduce((s, c) => s + c.b, 0) / all.length };
    return { coat: rgbHex(avg), cream: "#f6f1e7", dark: "#5d6570", pattern: "solid" };
  }

  function portrait() {
    try {
      const c = root && root.querySelector("canvas");
      if (!c) return null;
      const img = new Image();
      img.src = c.toDataURL("image/png");
      return img;
    } catch (e) { return null; }
  }

  window.PetFix = { setLook, setAction, setMood, setAdornment, setModel, setTier, setNeglected, burst, move, readPhotos, portrait, MODELS };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
