import * as fs from "fs";

import Reader from "../reader.js";
import { readFile, Options } from "../readFile.js";

/**
 * Reads from a file and opens a [[ReadStream]]
 */
export default class FileReader implements Reader<
    string,
    fs.ReadStream | null
> {
    private options: Options = {
        encoding: "utf8",
    };

    /**
     * Reads from a file and opens a [[ReadStream]]
     *
     * @param file File to read from
     */
    public read(file: string): fs.ReadStream | null {
        const filePath = file.toString();
        return readFile(filePath, this.options);
    }
}
