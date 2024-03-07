const component = {
    title: "wc-link",
    props: {
        href: {
            default: "https://www.google.com",
        },
        button: {
            controls: "Boolean",
        },
    },
    slots: {
        default: "Link",
    },
};

export default component;
