/**
 * A Parser is responsible for extracting the content for building the queries
 */
export default interface Parser<K, V> {
    /**
     * Parses result from the given input parameter
     * @param toParse Parameter to parse information from
     */
    parse(toParse: K): V;
}
