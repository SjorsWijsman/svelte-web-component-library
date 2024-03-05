<script>
    export let name;
    export let prop;

    prop.value ??= prop.default;
</script>

<label for={name}>{name}</label>
{#if prop.controls === "Select"}
    <select id={name} bind:value={prop.value}>
        {#each prop.options as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
{:else if prop.controls === "Boolean"}
    <input type="checkbox" id={name} bind:checked={prop.value} />
{:else if prop.controls === "Number"}
    <input type="number" id={name} bind:value={prop.value} />
{:else if prop.controls === "Function"}
    <input
        type="button"
        on:click={prop.value}
        value="function()"
        title={prop.value}
    />
{:else}
    <input type="text" id={name} bind:value={prop.value} />
{/if}

<style>
    input[type="button"] {
        font-size: 1rem;
        font-family: "Neuton", serif;
        font-weight: 400;
        font-style: italic;
    }
</style>
