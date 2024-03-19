<svelte:options customElement="wc-benefit-container" />

<ul>
    <slot />
</ul>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    ul {
        display: flex;
        flex-direction: column;
        max-width: calc($widthContent / 2);
        list-style: none;
        margin: 0 auto;
        gap: 1rem;
    }
</style>
