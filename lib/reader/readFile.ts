import * as fs from "fs";

interface Options {
    encoding: BufferEncoding;
}

/**
 * Determines if the file is a GraphQL file
 *
 * @param filePath File path to test
 */
function isGraphQLFile(filePath: string): boolean {
    const regex = /(?:\.([^.]+))?$/;
    const match = regex.exec(filePath);
    if (!match) {
        return false;
    }
    const ext = match[1];
    return ext === "graphqls" || ext === "graphql";
}

/**
 * Reads files and converts them into a ReadStream
 *
 * @param filePath File path to read from
 * @param options Options for the read stream creation
 */
function readFile(filePath: string, options: Options): fs.ReadStream | null {
    if (isGraphQLFile(filePath)) {
        return fs.createReadStream(filePath, { encoding: options.encoding });
    }
    return null;
}

export { Options, readFile };
