<svelte:options customElement="porton-button" />

<script>
    export let action = () => console.log("I am a button");
    export let secondary = false;
</script>

<button on:click={action} class:secondary>
    <slot>Button</slot>
</button>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../lib/src/style/global.scss";
</style>
