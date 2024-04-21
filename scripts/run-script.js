import { exec } from "child_process";
import { error } from "./log.js";

// Helper to run the script
export function runScript(script) {
	exec(script, (err, stdout, stderr) => {
		if (err) {
			error("Error executing script", err);
			return;
		}
		if (stdout) {
			console.log(`${stdout}`);
		}
		if (stderr) {
			console.error(`${stderr}`);
		}
	});
}
