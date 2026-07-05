# PetTwin

## Live Demo

[Open PetTwin](https://charlenewong788.github.io/pettwin-app/)

PetTwin is a pet companion app: a living desktop pet with real emotions, a behavior-inferred pet MBTI, daily check-ins that build a true health baseline, and a coin-powered closet.

## Features

- Living desktop pet (SVG sprite): blinks, watches your cursor, swishes its tail, wanders the page, naps, chases the pointer, and purrs with hearts when stroked
- Coat colours matched from your pet's photos (processed on-device, background-aware)
- Emotion engine: eight human-readable feelings computed from real data, each shown with its reason
- Pet MBTI: sixteen types inferred continuously from check-ins and interactions - never a questionnaire
- 30-second daily check-ins (mood, appetite, litter, weight, notes) driving wellbeing, trends, findings and alerts
- Streaks with timezone-safe tracking and streak-freeze tokens; bond levels that grow with check-in days
- Coins earned by care, spent in a closet of wearables (bow, bell collar, scarf, glasses, flower crown, crown)
- Remote companionship: away reports, talk-to-pet with spoken replies, remote treat/play actions
- Health reminders (vaccine, deworming, check-up) with repeat cycles and .ics calendar export
- Guided health self-checks and real health-signal alerts - observation, not diagnosis
- Monologue and profile share cards drawn from the live sprite
- PWA (installable, offline-capable), bilingual EN/中文, mobile-first bottom navigation

## How To Run

Zero-dependency static project. Open `index.html` in a browser. All data stays in the browser (localStorage).

## Structure

`index.html` + `styles.css` + `app.js` (product logic) + `pet-sprite.js` (desktop pet) + `sw.js` / `manifest.webmanifest` (PWA)
