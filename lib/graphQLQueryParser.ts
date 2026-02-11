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

/**
 * Parses all the information from the paths provided.
 * This method will parse data in the form of fragments and queries.
 * Then cache the data in order to construct many results for use by GraphQL clients
 * 
 * @param paths Paths to parse information from
 * @param variables Variables to apply to the queries
 */
async function parse(paths: Path, variables: Variables = {}): Promise<string[]> {
    const streams = read(paths, new GraphQLQueryReader());
    const results = await Promise.all(parseStreams(streams, new ReadStreamParser()));
    const fragments = results.map(x => x.fragmentResults).reduce((acc, x) => acc.concat(...x), []);
    const queries = results.map(x => x.queryResults).reduce((acc, x) => acc.concat(...x), [])
    const cache = buildCache(fragments, queries);
    return GraphQLQueryBuilder.build(cache, variables);
}

/**
 * Reads the information from the the path
 * 
 * @param paths Single path or many paths
 * @param reader Reads the results from the path information provided
 */
function read(paths: Path, reader: GraphQLQueryReader): ReadStream[] {
    return (isString(paths))
        ? reader.read((paths as string))
        : reader.readMany((paths as string[]));
}

/**
 * Parses all the read stream information to return template data
 * 
 * @param streams Streams to parse from
 * @param parser Parser to use when finding data from the streams
 */
function parseStreams(streams: ReadStream[], parser: ReadStreamParser): Promise<ParseResults>[] {
    return parser.parse(streams);
}

export default parse;