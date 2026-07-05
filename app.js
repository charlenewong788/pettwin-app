/* PetTwin — daily check-in loop, growth system, streaks, evolving persona,
   reminders, health self-checks, share cards. 3D rendering lives in pet-fix.js
   (window.PetFix). */

const copy = {
en: {
  brandSub: "Your pet, understood",
  navToday: "Today", navCare: "Care", navInsights: "Insights", navTimeline: "Archive", navAvatar: "Twin",
  language: "Language", hideTwin: "Hide digital twin", showTwin: "Show digital twin",
  savedLocal: "Data stays on this device", quickCheck: "Daily check-in",
  hello: "Hello,", wellbeing: "Wellbeing",
  addObservation: "Check in now", monologueBtn: "Today's monologue",
  activity: "Activity", stress: "Stress", moodLabel: "Mood", water: "Appetite",
  worthKnowing: "Worth knowing", smartFinding: "One useful finding",
  addCareTask: "Add care task", viewEvidence: "View evidence",
  todayPlan: "Today’s plan", smallActions: "Small actions that help",
  careIntro: "Tasks, health reminders and quick self-checks — all in one place.",
  newTask: "New care task", activePlan: "Active plan", thisWeek: "This week",
  behaviorBaseline: "Behavior baseline", linkedSignals: "Logged signals",
  weightTrend: "Weight trend", environmentLinks: "Environment links", likelyTriggers: "Likely triggers (sample)",
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
  checkinTitle: "30-second check-in", checkinSub: "Quick questions build your pet's real baseline.",
  qMood: "Mood today", qAppetite: "Appetite", qLitter: "Litter box", qWeight: "Weight (kg, optional)",
  appLess: "Less", appNormal: "Normal", appMore: "More",
  litterNormal: "Normal", litterOdd: "Unusual",
  notePh: "Anything worth remembering? (optional)",
  saveCheckin: "Save today's check-in", checkinThanks: "Saved! Your twin says thanks.",
  onbTitle: "Welcome to PetTwin", onbSub: "Tell us who we're getting to know.",
  onbName: "Pet's name", onbNamePh: "e.g. Mochi", onbAge: "Age (years, optional)", onbStart: "Start",
  growthTitle: "Bond level", growthUnlocks: "Unlocked keepsakes", equipped: "Wearing",
  remindersTitle: "Health reminders", addReminder: "Add reminder", exportIcs: "Add all to calendar",
  remType: "Type", remDate: "Next due date", remRepeat: "Repeat",
  remVaccine: "Vaccine", remDewormIn: "Deworming (internal)", remDewormOut: "Deworming (external)",
  remCheckup: "Vet check-up", remCustom: "Custom", remCustomPh: "Reminder name",
  remNone: "No repeat", remMonths1: "Monthly", remMonths3: "Every 3 months", remMonths12: "Yearly",
  remSave: "Save reminder", remDone: "Done", remDelete: "Delete", remCal: "📅 Calendar",
  remEmpty: "No reminders yet. Vaccines and deworming are the ones owners forget most.",
  healthCheck: "Health self-check", healthTitle: "2-minute health self-check",
  healthSub: "Look closely at each area and choose what you see.",
  hEyes: "Eyes — clear, no discharge or redness?", hGums: "Gums — pink, no swelling or odour?", hSkin: "Skin & coat — no bald spots, flakes or bumps?",
  hOk: "Looks normal", hWatch: "Needs watching",
  healthSave: "Save check result", healthSaved: "Self-check saved to the archive.",
  healthTaskEn: "Observe the flagged area for 3 days", healthWhyEn: "From today's health self-check"
},
zh: {
  brandSub: "更懂你的宠物",
  navToday: "今日", navCare: "照护", navInsights: "洞察", navTimeline: "档案", navAvatar: "分身",
  language: "语言", hideTwin: "隐藏数字分身", showTwin: "显示数字分身",
  savedLocal: "数据保存在本设备", quickCheck: "今日打卡",
  hello: "你好，", wellbeing: "综合状态",
  addObservation: "现在打卡", monologueBtn: "今日独白",
  activity: "活跃度", stress: "压力", moodLabel: "心情", water: "食欲",
  worthKnowing: "值得了解", smartFinding: "一个有用的发现",
  addCareTask: "加入照护任务", viewEvidence: "查看依据",
  todayPlan: "今日计划", smallActions: "能带来帮助的小行动",
  careIntro: "照护任务、健康提醒和快速自查，都在这里。",
  newTask: "新建任务", activePlan: "正在执行", thisWeek: "本周计划",
  behaviorBaseline: "行为基线", linkedSignals: "记录信号",
  weightTrend: "体重趋势", environmentLinks: "环境关联", likelyTriggers: "可能的触发因素（示例）",
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
  checkinTitle: "30 秒打卡", checkinSub: "几个小问题，建立它的真实基线。",
  qMood: "今天的心情", qAppetite: "食欲", qLitter: "猫砂盆", qWeight: "体重（kg，选填）",
  appLess: "偏少", appNormal: "正常", appMore: "偏多",
  litterNormal: "正常", litterOdd: "有点异常",
  notePh: "有什么值得记下来的吗？（选填）",
  saveCheckin: "保存今日打卡", checkinThanks: "已保存！你的分身说谢谢。",
  onbTitle: "欢迎来到 PetTwin", onbSub: "告诉我们，要认识的是哪位小朋友。",
  onbName: "宠物名字", onbNamePh: "例如：Mochi", onbAge: "年龄（岁，选填）", onbStart: "开始",
  growthTitle: "羁绊等级", growthUnlocks: "已解锁的纪念物", equipped: "佩戴中",
  remindersTitle: "健康提醒", addReminder: "新增提醒", exportIcs: "全部加入日历",
  remType: "类型", remDate: "下次日期", remRepeat: "重复",
  remVaccine: "疫苗", remDewormIn: "体内驱虫", remDewormOut: "体外驱虫",
  remCheckup: "体检", remCustom: "自定义", remCustomPh: "提醒名称",
  remNone: "不重复", remMonths1: "每月", remMonths3: "每 3 个月", remMonths12: "每年",
  remSave: "保存提醒", remDone: "完成", remDelete: "删除", remCal: "📅 加入日历",
  remEmpty: "还没有提醒。疫苗和驱虫是铲屎官最容易忘的两件事。",
  healthCheck: "健康自查", healthTitle: "2 分钟健康自查",
  healthSub: "仔细观察每个部位，选择你看到的情况。",
  hEyes: "眼睛——清澈、无分泌物和红肿？", hGums: "牙龈——粉红色、无肿胀异味？", hSkin: "皮肤毛发——无秃斑、皮屑和肿块？",
  hOk: "看起来正常", hWatch: "需要观察",
  healthSave: "保存自查结果", healthSaved: "自查结果已存入档案。",
  healthTaskEn: "连续 3 天观察标记的部位", healthWhyEn: "来自今日健康自查"
}};

Object.assign(copy.en, {
  emotionTitle: "How it feels right now", mbtiTitle: "Pet MBTI", mbtiSub: "Inferred from real check-ins and interactions — no quizzes",
  axisEI: "E · social — solo · I", axisSN: "S · steady — dreamy · N", axisTF: "T · independent — affectionate · F", axisJP: "J · routine — free · P",
  confLabel: "confidence", basedOnA: "based on", basedOnB: "days of records &", basedOnC: "interactions",
  actPet: "Pet it", actPlay: "Play", actTalk: "Talk to it", actFeed: "Treat",
  talkTitle: "Say something to it", talkPh: "Type what you want to tell it…", talkSend: "Say it",
  alertsTitle: "Health signals", alertOk: "Everything looks steady lately. Keep the check-ins coming.",
  alertNoData: "Health signals appear after a few check-ins.",
  awayTitle: "While you were away", awayHug: "Give a hug", purr: "purrrr…",
  bubblePet: "Pet", bubblePlay: "Tease",
  coinsName: "coins", closetTitle: "Closet", appearanceTitle: "Appearance",
  appearanceSub: "Upload 1–4 photos and the twin matches your pet's coat. Photos never leave this device.",
  resetLook: "Reset colours", lookApplied: "Coat colours updated from your photos.",
  wear: "Wear", takeOff: "Take off", buyFor: "Unlock ·", lvLockA: "Reaches Lv.", lvLockB: "to unlock",
  ownedTag: "Owned", coinShort: "c", quizTitle: "Pet behavior test"
});
copy.zh.quizTitle = "宠物行为测试";
Object.assign(copy.zh, {
  emotionTitle: "它现在的感觉", mbtiTitle: "宠物 MBTI", mbtiSub: "由真实打卡与互动推断——不做问卷",
  axisEI: "E · 外向 — 独处 · I", axisSN: "S · 务实 — 爱幻想 · N", axisTF: "T · 独立 — 黏人 · F", axisJP: "J · 规律 — 随性 · P",
  confLabel: "推断置信度", basedOnA: "基于", basedOnB: "天记录和", basedOnC: "次互动",
  actPet: "拍拍它", actPlay: "陪它玩", actTalk: "和它说话", actFeed: "投喂",
  talkTitle: "和它说说话", talkPh: "想对它说的话……", talkSend: "说给它听",
  alertsTitle: "健康信号", alertOk: "最近一切平稳，继续保持打卡。",
  alertNoData: "打卡几天后，这里会出现健康信号。",
  awayTitle: "你不在的时候", awayHug: "抱抱它", purr: "咕噜咕噜……",
  bubblePet: "拍拍", bubblePlay: "逗它",
  coinsName: "金币", closetTitle: "衣橱", appearanceTitle: "分身外观",
  appearanceSub: "上传 1–4 张照片，分身会匹配它的毛色。照片不会离开这台设备。",
  resetLook: "恢复默认配色", lookApplied: "毛色已按照片更新。",
  wear: "穿上", takeOff: "脱下", buyFor: "解锁 ·", lvLockA: "羁绊达到 Lv.", lvLockB: "解锁",
  ownedTag: "已拥有", coinShort: "币"
});

