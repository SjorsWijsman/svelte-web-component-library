const component = {
    title: "porton-button",
    props: {
        action: {
            controls: "Function",
            default: () => console.log(`I am a button!`),
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
