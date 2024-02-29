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
</p>
<slot />

<style lang="scss">
    @use "../../lib/src/style/mixins.scss" as *;

    * {
        @include reset;
    }

    p {
        @include p;
    }
</style>
