import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";
import watchWebComponents from "./scripts/watch-web-components";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        fs: {
            cachedChecks: false,
        },
    },
    root: "./packages/demo/",
    resolve: {
        dedupe: ["svelte"],
        alias: {
            $lib: path.resolve(__dirname, "packages/lib"),
            $components: path.resolve(
                __dirname,
                "packages/demo/src/components"
            ),
            $scripts: path.resolve(__dirname, "packages/demo/src/scripts"),
            $style: path.resolve(__dirname, "packages/demo/src/style"),
            $icons: path.resolve(__dirname, "packages/demo/src/icons"),
            $store: path.resolve(__dirname, "packages/demo/src/store.js"),
        },
    },
    build: {
        outDir: "../../dist/demo",
        emptyOutDir: true,
    },
    plugins: [
        svelte({
            exclude: /\.wc\.svelte$/,
            hot: false,
        }),
        svelte({
            include: /\.wc\.svelte$/,
            hot: false,
            compilerOptions: {
                customElement: true,
            },
            onwarn: (warning, handler) => {
                const { code, frame } = warning;
                if (code === "css-unused-selector") return;

                handler(warning);
            },
        }),
        watchWebComponents(),
    ],
});
