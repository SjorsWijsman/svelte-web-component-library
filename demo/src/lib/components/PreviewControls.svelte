<script>
	import TextPreview from "$lib/components/ui/TextPreview.svelte";
	import * as Tooltip from "$lib/components/ui/tooltip";
	import LightSwitch from "$lib/components/ui/LightSwitch.svelte";
	import Copy from "$lib/components/ui/Copy.svelte";
</script>

<div class="pb-4 flex items-center gap-2 w-full">
	<TextPreview />
	<div class="flex gap-1 ml-auto">
		<Tooltip.Root>
			<Tooltip.Trigger>
				<LightSwitch />
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Switch theme</p>
			</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Copy />
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Copy to clipboard</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
</div>
