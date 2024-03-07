<!-- 
    1. Copy component file & change name (keep .wc.svelte extension)
    2. Change tagname, this is what gets used as the custom element name, e.g. <porton-button />
    3. To add to demo environment add the component to demo/src/wc-controls directory (documentation inside)
    4. Run: `npm run dev -- --open` to start the demo environment
    5. Develop the component
    6. Add component to bundle by running: `npm run build`
-->
<svelte:options customElement="porton-example" />

<script>
    // JavaScript goes here
    console.log("Hello world!");
</script>

<p>
    Hello World
    <slot />
</p>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../lib/style/global.scss";

    // Style goes here
    p {
        color: red;
    }
</style>
