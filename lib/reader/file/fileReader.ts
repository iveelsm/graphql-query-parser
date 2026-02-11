import { readFile } from '../readFile';
import Reader from "../reader";
import * as fs from 'fs';

export default class FileReader implements Reader<string, fs.ReadStream> {
  private options = {
    encoding: 'utf8'
  }

  read(file: string): fs.ReadStream {
    const filePath = file.toString();
    return readFile(filePath, this.options);
  }
}