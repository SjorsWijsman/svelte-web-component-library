// Watch changes inside packages/lib/src & run export-web-components to automatically bundle

import { exec } from "child_process";
import { normalize } from "path";
import { log } from "./log.js";

export default function watchWebComponents() {
    return {
        name: "watch-web-components",
        apply: "serve",
        configureServer(server) {
            const srcDir = normalize("packages/lib/src");

            // Watch for changes in the src directory
            server.watcher.add(srcDir);

            // Add a handler for file changes
            server.watcher.on("all", (event, filePath) => {
                const normalizedFilePath = normalize(filePath);
                if (normalizedFilePath.startsWith(srcDir)) {
                    // Execute the script only if the changed file is in the src directory
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

            log(`Watching ${srcDir} for component changes...`);
        },
    };
}
