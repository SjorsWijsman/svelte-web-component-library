// This script automatically adds .wc.svelte exports
import fs from "fs";
import path from "path";
import { log, error } from "./log.js";
import { normalizePath } from "vite";
import config from "../web-components/web-components.config.js";

const wcDir = normalizePath("../web-components/lib/components");

// Read the files and directories in the components directory recursively
fs.readdir(wcDir, { recursive: true }, (err, files) => {
	if (err) {
		error("Error reading directory", err);
		return;
	}

	// Select web-component svelte files
	const components = files.filter((file) => file.endsWith(".wc.svelte") && !file.startsWith("."));
	// Generate export statements for each Svelte component
	const exportStatements = components.map((file) => {
		const componentName = path.basename(file, ".wc.svelte");

		// Construct the correct relative import/export path
		const exportPath = normalizePath(`${file}`);

		if (config.bundleComponents) {
			return `export { default as ${componentName} } from "./${exportPath}";`;
		} else {
			return `import("./${exportPath}");`;
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
