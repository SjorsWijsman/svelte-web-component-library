<svelte:options customElement="wc-carousel-slide" />

<div class="slide">
    <img src="" alt="Slide" />
    <div class="content">
        <slot>
            <h3>Slide title</h3>
            <p>Slide content lol</p>
        </slot>
    </div>
</div>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    .slide {
        display: grid;
        grid-template-rows: auto 1fr;
        background-color: $colorBlack;
        height: 100%;

        img {
            width: 100%;
            height: 10rem;
            background-color: rgba($colorBackground, 0.4);
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 2rem 1rem;
        }
    }
</style>
