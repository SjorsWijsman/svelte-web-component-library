<svelte:options
    customElement={{
        tag: "porton-button",
        props: {
            action: { type: "String" },
            secondary: { type: "Boolean" },
        },
    }}
/>

<script>
    export let action;
</script>

<button on:click={action}>
    <slot>Button</slot>
</button>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../lib/src/style/global.scss";
</style>
