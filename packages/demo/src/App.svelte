<script>
    import * as library from "../../lib";
    import componentList from "./webComponentList";
    import ComponentContainer from "./components/ComponentContainer.svelte";
</script>

<main>
    <h1>Porton Components Demo</h1>
    <hr />

    {#each componentList as component}
        <ComponentContainer
            title={component.title}
            props={component.props}
            slots={component.slots}
        />
    {/each}
</main>
