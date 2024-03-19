<script>
    import { componentElement, selectedComponent } from "$store";
    import iconProps from "$icons/props.svg?raw";
    import iconSlots from "$icons/slots.svg?raw";
    import CopyButton from "./CopyButton.svelte";
</script>

<div class="info-bar">
    <span>{$componentElement}</span>

    <!-- Prop Count -->
    <div
        class="count"
        class:empty={!$selectedComponent?.props}
        title="Props"
        style:margin-left={"auto"}
    >
        {@html iconProps}
        {#if $selectedComponent?.props}
            {Object.keys($selectedComponent?.props)?.length}
        {:else}
            0
        {/if}
    </div>

    <!-- Slot Count -->
    <div class="count" class:empty={!$selectedComponent?.slots} title="Slots">
        {@html iconSlots}
        {#if $selectedComponent?.slots}
            {Object.keys($selectedComponent?.slots)?.length}
        {:else}
            0
        {/if}
    </div>

    <CopyButton />
</div>

<style lang="scss">
    @import "../../style/_variables.scss";

    span {
        font-size: 0.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover {
            overflow: visible;
            white-space: normal;
        }
    }

    .info-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        gap: 0.5rem;
        height: 3rem;

        span {
            opacity: 0.7;
            font-size: 0.8rem;
        }
    }

    .count {
        font-size: 0.8rem;
        opacity: 0.7;
        background-color: rgba($colorText, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        padding: 0.15rem 0.3rem;
        border-radius: 0.25rem;
        height: 1.6rem;

        :global(svg) {
            width: 1.1rem;
        }

        &.empty {
            opacity: 0.4;
        }
    }
</style>
