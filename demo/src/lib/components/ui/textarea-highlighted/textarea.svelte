<script>
	import { getHighlighterCore } from "shiki/core";
	import getWasm from "shiki/wasm";

	import { onMount } from "svelte";

	let className = undefined;
	export { className as class };
	export let value;
	export let readonly = undefined;

	let output = null;

	let highlighter;

	onMount(async () => {
		highlighter = await getHighlighterCore({
			themes: [import("shiki/themes/light-plus.mjs"), import("shiki/themes/dark-plus.mjs")],
			langs: [import("shiki/langs/html.mjs")],
			loadWasm: getWasm
		});
		highlight(value);
	});

	async function highlight(input) {
		if (!highlighter) return;
		output = await highlighter.codeToHtml(input ?? "", {
			lang: "html",
			themes: {
				light: "light-plus",
				dark: "dark-plus"
			}
		});
	}

	$: highlight(value);
</script>

<div
	class="wrapper rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
>
	<div class="output">
		{@html output}
	</div>
	<textarea
		class={className}
		bind:value
		{readonly}
		wrap="off"
		autocapitalize="off"
		autocomplete="off"
		autocorrect="off"
		on:blur
		on:change
		on:click
		on:focus
		on:keydown
		on:keypress
		on:keyup
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:paste
		on:input
		{...$$restProps}
	></textarea>
</div>

<style>
	.wrapper {
		position: relative;
		overflow: hidden;
		display: grid;
		padding-left: 1px;
	}

	.wrapper :global(*) {
		font-size: 0.9rem;
		font-family: monospace;
	}

	.wrapper > * {
		grid-area: 1 / 1 / 2 / 2;
		overflow: hidden;
	}

	.output :global(pre) {
		height: 100%;
		padding: 0.25rem;
		background: transparent !important;
	}

	textarea {
		background: transparent;
		color: transparent;
		caret-color: black;
		border: 0px solid transparent;
		resize: none;
		line-height: 1.5em;
		padding: 0.25rem;
		white-space: nowrap;
	}

	:global(.dark) textarea {
		caret-color: white;
	}

	:global(.dark .shiki),
	:global(.dark .shiki span) {
		color: var(--shiki-dark) !important;
		background-color: var(--shiki-dark-bg) !important;
		/* Optional, if you also want font styles */
		font-style: var(--shiki-dark-font-style) !important;
		font-weight: var(--shiki-dark-font-weight) !important;
		text-decoration: var(--shiki-dark-text-decoration) !important;
	}
</style>
