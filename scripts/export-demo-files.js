// This script automatically adds .demo.js exports
import fs from "fs";
import path from "path";
import { log, error } from "./log.js";
import { normalizePath } from "vite";

const wcDir = normalizePath("../web-components/lib/components");

// Read the files and directories in the components directory recursively
fs.readdir(wcDir, { recursive: true }, (err, files) => {
	if (err) {
		error("Error reading directory", err);
		return;
	}

	// Select demo files
	const components = files.filter((file) => file.endsWith(".demo.js") && !file.startsWith("."));

	// Generate export statements for each Svelte component
	const exportStatements = components.map((file) => {
		const componentName = path.basename(file, ".demo.js");

		// Construct the correct relative import/export path
		const exportPath = normalizePath(`${file}`);

		return `export { default as ${componentName} } from "./${exportPath}";`;
	});

	exportStatements.unshift(
		"// !!!\n// These exports are automatically generated while running the dev server or before a build.\n// Do not modify manually.\n// !!!"
	);

	log(`Updating .demo exports...`);

	// Write export statements to the index file
	const content = exportStatements.join("\n");
	fs.writeFile(`${wcDir}/demo.js`, content, { flag: "w" }, (err) => {
		if (err) {
			error("Error writing to demo file", err);
			return;
		}
		log("Library demo file updated successfully.");
	});
});
