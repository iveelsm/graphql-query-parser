/* eslint @typescript-eslint/no-explicit-any: 0 */

/**
 * Query Templates are the primary form of encapsulation for query information
 */
export default class QueryTemplate {
    private cacheKey: string;
    private template: string;
    public variables: string[];

    public constructor(
        cacheKey: string,
        template: string,
        variables: string[],
    ) {
        this.cacheKey = cacheKey;
        this.template = template;
        this.variables = variables;
    }

    public cache(): string {
        return this.cacheKey;
    }

    public apply(variables: Record<string, any>): string {
        const entries = Object.entries(variables);
        entries.forEach((entry) => {
            if (this.variables.includes(entry[0])) {
                this.template = this.template.replace(entry[0], entry[1]);
            }
        });
        return this.template;
    }
}
