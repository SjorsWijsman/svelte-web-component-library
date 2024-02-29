export const components = [
    {
        title: "porton-difficulty",
        props: [
            {
                title: "difficulty",
                options: [0, 1, 2],
                selected: 0,
            },
        ],
    },

    {
        title: "porton-link",
        props: [
            {
                title: "href",
                options: ["https://www.porton.nl"],
                selected: "https://www.porton.nl",
            },
            {
                title: "button",
                options: [true, false],
                selected: false,
            },
        ],
        slots: [
            {
                title: "default",
                content: "Porton",
            },
        ],
    },

    {
        title: "porton-text-slider",
        props: [
            {
                title: "textlist",
                options: ["hoi,hoi2,hoi3,hoi4"],
                selected: ["hoi,hoi2,hoi3,hoi4"],
            },
        ],
    },
];

export default components;
