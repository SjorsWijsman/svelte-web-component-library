export const demo = {
	description: "An example demo component",
	props: {
		color: {
			type: "select",
			options: ["red", "green", "blue"],
			default: "red"
		},
		underline: {
			type: "boolean"
		}
	},
	slots: {
		default: "World"
	}
};

export default demo;
