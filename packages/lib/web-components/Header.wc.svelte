<svelte:options customElement="wc-header" />

<script>
    export let webroot;

    let scrollY, innerHeight;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<header class:scrolled={scrollY > innerHeight / 5}>
    <nav>
        <!-- Logo -->
        <a href="{webroot}/" class="logo">
            <img
                src="{webroot}/images/wc_simple.png"
                alt="wc"
                name="GC_Button_Logohome_Main"
            />
        </a>

        <!-- Button box -->
        <ul>
            <slot />
        </ul>

        <slot name="menu_login" />
        <slot name="menu_nav" />
    </nav>
</header>

<style lang="scss">
    // import global style for consistent styling, any unused selectors are automatically removed
    @import "../style/global.scss";

    header {
        position: fixed;
        top: 0;
        left: 0;
        min-width: 100%;
        z-index: 100;
        padding: 0.75rem 2rem;
        transition: all 0.5s ease-out;
        outline: 1px solid $colorOutline;
        background-color: rgba($colorBlue, 0.95);
        backdrop-filter: blur(1rem);

        nav {
            display: flex;
            align-items: center;
            max-width: $widthContent;
            margin: 0 auto;

            .logo {
                display: flex;
            }

            img {
                height: 2.5rem;
            }

            ul {
                margin: 0;
                list-style: none;
                display: flex;
                gap: 0.5rem;
                align-items: center;
                margin-left: auto;

                :global(li) {
                    font-size: 1rem;
                }
            }
        }
    }
</style>
