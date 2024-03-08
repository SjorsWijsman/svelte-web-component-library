import { normalizePath } from "vite";
import fs from "fs";
import "dotenv/config";
import { log } from "./log.js";

const prefix = process.env.COMPONENT_PREFIX;

if (prefix) {
    // Adds the svelte:options customElement tag to svelte component on creation
    const path = normalizePath(process.argv[2]);
    const fileName = path.split("/").slice(-1)[0].replace(".wc.svelte", "");

    // Read the content of the file
    const fileContent = fs.readFileSync(path, "utf-8");

    // Check if the file is empty
    if (fileContent.trim().length === 0) {
        log(`Initializing .wc.svelte file`);
        // If the file is empty, add the svelte:options tag
        fs.writeFileSync(
            path,
            `<svelte:options customElement="${prefix}-${fileName.toLocaleLowerCase()}" />\n`
        );
    }
}
