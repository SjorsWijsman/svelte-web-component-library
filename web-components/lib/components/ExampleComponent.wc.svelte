<!-- 
    Svelte documentation:
    https://svelte.dev/docs/custom-elements-api
-->
<svelte:options customElement="wc-example-component" />

<script>
	// JavaScript goes here
	console.log("Hello world!");

	export let color = "red";
</script>

<p style:color>
	Hello
	<slot>World</slot>!
</p>

<style lang="scss">
	// Style goes here
	p {
		font-weight: bold;
	}
</style>
