# PetTwin

## Live Demo

[Open PetTwin](https://charlenewong788.github.io/pettwin-app/)

PetTwin is a static MVP prototype for a pet digital personality and behavior insights app. It turns daily behavior logs into a dynamic pet personality profile, trend view, alert system, and long-term life archive.

## Current Features

- Onboarding: create your own pet profile (name and age drive the whole interface)
- 30-second daily check-in (mood, appetite, litter box, optional note) — the app's core data loop
- Streaks with timezone-safe day tracking and streak-freeze tokens for missed days
- Personality persona that evolves slowly from real check-in history (EMA), with a progress hint
- State-aware daily whispers (different pools for stressed days, checked-in days and weekends)
- Long-tail milestones (12 achievements from first check-in to a 100-day streak)
- Bond levels: check-in days level up the twin and unlock wearable 3D keepsakes (collar, cushion, halo, crown…)
- "Today's monologue" share card — what your pet would say today, signed and shareable
- Health reminders (vaccine / deworming / check-up) with repeat cycles and one-tap .ics calendar export
- Weight logging in check-ins with a real weight trend chart
- Guided 2-minute health self-check (eyes / gums / skin) that feeds the care plan and archive
- Mobile-first bottom tab navigation
- Share card rendered from the live 3D twin snapshot with real stats
- Real trend chart and findings computed from logged check-ins (unlocks after 3 days)
- Plain-text report export of the full check-in history
- Interactive 3D digital pet with photo-matched coat colours and feed/paw/play/calm actions
- Four-view capture workflow with resolution, lighting and sharpness checks
- Optional reconstruction API bridge with graceful fallback
- PWA: installable, offline-capable via service worker
- Bilingual English / Chinese interface
- Device hub and Workday Companion pages are honest previews until hardware pairing ships

## Product Boundary

PetTwin does not provide medical diagnosis. It only tracks behavior trends, highlights unusual changes, and offers care suggestions. If drinking, appetite, litter, pain, energy, or other health-related changes continue, users should consult a veterinarian.

The browser-generated chibi is a stylized preview, not a claim of geometric reconstruction accuracy. A pet-specific textured mesh requires the optional reconstruction API and a production 3D provider. The percentage in the studio measures capture quality only.

## How To Run

The interface is a zero-dependency static project. Open `index.html` in a browser. The optional reconstruction API requires Node.js and lives in `server/`.

## File Structure

```text
pettwin-app/
  index.html
  styles.css
  app.js
  README.md
  server/
    src/index.mjs
    src/providers/mock-provider.mjs
```

## Suggested Next Steps

1. Connect private object storage and a production 3D reconstruction provider.
2. Add a review step for eye, ear, muzzle, body proportion, and coat corrections.
3. Add real accounts, multi-pet profiles, and family permissions.
4. Replace browser local storage with a cloud database.
5. Integrate video and audio behavior analysis.

