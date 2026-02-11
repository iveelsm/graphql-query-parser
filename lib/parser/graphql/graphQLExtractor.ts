export default interface GraphQLExtractor<K, V> {
  extract(input: K): V
}