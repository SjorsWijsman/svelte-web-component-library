<svelte:options customElement="porton-text-slider" />

<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let textlist;

    let text = textlist.split(",");
    let slide = 0;
    let displayedText = text[0];

    let sliderHeight, sliderWidth;

    onMount(() => {
        window.setInterval(() => {
            slide++;
            if (text.length === slide) slide = 0;
            displayedText = text[slide];
        }, 1500);
    });
</script>

<span
    class="container"
    style:height={`${sliderHeight}px`}
    style:width={`${sliderWidth}px`}
>
    {#key displayedText}
        <span
            class="slider"
            in:fly={{ y: 40, duration: 700 }}
            out:fly={{ y: -40, duration: 500 }}
            bind:clientHeight={sliderHeight}
            bind:clientWidth={sliderWidth}
        >
            {displayedText}
        </span>
    {/key}
</span>

<style lang="scss">
    @use "../../lib/src/style/mixins.scss" as *;

    * {
        @include reset;
    }

    .container {
        position: relative;
        display: inline-block;
    }

    .slider {
        position: absolute;
        font-size: inherit;
        font-weight: 750;
        background: -webkit-linear-gradient(left, $colorPink, $colorPurple);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
