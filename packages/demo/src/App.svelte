<script>
    import * as lib from "../../lib";
    import "./demo.scss";

    import ComponentContainer from "./components/ComponentContainer.svelte";

    let componentList = [];

    for (let name in lib) {
        import(`./wc-controls/${name}.demo.js`)
            .then((module) => {
                let component = module.default;
                validateComponent(
                    name,
                    component,
                    () => (componentList = [...componentList, component])
                );
            })
            .catch((error) => {
                console.warn(`${name}: Demo file is missing.`);
            });
    }

    function validateComponent(name, component, onValidation) {
        if (!component.title) {
            console.error(`${name}: Component has no defined title.`);
            return false;
        }
        onValidation();
        return true;
    }
</script>

<main>
    <h1>Demo Environment</h1>
    <hr />

    {#each componentList as component}
        <ComponentContainer
            title={component.title}
            props={component.props}
            slots={component.slots}
        />
    {/each}
</main>

<style>
    h1 {
        font-size: 2rem;
    }
</style>
