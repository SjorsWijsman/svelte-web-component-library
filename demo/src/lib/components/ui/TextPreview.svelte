<script>
	import { prefix, components, selectedComponent, componentText } from "$store";
	import { page } from "$app/stores";

	let componentProps = "";
	let componentSlots = "";

	// Update content on prop/slot change
	$: updatePropContent($components[$selectedComponent]?.props);
	$: updateSlotContent($components[$selectedComponent]?.slots);

	// Parse prop object to string to pass to component
	function updatePropContent(props) {
		componentProps = "";
		if (!props) return;
		for (let prop of Object.keys(props)) {
			if (props[prop].value) {
				if (props[prop].type === "boolean") {
					componentProps += ` ${prop.replace(/\_\d{6}$/, "")}`;
				} else {
					componentProps += ` ${prop.replace(/\_\d{6}$/, "")}="${props[prop].value}"`;
				}
			}
		}
		$componentText = generateComponentText($components[$selectedComponent]);
	}

	// Parse slot object to string to pass inside component
	function updateSlotContent(slots) {
		componentSlots = "";
		if (!slots) return;
		for (let slot of Object.keys(slots)) {
			if (slot === "default") componentSlots += slots[slot];
			else componentSlots += `<span slot="${slot}">${slots[slot]}</span>`;
		}
		$componentText = generateComponentText($components[$selectedComponent]);
	}

	function generateComponentText(component) {
		let pre = $prefix;
		if (component.prefix) {
			pre = component.prefix;
			if (component.prefix === "none") {
				pre = "";
			}
		}
		pre = pre ? pre + "-" : "";

		let tag = `${pre}${$page.params.component}`;
		let result = `<${tag}${componentProps}>${componentSlots}</${tag}>`;
		return result;
	}
</script>

<span class="text-ellipsis whitespace-nowrap overflow-hidden text-muted-foreground text-sm">
	{$componentText}
</span>
