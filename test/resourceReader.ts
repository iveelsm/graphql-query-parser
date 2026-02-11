import * as fs from 'fs';

function readResource(path: string): string {
  const fullPath = __dirname + "/resources/" + path;
  return fs.readFileSync(fullPath, { encoding: 'utf8' });
}

export {
  readResource
}