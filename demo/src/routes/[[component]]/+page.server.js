import config from "$wc/web-components.config.js";

export async function load() {
	return {
		...config
	};
}
