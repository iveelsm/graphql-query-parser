/**
 * Fragment Templates are the primary form of encapsulation for data about a Fragment
 */
export default class FragmentTemplate {
    private cacheKey: string;
    private template: string;
  
    public constructor(cacheKey: string, template: string) {
        this.cacheKey = cacheKey;
        this.template = template;
    }

    public cache(): string {
        return this.cacheKey;
    }

    public apply(): string {
        return this.template;
    }
}