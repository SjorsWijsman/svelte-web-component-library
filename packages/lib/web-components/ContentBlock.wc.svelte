<svelte:options customElement="wc-contentblock" />

<script>
    export let id = "";
    export let cta = false;
    export let horizontal = false;
</script>

<section {id} class:cta class:horizontal>
    {#if $$slots.divider}
        <div class="divider">
            <slot name="divider" />
        </div>
    {/if}
    <div class="container">
        {#if $$slots.title}
            <div class="header-box">
                <slot name="title" />
                {#if $$slots.subtitle}
                    <p>
                        <slot name="subtitle" />
                    </p>
                {/if}
            </div>
        {/if}
        <slot />
    </div>
</section>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    section {
        position: relative;
        padding: 1.5rem 2rem;
        margin-top: 2rem;

        &.cta {
            background-color: $colorBlueDark;
            margin-top: 4rem;

            &::before,
            &::after {
                content: "";
                position: absolute;
                width: calc(100% + 2rem);
                left: -2rem;
            }

            &::before {
                top: -1.5rem;
                border-top: 1rem dashed #242956;
            }

            &::after {
                height: 0.75rem;
                top: -0.75rem;
                background-color: #242956;
            }
        }

        &.horizontal {
            background-color: $colorBlackDarker;
            outline: 1px solid $colorOutline;
            padding: 4rem 2rem;

            .container {
                flex-direction: row-reverse;
                justify-content: center;
                align-items: center;

                @media (max-width: 50rem) {
                    flex-direction: column;
                }
            }

            .header-box {
                margin: 0;
                flex-grow: 0;
            }
        }
    }

    .divider {
        position: relative;
        text-align: center;
        opacity: 0.7;
        color: $colorBlueLight;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 300;
        max-width: $widthContent;
        margin: 4rem auto 0;

        &::before,
        &::after {
            content: "";
            position: relative;
            height: 1px;
            background-color: $colorBlueLight;
            flex-grow: 1;
            opacity: 0.5;
        }
    }

    .container {
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        gap: calc(2rem + 2vw);
    }

    .header-box {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
        max-width: calc($widthContent / 2.25);
        margin: 0 auto;

        p {
            opacity: 0.8;
        }
    }
</style>
