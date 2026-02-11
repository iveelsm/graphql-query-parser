export default interface GraphQLParser<K, V> {
  parse(data: K): V
}