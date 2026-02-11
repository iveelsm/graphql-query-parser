import { ReadStreamParser, ParseResults } from './parser';
import GraphQLQueryBuilder from './builder';
import GraphQLQueryReader from './reader';
import { buildCache } from './cache';
import { ReadStream } from 'fs';

export default class GraphQLQueryParser {
  static async parse(paths: Path, variables: Variables = {}) {
    const streams = this.read(paths, new GraphQLQueryReader());
    const results = await Promise.all(this.parseStreams(streams, new ReadStreamParser()));
    const cache = buildCache(
      results.map(x => x.fragmentResults)
        .reduce((acc, x) => acc.concat(... x), []),
      results.map(x => x.queryResults)
        .reduce((acc, x) => acc.concat(... x), [])
    );

    const queries = GraphQLQueryBuilder.build(cache, variables);
    // queries.forEach(query => {
    //   console.log(query);
    // })
    return "";
  }

  private static read(paths: Path, reader: GraphQLQueryReader): Array<ReadStream> {
    return (isString(paths))
      ? reader.read((paths as string))
      : reader.readMany((paths as string[]));
  }

  private static parseStreams(streams: Array<ReadStream>, parser: ReadStreamParser): Array<Promise<ParseResults>> {
    return parser.parse(streams);
  }
}

type Path = string | string[]
type Variables = Object

function isString(x: Path) {
  return typeof x === "string";
}