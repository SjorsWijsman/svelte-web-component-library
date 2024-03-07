<script>
    import { slide } from "svelte/transition";
    import { sineOut } from "svelte/easing";
    import ControlsProp from "./ControlsProp.svelte";
    import ControlsSlot from "./ControlsSlot.svelte";

    export let props, slots, active;
</script>

{#if active}
    <div class="controls" transition:slide={{ easing: sineOut, duration: 200 }}>
        <!-- Prop Controls -->
        <div class="props" class:empty={!props}>
            <h3>Props</h3>
            <hr />
            {#if props}
                {#each Object.keys(props) as prop}
                    <ControlsProp name={prop} bind:prop={props[prop]} />
                {/each}
            {/if}
        </div>

        <!-- Slot Controls -->
        <div class="slots" class:empty={!slots}>
            <h3>Slots</h3>
            <hr />
            {#if slots}
                {#each Object.keys(slots) as slot}
                    <ControlsSlot name={slot} bind:slot={slots[slot]} />
                {/each}
            {/if}
        </div>
    </div>
{/if}

<style lang="scss">
    @use "../../../lib/style/variables.scss" as *;

    h3 {
        font-size: 0.9rem;
        font-weight: normal;
    }

    hr {
        width: 100%;
        opacity: 0.1;
        margin: 0.15rem 0 0.25rem;
        height: 1px;
    }

    .controls {
        display: grid;
        background-color: rgba($colorText, 0.05);
        grid-template-columns: 1fr 1fr;
    }

    .props,
    .slots {
        padding: 1rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 0.9rem;

        &.empty {
            opacity: 0.3;
        }
    }

    .slots {
        grid-column: 2;
    }
</style>
