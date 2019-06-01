import GraphQLExtractor from '../graphQLExtractor';
import { QueryTemplate } from '../../../templates';
import QueryParser from './queryParser';

export default class QueryExtractor implements GraphQLExtractor<string, Array<QueryTemplate>> {
  private parser: QueryParser;

  constructor() {
    this.parser = new QueryParser();
  }

  extract(input: string): Array<QueryTemplate> {
    return this.parser.parse(input);
  }
}