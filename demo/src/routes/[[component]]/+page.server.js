import { readFileSync } from "fs";

export async function load() {
	const file = await readFileSync("src/demo-components.json", "utf8");
	const parsed = JSON.parse(file);

	return {
		...parsed
	};
}
