import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "outputs");
await fs.mkdir(outputDir, { recursive: true });

const targetUrl = process.env.TARGET_URL || "http://127.0.0.1:5173";
const referenceUrl = "https://gigi.co";
const viewports = [
  { name: "desktop", width: 1280, height: 720 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const viewport of viewports) {
  for (const [kind, url] of [
    ["reference", referenceUrl],
    ["local", targetUrl],
  ]) {
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForLoadState("load", { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(5000);
    await page.screenshot({
      path: path.join(outputDir, `gigi-${kind}-${viewport.name}.png`),
      fullPage: false,
    });
    await page.close();
  }
}

await browser.close();
