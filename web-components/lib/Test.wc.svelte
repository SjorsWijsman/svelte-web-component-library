<svelte:options customElement="wc-test" />

<script>
	export let color;
	export let header = true;
</script>

<h1 style:color>Hello <slot />!</h1>
