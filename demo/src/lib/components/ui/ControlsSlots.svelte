<script>
	import { Label } from "$lib/components/ui/label";
	import { Textarea } from "$lib/components/ui/textarea";
	import { page } from "$app/stores";

	export let slots;
</script>

{#if slots && Object.keys(slots).length}
	{#each Object.keys(slots) as name (`${$page.params.component}-${name}`)}
		<div class="py-3 flex flex-col gap-2">
			<Label for={name}>{name}</Label>
			<Textarea placeholder="Your slot content." id={name} bind:value={slots[name]} />
		</div>
	{/each}
{:else}
	<p class="text-muted-foreground text-center mt-3">No slots configured.</p>
{/if}
