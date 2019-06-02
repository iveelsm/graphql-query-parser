export default class IndexCache<K, V> {
    public cache: Map<K, V>;

    public constructor() {
        this.cache = new Map<K, V>();
    }

    public put(key: K, value: V): void {
        this.cache.set(key, value);
    }

    public get(key: K): V {
        return this.cache.get(key);
    }

    public remove(key: K): boolean {
        return this.cache.delete(key);
    }
}