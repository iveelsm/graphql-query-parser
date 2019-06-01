import { FragmentTemplate } from "../../../templates";
import GraphQLParser from "../graphQLParser";

export default class FragmentParser implements GraphQLParser<string, Array<FragmentTemplate>> {
  private fragmentRegex = /((.*?[\bfragment\b])[\s]{1,}([a-zA-Z]+)[\s]{1,}(.*?[\bon\b])[\s]{1,}([a-zA-Z]+)[\s]{0,}\{)/g;

  parse(data: string): Array<FragmentTemplate> {
    return this.parseFragments(data);
  }

  private parseFragments(data: string): Array<FragmentTemplate> {
    const match = data.match(this.fragmentRegex);
    if(match != null) {
      return match.map(fragmentIdentifier => {
        const query = this.parseFragment(data, fragmentIdentifier);
        return this.buildTemplate(query, fragmentIdentifier);
      });
    }
    return [];

  }

  private parseFragment(data: string, fragmentIdentifier: string): string {
    const start = data.indexOf('{',  data.indexOf(fragmentIdentifier) + fragmentIdentifier.length - 1);
    const bracesSet = [data[start]];
    let fragment = data.substring(data.indexOf(fragmentIdentifier), start + 1);
    let index = start;

    while(bracesSet.length > 0) {
      index++;
      const char = data[index];
      fragment += char; 
      switch(char) {
        case '{':
          bracesSet.push(char);
          break;
        case '}':
          bracesSet.pop();
          break;
        default:
          continue;
      }
    }
    return fragment;
  }

  private buildTemplate(fragment: string, fragmentIdentifier: string): FragmentTemplate {
    const key = this.fragmentRegex.exec(fragmentIdentifier);
    return new FragmentTemplate(key[3], fragment);
  }
}