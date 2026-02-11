import UnsupportedTypeError from './errors/unsupportedTypeError';
import DirectoryReader from './directory/directoryReader';
import FileReader from './file/fileReader';
import Reader from './reader';
import * as fs from 'fs';

function flatten<T>(arr: T[]): T[] {
    return arr.reduce(function flatReduce(flat: T[], toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

export default class GraphQLQueryReader {
    private fileReader: Reader<string, fs.ReadStream> 
    private directoryReader: Reader<string, fs.ReadStream[]> 
  
    public constructor() {
        this.fileReader = new FileReader();
        this.directoryReader = new DirectoryReader();
    }


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
