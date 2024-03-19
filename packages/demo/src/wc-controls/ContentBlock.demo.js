const component = {
    title: "wc-contentblock",
    group: "Layouts",
    props: {
        id: {},
    },
    slots: {
        default: "Slotted content",
        divider: "Section divider",
        title: "<h2>Section Title</h2>",
        subtitle: "Subtitle with more text",
    },
};

// The demo file is automatically imported after exporting
export default component;
