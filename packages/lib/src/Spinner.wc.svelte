<svelte:options customElement="porton-spinner" />

<script>
    let momentum = 0; // stored momentum
    let rotation = 0; // current rotation in deg

    const resolution = 100; // amount of times to run per second
    const power = 3; // added momentum value on click
    const damping = 1.01; // rate of slowing

    const interval = setInterval(() => {
        if (momentum) {
            rotation += momentum;
            if (momentum < 0.01) {
                momentum = 0;
            } else momentum /= damping;
        }
    }, 1000 / resolution);
</script>

<button
    on:click={() => (momentum += power)}
    style:transform={`rotate(${rotation}deg)`}
    style:filter={`brightness(${100 + momentum}%)`}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#46AAC6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-refresh-cw"
    >
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
    </svg>
</button>

<style>
    button {
        width: 6rem;
        height: 6rem;
        border-radius: 100%;
        border: 0 solid transparent;
        background: #101865;
        cursor: pointer;
    }

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 70%;
    }
</style>
