<!-- 
    Svelte documentation:
    https://svelte.dev/docs/custom-elements-api
-->
<svelte:options customElement="wc-example-component-two" />

<script>
	console.log("Hello world!");

	export let color = "red";
</script>

<p style:color>
	Hello
	<slot>World</slot>!
</p>

<style lang="scss">
	p {
		font-weight: bold;
	}
</style>
