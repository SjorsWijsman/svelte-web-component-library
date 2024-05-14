<script>
	import "../../app.pcss";
	import * as Resizable from "$lib/components/ui/resizable";
	import ComponentList from "$lib/components/ComponentList.svelte";
	import ComponentPreview from "$lib/components/ComponentPreview.svelte";
	import ComponentControls from "$lib/components/ComponentControls.svelte";
	import { ModeWatcher } from "mode-watcher";
	import { page } from "$app/stores";
	import { prefix, components, selectedComponent } from "$store";

	export let data;

	$prefix = data.prefix;
	$components = data.components;
	$: $selectedComponent = $components[$page.params.component];
</script>

<svelte:head>
	<title>
		{$page.params.component
			? `<${$prefix}-${$page.params.component} />`
			: "Svelte Component Library"}
	</title>
</svelte:head>

<ModeWatcher />
<Resizable.PaneGroup
	class="max-h-screen min-h-screen max-w-screen min-w-screen"
	direction={"horizontal"}
>
	<Resizable.Pane defaultSize={20}>
		<section class="relative h-full flex flex-col min-w-64">
			<a class="text-xl p-4 font-bold" href="/">
				Components
				<span class="text-muted-foreground font-normal">
					({Object.keys($components).length})
				</span>
			</a>
			<ComponentList />
		</section>
	</Resizable.Pane>
	<Resizable.Handle class="w-1" />
	<Resizable.Pane defaultSize={60} minSize={30}>
		<section class="h-full w-full">
			{#if $selectedComponent}
				<ComponentPreview />
			{:else}
				<div class="flex items-center justify-center h-full">
					<p class="text-2xl text-muted-foreground">Select a component</p>
				</div>
			{/if}
		</section>
	</Resizable.Pane>
	<Resizable.Handle class="w-1" />
	<Resizable.Pane defaultSize={20}>
		<section class="relative h-full flex flex-col min-w-64">
			<ComponentControls />
		</section>
	</Resizable.Pane>
</Resizable.PaneGroup>
