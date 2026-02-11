import GraphQLExtractor from '../graphQLExtractor';
import { QueryTemplate } from '../../../templates';
import QueryParser from './queryParser';

export default class QueryExtractor implements GraphQLExtractor<string, QueryTemplate[]> {
  private parser: QueryParser;

  constructor() {
    this.parser = new QueryParser();
  }

  public extract(input: string): QueryTemplate[] {
    return this.parser.parse(input);
  }
}