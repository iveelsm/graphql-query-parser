/**
 * Interface for extracting information for GraphQL data
 */
export default interface GraphQLExtractor<K, V> {
	/**
	 * Extracts the necessary data from the input, returning the value defined
	 *
	 * @param input Input data to extract from
	 */
	extract(input: K): V;
}
