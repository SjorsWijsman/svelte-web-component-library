import * as demo from "./lib/components/demo.js";

let filteredDemo = Object.fromEntries(
	Object.entries(demo).filter(([key, value]) => typeof key !== "symbol")
);
filteredDemo = Object.fromEntries(
	Object.entries(filteredDemo).map(
		([key, value]) =>
			(key = [key.replace(/([a-z])([A-Z])/g, "$1-$2").toLocaleLowerCase(), value])
	)
);

export const config = {
	bundleComponents: true,
	prefix: "wc",
	components: filteredDemo
};

export default config;
