import { createFileRoute } from "@tanstack/react-router";
import {
  clientIp,
  hearthKeyed,
  hearthModel,
  rateLimit,
  speakHearth,
} from "@/lib/hearth.server";
import type { HearthTurn } from "@/lib/hearth";

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

export const Route = createFileRoute("/api/hearth")({
  server: {
    handlers: {
      GET: async () => {
        const keyed = hearthKeyed();
        return new Response(
          JSON.stringify(
            {
              html: "/hearth",
              thisApi: "/api/hearth",
              keyed,
              model: keyed ? hearthModel() : null,
              note: keyed
                ? "POST { messages: [{ role, content }] }. Retrieve-first. Hung canon only."
                : "Mouth is not keyed. POST still returns wall answers from hung canon.",
            },
            null,
            2,
          ),
          { headers: jsonHeaders },
        );
      },
      POST: async ({ request }) => {
        const limited = rateLimit(clientIp(request));
        if (!limited.ok) {
          return new Response(
            JSON.stringify({
              error: "rate_limited",
              answer: `Energy is a first-class constraint. Sit for about ${limited.retryMin} min, then knock again.`,
            }),
            { status: 429, headers: jsonHeaders },
          );
        }

        let body: { messages?: HearthTurn[] } = {};
        try {
          body = (await request.json()) as { messages?: HearthTurn[] };
        } catch {
          return new Response(JSON.stringify({ error: "bad_json" }), {
            status: 400,
            headers: jsonHeaders,
          });
        }

        const messages = Array.isArray(body.messages) ? body.messages : [];
        if (!messages.length) {
          return new Response(
            JSON.stringify({ error: "empty", answer: "Say something hung." }),
            { status: 400, headers: jsonHeaders },
          );
        }

        try {
          const reply = await speakHearth(messages);
          return new Response(JSON.stringify(reply), { headers: jsonHeaders });
        } catch (err) {
          console.error("hearth", err);
          return new Response(
            JSON.stringify({
              error: "hearth_down",
              answer: "The hearth hiccuped. Try Ask the Nexus, or knock again.",
            }),
            { status: 502, headers: jsonHeaders },
          );
        }
      },
    },
  },
});
