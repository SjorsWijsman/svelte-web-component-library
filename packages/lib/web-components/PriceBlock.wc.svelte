<svelte:options customElement="wc-priceblock" />

<script>
    export let size = "200 GB";
    export let price = "€4,65/pm";
    export let hero = false;
</script>

<section class:hero>
    <h2>
        Private Cloud <span>vanaf {size}</span>
    </h2>
    <p class="price">{price}</p>
    <slot><p>Probeer nu gratis uit!</p></slot>
    <button>Aanmelden</button>
</section>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba($colorWhite, 0.8);
        backdrop-filter: blur(1rem);
        color: $colorBlack;
        border-top: 0.5rem solid $colorPink;
        padding: 2rem;
        max-width: 20rem;
        margin: 0 auto;

        &.hero {
            position: absolute;
            bottom: -3.5rem;
            z-index: 5;
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 1rem;
            width: 100%;
            background: linear-gradient(to bottom, $colorPink, transparent);
            opacity: 0.1;
        }

        h2 {
            display: flex;
            flex-direction: column;
            align-items: center;

            span {
                font-size: 1rem;
                color: $colorPink;
            }
        }

        .price {
            padding: 2rem 0;
            text-align: center;
            font-size: 2.5rem;
            color: $colorBlue;
            font-weight: bold;
        }

        button {
            @include button($colorWhite, $colorPink);
            width: 100%;
            padding: 1.5rem;
            font-weight: bold;
            margin-top: 0.5rem;
        }
    }
</style>
