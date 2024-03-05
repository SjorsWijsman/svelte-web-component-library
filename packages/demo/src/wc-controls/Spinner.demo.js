const component = {
    title: "porton-spinner",
    props: {
        power: {
            controls: "Number",
            default: 3,
        },
        damping: {
            controls: "Number",
            default: 1,
            step: 0.1,
        },
    },
};

export default component;
