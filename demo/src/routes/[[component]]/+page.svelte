<script>
	import "../../app.pcss";
	import { Pane, Splitpanes } from "svelte-splitpanes";
	import ComponentList from "$lib/components/ComponentList.svelte";
	import ComponentControls from "$lib/components/ComponentControls.svelte";
	import { ModeWatcher } from "mode-watcher";
	import LightSwitch from "$lib/components/ui/LightSwitch.svelte";
	import { page } from "$app/stores";
	import { prefix, components, selectedComponent } from "$store";

	export let data;

	$prefix = data.prefix;
	$components = data.components;
	$: $selectedComponent = $page.params.component;
</script>

<ModeWatcher />
<main class="h-screen w-screen">
	<Splitpanes class="h-screen w-screen" pushOtherPanes={false}>
		<Pane>
			<section class="relative h-full flex flex-col">
				<h1 class="text-xl p-4 font-bold">Components</h1>
				<ComponentList />
				<LightSwitch />
			</section>
		</Pane>
		<Pane size={60} minSize={30}>
			<section class="h-full w-full">
				<iframe
					src="/{$prefix}-{$page.params.component}/preview"
					frameborder="0"
					title="Component Preview"
					class="h-full w-full"
				></iframe>
			</section>
		</Pane>
		<Pane>
			<section class="relative h-full flex flex-col">
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
