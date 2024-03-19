const component = {
    title: "wc-infoblock",
    group: "Layouts",
    props: {
        image: {
            controls: "Select",
            options: ["cloud", "netherlands", "shield"],
            default: "cloud",
        },
    },
    slots: {
        default: "Slotted content",
        title: "<h3>Section Title</h3>",
    },
};

// The demo file is automatically imported after exporting
export default component;
