<script>
    import Shield from "./shield.svg?raw"
</script>

<div class="image-container">
    {@html Shield}
</div>

<style>
    .image-container :global(svg) {
        width: 100%;
        height: 100%;
        filter: drop-shadow(0 0 1rem #521465);
    }
</style>