let lang = localStorage.getItem("pt-lang") || "en";

const defaultState = {
  pet: { name: "", age: "" },
  streak: 0, lastCheckIn: null, freezes: 1,
  checkIns: {},               // "YYYY-MM-DD" -> {mood, appetite, litterOk, weight?, note}
  emaEnergy: null, emaStress: null,
  flags: {}, achievements: {},
  adornment: null,            // equipped growth keepsake id
  reminders: [],              // {id, type, label, date:"YYYY-MM-DD", repeatMonths}
  healthChecks: {},           // "YYYY-MM-DD" -> {eyes, gums, skin}  true = normal
  lastSeen: null,             // for the away-companion report
  ix: null,                   // today's interaction counters {date, pets, plays, talks, feeds, coined}
  ixTotal: { pets: 0, plays: 0, talks: 0, feeds: 0 },
  coins: 0,
  model: "sitting",
  wardrobe: { owned: [], wearing: null },
  look: null,                 // photo-derived sprite colours {coat, cream, dark, pattern}
  twinVisible: true, coat: "#77bed2",
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
    merged.reminders = Array.isArray(parsed.reminders) ? parsed.reminders : [];
    merged.healthChecks = parsed.healthChecks || {};
    merged.ixTotal = Object.assign({ pets: 0, plays: 0, talks: 0, feeds: 0 }, parsed.ixTotal || {});
    merged.wardrobe = Object.assign({ owned: [], wearing: null }, parsed.wardrobe || {});
    if (merged.model === "toon" || merged.model === "lowpoly") merged.model = "sitting";
    return merged;
  } catch (e) {
    console.warn("PetTwin: could not read saved state, resetting.", e);
    return structuredClone(defaultState);
  }
}
let state = loadState();

/* Away-companion tracking: how long since the owner last opened the app. */
const awayHours = state.lastSeen ? (Date.now() - state.lastSeen) / 36e5 : 0;
state.lastSeen = Date.now();
setInterval(() => { state.lastSeen = Date.now(); localStorage.setItem("pt-state", JSON.stringify(state)); }, 120000);

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

/* === Coins — earned by care, spent in the closet (the Finch model) === */
function syncCoins() { $$("#coin-count, #coin-count-2").forEach(el => el.textContent = state.coins || 0); }
function addCoins(n) {
  state.coins = (state.coins || 0) + n;
  save();
  syncCoins();
  if (n > 0) toast("+" + n + " " + t("coinsName"));
}
const WARDROBE = [
  { id: "collar", zh: "铃铛项圈", en: "Bell collar", price: 0, minLv: 2 },
  { id: "scarf", zh: "蓝围巾", en: "Blue scarf", price: 40, minLv: 1 },
  { id: "cushion", zh: "专属坐垫", en: "Cushion", price: 80, minLv: 3 },
  { id: "sparkles", zh: "星光", en: "Sparkles", price: 120, minLv: 4 },
  { id: "halo", zh: "光环", en: "Halo", price: 160, minLv: 5 },
  { id: "crown", zh: "皇冠", en: "Crown", price: 200, minLv: 6 }
];

/* === Derived wellbeing model (driven by check-ins) === */
function energyOf(log) { return log.mood * 18 + 8; }
function stressOf(log) { return (log.litterOk ? 16 : 44) + (log.mood <= 2 ? 18 : 0) + (log.appetite === "less" ? 10 : 0); }
function currentEnergy() { return state.emaEnergy == null ? 72 : state.emaEnergy; }
function currentStress() { return state.emaStress == null ? 28 : state.emaStress; }
function wellbeingScore() {
  return Math.max(40, Math.min(98, Math.round(currentEnergy() * 0.6 + (100 - currentStress()) * 0.4)));
}

/* === Growth / bond level (the Finch loop: records feed the twin) === */
const GROWTH = [
  { lv: 1, at: 0, en: "New Friends", zh: "初次见面" },
  { lv: 2, at: 3, en: "Warming Up", zh: "渐渐熟悉" },
  { lv: 3, at: 7, en: "Close Pals", zh: "亲密伙伴" },
  { lv: 4, at: 14, en: "Family", zh: "正式家人" },
  { lv: 5, at: 30, en: "Soul Bond", zh: "心有灵犀" },
  { lv: 6, at: 60, en: "Legend Duo", zh: "传奇搭档" },
  { lv: 7, at: 100, en: "Lifelong", zh: "一生挚友" }
];
function growthNow() {
  const n = logCount();
  let cur = GROWTH[0], next = null;
  for (const g of GROWTH) { if (n >= g.at) cur = g; else { next = g; break; } }
  return { cur, next, n };
}
function renderGrowth() {
  const box = $("#growth-card"); if (!box) return;
  const { cur, next, n } = growthNow();
  $("#growth-level-num").textContent = "Lv." + cur.lv;
  $("#growth-level-name").textContent = en() ? cur.en : cur.zh;
  const pctBase = next ? (n - cur.at) / (next.at - cur.at) : 1;
  $("#growth-bar i").style.width = Math.round(Math.max(0.04, Math.min(1, pctBase)) * 100) + "%";
  $("#growth-progress-text").textContent = next
    ? (en() ? `${next.at - n} more check-in day${next.at - n > 1 ? "s" : ""} to Lv.${next.lv}` : `再打卡 ${next.at - n} 天升到 Lv.${next.lv}`)
    : (en() ? "Max level — a lifelong friend" : "满级——一生挚友");
  if (window.PetFix && window.PetFix.setTier) window.PetFix.setTier(cur.lv); // growth forms, little-flame style
}

/* === Closet — coins + level gates buy wearables rendered on the sprite === */
function renderCloset() {
  const grid = $("#closet-grid"); if (!grid) return;
  const { cur } = growthNow();
  const w = state.wardrobe;
  syncCoins();
  grid.innerHTML = WARDROBE.map(item => {
    const owned = w.owned.includes(item.id) || item.price === 0 && cur.lv >= item.minLv;
    const lvOk = cur.lv >= item.minLv;
    const active = w.wearing === item.id;
    let cta;
    if (!lvOk) cta = `<small>${t("lvLockA")}${item.minLv} ${t("lvLockB")}</small>`;
    else if (owned) cta = `<small class="own">${active ? t("takeOff") : t("wear")}</small>`;
    else cta = `<small>${t("buyFor")} ${item.price}${t("coinShort")}</small>`;
    return `<button class="closet-item ${owned && lvOk ? "owned" : ""} ${active ? "active" : ""} ${lvOk ? "" : "locked"}" data-closet="${item.id}" ${lvOk ? "" : "disabled"}>
      <span class="closet-swatch closet-${item.id}"></span><span class="closet-name">${en() ? item.en : item.zh}</span>${cta}</button>`;
  }).join("");
  $$("[data-closet]").forEach(b => b.onclick = () => {
    const item = WARDROBE.find(x => x.id === b.dataset.closet);
    const { cur } = growthNow();
    if (cur.lv < item.minLv) return;
    const owned = state.wardrobe.owned.includes(item.id) || item.price === 0;
    if (!owned) {
      if ((state.coins || 0) < item.price) { toast((en() ? "Need " : "还差 ") + (item.price - state.coins) + t("coinShort")); return; }
      addCoins(-item.price);
      state.wardrobe.owned.push(item.id);
    }
    state.wardrobe.wearing = state.wardrobe.wearing === item.id ? null : item.id;
    save();
    if (window.PetFix) { window.PetFix.setAdornment(state.wardrobe.wearing); window.PetFix.burst("spark", 4); }
    renderCloset();
  });
}

