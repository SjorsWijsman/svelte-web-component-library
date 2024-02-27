<svelte:options tag="my-button" />

<script>
    let count = 0;
</script>

<button on:click={() => count++}>
    {count}
    <slot />
</button>

<style>
    button {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        background-color: darkred;
        color: yellow;
        border: 0px solid transparent;
        min-width: 5rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
</style>
