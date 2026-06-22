# Reconstruction API

This service keeps provider credentials off GitHub Pages and exposes a stable PetTwin contract.

## Contract

- `GET /api/v1/health`
- `POST /api/v1/reconstruction/jobs` with at least six private, signed asset URLs
- `GET /api/v1/reconstruction/jobs/:id`

The included provider is a development mock. Replace `mock-provider.mjs` with a production adapter that uploads the capture set to a photogrammetry or neural reconstruction service and returns a textured, rigged GLB URL. Raw pet media should use private object storage, short-lived signed URLs, encryption, and automatic deletion.

Run locally with `npm start` from this directory. Never expose `PETTWIN_3D_API_KEY` in client-side code.

