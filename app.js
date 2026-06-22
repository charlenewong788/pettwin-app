const translations = {
  en: {
    brandSub: "Digital pet twin", navDashboard: "Dashboard", navProfile: "Profile", navCheckin: "Check-in", navInsights: "Insights", navTimeline: "Timeline", navMatches: "Matches", language: "Language", careBoundaryTitle: "Care boundary", careBoundaryBody: "PetTwin tracks behavior trends. It does not provide medical diagnosis.", tagline: "Record who they are. Understand how they change.", pageToday: "Today", resetDemo: "Reset demo", checkinCta: "30-sec check-in", mochiToday: "Mochi today", activity: "Activity", stress: "Stress", bonding: "Bonding", routine: "Routine", moodCalm: "Calm", moodCurious: "Curious", moodPlayful: "Playful", radarTitle: "Personality Radar", dynamicModel: "Dynamic model", weeklyTrends: "Weekly Trends", behaviorBaseline: "Behavior baseline", alertsTitle: "Behavior Alerts", profileMeta: "Cat · 3 years old · Neutered · Indoor life · Multi-person home", personalityCard: "Pet Personality Card", quizDaily: "Onboarding quiz + daily logs", livingContext: "Living Context", influenceFactors: "Influence factors", dailyCheckin: "Daily Check-in", aboutThirty: "About 30 seconds", overallQuestion: "How are they overall today?", unusualQuestion: "Any unusual behavior?", environmentQuestion: "Any environmental changes?", updateModel: "Update today’s model", behaviorTrends: "Behavior Trends", pastFourteen: "Past 14 days", aiExplanation: "AI Explanation", observationGuidance: "Observation guidance", videoAudio: "Video / Audio Analysis", nextPhase: "Next MVP phase", futureUpload: "Select to simulate a behavior analysis upload.", timelineTitle: "Pet Personality Timeline", lifeArchive: "Life archive", similarPets: "Similar Personality Pets", similarRatio: "Similar profile ratio: 6.8%", sharedTopics: "Shared Care Topics", topics: "Topics"
  },
  zh: {
    brandSub: "宠物数字孪生", navDashboard: "总览", navProfile: "档案", navCheckin: "打卡", navInsights: "分析", navTimeline: "时间轴", navMatches: "匹配", language: "语言", careBoundaryTitle: "医疗边界", careBoundaryBody: "PetTwin 只追踪行为趋势，不提供疾病诊断。", tagline: "记录它是谁，理解它如何变化。", pageToday: "今日状态", resetDemo: "重置演示", checkinCta: "30 秒打卡", mochiToday: "Mochi 今天", activity: "活跃度", stress: "压力", bonding: "亲人程度", routine: "规律性", moodCalm: "平静", moodCurious: "好奇", moodPlayful: "爱玩", radarTitle: "人格雷达", dynamicModel: "动态模型", weeklyTrends: "本周趋势", behaviorBaseline: "行为基线", alertsTitle: "行为提醒", profileMeta: "猫 · 3 岁 · 已绝育 · 室内生活 · 多人家庭", personalityCard: "宠物人格卡片", quizDaily: "初始问卷 + 日常记录", livingContext: "生活环境", influenceFactors: "影响因素", dailyCheckin: "今日打卡", aboutThirty: "约 30 秒", overallQuestion: "今天它整体怎么样？", unusualQuestion: "今天有没有异常？", environmentQuestion: "今天有什么环境变化？", updateModel: "更新今日人格数据", behaviorTrends: "行为趋势", pastFourteen: "过去 14 天", aiExplanation: "AI 解读", observationGuidance: "观察建议", videoAudio: "视频 / 声音分析", nextPhase: "MVP 下一阶段", futureUpload: "点击模拟上传一段行为分析素材。", timelineTitle: "宠物人格时间轴", lifeArchive: "生命档案", similarPets: "相似人格宠物", similarRatio: "相似人格比例：6.8%", sharedTopics: "同人格养护话题", topics: "话题"
  }
};

