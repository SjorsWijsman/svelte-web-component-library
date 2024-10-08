import { normalizePath } from "vite";
import fs from "fs";
import { log } from "./log.js";
import config from "../web-components/web-components.config.js";

if (config.prefix) {
	// Adds the svelte:options customElement tag to svelte component on creation
	const path = normalizePath(process.argv[2]);
	const fileName = path.split("/").slice(-1)[0].replace(".wc.svelte", "");

	// Read the content of the file
	const fileContent = fs.readFileSync(path, "utf-8");

	// Check if the file is empty
	if (fileContent.trim().length === 0) {
		log(`Initializing .wc.svelte file`);
		// If the file is empty, add the svelte:options tag with prefix and kebab cased name
		fs.writeFileSync(
			path,
			`<svelte:options customElement="${config.prefix}-${fileName
				.replace(/([a-z])([A-Z])/g, "$1-$2")
				.toLocaleLowerCase()}" />\n`
		);
	}
}
