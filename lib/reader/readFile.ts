import * as fs from 'fs';

interface Options {
  encoding: string
}

function readFile(filePath: string, options: Options): fs.ReadStream {
  if (isGraphQLFile(filePath)) {
    return fs.createReadStream(filePath, options.encoding);
  }
}

function isGraphQLFile(filePath: string) {
  const regex = /(?:\.([^.]+))?$/;
  const ext = regex.exec(filePath)[1];
  return (ext === "graphqls" || ext === "graphql");
}

export {
  Options,
  readFile
}