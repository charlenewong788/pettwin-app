import http from "node:http";
import { createMockProvider } from "./providers/mock-provider.mjs";
import { createReconstructionProvider, isConfigured } from "./providers/reconstruction-provider.mjs";

const port = Number(process.env.PORT || 8787);
const origin = process.env.PETTWIN_ALLOWED_ORIGIN || "*";

// Use the real production 3D provider when PETTWIN_3D_PROVIDER_URL is set,
// otherwise fall back to the in-memory mock so the static UI keeps working.
const provider = isConfigured ? createReconstructionProvider() : createMockProvider();
const providerName = isConfigured ? "reconstruction" : "mock";

function send(response, status, body) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type"
  });
  response.end(JSON.stringify(body));
}

async function readJson(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 1_000_000) throw new Error("Request metadata is too large");
  }
  return body ? JSON.parse(body) : {};
}

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") return send(response, 204, {});
  if (request.method === "GET" && request.url === "/api/v1/health") return send(response, 200, { ok: true, provider: providerName });
  if (request.method === "POST" && request.url === "/api/v1/reconstruction/jobs") {
    try {
      const input = await readJson(request);
      if (!Array.isArray(input.assets) || input.assets.length < 4) return send(response, 422, { error: "At least four signed asset URLs are required" });
      return send(response, 202, await provider.createJob(input));
    } catch (error) {
      return send(response, 400, { error: error.message });
    }
  }
  const match = request.url?.match(/^\/api\/v1\/reconstruction\/jobs\/([a-zA-Z0-9-]+)$/);
  if (request.method === "GET" && match) {
    try {
      const job = await provider.getJob(match[1]);
      return job ? send(response, 200, job) : send(response, 404, { error: "Job not found" });
    } catch (error) {
      return send(response, 502, { error: error.message });
    }
  }
  return send(response, 404, { error: "Not found" });
});

server.listen(port, () => console.log(`PetTwin reconstruction API listening on http://localhost:${port} (provider: ${providerName})`));
