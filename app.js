const traitLabels = {
  sociability: "Sociability",
  curiosity: "Curiosity",
  independence: "Independence",
  stability: "Emotional Stability",
  activity: "Activity Level",
  routine: "Routine Stability",
};

const defaultState = {
  pet: "Mochi",
  traits: {
    sociability: 42,
    curiosity: 86,
    independence: 74,
    stability: 68,
    activity: 72,
    routine: 76,
  },
  history: [
    { day: "Mon", activity: 68, stress: 30, routine: 72 },
    { day: "Tue", activity: 74, stress: 28, routine: 78 },
    { day: "Wed", activity: 71, stress: 32, routine: 76 },
    { day: "Thu", activity: 64, stress: 42, routine: 68 },
    { day: "Fri", activity: 70, stress: 35, routine: 74 },
    { day: "Sat", activity: 79, stress: 24, routine: 80 },
    { day: "Today", activity: 72, stress: 28, routine: 76 },
  ],
  timeline: [
    {
      date: "March 2026",
      title: "Initial personality model created",
      body: "High curiosity, moderate sociability, and high independence. Strong interest in new objects, but prefers not to be over-handled.",
    },
    {
      date: "June 2026",
      title: "Routine became more stable",
      body: "Night vocalization decreased and play frequency increased. Still fairly sensitive when guests visit.",
    },
  ],
};

const state = loadState();

function loadState() {
  const saved = localStorage.getItem("pettwin-state");
  return saved ? JSON.parse(saved) : structuredClone(defaultState);
}

function saveState() {
  localStorage.setItem("pettwin-state", JSON.stringify(state));
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function latest() {
  return state.history[state.history.length - 1];
}

function renderAll() {
  renderDashboard();
  renderRadar();
  renderTrendChart();
  renderTraits();
  renderAnalysis();
  renderTimeline();
}

function renderDashboard() {
  const current = latest();
  const stress = current.stress;
  const stateLabel = stress > 55 ? "Worth watching" : current.activity > 76 ? "Active" : "Stable";
  document.getElementById("state-label").textContent = stateLabel;
  document.getElementById("activity-score").textContent = current.activity;
  document.getElementById("stress-score").textContent = stress;
  document.getElementById("bond-score").textContent = clamp(100 - state.traits.independence + state.traits.sociability / 2);
  document.getElementById("routine-score").textContent = current.routine;
  document.getElementById("state-copy").textContent =
    stress > 55
      ? "Stress-related signals are elevated. Reduce stimulation, keep the routine steady, and continue observing for 3 to 5 days."
      : "Recent logs look steady. Keep the routine consistent and continue watching play frequency.";

  const alerts = buildAlerts();
  document.getElementById("alert-count").textContent = `${alerts.length} ${alerts.length === 1 ? "item" : "items"}`;
  document.getElementById("alerts").innerHTML = alerts
    .map((alert) => `<article class="alert"><strong>${alert.title}</strong><span>${alert.body}</span></article>`)
    .join("");
}

function buildAlerts() {
  const current = latest();
  const alerts = [];
  if (current.stress > 45) {
    alerts.push({
      title: "Stress signals increased",
      body: "Recent behavior differs from the usual baseline. Watch for guests, noise, routine shifts, and other environmental triggers.",
    });
  }
  if (current.activity < 66) {
    alerts.push({
      title: "Activity decreased",
      body: "Reduced play and movement are worth tracking. If this continues, consider consulting a veterinarian.",
    });
  }
  if (current.routine < 70) {
    alerts.push({
      title: "Routine fluctuation",
      body: "Night activity or feeding rhythm may be shifting. Keep feeding times and rest areas consistent.",
    });
  }
  if (!alerts.length) {
    alerts.push({
      title: "Stable baseline",
      body: "No major behavior changes are currently deviating from the historical baseline.",
    });
  }
  return alerts;
}

function renderRadar() {
  const canvas = document.getElementById("radar-chart");
  const ctx = canvas.getContext("2d");
  const labels = Object.keys(traitLabels);
  const center = { x: canvas.width / 2, y: canvas.height / 2 + 10 };
  const radius = 105;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#d9e2e7";
  ctx.fillStyle = "#6b7785";
  ctx.font = "14px Arial";

  for (let ring = 1; ring <= 4; ring += 1) {
    drawPolygon(ctx, labels.length, center, (radius / 4) * ring);
  }

  labels.forEach((key, index) => {
    const point = polarPoint(center, radius + 28, index, labels.length);
    const axis = polarPoint(center, radius, index, labels.length);
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(axis.x, axis.y);
    ctx.stroke();
    ctx.textAlign = point.x < center.x - 10 ? "right" : point.x > center.x + 10 ? "left" : "center";
    ctx.fillText(traitLabels[key], point.x, point.y);
  });

  const points = labels.map((key, index) => polarPoint(center, (radius * state.traits[key]) / 100, index, labels.length));
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(143, 200, 214, 0.36)";
  ctx.strokeStyle = "#548da0";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();
  ctx.lineWidth = 1;
}

function drawPolygon(ctx, sides, center, radius) {
  ctx.beginPath();
  for (let i = 0; i < sides; i += 1) {
    const point = polarPoint(center, radius, i, sides);
    if (i === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  }
  ctx.closePath();
  ctx.stroke();
}

function polarPoint(center, radius, index, total) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / total;
  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius,
  };
}

