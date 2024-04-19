<script>
	import { page } from "$app/stores";
	import { mode } from "mode-watcher";
</script>

<svelte:body class={$mode} />

<main>
	<svelte:element this={$page.params.component}></svelte:element>
</main>
