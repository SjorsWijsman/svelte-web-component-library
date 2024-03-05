const component = {
    // A title is required
    title: "porton-button",
    // Props & slots are optional
    props: {
        // Object key = prop name
        text: {
            controls: "String", // Default
        },
        count: {
            controls: "Number",
            default: 5, // A default value can be set for any prop
        },
        secondary: {
            controls: "Boolean",
        },
        style: {
            controls: "Select",
            options: ["Option 1", "Option 2", "Option 3"], // Select requires an options list
        },
        action: {
            controls: "Function",
            default: () => console.log(`I am a button!`),
        },
    },
    slots: {
        default: "Button", // Unnamed slot
        footer: "This is a button", // Named slot
        example: "<span>Hello World</span>", // Slots can contain HTML
    },
};

// The demo file is automatically imported after exporting
export default component;