<!-- 
    Svelte documentation:
    https://svelte.dev/docs/custom-elements-api
-->
<svelte:options customElement="wc-example-component-two" />

<script>
	console.log("Hello world!");

	export let color = "red";
	export let underline = false;
</script>

<p style:color class:underline>
	Hello
	<slot>World</slot>!
</p>

<style lang="scss">
	p {
		font-weight: bold;

		&.underline {
			text-decoration: underline;
		}
	}
</style>
