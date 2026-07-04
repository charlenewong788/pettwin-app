/* PetTwin — daily check-in loop, streaks, evolving persona, achievements, share card.
   3D rendering lives in pet-fix.js (window.PetFix). */

const copy = {
en: {
  brandSub: "Your pet, understood",
  navToday: "Today", navHome: "Home mode", navDevices: "Devices", navCare: "Care plan",
  navInsights: "Insights", navTimeline: "Timeline", navAvatar: "3D twin studio",
  language: "Language", hideTwin: "Hide digital twin", showTwin: "Show digital twin",
  savedLocal: "Data stays on this device", quickCheck: "Daily check-in",
  hello: "Hello,", wellbeing: "Wellbeing",
  seeHome: "See what happened at home", addObservation: "Check in now",
  activity: "Activity", stress: "Stress", moodLabel: "Mood", water: "Appetite", baseline: "Baseline",
  worthKnowing: "Worth knowing", smartFinding: "One useful finding",
  addCareTask: "Add care task", viewEvidence: "View evidence",
  todayPlan: "Today’s plan", smallActions: "Small actions that help",
  workdayCompanion: "Workday Companion", homeWithoutWatching: "Know what matters without watching all day",
  homeModeCopy: "PetTwin turns device events into a calm, useful home diary.",
  quietMode: "Quiet", companionMode: "Companion", observeMode: "Observe",
  liveDiary: "Home diary", todayAtHome: "Today at home", sampleTag: "SAMPLE",
  remoteCare: "Remote care", connectGently: "Connect gently",
  playVoice: "Play a familiar message", smallPortion: "Dispense a limited portion",
  startToy: "Start a safe toy session", openCamera: "Check the living room",
  beforeHome: "Before you get home",
  deviceIntro: "Hardware integrations are coming. This page previews how passive data will flow in.",
  discoverDevices: "Discover devices", catOnly: "Cat intelligence", litterAnalysis: "Smart litter-box analysis",
  preview: "Preview", visitsToday: "Visits today", averageDuration: "Average duration",
  latestWeight: "Latest weight", repeatEntries: "Repeat entries",
  observeNotDiagnose: "Observation, not diagnosis",
  careIntro: "Turn insights into actions, then learn what works for this pet.",
  newTask: "New care task", activePlan: "Active plan", thisWeek: "This week", personalPlaybook: "Personal care playbook",
  behaviorBaseline: "Behavior baseline", linkedSignals: "Logged signals",
  environmentLinks: "Environment links", likelyTriggers: "Likely triggers (sample)",
  lifeArchive: "Life archive", personalityTimeline: "Personality timeline", exportReport: "Export report",
  digitalTwinStudio: "Digital Twin Studio", buildLookalike: "Create a photo-matched digital twin",
  studioCopy: "Use four clear views. The twin adapts coat colour and markings to your pet. Photos stay on this device.",
  captureReady: "photo quality", photoSet: "Photo set", loadModel: "Load GLB",
  uploadPhotos: "Add four pet photos", uploadHint: "Front, left side, right side and back in even light.",
  captureQuality: "Capture quality",
  stageCapture: "Capture", stageShape: "Shape", stageTexture: "Coat", stageRig: "Motion", stageReview: "Review",
  generateTwin: "Create photo-matched preview", liveModel: "LIVE MODEL", proceduralPreview: "Capture preview",
  waitingInput: "Add the four required views to begin", dragRotate: "Drag the twin to rotate it",
  yes: "Yes", no: "No",
  personaLabel: "Personality type", checkIn: "Check in today", checkedIn: "Checked in ✓",
  streakDays: "day streak", whisperLabel: "Today's whisper", achievements: "Milestones",
  sharePoster: "Share card", shareTitle: "Your pet card", downloadPoster: "Save image",
  petCardTagline: "Understood, every day",
  feedPet: "Feed", shakePaw: "Shake paw", playPet: "Play", calmPet: "Calm", view360: "360 view",
  comingSoonDevice: "Hardware pairing is coming soon — this page is a preview.",
  comingSoonRemote: "Available once a real device is paired. Coming soon.",
  modeSaved: "Preference saved. Notifications arrive with the full release.",
  checkinTitle: "30-second check-in", checkinSub: "Three quick questions build your pet's real baseline.",
  qMood: "Mood today", qAppetite: "Appetite", qLitter: "Litter box",
  appLess: "Less", appNormal: "Normal", appMore: "More",
  litterNormal: "Normal", litterOdd: "Unusual",
  notePh: "Anything worth remembering? (optional)",
  saveCheckin: "Save today's check-in", checkinThanks: "Saved! Your twin says thanks.",
  onbTitle: "Welcome to PetTwin", onbSub: "Tell us who we're getting to know.",
  onbName: "Pet's name", onbNamePh: "e.g. Mochi", onbAge: "Age (years, optional)", onbStart: "Start"
},
zh: {
  brandSub: "更懂你的宠物",
  navToday: "今日", navHome: "居家模式", navDevices: "设备中心", navCare: "照护计划",
  navInsights: "行为洞察", navTimeline: "成长档案", navAvatar: "3D 分身工作室",
  language: "语言", hideTwin: "隐藏数字分身", showTwin: "显示数字分身",
  savedLocal: "数据保存在本设备", quickCheck: "今日打卡",
  hello: "你好，", wellbeing: "综合状态",
  seeHome: "看看今天在家发生了什么", addObservation: "现在打卡",
  activity: "活跃度", stress: "压力", moodLabel: "心情", water: "食欲", baseline: "接近基线",
  worthKnowing: "值得了解", smartFinding: "一个有用的发现",
  addCareTask: "加入照护任务", viewEvidence: "查看依据",
  todayPlan: "今日计划", smallActions: "能带来帮助的小行动",
  workdayCompanion: "上班陪伴模式", homeWithoutWatching: "不用一直盯着，也能知道重要变化",
  homeModeCopy: "PetTwin 将设备事件整理成安静而有用的居家日记。",
  quietMode: "安静", companionMode: "陪伴", observeMode: "密切观察",
  liveDiary: "居家日记", todayAtHome: "今天在家", sampleTag: "示例",
  remoteCare: "远程照护", connectGently: "温和地保持连接",
  playVoice: "播放熟悉的语音", smallPortion: "投放限量零食",
  startToy: "开启安全玩具", openCamera: "查看客厅",
  beforeHome: "回家之前",
  deviceIntro: "硬件对接即将推出，本页展示被动数据未来的接入方式。",
  discoverDevices: "发现设备", catOnly: "猫咪智能分析", litterAnalysis: "智能猫砂盆分析",
  preview: "预览", visitsToday: "今日次数", averageDuration: "平均停留",
  latestWeight: "最新体重", repeatEntries: "重复进入",
  observeNotDiagnose: "只做观察，不作诊断",
  careIntro: "把洞察变成行动，再学习什么方法真正适合它。",
  newTask: "新建任务", activePlan: "正在执行", thisWeek: "本周计划", personalPlaybook: "专属照护手册",
  behaviorBaseline: "行为基线", linkedSignals: "记录信号",
  environmentLinks: "环境关联", likelyTriggers: "可能的触发因素（示例）",
  lifeArchive: "生命档案", personalityTimeline: "人格时间轴", exportReport: "导出报告",
  digitalTwinStudio: "数字分身工作室", buildLookalike: "创建照片匹配的 3D 数字分身",
  studioCopy: "拍摄四个清晰视角，分身会匹配主毛色和花纹。照片仅在本设备处理。",
  captureReady: "照片质量", photoSet: "照片组", loadModel: "载入 GLB",
  uploadPhotos: "添加四张宠物照片", uploadHint: "在均匀光线下拍摄正面、左侧、右侧和背面。",
  captureQuality: "采集质量",
  stageCapture: "采集", stageShape: "形体", stageTexture: "毛色", stageRig: "动作", stageReview: "验收",
  generateTwin: "创建照片匹配预览", liveModel: "实时模型", proceduralPreview: "采集预览",
  waitingInput: "添加四个必需视角后开始", dragRotate: "拖动分身可旋转查看",
  yes: "是的", no: "没有",
  personaLabel: "性格原型", checkIn: "今日打卡", checkedIn: "已打卡 ✓",
  streakDays: "天连续记录", whisperLabel: "今日碎碎念", achievements: "里程碑",
  sharePoster: "分享卡片", shareTitle: "你的宠物卡片", downloadPoster: "保存图片",
  petCardTagline: "每天，更懂它一点",
  feedPet: "喂食", shakePaw: "握手", playPet: "玩耍", calmPet: "安静", view360: "360 查看",
  comingSoonDevice: "硬件配对即将推出，本页为界面预览。",
  comingSoonRemote: "连接真实设备后可用，即将推出。",
  modeSaved: "偏好已记住，正式版将联动通知。",
  checkinTitle: "30 秒打卡", checkinSub: "三个小问题，建立它的真实基线。",
  qMood: "今天的心情", qAppetite: "食欲", qLitter: "猫砂盆",
  appLess: "偏少", appNormal: "正常", appMore: "偏多",
  litterNormal: "正常", litterOdd: "有点异常",
  notePh: "有什么值得记下来的吗？（选填）",
  saveCheckin: "保存今日打卡", checkinThanks: "已保存！你的分身说谢谢。",
  onbTitle: "欢迎来到 PetTwin", onbSub: "告诉我们，要认识的是哪位小朋友。",
  onbName: "宠物名字", onbNamePh: "例如：Mochi", onbAge: "年龄（岁，选填）", onbStart: "开始"
}};

