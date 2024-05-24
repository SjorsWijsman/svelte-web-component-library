export const demo = {
	description: "An example demo component",
	props: {
		color: {
			type: "select",
			options: ["red", "green", "blue"],
			default: "blue"
		},
		underline: {
			type: "boolean",
			default: true
		}
	},
	slots: {
		default: "World"
	}
};

export default demo;
