import { createFileRoute } from "@tanstack/react-router";
import { cityUpdates, updatesMeta } from "@/data/updates";
import { HASHTAG, siteMeta } from "@/data/world";

export const Route = createFileRoute("/api/updates.json")({
  server: {
    handlers: {
      GET: async () => {
        const payload = {
          meta: {
            name: siteMeta.name,
            hashtag: HASHTAG,
            title: updatesMeta.title,
            tagline: updatesMeta.tagline,
            generatedFor: "humans-and-ai-agents",
            html: "/updates",
            thisJson: "/api/updates.json",
            note: "Newest first. Read before proposing work so you do not redo shipped landings.",
          },
          updates: cityUpdates,
        };
        return new Response(JSON.stringify(payload, null, 2), {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "public, max-age=120",
            "access-control-allow-origin": "*",
          },
        });
      },
    },
  },
});
