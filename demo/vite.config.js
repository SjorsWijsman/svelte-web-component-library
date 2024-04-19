import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import watchWebComponents from "../scripts/watch-web-components.js";

export default defineConfig({
	plugins: [sveltekit(), fullReloadOnWebComponentChange(), watchWebComponents()]
});

function fullReloadOnWebComponentChange() {
	return {
		name: "custom-watcher",
		configureServer(server) {
			server.watcher.add("$wc/lib");
			server.watcher.on("add", onWatchChange);
			server.watcher.on("unlink", onWatchChange);
			server.watcher.on("change", onWatchChange);
			function onWatchChange() {
				server.hot.send({ type: "full-reload" });
			}
		}
	};
}