const localized = {
  en: {
    traits: ["Sociability", "Curiosity", "Independence", "Emotional Stability", "Activity Level", "Routine Stability"],
    moods: [["active", "Very active"], ["normal", "Normal"], ["quiet", "Quiet"], ["anxious", "Restless"], ["hiding", "Hiding"], ["clingy", "Clingy"]],
    symptoms: [["low-appetite", "Ate less"], ["more-water", "Drank more"], ["more-vocal", "More vocal"], ["litter", "Litter issue"], ["aggression", "Aggression"], ["grooming", "Over-grooming"], ["sleep", "Slept more"], ["no-play", "Less play"]],
    events: [["guests", "Guests"], ["rain", "Rain"], ["noise", "Noise"], ["food-change", "Food change"], ["move", "Moved home"], ["away", "Owner away longer"], ["new-pet", "New pet"], ["none", "No change"]],
    context: ["Indoor cat", "Occasional guests", "Noise-sensitive", "Fixed feeding times", "No known medical history"],
    topics: ["Helping anxious cats adapt to moving", "Should low-social pets be forced to interact?", "Reducing stress after guests visit", "Scent games for high-activity pets"]
  },
  zh: {
    traits: ["社交性", "好奇心", "独立性", "情绪稳定度", "活跃度", "规律性"],
    moods: [["active", "很活跃"], ["normal", "正常"], ["quiet", "安静"], ["anxious", "焦躁"], ["hiding", "躲藏"], ["clingy", "粘人"]],
    symptoms: [["low-appetite", "吃得少"], ["more-water", "喝水多"], ["more-vocal", "叫得多"], ["litter", "排便异常"], ["aggression", "攻击"], ["grooming", "频繁舔毛"], ["sleep", "睡太多"], ["no-play", "不爱玩"]],
    events: [["guests", "来客"], ["rain", "下雨"], ["noise", "噪音"], ["food-change", "换粮"], ["move", "搬家"], ["away", "主人外出较久"], ["new-pet", "新宠物"], ["none", "无变化"]],
    context: ["室内猫", "偶尔来客", "对噪音敏感", "固定喂食", "无既往疾病记录"],
    topics: ["高焦虑猫如何适应搬家", "低社交宠物是否需要强行陪伴", "来客后如何降低压力", "高活跃宠物的嗅闻游戏"]
  }
};

const defaults = {
  traits: [42, 86, 74, 68, 72, 76],
  history: [
    { dayEn: "Mon", dayZh: "周一", activity: 68, stress: 30, routine: 72 },
    { dayEn: "Tue", dayZh: "周二", activity: 74, stress: 28, routine: 78 },
    { dayEn: "Wed", dayZh: "周三", activity: 71, stress: 32, routine: 76 },
    { dayEn: "Thu", dayZh: "周四", activity: 64, stress: 42, routine: 68 },
    { dayEn: "Fri", dayZh: "周五", activity: 70, stress: 35, routine: 74 },
    { dayEn: "Sat", dayZh: "周六", activity: 79, stress: 24, routine: 80 },
    { dayEn: "Today", dayZh: "今天", activity: 72, stress: 28, routine: 76 }
  ]
};

let lang = localStorage.getItem("pettwin-lang") || "en";
let state = JSON.parse(localStorage.getItem("pettwin-state-v2") || "null") || structuredClone(defaults);
let petMood = "calm";
let petRig = null;

const clamp = value => Math.max(0, Math.min(100, Math.round(value)));
const current = () => state.history[state.history.length - 1];
const t = key => translations[lang][key] || key;

function applyLanguage() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-lang]").forEach(el => el.classList.toggle("active", el.dataset.lang === lang));
  renderOptions();
  renderAll();
  localStorage.setItem("pettwin-lang", lang);
}

function renderOptions() {
  const groups = [["mood-options", localized[lang].moods, "mood", "radio"], ["symptom-options", localized[lang].symptoms, "symptoms", "checkbox"], ["event-options", localized[lang].events, "events", "checkbox"]];
  groups.forEach(([id, items, name, type]) => {
    document.getElementById(id).innerHTML = items.map(([value, label], index) => `<label><input type="${type}" name="${name}" value="${value}" ${type === "radio" && index === 1 ? "checked" : ""}> ${label}</label>`).join("");
  });
  document.getElementById("context-tags").innerHTML = localized[lang].context.map(x => `<span>${x}</span>`).join("");
  document.getElementById("topic-tags").innerHTML = localized[lang].topics.map(x => `<span>${x}</span>`).join("");
  document.getElementById("match-list").innerHTML = [
    ["Luna", lang === "en" ? "High curiosity · Low sociability · High independence" : "高好奇 · 低社交 · 高独立"],
    ["Milo", lang === "en" ? "High independence · Moderate activity · Guest-sensitive" : "高独立 · 中等活跃 · 对来客敏感"],
    ["Cookie", lang === "en" ? "Low sociability · High routine · Night-sensitive" : "低社交 · 高规律 · 夜间较敏感"]
  ].map(x => `<article><strong>${x[0]}</strong><span>${x[1]}</span></article>`).join("");
}

