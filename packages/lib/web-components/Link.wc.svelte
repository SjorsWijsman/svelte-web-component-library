<svelte:options customElement="wc-link" />

<script>
    import ChevronRight from "../icons/chevron-right.svg?raw";

    export let href = "";

    export let center = false;
    export let button = false;

    export let color = "var(--color-text)";
    export let background = "";
</script>

<a
    {href}
    class:center
    class:button
    style:--color={color}
    style:--background={background}
>
    <slot />{#if !button}{@html ChevronRight}{/if}
</a>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    a {
        color: var(--color);
        background-color: var(--background);
        text-decoration: none;
        font-weight: 300;
        opacity: 0.6;
        vertical-align: middle;

        &.button {
            color: var(--color);
            background-color: var(--background);
            opacity: 1;
        }

        &.center {
            margin: 0 auto;
            text-align: center;
            opacity: 0.8;
        }

        & :global(svg) {
            font-size: 1em;
            position: relative;
            display: inline-block;
            width: 1.25em;
            height: 1.25em;
            left: -0.25em;
            transition: transform 0.2s ease-out;
            vertical-align: middle;
        }

        &:hover,
        &:focus {
            opacity: 0.8;

            & :global(svg) {
                transform: translateX(0.25rem);
            }
        }
    }
</style>