/* === Check-in === */
let ciDraft = { mood: 0, appetite: "", litter: "" };
function openCheckIn() {
  const existing = todayLog();
  ciDraft = existing
    ? { mood: existing.mood, appetite: existing.appetite, litter: existing.litterOk ? "normal" : "odd" }
    : { mood: 0, appetite: "", litter: "" };
  $("#checkin-note").value = existing ? (existing.note || "") : "";
  $("#checkin-weight").value = existing && existing.weight ? existing.weight : "";
  renderCheckInForm();
  $("#checkin-overlay").classList.remove("hidden");
}
function renderCheckInForm() {
  $$("#mood-row button").forEach(b => b.classList.toggle("active", +b.dataset.mood === ciDraft.mood));
  $$('[data-field="appetite"] button').forEach(b => b.classList.toggle("active", b.dataset.value === ciDraft.appetite));
  $$('[data-field="litter"] button').forEach(b => b.classList.toggle("active", b.dataset.value === ciDraft.litter));
  $("#checkin-save").disabled = !(ciDraft.mood && ciDraft.appetite && ciDraft.litter);
}
function toast(msg) {
  const note = $("#checkin-toast");
  if (note) { note.textContent = msg; note.classList.add("show"); setTimeout(() => note.classList.remove("show"), 2600); }
}
function submitCheckIn() {
  const today = dkey();
  const firstToday = !state.checkIns[today];
  const weight = parseFloat($("#checkin-weight").value);
  const log = {
    mood: ciDraft.mood,
    appetite: ciDraft.appetite,
    litterOk: ciDraft.litter === "normal",
    note: $("#checkin-note").value.trim()
  };
  if (!isNaN(weight) && weight > 0 && weight < 60) log.weight = weight;
  state.checkIns[today] = log;
  if (firstToday) {
    const y1 = dkey(Date.now() - 864e5), y2 = dkey(Date.now() - 2 * 864e5);
    if (state.lastCheckIn === y1) state.streak = (state.streak || 0) + 1;
    else if (state.lastCheckIn === y2 && state.freezes > 0) { state.freezes--; state.streak = (state.streak || 0) + 1; }
    else state.streak = 1;
    if (state.streak > 0 && state.streak % 7 === 0) state.freezes = Math.min(2, (state.freezes || 0) + 1);
    state.lastCheckIn = today;
    addCoins(10 + (state.streak % 7 === 0 ? 20 : 0));
  }
  const e = energyOf(log), s = stressOf(log);
  state.emaEnergy = state.emaEnergy == null ? e : Math.round(state.emaEnergy * 0.75 + e * 0.25);
  state.emaStress = state.emaStress == null ? s : Math.round(state.emaStress * 0.75 + s * 0.25);
  save();
  $("#checkin-overlay").classList.add("hidden");
  renderAll();
  if (window.PetFix) window.PetFix.setAction("feed");
  toast(t("checkinThanks"));
}

/* === Persona (slow evolution via EMA + record count) === */
const PERSONAS = [
  { id: "explorer", emoji: "🐆", en: "The Curious Explorer", zh: "好奇探险家", qEn: "The world is my playground — I have three spots to inspect before dinner.", qZh: "世界是我的游乐场——晚饭前我还有三个地方要巡视。", tEn: ["High curiosity", "Playful", "Bold"], tZh: ["高好奇", "爱玩", "大胆"] },
  { id: "noble", emoji: "👑", en: "The Aloof Noble", zh: "高冷贵族", qEn: "I permit your admiration, but do keep a respectful distance.", qZh: "我允许你欣赏我，但请保持得体的距离。", tEn: ["Independent", "Calm", "Selective"], tZh: ["独立", "沉稳", "挑剔"] },
  { id: "cuddler", emoji: "🧸", en: "The Gentle Cuddler", zh: "温柔黏人精", qEn: "Wherever you are is exactly where I want to nap.", qZh: "你在哪里，哪里就是我最想打盹的地方。", tEn: ["Affectionate", "Social", "Soft"], tZh: ["亲人", "社交", "柔软"] },
  { id: "guardian", emoji: "🛡️", en: "The Watchful Guardian", zh: "警觉守护者", qEn: "I heard that. I hear everything. The house is secure — for now.", qZh: "我听到了，我什么都听得到。屋子暂时安全。", tEn: ["Alert", "Sensitive", "Loyal"], tZh: ["警觉", "敏感", "忠诚"] },
  { id: "zen", emoji: "🍃", en: "The Zen Dreamer", zh: "佛系梦想家", qEn: "A sunbeam, a slow blink, a quiet afternoon. This is enough.", qZh: "一束阳光，一次慢眨眼，一个安静的下午，足矣。", tEn: ["Relaxed", "Steady", "Content"], tZh: ["放松", "稳定", "知足"] }
];
/* === Interactions (petting / play / talk / treats feed the MBTI & emotions) === */
function todayIx() {
  if (!state.ix || state.ix.date !== dkey()) state.ix = { date: dkey(), pets: 0, plays: 0, talks: 0, feeds: 0 };
  return state.ix;
}
function addIx(kind) {
  const ix = todayIx();
  ix[kind] = (ix[kind] || 0) + 1;
  state.ixTotal[kind] = (state.ixTotal[kind] || 0) + 1;
  if ((ix.coined || 0) < 5) { ix.coined = (ix.coined || 0) + 1; state.coins = (state.coins || 0) + 1; syncCoins(); }
  save();
  renderEmotion(); renderMbti();
}

/* === Pet MBTI — inferred from behavior data, never a questionnaire ===
   E/I: energy baseline + how often the owner plays/talks with the twin
   S/N: mood steadiness across check-ins (steady = S, dreamy/variable = N)
   T/F: affection received (petting/talking) + calm baseline
   J/P: routine regularity (litter + appetite normality) */
const MBTI_TYPES = {
  INTJ: { zh: "深谋远虑猫", en: "The Mastermind", emoji: "🧠", p: 1 }, INTP: { zh: "好奇学者猫", en: "The Scholar", emoji: "🔬", p: 0 },
  ENTJ: { zh: "家中指挥官", en: "The Commander", emoji: "📣", p: 3 }, ENTP: { zh: "捣蛋发明家", en: "The Inventor", emoji: "💡", p: 0 },
  INFJ: { zh: "温柔守望者", en: "The Watcher", emoji: "🌙", p: 4 }, INFP: { zh: "梦游诗人猫", en: "The Poet", emoji: "🎨", p: 4 },
  ENFJ: { zh: "暖心小管家", en: "The Keeper", emoji: "🏡", p: 2 }, ENFP: { zh: "阳光冒险猫", en: "The Adventurer", emoji: "☀️", p: 0 },
  ISTJ: { zh: "规律执行官", en: "The Officer", emoji: "📋", p: 3 }, ISFJ: { zh: "贴心守护者", en: "The Devotee", emoji: "🫶", p: 2 },
  ESTJ: { zh: "领地监督员", en: "The Supervisor", emoji: "🏰", p: 3 }, ESFJ: { zh: "社交小明星", en: "The Star", emoji: "🌟", p: 2 },
  ISTP: { zh: "冷静观察家", en: "The Observer", emoji: "🕶️", p: 1 }, ISFP: { zh: "安静艺术家", en: "The Artist", emoji: "🍵", p: 4 },
  ESTP: { zh: "闪电玩家猫", en: "The Player", emoji: "⚡", p: 0 }, ESFP: { zh: "派对焦点猫", en: "The Spotlight", emoji: "🎉", p: 2 }
};
const clamp01 = v => Math.max(0, Math.min(100, Math.round(v)));
function computeMbti() {
  const logs = Object.values(state.checkIns), n = logs.length;
  const tot = state.ixTotal || { pets: 0, plays: 0, talks: 0, feeds: 0 };
  const ixAll = tot.pets + tot.plays + tot.talks + tot.feeds;
  const E = clamp01((currentEnergy() - 35) * 1.1 + Math.min(24, (tot.plays + tot.talks) * 3));
  let sd = 0;
  if (n >= 2) {
    const moods = logs.map(l => l.mood), mean = moods.reduce((a, b) => a + b, 0) / n;
    sd = Math.sqrt(moods.reduce((s, m) => s + (m - mean) * (m - mean), 0) / n);
  }
  const noteRatio = n ? logs.filter(l => l.note).length / n : 0;
  const N = clamp01(28 + sd * 36 + noteRatio * 22);
  const F = clamp01(22 + Math.min(42, tot.pets * 4 + tot.talks * 2) + (100 - currentStress()) * 0.24);
  const J = n ? clamp01(logs.filter(l => l.litterOk).length / n * 58 + logs.filter(l => l.appetite === "normal").length / n * 42) : 50;
  let E2 = E, N2 = N, F2 = F, J2 = J, conf = Math.min(95, 15 + n * 6 + Math.min(20, ixAll));
  if (state.mbtiQuiz) { // 60% owner-answered behavior quiz, 40% ongoing records
    E2 = Math.round(state.mbtiQuiz.E * .6 + E * .4);
    N2 = Math.round(state.mbtiQuiz.N * .6 + N * .4);
    F2 = Math.round(state.mbtiQuiz.F * .6 + F * .4);
    J2 = Math.round(state.mbtiQuiz.J * .6 + J * .4);
    conf = Math.min(98, conf + 30);
  }
  const type = (E2 >= 50 ? "E" : "I") + (N2 >= 50 ? "N" : "S") + (F2 >= 50 ? "F" : "T") + (J2 >= 50 ? "J" : "P");
  return { type, E: E2, N: N2, F: F2, J: J2, conf, n, ixAll };
}
/* Behavior quiz — 12 scenario questions the owner answers by observing the pet.
   Result blends 60% quiz + 40% ongoing daily records. */
