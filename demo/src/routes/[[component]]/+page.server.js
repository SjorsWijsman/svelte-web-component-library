import config from "$wc/web-components.config.js";
import * as demo from "$wc/lib/components/demo.js";

// Get components from the demo module
let components = Object.fromEntries(
	Object.entries(demo).filter(([key, value]) => typeof key !== "symbol")
);
// Convert component names to kebab-case
components = Object.fromEntries(
	Object.entries(components).map(([key, value]) => {
		return [key.replace(/([a-z])([A-Z])/g, "$1-$2").toLocaleLowerCase(), value];
	})
);
// Suffix props with a random number to avoid conflicts
components = Object.fromEntries(
	Object.entries(components).map(([key, value]) => {
		if (value.props) {
			value.props = Object.fromEntries(
				Object.entries(value.props).map(([key, value]) => {
					// If it already contains a suffix, don't add another one
					if (/\_\d{6}$/.test(key)) return [key, value];
					const randomSuffix = String(Math.floor(Math.random() * 1000000)).padStart(
						6,
						"0"
					);
					return [`${key}_${randomSuffix}`, value];
				})
			);
		}
		return [key, value];
	})
);

export async function load() {
	return {
		...config,
		components
	};
}
