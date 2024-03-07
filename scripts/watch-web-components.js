// Watch changes inside packages/lib/web-components & run export-web-components to automatically bundle

import { exec } from "child_process";
import { normalize } from "path";
import { log, error } from "./log.js";

export default function watchWebComponents() {
    return {
        name: "watch-web-components",
        apply: "serve",
        configureServer(server) {
            const wcDir = normalize("packages/lib/web-components");

            // Watch for changes in the component directory
            server.watcher.add(wcDir);

            // Add a handler for file changes
            server.watcher.on("all", (event, filePath) => {
                const path = normalize(filePath);
                // Execute the script only if the changed file is in the component directory
                if (path.startsWith(wcDir) && path.endsWith(".wc.svelte")) {
                    // Initialize .wc.file on add
                    if (event === "add") {
                        log(`Initializing .wc.svelte file`);
                        runScript(
                            `node ./scripts/initialize-web-component.js ${filePath}`
                        );
                    }
                    // Update exports on add or remove
                    if (["add", "unlink"].includes(event)) {
                        log(`Updating .wc exports...`);
                        runScript("node ./scripts/export-web-components.js");
                    }
                }
            });

            // Helper to run the script
            function runScript(script) {
                exec(script, (err, stdout, stderr) => {
                    if (err) {
                        error("Error executing script", err);
                        return;
                    }
                    if (stdout) {
                        console.log(`${stdout}`);
                    }
                    if (stderr) {
                        console.error(`${stderr}`);
                    }
                });
            }

            log(`Watching ${wcDir} for component changes...`);
        },
    };
}
