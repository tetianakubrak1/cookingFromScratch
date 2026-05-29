const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "www");
const files = ["index.html", "styles.css", "app.js"];
const directories = ["assets"];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

for (const directory of directories) {
  const source = path.join(root, directory);
  if (fs.existsSync(source)) {
    fs.cpSync(source, path.join(outDir, directory), { recursive: true });
  }
}

console.log(`Built web app into ${path.relative(root, outDir)}`);
