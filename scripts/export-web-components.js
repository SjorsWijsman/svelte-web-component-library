// This script automatically adds the .wc.svelte exports to the packages/lib/web-components/index.js file

import fs from "fs";
import path from "path";
import { log, error } from "./log.js";
import "dotenv/config";

const componentsDirectory = "./packages/lib/web-components";
const indexFilePath = "./packages/lib/index.js";

const bundleComponents = JSON.parse(process.env.BUNDLE_COMPONENTS);

// Read the files in the components directory
fs.readdir(componentsDirectory, (err, files) => {
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
        if (bundleComponents) {
            return `export { default as ${componentName} } from "./web-components/${file}";`;
        } else {
            return `import("./web-components/${file}");`;
        }
    });

    // Additional data
    // Add your data here
    exportStatements.unshift(`import "./style/global.scss";`);
    exportStatements.unshift(
        "// These exports are automatically added while running the dev server or before a build"
    );

    log(`Updating .wc exports...`);

    // Write export statements to the index file
    const content = exportStatements.join("\n");
    fs.writeFile(indexFilePath, content, (err) => {
        if (err) {
            error("Error writing to index file", err);
            return;
        }
        log("Library index file updated successfully.");
    });
});
