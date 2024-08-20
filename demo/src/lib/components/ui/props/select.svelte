<script>
	import * as Select from "$lib/components/ui/select/index.js";

	export let name;
	export let options;
	export let value;

	// Initiate selected value
	let selected = { value };

	// Update value on selected change
	$: value = selected.value;
</script>

{#if !options}
	<p class="text-red-500 text-sm">
		Please provide <code>prop.options: [...]</code>
		.
	</p>
{:else}
	<Select.Root name bind:selected {...$$restProps}>
		<Select.Trigger id={name} empty={value === null}>
			<Select.Value placeholder={value} />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value={null} active={"" === value} label={null}>
				<span class="text-muted-foreground italic">null</span>
			</Select.Item>
			{#each options as option}
				<Select.Item value={option} active={option === value}>{option}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
{/if}
