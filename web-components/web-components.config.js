export const config = {
	bundleComponents: true,
	prefix: "wc",
	components: {
		title: {
			description: "A title component",
			props: {
				color: {
					type: "select",
					options: ["red", "blue"]
				},
				divider: {
					type: "boolean"
				}
			},
			slots: {
				default: "world"
			}
		}
	}
};

export default config;
