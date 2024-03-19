<svelte:options customElement="wc-infoblock-container" />

<div>
    <slot />
</div>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: calc(2rem + 2vw);
        max-width: $widthContent;
        margin: 0 auto;
    }

    @media (max-width: 60rem) {
        div {
            grid-template-columns: 1fr;
        }
    }
</style>
