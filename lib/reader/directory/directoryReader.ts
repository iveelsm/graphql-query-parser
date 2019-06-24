import { readFile } from '../readFile';
import Reader from "../reader";
import * as fs from 'fs';

/**
 * Directory Readers are responsible for reading information from a directory of files
 */
export default class DirectoryReader implements Reader<string, fs.ReadStream[]> {
  private options = {
    encoding: 'utf8'
  }

  /**
   * Reads the information from a directory string identifier
   * 
   * @param directory Directory to open the read streams from
   */
  public read(directory: string): fs.ReadStream[] {
    const directoryPath = directory.toString();
    return fs.readdirSync(directoryPath)
      .map(file => {
        return readFile(directoryPath + file, this.options);
      })
      .filter(x => x);
  }
}