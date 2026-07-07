/* 宠格 PetPersona — app shell, router, and views */
(function () {
  var PP = window.PP;
  var store = PP.store, i18n = PP.i18n, engine = PP.engine;
  var viewEl = document.getElementById('view');
  var modalRoot = document.getElementById('modal-root');
  var tabbar = document.getElementById('tabbar');

  function t(k, p) { return i18n.t(k, p); }

  /* ---------------- icons ---------------- */
  function svg(inner, vb) { return '<svg viewBox="' + (vb || '0 0 24 24') + '" fill="none" aria-hidden="true">' + inner + '</svg>'; }
  var ICON = {
    paw: svg('<ellipse cx="8" cy="8" rx="2" ry="2.6" fill="currentColor"/><ellipse cx="16" cy="8" rx="2" ry="2.6" fill="currentColor"/><ellipse cx="4.6" cy="12" rx="1.7" ry="2.3" fill="currentColor"/><ellipse cx="19.4" cy="12" rx="1.7" ry="2.3" fill="currentColor"/><path d="M12 11c2.8 0 5 2.2 5 4.8 0 2-1.6 3.2-3.5 3.2-.6 0-1.1-.2-1.5-.5-.4.3-.9.5-1.5.5C8.6 19 7 17.8 7 15.8 7 13.2 9.2 11 12 11z" fill="currentColor"/>'),
    cat: svg('<path d="M5 9 4 4l4 2.5A8 8 0 0 1 16 6.5L20 4l-1 5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M5 9v3a7 7 0 0 0 14 0V9" stroke="currentColor" stroke-width="1.7"/><circle cx="9.5" cy="12" r="1" fill="currentColor"/><circle cx="14.5" cy="12" r="1" fill="currentColor"/><path d="M12 14.5v1.5M9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
    dog: svg('<path d="M7 5c-2 0-3 2-3 4v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7c0-2-1-4-3-4-1.5 0-2 1-3 1H10C9 6 8.5 5 7 5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="9.5" cy="12" r="1" fill="currentColor"/><circle cx="14.5" cy="12" r="1" fill="currentColor"/><path d="M12 14v1.5M10.5 16.5h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
    camera: svg('<rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="13.5" r="3.4" stroke="currentColor" stroke-width="1.7"/><path d="M8.5 7 10 4.5h4L15.5 7" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'),
    plus: svg('<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
    check: svg('<path d="M5 12.5 10 17.5 19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'),
    star: svg('<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'),
    spark: svg('<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
    compass: svg('<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" fill="currentColor"/>'),
    alert: svg('<path d="M12 4 2.5 20h19z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 10v4M12 17h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'),
    chat: svg('<path d="M4 5h16v11H9l-4 3v-3H4z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'),
    heart: svg('<path d="M12 20S3.5 14.5 3.5 8.8C3.5 6 5.6 4 8.2 4c1.7 0 3 .9 3.8 2.2C12.8 4.9 14 4 15.8 4c2.6 0 4.7 2 4.7 4.8C20.5 14.5 12 20 12 20z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'),
    cup: svg('<path d="M6 4h12l-1.2 12.5a3 3 0 0 1-3 2.7H10.2a3 3 0 0 1-3-2.7z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M5 4h14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="10" r="1.4" fill="currentColor"/>'),
    hand: svg('<path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10m0 0V4.5a1.5 1.5 0 0 1 3 0V11m0-.5a1.5 1.5 0 0 1 3 0V15a5 5 0 0 1-5 5h-1.5a5 5 0 0 1-4-2l-3-4a1.6 1.6 0 0 1 2.4-2L9 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'),
    wave: svg('<path d="M3 12h2l2-6 3 12 3-15 3 12 2-3h3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>'),
    box: svg('<path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 8.5 12 13l8-4.5M12 13v7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'),
    ball: svg('<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M4 10c5 2 11 2 16 0M4 14c5-2 11-2 16 0M10 4c-2 5-2 11 0 16M14 4c2 5 2 11 0 16" stroke="currentColor" stroke-width="1.3"/>'),
    towel: svg('<rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M4 9h16M8 5v14" stroke="currentColor" stroke-width="1.4"/>'),
    sound: svg('<path d="M4 9v6h4l5 4V5L8 9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
    clock: svg('<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'),
    door: svg('<path d="M6 4h9a1 1 0 0 1 1 1v15H6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 20h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12.5" cy="12" r="1" fill="currentColor"/>'),
    mirror: svg('<rect x="7" y="3" width="10" height="14" rx="5" stroke="currentColor" stroke-width="1.6"/><path d="M9 20h6M12 17v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
    calendar: svg('<rect x="4" y="5.5" width="16" height="15" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 3.5v4M16 3.5v4M4 10h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
    empty: svg('<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M8.5 14c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8M9 9.5h.01M15 9.5h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
    share: svg('<path d="M8 12a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm11-6a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm0 12a3 3 0 1 1-3-3 3 3 0 0 1 3 3zM7.7 10.7l6.6-3.4M7.7 13.3l6.6 3.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
    heart2: svg('<path d="M12 20S3.5 14.5 3.5 8.8C3.5 6 5.6 4 8.2 4c1.7 0 3 .9 3.8 2.2C12.8 4.9 14 4 15.8 4c2.6 0 4.7 2 4.7 4.8C20.5 14.5 12 20 12 20z" fill="currentColor"/>'),
  };
  var EXP_ICON = { cup: 'cup', hand: 'hand', wave: 'wave', box: 'box', ball: 'ball', towel: 'towel', heart: 'heart', sound: 'sound', clock: 'clock', door: 'door', mirror: 'mirror', calendar: 'calendar' };

  /* ---------------- app state ---------------- */
  var app = { route: 'home', petId: null, sub: null, quizIndex: 0 };

  /* ---------------- helpers ---------------- */
  function pick(o) { return i18n.lang === 'zh' ? o.zh : o.en; }
  function petName(p) { return p && p.name ? p.name : t('common.unknown'); }
  function speciesLabel(sp) { return sp === 'dog' ? t('common.dog') : t('common.cat'); }

  function toast(msg) {
    var d = document.createElement('div');
    d.className = 'toast'; d.textContent = msg;
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 2200);
  }

  function openModal(html) {
    modalRoot.innerHTML = '<div class="modal-mask"><div class="modal-sheet" role="dialog" aria-modal="true">' +
      '<div class="modal-grab"></div>' + html + '</div></div>';
  }
  function closeModal() { modalRoot.innerHTML = ''; }

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function fmtDate(ts) {
    var d = new Date(ts);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function downscale(file, cb) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = new Image();
      img.onload = function () {
        var max = 480, sc = Math.min(1, max / Math.max(img.width, img.height));
        var w = Math.round(img.width * sc), h = Math.round(img.height * sc);
        var c = document.createElement('canvas'); c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        cb(c.toDataURL('image/jpeg', 0.82));
      };
      img.onerror = function () { cb(null); };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  function downloadDataURL(name, dataURL) {
    var a = document.createElement('a');
    a.href = dataURL; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
  }

  /* ---------------- navigation ---------------- */
  function go(route, opts) {
    app.route = route;
    app.sub = (opts && opts.sub) || null;
    if (opts && opts.petId !== undefined) app.petId = opts.petId;
    if (opts && opts.quizIndex !== undefined) app.quizIndex = opts.quizIndex;
    render();
    viewEl.scrollTop = 0;
    window.scrollTo(0, 0);
  }
  function baseTab() {
    if (app.route === 'onboard' || app.route === 'assess' || app.route === 'quiz' || app.route === 'experiments' || app.route === 'result') return 'assess';
    if (app.route === 'records') return 'records';
    if (app.route === 'me') return 'me';
    return 'home';
  }
  function syncTabs() {
    var base = baseTab();
    Array.prototype.forEach.call(tabbar.querySelectorAll('.tab'), function (b) {
      b.classList.toggle('active', b.getAttribute('data-route') === base);
    });
  }

  /* ---------------- views ---------------- */
  function render() {
    var r = app.route;
    if (r === 'home') viewEl.innerHTML = viewHome();
    else if (r === 'onboard') viewEl.innerHTML = viewOnboard();
    else if (r === 'assess') viewEl.innerHTML = viewAssessHub();
    else if (r === 'quiz') viewEl.innerHTML = viewQuiz();
    else if (r === 'experiments') viewEl.innerHTML = viewExperiments();
    else if (r === 'result') viewEl.innerHTML = viewResult();
    else if (r === 'records') viewEl.innerHTML = viewRecords();
    else if (r === 'me') viewEl.innerHTML = viewMe();
    else viewEl.innerHTML = viewHome();
    syncTabs();
    afterRender();
  }

  function avatarHTML(p, cls) {
    if (p && p.photo) return '<div class="avatar ' + (cls || '') + '"><img src="' + p.photo + '" alt=""></div>';
    return '<div class="avatar ' + (cls || '') + '">' + (p && p.species === 'dog' ? ICON.dog : ICON.cat) + '</div>';
  }

  function viewHome() {
    var pets = store.state.pets;
    var hero = '<section class="hero">' +
      '<h1>' + t('home.heroTitle').replace('\n', '<br>') + '</h1>' +
      '<p>' + t('home.heroSub') + '</p>' +
      '<button class="btn btn-primary" data-action="hero-cta">' + t('home.heroCta') + '</button>' +
      '<div class="hero-paw">' + ICON.paw + '</div></section>';

    var petsHTML = '<div class="section-title">' + t('home.myPets') + '</div>';
    if (!pets.length) {
      petsHTML += '<button class="add-pet" data-action="add-pet">' + ICON.plus + '<div style="margin-top:6px">' + t('home.addPet') + '</div></button>';
    } else {
      petsHTML += '<div class="stack">';
      pets.forEach(function (p) {
        var a = store.latestAssessment(p.id);
        var right = a
          ? '<div class="type-tag">' + a.result.typeCode + '</div><div class="tiny">' + pick(PP.getType(a.result.typeCode) ? { zh: PP.getType(a.result.typeCode).nickname_zh, en: PP.getType(a.result.typeCode).nickname_en } : { zh: '', en: '' }) + '</div>'
          : '<span class="chip">' + t('home.untested') + '</span>';
        petsHTML += '<button class="pet-card" data-action="open-pet" data-id="' + p.id + '">' +
          avatarHTML(p) +
          '<div class="grow"><div class="name">' + petName(p) + '</div><div class="tiny">' + speciesLabel(p.species) +
          (p.breed ? ' · ' + p.breed : '') + '</div></div>' +
          '<div style="text-align:right">' + right + '</div></button>';
      });
      petsHTML += '<button class="add-pet" data-action="add-pet">' + ICON.plus + ' ' + t('home.addPet') + '</button>';
      petsHTML += '</div>';
    }

    var info = '<div class="section-title">' + t('home.whatIs') + '</div>' +
      '<div class="card"><p class="muted">' + t('home.whatIsBody') + '</p>' +
      '<button class="btn btn-soft btn-sm" style="margin-top:12px" data-action="methodology">' + t('result.methodology') + '</button></div>';

    return hero + petsHTML + info;
  }

  function viewOnboard() {
    return '<div class="section-title">' + t('onboard.title') + '</div>' +
      '<div class="card">' +
      '<div class="field"><label>' + t('onboard.name') + '</label>' +
      '<input type="text" id="f-name" placeholder="' + t('onboard.namePh') + '" autocomplete="off"></div>' +
      '<div class="field"><label>' + t('onboard.species') + '</label>' +
      '<div class="seg" id="f-species"><button data-v="cat" class="on">' + ICON.cat + t('common.cat') + '</button>' +
      '<button data-v="dog">' + ICON.dog + t('common.dog') + '</button></div></div>' +
      '<div class="field"><label>' + t('onboard.breed') + '</label>' +
      '<input type="text" id="f-breed" placeholder="' + t('onboard.breedPh') + '" autocomplete="off"></div>' +
      '<div class="field"><label>' + t('onboard.birthday') + '</label><input type="date" id="f-birthday"></div>' +
      '<div class="field"><label>' + t('onboard.gender') + '</label>' +
      '<div class="seg" id="f-gender"><button data-v="female" class="on">' + t('common.female') + '</button>' +
      '<button data-v="male">' + t('common.male') + '</button><button data-v="unknown">' + t('common.unknown') + '</button></div></div>' +
      '<div class="field"><label>' + t('onboard.neutered') + '</label>' +
      '<div class="seg" id="f-neutered"><button data-v="yes" class="on">' + t('common.neutered') + '</button>' +
      '<button data-v="no">' + t('common.notNeutered') + '</button></div></div>' +
      '<div class="field"><label>' + t('onboard.photo') + '</label>' +
      '<div class="photo-pick"><div class="avatar lg" id="f-photo-prev">' + ICON.camera + '</div>' +
      '<button class="btn btn-ghost btn-sm" data-action="pick-photo">' + t('onboard.pickPhoto') + '</button>' +
      '<input type="file" id="f-photo" accept="image/*"></div></div>' +
      '<button class="btn btn-primary btn-block" data-action="create-pet">' + t('onboard.create') + '</button>' +
      '</div>';
  }

  function currentPet() {
    if (app.petId) return store.getPet(app.petId);
    if (store.state.pets.length) return store.state.pets[0];
    return null;
  }

  function viewAssessHub() {
    var pets = store.state.pets;
    if (!pets.length) {
      return '<div class="section-title">' + t('assess.title') + '</div>' +
        '<div class="empty">' + ICON.empty + '<p>' + t('toast.needPet') + '</p>' +
        '<button class="btn btn-primary" style="margin-top:16px" data-action="add-pet">' + t('home.addPet') + '</button></div>';
    }
    var p = currentPet();
    app.petId = p.id;
    var draft = store.draft(p.id);
    var species = p.species;
    var qTotal = PP.questionsFor(species).length;
    var qDone = Object.keys(draft.answers || {}).length;
    var quizComplete = qDone >= qTotal;
    var expDone = Object.keys(draft.experiments || {}).length;

    var petSelector = '';
    if (pets.length > 1) {
      petSelector = '<div class="row" style="gap:8px;overflow-x:auto;padding-bottom:4px;margin-bottom:6px">';
      pets.forEach(function (x) {
        petSelector += '<button class="chip ' + (x.id === p.id ? 'accent' : '') + '" data-action="select-pet" data-id="' + x.id + '">' + petName(x) + '</button>';
      });
      petSelector += '</div>';
    }

    var quizCard = '<button class="exp-item" data-action="open-quiz">' +
      '<div class="exp-icon' + (quizComplete ? ' ' : '') + '">' + (quizComplete ? ICON.check : ICON.chat) + '</div>' +
      '<div class="grow"><h4>' + t('assess.quiz') + (quizComplete ? ' · ' + t('assess.quizDone') : '') + '</h4>' +
      '<div class="meta">' + t('assess.quizDesc', { n: qTotal }) + '</div>' +
      '<div class="q-progress" style="margin:10px 0 0"><div style="width:' + Math.round(qDone / qTotal * 100) + '%"></div></div></div></button>';

    var expCard = '<button class="exp-item" data-action="open-experiments">' +
      '<div class="exp-icon">' + ICON.cup + '</div>' +
      '<div class="grow"><h4>' + t('assess.exps') + '</h4>' +
      '<div class="meta">' + t('assess.expsDesc', { n: expDone }) + '</div></div></button>';

    var genBtn = '<button class="btn btn-primary btn-block" data-action="generate"' + (quizComplete ? '' : ' disabled') + '>' +
      t('assess.genResult') + '</button>';
    var hint = quizComplete ? '' : '<p class="tiny center" style="margin-top:8px">' + t('assess.needQuiz') + '</p>';

    return '<div class="section-title">' + t('assess.title') + '</div>' + petSelector +
      '<div class="pet-card" style="margin-bottom:14px">' + avatarHTML(p) +
      '<div class="grow"><div class="name">' + petName(p) + '</div><div class="tiny">' + speciesLabel(species) + '</div></div></div>' +
      '<div class="stack">' + quizCard + expCard + '</div>' +
      '<div style="margin-top:20px">' + genBtn + hint + '</div>';
  }

  function viewQuiz() {
    var p = currentPet();
    var qs = PP.questionsFor(p.species);
    var draft = store.draft(p.id);
    var idx = Math.max(0, Math.min(app.quizIndex, qs.length - 1));
    var q = qs[idx];
    var cur = draft.answers[q.id];
    var likert = '';
    for (var v = 5; v >= 1; v--) {
      likert += '<button class="likert' + (cur === v ? ' on' : '') + '" data-action="answer" data-val="' + v + '">' + t('likert.' + v) + '</button>';
    }
    var backBtn = idx > 0 ? '<button class="btn btn-ghost btn-sm" data-action="quiz-back">' + t('common.back') + '</button>' : '<span></span>';
    return '<div class="row between" style="margin-top:8px"><button class="btn btn-ghost btn-sm" data-action="quiz-exit">' + t('common.close') + '</button>' +
      '<span class="tiny">' + (idx + 1) + ' / ' + qs.length + '</span></div>' +
      '<div class="q-progress"><div style="width:' + Math.round((idx) / qs.length * 100) + '%"></div></div>' +
      '<div class="q-text">' + pick(q) + '</div>' +
      '<div class="likert">' + likert + '</div>' +
      '<div class="row between" style="margin-top:22px">' + backBtn + '</div>';
  }

  function viewExperiments() {
    var p = currentPet();
    var exps = PP.experimentsFor(p.species);
    var draft = store.draft(p.id);
    exps = exps.slice().sort(function (a, b) { return (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0); });
    var list = exps.map(function (e) {
      var content = i18n.lang === 'zh' ? e.zh : e.en;
      var done = draft.experiments[e.id] != null;
      return '<button class="exp-item' + (done ? ' done' : '') + '" data-action="open-exp" data-id="' + e.id + '">' +
        '<div class="exp-icon">' + (done ? ICON.check : ICON[EXP_ICON[e.icon]]) + '</div>' +
        '<div class="grow"><h4>' + content.name + (e.recommended ? ' <span class="chip accent" style="vertical-align:middle">' + t('exp.recommended') + '</span>' : '') + '</h4>' +
        '<div class="meta">' + e.minutes + ' ' + t('common.minutes') + ' · ' + content.props + '</div></div>' +
        (done ? '<span class="chip green">' + t('exp.doneTag') + '</span>' : '') + '</button>';
    }).join('');
    return '<div class="row between" style="margin-top:8px"><button class="btn btn-ghost btn-sm" data-action="back-hub">' + t('common.back') + '</button>' +
      '<span class="tiny">' + t('assess.exps') + '</span></div>' +
      '<p class="observe-box" style="margin:10px 0 16px">' + t('exp.safety') + '</p>' +
      '<div class="stack">' + list + '</div>';
  }

  function openExpDetail(expId) {
    var p = currentPet();
    var e = PP.experimentsFor(p.species).filter(function (x) { return x.id === expId; })[0];
    if (!e) return;
    var c = i18n.lang === 'zh' ? e.zh : e.en;
    var draft = store.draft(p.id);
    var chosen = draft.experiments[e.id];
    var steps = c.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
    var opts = e.options.map(function (o, i) {
      return '<button class="likert' + (chosen === i ? ' on' : '') + '" data-action="exp-choose" data-id="' + e.id + '" data-opt="' + i + '">' +
        (i18n.lang === 'zh' ? o.zh : o.en) + '</button>';
    }).join('');
    openModal('<div class="modal-title">' + c.name + '</div>' +
      '<div class="chip" style="margin-bottom:10px">' + t('exp.props') + '：' + c.props + '</div>' +
      '<ol class="steps">' + steps + '</ol>' +
      '<div class="observe-box"><strong>' + t('exp.observe') + '：</strong>' + c.observe + '</div>' +
      '<div style="font-weight:700;margin:18px 0 8px">' + t('exp.record') + '</div>' +
      '<div class="likert">' + opts + '</div>');
  }

  function viewResult() {
    var p = currentPet();
    var a = store.latestAssessment(p.id);
    if (!a) return viewAssessHub();
    var r = a.result;
    var type = PP.getType(r.typeCode);
    var isZh = i18n.lang === 'zh';

    // stars
    var stars = '';
    for (var s = 0; s < 5; s++) stars += '<span style="color:' + (s < r.confidence ? '#e07a4e' : '#eadfd2') + '">' + ICON.star + '</span>';

    // axes
    var axesHTML = ['EI', 'SN', 'TF', 'JP'].map(function (ax) {
      var first = ax[0], second = ax[1];
      var pct = r.axes[ax];
      var winFirst = pct >= 50;
      var winPct = winFirst ? pct : 100 - pct;
      var leftLab = t('axisFull.' + first), rightLab = t('axisFull.' + second);
      return '<div class="axis-bar"><div class="labels">' +
        '<span class="' + (winFirst ? 'win' : 'lose') + '">' + leftLab + '</span>' +
        '<span class="' + (!winFirst ? 'win' : 'lose') + '">' + rightLab + '</span></div>' +
        '<div class="axis-track"><div class="axis-fill" style="' + (winFirst ? 'left:0;' : 'right:0;') + 'width:' + winPct + '%"></div></div>' +
        '<div class="axis-pct">' + (winFirst ? leftLab : rightLab) + ' ' + winPct + '%</div></div>';
    }).join('');

    var borderNote = r.borderline.length ? r.borderline.map(function (ax) {
      var label = t('axisFull.' + ax[0]) + '/' + t('axisFull.' + ax[1]);
      return '<p class="tiny" style="margin-top:4px">· ' + t('result.borderline', { axis: label }) + '</p>';
    }).join('') : '';

    function list(items, icon, title) {
      return '<div class="report-block"><h3>' + icon + title + '</h3><ul>' +
        items.map(function (it) { return '<li>' + pick(it) + '</li>'; }).join('') + '</ul></div>';
    }

    var speciesNote = p.species === 'dog' ? (isZh ? type.dog_note_zh : type.dog_note_en) : (isZh ? type.cat_note_zh : type.cat_note_en);
    var sens = r.sensitivity;
    var sensText = t('result.sens.' + sens);

    // pairing
    var owner = store.state.ownerMbti;
    var pairHTML;
    if (owner) {
      var pr = engine.pairing(owner, r.typeCode);
      pairHTML = '<div class="card" style="margin-top:14px"><div class="section-title" style="margin-top:0">' + t('result.pairing') + '</div>' +
        '<div class="pair-score">' + pr.score + '%</div>' +
        '<div class="tiny center" style="margin-bottom:10px">' + t('result.pairingScore') + ' · ' + owner + ' × ' + r.typeCode + '</div>' +
        pr.perAxis.map(function (pa) {
          var key = 'pair.' + pa.axis + '.' + (pa.same ? 'same' : 'diff');
          var head = t('axisFull.' + pa.axis[0]) + ' / ' + t('axisFull.' + pa.axis[1]);
          return '<div class="pair-axis"><div class="pair-head">' + head + ' · ' + (isZh ? (pa.same ? '同频' : '互补') : (pa.same ? 'Same' : 'Complement')) + '</div>' + t(key) + '</div>';
        }).join('') + '</div>';
    } else {
      pairHTML = '<div class="card center" style="margin-top:14px"><p class="muted">' + t('result.pairingCta') + '</p>' +
        '<button class="btn btn-soft btn-sm" style="margin-top:10px" data-action="goto-me">' + t('me.ownerMbti') + '</button></div>';
    }

    return '<div class="row between" style="margin-top:8px"><button class="btn btn-ghost btn-sm" data-action="nav-home">' + t('common.back') + '</button>' +
      '<button class="btn btn-ghost btn-sm" data-action="retest">' + t('home.retest') + '</button></div>' +
      '<div class="result-hero">' + avatarHTML(p, 'lg') +
      '<div class="type-code">' + r.typeCode + '</div>' +
      '<div class="type-nickname">' + (isZh ? type.nickname_zh : type.nickname_en) + '</div>' +
      '<div class="type-tagline">“' + (isZh ? type.tagline_zh : type.tagline_en) + '”</div>' +
      '<div class="stars">' + stars + '</div>' +
      '<div class="tiny" style="margin-top:6px">' + t('result.starsHint', { n: r.confidence }) + '</div></div>' +

      '<div id="card-preview-wrap" style="margin:8px 0 16px"></div>' +
      '<button class="btn btn-primary btn-block" data-action="save-card">' + ICON.share + ' ' + t('result.saveCard') + '</button>' +
      '<p class="tiny center" style="margin:8px 0 4px">' + t('result.shareHint') + '</p>' +

      '<div class="section-title">' + t('result.axes') + '</div><div class="card">' + axesHTML + borderNote + '</div>' +

      '<div class="section-title">' + t('result.summary') + '</div>' +
      '<div class="card"><p>' + (isZh ? type.summary_zh : type.summary_en) + '</p></div>' +

      '<div class="voice-quote" style="margin-top:14px">' + ICON.chat + ' “' + (isZh ? type.voice_zh : type.voice_en) + '”</div>' +

      '<div class="section-title">' + t('result.speciesNote') + '</div>' +
      '<div class="card"><p>' + speciesNote + '</p></div>' +

      '<div class="card" style="margin-top:14px">' +
      list(type.strengths, ICON.star, t('result.strengths')) +
      list(type.quirks, ICON.spark, t('result.quirks')) +
      list(type.guide, ICON.compass, t('result.guide')) +
      list(type.pitfalls, ICON.alert, t('result.pitfalls')) + '</div>' +

      '<div class="section-title">' + t('result.sensitivity') + '</div>' +
      '<div class="card"><p class="muted">' + sensText + '</p></div>' +

      pairHTML +

      '<div style="margin:18px 0 4px"><button class="btn btn-ghost btn-block btn-sm" data-action="methodology">' + t('result.methodology') + '</button></div>';
  }

  function viewRecords() {
    var pets = store.state.pets;
    var allAssess = [];
    pets.forEach(function (p) {
      store.assessmentsFor(p.id).forEach(function (a) { allAssess.push({ p: p, a: a }); });
    });
    allAssess.sort(function (x, y) { return y.a.takenAt - x.a.takenAt; });

    var histHTML;
    if (!allAssess.length) {
      histHTML = '<div class="empty">' + ICON.empty + '<p>' + t('records.emptyHistory') + '</p></div>';
    } else {
      // per-pet delta
      var lastByPet = {};
      histHTML = '<div class="stack">' + allAssess.map(function (row) {
        var prev = lastByPet[row.p.id];
        lastByPet[row.p.id] = row.a.result.typeCode;
        var delta = '';
        if (prev && prev !== row.a.result.typeCode) {
          delta = '<span class="delta-up">' + t('records.compare') + ' ' + prev + '→' + row.a.result.typeCode + '</span>';
        }
        var type = PP.getType(row.a.result.typeCode);
        return '<button class="timeline-item" data-action="open-pet" data-id="' + row.p.id + '">' +
          avatarHTML(row.p) +
          '<div class="grow"><div><span class="code">' + row.a.result.typeCode + '</span> · ' + petName(row.p) + '</div>' +
          '<div class="tiny">' + (i18n.lang === 'zh' ? type.nickname_zh : type.nickname_en) + ' · ' + fmtDate(row.a.takenAt) + '</div>' + delta + '</div>' +
          '<div class="stars" style="margin:0"><span style="color:#e07a4e;width:16px;height:16px;display:inline-block">' + ICON.star + '</span><span class="tiny">' + row.a.result.confidence + '</span></div>' +
          '</button>';
      }).join('') + '</div>';
    }

    var rems = store.state.reminders.slice().sort(function (a, b) { return new Date(a.due) - new Date(b.due); });
    var remHTML;
    if (!rems.length) {
      remHTML = '<div class="empty">' + ICON.calendar + '<p>' + t('records.emptyReminders') + '</p></div>';
    } else {
      remHTML = '<div class="stack">' + rems.map(function (rm) {
        var overdue = new Date(rm.due) < new Date(todayStr());
        var pet = store.getPet(rm.petId);
        var label = rm.type === 'custom' ? rm.label : t('records.type.' + rm.type);
        return '<div class="reminder-item' + (overdue ? ' overdue' : '') + '">' +
          '<div class="exp-icon">' + ICON.calendar + '</div>' +
          '<div class="grow"><div style="font-weight:600">' + label + (pet ? ' · ' + petName(pet) : '') + '</div>' +
          '<div class="due">' + (overdue ? t('records.overdue') + ' · ' : '') + t('records.due', { date: rm.due }) + '</div></div>' +
          '<button class="btn btn-danger btn-sm" data-action="del-reminder" data-id="' + rm.id + '">' + t('common.delete') + '</button></div>';
      }).join('') + '</div>' +
        '<button class="btn btn-ghost btn-block btn-sm" style="margin-top:10px" data-action="export-ics">' + t('records.ics') + '</button>';
    }

    return '<div class="section-title">' + t('records.history') + '</div>' + histHTML +
      '<div class="section-title">' + t('records.reminders') + '<button class="more" data-action="add-reminder">＋ ' + t('records.addReminder') + '</button></div>' + remHTML;
  }

  function viewMe() {
    var owner = store.state.ownerMbti;
    var petsManage = store.state.pets.map(function (p) {
      return '<div class="me-row"><div><div class="lab">' + petName(p) + '</div><div class="val">' + speciesLabel(p.species) + '</div></div>' +
        '<button class="btn btn-danger btn-sm" data-action="del-pet" data-id="' + p.id + '">' + t('common.delete') + '</button></div>';
    }).join('');
    return '<div class="section-title">' + t('me.title') + '</div>' +
      '<div class="stack">' +
      '<button class="me-row" data-action="owner-mbti"><div><div class="lab">' + t('me.ownerMbti') + '</div><div class="val">' + t('me.ownerMbtiDesc') + '</div></div>' +
      '<div class="type-tag">' + (owner || t('me.notSet')) + '</div></button>' +
      '<button class="me-row" data-action="toggle-lang"><div class="lab">' + t('me.language') + '</div><div class="val">' + (i18n.lang === 'zh' ? '中文' : 'English') + '</div></button>' +
      '<button class="me-row" data-action="methodology"><div class="lab">' + t('me.methodology') + '</div><div class="val">›</div></button>' +
      '<button class="me-row" data-action="export-data"><div class="lab">' + t('me.export') + '</div><div class="val">›</div></button>' +
      '<button class="me-row" data-action="import-data"><div class="lab">' + t('me.import') + '</div><div class="val">›</div></button>' +
      '<input type="file" id="import-file" accept="application/json" style="display:none">' +
      '<button class="me-row" data-action="about"><div class="lab">' + t('me.about') + '</div><div class="val">›</div></button>' +
      '</div>' +
      (petsManage ? '<div class="section-title">' + t('me.managePets') + '</div><div class="stack">' + petsManage + '</div>' : '');
  }

  /* ---------------- post-render hooks ---------------- */
  function afterRender() {
    if (app.route === 'result') renderCardPreview();
  }

  function renderCardPreview() {
    var wrap = document.getElementById('card-preview-wrap');
    if (!wrap) return;
    var p = currentPet();
    var a = store.latestAssessment(p.id);
    if (!a) return;
    var type = PP.getType(a.result.typeCode);
    var s = PP.card.buildSVG(p, type, a.result, i18n.lang);
    // responsive inline preview
    wrap.innerHTML = s.replace('<svg ', '<svg class="card-preview" style="width:100%;height:auto" ');
  }

  /* ---------------- modals ---------------- */
  function methodologyModal() {
    openModal('<div class="modal-title">' + t('legal.title') + '</div><div class="legal">' +
      '<h4>' + t('legal.science.h') + '</h4><p>' + t('legal.science.p') + '</p>' +
      '<h4>' + t('legal.mbti.h') + '</h4><p>' + t('legal.mbti.p') + '</p>' +
      '<h4>' + t('legal.medical.h') + '</h4><p>' + t('legal.medical.p') + '</p>' +
      '<h4>' + t('legal.privacy.h') + '</h4><p>' + t('legal.privacy.p') + '</p></div>' +
      '<button class="btn btn-ghost btn-block" style="margin-top:12px" data-action="close-modal">' + t('common.close') + '</button>');
  }

  function aboutModal() {
    openModal('<div class="modal-title">' + t('me.about') + '</div>' +
      '<p class="muted">' + t('me.aboutBody') + '</p>' +
      '<button class="btn btn-ghost btn-block" style="margin-top:16px" data-action="close-modal">' + t('common.close') + '</button>');
  }

  var MBTI_CODES = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];
  function ownerMbtiModal() {
    var cur = store.state.ownerMbti;
    var grid = MBTI_CODES.map(function (c) {
      return '<button class="' + (cur === c ? 'on' : '') + '" data-action="pick-owner" data-code="' + c + '">' + c + '</button>';
    }).join('');
    openModal('<div class="modal-title">' + t('me.ownerMbti') + '</div>' +
      '<p class="muted" style="margin-bottom:12px">' + t('me.pickDirect') + '</p>' +
      '<div class="mbti-grid">' + grid + '</div>' +
      '<button class="btn btn-ghost btn-block" style="margin-top:16px" data-action="close-modal">' + t('common.close') + '</button>');
  }

  function reminderModal() {
    var pets = store.state.pets;
    if (!pets.length) { toast(t('toast.needPet')); return; }
    var petOpts = pets.map(function (p) { return '<option value="' + p.id + '">' + petName(p) + '</option>'; }).join('');
    var types = ['vaccine', 'deworm.in', 'deworm.out', 'checkup', 'custom'];
    var typeOpts = types.map(function (ty) { return '<option value="' + ty + '">' + t('records.type.' + ty) + '</option>'; }).join('');
    openModal('<div class="modal-title">' + t('records.addReminder') + '</div>' +
      '<div class="field"><label>' + t('nav.records') + '</label><select id="rm-pet">' + petOpts + '</select></div>' +
      '<div class="field"><label>' + t('records.type.custom') + '</label><select id="rm-type">' + typeOpts + '</select></div>' +
      '<div class="field" id="rm-custom-wrap" style="display:none"><label>' + t('records.customPh') + '</label><input type="text" id="rm-custom" placeholder="' + t('records.customPh') + '"></div>' +
      '<div class="field"><label>' + t('records.due', { date: '' }) + '</label><input type="date" id="rm-due" value="' + todayStr() + '"></div>' +
      '<button class="btn btn-primary btn-block" data-action="save-reminder">' + t('common.save') + '</button>');
    var sel = document.getElementById('rm-type');
    sel.addEventListener('change', function () {
      document.getElementById('rm-custom-wrap').style.display = sel.value === 'custom' ? 'block' : 'none';
    });
  }

  /* ---------------- actions ---------------- */
  function readSeg(id) {
    var seg = document.getElementById(id);
    var on = seg.querySelector('.on');
    return on ? on.getAttribute('data-v') : null;
  }

  function createPet() {
    var name = (document.getElementById('f-name').value || '').trim();
    if (!name) { toast(t('onboard.needName')); return; }
    var pet = store.addPet({
      name: name,
      species: readSeg('f-species'),
      breed: (document.getElementById('f-breed').value || '').trim(),
      birthday: document.getElementById('f-birthday').value || '',
      gender: readSeg('f-gender'),
      neutered: readSeg('f-neutered') === 'yes',
      photo: app._pendingPhoto || null,
    });
    app._pendingPhoto = null;
    go('assess', { petId: pet.id });
  }

  function generateResult() {
    var p = currentPet();
    var draft = store.draft(p.id);
    var qTotal = PP.questionsFor(p.species).length;
    if (Object.keys(draft.answers || {}).length < qTotal) { toast(t('assess.needQuiz')); return; }
    var result = engine.assess(p, draft.answers, draft.experiments);
    store.addAssessment({
      petId: p.id, takenAt: Date.now(),
      answers: Object.assign({}, draft.answers),
      experiments: Object.assign({}, draft.experiments),
      result: result,
    });
    go('result', { petId: p.id });
  }

  function saveCard() {
    var p = currentPet();
    var a = store.latestAssessment(p.id);
    var type = PP.getType(a.result.typeCode);
    var s = PP.card.buildSVG(p, type, a.result, i18n.lang);
    PP.card.svgToPngDataURL(s).then(function (url) {
      downloadDataURL('petpersona-' + (p.name || 'pet') + '-' + a.result.typeCode + '.png', url);
      toast(t('toast.cardSaved'));
    }).catch(function () {
      // fallback: download raw svg
      var blob = new Blob([s], { type: 'image/svg+xml' });
      downloadDataURL('petpersona-' + a.result.typeCode + '.svg', URL.createObjectURL(blob));
      toast(t('toast.cardSaved'));
    });
  }

  function exportICS() {
    var rems = store.state.reminders;
    if (!rems.length) return;
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//PetPersona//ZH//EN'];
    rems.forEach(function (rm) {
      var pet = store.getPet(rm.petId);
      var label = (rm.type === 'custom' ? rm.label : t('records.type.' + rm.type)) + (pet ? ' - ' + petName(pet) : '');
      var d = rm.due.replace(/-/g, '');
      lines.push('BEGIN:VEVENT');
      lines.push('UID:' + rm.id + '@petpersona');
      lines.push('DTSTART;VALUE=DATE:' + d);
      lines.push('SUMMARY:' + label);
      lines.push('END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    var blob = new Blob([lines.join('\r\n')], { type: 'text/calendar' });
    downloadDataURL('petpersona-reminders.ics', URL.createObjectURL(blob));
  }

  function saveReminder() {
    var type = document.getElementById('rm-type').value;
    var rm = {
      petId: document.getElementById('rm-pet').value,
      type: type,
      label: type === 'custom' ? (document.getElementById('rm-custom').value || t('records.type.custom')) : '',
      due: document.getElementById('rm-due').value || todayStr(),
    };
    store.addReminder(rm);
    closeModal();
    toast(t('toast.reminderAdded'));
    render();
  }

  function exportData() {
    var blob = new Blob([store.exportJSON()], { type: 'application/json' });
    downloadDataURL('petpersona-backup.json', URL.createObjectURL(blob));
  }

  function importData(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      try { store.importJSON(e.target.result); i18n.setLang(store.state.lang); toast(t('me.importOk')); go('home'); }
      catch (err) { toast(t('me.importBad')); }
    };
    reader.readAsText(file);
  }

  /* ---------------- event wiring ---------------- */
  function handleAction(action, elm) {
    var p, id;
    switch (action) {
      case 'hero-cta':
        if (!store.state.pets.length) go('onboard'); else go('assess');
        break;
      case 'add-pet': go('onboard'); break;
      case 'create-pet': createPet(); break;
      case 'pick-photo': document.getElementById('f-photo').click(); break;
      case 'open-pet':
        id = elm.getAttribute('data-id');
        app.petId = id;
        if (store.latestAssessment(id)) go('result', { petId: id });
        else go('assess', { petId: id });
        break;
      case 'select-pet': go('assess', { petId: elm.getAttribute('data-id') }); break;
      case 'open-quiz':
        var pp = currentPet(); var d = store.draft(pp.id);
        var qs = PP.questionsFor(pp.species);
        var firstUnanswered = 0;
        for (var i = 0; i < qs.length; i++) { if (d.answers[qs[i].id] == null) { firstUnanswered = i; break; } }
        go('quiz', { quizIndex: firstUnanswered });
        break;
      case 'quiz-exit': case 'back-hub': go('assess'); break;
      case 'quiz-back': go('quiz', { quizIndex: Math.max(0, app.quizIndex - 1) }); break;
      case 'answer':
        var pet = currentPet(); var draft = store.draft(pet.id);
        var qsA = PP.questionsFor(pet.species);
        draft.answers[qsA[app.quizIndex].id] = parseInt(elm.getAttribute('data-val'), 10);
        store.save();
        if (app.quizIndex < qsA.length - 1) go('quiz', { quizIndex: app.quizIndex + 1 });
        else go('assess');
        break;
      case 'open-experiments': go('experiments'); break;
      case 'open-exp': openExpDetail(elm.getAttribute('data-id')); break;
      case 'exp-choose':
        var pE = currentPet(); var dE = store.draft(pE.id);
        dE.experiments[elm.getAttribute('data-id')] = parseInt(elm.getAttribute('data-opt'), 10);
        store.save(); closeModal(); go('experiments');
        break;
      case 'generate': generateResult(); break;
      case 'save-card': saveCard(); break;
      case 'retest':
        store.clearDraft(currentPet().id); go('assess');
        break;
      case 'nav-home': go('home'); break;
      case 'goto-me': case 'owner-mbti': ownerMbtiModal(); break;
      case 'pick-owner':
        store.setOwnerMbti(elm.getAttribute('data-code')); closeModal();
        if (app.route === 'me') render(); else go(app.route);
        break;
      case 'methodology': methodologyModal(); break;
      case 'about': aboutModal(); break;
      case 'close-modal': closeModal(); break;
      case 'add-reminder': reminderModal(); break;
      case 'save-reminder': saveReminder(); break;
      case 'del-reminder': store.removeReminder(elm.getAttribute('data-id')); render(); break;
      case 'export-ics': exportICS(); break;
      case 'toggle-lang':
        i18n.setLang(i18n.lang === 'zh' ? 'en' : 'zh'); store.setLang(i18n.lang);
        setLangToggleLabel(); render();
        break;
      case 'export-data': exportData(); break;
      case 'import-data': document.getElementById('import-file').click(); break;
      case 'del-pet':
        id = elm.getAttribute('data-id');
        var dp = store.getPet(id);
        if (confirm(t('me.deleteConfirm', { name: petName(dp) }))) {
          store.removePet(id);
          if (app.petId === id) app.petId = null;
          render();
        }
        break;
    }
  }

  function onSegClick(e) {
    var b = e.target.closest('.seg button');
    if (!b) return;
    var seg = b.parentElement;
    Array.prototype.forEach.call(seg.children, function (c) { c.classList.remove('on'); });
    b.classList.add('on');
  }

  viewEl.addEventListener('click', function (e) {
    onSegClick(e);
    var act = e.target.closest('[data-action]');
    if (act) { e.preventDefault(); handleAction(act.getAttribute('data-action'), act); }
  });
  viewEl.addEventListener('change', function (e) {
    if (e.target.id === 'f-photo' && e.target.files[0]) {
      downscale(e.target.files[0], function (url) {
        app._pendingPhoto = url;
        var prev = document.getElementById('f-photo-prev');
        if (prev) prev.innerHTML = '<img src="' + url + '" alt="">';
      });
    }
    if (e.target.id === 'import-file' && e.target.files[0]) importData(e.target.files[0]);
  });
  modalRoot.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-mask')) { closeModal(); return; }
    var act = e.target.closest('[data-action]');
    if (act) { e.preventDefault(); handleAction(act.getAttribute('data-action'), act); }
  });
  tabbar.addEventListener('click', function (e) {
    var b = e.target.closest('.tab');
    if (!b) return;
    go(b.getAttribute('data-route'));
  });

  function setLangToggleLabel() {
    document.getElementById('lang-toggle').textContent = i18n.lang === 'zh' ? 'EN' : '中文';
  }
  document.getElementById('lang-toggle').addEventListener('click', function () {
    i18n.setLang(i18n.lang === 'zh' ? 'en' : 'zh'); store.setLang(i18n.lang);
    setLangToggleLabel(); render();
  });

  function applyStaticI18n() {
    document.querySelector('.brand-name').textContent = t('app.name');
    Array.prototype.forEach.call(tabbar.querySelectorAll('.tab'), function (b) {
      var span = b.querySelector('span');
      var r = b.getAttribute('data-route');
      span.textContent = t('nav.' + r);
    });
  }

  // re-apply static labels on every render (language may change)
  var _origRender = render;
  render = function () { applyStaticI18n(); _origRender(); };

  /* ---------------- init ---------------- */
  i18n.setLang(store.state.lang || 'zh');
  setLangToggleLabel();
  render();
})();
