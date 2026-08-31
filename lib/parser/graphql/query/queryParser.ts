import { QueryTemplate } from "../../../templates/index.ts";
import { DocumentParser } from "../document/index.ts";
import type { DocumentModel, OperationModel } from "../document/index.ts";
import type GraphQLParser from "../graphQLParser.ts";

/**
 * Operations this package builds queries for. Mutations and subscriptions are
 * parsed by the grammar but not yet templated.
 */
const SUPPORTED_OPERATION = "query";

/**
 * Parses query files for by converting them into [[QueryTemplate]]s
 */
export default class QueryParser implements GraphQLParser<
	string,
	QueryTemplate[]
> {
	private parser: GraphQLParser<string, DocumentModel>;

	public constructor() {
		this.parser = new DocumentParser();
	}

	/**
	 * Parse data from the input string.
	 * Can identify no to many query templates
	 *
	 * @param data String to parse information from
	 */
	public parse(data: string): QueryTemplate[] {
		return this.parseQueries(this.parser.parse(data));
	}

	private parseQueries(document: DocumentModel): QueryTemplate[] {
		return document.operations
			.filter(
				(operation) => operation.operationType === SUPPORTED_OPERATION,
			)
			.map((operation) => this.buildTemplate(operation));
	}

	private buildTemplate(operation: OperationModel): QueryTemplate {
		return new QueryTemplate(
			operation.name,
			this.removeVariables(operation),
			operation.variables,
		);
	}

	/**
	 * Drops the operation's variable declarations while keeping the references
	 * to them in the body, which is what callers substitute values into.
	 *
	 * @param operation Operation to strip declarations from
	 */
	private removeVariables(operation: OperationModel): string {
		const declarations = operation.variableDefinitions;
		if (!declarations) {
			return operation.source;
		}
		return (
			operation.source.slice(0, declarations.offset) +
			operation.source.slice(
				declarations.offset + declarations.text.length,
			)
		);
	}
}
