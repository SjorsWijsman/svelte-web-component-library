<svelte:options customElement="wc-menu-opener" />

<script>
    import { onMount } from "svelte";

    export let target;

    let button;

    let buttonY, buttonX;

    let dialogPositionX = "right"; // "left / center / right"

    function getButtonCoordinates() {
        const rect = button.getBoundingClientRect();

        buttonY = rect.top + rect.height;

        buttonX = rect.left;
        if (dialogPositionX === "center") {
            buttonX = rect.left + rect.width / 2;
        } else if (dialogPositionX === "right") {
            buttonX = rect.left + rect.width;
        }
    }

    // Call the function to get the coordinates when the component is mounted
    onMount(getButtonCoordinates);

    function handleClick(event) {
        const dialog = document.querySelector(`wc-menu-dialog#${target}`);
        if (!dialog) return;

        dialog.y = buttonY;
        dialog.x = buttonX;
        dialog.xAnchor = dialogPositionX;

        // Open delayed by 1 ms to trigger after clickoutside handler of the dialog
        setTimeout(() => {
            dialog.open = !dialog.open;
        }, 1);
    }
</script>

<button on:click={handleClick} bind:this={button}>
    <slot>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    </slot>
</button>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    button {
        background: none;
        border: none;
        padding: 0.5rem;

        svg {
            color: $colorText;
        }

        &:hover,
        &:focus {
            background-color: rgba($colorText, 0.1);
        }
    }
</style>
