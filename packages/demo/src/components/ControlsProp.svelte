<script>
    export let prop;
    export let onupdate;
</script>

<hr />
<label for={prop.name}>{prop.name}</label>
<select id={prop.name} bind:value={prop.selected} on:change={onupdate}>
    {#each prop.options as option}
        <option value={option}>{option}</option>
    {/each}
</select>

<style lang="scss">
    @use "../../../lib/src/style/variables.scss" as *;

    hr {
        width: 100%;
        opacity: 0.1;
        margin: 0.15rem 0 0.25rem;
    }

    label {
        font-size: 0.8rem;
        opacity: 0.7;
        margin-top: 0.5rem;
        margin-bottom: 0.1rem;
    }

    select {
        font-size: 0.9rem;
        min-width: 4rem;
        padding: 0.25rem;
        margin-bottom: 0.5rem;
    }
</style>
