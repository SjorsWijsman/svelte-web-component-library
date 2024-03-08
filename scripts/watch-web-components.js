// Watch changes inside packages/lib/web-components & run export-web-components to automatically bundle
import { runScript } from "./run-script";
import { normalize } from "path";
import { log } from "./log.js";
import chokidar from "chokidar";

export default function watchWebComponents() {
    return {
        name: "watch-web-components",
        apply: "serve",
        configureServer(server) {
            const wcDir = normalize("packages/lib/web-components");

            // Watch for changes in the component directory
            chokidar
                .watch(wcDir, {
                    persistent: false,
                    ignoreInitial: true,
                })
                .on("ready", () => {
                    // Initialize index.js exports
                    runScript("node ./scripts/export-web-components.js");
                })
                .on("all", (event, filePath) => {
                    const path = normalize(filePath);

                    // Execute the script only if the changed file is in the component directory
                    if (path.startsWith(wcDir) && path.endsWith(".wc.svelte")) {
                        // Initialize .wc.file on add
                        if (event === "add") {
                            runScript(
                                `node ./scripts/initialize-web-component.js ${filePath}`
                            );
                        }
                        // Update exports on add or remove
                        if (["add", "unlink"].includes(event)) {
                            runScript(
                                "node ./scripts/export-web-components.js"
                            );
                        }
                    }
                });

            log(`Watching ${wcDir} for component changes...`);
        },
    };
}
