<script>
	import "$wc/lib";
	import { mode } from "mode-watcher";
	import { applyPolyfill } from "custom-elements-hmr-polyfill";

	// custom-elements-hmr-polyfill
	applyPolyfill();
</script>

<div class={$mode}>
	<slot />
</div>
