<script>
    import iconCopy from "../icons/copy.svg?raw";
    import iconCopySuccess from "../icons/copy-success.svg?raw";

    export let text;

    let success = false;

    let timeout;

    // Copy raw element content to clipboard for easy copy/pasting
    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(text);
            success = true;

            // Reset button back to default state after 2 seconds
            window.clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                success = false;
            }, 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
            success = false;
        }
    }
</script>

<button
    on:click|stopPropagation={copyToClipboard}
    class:success
    title="Copy to Clipboard"
>
    {@html success ? iconCopySuccess : iconCopy}
</button>

<style lang="scss">
    @use "../../../lib/style/variables.scss" as *;

    button {
        font-size: 0.8rem;
        opacity: 0.7;
        background-color: rgba($colorBackground, 0.5);
        gap: 0.25rem;
        padding: 0.125rem 0.25rem;
        border-radius: 0.25rem;
        height: 1.25rem;
        transition: background-color 0.3s ease-out;

        &:hover {
            background-color: rgba($colorText, 0.1);
        }

        &.success {
            opacity: 0.9;
            background-color: rgba(128, 229, 49, 0.25);

            :global(svg *) {
                color: rgb(128, 229, 49);
            }
        }

        :global(svg) {
            width: 100%;
            height: 100%;
        }

        :global(svg *) {
            transition: color 0.3s ease-out;
        }
    }
</style>
