/** Public GitHub identity for Violet Echoes — used by git activity feed. */

export const githubRepo = {
  owner: "grimnirthe",
  name: "VioletEchoes",
  branch: "main",
  htmlUrl: "https://github.com/grimnirthe/VioletEchoes",
  commitsApi: "https://api.github.com/repos/grimnirthe/VioletEchoes/commits",
} as const;

export type RepoCommit = {
  sha: string;
  shortSha: string;
  message: string;
  title: string;
  author: string;
  date: string;
  url: string;
};
