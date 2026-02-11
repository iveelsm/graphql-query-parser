import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function readResource(path: string): string {
	const fullPath = __dirname + "/resources/" + path;
	return fs.readFileSync(fullPath, { encoding: "utf8" });
}

function createReadStream(path: string): fs.ReadStream {
	const fullPath = __dirname + "/resources/" + path;
	return fs.createReadStream(fullPath, { encoding: "utf8" });
}

export { readResource, createReadStream };
