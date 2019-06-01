export default class QueryTemplate {
  private cacheKey: string;
  private template: string;
  private variables: string[];
  
  constructor(cacheKey: string, template: string, variables: string[]) {
    this.cacheKey = cacheKey;
    this.template = template;
    this.variables = variables;
  }

  cache(): string {
    return this.cacheKey;
  }

  apply(variables: Object): string {
    const entries = Object.entries(variables);
    entries.forEach(entry => {
      if(this.variables.includes(entry[0])) {
        this.template.replace(entry[0], entry[1]);
      }
    });
    return this.template;
  }
}