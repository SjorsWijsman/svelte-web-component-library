<script>
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import * as Props from "$lib/components/ui/props";
	import { Textarea } from "$lib/components/ui/textarea";

	export let props;
</script>

{#if props && Object.keys(props).length}
	{#each Object.keys(props) as name (name)}
		{@const type = props[name].type}

		{#if props[name]}
			<div class="py-3 flex flex-col gap-2">
				<Label for={name} {name}></Label>
				{#if type === "select"}
					<Props.Select
						{name}
						options={props[name].options}
						bind:value={props[name].value}
					/>
				{:else if type === "boolean"}
					<Props.Boolean {name} bind:value={props[name].value} />
				{:else if type === "textarea"}
					<Textarea
						id={name}
						bind:value={props[name].value}
						placeholder={props[name].placeholder}
					/>
				{:else}
					<Input
						{type}
						id={name}
						bind:value={props[name].value}
						placeholder={props[name].placeholder}
					/>
				{/if}
			</div>
		{/if}
	{/each}
{:else}
	<p class="text-muted-foreground text-center mt-3">No props configured.</p>
{/if}
