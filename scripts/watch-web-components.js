// Watch changes inside packages/lib/web-components & run export-web-components to automatically bundle

import { exec } from "child_process";
import { normalize } from "path";
import { log } from "./log.js";

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
                const normalizedFilePath = normalize(filePath);
                if (normalizedFilePath.startsWith(wcDir)) {
                    // Execute the script only if the changed file is in the component directory
                    runScript("node ./scripts/export-web-components.js");
                }
            });

            // Function to run the script
            function runScript(script) {
                log(`Updating .wc exports`);
                exec(script, (error, stdout, stderr) => {
                    if (error) {
                        error("Error executing script", error);
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
