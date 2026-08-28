import { createFileRoute } from "@tanstack/react-router";
import { worldJsonResponse } from "@/lib/world-json";

/** Guess path — same body as /api/world.json. Crawlers that try /world.json like /robots.txt land here. */
export const Route = createFileRoute("/world.json")({
  server: {
    handlers: {
      GET: async () => worldJsonResponse(),
    },
  },
});
