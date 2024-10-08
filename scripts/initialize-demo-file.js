import { normalizePath } from "vite";
import fs from "fs";
import { log } from "./log.js";

// Adds the svelte:options customElement tag to svelte component on creation
const path = normalizePath(process.argv[2]);

// Read the content of the file
const fileContent = fs.readFileSync(path, "utf-8");

let group = path.split("/components/")[1].split("/")[0];
let filename = path.split("/").slice(-1)[0];
if (group === filename) group = null;

// Check if the file is empty
if (fileContent.trim().length === 0) {
	log(`Initializing .demo.js file`);
	// If the file is empty, add the svelte:options tag with prefix and kebab cased name
	fs.writeFileSync(
		path,
		`export const demo = {${group ? `\n	group: "${group}",` : ""}
    description: "",
    props: {},
    slots: {}
};

export default demo;`
	);
}
