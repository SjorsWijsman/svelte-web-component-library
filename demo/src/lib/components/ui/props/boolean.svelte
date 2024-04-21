<script>
	import { Switch } from "$lib/components/ui/switch/index.js";

	export let name;
	export let value;

	let checked = value;
	$: value = checked;
</script>

<Switch id={name} bind:checked {...$$restProps} />
