// This script automatically adds the .wc.svelte exports to the packages/lib/web-components/index.js file
import fs from "fs";
import path from "path";
import { log, error } from "./log.js";
import { normalizePath } from "vite";
import "dotenv/config";

const bundleComponents = JSON.parse(process.env.BUNDLE_COMPONENTS ?? false);
const wcDir = normalizePath("../web-components/lib");

// Read the files and directories in the components directory recursively
fs.readdir(wcDir, { recursive: true }, (err, files) => {
    if (err) {
        error("Error reading directory", err);
        return;
    }

    // Filter out non-Svelte files
    const components = files.filter(
        (file) => file.endsWith(".wc.svelte") && !file.startsWith(".")
    );

    // Generate export statements for each Svelte component
    const exportStatements = components.map((file) => {
        const componentName = path.basename(file, ".wc.svelte");

        // Construct the correct relative import/export path
        const exportPath = `./${file}`;

        if (bundleComponents) {
            return `export { default as ${componentName} } from "${exportPath}";`;
        } else {
            return `import("${exportPath}");`;
        }
    });

    exportStatements.unshift(
        "// !!!\n// These exports are automatically generated while running the dev server or before a build.\n// Do not modify manually.\n// !!!"
    );

    log(`Updating .wc exports...`);

    // Write export statements to the index file
    const content = exportStatements.join("\n");
    fs.writeFile(`${wcDir}/index.js`, content, { flag: "w" }, (err) => {
        if (err) {
            error("Error writing to index file", err);
            return;
        }
        log("Library index file updated successfully.");
    });
});
