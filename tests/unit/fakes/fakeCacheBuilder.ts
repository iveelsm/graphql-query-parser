import FakeFragmentTemplate from "./fakeFragmentTemplate";
import FakeQueryTemplate from "./fakeQueryTemplate";
import { Cache, IndexCache } from "../../../lib/cache";

export default class FakeCacheBuilder {
    private cache: Cache;

    constructor() {
        this.cache = {
            queryCache: new IndexCache(),
            fragmentCache: new IndexCache()
        }
    }

    withFragmentString(cacheKey: string, fragment: string): FakeCacheBuilder {
        this.cache.fragmentCache.put(cacheKey, new FakeFragmentTemplate({ cacheKey, fragment }).create());
        return this;
    }

    withQueryString(cacheKey: string, query: string, variables: string[]): FakeCacheBuilder {
        this.cache.queryCache.put(cacheKey, new FakeQueryTemplate({ cacheKey, query, variables }).create());
        return this;
    }

    withFakeQueryTemplate(template: FakeQueryTemplate): FakeCacheBuilder {
        const queryTemplate = template.create();
        this.cache.queryCache.put(queryTemplate.cache(), queryTemplate);
        return this;
    }

    build(): Cache {
        return this.cache;
    }
} 