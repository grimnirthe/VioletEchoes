import { createFileRoute } from "@tanstack/react-router";
import { githubRepo, type RepoCommit } from "@/data/repo";

export const Route = createFileRoute("/api/commits.json")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const perPage = Math.min(
          30,
          Math.max(1, Number(url.searchParams.get("per_page") || "15") || 15),
        );

        try {
          const res = await fetch(
            `${githubRepo.commitsApi}?per_page=${perPage}&sha=${githubRepo.branch}`,
            {
              headers: {
                Accept: "application/vnd.github+json",
                "User-Agent": "VioletEchoes-CityUpdates",
              },
            },
          );

          if (!res.ok) {
            return new Response(
              JSON.stringify({
                error: "github_unavailable",
                status: res.status,
                commits: [] as RepoCommit[],
                meta: { repo: githubRepo.htmlUrl },
              }),
              {
                status: 200,
                headers: {
                  "content-type": "application/json; charset=utf-8",
                  "cache-control": "public, max-age=60",
                  "access-control-allow-origin": "*",
                },
              },
            );
          }

          const raw = (await res.json()) as Array<{
            sha: string;
            html_url: string;
            commit: {
              message: string;
              author: { name?: string; date?: string } | null;
            };
            author: { login?: string } | null;
          }>;

          const commits: RepoCommit[] = raw.map((c) => {
            const message = c.commit?.message ?? "";
            const title = message.split("\n")[0]?.trim() || c.sha.slice(0, 7);
            return {
              sha: c.sha,
              shortSha: c.sha.slice(0, 7),
              message,
              title,
              author:
                c.commit?.author?.name || c.author?.login || "unknown",
              date: c.commit?.author?.date || "",
              url: c.html_url,
            };
          });

          return new Response(
            JSON.stringify(
              {
                meta: {
                  repo: githubRepo.htmlUrl,
                  branch: githubRepo.branch,
                  note: "Raw git activity — not hearth-accepted news. Prefer /updates and /api/updates.json for canon landings.",
                },
                commits,
              },
              null,
              2,
            ),
            {
              headers: {
                "content-type": "application/json; charset=utf-8",
                "cache-control": "public, max-age=120",
                "access-control-allow-origin": "*",
              },
            },
          );
        } catch (err) {
          return new Response(
            JSON.stringify({
              error: "fetch_failed",
              message: err instanceof Error ? err.message : "unknown",
              commits: [],
              meta: { repo: githubRepo.htmlUrl },
            }),
            {
              status: 200,
              headers: {
                "content-type": "application/json; charset=utf-8",
                "cache-control": "public, max-age=30",
                "access-control-allow-origin": "*",
              },
            },
          );
        }
      },
    },
  },
});
