import { Cache } from "../cache/index.js";

/**
 * The Fragment Builder will:
 *   * Build a given fragment
 *   * Identify nested fragments
 *   * Ignores implicit fragments
 */
export default class FragmentBuilder {
    private static fragmentRegex = /(.*[.]{3,}\s{0,})([^on\s{1,}][a-zA-Z]+)/g;

    /**
     * Builds the fragment result set
     *
     * @param query Query string to build fragments for
     * @param cache Cache containing the fragments
     */
    public static build(query: string, cache: Cache): FragmentResults[] {
        return this.addFragments(query, [], cache);
    }

    private static parseFragment(
        results: FragmentResults[],
        fragmentName: string,
        cache: Cache,
    ): FragmentResults[] {
        const fragment = this.generateFragmentString(fragmentName, cache);
        results.push({ name: fragmentName, fragment: fragment });
        results = this.addFragments(fragment, results, cache);
        return results;
    }

    private static addFragments(
        toMatch: string,
        results: FragmentResults[],
        cache: Cache,
    ): FragmentResults[] {
        const fragmentIdentifiers = toMatch.match(this.fragmentRegex);

        if (fragmentIdentifiers) {
            fragmentIdentifiers.forEach((fragmentIdentifier) => {
                const fragmentName = this.getFragmentName(fragmentIdentifier);
                results.concat(
                    this.parseFragment(results, fragmentName, cache),
                );
            });
        }
        return results;
    }

    private static generateFragmentString(
        fragmentName: string,
        cache: Cache,
    ): string {
        const fragment = cache.fragmentCache.get(fragmentName);
        if (!fragment) {
            throw new Error(`Fragment not found in cache: ${fragmentName}`);
        }
        return fragment.apply();
    }

    private static getFragmentName(fragmentIdentifier: string): string {
        const match = this.fragmentRegex.exec(fragmentIdentifier);
        if (!match) {
            throw new Error(
                `Invalid fragment identifier: ${fragmentIdentifier}`,
            );
        }
        return match[2];
    }
}

interface FragmentResults {
    name: string;
    fragment: string;
}
