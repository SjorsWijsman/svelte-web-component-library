<script>
    import * as lib from "../../lib";
    import "./demo.scss";

    import { validateComponent } from "./scripts/validateComponent";
    import ComponentContainer from "./components/ComponentContainer.svelte";
    import iconSearch from "./icons/search.svg?raw";

    let componentList = [];

    // Loop through lib & import wc control files
    for (let name in lib) {
        import(`./wc-controls/${name}.demo.js`)
            .then((module) => {
                let component = module.default;
                validateComponent(
                    name,
                    component,
                    componentList,
                    () => (componentList = [...componentList, component])
                );
                componentList.sort((a, b) => a.title.localeCompare(b.title));
            })
            .catch((error) => {
                // console.error(error);
                console.warn(`[svelte-wc] ${name}: Demo file is missing.`);
            });
    }

    let searchTerm = "";

    $: componentListFiltered = componentList;

    function search() {
        componentListFiltered = componentList.filter((component) =>
            component.title.includes(searchTerm.toLocaleLowerCase())
        );
    }
</script>

<main>
    <h1>Demo Environment</h1>
    <p>
        {componentList.length} Components
        {#if searchTerm}
            -
            {componentListFiltered.length} result
        {/if}
    </p>
    <hr />
    <div class="search">
        {@html iconSearch}
        <input
            type="text"
            bind:value={searchTerm}
            on:input={search}
            placeholder="Search for components"
        />
    </div>
    <hr />
    {#each componentListFiltered as component (component.title)}
        <ComponentContainer
            title={component.title}
            props={component.props}
            slots={component.slots}
        />
    {/each}
</main>

<style lang="scss">
    h1 {
        font-size: 2rem;
    }

    p {
        opacity: 0.7;
    }

    .search {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;

        :global(svg) {
            opacity: 0.5;
        }

        input {
            margin: 0;
            width: 100%;
            opacity: 0.7;
            transition: opacity 0.3s ease-out;

            &:focus {
                opacity: 1;
            }

            ::placeholder {
                font-size: 0.7rem;
            }
        }
    }
</style>
