<script>
	import "$wc/lib";
	import { mode } from "mode-watcher";
	import { applyPolyfill } from "custom-elements-hmr-polyfill";
	import { browser } from "$app/environment";

	// custom-elements-hmr-polyfill
	if (browser) applyPolyfill();
</script>

<div class={$mode}>
	<slot />
</div>

<style>
	:global(*:not(:defined)) {
		opacity: 0;
	}
</style>
