export const demo = {
	description: "An example demo component",
	props: {
		color: {
			type: "select",
			options: ["red", "green", "blue"],
			initial: "blue"
		},
		underline: {
			type: "boolean",
			initial: true
		}
	},
	slots: {
		default: "World"
	}
};

export default demo;
