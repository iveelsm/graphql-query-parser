import FragmentBuilder from "./fragmentBuilder.js";
import { QueryTemplate } from "../templates/index.js";
import { Cache } from '../cache/index.js';
import Results from "./results.js";

/* eslint @typescript-eslint/no-explicit-any: 0 */

/**
 * QueryBuilder is responsible for building a given query from a template definition.
 * The builder will:
 *  * Apply variables
 *  * Identify fragments
 *  * Add fragments to the results
 */
export default class QueryBuilder {
    /**
     * Builds a query from a template by doing the following:
     *   * Apply Variables from Configuration if necessary
     *   * Identifies fragments to add to the query and adds them if necessary
     *
     * @param query Query to build from
     * @param cache Cache of information with fragments and queries
     * @param variables Configured variable information that might yield a partial apply to the query
     */
    public static build(query: QueryTemplate, cache: Cache, variables: Record<string, any>): string {
        const results = new Results();
        const queryString = query.apply(variables);
        results.addQuery(query.cache(), queryString);
        const builtFragments = FragmentBuilder.build(queryString, cache);
        builtFragments.forEach(fragment => {
            results.addFragment(fragment.name, fragment.fragment);
        });
        return results.build();
    }
}
