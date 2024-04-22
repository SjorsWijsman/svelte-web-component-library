<script>
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import ComponentIcon from "lucide-svelte/icons/component";
	import { components } from "$store";
	import { page } from "$app/stores";
</script>

<ScrollArea class="h-full w-full" style="direction: rtl">
	<div style="direction: ltr" class="pb-16">
		<Separator />
		{#each Object.keys($components) as component (component)}
			{@const active = component === $page.params.component}
			{@const description = $components[component].description}
			<a class="text-sm py-2 px-4 flex flex-col {active ? 'bg-muted' : ''}" href={component}>
				<span class="flex items-center gap-2 w-full" class:active>
					<ComponentIcon
						class="h-[1rem] w-[1rem] {active ? 'opacity-100' : 'opacity-50'}"
						strokeWidth="1"
					/>
					{#if $components[component].group}
						<span
							class="text-muted-foreground font-normal text-ellipsis whitespace-nowrap overflow-hidden"
						>
							{$components[component].group} /
							<span class:active class="text-foreground">{component}</span>
						</span>
					{:else}
						{component}
					{/if}
				</span>
				{#if active && description}
					<span class="text-muted-foreground text-xs">
						{description}
					</span>
				{/if}
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
