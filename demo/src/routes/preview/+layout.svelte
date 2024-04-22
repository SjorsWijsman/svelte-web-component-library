<script>
	import "$wc/lib";
	import { mode } from "mode-watcher";
	import { applyPolyfill } from "custom-elements-hmr-polyfill";
	import { browser } from "$app/environment";

	// custom-elements-hmr-polyfill
	if (browser) applyPolyfill();
</script>

<main class="{$mode}">
	<slot />
</main>

<style>
	:global(*:not(:defined)) {
		opacity: 0;
	}

	main {
		margin: 2rem;
        border: 1px dashed hsla(0, 0%, 60%, 0.3);
	}
</style>
