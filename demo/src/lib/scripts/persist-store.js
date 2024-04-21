import { writable } from "svelte/store";
import { browser } from "$app/environment";

const persistStore = (key, initial) => {
	if (!browser) return writable(initial);
	const persist = localStorage.getItem(key);
	const data = persist ? JSON.parse(persist) : initial;
	//if sub is broken, sets value to current local storage value
	const store = writable(data, () => {
		const unsubscribe = store.subscribe((value) => {
			localStorage.setItem(key, JSON.stringify(value));
		});
		return unsubscribe;
	});
	return store;
};

export default persistStore;
