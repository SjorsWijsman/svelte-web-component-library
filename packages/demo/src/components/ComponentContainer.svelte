<script>
    import ControlsProp from "./ControlsProp.svelte";
    import ControlsSlot from "./ControlsSlot.svelte";

    export let title;
    export let props = [];
    export let slots = [];

    let active = false;

    let componentProps = "";
    let componentSlots = "";

    function updateProps() {
        componentProps = "";
        for (let prop of props) {
            if (prop.selected) {
                componentProps += `${prop.title}="${prop.selected}" `;
            }
        }
    }

    function updateSlots() {
        componentSlots = "";
        for (let slot of slots) {
            componentSlots += slot.content;
        }
    }

    updateProps();
    updateSlots();
</script>

<section>
    <button class="title" on:click={() => (active = !active)}>
        <h2>{title.split("-").slice(1).join(" ")}</h2>
        <p>{`<${title} />`}</p>
    </button>
    <div class="controls" class:active>
        {#if props.length}
            <div class="props">
                <h3>Props</h3>
                {#each props as prop}
                    <ControlsProp bind:prop onupdate={updateProps} />
                {/each}
            </div>
        {/if}
        {#if slots.length}
            <div class="slots">
                <h3>Slots</h3>
                {#each slots as slot}
                    <ControlsSlot bind:slot onupdate={updateSlots} />
                {/each}
            </div>
        {/if}
    </div>
    <div class="component">
        {@html `<${title} ${componentProps}>${componentSlots}</${title}>`}
    </div>
</section>

<style lang="scss">
    @use "../../../lib/src/style/variables.scss" as *;

    h2 {
        font-size: 1rem;
        text-transform: capitalize;
    }

    h3 {
        font-size: 0.9rem;
        font-weight: normal;
    }

    * {
        font-size: 0.9rem;
    }

    section {
        outline: 1px solid rgba($colorText, 0.1);
        margin-bottom: 2rem;
    }

    .title {
        background-color: rgba($colorText, 0.2);
        padding: 0.5rem 1rem;
        width: 100%;
        height: unset;
        border-radius: 0;
        display: flex;
        gap: 0.5rem;
    }

    .title p {
        font-size: 0.9rem;
        opacity: 0.7;
    }

    .controls {
        display: none;
        background-color: rgba($colorText, 0.1);
        grid-template-columns: 1fr 1fr;

        &.active {
            display: grid;
        }
    }

    .props,
    .slots {
        padding: 1rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 0.9rem;
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
        outline: 1px dashed rgba(255, 255, 255, 0.1);
        pointer-events: none;
        user-select: none;
    }
</style>
