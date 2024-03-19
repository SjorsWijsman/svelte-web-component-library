<script>
    export let groups = [];
    export let currentGroup = "";
</script>

{#if groups.length}
    <div>
        <!-- <p>Show Group</p> -->
        <select class="groups" bind:value={currentGroup}>
            <option value={""}>All</option>
            {#each groups as group}
                <option value={group}>
                    {group}
                </option>
            {/each}
        </select>
    </div>
{/if}

<style lang="scss">
    @import "../../style/_variables.scss";

    .groups {
        font-size: 0.9rem;
        min-width: 0;
        display: flex;
        margin: 0;
    }
</style>
