import { QueryTemplate } from "../../../lib/templates";

export default class FakeQueryTemplate {
    private cacheKey: string;
    private query: string;
    private variables: string[];

    constructor({ cacheKey, query, variables = [] }: { cacheKey: string; query: string; variables?: string[] }) {
        this.cacheKey = cacheKey;
        this.query =query;
        this.variables = variables
    }

    create() {
        return new QueryTemplate(this.cacheKey, this.query, this.variables);
    }
}