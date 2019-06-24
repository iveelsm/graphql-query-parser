import QueryBuilder from './queryBuilder';
import { Cache } from '../cache';

/* eslint @typescript-eslint/no-explicit-any: 0 */

/**
 * This QueryBuilder is the interface for this package, it will be responsible for extracting all the queries possible.
 */
export default class GraphQLQueryBuilder {
    /**
     * Builds each query string based on what is present in the cache
     * 
     * @param cache Cache of queries and fragments
     * @param variables Variables to apply to queries
     */
    public static build(cache: Cache, variables: Record<string, any>): string[] {
        const queries = [];
        const entries = cache.queryCache.cache.entries();
        for(const entry of entries) {
            queries.push(QueryBuilder.build(entry[1], cache, variables));
        }
        return queries;
    }
}