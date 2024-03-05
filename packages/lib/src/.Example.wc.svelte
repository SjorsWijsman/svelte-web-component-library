<!-- 
    1. Copy component file & change name (keep .wc.svelte extension)
    2. Add component to exports in index.js
    3. Change tagname, this is what gets used as the custom element name, e.g. <porton-button />
    4. To add to demo environment add the component to demo/src/wc-controls directory (documentation inside)
    5. Run: `npm run dev -- --open` to start the demo environment
    6. Develop the component
    7. Add component to bundle by running: `npm run build`
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
    @import "../../lib/src/style/global.scss";

    // Style goes here
    p {
        color: red;
    }
</style>
