import { FragmentTemplate } from '../../../templates';
import GraphQLExtractor from '../graphQLExtractor';
import FragmentParser from './fragmentParser';
import GraphQLParser from '../graphQLParser';

export default class FragmentExtractor implements GraphQLExtractor<string, Array<FragmentTemplate>> {
  private parser: GraphQLParser<string, Array<FragmentTemplate>>

  constructor() {
    this.parser = new FragmentParser();
  }

  extract(input: string): Array<FragmentTemplate> {
    return this.parser.parse(input);
  }
}