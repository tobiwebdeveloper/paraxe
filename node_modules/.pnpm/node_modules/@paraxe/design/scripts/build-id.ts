/**
 * lobaBuildId — Vite plugin that writes a build provenance file after each build.
 *
 * Produces `dist/.loba-build.json` with:
 *   - name / version (from package.json)
 *   - buildTimestamp (ISO)
 *   - gitSha (short HEAD, if in a git repo)
 *   - sourceHash (hash of src/ tree, used to detect stale dist)
 *
 * This gives `loba sync --verify` and future `loba doctor` a deterministic way
 * to answer "is this dist newer than the source it was built from?".
 */
import { execSync } from "node:child_process"
import { createHash } from "node:crypto"
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { join, relative } from "node:path"
import type { Plugin } from "vite"

interface BuildMeta {
  name: string
  version: string
  buildTimestamp: string
  gitSha: string | null
  sourceHash: string
  files: string[]
}

function getGitSha(): string | null {
  try {
    const out = execSync("git rev-parse --short HEAD", {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
    return out.toString().trim() || null
  } catch {
    return null
  }
}

function hashTree(dir: string, acc: ReturnType<typeof createHash>): void {
  if (!existsSync(dir)) return
  const entries = readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name)
  )
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist") continue
      hashTree(full, acc)
    } else if (entry.isFile()) {
      acc.update(relative(process.cwd(), full))
      acc.update(readFileSync(full))
    }
  }
}

function sourceHash(srcDir: string): string {
  const hash = createHash("sha256")
  hashTree(srcDir, hash)
  return hash.digest("hex").slice(0, 16)
}

export function lobaBuildId(): Plugin {
  let pkg = { name: "unknown", version: "0.0.0" }
  let initialSourceHash: string | null = null

  return {
    name: "loba-build-id",
    configResolved(config) {
      try {
        pkg = JSON.parse(readFileSync(join(config.root, "package.json"), "utf8")) as typeof pkg
      } catch {
        // keep defaults
      }
      initialSourceHash = sourceHash(join(config.root, "src"))
    },
    closeBundle() {
      const outDir = join(process.cwd(), "dist")
      if (!existsSync(outDir)) return

      const files = readdirSync(outDir, { recursive: true })
        .map((f) => String(f))
        .filter((f) => f !== ".loba-build.json")
        .sort()

      const meta: BuildMeta = {
        name: pkg.name,
        version: pkg.version,
        buildTimestamp: new Date().toISOString(),
        gitSha: getGitSha(),
        sourceHash: initialSourceHash || "",
        files,
      }

      writeFileSync(
        join(outDir, ".loba-build.json"),
        JSON.stringify(meta, null, 2),
        "utf8"
      )
    },
  }
}
