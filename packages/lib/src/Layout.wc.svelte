<svelte:options customElement="porton-layout" />

<script>
    console.log("hi im layout");
</script>

<div>
    <slot />
</div>

<style lang="scss">
    @use "../../lib/src/style/mixins.scss" as *;

    // scss mixins are included for consistent global styling
    * {
        @include reset;
    }

    // Style goes here
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        padding: 1rem;
    }
</style>
