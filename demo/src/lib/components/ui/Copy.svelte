<script>
	import { Button } from "$lib/components/ui/button/index.js";
	import CopyIcon from "lucide-svelte/icons/copy";
	import CopyIconSuccess from "lucide-svelte/icons/copy-check";
	import { componentText } from "$store";

	let success;
	let timeout;

	async function copy() {
		try {
			await navigator.clipboard.writeText($componentText);
			success = true;

			// Reset button back to default state after 2 seconds
			window.clearTimeout(timeout);
			timeout = window.setTimeout(() => {
				success = false;
			}, 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
			success = false;
		}
	}
</script>

<Button on:click={() => copy()} variant="outline" size="icon">
	{#if !success}
		<CopyIcon class="h-[1.2rem] w-[1.2rem]" />
	{:else}
		<CopyIconSuccess class="h-[1.2rem] w-[1.2rem] scale-110" color="#22c55e" />
	{/if}
	<span class="sr-only">Copy content</span>
</Button>
