import { QueryTemplate } from "../../../templates/index.js";
import GraphQLParser from "../graphQLParser.js";

/**
 * Parses query files for by converting them into [[QueryTemplate]]s
 */
export default class QueryParser implements GraphQLParser<
    string,
    QueryTemplate[]
> {
    private queryNameRegex =
        /((.*?[\bquery\b])[\s]{1,}([a-zA-Z]+)[\s]{0,})(\(([^)]{0,})\)){0,}/;
    private queryRegex =
        /((\w*query\w*)[\s]{1,}([a-zA-Z]+)[\s]{0,})(\(([^)]{0,})\)){0,}/g;
    private queryVariablesRegex =
        /((\w*query\w*)[\s]{1,}([a-zA-Z]+)[\s]{0,})(\(([^)]{0,})\)){0,}/;
    private variableRegex = /(\$[a-zA-Z]+)/g;

    /**
     * Parse data from the input string.
     * Can identify no to many query templates
     *
     * @param data String to parse information from
     */
    public parse(data: string): QueryTemplate[] {
        return this.parseQueries(data);
    }

    private parseQueries(data: string): QueryTemplate[] {
        const matches = data.match(this.queryRegex);
        if (matches !== null) {
            return matches.map((queryIdentifier) => {
                const query = this.parseQuery(data, queryIdentifier);
                return this.buildTemplate(query, queryIdentifier);
            });
        }
        return [];
    }

    private parseQuery(data: string, queryIdentifier: string): string {
        const start = data.indexOf(
            "{",
            data.indexOf(queryIdentifier) + queryIdentifier.length,
        );
        const bracesSet = [data[start]];
        let subQuery = data.substring(data.indexOf(queryIdentifier), start + 1);
        let index = start;

        while (bracesSet.length > 0) {
            index++;
            const char = data[index];
            subQuery += char;
            switch (char) {
                case "{":
                    bracesSet.push(char);
                    break;
                case "}":
                    bracesSet.pop();
                    break;
                default:
                    continue;
            }
        }
        return subQuery;
    }

    private buildTemplate(
        query: string,
        queryIdentifier: string,
    ): QueryTemplate {
        const match = this.queryNameRegex.exec(queryIdentifier);
        if (!match) {
            throw new Error(`Invalid query identifier: ${queryIdentifier}`);
        }
        return new QueryTemplate(
            match[3],
            this.removeVariables(query),
            this.parseVariables(query),
        );
    }

    private removeVariables(query: string): string {
        try {
            const match = this.queryVariablesRegex.exec(query);
            if (match && match.length > 5) {
                query = query.replace(match[4], "");
            }
            return query;
        } catch {
            return query;
        }
    }

    private parseVariables(data: string): string[] {
        return [...new Set(data.match(this.variableRegex))];
    }
}