const QUIZ = [
  { ax: "E", zh: "家里来了陌生人，它通常？", en: "A stranger visits. Your pet usually…", a: ["主动凑上去查看", "先躲起来远远观察"], ae: ["Comes up to investigate", "Hides and watches from afar"] },
  { ax: "E", zh: "面对新纸箱或新玩具？", a: ["立刻冲上去研究", "确认安全才慢慢靠近"], en: "A new box or toy appears…", ae: ["Charges in immediately", "Approaches only when it feels safe"] },
  { ax: "E", zh: "它更常待在哪里？", a: ["你所在的房间", "自己找的安静角落"], en: "Where does it usually stay?", ae: ["Whichever room you are in", "A quiet corner of its own"] },
  { ax: "N", zh: "家具挪动位置后，它？", a: ["沿着老路线照常走", "立刻兴奋地探索新布局"], en: "After you move the furniture…", ae: ["Sticks to its old routes", "Excitedly explores the new layout"] },
  { ax: "N", zh: "玩耍时它更爱？", a: ["熟悉的老玩具", "永远追着新鲜东西"], en: "At playtime it prefers…", ae: ["The same familiar toys", "Whatever is newest"] },
  { ax: "N", zh: "每天的饭点，它？", a: ["准时催饭像个闹钟", "想起来才慢悠悠去吃"], en: "At mealtimes it…", ae: ["Demands food right on time", "Wanders over whenever it remembers"] },
  { ax: "F", zh: "你心情低落时，它会？", a: ["该干嘛干嘛", "凑过来安静陪着你"], en: "When you are sad, it…", ae: ["Carries on with its day", "Comes over and stays near you"] },
  { ax: "F", zh: "被你说了一句之后？", a: ["无动于衷继续作案", "明显委屈，躲开一会儿"], en: "After being told off…", ae: ["Completely unbothered", "Visibly sulks and keeps distance"] },
  { ax: "F", zh: "它找你的方式通常是？", a: ["有需求才叫你", "经常来蹭你求摸摸"], en: "It seeks you out…", ae: ["Only when it needs something", "Often, just for petting"] },
  { ax: "J", zh: "它睡觉的地方？", a: ["固定的几个窝轮换", "每天睡的地方都不一样"], en: "Where does it sleep?", ae: ["The same few spots", "Somewhere different every day"] },
  { ax: "J", zh: "它的作息？", a: ["规律得可以对表", "全看当天心情"], en: "Its daily rhythm is…", ae: ["Clockwork regular", "Entirely mood-based"] },
  { ax: "J", zh: "对猫砂盆和食盆？", a: ["很讲究，脏了就抗议", "比较随性不挑剔"], en: "About its litter and bowls…", ae: ["Fussy — protests if dirty", "Easy-going, not picky"] }
];
let quizIdx = 0, quizScore = {};
function openQuiz() {
  quizIdx = 0; quizScore = { E: 0, N: 0, F: 0, J: 0 };
  renderQuizQ();
  $("#quiz-overlay").classList.remove("hidden");
}
function renderQuizQ() {
  const q = QUIZ[quizIdx];
  $("#quiz-progress").textContent = (quizIdx + 1) + " / " + QUIZ.length;
  $("#quiz-question").textContent = en() ? q.en : q.zh;
  const opts = en() ? q.ae : q.a;
  $("#quiz-options").innerHTML = opts.map((o, i) => `<button data-qopt="${i}">${o}</button>`).join("");
  $$("[data-qopt]").forEach(b => b.onclick = () => {
    // option 0 scores toward the axis letter for E; for N/F/J option 1 is the letter side
    const q2 = QUIZ[quizIdx];
    const first = q2.ax === "E" ? 0 : 1;
    if (+b.dataset.qopt === first) quizScore[q2.ax]++;
    quizIdx++;
    if (quizIdx < QUIZ.length) renderQuizQ();
    else {
      state.mbtiQuiz = { E: quizScore.E / 3 * 100, N: quizScore.N / 3 * 100, F: quizScore.F / 3 * 100, J: quizScore.J / 3 * 100, date: dkey() };
      save();
      $("#quiz-overlay").classList.add("hidden");
      renderMbti();
      const m = computeMbti(), info = MBTI_TYPES[m.type];
      toast(m.type + " · " + (en() ? info.en : info.zh));
      if (window.PetFix) window.PetFix.burst("spark", 8);
      addCoins(20);
    }
  });
}
function mbtiPersona() { return PERSONAS[(MBTI_TYPES[computeMbti().type] || { p: 2 }).p]; }
function computePersona() { return mbtiPersona(); }
function renderMbti() {
  if (!$("#mbti-type")) return;
  const m = computeMbti(), info = MBTI_TYPES[m.type];
  $("#mbti-type").textContent = m.type;
  $("#mbti-name").textContent = en() ? info.en : info.zh;
  const axes = [["axisEI", m.E], ["axisSN", m.N], ["axisTF", m.F], ["axisJP", m.J]];
  $("#mbti-axes").innerHTML = axes.map(([key, v]) =>
    `<div class="mbti-axis"><span>${t(key)}</span><div class="mbti-bar"><i style="left:${100 - v}%"></i></div></div>`).join("");
  $("#mbti-conf").textContent = m.conf + "% " + t("confLabel");
  $("#mbti-basis").textContent = `${t("basedOnA")} ${m.n} ${t("basedOnB")} ${m.ixAll} ${t("basedOnC")}${state.mbtiQuiz ? (en() ? " + quiz" : " + 行为测试") : ""}`;
  const qb = $("#quiz-btn"); if (qb) qb.textContent = state.mbtiQuiz ? (en() ? "Retake test" : "重新测试") : (en() ? "Behavior test" : "行为测试");
  window.__persona = mbtiPersona();
}

/* === Emotion engine — the pet has human-readable feelings, with reasons === */
const EMOTIONS = {
  missing: { emoji: "🥺", en: "Missing you", zh: "想你了", bias: "missing" },
  anxious: { emoji: "😟", en: "A bit uneasy", zh: "有点不安", bias: "anxious" },
  sleepy: { emoji: "😴", en: "Sleepy", zh: "困困的", bias: "sleepy" },
  loved: { emoji: "🥰", en: "Feeling loved", zh: "被爱着", bias: "content" },
  proud: { emoji: "😌", en: "A little proud", zh: "小骄傲", bias: "content" },
  bored: { emoji: "🫠", en: "Bored", zh: "有点无聊", bias: "playful" },
  playful: { emoji: "😼", en: "Playful", zh: "想玩", bias: "playful" },
  content: { emoji: "😊", en: "Content", zh: "安心", bias: "content" }
};
const EMO_MSG = {
  missing: { en: ["Where have you been? I checked your chair eleven times.", "You were gone so long the sunny spot got cold."], zh: ["你去哪儿了？我去你椅子上看了十一次。", "你走了太久，窗边的太阳都凉了。"] },
  anxious: { en: ["Something feels off lately. Stay close tonight?", "Too many changes. I need my routine — and you."], zh: ["最近有点不对劲，今晚离我近一点好吗？", "变化太多了，我需要我的老规矩——还有你。"] },
  sleepy: { en: ["Five more minutes. Or five more hours.", "The blanket cave is calling. Join me?"], zh: ["再睡五分钟。或者五小时。", "毯子洞穴在召唤我，一起来吗？"] },
  loved: { en: ["Today's cuddle quota: exceeded. Well done, human.", "I purred so much today my motor needs a rest."], zh: ["今日撸猫配额：超额完成。人类干得不错。", "今天咕噜得太多，我的小马达需要休息了。"] },
  proud: { en: ["We keep showing up, you and I. That's rare.", "Look at our streak. We are basically famous."], zh: ["我们一直在坚持，你和我。这很难得。", "看看我们的连续记录，我们基本上算名猫名人了。"] },
  bored: { en: ["Nothing has moved in this house for hours. Fix that.", "I have batted zero toys today. Unacceptable."], zh: ["这屋子好几个小时没动静了，管管吧。", "我今天一个玩具都没拍到，不能接受。"] },
  playful: { en: ["Energy at maximum. Toys should be worried.", "I feel fast today. Extremely fast. Watch this."], zh: ["能量满格，玩具们应该感到害怕。", "我今天感觉特别快，非常快，你看着。"] },
  content: { en: ["All is well in my kingdom. You may relax too.", "A good nap, a full bowl, and you. Enough."], zh: ["我的王国一切安好，你也可以放松了。", "睡得好，碗是满的，还有你在，足够了。"] }
};
function computeEmotion() {
  const h = new Date().getHours(), ix = todayIx();
  const touched = ix.pets + ix.plays + ix.talks + ix.feeds;
  if (currentStress() > 48) return "anxious";
  if (awayHours > 8 && touched === 0) return "missing";
  if (h >= 22 || h < 6) return "sleepy";
  if (touched >= 5) return "loved";
  if ((state.streak || 0) >= 3 && todayLog()) return "proud";
  if (h >= 17 && ix.plays === 0 && !todayLog()) return "bored";
  if (currentEnergy() >= 78 && h >= 9 && h < 20) return "playful";
  return "content";
}
function emotionReason(id) {
  const ix = todayIx(), touched = ix.pets + ix.plays + ix.talks + ix.feeds;
  switch (id) {
    case "missing": return en() ? `You've been away for ${Math.round(awayHours)} hours` : `你已经 ${Math.round(awayHours)} 小时没来看它了`;
    case "anxious": return en() ? `Recent logs show stress at ${currentStress()}` : `最近记录的压力值偏高（${currentStress()}）`;
    case "sleepy": return en() ? "It's cat bedtime right now" : "现在是猫咪的睡觉时间";
    case "loved": return en() ? `You've interacted ${touched} times today` : `今天你已经陪它互动了 ${touched} 次`;
    case "proud": return en() ? `A ${state.streak}-day streak, together` : `你们已经连续记录 ${state.streak} 天了`;
    case "bored": return en() ? "No play sessions yet today" : "今天还没有人陪它玩";
    case "playful": return en() ? `Energy is high (${currentEnergy()})` : `活跃度满格（${currentEnergy()}）`;
    default: return en() ? "Everything is just right" : "一切都刚刚好";
  }
}
function emotionMessage(id) {
  const day = Number(dkey().replace(/-/g, ""));
  const pool = (EMO_MSG[id] || EMO_MSG.content)[lang] || EMO_MSG.content.en;
  return pool[day % pool.length];
}
function renderEmotion() {
  if (!$("#emotion-name")) return;
  const id = computeEmotion(), e = EMOTIONS[id];
  $("#emotion-name").textContent = en() ? e.en : e.zh;
  $("#emotion-reason").textContent = emotionReason(id);
  $("#emotion-msg").textContent = "“" + emotionMessage(id) + "”";
  window.__petMood = e.bias;
  if (window.PetFix) {
    window.PetFix.setMood(e.bias);
    if (window.PetFix.setNeglected) window.PetFix.setNeglected(id === "missing"); // little-flame pattern: neglect greys the pet
  }
}
function doEmoAct(kind) {
  if (kind === "talk") { openTalk(); return; }
  addIx(kind === "pet" ? "pets" : kind === "play" ? "plays" : "feeds");
  if (window.PetFix) {
    if (kind === "pet") { window.PetFix.burst("heart", 6); window.PetFix.setAction("calm"); toast(t("purr")); }
    if (kind === "play") { window.PetFix.setAction("play"); window.PetFix.burst("dot", 3); }
    if (kind === "feed") { window.PetFix.setAction("feed"); window.PetFix.burst("spark", 3); }
  }
  evaluateAchievements(); renderAchievements();
}

