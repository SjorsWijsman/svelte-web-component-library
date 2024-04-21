<script>
	let component;

	function updateComponent(event) {
		if (event.data?.component) {
			component = event.data.component;
		}
	}
</script>

<svelte:window on:message={(e) => updateComponent(e)} />

{#if component}
	{@html component}
{/if}
