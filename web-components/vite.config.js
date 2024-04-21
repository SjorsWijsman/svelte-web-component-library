import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { transform } from "esbuild";
import pkg from "../package.json";
import "dotenv/config";
import path from "path";

const bundleComponents = JSON.parse(process.env.BUNDLE_COMPONENTS);

// https://vitejs.dev/config/
export default defineConfig({
	root: "./web-components/",
	build: {
		outDir: "../dist/",
		emptyOutDir: true,
		lib: {
			entry: "./index.js",
			formats: bundleComponents ? ["es", "esm", "umd"] : ["es"],
			name: pkg.name.replace(/-./g, (char) => char[1].toUpperCase()),
			fileName: (format) =>
				({
					es: `${pkg.name}.js`,
					esm: `${pkg.name}.min.js`,
					umd: `${pkg.name}.umd.js`
				})[format]
		},
		rollupOptions: {
			output: bundleComponents
				? {}
				: {
						inlineDynamicImports: false,
						chunkFileNames: "[name].js",
						manualChunks: { svelte: ["svelte"] }
					}
		}
	},
	plugins: [
		svelte({
			exclude: /\.wc\.svelte$/,
			compilerOptions: {
				customElement: false
			}
		}),
		svelte({
			include: /\.wc\.svelte$/
		}),
		minifyEs()
	],
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, "web-components/lib")
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				includePaths: [path.resolve(__dirname, "web-components/style")]
			}
		}
	}
});

// Workaround for https://github.com/vitejs/vite/issues/6555
function minifyEs() {
	return {
		name: "minifyEs",
		renderChunk: {
			order: "post",
			async handler(code, chunk, outputOptions) {
				if (
					outputOptions.format === "es" &&
					(!bundleComponents || chunk.fileName.endsWith(".min.js"))
				) {
					return await transform(code, { minify: true });
				}
				return code;
			}
		}
	};
}