/* === Talk to your pet (remote companionship): it reads and replies aloud === */
function speakAsPet(text) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.pitch = 1.7; u.rate = 1.05;
    u.lang = en() ? "en-US" : "zh-CN";
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch (e) { }
}
function openTalk() {
  $("#talk-reply").textContent = "";
  $("#talk-input").value = "";
  $("#talk-overlay").classList.remove("hidden");
  $("#talk-input").focus();
}
function sendTalk() {
  const msg = $("#talk-input").value.trim();
  if (!msg) return;
  addIx("talks");
  const id = computeEmotion();
  const reply = emotionMessage(id);
  $("#talk-reply").textContent = petName() + ": “" + reply + "”";
  speakAsPet(reply);
  if (window.PetFix) { window.PetFix.burst("dot", 3); window.PetFix.setAction("shake"); }
}

/* === Away report — what happened while you were gone === */
function maybeAwayReport() {
  if (awayHours < 6 || !logCount()) return;
  const h = Math.round(awayHours);
  const day = Number(dkey().replace(/-/g, ""));
  const pool = WHISPERS.base[lang] || WHISPERS.base.en;
  const lines = [pool[day % pool.length], pool[(day + 7) % pool.length]];
  $("#away-title").textContent = t("awayTitle") + " · " + h + (en() ? "h" : " 小时");
  $("#away-body").innerHTML = lines.map(l => "<p>· " + l + "</p>").join("") +
    "<p class='away-close-line'>“" + emotionMessage(computeEmotion()) + "”</p>";
  $("#away-overlay").classList.remove("hidden");
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
    en: ["I saved you the sunny spot by the window today.", "I knocked something off the shelf. Purely scientific curiosity.", "Your chair smells like you. I approve.", "I pretended not to hear you, but I did.", "I watched a bird for 40 minutes. Riveting stuff.", "The red dot returned. I let it live — this time.", "I did my rounds. Every room is exactly where we left it.", "Three naps today. Each one strategically located.", "The vacuum monster slept all day. I kept watch anyway.", "I sat in the empty box. It needed supervising.", "A leaf moved outside. I handled it.", "Your keyboard was warm. Someone had to sit on it.", "I groomed my tail for 20 minutes. Perfection takes time.", "The water bowl reflected a very handsome cat today.", "I meowed at the fridge. It ignored me. Rude.", "Dust particles danced in the light. I supervised them."],
    zh: ["今天我帮你把窗边最晒的位置占好了。", "我把架子上的东西推下去了，纯粹出于科学好奇。", "你的椅子有你的味道，我批准了。", "我假装没听见你叫我，其实听见了。", "我盯着一只鸟看了 40 分钟，非常精彩。", "红点又出现了。这次我放了它一马。", "巡逻完毕，每个房间都在原位。", "今天睡了三觉，每一觉的选址都很讲究。", "吸尘器怪兽睡了一整天，我还是盯着它。", "我坐进了那个空纸箱，它需要有人看管。", "窗外有片叶子动了，我已经处理好了。", "你的键盘是温的，总得有猫坐上去。", "我给尾巴做了 20 分钟护理，完美需要时间。", "水碗里今天倒映着一只特别好看的猫。", "我对着冰箱喵了一声，它不理我，没礼貌。", "灰尘在阳光里跳舞，我全程监督。"]
  },
  stressed: {
    en: ["Today felt a bit much. Sit with me for a while?", "Too many strange sounds today. I stayed close to your side of the bed.", "I hid for a bit today. The blanket cave is excellent, by the way.", "A quiet evening would be lovely. Just us."],
    zh: ["今天有点累，陪我坐一会儿好吗？", "今天奇怪的声音有点多，我一直待在你那侧的床边。", "我今天躲了一小会儿。顺便说，毯子洞穴非常优秀。", "今晚安静一点就好，只有我们俩。"]
  },
  checkedIn: {
    en: ["You wrote about me today. I noticed. I always notice.", "Check-in received. Payment accepted in chin scratches.", "Another day documented. My biography is coming along nicely.", "Thanks for keeping up with me. I'd do the same if I had thumbs."],
    zh: ["你今天记录了我的事，我注意到了。我什么都注意得到。", "打卡已收到，报酬请用挠下巴支付。", "又记录了一天，我的传记进展顺利。", "谢谢你坚持记录我。要是我有大拇指，我也会这么做的。"]
  },
  weekend: {
    en: ["You're home today? Excellent. Assume your position on the couch.", "Weekend rule: every nap is better with you nearby.", "I have planned our day: nap, snack, nap, window, nap.", "No leaving today. I checked the calendar. It says 'cat time'."],
    zh: ["你今天在家？很好，请就位到沙发上。", "周末规则：你在旁边，每一觉都更香。", "我安排好今天的日程了：睡觉、零食、睡觉、看窗外、睡觉。", "今天不许出门，我看过日历了，上面写着「猫的时间」。"]
  }
};

/* === Monologue (the MeowTalk hook: what your cat would say today) === */
const MONO_OPEN = {
  en: ["Dear human,", "Attention, staff:", "Report from the windowsill HQ:", "Memo from the fluff department:"],
  zh: ["亲爱的人类：", "全体铲屎官请注意：", "来自窗台指挥部的报告：", "毛茸茸事务部备忘录："]
};
const MONO_MOOD = {
  en: { 1: "Today was hard. I need extra gentleness and maybe the warm blanket.", 2: "I was a bit off today. Keep an eye on me, quietly.", 3: "A perfectly acceptable day. The service met expectations.", 4: "Today was good. The sunbeam was punctual and so were you.", 5: "Today was magnificent. I am thriving and mildly famous." },
  zh: { 1: "今天有点难熬，我需要额外的温柔，最好还有那条暖毯子。", 2: "我今天状态一般，请安静地多留意我一下。", 3: "完全合格的一天，服务符合预期。", 4: "今天很不错，阳光准时到岗，你也是。", 5: "今天棒极了，本喵茁壮成长，且略有名气。" }
};
const MONO_NOLOG = {
  en: "You haven't checked in on me today. I am officially curious about what you'd say.",
  zh: "你今天还没打卡记录我，本喵对你会写什么表示官方级好奇。"
};
function buildMonologue() {
  const day = Number(dkey().replace(/-/g, ""));
  const open = (MONO_OPEN[lang] || MONO_OPEN.en)[day % MONO_OPEN.en.length];
  const log = todayLog();
  const mid = log ? (MONO_MOOD[lang] || MONO_MOOD.en)[log.mood] : (en() ? MONO_NOLOG.en : MONO_NOLOG.zh);
  const p = window.__persona || computePersona();
  const close = "“" + (en() ? p.qEn : p.qZh) + "”";
  return { open, mid, close };
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
  { id: "weight", ico: "⚖️", en: "Weight Logged", zh: "记录体重", test: () => Object.values(state.checkIns).some(l => l.weight) },
  { id: "healthCheck", ico: "🩺", en: "First Self-check", zh: "首次自查", test: () => Object.keys(state.healthChecks).length >= 1 }
];
function evaluateAchievements() {
  let earned = 0;
  ACHIEVEMENTS.forEach(a => { if (a.test() && !state.achievements[a.id]) { state.achievements[a.id] = dkey(); earned++; } });
  if (earned) { state.coins = (state.coins || 0) + earned * 15; save(); }
}
function renderAchievements() {
  const grid = $("#ach-grid"); if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const unlocked = !!state.achievements[a.id];
    return '<div class="ach-item ' + (unlocked ? "unlocked" : "locked") + '"><i class="ach-mark"></i><span class="ach-name">' + (en() ? a.en : a.zh) + "</span></div>";
  }).join("");
  $("#ach-progress").textContent = ACHIEVEMENTS.filter(a => state.achievements[a.id]).length + "/" + ACHIEVEMENTS.length;
}

