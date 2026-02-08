import { QueryTemplate, FragmentTemplate } from '../templates/index.js';
import IndexCache from './indexCache.js';

/**
 * Cache is a container for all queries and framgnet chunks
 */
interface Cache {
    queryCache: IndexCache<string, QueryTemplate>;
    fragmentCache: IndexCache<string, FragmentTemplate>;
}

/**
 * This will loop through a list of [[QueryTemplate]]s and cache the query for usage later on
 *
 * @param cache Cache will be pushing the values into
 * @param queries Queries to cache
 */
function cacheQueries(cache: Cache, queries: QueryTemplate[]): void {
    queries.forEach(query => {
        if(query.cache() === null) {
            throw new Error("Cache Key can not be Null");
        }
        cache.queryCache.put(query.cache(), query);
    })
}

/**
 * This will loop through a list of [[FragmentTemplate]]s and cache them for usage later on
 *
 * @param cache Cache will be pushing the values into
 * @param fragments Fragments to cache
 */
function cacheFragments(cache: Cache, fragments: FragmentTemplate[]): void {
    fragments.forEach(fragment => {
        if(fragment.cache() === null) {
            throw new Error("Cache Key can not be Null");
        }
        cache.fragmentCache.put(fragment.cache(), fragment);
    });
}

/**
 * Builds a cache by caching all the fragments and queries passed in
 *
 * @param fragments Fragments to build into the cache
 * @param queries Queries to build into the cache
 * @returns Cache will all the queries and fragments required
 */
function buildCache(fragments: FragmentTemplate[], queries: QueryTemplate[]): Cache {
    const cache = {
        queryCache: new IndexCache<string, QueryTemplate>(),
        fragmentCache: new IndexCache<string, FragmentTemplate>()
    };
    cacheQueries(cache, queries);
    cacheFragments(cache, fragments);
    return cache;
}

export {
    Cache,
    buildCache
}