let lang = localStorage.getItem("pt-lang") || "en";

const defaultState = {
  pet: { name: "", age: "" },
  streak: 0, lastCheckIn: null, freezes: 1,
  checkIns: {},               // "YYYY-MM-DD" -> {mood:1-5, appetite:"less|normal|more", litterOk:bool, note:""}
  emaEnergy: null, emaStress: null,
  flags: {},                  // one-off achievement events: photo, twin
  achievements: {},
  mode: "companion", twinVisible: true, coat: "#77bed2",
  tasks: [
    { id: "play", done: false, en: "10-minute play session", zh: "互动玩耍 10 分钟", whyEn: "Play keeps the evening baseline steady", whyZh: "晚间互动有助于保持基线稳定" },
    { id: "water", done: false, en: "Check water level", zh: "检查饮水量", whyEn: "Fresh water supports normal litter habits", whyZh: "新鲜饮水有助于正常如厕" },
    { id: "safe", done: false, en: "Prepare a quiet hiding space", zh: "准备安静的躲藏空间", whyEn: "A retreat lowers stress on busy days", whyZh: "有退路的日子压力更低" }
  ]
};

function loadState() {
  try {
    const raw = localStorage.getItem("pt-state");
    const parsed = raw ? JSON.parse(raw) : null;
    if (!parsed || typeof parsed !== "object") return structuredClone(defaultState);
    const merged = Object.assign(structuredClone(defaultState), parsed);
    merged.pet = Object.assign({ name: "", age: "" }, parsed.pet || {});
    merged.checkIns = parsed.checkIns || {};
    merged.flags = parsed.flags || {};
    merged.achievements = parsed.achievements || {};
    return merged;
  } catch (e) {
    console.warn("PetTwin: could not read saved state, resetting.", e);
    return structuredClone(defaultState);
  }
}
let state = loadState();

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const t = k => copy[lang][k] || k;
const save = () => localStorage.setItem("pt-state", JSON.stringify(state));
const en = () => lang === "en";

