<svelte:options customElement="wc-benefit" />

<script>
    export let src = "./images/check.png";
</script>

<li>
    <img {src} alt="" />
    <slot />
</li>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    li {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        img {
            height: 0.9rem;
            width: 0.9rem;
        }
    }
</style>
