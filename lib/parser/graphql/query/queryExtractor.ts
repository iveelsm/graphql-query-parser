import { QueryTemplate } from "../../../templates/index.ts";
import type GraphQLExtractor from "../graphQLExtractor.ts";
import QueryParser from "./queryParser.ts";

/**
 * Extracts the Query infroamtion from a given input
 */
export default class QueryExtractor implements GraphQLExtractor<
	string,
	QueryTemplate[]
> {
	private parser: QueryParser;

	constructor() {
		this.parser = new QueryParser();
	}

	/**
	 * Extracts one or many query templates from an input string
	 * @param input String to find query information from
	 */
	public extract(input: string): QueryTemplate[] {
		return this.parser.parse(input);
	}
}
