/* PetTwin desktop pet — an animated SVG cat in the oneko/Shimeji tradition.
   Blinks, watches the cursor, swishes its tail, wanders, naps, chases the
   pointer, and purrs when stroked. Coat colours adapt to the owner's photos.
   Exposes window.PetFix (same API surface the app already uses). */
(() => {
  const $id = s => document.getElementById(s);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  let look = { coat: "#8f9aa6", cream: "#f6f1e7", dark: "#5d6570", pattern: "solid", lightPet: false };
  let wearing = null;
  let mood = "content", napping = false, chaseUntil = 0, lastPointer = null;
  let petAccum = 0, petAccumT = 0, lastPetBurst = 0, happyUntil = 0;
  let root = null, svg = null, portraitImg = null;

  const STYLE = `
#pet-sprite{position:fixed;left:70%;top:58%;z-index:40;width:140px;height:140px;pointer-events:auto;cursor:grab;
  transform:translate(-50%,-50%);transition:left 1.5s ease-in-out,top 1.5s ease-in-out,opacity .2s;
  filter:drop-shadow(0 14px 16px rgba(32,44,48,.18))}
#pet-sprite.hidden{opacity:0;visibility:hidden}
#pet-sprite svg{width:100%;height:100%;overflow:visible}
#pet-sprite .flipper{transform-origin:100px 120px;transition:transform .4s}
#pet-sprite.faceleft .flipper{transform:scaleX(-1)}
.cat-breathe{transform-origin:100px 140px;animation:ptBreathe 3.4s ease-in-out infinite}
@keyframes ptBreathe{0%,100%{transform:scale(1)}50%{transform:scale(1.012,1.03)}}
#pet-sprite .tail{transform-origin:146px 164px;animation:ptTail 3.2s ease-in-out infinite}
#pet-sprite.excited .tail{animation-duration:1.1s}
@keyframes ptTail{0%,100%{transform:rotate(0)}50%{transform:rotate(-10deg)}}
#pet-sprite.walking svg{animation:ptBob .5s ease-in-out infinite}
@keyframes ptBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
#pet-sprite .earR{transform-origin:128px 34px}
#pet-sprite.twitch .earR{animation:ptTwitch .5s ease-in-out}
@keyframes ptTwitch{0%,100%{transform:rotate(0)}40%{transform:rotate(-13deg)}}
#pet-sprite.napping .cat-breathe{animation-duration:5s}
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

  function catSVG() {
    const { coat, cream, dark } = look;
    const stripes = (look.pattern === "tabby" || look.pattern === "ginger")
      ? `<path d="M84 32 q3 12 0 18 M100 28 q2 13 0 20 M116 32 q-3 12 0 18" stroke="${dark}" stroke-width="5" stroke-linecap="round" fill="none" opacity=".45"/>`
      : "";
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<g class="flipper"><g class="cat-breathe">
  <path class="tail" d="M146 166 C184 158 192 124 178 104" stroke="${coat}" stroke-width="17" stroke-linecap="round" fill="none"/>
  <ellipse cx="100" cy="142" rx="56" ry="47" fill="${coat}"/>
  <ellipse cx="100" cy="152" rx="33" ry="33" fill="${cream}"/>
  <ellipse cx="76" cy="184" rx="15" ry="9.5" fill="${coat}"/>
  <ellipse cx="124" cy="184" rx="15" ry="9.5" fill="${coat}"/>
  <g class="scarf acc" visibility="hidden"><path d="M62 116 Q100 136 138 116 L136 130 Q100 148 64 130 Z" fill="#5e8fbf"/><path d="M118 128 l6 24 l14 -6 l-8 -22 Z" fill="#5e8fbf"/><path d="M118 138 h18 M116 132 h20" stroke="#4a76a3" stroke-width="2.5"/></g>
  <g class="bell acc" visibility="hidden"><path d="M60 114 Q100 134 140 114 L139 124 Q100 142 61 124 Z" fill="#c95f54"/><circle cx="100" cy="132" r="8" fill="#e7c678" stroke="#b98f31" stroke-width="1.5"/><circle cx="100" cy="134" r="1.6" fill="#7c6220"/></g>
  <g class="head">
    <path class="earL" d="M52 56 L58 12 L94 40 Z" fill="${coat}"/>
    <path class="earR" d="M148 56 L142 12 L106 40 Z" fill="${coat}"/>
    <path d="M60 48 L63 24 L84 41 Z" fill="#f0b7bb"/>
    <path d="M140 48 L137 24 L116 41 Z" fill="#f0b7bb"/>
    <path d="M58 12 L52 56 L64 47 Z" fill="${dark}" opacity=".35"/>
    <path d="M142 12 L148 56 L136 47 Z" fill="${dark}" opacity=".35"/>
    <circle cx="100" cy="76" r="52" fill="${coat}"/>
    ${stripes}
    <ellipse cx="100" cy="99" rx="23" ry="16" fill="${cream}"/>
    <g class="eyes">
      <g class="eye eyeL"><ellipse cx="78" cy="74" rx="10" ry="12" fill="#3a2e22"/><ellipse class="pupil" cx="78" cy="74" rx="9" ry="11" fill="#1d1712"/><circle cx="74.5" cy="69" r="3.4" fill="#fff"/><circle cx="81.5" cy="78" r="1.6" fill="#fff" opacity=".85"/></g>
      <g class="eye eyeR"><ellipse cx="122" cy="74" rx="10" ry="12" fill="#3a2e22"/><ellipse class="pupil" cx="122" cy="74" rx="9" ry="11" fill="#1d1712"/><circle cx="118.5" cy="69" r="3.4" fill="#fff"/><circle cx="125.5" cy="78" r="1.6" fill="#fff" opacity=".85"/></g>
    </g>
    <g class="lids" visibility="hidden"><path d="M68 76 Q78 84 88 76" stroke="#3a3a3a" stroke-width="3.5" stroke-linecap="round" fill="none"/><path d="M112 76 Q122 84 132 76" stroke="#3a3a3a" stroke-width="3.5" stroke-linecap="round" fill="none"/></g>
    <g class="happy" visibility="hidden"><path d="M68 78 Q78 68 88 78" stroke="#3a3a3a" stroke-width="3.5" stroke-linecap="round" fill="none"/><path d="M112 78 Q122 68 132 78" stroke="#3a3a3a" stroke-width="3.5" stroke-linecap="round" fill="none"/></g>
    <ellipse class="blush blushL" cx="63" cy="94" rx="7.5" ry="4.5" fill="#f2a3a0" opacity="0"/>
    <ellipse class="blush blushR" cx="137" cy="94" rx="7.5" ry="4.5" fill="#f2a3a0" opacity="0"/>
    <path d="M96 92 L104 92 L100 98 Z" fill="#e8837e"/>
    <path d="M100 98 Q100 103 95 105 M100 98 Q100 103 105 105" stroke="#69574d" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    <g stroke="${dark}" stroke-width="1.8" stroke-linecap="round" opacity=".55">
      <path d="M56 92 L32 88 M57 99 L34 100 M58 106 L37 112"/><path d="M144 92 L168 88 M143 99 L166 100 M142 106 L163 112"/>
    </g>
    <g class="glasses acc" visibility="hidden"><circle cx="78" cy="75" r="15" fill="none" stroke="#3f3a35" stroke-width="3"/><circle cx="122" cy="75" r="15" fill="none" stroke="#3f3a35" stroke-width="3"/><path d="M93 75 h14" stroke="#3f3a35" stroke-width="3"/></g>
    <g class="bow acc" visibility="hidden"><path d="M100 24 L78 12 L80 34 Z" fill="#e05f6d"/><path d="M100 24 L122 12 L120 34 Z" fill="#e05f6d"/><circle cx="100" cy="24" r="6.5" fill="#c74b58"/></g>
    <g class="flower acc" visibility="hidden">${[0, 1, 2, 3, 4].map(i => { const a = -2.6 + i * 0.55, x = 100 + Math.cos(a) * 50, y = 62 + Math.sin(a) * 46; return `<g><circle cx="${x - 4}" cy="${y}" r="4" fill="#f2a3b0"/><circle cx="${x + 4}" cy="${y}" r="4" fill="#f2a3b0"/><circle cx="${x}" cy="${y - 4}" r="4" fill="#f2a3b0"/><circle cx="${x}" cy="${y + 4}" r="4" fill="#f2a3b0"/><circle cx="${x}" cy="${y}" r="3" fill="#e7c678"/></g>`; }).join("")}</g>
    <g class="crown acc" visibility="hidden"><path d="M78 22 L84 4 L94 16 L100 0 L106 16 L116 4 L122 22 Z" fill="#e7c678" stroke="#c9a53f" stroke-width="2"/><circle cx="84" cy="6" r="2.6" fill="#ef7d94"/><circle cx="100" cy="2" r="2.6" fill="#ef7d94"/><circle cx="116" cy="6" r="2.6" fill="#ef7d94"/></g>
  </g>
  <g class="propfeed" visibility="hidden"><ellipse cx="42" cy="188" rx="20" ry="8" fill="#e88470"/><ellipse cx="42" cy="184" rx="15" ry="5" fill="#8a5635"/></g>
  <g class="propball" visibility="hidden"><circle class="ballc" cx="46" cy="182" r="11" fill="#75bdd0"/><path d="M37 178 q9 8 18 0 M37 186 q9 -8 18 0" stroke="#4d94ab" stroke-width="1.6" fill="none"/></g>
</g></g></svg>`;
  }

  function ensure() {
    if (!document.getElementById("pt-sprite-style")) {
      const st = document.createElement("style");
      st.id = "pt-sprite-style";
      st.textContent = STYLE;
      document.head.appendChild(st);
    }
    root = $id("pet-sprite");
    if (!root) { root = document.createElement("div"); root.id = "pet-sprite"; document.body.prepend(root); }
    render();
  }
  function render() {
    root.innerHTML = catSVG();
    svg = root.querySelector("svg");
    applyWear();
    refreshPortrait();
  }
  function applyWear() {
    if (!svg) return;
    svg.querySelectorAll(".acc").forEach(g => g.setAttribute("visibility", "hidden"));
    if (wearing) { const g = svg.querySelector("." + wearing); if (g) g.setAttribute("visibility", "visible"); }
  }
  function refreshPortrait() {
    try {
      const img = new Image();
      img.onload = () => { portraitImg = img; };
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(catSVG().replace('visibility="hidden"', wearing ? 'visibility="hidden"' : 'visibility="hidden"'));
      if (wearing) {
        // portrait should include the worn item
        const doc = catSVG();
        img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(doc.replace(`class="${wearing} acc" visibility="hidden"`, `class="${wearing} acc" visibility="visible"`));
      }
    } catch (e) { }
  }

  /* --- expressions --- */
  function setEyes(mode) { // open | closed | happy
    if (!svg) return;
    svg.querySelector(".eyes").setAttribute("visibility", mode === "open" ? "visible" : "hidden");
    svg.querySelector(".lids").setAttribute("visibility", mode === "closed" ? "visible" : "hidden");
    svg.querySelector(".happy").setAttribute("visibility", mode === "happy" ? "visible" : "hidden");
  }
  function setBlush(on) { if (svg) svg.querySelectorAll(".blush").forEach(b => b.setAttribute("opacity", on ? ".85" : "0")); }
  function blink() {
    if (napping || !svg || performance.now() < happyUntil) return;
    setEyes("closed");
    setTimeout(() => { if (!napping && performance.now() >= happyUntil) setEyes("open"); }, 130);
  }
  setInterval(() => { if (Math.random() < .6) blink(); }, 3400);
  setInterval(() => { if (root && !napping && Math.random() < .4) { root.classList.add("twitch"); setTimeout(() => root.classList.remove("twitch"), 550); } }, 6000);

  /* pupils follow the cursor */
  addEventListener("pointermove", e => {
    lastPointer = { x: e.clientX, y: e.clientY };
    if (!svg || napping) return;
    const r = root.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height * .38;
    const dx = clamp((e.clientX - cx) / 90, -1, 1) * 3, dy = clamp((e.clientY - cy) / 90, -1, 1) * 2.5;
    svg.querySelectorAll(".pupil").forEach(p => p.setAttribute("transform", `translate(${dx} ${dy})`));
    // stroking detection
    if (e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom) {
      const now = performance.now();
      if (now - petAccumT > 2500) petAccum = 0;
      petAccum += Math.abs(e.movementX || 0) + Math.abs(e.movementY || 0);
      petAccumT = now;
      if (petAccum > 420 && now - lastPetBurst > 3500) {
        lastPetBurst = now; petAccum = 0;
        nap(false); happyFace(1800); burst("heart", 6);
        document.dispatchEvent(new CustomEvent("pt-petted"));
      }
    }
  });

  function happyFace(ms) {
    happyUntil = performance.now() + ms;
    setEyes("happy"); setBlush(true);
    setTimeout(() => { if (performance.now() >= happyUntil) { if (!napping) setEyes("open"); setBlush(false); } }, ms);
  }

  /* --- particles --- */
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

  /* --- movement & behaviors --- */
  let curX = innerWidth * .7, curY = innerHeight * .58;
  function move(x, y) {
    if (!root) return;
    x = clamp(x, 80, innerWidth - 80); y = clamp(y, 120, innerHeight - 90);
    root.classList.toggle("faceleft", x < curX - 10);
    curX = x; curY = y;
    root.classList.add("walking");
    root.style.left = x + "px"; root.style.top = y + "px";
    setTimeout(() => root.classList.remove("walking"), 1500);
  }
  let napEl = null;
  function nap(on) {
    if (napping === on || !root) return;
    napping = on;
    root.classList.toggle("napping", on);
    setEyes(on ? "closed" : "open");
    if (on && !napEl) { napEl = document.createElement("span"); napEl.className = "pt-zzz"; napEl.textContent = "z z"; root.appendChild(napEl); }
    if (!on && napEl) { napEl.remove(); napEl = null; }
  }
  function wander() { move(innerWidth * (.12 + Math.random() * .76), innerHeight * (.45 + Math.random() * .35)); }
  function behaviorTick() {
    if (!root || document.hidden) return;
    const r = Math.random();
    if (napping) { if (r < .3) nap(false); return; }
    if (mood === "sleepy" && r < .65) { nap(true); return; }
    if (mood === "playful" && r < .5) { chaseUntil = performance.now() + 6000; root.classList.add("excited"); setTimeout(() => root.classList.remove("excited"), 6000); return; }
    if (mood === "missing" && r < .45) { move(innerWidth * .5, innerHeight * .55); burst("heart", 3); return; }
    if (mood === "anxious" && r < .4) return;
    if (r < .45) wander();
    else if (r < .58) chaseUntil = performance.now() + 4500;
    else if (r < .66) nap(true);
  }
  setInterval(behaviorTick, 9000);
  setInterval(() => { if (lastPointer && performance.now() < chaseUntil && !napping) move(lastPointer.x, lastPointer.y - 30); }, 1600);
  document.addEventListener("pointerdown", e => {
    if (e.target.closest("button,input,textarea,select,label,a,#pet-sprite,.modal,.share-modal")) return;
    move(e.clientX, e.clientY);
  });

  /* --- actions (feed / play / shake / calm / spin) --- */
  let actionTimer = null;
  function prop(name, on) { if (svg) { const g = svg.querySelector("." + name); if (g) g.setAttribute("visibility", on ? "visible" : "hidden"); } }
  function setAction(type) {
    clearTimeout(actionTimer);
    prop("propfeed", false); prop("propball", false);
    nap(false);
    if (type === "feed") { prop("propfeed", true); happyFace(2400); }
    if (type === "play") { prop("propball", true); root.classList.add("excited"); }
    if (type === "calm") happyFace(2000);
    if (type === "shake" || type === "spin") { root.classList.add("walking"); setTimeout(() => root.classList.remove("walking"), 900); happyFace(1500); }
    actionTimer = setTimeout(() => { prop("propfeed", false); prop("propball", false); root.classList.remove("excited"); }, 2800);
  }
  function setMood(next) { mood = next || "content"; if (mood !== "sleepy") nap(false); }
  function setLook(next) {
    if (!next) return;
    look = Object.assign({}, look, next);
    render();
  }
  function setAdornment(id) { wearing = id || null; applyWear(); refreshPortrait(); }

  /* --- photo colour extraction (background-aware, blue-grey safe) --- */
  const hexRgb = h => { h = (h || "#999999").replace("#", ""); return { r: parseInt(h.slice(0, 2), 16) || 153, g: parseInt(h.slice(2, 4), 16) || 153, b: parseInt(h.slice(4, 6), 16) || 153 }; };
  const rgbHex = ({ r, g, b }) => "#" + [r, g, b].map(v => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, "0")).join("");
  const mix = (a, b, t) => ({ r: a.r + (b.r - a.r) * t, g: a.g + (b.g - a.g) * t, b: a.b + (b.b - a.b) * t });
  const lum = c => (c.r + c.g + c.b) / 3;
  function regionStats(data, size, bg) {
    let r = 0, g = 0, b = 0, n = 0, wr = 0, wg = 0, wb = 0, wn = 0, dr = 0, dg = 0, db = 0, dn = 0, orange = 0, striped = 0;
    for (let y = 5; y < size - 5; y += 2) for (let x = 5; x < size - 5; x += 2) {
      const i = (y * size + x) * 4, rr = data[i], gg = data[i + 1], bb = data[i + 2], l = (rr + gg + bb) / 3, spread = Math.max(rr, gg, bb) - Math.min(rr, gg, bb);
      const greenBg = gg > rr * 1.06 && gg > bb * 1.05 && spread > 18;
      const blueSky = bb > rr * 1.18 && bb > gg * 1.06 && spread > 26 && l < 160;
      if (l < 34 || l > 246 || greenBg || blueSky) continue;
      if (bg && bg.some(v => Math.abs(rr - v.r) + Math.abs(gg - v.g) + Math.abs(bb - v.b) < 72)) continue;
      r += rr; g += gg; b += bb; n++;
      if (l > 184 && spread < 56) { wr += rr; wg += gg; wb += bb; wn++; }
      if (l < 120 && spread < 60) { dr += rr; dg += gg; db += bb; dn++; }
      if (rr > gg * .96 && gg > bb * 1.08 && rr > bb + 28 && l > 72) orange++;
      if (l > 38 && l < 128 && spread > 22) striped++;
    }
    if (!n) return null;
    return {
      avg: { r: r / n, g: g / n, b: b / n },
      white: wn ? { r: wr / wn, g: wg / wn, b: wb / wn } : null,
      dark: dn ? { r: dr / dn, g: dg / dn, b: db / dn } : null,
      warmRatio: orange / n, stripeRatio: striped / n, whiteRatio: wn / n, n
    };
  }
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
        const addSample = (px, py) => {
          const i = (py * s + px) * 4, sr = d[i], sg = d[i + 1], sb = d[i + 2];
          for (const cl of clusters) {
            if (Math.abs(sr - cl.r / cl.count) + Math.abs(sg - cl.g / cl.count) + Math.abs(sb - cl.b / cl.count) < 60) { cl.r += sr; cl.g += sg; cl.b += sb; cl.count++; return; }
          }
          clusters.push({ r: sr, g: sg, b: sb, count: 1 });
        };
        for (let p = 2; p < s - 2; p += 3) { addSample(p, 2); addSample(p, s - 3); addSample(2, p); addSample(s - 3, p); }
        const total = clusters.reduce((sum, cl) => sum + cl.count, 0);
        let bg = clusters.filter(cl => cl.count > total * .12).map(cl => ({ r: cl.r / cl.count, g: cl.g / cl.count, b: cl.b / cl.count }));
        if (!bg.length) bg = null;
        let st = regionStats(d, s, bg);
        if (!st || st.n < 250) st = regionStats(d, s, null);
        res(st);
      };
      img.onerror = () => res(null);
      img.src = url;
    });
  }
  async function readPhotos(files) {
    const all = (await Promise.all([...files].slice(0, 4).map(readPhoto))).filter(Boolean);
    if (!all.length) return null;
    const avg = key => {
      const items = all.filter(s => s[key]);
      if (!items.length) return null;
      return { r: items.reduce((s, v) => s + v[key].r, 0) / items.length, g: items.reduce((s, v) => s + v[key].g, 0) / items.length, b: items.reduce((s, v) => s + v[key].b, 0) / items.length };
    };
    const coatC = avg("avg"), whiteC = avg("white"), darkC = avg("dark");
    const warm = all.reduce((s, v) => s + v.warmRatio, 0) / all.length;
    const striped = all.reduce((s, v) => s + v.stripeRatio, 0) / all.length;
    const soft = mix(coatC, { r: 246, g: 241, b: 232 }, .08);
    return {
      coat: rgbHex(soft),
      cream: whiteC ? rgbHex(mix(whiteC, { r: 250, g: 247, b: 240 }, .3)) : "#f6f1e7",
      dark: darkC ? rgbHex(darkC) : rgbHex(mix(soft, { r: 20, g: 22, b: 26 }, .45)),
      pattern: warm > .08 ? "ginger" : striped > .075 ? "tabby" : "solid",
      lightPet: lum(soft) > 185
    };
  }

  function init() {
    ensure();
    setTimeout(() => burst("heart", 4), 800);
    document.dispatchEvent(new CustomEvent("pt-model-ready"));
  }
  window.PetFix = { setLook, setAction, setMood, setAdornment, burst, move, readPhotos, portrait: () => portraitImg };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
