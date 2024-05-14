<script>
	import { componentText } from "$store";
	import { onMount } from "svelte";
	import PreviewControls from "$lib/components/PreviewControls.svelte";

	let iframe;

	// On update of componentText
	componentText.subscribe((component) => iframe?.contentWindow.postMessage({ component }));

	// If this component is mounted after iframe content
	onMount(() => {
		iframe.contentWindow.postMessage({ component: $componentText });
	});

	// If iframe content is initialized
	function iframeInitialized(event) {
		if (event.data === "intialized") {
			iframe.contentWindow.postMessage({ component: $componentText });
		}
	}
</script>

<svelte:window on:message={(e) => iframeInitialized(e)} />

<div class="h-full w-full p-4 flex flex-col">
	<PreviewControls />
	<iframe
		bind:this={iframe}
		src="/preview"
		frameborder="0"
		title="Component Preview"
		class="h-full w-full border border-muted border-1"
	></iframe>
</div>

<style>
	iframe {
		border: 1px solid hsla(0, 0%, 60%, 0.2);
	}
</style>
