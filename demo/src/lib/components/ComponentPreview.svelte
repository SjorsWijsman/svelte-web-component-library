<script>
	import { page } from "$app/stores";
	import { prefix, componentText } from "$store";
	import TextPreview from "$lib/components/ui/TextPreview.svelte";
	import LightSwitch from "$lib/components/ui/LightSwitch.svelte";
	import Copy from "$lib/components/ui/Copy.svelte";
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
		src="/{$prefix}-{$page.params.component}/preview?component={$componentText}"
		frameborder="0"
		title="Component Preview"
		class="h-full w-full border border-dashed border-muted border-1"
	></iframe>
</div>
