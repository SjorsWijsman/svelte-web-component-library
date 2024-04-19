import { readFileSync, writeFileSync } from "fs";

export async function load({ params }) {
	const file = await readFileSync("src/demo-components.json", "utf8");
	const parsed = JSON.parse(file);

	return {
		...parsed
	};
}
