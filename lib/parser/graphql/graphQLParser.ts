/**
 * Parses information from an input.
 * The information should represent GraphQL specific data.
 */
export default interface GraphQLParser<K, V> {
    /**
     * Parse results from the input data in order to identify GraphQL information.
     * @param data Input data to parse from
     */
    parse(data: K): V;
}
