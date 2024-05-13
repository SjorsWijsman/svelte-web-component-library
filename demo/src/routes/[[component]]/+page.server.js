import config from "$wc/web-components.config.js";
import * as demo from "$wc/lib/components/demo.js";

// Get the components from the demo module and convert the keys to kebab-case
let components = Object.fromEntries(
	Object.entries(demo).filter(([key, value]) => typeof key !== "symbol")
);
components = Object.fromEntries(
	Object.entries(components).map(
		([key, value]) =>
			(key = [key.replace(/([a-z])([A-Z])/g, "$1-$2").toLocaleLowerCase(), value])
	)
);

export async function load() {
	return {
		...config,
		components
	};
}
