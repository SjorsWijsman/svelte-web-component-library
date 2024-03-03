<!-- 
    1. Copy component file & change name (keep .wc.svelte extension)
    2. Add component to exports in index.js
    3. Change tagname, this is what gets used as the custom element name, e.g. <porton-button />
    4. To add to demo environment add the component to webComponentList.js
    5. Run: `npm run dev -- --open` to start the demo environment
    6. Develop the component
    7. Add component to bundle by running: `npm run build`
-->
<svelte:options customElement="porton-TEMPLATE" />

<script>
    // JavaScript goes here
    console.log("Hello world!");
</script>

<p>
    Hello World
    <slot />
</p>

<style lang="scss">
    @use "../../lib/src/style/mixins.scss" as *;

    // scss mixins are included for consistent global styling
    * {
        @include reset;
    }

    p {
        @include p;
    }

    // Style goes here
</style>
