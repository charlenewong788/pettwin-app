/* 宠格 PetPersona — scoring engine
   Turns questionnaire answers + experiment results into a 4-letter type,
   per-axis percentages, a hidden sensitivity score, and a confidence star rating. */
(function () {
  var AXIS_KEYS = ['EI', 'SN', 'TF', 'JP'];

  // questionnaire value 1..5 -> centered -2..+2, times dir; + means toward first letter / higher NEU
  function scoreQuestions(answers, species) {
    var qs = window.PP.questionsFor(species);
    var acc = { EI: 0, SN: 0, TF: 0, JP: 0, NEU: 0 };
    var max = { EI: 0, SN: 0, TF: 0, JP: 0, NEU: 0 };
    var answered = 0;
    qs.forEach(function (q) {
      max[q.axis] += 2;
      var v = answers[q.id];
      if (v == null) return;
      answered++;
      acc[q.axis] += q.dir * (v - 3);
    });
    return { acc: acc, max: max, answered: answered, total: qs.length };
  }

  function scoreExperiments(results, species) {
    var exps = window.PP.experimentsFor(species);
    var byId = {};
    exps.forEach(function (e) { byId[e.id] = e; });
    var acc = { EI: 0, SN: 0, TF: 0, JP: 0, NEU: 0 };
    var max = { EI: 0, SN: 0, TF: 0, JP: 0, NEU: 0 };
    var done = 0;
    Object.keys(results || {}).forEach(function (expId) {
      var e = byId[expId];
      if (!e) return;
      var optIdx = results[expId];
      var opt = e.options[optIdx];
      if (!opt) return;
      done++;
      // max possible per axis for this experiment = biggest abs weight among its options
      var perAxisMax = {};
      e.options.forEach(function (o) {
        Object.keys(o.w || {}).forEach(function (ax) {
          perAxisMax[ax] = Math.max(perAxisMax[ax] || 0, Math.abs(o.w[ax]));
        });
      });
      Object.keys(perAxisMax).forEach(function (ax) { max[ax] += perAxisMax[ax]; });
      Object.keys(opt.w || {}).forEach(function (ax) { acc[ax] += opt.w[ax]; });
    });
    return { acc: acc, max: max, done: done };
  }

  function ratio(sum, max) { return max > 0 ? Math.max(-1, Math.min(1, sum / max)) : null; }

  function assess(pet, answers, experiments) {
    var species = pet.species || 'cat';
    var q = scoreQuestions(answers, species);
    var e = scoreExperiments(experiments, species);

    var axes = {};      // axisKey -> { pct(toward first, 0..100), letter, firstPct }
    var allKeys = ['EI', 'SN', 'TF', 'JP', 'NEU'];
    allKeys.forEach(function (ax) {
      var qr = ratio(q.acc[ax], q.max[ax]);
      var er = ratio(e.acc[ax], e.max[ax]);
      var r;
      if (qr != null && er != null) r = 0.6 * qr + 0.4 * er;
      else if (qr != null) r = qr;
      else if (er != null) r = er;
      else r = 0;
      var pct = Math.round(50 + r * 50);
      pct = Math.max(2, Math.min(98, pct));
      axes[ax] = pct; // percentage toward first letter (EI->E, SN->S, TF->T, JP->J) / NEU high
    });

    var code = '';
    var borderline = [];
    AXIS_KEYS.forEach(function (ax) {
      var first = ax[0], second = ax[1];
      var pct = axes[ax];
      code += pct >= 50 ? first : second;
      if (Math.abs(pct - 50) <= 6) borderline.push(ax);
    });

    // confidence: quiz gets you to 2 stars; experiments raise it
    var quizComplete = q.answered >= q.total;
    var base = quizComplete ? 2 : 1;
    var stars = Math.max(1, Math.min(5, base + Math.floor(e.done / 2)));

    // sensitivity band from NEU percentage
    var neu = axes.NEU;
    var sens = neu >= 66 ? 'high' : (neu <= 38 ? 'low' : 'mid');

    return {
      typeCode: code,
      axes: axes,        // {EI,SN,TF,JP,NEU} each 0..100 toward first letter / high sensitivity
      borderline: borderline,
      // 3+ axes hovering at the midline -> the ultra-rare hidden trait easter egg
      hidden: borderline.length >= 3,
      sensitivity: sens,
      sensitivityPct: neu,
      confidence: stars,
      quizAnswered: q.answered,
      quizTotal: q.total,
      expDone: e.done,
    };
  }

  // Owner MBTI (4 letters) vs pet type -> per-axis same/diff + a playful match score
  function pairing(ownerCode, petCode) {
    if (!ownerCode || !petCode || ownerCode.length !== 4 || petCode.length !== 4) return null;
    var perAxis = [];
    var same = 0;
    AXIS_KEYS.forEach(function (ax, i) {
      var o = ownerCode[i], p = petCode[i];
      var isSame = o === p;
      if (isSame) same++;
      perAxis.push({ axis: ax, owner: o, pet: p, same: isSame });
    });
    var score = Math.max(52, Math.min(99, 60 + same * 9));
    return { perAxis: perAxis, sameCount: same, score: score };
  }

  window.PP = window.PP || {};
  window.PP.engine = { assess: assess, pairing: pairing };
})();
