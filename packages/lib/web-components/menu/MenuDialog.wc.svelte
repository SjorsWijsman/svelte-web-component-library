<svelte:options customElement="wc-menu-dialog" />

<script>
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    export let id;
    export let y, x;
    export let open = false;
    export let xAnchor;
    export let offset = "1.5rem";

    let dialog, rect, top, left;
    let innerWidth;

    // Close dialog on escape key
    function handleEscapeKey(event) {
        if (event.key === "Escape") {
            open = false;
        }
    }

    // Close dialog on click outside
    function handleClickOutside(event) {
        const dialogWC = document.querySelector(`#${id}`);
        if (
            !dialog?.contains(event.target) &&
            !dialogWC?.contains(event.target)
        ) {
            open = false;
        }
    }

    function setBoundingRect(dialog) {
        if (dialog) {
            rect = dialog.getBoundingClientRect();
        } else {
            rect = null;
        }
    }

    // Set the dialog to the location of the calling button
    function setDialogLocation(y, x, rect) {
        if (!y || !x || !dialog) return;

        top = `calc(${y}px + ${offset})`;

        left = `calc(${x}px)`;
        if (xAnchor === "center") {
            left = `calc(${x - rect.width / 2}px)`;
        }
        if (xAnchor === "right") {
            left = `calc(${x - rect.width}px)`;
        }
    }

    $: setBoundingRect(dialog);
    $: setDialogLocation(y, x, rect);

    onMount(() => {
        document.addEventListener("keydown", handleEscapeKey);
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
            document.removeEventListener("click", handleClickOutside);
        };
    });
</script>

<svelte:window bind:innerWidth on:resize={(open = false)} />

{#if open}
    <div
        class="overlay"
        {id}
        bind:this={dialog}
        style:top
        style:left
        transition:slide={{ duration: 300, easing: quintOut }}
        class:open
    >
        <slot />
    </div>
{/if}

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    div {
        position: absolute;
        top: 0;
        left: 0;
        background-color: $colorWhite;
        flex-direction: column;
        display: flex;
        padding: 1rem;
        box-shadow:
            0 0.1rem 1.275rem rgba(0, 0, 21, 0.2),
            0 0.2rem 0.525rem rgba(0, 0, 21, 0.1);
        width: 16rem;
        color: $colorBlack;
        overflow: hidden;
        opacity: 0;
        transition: opacity 0.3s ease-out;
        border-bottom: 0.5rem solid $colorBlue;

        &.open {
            opacity: 1;
        }
    }
</style>
