
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.join(process.cwd(), "public/images");
const outputDir = path.join(inputDir, "optimized");

await fs.mkdir(outputDir, { recursive: true });

const files = await fs.readdir(inputDir);

let originalTotal = 0;
let optimizedTotal = 0;

for (const file of files) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  if (/^(logo|logo2|favicon)/i.test(file)) continue;

  const inputPath = path.join(inputDir, file);
  const outputName = `${path.parse(file).name}.webp`;
  const outputPath = path.join(outputDir, outputName);

  const originalSize = (await fs.stat(inputPath)).size;

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1920,
      height: 1600,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 82, effort: 5 })
    .toFile(outputPath);

  const optimizedSize = (await fs.stat(outputPath)).size;

  originalTotal += originalSize;
  optimizedTotal += optimizedSize;

  console.log(
    `${file}: ${(originalSize / 1048576).toFixed(2)} MB → ${(optimizedSize / 1048576).toFixed(2)} MB`
  );
}

console.log("\n--- PODSUMOWANIE ---");
console.log(`Oryginały: ${(originalTotal / 1048576).toFixed(2)} MB`);
console.log(`WebP: ${(optimizedTotal / 1048576).toFixed(2)} MB`);
console.log(
  `Oszczędność: ${((1 - optimizedTotal / originalTotal) * 100).toFixed(1)}%`
);
console.log(`\nGotowe pliki: ${outputDir}`);
