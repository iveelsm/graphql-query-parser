import QueryBuilder from './queryBuilder';
import { Cache } from '../cache';

export default class GraphQLQueryBuilder {
  static build(cache: Cache, variables: Object): Array<string> {
    const queries = [];
    const entries = cache.queryCache.cache.entries();
    for(const [_, value] of entries) {
      queries.push(QueryBuilder.build(value, cache, variables));
    }
    return queries;
  }
}