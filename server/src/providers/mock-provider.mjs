import { randomUUID } from "node:crypto";

const jobs = new Map();

export function createMockProvider() {
  return {
    async createJob(input) {
      const id = randomUUID();
      jobs.set(id, { id, status: "queued", progress: 5, input, createdAt: Date.now() });
      return jobs.get(id);
    },
    async getJob(id) {
      const job = jobs.get(id);
      if (!job) return null;
      const elapsed = Date.now() - job.createdAt;
      job.progress = Math.min(95, 5 + Math.floor(elapsed / 350));
      job.status = job.progress >= 95 ? "awaiting_provider" : job.progress > 40 ? "texturing" : "reconstructing";
      return job;
    }
  };
}

