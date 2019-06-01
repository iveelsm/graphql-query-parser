import { Cache } from "../cache";


export default class FragmentBuilder {
  static fragmentRegex = /(.*[\.]{3,}\s{0,})([^on\s{1,}][a-zA-Z]+)/g;

  static build(query: string, cache: Cache): Array<FragmentResults> {
    return this.addFragments(query, new Array(), cache);
  }

  private static parseFragment(results: Array<FragmentResults>, fragmentName: string, cache: Cache): Array<FragmentResults> {
    const fragment = this.generateFragmentString(fragmentName, cache);
    results.push({name: fragmentName, fragment: fragment});
    results = this.addFragments(fragment, results, cache);
    return results;
  }

  private static addFragments(toMatch: string, results: Array<FragmentResults>, cache: Cache): Array<FragmentResults> {
    const fragmentIdentifiers = toMatch.match(this.fragmentRegex);
    
    if(fragmentIdentifiers) {
      fragmentIdentifiers.forEach(fragmentIdentifier => {
        const fragmentName = this.getFragmentName(fragmentIdentifier);
        results.concat(this.parseFragment(results, fragmentName, cache));
      });
    }
    return results;
  }

  private static generateFragmentString(fragmentName: string, cache: Cache): string {
    return cache.fragmentCache.get(fragmentName).apply();
  }

  private static getFragmentName(fragmentIdentifier: string): string {
    return this.fragmentRegex.exec(fragmentIdentifier)[2];
  }
}

interface FragmentResults {
  name: string,
  fragment: string
}