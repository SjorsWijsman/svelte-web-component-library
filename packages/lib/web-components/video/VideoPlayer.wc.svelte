<svelte:options customElement="wc-videoplayer" />

<script>
    export let src;
    export let color;
    export let hide;
    export let aspectRatio = "1 / 2";

    let paused;
    let currentTime;

    $: (paused = hide), (currentTime = 0);
</script>

<video
    {src}
    autoplay
    loop
    playsinline
    bind:currentTime
    bind:paused
    controlsList="nofullscreen"
    style:--color-background={color}
    style:--color-transparent={color + "77"}
    style:display={hide ? "none" : "block"}
    style:aspect-ratio={aspectRatio}
>
    <track default kind="captions" srclang="en" src="" />
</video>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    video {
        height: 26rem;
        outline: 0.25rem solid var(--color-background);
        background-color: var(--color-transparent);
        box-shadow: 0 0 2rem var(--color-transparent);
        border-radius: 0.75rem;
        aspect-ratio: 1 / 2;
        margin: 2rem 0;
    }
</style>
