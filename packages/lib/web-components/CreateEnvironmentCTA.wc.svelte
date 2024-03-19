<svelte:options customElement="wc-create-environment-cta" />

<script>
    import ArrowDown from "../icons/arrow-down.svg?raw";

    let name = "";

    $: name = name.toLowerCase().replace(/[^a-z0-9]/g, "-");
</script>

<div>
    <label for="jouw-naam">
        <slot />
        <input placeholder="jouw-naam" id="jouw-naam" bind:value={name} />
        <a href="/">{@html ArrowDown}</a>
    </label>
    <span>.wc.nl</span>
</div>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    div {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 0.5rem;
    }

    label {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    input {
        padding: 0.5rem 0.75rem;
        padding-right: 2.6rem;
        height: 2.6rem;
    }

    span {
        opacity: 0.9;
    }

    label ~ span {
        padding: 0.5rem 0;
    }

    a {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        bottom: 0;
        margin: 0.4rem;
        padding: 0.25rem;
        height: 1.8rem;
        width: 1.8rem;
        background-color: rgba($colorBlueLight, 0.15);
        border-radius: 0.25rem;

        & :global(svg) {
            width: 100%;
            height: 100%;
            transform: rotate(-90deg);
            transition: transform 0.2s ease-out;
        }

        &:hover,
        &:focus {
            background-color: rgba($colorBlueLight, 0.3);

            & :global(svg) {
                transform: rotate(-90deg) translateY(0.1rem);
            }
        }
    }
</style>
