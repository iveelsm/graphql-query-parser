import { FragmentTemplate } from '../../../templates';
import GraphQLExtractor from '../graphQLExtractor';
import FragmentParser from './fragmentParser';
import GraphQLParser from '../graphQLParser';

/**
 * Extracts fragments from a potential input
 */
export default class FragmentExtractor implements GraphQLExtractor<string, FragmentTemplate[]> {
  private parser: GraphQLParser<string, FragmentTemplate[]>

  constructor() {
    this.parser = new FragmentParser();
  }

  /**
   * Extracts one to many fragments via the parser
   * 
   * @param input Input string to extract framgents from
   */
  public extract(input: string): FragmentTemplate[] {
    return this.parser.parse(input);
  }
}