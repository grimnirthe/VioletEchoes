import { createFileRoute } from "@tanstack/react-router";
import { askNexus } from "@/lib/ask";
import { HASHTAG, siteMeta } from "@/data/world";

export const Route = createFileRoute("/api/ask")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const q = (url.searchParams.get("q") ?? "").trim();
        if (!q) {
          return new Response(
            JSON.stringify(
              {
                meta: {
                  name: siteMeta.name,
                  hashtag: HASHTAG,
                  title: "Ask the Nexus",
                  html: "/ask",
                  thisApi: "/api/ask?q=",
                  note: "Pass q. Answers from hung canon only. No invented streets.",
                },
              },
              null,
              2,
            ),
            {
              headers: {
                "content-type": "application/json; charset=utf-8",
                "cache-control": "public, max-age=60",
                "access-control-allow-origin": "*",
              },
            },
          );
        }
        const result = askNexus(q);
        return new Response(JSON.stringify({ meta: { html: "/ask" }, ...result }, null, 2), {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "public, max-age=60",
            "access-control-allow-origin": "*",
          },
        });
      },
    },
  },
});