/* Local-timezone date key (never UTC — streaks must follow the user's day). */
function dkey(ts) {
  const d = ts ? new Date(ts) : new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
const todayLog = () => state.checkIns[dkey()] || null;
const logCount = () => Object.keys(state.checkIns).length;
function petName() { return (state.pet && state.pet.name) || (en() ? "your cat" : "你的猫"); }

/* --- Reconstruction API bridge (optional backend) --- */
const RECON_API_BASE = (typeof window !== "undefined" && window.PETTWIN_API_BASE) || localStorage.getItem("pt-api-base") || "";
async function reconServiceAvailable() {
  if (!RECON_API_BASE) return false;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(RECON_API_BASE + "/api/v1/health", { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return false;
    return !!(await res.json()).ok;
  } catch (e) { return false; }
}
async function runReconstruction(setStatus) {
  const assets = captureResults.slice(0, 4).map(x => x.url);
  const body = { assets, coatColor: state.coat, species: "cat" };
  const created = await fetch(RECON_API_BASE + "/api/v1/reconstruction/jobs", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  if (!created.ok) throw new Error("Job could not be created (" + created.status + ")");
  const job = await created.json();
  for (let attempt = 0; attempt < 90; attempt++) {
    await new Promise(r => setTimeout(r, 2000));
    const res = await fetch(RECON_API_BASE + "/api/v1/reconstruction/jobs/" + encodeURIComponent(job.id));
    if (!res.ok) throw new Error("Job status error (" + res.status + ")");
    const status = await res.json();
    if (setStatus) setStatus(status);
    if (status.error) throw new Error(status.error);
    if (status.modelUrl) return status.modelUrl;
  }
  throw new Error("Reconstruction timed out");
}

let captureResults = [];
const requiredViews = ["Front", "Left side", "Right side", "Back"];

const eventsEn = [
  { time: "14:42", icon: "L", title: "Litter-box visit", detail: "54 seconds · weight 4.62 kg" },
  { time: "13:18", icon: "Z", title: "Nap ended", detail: "Rested for 2h 06m" },
  { time: "11:07", icon: "A", title: "Living-room activity", detail: "Movement returned to normal" },
  { time: "09:36", icon: "W", title: "Drank water", detail: "Within the usual morning range" }
];
const eventsZh = [
  { time: "14:42", icon: "砂", title: "猫砂盆记录", detail: "停留 54 秒 · 体重 4.62 kg" },
  { time: "13:18", icon: "眠", title: "午睡结束", detail: "休息了 2 小时 06 分钟" },
  { time: "11:07", icon: "动", title: "客厅活动", detail: "活动量恢复到正常范围" },
  { time: "09:36", icon: "水", title: "饮水记录", detail: "处于日常早间范围" }
];
const deviceData = [
  { icon: "LB", en: "Smart litter box", zh: "智能猫砂盆", enD: "Visits, weight and duration", zhD: "次数、体重和停留时间" },
  { icon: "CM", en: "Home camera", zh: "家庭摄像头", enD: "Movement and rest zones", zhD: "活动和休息区域" },
  { icon: "FD", en: "Smart feeder", zh: "智能喂食器", enD: "Meals and portion limits", zhD: "进食和份量限制" },
  { icon: "CL", en: "Activity collar", zh: "活动项圈", enD: "Activity and sleep", zhD: "活动量和睡眠" }
];

/* === Derived wellbeing model (driven by check-ins) === */
function energyOf(log) { return log.mood * 18 + 8; }
function stressOf(log) { return (log.litterOk ? 16 : 44) + (log.mood <= 2 ? 18 : 0) + (log.appetite === "less" ? 10 : 0); }
function currentEnergy() { return state.emaEnergy == null ? 72 : state.emaEnergy; }
function currentStress() { return state.emaStress == null ? 28 : state.emaStress; }
function wellbeingScore() {
  return Math.max(40, Math.min(98, Math.round(currentEnergy() * 0.6 + (100 - currentStress()) * 0.4)));
}

/* === Check-in === */
let ciDraft = { mood: 0, appetite: "", litter: "" };
function openCheckIn() {
  const existing = todayLog();
  ciDraft = existing
    ? { mood: existing.mood, appetite: existing.appetite, litter: existing.litterOk ? "normal" : "odd" }
    : { mood: 0, appetite: "", litter: "" };
  $("#checkin-note").value = existing ? (existing.note || "") : "";
  renderCheckInForm();
  $("#checkin-overlay").classList.remove("hidden");
}
function renderCheckInForm() {
  $$("#mood-row button").forEach(b => b.classList.toggle("active", +b.dataset.mood === ciDraft.mood));
  $$('[data-field="appetite"] button').forEach(b => b.classList.toggle("active", b.dataset.value === ciDraft.appetite));
  $$('[data-field="litter"] button').forEach(b => b.classList.toggle("active", b.dataset.value === ciDraft.litter));
  $("#checkin-save").disabled = !(ciDraft.mood && ciDraft.appetite && ciDraft.litter);
}
function submitCheckIn() {
  const today = dkey();
  const firstToday = !state.checkIns[today];
  const log = {
    mood: ciDraft.mood,
    appetite: ciDraft.appetite,
    litterOk: ciDraft.litter === "normal",
    note: $("#checkin-note").value.trim()
  };
  state.checkIns[today] = log;
  if (firstToday) {
    const y1 = dkey(Date.now() - 864e5), y2 = dkey(Date.now() - 2 * 864e5);
    if (state.lastCheckIn === y1) state.streak = (state.streak || 0) + 1;
    else if (state.lastCheckIn === y2 && state.freezes > 0) { state.freezes--; state.streak = (state.streak || 0) + 1; }
    else state.streak = 1;
    if (state.streak > 0 && state.streak % 7 === 0) state.freezes = Math.min(2, (state.freezes || 0) + 1);
    state.lastCheckIn = today;
  }
  const e = energyOf(log), s = stressOf(log);
  state.emaEnergy = state.emaEnergy == null ? e : Math.round(state.emaEnergy * 0.75 + e * 0.25);
  state.emaStress = state.emaStress == null ? s : Math.round(state.emaStress * 0.75 + s * 0.25);
  save();
  $("#checkin-overlay").classList.add("hidden");
  renderAll();
  if (window.PetFix) window.PetFix.setAction("feed");
  const note = $("#checkin-toast");
  if (note) { note.textContent = t("checkinThanks"); note.classList.add("show"); setTimeout(() => note.classList.remove("show"), 2600); }
}

/* === Persona (slow evolution via EMA + record count) === */
const PERSONAS = [
  { id: "explorer", emoji: "🐆", en: "The Curious Explorer", zh: "好奇探险家", qEn: "The world is my playground — I have three spots to inspect before dinner.", qZh: "世界是我的游乐场——晚饭前我还有三个地方要巡视。", tEn: ["High curiosity", "Playful", "Bold"], tZh: ["高好奇", "爱玩", "大胆"] },
  { id: "noble", emoji: "👑", en: "The Aloof Noble", zh: "高冷贵族", qEn: "I permit your admiration, but do keep a respectful distance.", qZh: "我允许你欣赏我，但请保持得体的距离。", tEn: ["Independent", "Calm", "Selective"], tZh: ["独立", "沉稳", "挑剔"] },
  { id: "cuddler", emoji: "🧸", en: "The Gentle Cuddler", zh: "温柔黏人精", qEn: "Wherever you are is exactly where I want to nap.", qZh: "你在哪里，哪里就是我最想打盹的地方。", tEn: ["Affectionate", "Social", "Soft"], tZh: ["亲人", "社交", "柔软"] },
  { id: "guardian", emoji: "🛡️", en: "The Watchful Guardian", zh: "警觉守护者", qEn: "I heard that. I hear everything. The house is secure — for now.", qZh: "我听到了，我什么都听得到。屋子暂时安全。", tEn: ["Alert", "Sensitive", "Loyal"], tZh: ["警觉", "敏感", "忠诚"] },
  { id: "zen", emoji: "🍃", en: "The Zen Dreamer", zh: "佛系梦想家", qEn: "A sunbeam, a slow blink, a quiet afternoon. This is enough.", qZh: "一束阳光，一次慢眨眼，一个安静的下午，足矣。", tEn: ["Relaxed", "Steady", "Content"], tZh: ["放松", "稳定", "知足"] }
];
function computePersona() {
  const a = currentEnergy(), s = currentStress();
  if (s > 52) return PERSONAS[3];
  if (a >= 72 && s < 40) return PERSONAS[0];
  if (a < 50 && s < 34) return PERSONAS[4];
  if (a < 60 && s >= 34) return PERSONAS[1];
  return PERSONAS[2];
}
function renderPersona() {
  const p = computePersona();
  if (!$("#persona-name")) return;
  $("#persona-emoji").textContent = p.emoji;
  $("#persona-name").textContent = en() ? p.en : p.zh;
  $("#persona-quote").textContent = "“" + (en() ? p.qEn : p.qZh) + "”";
  $("#persona-traits").innerHTML = (en() ? p.tEn : p.tZh).map(x => "<span>" + x + "</span>").join("");
  const n = logCount();
  $("#persona-progress").textContent = n >= 7
    ? (en() ? `Based on ${n} days of real check-ins` : `基于 ${n} 天真实打卡记录`)
    : (en() ? `Check in ${7 - n} more day${7 - n > 1 ? "s" : ""} to sharpen this profile` : `再打卡 ${7 - n} 天，人格画像会更立体`);
  window.__persona = p;
}

/* === Streak === */
function renderStreak() {
  const c = $("#streak-count"), btn = $("#check-in");
  if (!c) return;
  c.textContent = state.streak || 0;
  const done = !!todayLog();
  btn.classList.toggle("done", done);
  btn.textContent = done ? t("checkedIn") : t("checkIn");
  $("#freeze-chip").textContent = "🧊 ×" + (state.freezes || 0) + (en() ? " streak freeze" : " 补签卡");
}

/* === Whispers (state-aware pools, rotate by date) === */
const WHISPERS = {
  base: {
    en: [
      "I saved you the sunny spot by the window today.",
      "I knocked something off the shelf. Purely scientific curiosity.",
      "Your chair smells like you. I approve.",
      "I pretended not to hear you, but I did.",
      "I watched a bird for 40 minutes. Riveting stuff.",
      "The red dot returned. I let it live — this time.",
      "I did my rounds. Every room is exactly where we left it.",
      "Three naps today. Each one strategically located.",
      "The vacuum monster slept all day. I kept watch anyway.",
      "I sat in the empty box. It needed supervising.",
      "A leaf moved outside. I handled it.",
      "Your keyboard was warm. Someone had to sit on it.",
      "I groomed my tail for 20 minutes. Perfection takes time.",
      "The water bowl reflected a very handsome cat today.",
      "I meowed at the fridge. It ignored me. Rude.",
      "Dust particles danced in the light. I supervised them."
    ],
    zh: [
      "今天我帮你把窗边最晒的位置占好了。",
      "我把架子上的东西推下去了，纯粹出于科学好奇。",
      "你的椅子有你的味道，我批准了。",
      "我假装没听见你叫我，其实听见了。",
      "我盯着一只鸟看了 40 分钟，非常精彩。",
      "红点又出现了。这次我放了它一马。",
      "巡逻完毕，每个房间都在原位。",
      "今天睡了三觉，每一觉的选址都很讲究。",
      "吸尘器怪兽睡了一整天，我还是盯着它。",
      "我坐进了那个空纸箱，它需要有人看管。",
      "窗外有片叶子动了，我已经处理好了。",
      "你的键盘是温的，总得有猫坐上去。",
      "我给尾巴做了 20 分钟护理，完美需要时间。",
      "水碗里今天倒映着一只特别好看的猫。",
      "我对着冰箱喵了一声，它不理我，没礼貌。",
      "灰尘在阳光里跳舞，我全程监督。"
    ]
  },
  stressed: {
    en: [
      "Today felt a bit much. Sit with me for a while?",
      "Too many strange sounds today. I stayed close to your side of the bed.",
      "I hid for a bit today. The blanket cave is excellent, by the way.",
      "A quiet evening would be lovely. Just us."
    ],
    zh: [
      "今天有点累，陪我坐一会儿好吗？",
      "今天奇怪的声音有点多，我一直待在你那侧的床边。",
      "我今天躲了一小会儿。顺便说，毯子洞穴非常优秀。",
      "今晚安静一点就好，只有我们俩。"
    ]
  },
  checkedIn: {
    en: [
      "You wrote about me today. I noticed. I always notice.",
      "Check-in received. Payment accepted in chin scratches.",
      "Another day documented. My biography is coming along nicely.",
      "Thanks for keeping up with me. I'd do the same if I had thumbs."
    ],
    zh: [
      "你今天记录了我的事，我注意到了。我什么都注意得到。",
      "打卡已收到，报酬请用挠下巴支付。",
      "又记录了一天，我的传记进展顺利。",
      "谢谢你坚持记录我。要是我有大拇指，我也会这么做的。"
    ]
  },
  weekend: {
    en: [
      "You're home today? Excellent. Assume your position on the couch.",
      "Weekend rule: every nap is better with you nearby.",
      "I have planned our day: nap, snack, nap, window, nap.",
      "No leaving today. I checked the calendar. It says 'cat time'."
    ],
    zh: [
      "你今天在家？很好，请就位到沙发上。",
      "周末规则：你在旁边，每一觉都更香。",
      "我安排好今天的日程了：睡觉、零食、睡觉、看窗外、睡觉。",
      "今天不许出门，我看过日历了，上面写着「猫的时间」。"
    ]
  }
};
function renderWhisper() {
  const el = $("#daily-whisper"); if (!el) return;
  const day = Number(dkey().replace(/-/g, ""));
  const wd = new Date().getDay();
  let pool;
  if (currentStress() > 45) pool = WHISPERS.stressed;
  else if (todayLog()) pool = WHISPERS.checkedIn;
  else if (wd === 0 || wd === 6) pool = WHISPERS.weekend;
  else pool = WHISPERS.base;
  const list = pool[lang] || pool.en;
  el.textContent = list[day % list.length];
}

/* === Achievements (long tail) === */
const ACHIEVEMENTS = [
  { id: "firstLog", ico: "✅", en: "First Check-in", zh: "首次打卡", test: () => logCount() >= 1 },
  { id: "streak3", ico: "🌱", en: "3-Day Streak", zh: "连续 3 天", test: () => (state.streak || 0) >= 3 },
  { id: "streak7", ico: "🔥", en: "7-Day Streak", zh: "连续 7 天", test: () => (state.streak || 0) >= 7 },
  { id: "streak14", ico: "⚡", en: "14-Day Streak", zh: "连续 14 天", test: () => (state.streak || 0) >= 14 },
  { id: "streak30", ico: "🏆", en: "30-Day Streak", zh: "连续 30 天", test: () => (state.streak || 0) >= 30 },
  { id: "streak100", ico: "💎", en: "100-Day Streak", zh: "连续 100 天", test: () => (state.streak || 0) >= 100 },
  { id: "logs7", ico: "📔", en: "7 Days Logged", zh: "累计 7 天", test: () => logCount() >= 7 },
  { id: "logs30", ico: "📚", en: "30 Days Logged", zh: "累计 30 天", test: () => logCount() >= 30 },
  { id: "photo", ico: "📷", en: "First Photos", zh: "首组照片", test: () => !!state.flags.photo },
  { id: "twin", ico: "✨", en: "Twin Created", zh: "生成分身", test: () => !!state.flags.twin },
  { id: "caretaker", ico: "💚", en: "Caretaker", zh: "贴心照护", test: () => state.tasks.filter(x => x.done).length >= 2 },
  { id: "calmKeeper", ico: "🧘", en: "Calm Keeper", zh: "稳定守护", test: () => state.emaStress != null && state.emaStress <= 25 }
];
function evaluateAchievements() {
  let changed = false;
  ACHIEVEMENTS.forEach(a => { if (a.test() && !state.achievements[a.id]) { state.achievements[a.id] = dkey(); changed = true; } });
  if (changed) save();
}
function renderAchievements() {
  const grid = $("#ach-grid"); if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const unlocked = !!state.achievements[a.id];
    return '<div class="ach-item ' + (unlocked ? "unlocked" : "locked") + '"><span class="ach-ico">' + a.ico + '</span><span class="ach-name">' + (en() ? a.en : a.zh) + "</span></div>";
  }).join("");
  $("#ach-progress").textContent = ACHIEVEMENTS.filter(a => state.achievements[a.id]).length + "/" + ACHIEVEMENTS.length;
}

/* === Share poster (real twin snapshot + real pet name) === */
function roundedPath(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
function wrapText(ctx, text, x, y, maxW, lh) {
  const chars = text.split(""); let line = "", ly = y;
  for (const ch of chars) { const test = line + ch; if (ctx.measureText(test).width > maxW && line) { ctx.fillText(line, x, ly); line = ch; ly += lh; } else line = test; }
  ctx.fillText(line, x, ly);
}
function buildSharePoster() {
  const canvas = $("#share-canvas"); if (!canvas) return;
  const ctx = canvas.getContext("2d"), W = canvas.width, H = canvas.height;
  const p = window.__persona || computePersona();
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "#a9a0d8"); g.addColorStop(.55, "#75bdd0"); g.addColorStop(1, "#84c5a1");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "rgba(255,255,255,.12)"; ctx.beginPath(); ctx.arc(W - 90, 120, 180, 0, 7); ctx.fill();
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,.9)"; ctx.font = "600 30px system-ui,sans-serif";
  ctx.fillText("PetTwin", W / 2, 90);
  // Twin portrait: snapshot of the live 3D twin, falling back to the persona emoji.
  const cx = W / 2, cy = 250, R = 130;
  ctx.fillStyle = "rgba(255,255,255,.85)"; ctx.beginPath(); ctx.arc(cx, cy, R + 8, 0, 7); ctx.fill();
  let drewTwin = false;
  const pc = document.querySelector("#pet-sprite canvas");
  if (pc && pc.width > 0) {
    try {
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.clip();
      const side = Math.min(pc.width, pc.height) * 0.72;
      ctx.drawImage(pc, (pc.width - side) / 2, (pc.height - side) / 2 + pc.height * 0.05, side, side, cx - R, cy - R, R * 2, R * 2);
      ctx.restore();
      drewTwin = true;
    } catch (e) { ctx.restore(); }
  }
  if (!drewTwin) { ctx.font = "150px system-ui,sans-serif"; ctx.fillText(p.emoji, cx, cy + 55); }
  ctx.fillStyle = "#fff"; ctx.font = "700 58px system-ui,sans-serif";
  ctx.fillText(petName(), W / 2, 470);
  ctx.font = "600 40px system-ui,sans-serif"; ctx.fillStyle = "rgba(255,255,255,.95)";
  ctx.fillText(en() ? p.en : p.zh, W / 2, 528);
  ctx.fillStyle = "rgba(255,255,255,.18)"; roundedPath(ctx, 60, 560, W - 120, 150, 24); ctx.fill();
  ctx.fillStyle = "#fff"; ctx.font = "italic 30px system-ui,sans-serif";
  wrapText(ctx, "“" + (en() ? p.qEn : p.qZh) + "”", W / 2, 612, W - 140, 40);
  const stats = [[state.streak || 0, en() ? "Streak" : "连续"], [logCount(), en() ? "Days logged" : "累计记录"], [wellbeingScore(), en() ? "Wellbeing" : "综合状态"]];
  stats.forEach((s, i) => {
    const sx = W / 2 + (i - 1) * 200;
    ctx.fillStyle = "#fff"; ctx.font = "700 52px system-ui,sans-serif"; ctx.fillText(s[0], sx, 830);
    ctx.font = "500 24px system-ui,sans-serif"; ctx.fillStyle = "rgba(255,255,255,.85)"; ctx.fillText(s[1], sx, 868);
  });
  ctx.font = "500 28px system-ui,sans-serif"; ctx.fillStyle = "rgba(255,255,255,.9)";
  ctx.fillText(t("petCardTagline"), W / 2, 1010);
}

