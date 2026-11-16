// Converts the raw AYN screenshots (extracted from the provided PDF) into
// trimmed, web-optimized WebP files. Run once: `npm run optimize-images`.
import sharp from "sharp";
import { existsSync, unlinkSync } from "node:fs";

const dir = "public/ayn";
const files = [
  ["raw-1.jpg", "01-landing.webp"],
  ["raw-3.jpg", "02-about.webp"],
  ["raw-4.jpg", "03-street-analysis.webp"],
  ["raw-5.jpg", "04-business-form.webp"],
  ["raw-6.jpg", "05-results.webp"],
  ["raw-7.jpg", "06-interactive-map.webp"],
  ["raw-2.jpg", "07-neighborhoods.webp"],
];

for (const [src, out] of files) {
  const input = `${dir}/${src}`;
  if (!existsSync(input)) continue;
  const meta = await sharp(input).metadata();
  // Trim a few pixels from the edges to remove capture artifacts.
  const inset = 6;
  const info = await sharp(input)
    .extract({ left: 0, top: 2, width: meta.width - inset, height: meta.height - inset })
    .webp({ quality: 86, effort: 6 })
    .toFile(`${dir}/${out}`);
  console.log(out, info.width, "x", info.height, Math.round(info.size / 1024) + "KB");
  unlinkSync(input);
}
