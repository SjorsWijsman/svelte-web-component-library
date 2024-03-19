<script>
    import Search from "$components/list/Search.svelte"
    import GroupSelector from "$components/list/GroupSelector.svelte"    
    import { 
        componentList, 
        selectedComponent, 
        searchTerm, 
        groups, 
        currentGroup 
    } from "$store"
  import MissingFiles from "./files/MissingFiles.svelte";

    let componentListFiltered = [];

    // Add componentlist to filtered for initial list
    $: componentListFiltered = $componentList

    // Filter list on update of searchterm or currentgroup
    $: filterList($searchTerm, $currentGroup, $componentList)

    function filterList($searchTerm, $currentGroup) {
        let list = $componentList
        if ($searchTerm) {
            list = list.filter((component) =>
                component.title.includes($searchTerm.toLocaleLowerCase())
            );
        }
        if ($currentGroup) {
            list = list.filter(
                (component) => component.group === $currentGroup
            );
        }
        componentListFiltered = list
    }
</script>

<div class="header">
    <h1>Web Component Library</h1>
    <p>
        {$componentList.length} Components
        {#if $searchTerm || $currentGroup}
            -
            {componentListFiltered.length} results
        {/if}
    </p>
</div>
<div class="filters">
    <Search bind:searchTerm={$searchTerm} />
    <GroupSelector bind:groups={$groups} bind:currentGroup={$currentGroup} />
</div>
<div class="component-list">
    {#if componentListFiltered.length === 0}
        <p class="empty">No components found</p>
    {:else}
        <ul>
            {#each componentListFiltered as component (component.title)}
                <li>
                    <button 
                        on:click={() => $selectedComponent = component}
                        class:selected={component.title === $selectedComponent?.title}
                        disabled={component.title === $selectedComponent?.title}
                    >
                        {component.title.split("-").slice(1).join(" ")}
                        <span>{`<${component.title} />`}</span>
                    </button>
                </li>
            {/each}
        </ul>
    {/if}
</div>
<MissingFiles />

<style lang="scss">
    @use 'sass:color';
    @import '../style/_variables.scss';

    h1 {
        font-weight: bold;
        font-size: 1.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p {
        opacity: 0.8;
        margin-top: 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    div {
        padding: 1rem;
    }

    .header {
        border-bottom: 1px solid color.scale($colorBackground, $lightness: 15%);
    }

    .filters, .component-list {
        background-color: color.scale($colorBackground, $lightness: 7.5%);
    }

    .filters {
        display: flex;
        gap: 0.25rem;
    }

    .component-list {
        height: 100%;
        padding: 0;
        overflow: hidden auto;
        direction: rtl;

        ul {
            direction: ltr;
            list-style: none;
            display: flex;
            flex-direction: column;

            li {
                width: 100%;
            }
        }

        .empty {
            text-align: center;
            opacity: 0.6;
        }

        button {
            width: 100%;
            font-size: 0.9rem;
            color: $colorText;
            background-color: transparent;
            border: 0;
            border-radius: 0;
            text-align: start;
            display: flex;
            flex-direction: column;
            text-transform: capitalize;
            font-weight: bold;
            text-wrap: nowrap;
            transition: all .1s ease-out;
            padding: 0.5rem 1rem;

            span {
                text-transform: lowercase;
                font-size: 0.8rem;
                opacity: 0.8;
            }

            &:hover {
                background-color: color.scale($colorBackground, $lightness: 12.5%)
            }
            
            &.selected {
                background-color: color.scale($colorBackground, $lightness: 20%);
            }
        }
    }
</style>