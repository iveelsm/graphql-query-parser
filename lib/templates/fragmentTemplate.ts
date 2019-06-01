export default class FragmentTemplate {
  private cacheKey: string;
  private template: string;
  
  constructor(cacheKey: string, template: string) {
    this.cacheKey = cacheKey;
    this.template = template;
  }

  cache(): string {
    return this.cacheKey;
  }

  apply(): string {
    return this.template;
  }
}