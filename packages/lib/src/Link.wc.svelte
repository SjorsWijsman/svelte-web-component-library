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
    @use "../../lib/src/style/mixins.scss" as *;

    * {
        @include reset;
    }

    a {
        @include a;
    }
</style>
