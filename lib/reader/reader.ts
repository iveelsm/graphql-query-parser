/**
 * A Reader is responsible for reading data from an external source
 */
export default interface Reader<T, V> {
    /**
     * Reads data from an external source defined by parameters
     * 
     * @param toRead External source of data
     */
    read(toRead: T): V;
}