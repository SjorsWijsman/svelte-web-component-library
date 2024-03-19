<script>
    import * as lib from "$lib/web-components";
    import "$style/global.scss";

    import { Pane, Splitpanes } from "svelte-splitpanes";

    import ComponentList from "$components/ComponentList.svelte";
    import ComponentPreview from "$components/ComponentPreview.svelte";
    import ComponentControls from "$components/ComponentControls.svelte";

    import { validateComponent } from "$scripts/validateComponent";
    import {
        componentList,
        groups,
        selectedComponent,
        missingList,
    } from "$store";

    // Loop through lib & import wc control files
    for (let name in lib) {
        import(`./wc-controls/${name}.demo.js`)
            .then((module) => {
                let component = module.default;
                validateComponent(
                    name,
                    component,
                    $componentList,
                    () => ($componentList = [...$componentList, component])
                );
                // Add group to group list
                if (component.group && !$groups.includes(component.group)) {
                    $groups = [...$groups, component.group].sort();
                }
                // Sort component list
                $componentList.sort((a, b) => a.title.localeCompare(b.title));
            })
            .catch((error) => {
                if (error.message.includes("Unknown variable dynamic import")) {
                    // console.warn(`[svelte-wc] ${name}: Demo file is missing.`);
                    $missingList = [...$missingList, name];
                } else {
                    console.error(`[svelte-wc] ${name}:`, error);
                }
            });
    }
</script>

<main>
    <Splitpanes style="height: 100vh; width: 100vw;" pushOtherPanes={false}>
        <Pane>
            <section class="sidebar">
                <ComponentList />
            </section>
        </Pane>
        <Pane size={60} minSize={30}>
            <section class="preview">
                <ComponentPreview />
            </section>
        </Pane>
        <Pane>
            <section class="sidebar">
                <ComponentControls />
            </section>
        </Pane>
    </Splitpanes>
</main>

<style lang="scss">
    @use "sass:color";
    @import "./style/_variables.scss";

    main {
        :global(.splitpanes__splitter) {
            background-color: color.scale(
                $colorBackground,
                $lightness: 15%
            ) !important;
            border-left: color.scale(
                $colorBackground,
                $lightness: 15%
            ) !important;

            &::after,
            &::before {
                background-color: color.scale(
                    $colorBackground,
                    $lightness: 25%
                ) !important;
            }
        }
    }

    section {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .sidebar {
        background-color: color.scale($colorBackground, $lightness: 10%);
    }

    .preview {
        background-color: $colorBackground;
    }
</style>
