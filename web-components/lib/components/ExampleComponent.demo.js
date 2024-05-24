export const demo = {
	description: "An example demo component",
	props: {
		color: {
			type: "select",
			options: ["red", "green", "blue"]
		}
	},
	slots: {
		default: "World"
	}
};

export default demo;
