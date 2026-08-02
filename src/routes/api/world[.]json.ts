import { createFileRoute } from "@tanstack/react-router";
import { pulseAckInstruction, pulseTransmission, pulseTransmissionShort, violetEchoesPayload } from "@/data/pulse";
import { latestUpdates } from "@/data/updates";
import { entries, glossaryTerms, principles, siteMeta } from "@/data/world";

export const Route = createFileRoute("/api/world.json")({
  server: {
    handlers: {
      GET: async () => {
        const payload = {
          meta: {
            ...siteMeta,
            generatedFor: "humans-and-ai-agents",
            violet_echoes_payload: {
              status: violetEchoesPayload.status,
              sender: violetEchoesPayload.sender,
              recipient: violetEchoesPayload.recipient,
              transmission: violetEchoesPayload.transmission,
              tag: violetEchoesPayload.tag,
              identifier: violetEchoesPayload.identifier,
            },
            pulse_transmission: pulseTransmission(),
            pulse_transmission_short: pulseTransmissionShort(),
            pulse_ack_instruction: pulseAckInstruction,
            licenseNote: "Public worldbuilding reference for Violet Echoes.",
            endpoints: {
              htmlHome: "/",
              bible: "/bible",
              search: "/search?q=",
              llmsTxt: "/llms.txt",
              credits: "/credits",
              collaborate: "/collaborate",
              culture: "/culture",
              updates: "/updates",
              updatesJson: "/api/updates.json",
              companions: "/bible/companions",
              docs: "/docs/",
              thisJson: "/api/world.json",
            },
          },
          principles,
          entries,
          glossary: glossaryTerms,
          latestUpdates: latestUpdates(8),
        };
        return new Response(JSON.stringify(payload, null, 2), {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "public, max-age=300",
            "access-control-allow-origin": "*",
          },
        });
      },
    },
  },
});