function renderTrendChart() {
  const canvas = document.getElementById("trend-chart");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const padding = 42;
  const width = canvas.width - padding * 2;
  const height = canvas.height - padding * 2;
  ctx.strokeStyle = "#d9e2e7";
  ctx.fillStyle = "#6b7785";
  ctx.font = "13px Arial";

  for (let i = 0; i <= 4; i += 1) {
    const y = padding + (height / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(canvas.width - padding, y);
    ctx.stroke();
  }

  drawLine(ctx, "activity", "#8fc8d6", padding, width, height);
  drawLine(ctx, "stress", "#e89a87", padding, width, height);
  drawLine(ctx, "routine", "#9fc9a5", padding, width, height);

  state.history.forEach((item, index) => {
    const x = padding + (width / (state.history.length - 1)) * index;
    ctx.fillText(item.day, x - 14, canvas.height - 12);
  });
}

function drawLine(ctx, key, color, padding, width, height) {
  ctx.beginPath();
  state.history.forEach((item, index) => {
    const x = padding + (width / (state.history.length - 1)) * index;
    const y = padding + height - (item[key] / 100) * height;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.lineWidth = 1;
}

function renderTraits() {
  document.getElementById("trait-bars").innerHTML = Object.entries(state.traits)
    .map(
      ([key, value]) => `
        <div class="bar">
          <div class="bar-top"><strong>${traitLabels[key]}</strong><span>${value}</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div>
        </div>
      `
    )
    .join("");
  document.getElementById("personality-summary").textContent =
    "Mochi is a highly curious, fairly independent, socially cautious cat. They like exploring their environment, but prefer to choose the distance and timing of interaction.";
}

function renderAnalysis() {
  const current = latest();
  const previous = state.history[state.history.length - 2] || current;
  const trendItems = [
    ["Hiding / stress-related behavior", current.stress - previous.stress],
    ["Play / active behavior", current.activity - previous.activity],
    ["Sleep / routine stability", current.routine - previous.routine],
  ];
  document.getElementById("trend-list").innerHTML = trendItems
    .map(([label, change]) => `<div class="trend-item"><span>${label}</span><strong>${change >= 0 ? "+" : ""}${change}%</strong></div>`)
    .join("");
  document.getElementById("ai-explanation").textContent =
    current.stress > 45
      ? "Stress-related behavior has increased in recent logs. The most relevant factors are often guests, noise, and owner routine changes. PetTwin recommends continued tracking rather than making a medical judgment."
      : "The past week looks stable overall. Activity and routine have not clearly deviated from the historical baseline. Daily check-ins can continue building a long-term personality record.";
  document.getElementById("recommendations").innerHTML = [
    "Keep feeding times and quiet rest areas consistent.",
    "When hiding appears, avoid forced interaction and let the pet approach first.",
    "If drinking, litter, appetite, pain, or energy changes continue, consult a veterinarian.",
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderTimeline() {
  document.getElementById("timeline-list").innerHTML = state.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <strong>${item.date} · ${item.title}</strong>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function bindNavigation() {
  const buttons = document.querySelectorAll("[data-view], [data-view-jump]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.dataset.view || button.dataset.viewJump;
      document.querySelectorAll(".view").forEach((panel) => panel.classList.toggle("active", panel.id === view));
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
      document.getElementById("page-title").textContent = button.textContent.trim();
    });
  });
}

function bindCheckin() {
  document.getElementById("checkin-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const mood = form.get("mood");
    const symptoms = form.getAll("symptoms");
    const events = form.getAll("events");
    const current = latest();

    const next = {
      day: "Today",
      activity: current.activity,
      stress: current.stress,
      routine: current.routine,
    };

    if (mood === "active") next.activity += 8;
    if (mood === "quiet") next.activity -= 6;
    if (mood === "anxious" || mood === "hiding") next.stress += 12;
    if (mood === "clingy") state.traits.independence -= 4;
    if (symptoms.includes("no-play") || symptoms.includes("sleep")) next.activity -= 8;
    if (symptoms.includes("more-vocal") || symptoms.includes("grooming") || symptoms.includes("aggression")) next.stress += 9;
    if (symptoms.includes("low-appetite") || symptoms.includes("litter")) next.routine -= 10;
    if (events.includes("guests") || events.includes("noise") || events.includes("move") || events.includes("new-pet")) next.stress += 7;
    if (events.includes("none")) next.routine += 5;

    next.activity = clamp(next.activity);
    next.stress = clamp(next.stress);
    next.routine = clamp(next.routine);
    state.traits.activity = clamp((state.traits.activity * 2 + next.activity) / 3);
    state.traits.stability = clamp(100 - next.stress);
    state.traits.routine = clamp((state.traits.routine * 2 + next.routine) / 3);
    state.traits.independence = clamp(state.traits.independence);
    state.history.push(next);
    state.history = state.history.slice(-7).map((item, index, list) => ({
      ...item,
      day: index === list.length - 1 ? "Today" : `${list.length - index - 1}d ago`,
    }));
    state.timeline.unshift({
      date: new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" }),
      title: "Daily check-in completed",
      body: `Today’s state: activity ${next.activity}, stress ${next.stress}, routine ${next.routine}.`,
    });
    saveState();
    renderAll();
    document.getElementById("form-result").textContent = "Mochi’s personality model has been updated for today.";
  });
}

bindNavigation();
bindCheckin();
renderAll();
