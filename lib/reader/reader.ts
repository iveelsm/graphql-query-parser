export default interface Reader<T, V> {
  read(toRead: T): V
}