<script>
    export let name;
    export let slot;
</script>

<label for={name}>{name}</label>
<textarea bind:value={slot} id={name} />
