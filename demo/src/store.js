import { writable } from "svelte/store";
// import persistStore from "$lib/scripts/persist-store";

export const prefix = writable("wc");
export const components = writable({});
export const selectedComponent = writable(null);
export const componentText = writable("");
