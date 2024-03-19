<script>
    import { componentElement } from "$store";
    import content from "./iframe-content.html?raw";

    let iframe;
    let srcdoc = content;

    const scriptUrl = "./dist/svelte-web-component-library.umd.js";
    const styleUrl = "./dist/style.css";

    let init = false;

    componentElement.subscribe((element) => {
        if (!element) return;
        if (!init) {
            // Parse HTML content
            const parser = new DOMParser();
            const document = parser.parseFromString(content, "text/html");

            // Append web component library module
            const script = document.createElement("script");
            script.src = scriptUrl;
            document.body.appendChild(script);

            // Append web component library styles
            const style = document.createElement("link");
            style.rel = "stylesheet";
            style.href = styleUrl;
            document.head.appendChild(style);

            // Load element into container
            const componentContainer =
                document.querySelector("#component-preview");
            componentContainer.innerHTML = element;

            // Set srcdoc
            srcdoc = document.documentElement.outerHTML;

            init = true;
        } else if (element && init) {
            iframe.contentWindow.postMessage(
                { componentElement: $componentElement },
                "*"
            );
        }
    });
</script>

<iframe
    title="Web Component Preview"
    frameborder="0"
    seamless
    sandbox="allow-scripts"
    {srcdoc}
    bind:this={iframe}
></iframe>

<style lang="scss">
    @import "../../style/_variables.scss";

    iframe {
        width: 100%;
        height: 100%;
        outline: 1px dashed rgba($colorText, 0.2);
    }
</style>
