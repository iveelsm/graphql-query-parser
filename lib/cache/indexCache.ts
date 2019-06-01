export default class IndexCache<K, V> {
  cache: Map<K, V>;

  constructor() {
    this.cache = new Map<K, V>();
  }

  put(key: K, value: V) {
    return this.cache.set(key, value);
  }

  get(key: K): V {
    return this.cache.get(key);
  }

  remove(key: K): boolean {
    return this.cache.delete(key);
  }
}