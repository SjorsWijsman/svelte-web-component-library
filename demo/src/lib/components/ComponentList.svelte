<script>
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import ComponentIcon from "lucide-svelte/icons/component";
	import { components, selectedComponent } from "$store";
</script>

<ScrollArea class="h-full w-full" style="direction: rtl">
	<div style="direction: ltr">
		{#each Object.keys($components) as component (component)}
			{@const active = component === $selectedComponent}
			<a
				class="text-sm flex items-center gap-2 py-2 px-4 {active ? 'bg-muted' : ''}"
				class:active
				href={component}
			>
				<ComponentIcon
					class="h-[1rem] w-[1rem] {active ? 'opacity-100' : 'opacity-50'}"
					strokeWidth="1"
				/>
				{component}
			</a>
			<Separator />
		{/each}
	</div>
</ScrollArea>

<style lang="postcss">
	.active {
		font-weight: bold;
	}
</style>
