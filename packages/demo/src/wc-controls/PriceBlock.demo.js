const component = {
    title: "wc-priceblock",
    group: "Blocks",
    props: {
        size: {
            default: "200 GB",
        },
        price: {
            default: "€4,65/pm",
        },
        hero: {
            controls: "Boolean",
        },
    },
    slots: {
        default: "<p>Probeer nu gratis uit!</p>",
    },
};

// The demo file is automatically imported after exporting
export default component;