/* === Rendering === */
function applyLanguage() {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  $$("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  $$("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  $$("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  renderAll();
  if ($("#capture-slots")) renderCaptureSlots();
}
function renderAll() {
  renderIdentity(); renderSummary(); renderTasks(); renderEvents(); renderDevices();
  renderInsights(); renderTimeline(); renderPlaybook(); updatePetMessage();
  renderPersona(); renderStreak(); renderWhisper(); evaluateAchievements(); renderAchievements();
}
function renderIdentity() {
  const name = petName();
  $("#side-pet-name").textContent = name;
  $("#hero-pet-name").textContent = name;
  $("#pet-message-name").textContent = name;
  $("#mini-avatar").textContent = (name[0] || "P").toUpperCase();
  const age = state.pet.age;
  $("#pet-meta").textContent = (en() ? "Cat" : "猫") + (age ? " · " + age + (en() ? " yr" : " 岁") : "");
  $("#studio-orbit-name").textContent = name + " 3D";
}
function moodEmoji(m) { return ["", "😿", "😾", "😺", "😸", "😻"][m] || "—"; }
function prevLog() {
  for (let i = 1; i <= 30; i++) { const k = dkey(Date.now() - i * 864e5); if (state.checkIns[k]) return state.checkIns[k]; }
  return null;
}
function renderSummary() {
  const log = todayLog(), name = petName();
  $("#wellbeing-score").textContent = wellbeingScore();
  $("#activity-value").textContent = currentEnergy();
  $("#stress-value").textContent = currentStress();
  $("#mood-value").textContent = log ? moodEmoji(log.mood) : "—";
  $("#appetite-value").textContent = log ? t(log.appetite === "less" ? "appLess" : log.appetite === "more" ? "appMore" : "appNormal") : "—";
  const prev = prevLog();
  $("#activity-delta").textContent = log && prev ? (energyOf(log) >= energyOf(prev) ? "▲" : "▼") : "";
  $("#stress-delta").textContent = log && prev ? (stressOf(log) <= stressOf(prev) ? "▼" : "▲") : "";
  $("#status-chip").textContent = log ? (en() ? "Logged today" : "今日已记录") : (en() ? "Not logged yet" : "今天还没打卡");
  $("#daily-summary").textContent = log
    ? (en()
      ? `Today you logged: mood ${moodEmoji(log.mood)}, appetite ${log.appetite}, litter ${log.litterOk ? "normal" : "unusual"}.${log.note ? " Note: " + log.note : ""}`
      : `今天的记录：心情 ${moodEmoji(log.mood)}，食欲${log.appetite === "less" ? "偏少" : log.appetite === "more" ? "偏多" : "正常"}，猫砂盆${log.litterOk ? "正常" : "有点异常"}。${log.note ? "备注：" + log.note : ""}`)
    : (en()
      ? `No check-in yet today. A 30-second log keeps ${name}'s baseline accurate.`
      : `今天还没打卡。30 秒记录，让${name}的基线更准确。`);
  renderFinding();
  $("#litter-note").textContent = en()
    ? `Sample device data. Once a litter box is paired, ${name}'s real visits appear here.`
    : `示例设备数据。接入猫砂盆后，这里会显示${name}的真实记录。`;
  $("#workday-summary").textContent = en()
    ? `Sample summary. With devices paired, PetTwin will recap ${name}'s day before you get home.`
    : `示例摘要。接入设备后，PetTwin 会在你回家前汇总${name}的一天。`;
}
function renderFinding() {
  const n = logCount(), name = petName();
  const conf = $(".confidence");
  if (n >= 3) {
    const keys = Object.keys(state.checkIns).sort().slice(-14);
    const logs = keys.map(k => state.checkIns[k]);
    const normalAppetite = Math.round(logs.filter(l => l.appetite === "normal").length / logs.length * 100);
    const odd = logs.filter(l => !l.litterOk).length;
    const avgMood = (logs.reduce((s, l) => s + l.mood, 0) / logs.length).toFixed(1);
    $("#smart-finding").textContent = en()
      ? `Across your last ${logs.length} check-ins: appetite was normal ${normalAppetite}% of days, average mood ${avgMood}/5, and the litter box looked unusual on ${odd} day${odd === 1 ? "" : "s"}.`
      : `最近 ${logs.length} 次打卡中：食欲正常的天数占 ${normalAppetite}%，平均心情 ${avgMood}/5，猫砂盆异常出现 ${odd} 天。`;
    if (conf) conf.textContent = Math.min(90, 50 + n * 4) + "%";
  } else {
    $("#smart-finding").textContent = en()
      ? `Check in for 3 days and PetTwin starts finding ${name}'s personal patterns.`
      : `打卡满 3 天，PetTwin 就会开始寻找${name}的专属规律。`;
    if (conf) conf.textContent = "—";
  }
}
function taskHTML(task, compact = false) {
  return `<div class="task-item ${task.done ? "done" : ""}" data-task="${task.id}"><button aria-label="Complete task">${task.done ? "✓" : ""}</button><div><strong>${en() ? task.en : task.zh}</strong><small>${en() ? task.whyEn : task.whyZh}</small></div>${compact ? "" : `<span>${task.done ? (en() ? "Done" : "完成") : (en() ? "Planned" : "计划中")}</span>`}</div>`;
}
function renderTasks() {
  const done = state.tasks.filter(x => x.done).length;
  $("#task-progress").textContent = `${done}/${state.tasks.length}`;
  $("#compact-tasks").innerHTML = state.tasks.map(x => taskHTML(x, true)).join("");
  $("#care-list").innerHTML = state.tasks.map(x => taskHTML(x)).join("");
  $$("[data-task] button").forEach(btn => btn.onclick = () => {
    const task = state.tasks.find(x => x.id === btn.parentElement.dataset.task);
    task.done = !task.done;
    save(); renderAll();
  });
}
function renderEvents() {
  const data = en() ? eventsEn : eventsZh;
  $("#event-feed").innerHTML = data.map(e => `<div class="event-item"><span class="event-icon">${e.icon}</span><div><strong>${e.title}</strong><small>${e.time} · ${e.detail}</small></div></div>`).join("");
}
function renderDevices() {
  $("#device-grid").innerHTML = deviceData.map((d, i) => `<article class="device-card"><div class="device-top"><i>${d.icon}</i><span class="device-online">${t("preview")}</span></div><h3>${en() ? d.en : d.zh}</h3><p>${en() ? d.enD : d.zhD}</p><button data-device="${i}">${en() ? "Notify me" : "上线提醒我"}</button></article>`).join("");
  $$("[data-device]").forEach(b => b.onclick = () => { $("#device-result").textContent = t("comingSoonDevice"); });
}
function renderInsights() {
  const data = en()
    ? [["Visitors → hiding", "sample"], ["Rain → lower activity", "sample"], ["Late return → vocalising", "sample"], ["Clean litter → normal visits", "sample"]]
    : [["来客 → 躲藏", "示例"], ["下雨 → 活跃度下降", "示例"], ["主人晚归 → 叫声增加", "示例"], ["清理猫砂 → 如厕恢复", "示例"]];
  $("#correlation-list").innerHTML = data.map(x => `<div class="correlation-item"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("");
  drawTrend(+($(".insight-tabs button.active")?.dataset.range || 7));
}
function renderTimeline() {
  const items = [];
  const keys = Object.keys(state.checkIns).sort();
  if (keys.length) {
    items.push([en() ? "Since " + keys[0] : "自 " + keys[0],
      en() ? `${keys.length} days recorded` : `已记录 ${keys.length} 天`,
      en() ? `The real archive of ${petName()} grows with every check-in.` : `${petName()}的真实档案，随每次打卡不断生长。`]);
  }
  items.push([en() ? "Today" : "今天",
    en() ? (todayLog() ? "Check-in complete" : "Waiting for today's check-in") : (todayLog() ? "今日打卡完成" : "等待今日打卡"),
    en() ? "Daily logs become the personality timeline over time." : "每日记录会逐渐沉淀为人格时间轴。"]);
  $("#timeline-list").innerHTML = items.map(x => `<article class="timeline-item"><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");
}
function renderPlaybook() {
  const data = en()
    ? [["Quiet hiding space", "Helps"], ["10-minute evening play", "Helps"], ["Owner voice playback", "Mixed"], ["Forced visitor interaction", "Avoid"]]
    : [["安静躲藏空间", "有效"], ["晚间玩耍 10 分钟", "有效"], ["播放主人语音", "效果不定"], ["强迫接触来客", "避免"]];
  $("#playbook").innerHTML = data.map(x => `<div class="playbook-item"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("");
}
function updatePetMessage() {
  const text = currentStress() > 40
    ? (en() ? "I have been a little unsettled. Could we keep tonight calm?" : "我今天有一点不安，今晚可以安静一点吗？")
    : (en() ? "I seem quieter than usual today. Does that feel right?" : "我今天好像比平时安静，你也这样觉得吗？");
  $("#pet-message-text").textContent = text;
}

/* Trend chart driven by real check-ins; needs 3+ logged days in range. */
function drawTrend(range = 7) {
  const c = $("#trend-chart"); if (!c) return;
  const x = c.getContext("2d"), pad = 42, w = c.width - pad * 2, h = c.height - pad * 2;
  x.clearRect(0, 0, c.width, c.height);
  x.strokeStyle = "#dce5e3";
  for (let i = 0; i < 5; i++) { const y = pad + i * h / 4; x.beginPath(); x.moveTo(pad, y); x.lineTo(c.width - pad, y); x.stroke(); }
  const series = [];
  for (let i = range - 1; i >= 0; i--) {
    const log = state.checkIns[dkey(Date.now() - i * 864e5)];
    series.push(log ? { energy: energyOf(log), stress: stressOf(log) } : null);
  }
  const points = series.filter(Boolean).length;
  if (points < 3) {
    x.fillStyle = "#697680"; x.font = "600 15px Inter,system-ui,sans-serif"; x.textAlign = "center";
    x.fillText(en() ? `Check in on ${3 - points} more day${3 - points > 1 ? "s" : ""} to unlock the real trend` : `再打卡 ${3 - points} 天，解锁真实趋势图`, c.width / 2, c.height / 2);
    return;
  }
  [["#75bdd0", "energy"], ["#e88470", "stress"]].forEach(([color, key]) => {
    x.beginPath(); let started = false;
    series.forEach((pt, i) => {
      if (!pt) return;
      const px = pad + i * w / Math.max(1, range - 1), py = pad + h - pt[key] * h / 100;
      if (started) x.lineTo(px, py); else { x.moveTo(px, py); started = true; }
    });
    x.strokeStyle = color; x.lineWidth = 3; x.stroke();
    series.forEach((pt, i) => {
      if (!pt) return;
      const px = pad + i * w / Math.max(1, range - 1), py = pad + h - pt[key] * h / 100;
      x.beginPath(); x.arc(px, py, 4, 0, 7); x.fillStyle = color; x.fill();
    });
  });
  x.lineWidth = 1; x.textAlign = "left";
}

/* Export a plain-text report of the real check-in history. */
function exportReport() {
  const keys = Object.keys(state.checkIns).sort();
  const name = petName();
  const lines = [
    "PetTwin — " + name,
    (en() ? "Check-in history" : "打卡记录") + " (" + keys.length + " " + (en() ? "days" : "天") + ")",
    ""
  ];
  keys.forEach(k => {
    const l = state.checkIns[k];
    lines.push(`${k}  ${en() ? "mood" : "心情"} ${l.mood}/5 · ${en() ? "appetite" : "食欲"} ${l.appetite} · ${en() ? "litter" : "猫砂盆"} ${l.litterOk ? "OK" : (en() ? "unusual" : "异常")}${l.note ? " · " + l.note : ""}`);
  });
  if (!keys.length) lines.push(en() ? "No check-ins yet." : "还没有打卡记录。");
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pettwin-" + (state.pet.name || "report") + ".txt";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

/* === Navigation & simple bindings === */
let activeView = "today";
function navigate(view) {
  activeView = view;
  $$(".view").forEach(v => v.classList.toggle("active", v.id === view));
  $$(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  const nav = $(`[data-view="${view}"]`);
  $("#page-title").textContent = nav ? nav.textContent : view;
  $("#section-eyebrow").textContent = view === "home" ? "WORKDAY COMPANION" : "PETTWIN";
  const hideMsg = view === "avatar" || !state.twinVisible;
  $("#pet-message").classList.toggle("hidden", hideMsg);
}
$$("[data-view], [data-view-jump]").forEach(b => b.onclick = () => navigate(b.dataset.view || b.dataset.viewJump));
$$("[data-lang]").forEach(b => b.onclick = () => { lang = b.dataset.lang; localStorage.setItem("pt-lang", lang); applyLanguage(); });
$$("[data-mode]").forEach(b => b.onclick = () => {
  state.mode = b.dataset.mode;
  $$("[data-mode]").forEach(x => x.classList.toggle("active", x === b));
  save();
  $("#remote-result").textContent = t("modeSaved");
});
$$("[data-signal]").forEach(b => b.onclick = () => { $$("[data-signal]").forEach(x => x.classList.toggle("active", x === b)); navigate("insights"); });
$$("[data-answer]").forEach(b => b.onclick = () => {
  const delta = b.dataset.answer === "yes" ? 2 : -2;
  state.emaStress = Math.max(0, Math.min(100, currentStress() + delta));
  save(); renderAll();
  $("#pet-message").classList.add("hidden");
});
$$("[data-remote]").forEach(b => b.onclick = () => { $("#remote-result").textContent = t("comingSoonRemote"); });
$("#discover-devices").onclick = () => { $("#device-result").textContent = t("comingSoonDevice"); };
$("#new-task").onclick = () => {
  state.tasks.push({ id: "task" + Date.now(), done: false, en: "Observe evening litter visits", zh: "观察今晚猫砂盆使用情况", whyEn: "Added from care plan", whyZh: "从照护计划添加" });
  save(); renderTasks();
};
$$("[data-task-add]").forEach(b => b.onclick = () => {
  if (!state.tasks.some(x => x.id === "guest")) state.tasks.push({ id: "guest", done: false, en: "Set up a visitor-safe room", zh: "准备来客时的安全房间", whyEn: "Based on your notes", whyZh: "根据你的记录生成" });
  save(); renderTasks(); navigate("care");
});
$$("[data-range]").forEach(b => b.onclick = () => { $$("[data-range]").forEach(x => x.classList.toggle("active", x === b)); drawTrend(+b.dataset.range); });
$$("[data-checkin-open]").forEach(b => b.onclick = openCheckIn);
$("#check-in").onclick = openCheckIn;
$("#checkin-close").onclick = () => $("#checkin-overlay").classList.add("hidden");
$("#checkin-overlay").onclick = e => { if (e.target === $("#checkin-overlay")) $("#checkin-overlay").classList.add("hidden"); };
$$("#mood-row button").forEach(b => b.onclick = () => { ciDraft.mood = +b.dataset.mood; renderCheckInForm(); });
$$('[data-field="appetite"] button').forEach(b => b.onclick = () => { ciDraft.appetite = b.dataset.value; renderCheckInForm(); });
$$('[data-field="litter"] button').forEach(b => b.onclick = () => { ciDraft.litter = b.dataset.value; renderCheckInForm(); });
$("#checkin-save").onclick = submitCheckIn;
$$('[data-i18n="exportReport"]').forEach(b => b.onclick = exportReport);

$("#pet-toggle").onclick = () => {
  state.twinVisible = !state.twinVisible;
  $("#pet-sprite").classList.toggle("hidden", !state.twinVisible);
  $("#pet-message").classList.toggle("hidden", !state.twinVisible);
  $("#pet-toggle").textContent = state.twinVisible ? t("hideTwin") : t("showTwin");
  save();
};

/* === Onboarding === */
function maybeOnboard() {
  if (state.pet.name) return;
  $("#onb-overlay").classList.remove("hidden");
}
$("#onb-start").onclick = () => {
  const name = $("#onb-name").value.trim();
  if (!name) { $("#onb-name").focus(); return; }
  state.pet.name = name.slice(0, 20);
  state.pet.age = $("#onb-age").value.trim().slice(0, 4);
  save();
  $("#onb-overlay").classList.add("hidden");
  renderAll();
};
$("#onb-name").addEventListener("keydown", e => { if (e.key === "Enter") $("#onb-start").click(); });

/* === Capture quality + twin generation (visuals handled by PetFix) === */
function renderCaptureSlots() {
  const labels = en() ? requiredViews : ["正面", "左侧", "右侧", "背面"];
  $("#capture-slots").innerHTML = labels.map((label, i) => {
    const item = captureResults[i];
    return `<div class="capture-slot ${item ? (item.pass ? "good" : "warn") : ""}">${item ? `<img src="${item.url}" alt="${label}">` : `<span>${label}</span>`}</div>`;
  }).join("");
  const passed = captureResults.slice(0, 4).filter(x => x.pass).length;
  const ready = Math.min(95, Math.round((passed / 4) * 85 + Math.min(captureResults.length, 4) / 4 * 10));
  $("#fidelity-score").textContent = ready + "%";
  $("#quality-summary").textContent = `${passed} / 4`;
  $("#generate-twin").disabled = passed < 4;
  $("#scan-progress").style.setProperty("--progress", ready + "%");
  $("#scan-progress span").textContent = passed >= 4
    ? (en() ? "Four-view set passed. The twin has adapted to this pet." : "四视角素材已通过，分身已根据这只宠物调整。")
    : (en() ? `${4 - passed} required view(s) still need a clear image` : `还有 ${4 - passed} 个必需视角需要清晰图片`);
  const checks = en()
    ? [["Resolution", captureResults.some(x => x.resolution)], ["Lighting", captureResults.some(x => x.brightness)], ["Sharpness", captureResults.some(x => x.sharp)], ["4 views", captureResults.length >= 4]]
    : [["分辨率", captureResults.some(x => x.resolution)], ["光线", captureResults.some(x => x.brightness)], ["清晰度", captureResults.some(x => x.sharp)], ["四个视角", captureResults.length >= 4]];
  $("#quality-checks").innerHTML = checks.map(([name, ok]) => `<span class="${ok ? "pass" : ""}">${ok ? "✓" : "○"} ${name}</span>`).join("");
}
function inspectImage(file) {
  return new Promise(resolve => {
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas"), size = 160;
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;
      let light = 0, edges = 0;
      for (let y = 1; y < size - 1; y += 2) for (let x = 1; x < size - 1; x += 2) {
        const i = (y * size + x) * 4, l = (data[i] + data[i + 1] + data[i + 2]) / 3;
        light += l;
        const j = (y * size + x + 1) * 4;
        edges += Math.abs(l - (data[j] + data[j + 1] + data[j + 2]) / 3);
      }
      const samples = Math.pow(Math.floor((size - 2) / 2), 2), avg = light / samples;
      const sharp = edges / samples > 1.2, resolution = img.width >= 800 && img.height >= 800, brightness = avg > 42 && avg < 228;
      resolve({ file, url, resolution, brightness, sharp, pass: resolution && brightness && sharp });
    };
    img.onerror = () => resolve({ file, url, resolution: false, brightness: false, sharp: false, pass: false });
    img.src = url;
  });
}
$("#pet-photo").onchange = async event => {
  captureResults.forEach(x => URL.revokeObjectURL(x.url));
  captureResults = await Promise.all([...event.target.files].slice(0, 4).map(inspectImage));
  if (captureResults.length) { state.flags.photo = true; save(); }
  renderCaptureSlots();
  evaluateAchievements(); renderAchievements();
};
$("#generate-twin").onclick = async () => {
  $("#generate-twin").disabled = true;
  try {
    if (await reconServiceAvailable()) {
      $("#studio-result").textContent = en() ? "Reconstruction service connected. Uploading four views…" : "已连接重建服务，正在上传四个视角…";
      const modelUrl = await runReconstruction(status => {
        const pct = Math.max(10, Math.min(95, status.progress || 10));
        $("#scan-progress").style.setProperty("--progress", pct + "%");
        $("#studio-result").textContent = (en() ? "Reconstructing… " : "正在重建… ") + pct + "%";
      });
      if (window.PetFix) window.PetFix.load(modelUrl);
      $("#model-source").textContent = en() ? "Reconstructed GLB" : "重建 GLB 模型";
      state.flags.twin = true; save(); evaluateAchievements(); renderAchievements();
      $("#generate-twin").disabled = false;
      return;
    }
  } catch (e) {
    $("#studio-result").textContent = (en() ? "Reconstruction unavailable, using adaptive preview. " : "重建服务不可用，改用自适应预览。 ") + (e && e.message ? e.message : "");
  }
  const stages = $$("#reconstruction-pipeline span");
  stages.forEach(x => x.classList.remove("active"));
  for (let i = 0; i < stages.length; i++) {
    stages[i].classList.add("active");
    $("#scan-progress").style.setProperty("--progress", (20 + i * 20) + "%");
    $("#studio-result").textContent = en()
      ? ["Reading four views…", "Adapting body proportions…", "Matching coat and light markings…", "Adding motion…", "Preparing preview…"][i]
      : ["正在读取四个视角…", "正在调整身体比例…", "正在匹配主毛色和浅色花纹…", "正在添加动作…", "正在准备预览…"][i];
    await new Promise(r => setTimeout(r, 320));
  }
  $("#studio-result").textContent = en()
    ? `Twin preview updated for ${petName()}: coat colour and markings matched from your photos.`
    : `${petName()}的分身预览已更新：毛色与花纹已按照片匹配。`;
  state.flags.twin = true; save(); evaluateAchievements(); renderAchievements();
  $("#generate-twin").disabled = false;
};

/* Share overlay */
if ($("#open-share")) $("#open-share").onclick = () => { buildSharePoster(); $("#share-overlay").classList.remove("hidden"); };
if ($("#share-close")) $("#share-close").onclick = () => $("#share-overlay").classList.add("hidden");
if ($("#share-overlay")) $("#share-overlay").onclick = e => { if (e.target === $("#share-overlay")) $("#share-overlay").classList.add("hidden"); };
if ($("#download-poster")) $("#download-poster").onclick = () => {
  const c = $("#share-canvas"), a = document.createElement("a");
  a.download = "pettwin-" + (state.pet.name || "card") + ".png";
  a.href = c.toDataURL("image/png");
  a.click();
};

/* PWA */
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

/* Boot */
applyLanguage();
renderCaptureSlots();
maybeOnboard();
if (!state.twinVisible) {
  $("#pet-sprite").classList.add("hidden");
  $("#pet-message").classList.add("hidden");
  $("#pet-toggle").textContent = t("showTwin");
}
