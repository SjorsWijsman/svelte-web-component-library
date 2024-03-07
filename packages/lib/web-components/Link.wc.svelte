<svelte:options customElement="wc-link" />

<script>
    export let href = "";

    export let center = false;
    export let button = false;
    export let secondary = false;

    export let color = "var(--color-text)";
    export let background = "";
</script>

<a
    {href}
    class:button
    class:center
    class:secondary
    style:--color={color}
    style:--background={background}
>
    <slot />
</a>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../lib/style/global.scss";
</style>
