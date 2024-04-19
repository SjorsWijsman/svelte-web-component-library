import { writable } from "svelte/store";

export let prefix = writable("wc");
export let components = writable({});
export let selectedComponent = writable(null);
