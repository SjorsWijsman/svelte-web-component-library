<script>
    import InfoBar from "$components/preview/InfoBar.svelte";
    import Iframe from "$components/preview/Iframe.svelte";

    import { selectedComponent } from "$store";
</script>

<div>
    {#if $selectedComponent}
        <InfoBar />
        <Iframe />
    {:else}
        <p>Select a component to preview</p>
    {/if}
</div>

<style lang="scss">
    div {
        width: 100%;
        height: 100%;
        padding: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        font-size: 1.5rem;
        opacity: 0.3;
        text-align: center;
    }
</style>
