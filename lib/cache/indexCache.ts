/**
 * IndexCache is an abstraction over caching mechanisms
 */
export default class IndexCache<K, V> {
	public cache: Map<K, V>;

	public constructor() {
		this.cache = new Map<K, V>();
	}

	/**
	 * Puts a key value pair in the cache
	 *
	 * @param key Reference for the value
	 * @param value Value to store
	 */
	public put(key: K, value: V): void {
		this.cache.set(key, value);
	}

	/**
	 * Gets a value for a given key in the cache
	 *
	 * @param key Reference to the value
	 */
	public get(key: K): V | undefined {
		return this.cache.get(key);
	}

	/**
	 * Removes a key value pair from the cache
	 *
	 * @param key Reference to the value
	 */
	public remove(key: K): boolean {
		return this.cache.delete(key);
	}
}
