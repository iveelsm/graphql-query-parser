import UnsupportedTypeError from './errors/unsupportedTypeError';
import DirectoryReader from './directory/directoryReader';
import FileReader from './file/fileReader';
import Reader from './reader';
import * as fs from 'fs';

/**
 * Flattens an array of arrays to a single array
 * 
 * @param arr Array of Arrays to flatten
 */
function flatten<T>(arr: T[]): T[] {
    return arr.reduce(function flatReduce(flat: T[], toFlatten) {
        return flat.concat(
            Array.isArray(toFlatten) 
                ? flatten(toFlatten) 
                : toFlatten);
    }, []);
}

/**
 * Reads GraphQL files from the input path provided
 */
export default class GraphQLQueryReader {
    private fileReader: Reader<string, fs.ReadStream> 
    private directoryReader: Reader<string, fs.ReadStream[]> 
  
    public constructor() {
        this.fileReader = new FileReader();
        this.directoryReader = new DirectoryReader();
    }

    /**
     * Reads all the file information from the input path provided.
     * Can return one or many results based on the type of path provided.
     * 
     * @param path Either a file identifier or directory for reading 
     */
    public read(path: string): fs.ReadStream[]  {
        const lstatResults = fs.lstatSync(path);
        if(lstatResults.isFile()) {
            return [this.fileReader.read(path)];
        } else if (lstatResults.isDirectory()) {
            return this.directoryReader.read(path);
        } else {
            throw new UnsupportedTypeError(
                "Path %s was not recognized as a file or directory",
                [path]
            );
        }
    }

    /**
     * Reads all the file information from the input paths provided.
     * Can return one or many results based on the type of paths provided.
     * 
     * @param path Many file identifiers or directories for reading 
     */
    public readMany(paths: string[]): fs.ReadStream[] {
        return paths
            .map(path => this.read(path))
            .reduce((flat, toFlatten) => {
                return flat.concat(Array.isArray(toFlatten) 
                    ? flatten(toFlatten) 
                    : toFlatten);
            }, []);
    }
}
