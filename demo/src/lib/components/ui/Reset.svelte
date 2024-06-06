<script>
	import { Button } from "$lib/components/ui/button/index.js";
	import { components, selectedComponent } from "$store";

	import RotateCcw from "lucide-svelte/icons/rotate-ccw";

	function reset() {
		$components[$selectedComponent] = {
			...$components[$selectedComponent],
			props: {
				...Object.fromEntries(
					Object.entries($components[$selectedComponent].props).map(([key, values]) => [
						key,
						{ ...values, value: values.default }
					])
				)
			}
		};
	}
</script>

<Button on:click={reset} variant="outline" size="icon">
	<RotateCcw class="h-[1.2rem] w-[1.2rem]" />
	<span class="sr-only">Reset component</span>
</Button>
