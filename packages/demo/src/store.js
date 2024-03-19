import { persistStore } from "$scripts/persistStore";
import { writable } from "svelte/store";

export const componentList = writable([]);
export const missingList = writable([]);
export const groups = writable([]);

export const selectedComponent = persistStore("swc-component", null);
export const componentElement = writable("");

export const searchTerm = persistStore("swc-search", null);
export const currentGroup = persistStore("swc-group", null);
