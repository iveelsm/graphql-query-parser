import { CharStream, CommonTokenStream } from "antlr4ng";

import { GraphQLLexer } from "../generated/GraphQLLexer.ts";
import { GraphQLParser as GraphQLGrammarParser } from "../generated/GraphQLParser.ts";
import type GraphQLParser from "../graphQLParser.ts";
import type { DocumentModel } from "./documentModel.ts";
import DocumentVisitor from "./documentVisitor.ts";

/**
 * Parses a GraphQL document into a [[DocumentModel]] using the generated
 * grammar, so operations and fragments are read from a parse tree rather than
 * matched textually.
 */
export default class DocumentParser implements GraphQLParser<
	string,
	DocumentModel
> {
	private visitor: DocumentVisitor;

	public constructor() {
		this.visitor = new DocumentVisitor();
	}

	/**
	 * Parses every executable definition out of a document
	 *
	 * @param data Document to parse
	 */
	public parse(data: string): DocumentModel {
		const source = CharStream.fromString(data);
		const lexer = new GraphQLLexer(source);
		const parser = new GraphQLGrammarParser(new CommonTokenStream(lexer));

		// The generated parser reports syntax errors to the console by default,
		// which a library has no business doing. Removing the listeners leaves
		// ANTLR's recovery in place, so a malformed document still yields the
		// definitions it does contain.
		lexer.removeErrorListeners();
		parser.removeErrorListeners();

		return this.visitor.visit(parser.document(), source);
	}
}
