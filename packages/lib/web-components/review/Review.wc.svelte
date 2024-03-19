<svelte:options customElement="wc-review" />

<script>
    import StarIcon from "../../icons/star.svg?raw";
    import ChevronRight from "../../icons/chevron-right.svg?raw";

    let open = false;
</script>

<article>
    <div class="header">
        <div class="icon">
            <slot name="icon">
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.9">
                        <path
                            d="M24 26C28.4183 26 32 22.4183 32 18C32 13.5817 28.4183 10 24 10C19.5817 10 16 13.5817 16 18C16 22.4183 19.5817 26 24 26Z"
                            stroke="#AFC9FD"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M36 38C36 34.8174 34.7357 31.7652 32.4853 29.5147C30.2348 27.2643 27.1826 26 24 26C20.8174 26 17.7652 27.2643 15.5147 29.5147C13.2643 31.7652 12 34.8174 12 38"
                            stroke="#AFC9FD"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                </svg>
            </slot>
        </div>
        <div class="header-content">
            <slot name="name">
                <h3>Name</h3>
            </slot>
            <p>
                <slot name="title">Title of person</slot>
            </p>
            <span>
                {@html Array(5).fill(StarIcon).join("")}
            </span>
        </div>
    </div>
    <div class="content" class:open>
        <slot />
    </div>
    {#if !open}
        <button on:click={() => (open = true)}>
            Lees meer
            {@html ChevronRight}
        </button>
    {/if}
</article>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../../style/global.scss";

    article {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        max-width: calc($widthContent / 2);
        margin: 0 auto;
    }

    .header {
        display: flex;
        gap: 1.25rem;
        align-items: center;

        .icon {
            display: flex;
            min-height: 5rem;
            min-width: 5rem;
            aspect-ratio: 1/1;
            background-color: $colorBlack;
            border-radius: 0.5rem;
            padding: 0.75rem;
            align-items: center;
            justify-content: center;

            svg {
                width: 100%;
                height: 100%;
            }
        }

        .header-content {
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
        }

        p {
            opacity: 0.8;
        }

        span {
            display: flex;
            gap: 0.25rem;

            :global(svg) {
                margin-top: 0.25rem;
                width: 1rem;
                height: 1rem;
            }
        }
    }

    .content {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;

        &.open {
            -webkit-line-clamp: unset;
            line-clamp: unset;
        }
    }

    button {
        padding: 0;
        height: unset;
        background-color: transparent;
        color: $colorText;
        text-align: start;
        justify-content: flex-start;
        opacity: 0.5;
        transition: opacity 0.3s ease-out;

        :global(svg) {
            transform: rotate(90deg);
            transition: transform 0.3s ease-out;
        }

        &:hover {
            background-color: transparent;
            opacity: 1;

            :global(svg) {
                transform: rotate(90deg) translateX(0.15rem);
            }
        }
    }
</style>
