<script>
    export let slot;
    export let onupdate;
</script>

<hr />
<label for={slot.title}>{slot.title}</label>
<input bind:value={slot.content} on:change={onupdate} on:input={onupdate} />

<style lang="scss">
    @use "../../../lib/src/style/variables.scss" as *;

    hr {
        width: 100%;
        opacity: 0.1;
        margin: 0.15rem 0 0.25rem;
    }

    label {
        font-size: 0.9rem;
        opacity: 0.7;
        margin-top: 0.5rem;
        margin-bottom: 0.1rem;
    }

    input {
        font-size: 0.9rem;
        min-width: 4rem;
        padding: 0.25rem;
        height: unset;
        background-color: $colorBackground;
        border-radius: 0.25rem;
        margin-bottom: 0.5rem;
    }
</style>
