// PetTwin production reconstruction provider adapter.
//
// This adapter forwards a reconstruction job to an external, production 3D
// provider (e.g. a photogrammetry / generative-3D service) using a generic
// REST contract. Swap the request/response mapping in `toProviderPayload` and
// `fromProviderJob` to match your chosen vendor (Meshy, Luma, Tripo, etc.).
//
// Configuration (see server/.env.example):
//   PETTWIN_3D_PROVIDER_URL  Base URL of the external provider API.
//   PETTWIN_3D_API_KEY       Bearer token for the external provider.
//
// If PETTWIN_3D_PROVIDER_URL is not set, index.mjs falls back to the mock
// provider so the static UI keeps working with the adaptive chibi preview.

const PROVIDER_URL = process.env.PETTWIN_3D_PROVIDER_URL || "";
const API_KEY = process.env.PETTWIN_3D_API_KEY || "";

function authHeaders() {
  const headers = { "content-type": "application/json" };
  if (API_KEY) headers["authorization"] = `Bearer ${API_KEY}`;
  return headers;
}

// Map PetTwin's internal job input to the provider's expected request body.
function toProviderPayload(input) {
  return {
    // At least four signed asset URLs (Front, Left, Right, Back).
    images: input.assets,
    // Optional hints derived from the client-side capture analysis.
    hints: {
      coatColor: input.coatColor || null,
      lightRatio: input.lightRatio || null,
      species: input.species || "cat"
    },
    output: { format: "glb", topology: "quad", texture: true }
  };
}

// Map the provider's job representation back to PetTwin's normalized shape.
function fromProviderJob(job) {
  return {
    id: job.id,
    status: job.status || "processing",
    progress: typeof job.progress === "number" ? job.progress : 0,
    // Signed GLB URL when the job has finished. Consumed by loadGlb() on the client.
    modelUrl: job.result?.model_url || job.model_url || null,
    error: job.error || null
  };
}

async function request(path, options) {
  const response = await fetch(`${PROVIDER_URL}${path}`, options);
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Provider responded ${response.status}: ${text.slice(0, 300)}`);
  }
  return response.json();
}

export function createReconstructionProvider() {
  return {
    async createJob(input) {
      const job = await request("/v1/jobs", {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(toProviderPayload(input))
      });
      return fromProviderJob(job);
    },
    async getJob(id) {
      const job = await request(`/v1/jobs/${encodeURIComponent(id)}`, {
        method: "GET",
        headers: authHeaders()
      });
      return fromProviderJob(job);
    }
  };
}

export const isConfigured = Boolean(PROVIDER_URL);
