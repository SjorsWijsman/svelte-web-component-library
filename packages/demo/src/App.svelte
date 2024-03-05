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
        if (component.props) {
            for (let key of Object.keys(component.props)) {
                let prop = component.props[key];
                if (prop.controls === "Select") {
                    if (!prop.options || !Array.isArray(prop.options)) {
                        console.error(
                            `${name}: [${key}] Select controls require an options prop as list`
                        );
                        return false;
                    } else if (!prop.options?.length) {
                        console.error(
                            `${name}: [${key}] Options list can not be empty`
                        );
                        return false;
                    }
                }
            }
        }
        onValidation();
        return true;
    }
</script>

<main>
    <h1>Demo Environment</h1>
    <p>{componentList.length} Components</p>
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

    p {
        opacity: 0.7;
    }
</style>
