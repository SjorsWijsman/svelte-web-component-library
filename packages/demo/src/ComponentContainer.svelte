<script>
    export let title = "";
</script>

<section>
    <div class="title">
        {title}
    </div>
    <div class="component">
        <slot />
    </div>
</section>

<style>
    section {
        outline: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 2rem;
    }

    .title {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .component {
        padding: 1rem;
        position: relative;
    }

    .component::after {
        content: "";
        position: absolute;
        left: 1rem;
        top: 1rem;
        width: calc(100% - 2rem);
        height: calc(100% - 2rem);
        outline: 1px dashed rgba(255, 255, 255, 0.05);
        pointer-events: none;
        user-select: none;
    }
</style>
