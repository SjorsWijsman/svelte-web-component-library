<svelte:options tag="porton-link" />

<script>
    export let href = "";

    export let center = false;
    export let button = false;
    export let secondary = false;

    export let color = "var(--color-text)";
    export let background = "";

    let component;
</script>

<a
    {href}
    bind:this={component}
    class:button
    class:center
    class:secondary
    style:--color={color}
    style:--background={background}
>
    <slot />
</a>

<style lang="scss">
    @use "../../lib/src/style/variables.scss" as *;

    a {
        color: var(--color);
        background-color: var(--background);
        text-decoration: none;
        font-weight: 300;
        opacity: 0.6;
        font-size: 0.9rem;
        vertical-align: middle;
    }

    a.button {
        opacity: 1;
        --color: var(--color-text);
        --background: var(--color-background);
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        border: 0px solid transparent;
        touch-action: manipulation;
        cursor: pointer;
        color: var(--color);
        background-color: var(--background);
        padding: 0.5rem 1rem;
        height: 2.6rem;
        border-radius: 0.5rem;
    }

    a.center {
        margin: 0 auto;
        text-align: center;
        opacity: 0.8;
    }

    a :global(svg) {
        font-size: 1em;
        position: relative;
        display: inline;
        width: 1.25em;
        height: 1.25em;
        left: -0.4em;
        transition: transform 0.2s ease-out;
    }
</style>
