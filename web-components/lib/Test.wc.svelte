<svelte:options customElement="wc-test" />

<script>
	export let color;
</script>

<h1 style:color>Hello<slot />!</h1>
