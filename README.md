# PetPersona

> Understand your furry friend — an MBTI-style pet personality test with viral hooks, wrapped in a hand-journal design

[Live demo](https://charlenewong788.github.io/pettwin-app/)

## What it is

PetPersona packages animal-behavior science (the Feline Five personality model, the C-BARQ / Fe-BARQ behavior questionnaires) and Dognition-style at-home cognition games into one playful assessment: the owner answers a short **observation quiz**, then runs a few **at-home mini experiments** with their pet (the signature one is the treat-cup test). The app scores both inputs into an MBTI-style **persona card** with strengths, quirks, a care guide, and an owner-pet match report.

## Features

### Core assessment
- **Two-input scoring**: owner observation quiz (separate cat / dog question banks) + at-home experiments (treat-cup, point-following, novel-object, delayed gratification, and more), weighted into a four-letter type with a hidden sensitivity axis
- **Four behavior dimensions**: Social E/I, Grounded S/N, Self-reliant T/F, Routine-loving J/P — each mapped to observable behavior, not astrology
- **16 pet personas**, fully bilingual (English / Chinese): nickname, tagline, overview, strengths, quirks, a first-person "word from your pet", care guide, pitfalls, and species-specific notes for cats and dogs
- **Confidence stars**: the more experiments you run, the higher the rating

### Hooks
- **Blind-box reveal** — the result arrives as a floating mystery card that flips open with a confetti burst
- **Collection rarity (C / R / SR / SSR)** — every type has a per-species collection rate ("about 2 in 100 cats"), shown on the result page, pet cards, and the shareable image; framed as PetPersona's own collection rate, for fun
- **Daily pet fortune** — an almanac-style sticker on the home screen with a do / avoid / lucky treat / mood index, deterministic per pet per day, one-tap copy for sharing
- **A letter from your pet** — a typewriter-animated first-person letter, written per temperament group
- **Soul twin** — each type is paired with a historical figure (Zhuge Liang, Bao Zheng, Monet, Napoleon…) plus a one-liner
- **Hidden trait easter egg** — when all four axes hover near the midline, the ultra-rare "Schrödinger's Fluffball" trait appears, inviting a retest

### Everything else
- **Shareable persona card**: rendered as SVG, exported as PNG
- **Owner-pet match**: set your own MBTI for a dimension-by-dimension compatibility report
- **Persona history**: every assessment is kept, so you can watch the type evolve across retests
- **Health reminders**: vaccine / deworming / check-up dates with calendar (.ics) export
- **Bilingual UI** (English default, Chinese via one tap), zero backend, all data stays on-device

## Design

Hand-journal / sticker aesthetic: dot-grid paper background, ink outlines with hard offset shadows, washi tape, marker-highlight titles, doodles, and paw-stamp selected states. No emoji are used anywhere in the UI — all icons are inline SVG.

## Boundaries

PetPersona is a behavior-observation toy, not a diagnostic tool. If your pet's eating, drinking, litter habits, or energy change persistently, see a veterinarian. The assessment is "MBTI-style" and is not affiliated with the official Myers-Briggs Type Indicator®; results reflect behavior tendencies as seen by the owner, not absolute truths. Collection rates come from PetPersona's own distribution model and are not real-world statistics.

## Tech notes

A zero-dependency static front end — plain HTML / CSS / JavaScript, no build step, no framework. All profiles, photos, and results live in the browser's localStorage and can be exported, imported, or deleted from the Me tab. Nothing is ever uploaded.

## Run it

Open `index.html` in a browser. That's all.

## File structure

```text
pettwin-app/
  index.html
  styles.css
  manifest.webmanifest
  sw.js                  cache kill-switch for the previous app
  assets/icon.svg
  js/
    i18n.js              UI strings (en / zh)
    store.js             localStorage persistence
    data-types.js        16 persona content
    data-questions.js    observation quiz banks
    data-experiments.js  at-home experiment banks
    data-fun.js          rarity, daily fortune, soul twins, letters
    engine.js            scoring engine
    card.js              persona card (SVG to PNG)
    app.js               app shell, router, views
```
