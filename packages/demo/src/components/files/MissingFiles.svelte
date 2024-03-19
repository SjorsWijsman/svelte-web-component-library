<script>
    import { missingList } from "$store";

    let open = false;
</script>

{#if $missingList.length}
    <button on:click={() => (open = !open)}>
        {$missingList.length} components without a demo file
    </button>
    {#if open}
        <ul>
            {#each $missingList as name}
                <li>{name}</li>
            {/each}
        </ul>
    {/if}
{/if}

<style lang="scss">
    @import "../../style/_variables.scss";

    button {
        padding: 0.5rem 1rem;
        font-size: 0.7rem;
        border-radius: 0;
        color: $colorWarning;
        border-top: 1px solid rgba($colorWarning, 0.3);
        background-color: rgba($colorWarning, 0.05);
    }

    button:hover {
        background-color: rgba($colorWarning, 0.1);
    }

    ul {
        margin: 0;
        padding: 1rem;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        background-color: rgba($colorWarning, 0.025);

        li {
            font-size: 0.8rem;

            &:not(:last-child)::after {
                content: ",";
            }
        }
    }
</style>