function renderAll() {
  const now = current();
  const stable = now.stress <= 55;
  document.getElementById("state-label").textContent = lang === "en" ? (stable ? "Stable" : "Worth watching") : (stable ? "稳定" : "值得观察");
  document.getElementById("state-copy").textContent = lang === "en"
    ? (stable ? "Recent logs look steady. Keep the routine consistent and continue watching play frequency." : "Stress-related signals are elevated. Reduce stimulation and observe for 3 to 5 days.")
    : (stable ? "最近记录较为平稳，建议保持固定作息并继续观察玩耍频率。" : "近期压力相关信号升高，建议减少环境刺激并继续观察 3 至 5 天。");
  document.getElementById("activity-score").textContent = now.activity;
  document.getElementById("stress-score").textContent = now.stress;
  document.getElementById("routine-score").textContent = now.routine;
  document.getElementById("bond-score").textContent = clamp(100 - state.traits[2] + state.traits[0] / 2);
  renderAlerts(); renderTraits(); renderAnalysis(); renderTimeline(); drawRadar(); drawTrend();
}

function renderAlerts() {
  const now = current();
  const alerts = [];
  if (now.stress > 45) alerts.push(lang === "en" ? ["Stress signals increased", "Watch for guests, noise, routine shifts, and environmental triggers."] : ["压力信号升高", "建议观察来客、噪音、作息变化等环境因素。"]);
  if (now.activity < 66) alerts.push(lang === "en" ? ["Activity decreased", "Reduced play and movement are worth tracking."] : ["活跃度下降", "玩耍和移动减少值得持续记录。"]);
  if (!alerts.length) alerts.push(lang === "en" ? ["Stable baseline", "No major behavior changes are deviating from the usual baseline."] : ["状态平稳", "当前没有明显偏离日常基线的行为变化。"]);
  document.getElementById("alert-count").textContent = lang === "en" ? `${alerts.length} ${alerts.length === 1 ? "item" : "items"}` : `${alerts.length} 项`;
  document.getElementById("alerts").innerHTML = alerts.map(x => `<article class="alert"><strong>${x[0]}</strong><span>${x[1]}</span></article>`).join("");
}

function renderTraits() {
  document.getElementById("trait-bars").innerHTML = state.traits.map((value, index) => `<div class="bar"><div class="bar-top"><strong>${localized[lang].traits[index]}</strong><span>${value}</span></div><div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div></div>`).join("");
  document.getElementById("personality-summary").textContent = lang === "en" ? "Mochi is highly curious, fairly independent, and socially cautious. They prefer to choose the distance and timing of interaction." : "Mochi 是一只高好奇、中高独立、社交偏谨慎的猫，更喜欢由自己决定互动距离和时间。";
}

function renderAnalysis() {
  const now = current(); const before = state.history.at(-2) || now;
  const labels = lang === "en" ? ["Hiding / stress behavior", "Play / active behavior", "Sleep / routine stability"] : ["躲藏 / 压力行为", "玩耍 / 活跃行为", "睡眠 / 作息规律"];
  const changes = [now.stress - before.stress, now.activity - before.activity, now.routine - before.routine];
  document.getElementById("trend-list").innerHTML = labels.map((x, i) => `<div class="trend-item"><span>${x}</span><strong>${changes[i] >= 0 ? "+" : ""}${changes[i]}%</strong></div>`).join("");
  document.getElementById("ai-explanation").textContent = lang === "en" ? "The past week looks stable overall. Daily check-ins can continue building a more reliable long-term personality baseline." : "过去一周整体较为稳定。持续完成每日打卡，可以建立更可靠的长期人格基线。";
  const recs = lang === "en" ? ["Keep feeding times and rest areas consistent.", "Avoid forced interaction when hiding appears.", "Consult a veterinarian if health-related changes continue."] : ["保持固定喂食时间和安静休息区。", "出现躲藏时避免强行互动。", "如健康相关变化持续出现，建议咨询兽医。"];
  document.getElementById("recommendations").innerHTML = recs.map(x => `<li>${x}</li>`).join("");
}

