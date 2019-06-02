import QueryBuilder from './queryBuilder';
import { Cache } from '../cache';

export default class GraphQLQueryBuilder {
    public static build(cache: Cache, variables: Record<string, any>): string[] {
        const queries = [];
        const entries = cache.queryCache.cache.entries();
        for(const [_, value] of entries) {
            queries.push(QueryBuilder.build(value, cache, variables));
        }
        return queries;
    }
}