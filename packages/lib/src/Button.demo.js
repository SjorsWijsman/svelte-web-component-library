const component = {
    title: "porton-button",
    props: {
        name: {
            controls: "select",
            options: ["hoi1", "hoi2", "hoi3", "hoi4"],
            default: "hoi1",
        },
    },
    slots: {
        default: "hallo",
    },
};

// Select -> List of options
// Boolean -> On/off
// String -> Text input
// Number -> Number input
