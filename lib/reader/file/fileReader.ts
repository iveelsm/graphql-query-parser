import { readFile } from '../readFile';
import Reader from "../reader";
import * as fs from 'fs';

/**
 * Reads from a file and opens a [[ReadStream]]
 */
export default class FileReader implements Reader<string, fs.ReadStream> {
  private options = {
    encoding: 'utf8'
  }

  /**
   * Reads from a file and opens a [[ReadStream]]
   * 
   * @param file File to read from
   */
  public read(file: string): fs.ReadStream {
    const filePath = file.toString();
    return readFile(filePath, this.options);
  }
}