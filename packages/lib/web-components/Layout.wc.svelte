<svelte:options customElement="wc-layout" />

<div>
    <slot />
</div>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../lib/style/global.scss";

    // Style goes here
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        padding: 1rem;
    }
</style>
