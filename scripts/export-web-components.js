// This script automatically adds the .wc.svelte exports to the packages/lib/web-components/index.js file
import fs from "fs";
import path from "path";
import { log, error } from "./log.js";
import { normalizePath } from "vite";
import "dotenv/config";

const bundleComponents = JSON.parse(process.env.BUNDLE_COMPONENTS);
const webComponentsPath = "./packages/lib/web-components";

// Read the files and directories in the components directory recursively
fs.readdir(webComponentsPath, { recursive: true }, (err, files) => {
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

        // Calculate the relative path of the component file from the web-components directory
        const relativeFilePath = path.relative(webComponentsPath, file);

        // Construct the correct relative import/export path
        const exportPath = normalizePath(relativeFilePath).replace(
            "../../.",
            ""
        );

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
    fs.writeFile(
        "./packages/lib/web-components/index.js",
        content,
        { flag: "w" },
        (err) => {
            if (err) {
                error("Error writing to index file", err);
                return;
            }
            log("Library index file updated successfully.");
        }
    );
});
