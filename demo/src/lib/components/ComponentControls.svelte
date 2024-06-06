<script>
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import ControlsProps from "$lib/components/ui/ControlsProps.svelte";
	import ControlsSlots from "$lib/components/ui/ControlsSlots.svelte";
	import { components, selectedComponent } from "$store";

	let props, slots;

	$: [props, slots] = [
		$components[$selectedComponent]?.props,
		$components[$selectedComponent]?.slots
	];
</script>

<Tabs.Root class="p-3 h-full">
	<Tabs.List class="grid w-full grid-cols-2">
		<Tabs.Trigger value="props">
			Props
			<span class="text-muted-foreground">
				&nbsp;({props ? Object.keys(props)?.length : 0})
			</span>
		</Tabs.Trigger>
		<Tabs.Trigger value="slots">
			Slots
			<span class="text-muted-foreground">
				&nbsp;({slots ? Object.keys(slots)?.length : 0})
			</span>
		</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="props" class="h-full">
		<ScrollArea class="p-1 h-full w-full">
			<ControlsProps bind:props={$components[$selectedComponent].props} />
		</ScrollArea>
	</Tabs.Content>
	<Tabs.Content value="slots" class="h-full">
		<ScrollArea class="p-1 h-full w-full">
			<ControlsSlots bind:slots={$components[$selectedComponent].slots} />
		</ScrollArea>
	</Tabs.Content>
</Tabs.Root>
