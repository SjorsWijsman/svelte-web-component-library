<script>
    import "../../lib";
    import ComponentContainer from "./ComponentContainer.svelte";
</script>

<main>
    <h1>Porton Components Demo</h1>
    <hr />

    <ComponentContainer title="my-clock">
        <my-clock>
            <h2 slot="header">[h2] header</h2>
            <p>Content</p>
            <small slot="footer">[small] footer</small>
        </my-clock>
    </ComponentContainer>

    <ComponentContainer title="my-button">
        <my-button></my-button>
    </ComponentContainer>
</main>

<style>
    h1 {
        margin-bottom: 1rem;
    }

    hr {
        margin-bottom: 4rem;
        opacity: 0.1;
    }
</style>