function renderTimeline() {
  const items = lang === "en" ? [["June 2026", "Routine became more stable", "Night vocalization decreased and play frequency increased."], ["March 2026", "Initial personality model created", "High curiosity, moderate sociability, and high independence."]] : [["2026 年 6 月", "作息更稳定", "夜间叫声减少，玩耍频率增加。"], ["2026 年 3 月", "初始人格建立", "高好奇心、中等社交性和高独立性。"]];
  document.getElementById("timeline-list").innerHTML = items.map(x => `<article class="timeline-item"><strong>${x[0]} · ${x[1]}</strong><p>${x[2]}</p></article>`).join("");
}

function drawRadar() {
  const canvas = document.getElementById("radar-chart"); const ctx = canvas.getContext("2d"); const center = { x: canvas.width / 2, y: canvas.height / 2 + 6 }; const radius = 110; const count = 6;
  ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.strokeStyle = "#dbe5e7"; ctx.fillStyle = "#65727d"; ctx.font = "13px Arial";
  const point = (r, i) => ({ x: center.x + Math.cos(-Math.PI / 2 + i * Math.PI * 2 / count) * r, y: center.y + Math.sin(-Math.PI / 2 + i * Math.PI * 2 / count) * r });
  for (let ring = 1; ring <= 4; ring++) { ctx.beginPath(); for (let i = 0; i < count; i++) { const p = point(radius * ring / 4, i); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); } ctx.closePath(); ctx.stroke(); }
  localized[lang].traits.forEach((label, i) => { const p = point(radius + 30, i); ctx.textAlign = p.x < center.x - 8 ? "right" : p.x > center.x + 8 ? "left" : "center"; ctx.fillText(label, p.x, p.y); });
  ctx.beginPath(); state.traits.forEach((value, i) => { const p = point(radius * value / 100, i); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); }); ctx.closePath(); ctx.fillStyle = "rgba(119,190,210,.34)"; ctx.strokeStyle = "#4f94a8"; ctx.lineWidth = 3; ctx.fill(); ctx.stroke(); ctx.lineWidth = 1;
}

function drawTrend() {
  const canvas = document.getElementById("trend-chart"); const ctx = canvas.getContext("2d"); const pad = 44; const w = canvas.width - pad * 2; const h = canvas.height - pad * 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.strokeStyle = "#dbe5e7"; ctx.fillStyle = "#65727d"; ctx.font = "12px Arial";
  for (let i = 0; i <= 4; i++) { const y = pad + h * i / 4; ctx.beginPath(); ctx.moveTo(pad, y); ctx.lineTo(canvas.width - pad, y); ctx.stroke(); }
  [["activity", "#77bed2"], ["stress", "#e7816e"], ["routine", "#8dc49a"]].forEach(([key, color]) => { ctx.beginPath(); state.history.forEach((item, i) => { const x = pad + w * i / (state.history.length - 1); const y = pad + h - item[key] * h / 100; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.stroke(); });
  state.history.forEach((item, i) => ctx.fillText(lang === "en" ? item.dayEn : item.dayZh, pad + w * i / (state.history.length - 1) - 14, canvas.height - 12)); ctx.lineWidth = 1;
}

function initPet() {
  const canvas = document.getElementById("pet-canvas");
  if (!window.THREE) { document.getElementById("css-pet").style.display = "block"; return; }
  const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100); camera.position.set(0, 1.6, 6.6);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.shadowMap.enabled = true;
  const group = new THREE.Group(); scene.add(group);
  const white = new THREE.MeshStandardMaterial({ color: 0xf7fbfa, roughness: 0.52 }); const accent = new THREE.MeshStandardMaterial({ color: 0x77bed2, roughness: 0.48 }); const dark = new THREE.MeshStandardMaterial({ color: 0x202a32, roughness: 0.4 });
  const sphere = (scale, pos, material = white) => { const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 28), material); mesh.scale.set(...scale); mesh.position.set(...pos); mesh.castShadow = true; group.add(mesh); return mesh; };
  const body = sphere([1.28, .78, .82], [.28, -.25, 0]); const head = sphere([.82, .76, .7], [-.78, .45, .05]);
  const earGeo = new THREE.ConeGeometry(.34, .72, 4); [-1, 1].forEach(side => { const ear = new THREE.Mesh(earGeo, accent); ear.position.set(-.82 + side * .48, 1.16, .02); ear.rotation.z = side * -.12; group.add(ear); });
  [-1, 1].forEach(side => sphere([.09, .12, .07], [-.8 + side * .28, .55, .68], dark)); sphere([.08, .06, .06], [-.8, .31, .72], accent);
  const tail = new THREE.Mesh(new THREE.TorusGeometry(.64, .12, 18, 45, Math.PI * 1.35), accent); tail.position.set(1.45, .02, -.08); tail.rotation.set(1.45, .15, -.35); group.add(tail);
  [-.45, .72].forEach(x => sphere([.28, .52, .28], [x, -.86, .25]));
  scene.add(new THREE.HemisphereLight(0xffffff, 0x7b9c98, 2.2)); const key = new THREE.DirectionalLight(0xffffff, 3); key.position.set(-3, 5, 4); key.castShadow = true; scene.add(key);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(2.2, 64), new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: .42, roughness: 1 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -1.4; floor.receiveShadow = true; scene.add(floor);
  const resize = () => { const rect = canvas.parentElement.getBoundingClientRect(); renderer.setSize(rect.width, rect.height, false); camera.aspect = rect.width / rect.height; camera.updateProjectionMatrix(); };
  resize(); addEventListener("resize", resize); let tick = 0;
  function animate() { tick += .018; group.position.y = Math.sin(tick * 1.8) * .08; group.rotation.y = Math.sin(tick * .75) * .18; head.rotation.z = Math.sin(tick * (petMood === "playful" ? 4 : 1.5)) * (petMood === "curious" ? .13 : .045); tail.rotation.z = -.35 + Math.sin(tick * (petMood === "playful" ? 8 : 3)) * .24; if (petMood === "playful") group.rotation.x = Math.sin(tick * 3) * .035; renderer.render(scene, camera); requestAnimationFrame(animate); }
  petRig = group; animate();
}

