// scripts/deploy.js
const { execSync, spawnSync } = require("node:child_process");

function gitGet(key) {
  try {
    return execSync(`git config --get ${key}`, { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "";
  }
}

const name = gitGet("user.name");
const email = gitGet("user.email");

if (!name || !email) {
  console.error("Missing git identity. Please set:\n  git config --global user.name \"...\"\n  git config --global user.email \"...\"");
  process.exit(1);
}

const env = {
  ...process.env,
  USE_SSH: "true",
  GIT_AUTHOR_NAME: name,
  GIT_AUTHOR_EMAIL: email,
  GIT_COMMITTER_NAME: name,
  GIT_COMMITTER_EMAIL: email,
};

const r = spawnSync("npx", ["docusaurus", "deploy"], { stdio: "inherit", env });
process.exit(r.status ?? 1);
