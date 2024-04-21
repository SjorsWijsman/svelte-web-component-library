<script>
	import "../../app.pcss";
	import { Pane, Splitpanes } from "svelte-splitpanes";
	import ComponentList from "$lib/components/ComponentList.svelte";
	import ComponentPreview from "$lib/components/ComponentPreview.svelte";
	import ComponentControls from "$lib/components/ComponentControls.svelte";
	import { ModeWatcher } from "mode-watcher";
	import { page } from "$app/stores";
	import { prefix, components, selectedComponent } from "$store";
	import { goto } from "$app/navigation";
	import { browser } from "$app/environment";

	export let data;

	$prefix = data.prefix;
	$components = data.components;
	$: $selectedComponent = $components[$page.params.component];

	if (!$page.params.component && browser) goto(Object.keys($components)[0]);
</script>

<ModeWatcher />
<main class="h-screen w-screen">
	<Splitpanes class="h-screen w-screen" pushOtherPanes={false}>
		<Pane>
			<section class="relative h-full flex flex-col min-w-64">
				<h2 class="text-xl p-4 font-bold">Components</h2>
				<ComponentList />
			</section>
		</Pane>
		<Pane size={60} minSize={30}>
			<section class="h-full w-full">
				<ComponentPreview />
			</section>
		</Pane>
		<Pane>
			<section class="relative h-full flex flex-col min-w-64">
				<ComponentControls />
			</section>
		</Pane>
	</Splitpanes>
</main>

<style lang="postcss">
	:global(.splitpanes__pane) {
		background-color: hsl(var(--background)) !important;
	}

	:global(.splitpanes__splitter) {
		background-color: hsl(var(--muted)) !important;
		border-left: 0px !important;
	}

	:global(.splitpanes__splitter::after, .splitpanes__splitter::before) {
		background-color: hsl(var(--muted-foreground)) !important;
		opacity: 0.5;
	}
</style>
