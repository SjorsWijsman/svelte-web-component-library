<svelte:options customElement="wc-textslider" />

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

<span class="container">
    {#key displayedText}
        <span
            class="slider"
            in:fly={{ y: 40, duration: 700 }}
            out:fly={{ y: -40, duration: 500 }}
        >
            {displayedText}
        </span>
    {/key}
    <span class="placeholder" aria-hidden="true">
        {displayedText}
    </span>
</span>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    .container {
        display: inline-block;
        position: relative;
        font-weight: 750;
    }

    .container .slider {
        position: absolute;
        font-family: $fontHeader;
        font-weight: inherit;
        background: $colorBlue;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .container .placeholder {
        opacity: 0;
        user-select: none;
        font-family: $fontHeader;
        font-weight: 750;
    }
</style>
