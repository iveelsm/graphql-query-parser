export default interface Parser<K, V> {
    parse(toParse: K): V;
}