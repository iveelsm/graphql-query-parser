import { readFile } from '../readFile';
import Reader from "../reader";
import * as fs from 'fs';

export default class DirectoryReader implements Reader<string, Array<fs.ReadStream>> {
  private options = {
    encoding: 'utf8'
  }

  read(directory: string): Array<fs.ReadStream> {
    const directoryPath = directory.toString();
    return fs.readdirSync(directoryPath)
      .map(file => {
        return readFile(directoryPath + file, this.options);
      });
  }
}