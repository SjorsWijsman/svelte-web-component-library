import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$wc: "../web-components/",
			$store: "./src/store.js"
		}
	},
	preprocess: [
		preprocess({
			postcss: {
				plugins: [tailwindcss(), autoprefixer()]
			}
		})
	],
	compilerOptions: {
		customElement: true
	}
};

export default config;