/* === Reminders (vaccines / deworming — the retention channel owners accept) === */
const REM_TYPES = ["vaccine", "dewormIn", "dewormOut", "checkup", "custom"];
function remLabel(r) {
  const key = { vaccine: "remVaccine", dewormIn: "remDewormIn", dewormOut: "remDewormOut", checkup: "remCheckup" }[r.type];
  return key ? t(key) : (r.label || t("remCustom"));
}
function daysUntil(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return Math.round((new Date(y, m - 1, d) - new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())) / 864e5);
}
function renderReminders() {
  const list = $("#reminder-list"); if (!list) return;
  if (!state.reminders.length) { list.innerHTML = `<p class="rem-empty">${t("remEmpty")}</p>`; return; }
  const sorted = [...state.reminders].sort((a, b) => a.date.localeCompare(b.date));
  list.innerHTML = sorted.map(r => {
    const d = daysUntil(r.date);
    const chip = d < 0 ? `<span class="rem-chip overdue">${en() ? "Overdue" : "已逾期"} ${-d}${en() ? "d" : "天"}</span>`
      : d <= 7 ? `<span class="rem-chip soon">${d === 0 ? (en() ? "Today" : "今天") : d + (en() ? "d left" : "天后")}</span>`
      : `<span class="rem-chip">${d}${en() ? "d left" : "天后"}</span>`;
    return `<div class="rem-item"><div><strong>${remLabel(r)}</strong><small>${r.date}${r.repeatMonths ? " · " + (en() ? "every " + r.repeatMonths + "mo" : "每 " + r.repeatMonths + " 个月") : ""}</small></div>${chip}
      <div class="rem-actions"><button data-rem-done="${r.id}">${t("remDone")}</button><button data-rem-cal="${r.id}">${t("remCal")}</button><button data-rem-del="${r.id}" class="danger">✕</button></div></div>`;
  }).join("");
  $$("[data-rem-done]").forEach(b => b.onclick = () => {
    const r = state.reminders.find(x => x.id === b.dataset.remDone);
    if (!r) return;
    if (r.repeatMonths) {
      const [y, m, d] = r.date.split("-").map(Number);
      const next = new Date(y, m - 1 + r.repeatMonths, d);
      r.date = dkey(next);
    } else state.reminders = state.reminders.filter(x => x.id !== r.id);
    save(); renderReminders();
  });
  $$("[data-rem-del]").forEach(b => b.onclick = () => { state.reminders = state.reminders.filter(x => x.id !== b.dataset.remDel); save(); renderReminders(); });
  $$("[data-rem-cal]").forEach(b => b.onclick = () => {
    const r = state.reminders.find(x => x.id === b.dataset.remCal);
    if (r) downloadIcs([r]);
  });
}
function icsEvent(r) {
  const dt = r.date.replace(/-/g, "");
  const rrule = r.repeatMonths ? `\r\nRRULE:FREQ=MONTHLY;INTERVAL=${r.repeatMonths}` : "";
  return `BEGIN:VEVENT\r\nUID:pettwin-${r.id}@pettwin\r\nDTSTAMP:${dt}T090000\r\nDTSTART;VALUE=DATE:${dt}\r\nSUMMARY:${petName()} · ${remLabel(r)}${rrule}\r\nBEGIN:VALARM\r\nTRIGGER:-PT12H\r\nACTION:DISPLAY\r\nDESCRIPTION:${remLabel(r)}\r\nEND:VALARM\r\nEND:VEVENT`;
}
function downloadIcs(reminders) {
  if (!reminders.length) return;
  const body = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//PetTwin//EN\r\n" + reminders.map(icsEvent).join("\r\n") + "\r\nEND:VCALENDAR";
  const blob = new Blob([body], { type: "text/calendar;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pettwin-reminders.ics";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

/* === Health self-check === */
let hcDraft = {};
function openHealthCheck() {
  hcDraft = {};
  $$("#health-overlay [data-hval]").forEach(b => b.classList.remove("active"));
  $("#health-save").disabled = true;
  $("#health-overlay").classList.remove("hidden");
}
function renderHealthButtons() {
  $$("#health-overlay [data-hval]").forEach(b => {
    b.classList.toggle("active", hcDraft[b.dataset.hfield] === (b.dataset.hval === "ok"));
  });
  $("#health-save").disabled = !(("eyes" in hcDraft) && ("gums" in hcDraft) && ("skin" in hcDraft));
}
function submitHealthCheck() {
  state.healthChecks[dkey()] = { ...hcDraft };
  const flagged = Object.values(hcDraft).filter(v => !v).length;
  if (flagged && !state.tasks.some(x => x.id === "hcwatch")) {
    state.tasks.push({ id: "hcwatch", done: false, en: t("healthTaskEn"), zh: "连续 3 天观察标记的部位", whyEn: "From today's health self-check", whyZh: "来自今日健康自查" });
  }
  save();
  $("#health-overlay").classList.add("hidden");
  renderAll();
  toast(t("healthSaved"));
}

/* === Share poster === */
function roundedPath(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
function wrapText(ctx, text, x, y, maxW, lh) {
  // Wrap by words for spaced (latin) text, by characters for CJK.
  const parts = /\s/.test(text.trim()) ? text.split(" ").map((w, i, a) => i < a.length - 1 ? w + " " : w) : text.split("");
  let line = "", ly = y;
  for (const ch of parts) { const test = line + ch; if (ctx.measureText(test).width > maxW && line) { ctx.fillText(line.trimEnd(), x, ly); line = ch; ly += lh; } else line = test; }
  ctx.fillText(line.trimEnd(), x, ly);
  return ly;
}
function drawTwinPortrait(ctx, cx, cy, R) {
  ctx.fillStyle = "rgba(255,255,255,.85)"; ctx.beginPath(); ctx.arc(cx, cy, R + 8, 0, 7); ctx.fill();
  let drew = false;
  const img = window.PetFix && window.PetFix.portrait();
  if (img && img.complete && img.naturalWidth > 0) {
    try {
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.clip();
      ctx.drawImage(img, cx - R * 0.95, cy - R * 0.82, R * 1.9, R * 1.9);
      ctx.restore();
      drew = true;
    } catch (e) { ctx.restore(); }
  }
  if (!drew) {
    ctx.fillStyle = "#75bdd0"; ctx.font = "700 " + Math.round(R * 1.05) + "px system-ui,sans-serif"; ctx.textAlign = "center";
    ctx.fillText((petName()[0] || "P").toUpperCase(), cx, cy + R * 0.36);
  }
}
function buildSharePoster(mode) {
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
  if (mode === "monologue") {
    drawTwinPortrait(ctx, W / 2, 230, 110, p.emoji);
    ctx.fillStyle = "#fff"; ctx.font = "700 54px system-ui,sans-serif"; ctx.textAlign = "center";
    ctx.fillText(petName(), W / 2, 420);
    ctx.font = "500 26px system-ui,sans-serif"; ctx.fillStyle = "rgba(255,255,255,.85)";
    ctx.fillText(dkey(), W / 2, 462);
    const m = buildMonologue();
    ctx.fillStyle = "rgba(255,255,255,.18)"; roundedPath(ctx, 50, 500, W - 100, 400, 26); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.textAlign = "center";
    ctx.font = "700 32px system-ui,sans-serif";
    let y = wrapText(ctx, m.open, W / 2, 560, W - 150, 44);
    ctx.font = "500 30px system-ui,sans-serif";
    y = wrapText(ctx, m.mid, W / 2, y + 62, W - 150, 44);
    ctx.font = "italic 28px system-ui,sans-serif"; ctx.fillStyle = "rgba(255,255,255,.92)";
    wrapText(ctx, m.close, W / 2, y + 60, W - 150, 40);
    ctx.font = "500 28px system-ui,sans-serif"; ctx.fillStyle = "rgba(255,255,255,.9)";
    ctx.fillText((en() ? "— sincerely, " : "——真诚的，") + petName(), W / 2, 960);
    ctx.fillText(t("petCardTagline"), W / 2, 1020);
    return;
  }
  drawTwinPortrait(ctx, W / 2, 250, 130, p.emoji);
  ctx.fillStyle = "#fff"; ctx.font = "700 58px system-ui,sans-serif"; ctx.textAlign = "center";
  ctx.fillText(petName(), W / 2, 470);
  ctx.font = "600 40px system-ui,sans-serif"; ctx.fillStyle = "rgba(255,255,255,.95)";
  ctx.fillText(en() ? p.en : p.zh, W / 2, 528);
  ctx.fillStyle = "rgba(255,255,255,.18)"; roundedPath(ctx, 60, 560, W - 120, 150, 24); ctx.fill();
  ctx.fillStyle = "#fff"; ctx.font = "italic 30px system-ui,sans-serif";
  wrapText(ctx, "“" + (en() ? p.qEn : p.qZh) + "”", W / 2, 612, W - 140, 40);
  const { cur } = growthNow();
  const stats = [[state.streak || 0, en() ? "Streak" : "连续"], ["Lv." + cur.lv, en() ? "Bond" : "羁绊"], [wellbeingScore(), en() ? "Wellbeing" : "综合状态"]];
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
}
function renderAll() {
  renderIdentity(); renderSummary(); renderTasks(); renderInsights(); renderTimeline();
  updatePetMessage(); renderMbti(); renderEmotion(); renderStreak();
  renderGrowth(); renderReminders(); renderCloset(); renderSwatches();
  evaluateAchievements(); renderAchievements();
}
function renderIdentity() {
  const name = petName();
  $("#side-pet-name").textContent = name;
  $("#hero-pet-name").textContent = name;
  $("#pet-message-name").textContent = name;
  $("#mini-avatar").textContent = (name[0] || "P").toUpperCase();
  const age = state.pet.age;
  $("#pet-meta").textContent = (en() ? "Cat" : "猫") + (age ? " · " + age + (en() ? " yr" : " 岁") : "");
  const so = $("#studio-orbit-name"); if (so) so.textContent = name;
}
function moodEmoji(m) {
  return (en() ? ["", "Low", "Meh", "Okay", "Good", "Great"] : ["", "很低", "偏低", "一般", "不错", "很好"])[m] || "—";
}
function prevLog() {
  for (let i = 1; i <= 30; i++) { const k = dkey(Date.now() - i * 864e5); if (state.checkIns[k]) return state.checkIns[k]; }
  return null;
}
function latestWeight() {
  const keys = Object.keys(state.checkIns).sort().reverse();
  for (const k of keys) { if (state.checkIns[k].weight) return { date: k, kg: state.checkIns[k].weight }; }
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
  const w = latestWeight();
  $("#daily-summary").textContent = log
    ? (en()
      ? `Today you logged: mood ${moodEmoji(log.mood)}, appetite ${log.appetite}, litter ${log.litterOk ? "normal" : "unusual"}${log.weight ? ", " + log.weight + "kg" : ""}.${log.note ? " Note: " + log.note : ""}`
      : `今天的记录：心情 ${moodEmoji(log.mood)}，食欲${log.appetite === "less" ? "偏少" : log.appetite === "more" ? "偏多" : "正常"}，猫砂盆${log.litterOk ? "正常" : "有点异常"}${log.weight ? "，体重 " + log.weight + "kg" : ""}。${log.note ? "备注：" + log.note : ""}`)
    : (en()
      ? `No check-in yet today. A 30-second log keeps ${name}'s baseline accurate.${w ? " Last weight: " + w.kg + "kg." : ""}`
      : `今天还没打卡。30 秒记录，让${name}的基线更准确。${w ? "上次体重 " + w.kg + "kg。" : ""}`);
  renderFinding();
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
/* Real health signals computed from the last few check-ins — observation, not diagnosis. */
function computeAlerts() {
  const keys = Object.keys(state.checkIns).sort();
  if (!keys.length) return null;
  const last3 = keys.slice(-3).map(k => state.checkIns[k]);
  const alerts = [];
  if (last3.filter(l => l.appetite === "less").length >= 2)
    alerts.push({ ico: "🍽️", en: "Appetite has been low for 2+ recent days — watch eating and keep water fresh.", zh: "最近有 2 天以上食欲偏少——注意观察进食，保证饮水新鲜。" });
  if (last3.filter(l => !l.litterOk).length >= 2)
    alerts.push({ ico: "🚽", en: "Litter box has looked unusual repeatedly — if it continues, mention it to a vet.", zh: "猫砂盆连续出现异常——若持续，建议咨询兽医。" });
  const weights = keys.map(k => state.checkIns[k].weight).filter(Boolean);
  if (weights.length >= 3) {
    const prev = weights.slice(0, -1).reduce((a, b) => a + b, 0) / (weights.length - 1);
    const delta = (weights[weights.length - 1] - prev) / prev * 100;
    if (Math.abs(delta) >= 5)
      alerts.push({ ico: "⚖️", en: `Weight moved ${delta > 0 ? "up" : "down"} ${Math.abs(delta).toFixed(1)}% vs. recent average — worth tracking closely.`, zh: `体重较近期平均${delta > 0 ? "上升" : "下降"}了 ${Math.abs(delta).toFixed(1)}%——值得密切关注。` });
  }
  if (currentStress() > 48)
    alerts.push({ ico: "💭", en: "Stress signals are elevated — keep evenings calm and routines steady.", zh: "压力信号偏高——保持晚间安静、作息稳定。" });
  return alerts;
}
function renderAlerts() {
  const box = $("#alert-list"); if (!box) return;
  const alerts = computeAlerts();
  if (alerts === null) { box.innerHTML = `<div class="alert-item ok"><span>ℹ️</span><p>${t("alertNoData")}</p></div>`; return; }
  if (!alerts.length) { box.innerHTML = `<div class="alert-item ok"><span>✅</span><p>${t("alertOk")}</p></div>`; return; }
  box.innerHTML = alerts.map(a => `<div class="alert-item warn"><span>${a.ico}</span><p>${en() ? a.en : a.zh}</p></div>`).join("");
}
function renderInsights() {
  renderAlerts();
  drawTrend(+($(".insight-tabs button.active")?.dataset.range || 7));
  drawWeight();
}
function renderTimeline() {
  const items = [];
  const hcKeys = Object.keys(state.healthChecks).sort().reverse();
  if (hcKeys.length) {
    const hc = state.healthChecks[hcKeys[0]];
    const flagged = Object.entries(hc).filter(([k, v]) => !v).map(([k]) => en() ? { eyes: "eyes", gums: "gums", skin: "skin & coat" }[k] : { eyes: "眼睛", gums: "牙龈", skin: "皮肤毛发" }[k]);
    items.push([hcKeys[0],
      en() ? "Health self-check" : "健康自查",
      flagged.length ? (en() ? "Needs watching: " + flagged.join(", ") : "需要观察：" + flagged.join("、")) : (en() ? "All areas looked normal." : "各部位看起来都正常。")]);
  }
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
function updatePetMessage() {
  $("#pet-message-text").textContent = emotionMessage(computeEmotion());
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
    x.textAlign = "left";
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
/* Weight mini-chart from logged weights (last 90 days). */
function drawWeight() {
  const c = $("#weight-chart"); if (!c) return;
  const x = c.getContext("2d"), pad = 40, w = c.width - pad * 2, h = c.height - pad * 2;
  x.clearRect(0, 0, c.width, c.height);
  const entries = Object.keys(state.checkIns).sort().filter(k => state.checkIns[k].weight).slice(-30)
    .map(k => ({ k, kg: state.checkIns[k].weight }));
  if (entries.length < 2) {
    x.fillStyle = "#697680"; x.font = "600 14px Inter,system-ui,sans-serif"; x.textAlign = "center";
    x.fillText(en() ? "Log weight in 2+ check-ins to see the curve" : "在打卡中记录 2 次以上体重即可看到曲线", c.width / 2, c.height / 2);
    x.textAlign = "left";
    return;
  }
  const kgs = entries.map(e => e.kg);
  const min = Math.min(...kgs) - 0.2, max = Math.max(...kgs) + 0.2;
  x.strokeStyle = "#dce5e3";
  for (let i = 0; i < 3; i++) { const y = pad + i * h / 2; x.beginPath(); x.moveTo(pad, y); x.lineTo(c.width - pad, y); x.stroke(); }
  x.beginPath();
  entries.forEach((e, i) => {
    const px = pad + i * w / Math.max(1, entries.length - 1), py = pad + h - (e.kg - min) / (max - min) * h;
    i ? x.lineTo(px, py) : x.moveTo(px, py);
  });
  x.strokeStyle = "#a9a0d8"; x.lineWidth = 3; x.stroke();
  entries.forEach((e, i) => {
    const px = pad + i * w / Math.max(1, entries.length - 1), py = pad + h - (e.kg - min) / (max - min) * h;
    x.beginPath(); x.arc(px, py, 4, 0, 7); x.fillStyle = "#a9a0d8"; x.fill();
    x.fillStyle = "#697680"; x.font = "600 11px Inter,system-ui,sans-serif"; x.textAlign = "center";
    x.fillText(e.kg + "", px, py - 10);
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
    lines.push(`${k}  ${en() ? "mood" : "心情"} ${l.mood}/5 · ${en() ? "appetite" : "食欲"} ${l.appetite} · ${en() ? "litter" : "猫砂盆"} ${l.litterOk ? "OK" : (en() ? "unusual" : "异常")}${l.weight ? " · " + l.weight + "kg" : ""}${l.note ? " · " + l.note : ""}`);
  });
  const hc = Object.keys(state.healthChecks).sort();
  if (hc.length) {
    lines.push("", en() ? "Health self-checks" : "健康自查");
    hc.forEach(k => {
      const v = state.healthChecks[k];
      lines.push(`${k}  ${en() ? "eyes" : "眼睛"} ${v.eyes ? "OK" : "!"} · ${en() ? "gums" : "牙龈"} ${v.gums ? "OK" : "!"} · ${en() ? "skin" : "皮肤"} ${v.skin ? "OK" : "!"}`);
    });
  }
  if (!keys.length) lines.push(en() ? "No check-ins yet." : "还没有打卡记录。");
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pettwin-" + (state.pet.name || "report") + ".txt";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

/* === Navigation & bindings === */
let activeView = "today";
function navigate(view) {
  activeView = view;
  $$(".view").forEach(v => v.classList.toggle("active", v.id === view));
  $$(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  const nav = $(`.nav [data-view="${view}"]`) || $(`[data-view="${view}"]`);
  $("#page-title").textContent = nav ? nav.textContent.replace(/^[^\s]+\s/, "") : view;
  $("#section-eyebrow").textContent = "PETTWIN";
  const hideMsg = view === "avatar" || !state.twinVisible;
  $("#pet-message").classList.toggle("hidden", hideMsg);
}
$$("[data-view], [data-view-jump]").forEach(b => b.onclick = () => navigate(b.dataset.view || b.dataset.viewJump));
$$("[data-lang]").forEach(b => b.onclick = () => { lang = b.dataset.lang; localStorage.setItem("pt-lang", lang); applyLanguage(); });
$$("[data-signal]").forEach(b => b.onclick = () => { $$("[data-signal]").forEach(x => x.classList.toggle("active", x === b)); navigate("insights"); });
$$("[data-emo-act]").forEach(b => b.onclick = () => doEmoAct(b.dataset.emoAct));
$("#quiz-btn").onclick = openQuiz;
$("#quiz-close").onclick = () => $("#quiz-overlay").classList.add("hidden");
document.addEventListener("pt-petted", () => { addIx("pets"); toast(t("purr")); });
$("#talk-close").onclick = () => $("#talk-overlay").classList.add("hidden");
$("#talk-overlay").onclick = e => { if (e.target === $("#talk-overlay")) $("#talk-overlay").classList.add("hidden"); };
$("#talk-send").onclick = sendTalk;
$("#talk-input").addEventListener("keydown", e => { if (e.key === "Enter") sendTalk(); });
$("#away-close").onclick = () => $("#away-overlay").classList.add("hidden");
$("#away-overlay").onclick = e => { if (e.target === $("#away-overlay")) $("#away-overlay").classList.add("hidden"); };
$("#away-hug").onclick = () => {
  addIx("pets");
  if (window.PetFix) { window.PetFix.burst("heart", 8); window.PetFix.setAction("calm"); }
  $("#away-overlay").classList.add("hidden");
  toast(t("purr"));
};
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

/* Reminder modal */
$("#add-reminder").onclick = () => {
  $("#rem-date").value = dkey(Date.now() + 7 * 864e5);
  $("#rem-label").value = "";
  $("#rem-type").value = "vaccine";
  $("#rem-repeat").value = "12";
  $("#rem-label-row").style.display = "none";
  $("#reminder-overlay").classList.remove("hidden");
};
$("#rem-type").onchange = () => { $("#rem-label-row").style.display = $("#rem-type").value === "custom" ? "" : "none"; };
$("#rem-close").onclick = () => $("#reminder-overlay").classList.add("hidden");
$("#reminder-overlay").onclick = e => { if (e.target === $("#reminder-overlay")) $("#reminder-overlay").classList.add("hidden"); };
$("#rem-save").onclick = () => {
  const date = $("#rem-date").value;
  if (!date) { $("#rem-date").focus(); return; }
  state.reminders.push({
    id: "r" + Date.now(),
    type: $("#rem-type").value,
    label: $("#rem-label").value.trim().slice(0, 30),
    date,
    repeatMonths: +$("#rem-repeat").value || 0
  });
  save();
  $("#reminder-overlay").classList.add("hidden");
  renderReminders();
};
$("#export-ics-all").onclick = () => downloadIcs(state.reminders);

/* Health check modal */
$("#health-open").onclick = openHealthCheck;
$("#health-close").onclick = () => $("#health-overlay").classList.add("hidden");
$("#health-overlay").onclick = e => { if (e.target === $("#health-overlay")) $("#health-overlay").classList.add("hidden"); };
$$("#health-overlay [data-hval]").forEach(b => b.onclick = () => {
  hcDraft[b.dataset.hfield] = b.dataset.hval === "ok";
  renderHealthButtons();
});
$("#health-save").onclick = submitHealthCheck;

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

/* === Appearance — photos in, coat colours out. Nothing else to configure. === */
$("#pet-photo").onchange = async event => {
  const files = [...event.target.files];
  if (!files.length) return;
  $("#studio-result").textContent = en() ? "Reading photos…" : "正在读取照片……";
  const look = window.PetFix ? await window.PetFix.readPhotos(files) : null;
  if (!look) { $("#studio-result").textContent = en() ? "Could not read those photos — try clearer ones." : "读不出这些照片，换几张更清晰的试试。"; return; }
  state.look = look;
  state.flags.photo = true; state.flags.twin = true;
  save();
  window.PetFix.setLook(look);
  window.PetFix.burst("spark", 5);
  renderSwatches();
  $("#studio-result").textContent = t("lookApplied");
  evaluateAchievements(); renderAchievements();
};
$("#reset-look").onclick = () => {
  state.look = null; save();
  if (window.PetFix) window.PetFix.setLook({ coat: "#8f9aa6", cream: "#f6f1e7", dark: "#5d6570", pattern: "solid" });
  renderSwatches();
  $("#studio-result").textContent = "";
};
function renderSwatches() {
  const box = $("#look-swatches"); if (!box) return;
  const l = state.look || { coat: "#8f9aa6", cream: "#f6f1e7", dark: "#5d6570" };
  box.innerHTML = [l.coat, l.cream, l.dark].map(c => `<span style="background:${c}"></span>`).join("");
  renderModels(); renderColors();
}
const COAT_COLORS = ["#8f9aa6", "#f3ede2", "#e0954f", "#3a3d42", "#a5825f", "#f0b7c3", "#9b8fc9", "#7fb08a"];
function renderColors() {
  const grid = $("#color-grid"); if (!grid) return;
  const cur = (state.look && state.look.coat) || "#8f9aa6";
  grid.innerHTML = COAT_COLORS.map(c => `<button class="color-dot ${cur === c ? "active" : ""}" data-coat="${c}" style="background:${c}"></button>`).join("");
  $$("[data-coat]").forEach(b => b.onclick = () => {
    state.look = Object.assign({}, state.look || {}, { coat: b.dataset.coat });
    save();
    if (window.PetFix) { window.PetFix.setLook(state.look); window.PetFix.burst("spark", 4); }
    renderColors(); renderSwatches();
  });
}
function renderModels() {
  const grid = $("#model-grid"); if (!grid || !window.PetFix || !window.PetFix.MODELS) return;
  const M = window.PetFix.MODELS;
  grid.innerHTML = Object.keys(M).map(id =>
    `<button class="closet-item ${state.model === id ? "active" : ""}" data-model="${id}"><span class="closet-swatch model-${id}"></span><span class="closet-name">${en() ? M[id].en : M[id].zh}</span></button>`).join("");
  $$("[data-model]").forEach(b => b.onclick = () => {
    state.model = b.dataset.model;
    save();
    window.PetFix.setModel(state.model);
    renderModels();
  });
}

/* Share overlay */
if ($("#open-share")) $("#open-share").onclick = () => { buildSharePoster(); $("#share-overlay").classList.remove("hidden"); };
if ($("#monologue-btn")) $("#monologue-btn").onclick = () => { buildSharePoster("monologue"); $("#share-overlay").classList.remove("hidden"); };
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
maybeOnboard();
if (state.pet.name) maybeAwayReport();
function applySprite() {
  if (!window.PetFix) return;
  if (state.model && state.model !== "sitting" && !applySprite.modelSet) { applySprite.modelSet = true; window.PetFix.setModel(state.model); return; }
  if (state.look) window.PetFix.setLook(state.look);
  window.PetFix.setAdornment(state.wardrobe.wearing);
  window.PetFix.setMood(window.__petMood || "content");
  if (window.PetFix.setTier) window.PetFix.setTier(growthNow().cur.lv);
  renderModels();
}
applySprite();
document.addEventListener("pt-model-ready", applySprite);
if (!state.twinVisible) {
  $("#pet-sprite").classList.add("hidden");
  $("#pet-message").classList.add("hidden");
  $("#pet-toggle").textContent = t("showTwin");
}
