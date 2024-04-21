<script>
	import { componentText } from "$store";
	import TextPreview from "$lib/components/ui/TextPreview.svelte";
	import LightSwitch from "$lib/components/ui/LightSwitch.svelte";
	import Copy from "$lib/components/ui/Copy.svelte";
	import { onMount } from "svelte";

	let iframe;

	// On update of componentText
	componentText.subscribe((component) => iframe?.contentWindow.postMessage({ component }));

	// If this component is mounted after iframe content
	onMount(() => {
		iframe.contentWindow.postMessage({ component: $componentText });
	});
</script>

<div class="h-full w-full p-4 flex flex-col">
	<div class="pb-4 flex items-center gap-2 w-full">
		<TextPreview />
		<div class="flex gap-1 ml-auto">
			<LightSwitch />
			<Copy />
		</div>
	</div>
	<iframe
		bind:this={iframe}
		src="/preview"
		frameborder="0"
		title="Component Preview"
		class="h-full w-full border border-dashed border-muted border-1"
	></iframe>
</div>
