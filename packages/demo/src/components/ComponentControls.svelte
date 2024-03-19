<script>
    import Controls from "$components/controls/Controls.svelte";
    import { selectedComponent, componentElement } from "$store";
    import IconTag from "$icons/tag.svg?raw";

    let title, props, slots;

    $: title = $selectedComponent?.title;
    $: props = $selectedComponent?.props;
    $: slots = $selectedComponent?.slots;

    let componentProps = "";
    let componentSlots = "";

    // Update content on prop/slot change
    $: updatePropContent(props);
    $: updateSlotContent(slots);

    // Parse prop object to string to pass to component
    function updatePropContent(props) {
        componentProps = "";
        if (!props) return;
        for (let prop of Object.keys(props)) {
            if (props[prop].value) {
                componentProps += ` ${prop}="${props[prop].value}"`;
            }
        }
    }

    // Parse slot object to string to pass inside component
    function updateSlotContent(slots) {
        componentSlots = "";
        if (!slots) return;
        for (let slot of Object.keys(slots)) {
            if (slot === "default") componentSlots += slots[slot];
            else componentSlots += `<span slot="${slot}">${slots[slot]}</span>`;
        }
    }

    $: $componentElement = `<${title}${componentProps}>${componentSlots}</${title}>`;
</script>

<div>
    <h2>{$selectedComponent.title.split("-").slice(1).join(" ")}</h2>
    {#if $selectedComponent.group}
        <p class="group">{@html IconTag} {$selectedComponent.group}</p>
    {/if}
    {#if $selectedComponent.description}
        <p class="description">{@html $selectedComponent.description}</p>
    {/if}
</div>
<Controls bind:props bind:slots />

<style lang="scss">
    @use "sass:color";
    @import "../style/_variables.scss";

    div {
        padding: 1rem;
        border-bottom: 1px solid color.scale($colorBackground, $lightness: 15%);
    }

    h2 {
        text-transform: capitalize;
        font-weight: bold;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    p {
        opacity: 0.8;
    }

    .group {
        display: flex;
        gap: 0.35rem;
        margin-bottom: 0.5rem;
        align-items: center;

        :global(svg) {
            width: 0.9rem;
            height: 0.9rem;
            opacity: 0.9;
        }
    }

    .description {
        font-size: 0.8rem;
    }
</style>
