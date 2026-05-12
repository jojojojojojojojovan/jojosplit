import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname)
const buildDir = path.join(projectRoot, "dist")
const targetDir = path.resolve(projectRoot, "..", "src", "main", "resources", "static")

if (!fs.existsSync(buildDir)) {
  console.error("Build directory does not exist. Run `npm run build` first.")
  process.exit(1)
}

for (const entry of fs.readdirSync(targetDir)) {
  if (entry === ".gitkeep") continue
  const fullPath = path.join(targetDir, entry)
  fs.rmSync(fullPath, { recursive: true, force: true })
}

fs.cpSync(buildDir, targetDir, { recursive: true })
console.log(`Copied build from ${buildDir} to ${targetDir}`)
