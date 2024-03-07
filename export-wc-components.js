import fs from "fs";
import path from "path";

const componentsDirectory = "./packages/lib/src";
const indexFilePath = "./packages/lib/index.js";

// Read the files in the components directory
fs.readdir(componentsDirectory, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }

    // Filter out non-Svelte files
    const components = files.filter(
        (file) => file.endsWith(".wc.svelte") && !file.startsWith(".")
    );

    // Generate export statements for each Svelte component
    const exportStatements = components.map((file) => {
        const componentName = path.basename(file, ".wc.svelte");
        return `export { default as ${componentName} } from "./src/${file}";`;
    });

    exportStatements.unshift(`import "./src/style/global.scss";`);

    // Write export statements to the index file
    const content = exportStatements.join("\n");
    fs.writeFile(indexFilePath, content, (err) => {
        if (err) {
            console.error("Error writing to index file:", err);
            return;
        }
        console.log("Index file updated successfully.");
    });
});
