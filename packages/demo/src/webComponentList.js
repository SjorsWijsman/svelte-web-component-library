export const components = [
    {
        title: "porton-difficulty",
        props: [
            {
                name: "difficulty",
                options: [0, 1, 2],
                selected: 0,
            },
        ],
    },

    {
        title: "porton-layout",
        slots: [
            {
                name: "default",
                content:
                    "<span>Col 1</span><span>Col 2</span><span>Col 3</span>",
            },
        ],
    },

    {
        title: "porton-link",
        props: [
            {
                name: "href",
                options: ["https://www.porton.nl"],
                selected: "https://www.porton.nl",
            },
            {
                name: "button",
                options: [true, false],
                selected: false,
            },
        ],
        slots: [
            {
                name: "default",
                content: "Porton",
            },
        ],
    },

    {
        title: "porton-text-slider",
        props: [
            {
                name: "textlist",
                options: ["hoi,hoi2,hoi3,hoi4"],
                selected: ["hoi,hoi2,hoi3,hoi4"],
            },
        ],
    },

    {
        title: "porton-spinner",
    },
];

export default components;
