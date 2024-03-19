<svelte:options customElement="wc-infoblock" />

<script>
    import Cloud from "../info-block-images/Cloud.wc.svelte";
    import Netherlands from "../info-block-images/Netherlands.wc.svelte";
    import Shield from "../info-block-images/Shield.wc.svelte";

    export let image = "cloud";
    $: color = types[image].color;

    const types = {
        cloud: {
            component: Cloud,
            color: "#143575",
        },
        netherlands: {
            component: Netherlands,
            color: "#753714",
        },
        shield: {
            component: Shield,
            color: "#731475",
        },
    };
</script>

<article>
    <div
        style:background={`radial-gradient(ellipse at center, ${color}, transparent 75%)`}
        class="image"
    >
        <svelte:component this={types[image].component} />
    </div>
    <div class="content">
        <slot name="title">
            <h3>InfoBlock Title</h3>
        </slot>
        <slot />
    </div>
</article>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    article {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    }

    .image {
        position: relative;
        width: 100%;
        height: 10rem;
        margin: 1rem 0;
        background-color: $colorBackground;
        margin-bottom: 2rem;

        & :global(.image-container) {
            position: absolute;
            top: -1rem;
            left: 50%;
            height: 12rem;
            width: 12rem;
            transform: translateX(-50%);
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    @media (max-width: 60rem) {
        article {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 35rem) {
        article {
            grid-template-columns: 1fr;
        }
    }
</style>
