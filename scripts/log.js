export function log(message) {
    console.log(`\x1b[33m[svelte-wc] ${message}\x1b[0m`);
}

export function error(message, error) {
    console.log(`[svelte-wc] ${message}: ${error}`);
}
