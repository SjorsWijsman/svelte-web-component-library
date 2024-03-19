const component = {
    title: "wc-link",
    group: "Parts",
    props: {
        href: {
            default: "https://www.google.com",
        },
        center: {
            controls: "Boolean",
        },
        button: {
            controls: "Boolean",
        },
        color: {
            controls: "Color",
        },
        background: {
            controls: "Color",
        },
    },
    slots: {
        default: "Hallo ik ben een link!",
    },
};

// The demo file is automatically imported after exporting
export default component;
