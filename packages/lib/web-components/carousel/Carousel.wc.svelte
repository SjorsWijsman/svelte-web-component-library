<svelte:options customElement="wc-carousel" />

<script>
    import emblaCarouselSvelte from "embla-carousel-svelte";

    let options = { align: "start", dragFree: true };
</script>

<div class="embla" use:emblaCarouselSvelte={{ options }}>
    <div class="embla__container">
        <!-- I hate this, but each slide needs its own wrapper -->
        {#if $$slots["0"]}<div class="embla__slide"><slot name="0" /></div>{/if}
        {#if $$slots["1"]}<div class="embla__slide"><slot name="1" /></div>{/if}
        {#if $$slots["2"]}<div class="embla__slide"><slot name="2" /></div>{/if}
        {#if $$slots["3"]}<div class="embla__slide"><slot name="3" /></div>{/if}
        {#if $$slots["4"]}<div class="embla__slide"><slot name="4" /></div>{/if}
        {#if $$slots["5"]}<div class="embla__slide"><slot name="5" /></div>{/if}
        {#if $$slots["6"]}<div class="embla__slide"><slot name="6" /></div>{/if}
        {#if $$slots["7"]}<div class="embla__slide"><slot name="7" /></div>{/if}
        {#if $$slots["8"]}<div class="embla__slide"><slot name="8" /></div>{/if}
        {#if $$slots["9"]}<div class="embla__slide"><slot name="9" /></div>{/if}
    </div>
</div>
<slot />

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    .embla {
        overflow: hidden;
        margin: 0 auto;
        max-width: $widthContent;
    }

    .embla__container {
        display: flex;
        align-items: stretch;
    }

    .embla__slide {
        flex: 0 0 20rem;
        min-width: 0;
        margin-right: 1rem;
    }
</style>
