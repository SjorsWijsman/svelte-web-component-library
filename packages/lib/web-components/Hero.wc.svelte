<svelte:options customElement="wc-hero" />

<script>
    import iconArrowDown from "../icons/arrow-down.svg?raw";
    // import nederland from "../assets/netherlands-large.svg?raw"

    export let nextsectionid = "";
</script>

<section>
    <div class="header">
        <div class="title">
            <h1><slot name="header" /></h1>
            <p><slot name="subheader" /></p>
        </div>
        <slot />
    </div>
    <a href="#{nextsectionid}" class="arrow-down">{@html iconArrowDown}</a>
    <div class="nederland">
        <!-- {@html nederland} -->
    </div>
</section>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    section {
        position: relative;
        min-height: calc(100vh - 4rem);
        background: linear-gradient(to bottom, #e9e9ea, #ced0ea);
        outline: 1px solid $colorOutline;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 2rem;
        padding-top: min(14rem, 30vh);
        z-index: 1;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 50%;
            background: linear-gradient(to right, #ededf1, transparent);
            z-index: -1;
        }
    }

    .header {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 8rem;
        max-width: $widthContent;
        margin: 0 auto;
        align-items: flex-start;

        h1 {
            margin-bottom: 0.3em;
            line-height: 1.3em;
        }

        p {
            max-width: 40ch;
            font-size: 1.2rem;
            opacity: 0.9;
        }
    }

    a.arrow-down {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        width: 1.6rem;
        height: 1.6rem;
        padding: 0.2rem;
        aspect-ratio: 1 / 1;
        color: $colorBackground;
        background-color: $colorText;
        transition: all 0.3s ease-out;

        :global(svg) {
            width: 100%;
            height: 100%;
        }

        &:hover {
            background-color: rgba($colorText, 0.8);
            transform: translate(-50%, 50%) scale(1.2);
        }
    }

    .nederland {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: -1;
        overflow: hidden;

        :global(svg) {
            position: relative;
            height: 70vmax;
            left: 5vw;
        }
    }
</style>
