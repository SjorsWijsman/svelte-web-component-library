<script>
    export let searchTerm = "";
</script>

<div>
    <div class="search">
        <input
            type="text"
            bind:value={searchTerm}
            placeholder="Search for components"
        />
    </div>
</div>

<style lang="scss">
    div {
        width: 100%;
    }

    .search {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        input {
            margin: 0;
            width: 100%;
            opacity: 0.7;
            transition: opacity 0.3s ease-out;
            font-size: 0.9rem;

            &:focus {
                opacity: 1;
            }
        }
    }
</style>