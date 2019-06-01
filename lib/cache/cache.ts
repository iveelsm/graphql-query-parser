import { QueryTemplate, FragmentTemplate } from '../templates';
import IndexCache from './indexCache';

interface Cache {
  queryCache: IndexCache<string, QueryTemplate>;
  fragmentCache: IndexCache<string, FragmentTemplate>
}

function buildCache(fragments: Array<FragmentTemplate>, queries: Array<QueryTemplate>): Cache {
  const cache = {
    queryCache: new IndexCache<string, QueryTemplate>(),
    fragmentCache: new IndexCache<string, FragmentTemplate>()
  };
  cacheQueries(cache, queries);
  cacheFragments(cache, fragments);
  return cache;
}

function cacheQueries(cache: Cache, queries: Array<QueryTemplate>): void {
  queries.forEach(query => {
    if(query.cache() === null) {
      throw new Error("Cache Key can not be Null");
    }
    cache.queryCache.put(query.cache(), query);
  })
}

function cacheFragments(cache: Cache, fragments: Array<FragmentTemplate>): void {
  fragments.forEach(fragment => {
    if(fragment.cache() === null) {
      throw new Error("Cache Key can not be Null");
    }
    cache.fragmentCache.put(fragment.cache(), fragment);
  });
}

export {
  Cache,
  buildCache
}