<!-- 
    1. Copy component file & change name (keep .wc.svelte extension)
    2. Confirm tagname, this is what gets used as the custom element name, e.g. <wc-button />
    3. Run: `npm run dev -- --open` to start the demo environment
    4. To add to demo environment create a .demo.js file insde demo/src/wc-controls directory
    5. Develop the component
    6. Add component to your bundle by running: `npm run build`

    Svelte documentation:
    https://svelte.dev/docs/custom-elements-api
-->
<svelte:options customElement="wc-example" />

<script>
    // JavaScript goes here
    console.log("Hello world!");
</script>

<p>
    Hello World
    <slot />
</p>

<style lang="scss">
    // Style goes here
    p {
        color: red;
    }
</style>
