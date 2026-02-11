import { QueryTemplate } from "../../../templates";
import GraphQLParser from "../graphQLParser";

export default class QueryParser implements GraphQLParser<string, Array<QueryTemplate>> {
  private queryRegex = /((.*?[\bquery\b])[\s]{1,}([a-zA-Z]+)[\s]{0,})\(([^\)]+)\)/g;
  private variableRegex = /(\$[a-zA-Z]+)/g;

  parse(data: string): Array<QueryTemplate> {
    return this.parseQueries(data);
  }

  private parseQueries(data: string): Array<QueryTemplate> {
    const match = data.match(this.queryRegex);
    if(match !== null) {
      return match.map(queryIdentifier => {
        const query = this.parseQuery(data, queryIdentifier);
        return this.buildTemplate(query, queryIdentifier);
      });
    }
    return [];
  }

  private parseQuery(data: string, queryIdentifier: string): string {
    const start = data.indexOf('{',  data.indexOf(queryIdentifier) + queryIdentifier.length);
    const bracesSet = [data[start]];
    let subQuery = data.substring(data.indexOf(queryIdentifier), start + 1);
    let index = start;

    while(bracesSet.length > 0) {
      index++;
      const char = data[index];
      subQuery += char; 
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
    return subQuery;
  }

  private buildTemplate(query: string, queryIdentifier: string): QueryTemplate {
    const variables = this.parseVariables(query);
    return new QueryTemplate(this.queryRegex.exec(queryIdentifier)[3], query, variables);
  }


  private parseVariables(data: string): Array<string> {
    return [... new Set(data.match(this.variableRegex))];
  }
}