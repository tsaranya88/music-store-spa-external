/**
 * This function creates a file called "version-manifest.json" which maps a script name to
 * a script name with version appended.
 *
 * This provides the ability for a client to lookup the current version of a script, so
 * that when a new version is available, client can fetch new version, but otherwise fallback
 * on cached version.
 *
 * Usage: "node make-manifest.js <output directory> <base script name> <version>".
 */

const fs = require("fs");

(async function build() {
  if (process.argv.length < 4) {
    console.log(
      'Error: Missing arguments. Use format: "node make-manifest.js <path to js files> <version-manifest.js output path>".'
    );
    process.exit(1);
  }

  let inPath = `.${addLeadingAndTrailingSlash(process.argv[2])}`;
  let outPath = `.${addLeadingAndTrailingSlash(process.argv[3])}`;

  let filenames = fs.readdirSync(inPath).filter((filename) => {
    return filename.endsWith(".js");
  });

  let mappings = filenames.map((filename) => {
    let extension = filename.split(".").reverse()[0];
    let scriptNameBase = filename.split("__")[0];
    return `"${scriptNameBase}.${extension}": "${filename}"`;
  });

  let jsonString = `{${mappings.join(",")}}`;

  console.log(
    `Writing version-manifest.json to path: ${outPath}version-manifest.json`
  );
  await fs.writeFile(`${outPath}version-manifest.json`, jsonString, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
})();

function addLeadingAndTrailingSlash(path) {
  return `${path[0] !== "/" ? "/" : ""}${path}${
    path[path.length - 1] !== "/" ? "/" : ""
  }`;
}
