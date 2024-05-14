<script>
	import { onMount } from "svelte";

	let component;

	function updateComponent(event) {
		if (event.data?.component) {
			component = event.data.component;
		}
	}

	onMount(() => {
		parent.postMessage("intialized", "*");
	});
</script>

<svelte:window on:message={(e) => updateComponent(e)} />

{#if component}
	{@html component}
	<p>Hello!</p>
{/if}
