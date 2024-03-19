<svelte:options
    customElement={{
        tag: "wc-app-preview",
        // props: {
        //     videos: { type: "Array" },
        //     colors: { type: "Array" },
        //     titles: { type: "Array" }
        // }
    }}
/>

<script>
    import VideoPlayer from "./VideoPlayer.wc.svelte";

    export let videos = "";
    export let colors = "";
    export let titles = "";

    $: videoList = videos.split(",");
    $: colorList = colors.split(",");
    $: titleList = titles.split(",");

    let selected = 0;
    let itemList = [];

    $: itemList = videoList.map((video, i) => ({
        video,
        color: colorList[i],
        title: titleList[i],
    }));
</script>

<div class="container">
    {#if itemList.length}
        <div>
            {#each itemList as button, i}
                <button
                    on:click={() => (selected = i)}
                    class:active={selected === i}
                    disabled={selected === i}
                    style:--color-background={button.color}
                    style:--color-transparent={button.color + "77"}
                >
                    {button.title}
                </button>
            {/each}
        </div>
        {#each itemList as video, i}
            <VideoPlayer
                src={video.video}
                color={video.color}
                hide={selected !== i}
            />
        {/each}
    {/if}
</div>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    .container {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        gap: 2rem;
    }

    @media only screen and (max-width: 35rem) {
        .container {
            grid-template-columns: 1fr 2fr;
        }
    }

    @media only screen and (max-width: 20rem) {
        .container {
            grid-template-columns: 1fr 2fr;
        }
    }

    .container div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    button {
        background-color: var(--color-background);
        outline: 0.25rem solid var(--color-transparent);
        box-shadow: 0 0 2rem var(--color-transparent);
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        padding: 1rem;
        opacity: 0.5;
        transition: opacity 0.5s ease-out;

        &:not(.active) {
            &:hover,
            &:focus {
                opacity: 0.75;
                background-color: var(--color-background);
                filter: brightness(1.1) saturate(1.1);
            }
        }

        &.active {
            opacity: 1;

            &:hover,
            &:focus {
                background-color: var(--color-background);
            }
        }

        &:disabled {
            cursor: default;
        }
    }
</style>
