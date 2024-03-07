<svelte:options customElement="wc-text-slider" />

<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let textlist = "Lorem,Ipsum,Dolor,Sit,Amet";

    let text = `${textlist}`.split(",");
    let slide = 0;
    let displayedText = text[0];

    onMount(() => {
        window.setInterval(() => {
            slide++;
            if (text.length === slide) slide = 0;
            displayedText = text[slide];
        }, 1500);
    });
</script>

<span class="container" style:height={`calc(1em - 1px)`}>
    {#key displayedText}
        <span
            class="slider"
            in:fly={{ y: 40, duration: 700 }}
            out:fly={{ y: -40, duration: 500 }}
        >
            {displayedText}
        </span>
    {/key}
</span>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../lib/style/global.scss";

    .container {
        position: relative;
    }

    .container .slider {
        position: absolute;
        font-size: inherit;
        font-weight: 750;
        background: -webkit-linear-gradient(left, $colorPink, $colorPurple);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