document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => { lang = btn.dataset.lang; applyLanguage(); }));
document.querySelectorAll("[data-view], [data-view-jump]").forEach(btn => btn.addEventListener("click", () => { const view = btn.dataset.view || btn.dataset.viewJump; document.querySelectorAll(".view").forEach(x => x.classList.toggle("active", x.id === view)); document.querySelectorAll(".nav-item").forEach(x => x.classList.toggle("active", x.dataset.view === view)); document.getElementById("page-title").textContent = btn.dataset.view ? btn.textContent.trim() : t("navCheckin"); }));
document.querySelectorAll("[data-pet-mood]").forEach(btn => btn.addEventListener("click", () => { petMood = btn.dataset.petMood; document.querySelectorAll("[data-pet-mood]").forEach(x => x.classList.toggle("active", x === btn)); if (petRig) petRig.rotation.z = petMood === "curious" ? -.08 : 0; }));
document.querySelectorAll("[data-metric]").forEach(btn => btn.addEventListener("click", () => { document.querySelectorAll("[data-metric]").forEach(x => x.classList.toggle("active", x === btn)); }));
document.getElementById("simulate-upload").addEventListener("click", () => { document.getElementById("upload-result").textContent = lang === "en" ? "Demo analysis complete: curious posture, low stress, normal movement." : "演示分析完成：姿态好奇、压力较低、活动正常。"; });
document.getElementById("reset-demo").addEventListener("click", () => { state = structuredClone(defaults); localStorage.removeItem("pettwin-state-v2"); renderAll(); });
document.getElementById("checkin-form").addEventListener("submit", event => { event.preventDefault(); const form = new FormData(event.currentTarget); const mood = form.get("mood"); const symptoms = form.getAll("symptoms"); const events = form.getAll("events"); const before = current(); const next = { dayEn: "Today", dayZh: "今天", activity: before.activity, stress: before.stress, routine: before.routine }; if (mood === "active") next.activity += 8; if (["quiet", "hiding"].includes(mood)) next.activity -= 6; if (["anxious", "hiding"].includes(mood)) next.stress += 12; if (symptoms.length) next.stress += symptoms.length * 3; if (events.some(x => ["guests", "noise", "move", "new-pet"].includes(x))) next.stress += 7; if (events.includes("none")) next.routine += 5; next.activity = clamp(next.activity); next.stress = clamp(next.stress); next.routine = clamp(next.routine); state.history.push(next); state.history = state.history.slice(-7); state.traits[4] = clamp((state.traits[4] * 2 + next.activity) / 3); state.traits[3] = clamp(100 - next.stress); state.traits[5] = clamp((state.traits[5] * 2 + next.routine) / 3); localStorage.setItem("pettwin-state-v2", JSON.stringify(state)); renderAll(); document.getElementById("form-result").textContent = lang === "en" ? "Mochi’s personality model has been updated." : "Mochi 今日人格数据已更新。"; });

applyLanguage();
initPet();

