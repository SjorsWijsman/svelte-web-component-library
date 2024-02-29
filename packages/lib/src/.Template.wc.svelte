<!-- 
    1. Add component to exports in index.js
    2. Change tagname, this is what gets used as the custom element name, e.g. <porton-button />
    3. Add component to demo environment, examples inside demo/src/App.svelte
    4. Run: `npm run dev -- --open` to start the demo environment
    5. Develop the component
    6. Add component to bundle by running: `npm run build`
-->
<svelte:options tag="porton-NAME" />

<script>
    // JavaScript goes here
</script>

<p>
    Hello World
    <slot />
</p>

<style lang="scss">
    @use "../../lib/src/style/mixins.scss" as *;

    // scss includes are added for consistent global styling
    * {
        @include reset;
    }

    p {
        @include p;
    }

    // Style goes here
</style>
