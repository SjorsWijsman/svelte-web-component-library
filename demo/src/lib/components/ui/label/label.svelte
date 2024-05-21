<script>
	import { Label as LabelPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
	export let name;
</script>

<LabelPrimitive.Root
	class={cn(
		"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
		className
	)}
	{...$$restProps}
	on:mousedown
>
	<slot>{name.replace(/\_\d{6}$/, "")}</slot>
</LabelPrimitive.Root>
