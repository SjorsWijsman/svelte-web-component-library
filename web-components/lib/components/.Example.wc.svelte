<!-- 
    Svelte documentation:
    https://svelte.dev/docs/custom-elements-api
-->
<svelte:options customElement="wc-example" />

<script>
	// JavaScript goes here
	console.log("Hello world!");
</script>

<p>
	Hello World
	<slot />
</p>

<style lang="scss">
	// Style goes here
	p {
		color: red;
	}
</style>
