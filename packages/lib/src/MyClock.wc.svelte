<svelte:options tag="my-clock" />

<div>
    <h2>
        <slot name="header" />
    </h2>

    <p>Hi I am <strong>a clock</strong></p>

    <slot />

    <small>
        <slot name="footer" />
    </small>
</div>

<style>
    h2 {
        color: var(--color);
    }

    small {
        color: red;
    }

    p strong {
        color: blue;
    }
</style>
