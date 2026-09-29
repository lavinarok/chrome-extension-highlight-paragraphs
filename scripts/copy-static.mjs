import {
  copyFile,
  mkdir
} from "node:fs/promises";

await mkdir("dist", {
  recursive: true
});

await mkdir("dist/popup", {
  recursive: true
});

await copyFile(
  "src/manifest.json",
  "dist/manifest.json"
);

await copyFile(
  "src/popup/popup.html",
  "dist/popup/popup.html"
);

await copyFile(
  "src/popup/popup.css",
  "dist/popup/popup.css"
);
