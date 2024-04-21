<script>
	import * as Select from "$lib/components/ui/select/index.js";

	export let name;
	export let options;
	export let value;

	let selected = { value };
	$: value = selected.value;

	if (!value && options) value = options[0];
</script>

{#if !options}
	<p class="text-red-500 text-sm">
		Please provide <code>prop.options: [...]</code>
		.
	</p>
{:else}
	<Select.Root name bind:selected {...$$restProps}>
		<Select.Trigger id={name}>
			<Select.Value placeholder={value} />
		</Select.Trigger>
		<Select.Content>
			{#each options as option}
				<Select.Item value={option} active={option === value}>{option}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
{/if}
