# PetTwin

## Live Demo

[Open PetTwin](https://charlenewong788.github.io/pettwin-app/)

PetTwin is a static MVP prototype for a pet digital personality and behavior insights app. It turns daily behavior logs into a dynamic pet personality profile, trend view, alert system, and long-term life archive.

## Current Features

- Bilingual English / Chinese interface
- Roaming interactive 3D digital pet
- Six-view capture workflow with resolution, lighting, sharpness, and coverage checks
- Guided scan flow, reconstruction pipeline status, and textured/animated GLB loading
- Workday Companion with quiet, companion, and observation modes
- Smart litter-box, camera, feeder, and collar device hub
- Litter-box baseline and repeat-entry observations
- Remote voice, treat, toy, and camera interaction prototypes
- Linked behavior, environment, and care recommendations
- Care tasks with outcome feedback and a personal care playbook
- Pet status, home diary, insights, and personality timeline

## Product Boundary

PetTwin does not provide medical diagnosis. It only tracks behavior trends, highlights unusual changes, and offers care suggestions. If drinking, appetite, litter, pain, energy, or other health-related changes continue, users should consult a veterinarian.

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

