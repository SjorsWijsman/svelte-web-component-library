<script>
    import * as library from "../../lib";
    import ComponentContainer from "./ComponentContainer.svelte";

    const componentList = [
        {
            title: "porton-difficulty",
            props: [
                {
                    title: "difficulty",
                    options: [0, 1, 2],
                    selected: 0,
                },
            ],
        },
        {
            title: "porton-link",
            props: [
                {
                    title: "href",
                    options: ["https://www.porton.nl"],
                    selected: "https://www.porton.nl",
                },
                {
                    title: "button",
                    options: [true, false],
                    selected: false,
                },
            ],
            slots: [
                {
                    title: "default",
                    content: "Porton",
                },
            ],
        },
    ];
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

<style lang="scss">
    @use "../../lib/src/style/variables.scss" as *;

    h1 {
        margin-bottom: 1rem;
    }

    hr {
        margin-bottom: 4rem;
        opacity: 0.1;
    }
</style>
