<script>
	import { prefix, selectedComponent, componentText } from "$store";
	import { page } from "$app/stores";

	let componentProps = "";
	let componentSlots = "";

	// Update content on prop/slot change
	$: updatePropContent($selectedComponent.props);
	$: updateSlotContent($selectedComponent.slots);

	// Parse prop object to string to pass to component
	function updatePropContent(props) {
		componentProps = "";
		if (!props) return;
		for (let prop of Object.keys(props)) {
			if (props[prop].value) {
				if (props[prop].type === "boolean") {
					componentProps += ` ${prop}`;
				} else {
					componentProps += ` ${prop}="${props[prop].value}"`;
				}
			}
		}
		$componentText = generateComponentText($selectedComponent);
	}

	// Parse slot object to string to pass inside component
	function updateSlotContent(slots) {
		componentSlots = "";
		if (!slots) return;
		for (let slot of Object.keys(slots)) {
			if (slot === "default") componentSlots += slots[slot];
			else componentSlots += `<span slot="${slot}">${slots[slot]}</span>`;
		}
		$componentText = generateComponentText($selectedComponent);
	}

	function generateComponentText(component) {
		let tag = `${$prefix}-${$page.params.component}`;
		let result = `<${tag}${componentProps}>${componentSlots}</${tag}>`;
		return result;
	}
</script>

<span class="text-ellipsis whitespace-nowrap overflow-hidden text-muted-foreground">
	{$componentText}
</span>
