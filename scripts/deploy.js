// scripts/deploy.js
const { execSync, spawnSync } = require("node:child_process");
const path = require("node:path");
const fs = require("node:fs");

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

// Build first so we have a build/ directory to inject preview/ into
console.log("[deploy] Building site...");
const buildResult = spawnSync("npx", ["docusaurus", "build"], { stdio: "inherit" });
if (buildResult.status !== 0) {
  console.error("[deploy] Build failed");
  process.exit(buildResult.status ?? 1);
}

// Preserve preview/ from gh-pages by cloning it into build/
const repoUrl = "git@github.com:Abfinance-exchange/usa-docs.git";
const tmpDir = path.join(require("node:os").tmpdir(), "usa-docs-preview-" + Date.now());
try {
  console.log("[deploy] Fetching preview/ from gh-pages...");
  execSync(`git clone --depth 1 --branch gh-pages --filter=blob:none --sparse "${repoUrl}" "${tmpDir}"`, { stdio: "pipe" });
  execSync("git sparse-checkout set preview", { cwd: tmpDir, stdio: "pipe" });
  const srcPreview = path.join(tmpDir, "preview");
  const destPreview = path.join(__dirname, "..", "build", "preview");
  if (fs.existsSync(srcPreview)) {
    execSync(`cp -r "${srcPreview}" "${destPreview}"`);
    console.log("[deploy] preview/ restored into build/");
  } else {
    console.log("[deploy] No preview/ found on gh-pages, skipping");
  }
} catch (e) {
  console.log("[deploy] Could not fetch preview/ from gh-pages (first deploy?), skipping");
} finally {
  execSync(`rm -rf "${tmpDir}"`, { stdio: "ignore" });
}

// Deploy with --skip-build since we already built
const env = {
  ...process.env,
  USE_SSH: "true",
  GIT_AUTHOR_NAME: name,
  GIT_AUTHOR_EMAIL: email,
  GIT_COMMITTER_NAME: name,
  GIT_COMMITTER_EMAIL: email,
};

const r = spawnSync("npx", ["docusaurus", "deploy", "--skip-build"], { stdio: "inherit", env });
process.exit(r.status ?? 1);
