const component = {
    title: "wc-button",
    props: {
        action: {
            controls: "Function",
            default: () => window.alert(`I am a button!`),
        },
        secondary: {
            controls: "Boolean",
        },
    },
    slots: {
        default: "Button",
    },
};

export default component;
