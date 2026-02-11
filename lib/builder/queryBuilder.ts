import FragmentBuilder from "./fragmentBuilder";
import { QueryTemplate } from "../templates";
import { Cache } from '../cache';
import Results from "./results";

export default class QueryBuilder {
    public static build(query: QueryTemplate, cache: Cache, variables: Record<string, any>): string {
        const results = new Results();
        const queryString = query.apply(variables);
        results.addQuery(query.cache(), queryString);
        const builtFragments = FragmentBuilder.build(queryString, cache)
        builtFragments.forEach(fragment => {
            results.addFragment(fragment.name, fragment.fragment);
        })
        return results.build();
    }
}