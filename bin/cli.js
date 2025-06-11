#!/usr/bin/env node

import { execSync } from "child_process"
import path from "path"
import fs from "fs-extra"
import chalk from "chalk"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectName = process.argv[2]

if (!projectName) {
  console.error("❌ Please specify a project name:")
  console.log("  npx create-my-express-app my-app")
  process.exit(1)
}

const targetPath = path.join(process.cwd(), projectName)
const templatePath = path.join(__dirname, "../template")

if (fs.existsSync(targetPath)) {
  console.error(`❌ Directory ${projectName} already exists!`)
  process.exit(1)
}

console.log(chalk.cyan("📦 Creating project at:"), chalk.green(targetPath))

fs.copySync(templatePath, targetPath)

console.log(chalk.cyan("📦 Installing dependencies..."))
execSync("npm install", { cwd: targetPath, stdio: "inherit" })

console.log(chalk.green("✅ Done!"))
console.log()
console.log(`To start developing:`)
console.log(chalk.cyan(`  cd ${projectName}`))
console.log(chalk.cyan(`  npm run dev`))
