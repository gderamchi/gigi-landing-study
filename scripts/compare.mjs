import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const root = process.cwd();
const outputDir = path.join(root, "outputs");
const viewports = ["desktop", "mobile"];
const summary = [];

for (const viewport of viewports) {
  const referencePath = path.join(outputDir, `gigi-reference-${viewport}.png`);
  const localPath = path.join(outputDir, `gigi-local-${viewport}.png`);
  const diffPath = path.join(outputDir, `gigi-diff-${viewport}.png`);

  const reference = PNG.sync.read(fs.readFileSync(referencePath));
  const local = PNG.sync.read(fs.readFileSync(localPath));

  if (reference.width !== local.width || reference.height !== local.height) {
    throw new Error(
      `${viewport}: screenshot dimensions differ (${reference.width}x${reference.height} vs ${local.width}x${local.height})`,
    );
  }

  const diff = new PNG({ width: reference.width, height: reference.height });
  const mismatched = pixelmatch(reference.data, local.data, diff.data, reference.width, reference.height, {
    threshold: 0.1,
  });
  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  const total = reference.width * reference.height;
  summary.push({
    viewport,
    mismatched,
    total,
    percent: Number(((mismatched / total) * 100).toFixed(2)),
    diffPath,
  });
}

fs.writeFileSync(path.join(outputDir, "gigi-compare.json"), JSON.stringify(summary, null, 2));
console.table(summary.map(({ viewport, mismatched, total, percent }) => ({ viewport, mismatched, total, percent })));
