<script>
    import Controls from "./Controls.svelte";
    import iconArrow from "../icons/arrow-down.svg?raw";
    import iconProps from "../icons/props.svg?raw";
    import iconSlots from "../icons/slots.svg?raw";
    import CopyButton from "./CopyButton.svelte";

    export let title, props, slots;

    let active = false;

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
</script>

<section>
    <!-- Title Bar -->
    <button class="title" class:active on:click={() => (active = !active)}>
        <div class="icon arrow">
            {@html iconArrow}
        </div>

        <!-- Component Title -->
        <h2>{title.split("-").slice(1).join(" ")}</h2>

        <!-- Component Raw Title -->
        <p>{`<${title} />`}</p>

        <!-- Prop Count -->
        <div
            class="count"
            class:empty={!props}
            title="Props"
            style:margin-left={"auto"}
        >
            {@html iconProps}
            {#if props}
                {Object.keys(props)?.length}
            {:else}
                0
            {/if}
        </div>

        <!-- Slot Count -->
        <div class="count" class:empty={!slots} title="Slots">
            {@html iconSlots}
            {#if slots}
                {Object.keys(slots)?.length}
            {:else}
                0
            {/if}
        </div>

        <!-- Copy Button -->
        <CopyButton
            text={`<${title}${componentProps}>${componentSlots}</${title}>`}
        />
    </button>

    <!-- Controls Section -->
    <Controls bind:props bind:slots {active} />

    <!-- Component Preview -->
    <div class="component">
        {@html `<${title}${componentProps}>${componentSlots}</${title}>`}
    </div>
</section>

<style lang="scss">
    @use "../../../lib/style/variables.scss" as *;

    h2 {
        font-size: 0.9rem;
        text-transform: capitalize;
        font-weight: 600;
    }

    * {
        font-size: 0.9rem;
    }

    section {
        outline: 1px solid rgba($colorText, 0.1);
        margin-bottom: 2rem;
        transition: outline 0.2s ease-out;

        &:focus-within {
            outline: 1px solid rgba($colorText, 0.2);
        }
    }

    .title {
        position: relative;
        background-color: rgba($colorText, 0.1);
        padding: 0.5rem 1rem;
        width: 100%;
        height: unset;
        border-radius: 0;
        display: flex;
        gap: 0.5rem;
        transition: background-color 0.2s ease-out;

        &.active {
            background-color: rgba($colorText, 0.15);

            .icon.arrow {
                transform: rotate(-180deg);
            }
        }
        &:hover {
            background-color: rgba($colorText, 0.2);
        }

        .icon {
            :global(svg) {
                width: 100%;
                height: 100%;
            }

            &.arrow {
                opacity: 0.7;
                width: 0.75rem;
                height: 1rem;
                transition: transform 0.2s ease-out;
            }
        }

        .count {
            font-size: 0.8rem;
            opacity: 0.7;
            background-color: rgba($colorBackground, 0.5);
            display: flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.15rem 0.3rem;
            border-radius: 0.25rem;

            :global(svg) {
                width: 100%;
                height: 100%;
                max-width: 1.25em;
            }

            &.empty {
                opacity: 0.4;
            }
        }
    }

    .title p {
        font-size: 0.8rem;
        opacity: 0.7;
    }

    .component {
        padding: 1rem;
        position: relative;
    }

    .component::after {
        content: "";
        position: absolute;
        left: 1rem;
        top: 1rem;
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
        outline: 1px dashed rgba($colorText, 0.1);
        pointer-events: none;
        user-select: none;
    }
</style>
