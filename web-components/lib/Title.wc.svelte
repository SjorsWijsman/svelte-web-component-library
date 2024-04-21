<svelte:options
	customElement={{
		tag: "wc-title",
		props: {
			color: { type: "String" },
			divider: { type: "Boolean" }
		}
	}}
/>

<script>
	export let color;
	export let divider;
</script>

<h1 style:color class:divider>Hello <slot />!</h1>

<style>
	.divider {
		border-bottom: solid 1px white;
	}
</style>
