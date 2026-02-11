import { ReadStreamParser, ParseResults } from './parser';
import GraphQLQueryBuilder from './builder';
import GraphQLQueryReader from './reader';
import { buildCache } from './cache';
import { ReadStream } from 'fs';

type Path = string | string[]
type Variables = Object

function isString(x: Path): boolean {
    return typeof x === "string";
}

export default class GraphQLQueryParser {
    public static async parse(paths: Path, variables: Variables = {}): Promise<string[]> {
        const streams = this.read(paths, new GraphQLQueryReader());
        const results = await Promise.all(this.parseStreams(streams, new ReadStreamParser()));
        const fragments = results.map(x => x.fragmentResults).reduce((acc, x) => acc.concat(...x), []);
        const queries = results.map(x => x.queryResults).reduce((acc, x) => acc.concat(...x), [])
        const cache = buildCache(fragments, queries);
        return GraphQLQueryBuilder.build(cache, variables);
    }

    private static read(paths: Path, reader: GraphQLQueryReader): ReadStream[] {
        return (isString(paths))
            ? reader.read((paths as string))
            : reader.readMany((paths as string[]));
    }

    private static parseStreams(streams: ReadStream[], parser: ReadStreamParser): Array<Promise<ParseResults>> {
        return parser.parse(streams);
    }
}

