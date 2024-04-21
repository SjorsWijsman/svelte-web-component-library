export function log(message) {
	const now = new Date();
	const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const options = { hour12: false, timeZone: localTimeZone };
	const timestamp = now.toLocaleTimeString("en-US", options);

	console.log(`${timestamp} \x1b[33m[svelte-wc] ${message}\x1b[0m`);
}

export function error(message, error) {
	console.log(`[svelte-wc] ${message}: ${error}`);
}
