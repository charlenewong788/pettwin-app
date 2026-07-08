/* PetPersona — local persistence (browser localStorage only) */
(function () {
  const KEY = 'petpersona.v1';

  const defaults = () => ({
    lang: 'en',
    ownerMbti: null,
    pets: [],          // {id, name, species, breed, birthday, gender, neutered, photo}
    assessments: [],   // {id, petId, takenAt, answers:{qid:1..5}, experiments:{expId:optionIdx}, result:{...}}
    drafts: {},        // petId -> {answers, experiments} in-progress
    reminders: [],     // {id, petId, type, label, due, done}
  });

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      const parsed = JSON.parse(raw);
      return Object.assign(defaults(), parsed);
    } catch (e) {
      return defaults();
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* storage full (likely a big photo) — drop photos and retry once */
      try {
        state.pets.forEach((p) => { if (p.photo && p.photo.length > 200000) p.photo = null; });
        localStorage.setItem(KEY, JSON.stringify(state));
      } catch (e2) { /* give up silently; app keeps working in-memory */ }
    }
  }

  function uid() {
    return 'id' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
  }

  const api = {
    get state() { return state; },
    save,
    uid,

    addPet(pet) {
      pet.id = uid();
      state.pets.push(pet);
      save();
      return pet;
    },
    updatePet(id, patch) {
      const p = state.pets.find((x) => x.id === id);
      if (p) { Object.assign(p, patch); save(); }
      return p;
    },
    removePet(id) {
      state.pets = state.pets.filter((p) => p.id !== id);
      state.assessments = state.assessments.filter((a) => a.petId !== id);
      state.reminders = state.reminders.filter((r) => r.petId !== id);
      delete state.drafts[id];
      save();
    },
    getPet(id) { return state.pets.find((p) => p.id === id) || null; },

    draft(petId) {
      if (!state.drafts[petId]) state.drafts[petId] = { answers: {}, experiments: {} };
      return state.drafts[petId];
    },
    clearDraft(petId) { delete state.drafts[petId]; save(); },

    addAssessment(a) {
      a.id = uid();
      state.assessments.push(a);
      save();
      return a;
    },
    getAssessment(id) { return state.assessments.find((a) => a.id === id) || null; },
    assessmentsFor(petId) {
      return state.assessments
        .filter((a) => a.petId === petId)
        .sort((x, y) => y.takenAt - x.takenAt);
    },
    latestAssessment(petId) {
      return this.assessmentsFor(petId)[0] || null;
    },

    addReminder(r) { r.id = uid(); state.reminders.push(r); save(); return r; },
    removeReminder(id) { state.reminders = state.reminders.filter((r) => r.id !== id); save(); },

    setOwnerMbti(code) { state.ownerMbti = code; save(); },
    setLang(l) { state.lang = l; save(); },

    exportJSON() { return JSON.stringify(state, null, 2); },
    importJSON(text) {
      const parsed = JSON.parse(text); // throws on invalid
      if (!parsed || !Array.isArray(parsed.pets)) throw new Error('bad shape');
      state = Object.assign(defaults(), parsed);
      save();
    },
  };

  window.PP = window.PP || {};
  window.PP.store = api;
})();
