<script>
    import { slide } from "svelte/transition";
    import { sineOut } from "svelte/easing";
    import ControlsProp from "$components/controls/ControlsProp.svelte";
    import ControlsSlot from "$components/controls/ControlsSlot.svelte";
    import { selectedComponent } from "$store";

    export let props, slots;
</script>

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

<style lang="scss">
    @use 'sass:color';
    @import '../../style/_variables.scss';

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
        display: flex;
        flex-direction: column;
        grid-template-columns: 1fr 1fr;
        height: 100%;
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
