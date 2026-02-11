import * as fs from "fs";

import Reader from "../reader.js";
import { readFile, Options } from "../readFile.js";

/**
 * Directory Readers are responsible for reading information from a directory of files
 */
export default class DirectoryReader implements Reader<
	string,
	fs.ReadStream[]
> {
	private options: Options = {
		encoding: "utf8",
	};

	/**
	 * Reads the information from a directory string identifier
	 *
	 * @param directory Directory to open the read streams from
	 */
	public read(directory: string): fs.ReadStream[] {
		const directoryPath = directory.toString();
		return fs
			.readdirSync(directoryPath)
			.map((file) => {
				return readFile(directoryPath + file, this.options);
			})
			.filter((x): x is fs.ReadStream => x !== null);
	}
}
