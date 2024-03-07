<svelte:options customElement="porton-difficulty" />

<script>
    export let difficulty = 0;

    const difficulties = [
        {
            title: "Beginners",
            color: "#80E531",
        },
        {
            title: "Gevorderden",
            color: "#E5C931",
        },
        {
            title: "Tech Wizards",
            color: "#E53131",
        },
    ];
</script>

<p style:color={difficulties[difficulty]?.color}>
    {difficulties[difficulty]?.title}
    <slot />
</p>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../lib/style/global.scss";
</style>
