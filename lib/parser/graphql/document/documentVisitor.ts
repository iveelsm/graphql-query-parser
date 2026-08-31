import { ParserRuleContext } from "antlr4ng";
import type { CharStream, ParseTree } from "antlr4ng";

import {
	VariableContext,
	type DocumentContext,
	type ExecutableDefinitionContext,
	type FragmentDefinitionContext,
	type OperationDefinitionContext,
} from "../generated/GraphQLParser.ts";
import type {
	DocumentModel,
	FragmentModel,
	OperationModel,
	SourceSpan,
} from "./documentModel.ts";

/**
 * Reads the verbatim source text a context was built from.
 *
 * Text comes from the character stream rather than the token stream because
 * this grammar skips whitespace and comments outright, so the token stream has
 * no record of them. Templates are substituted into textually and must keep
 * their original formatting, and character offsets are unaffected by skipping.
 *
 * @param ctx Context to read the source of
 * @param source Character stream the context was parsed from
 */
function sourceOf(ctx: ParserRuleContext, source: CharStream): string | null {
	const start = ctx.start;
	const stop = ctx.stop;
	// Error recovery can leave a context without a complete span
	if (!start || !stop || stop.stop < start.start) {
		return null;
	}
	return source.getTextFromRange(start.start, stop.stop);
}

/**
 * Locates a child context within the source of the definition containing it
 *
 * @param ctx Child context to locate, if it is present at all
 * @param source Character stream the context was parsed from
 * @param definitionStart Character offset the enclosing definition starts at
 */
function spanOf(
	ctx: ParserRuleContext | null,
	source: CharStream,
	definitionStart: number,
): SourceSpan | null {
	if (!ctx) {
		return null;
	}
	const text = sourceOf(ctx, source);
	if (text === null || !ctx.start) {
		return null;
	}
	return { text: text, offset: ctx.start.start - definitionStart };
}

/**
 * Collects every variable referenced anywhere beneath a context, in the order
 * they appear and without duplicates.
 *
 * @param node Tree to search
 * @param found Variables discovered so far
 */
function collectVariables(node: ParseTree, found: Set<string>): void {
	if (node instanceof VariableContext) {
		// A context's text concatenates its tokens, giving "$" + name
		found.add(node.getText());
		return;
	}
	if (node instanceof ParserRuleContext) {
		node.children.forEach((child) => collectVariables(child, found));
	}
}

/**
 * Flattens a document down to the executable definitions it contains
 *
 * @param document Document to read definitions from
 */
function executableDefinitions(
	document: DocumentContext,
): ExecutableDefinitionContext[] {
	return document
		.definition()
		.flatMap(
			(definition) =>
				definition.executableDocument()?.executableDefinition() ?? [],
		);
}

/**
 * Walks a parsed document to model the operations and fragments within it
 */
export default class DocumentVisitor {
	/**
	 * Models every operation and fragment in a parsed document
	 *
	 * @param document Document to walk
	 * @param source Character stream the document was parsed from
	 */
	public visit(document: DocumentContext, source: CharStream): DocumentModel {
		const operations: OperationModel[] = [];
		const fragments: FragmentModel[] = [];

		executableDefinitions(document).forEach((definition) => {
			const operation = definition.operationDefinition();
			if (operation) {
				const model = this.buildOperation(operation, source);
				if (model) {
					operations.push(model);
				}
				return;
			}
			const fragment = definition.fragmentDefinition();
			if (fragment) {
				const model = this.buildFragment(fragment, source);
				if (model) {
					fragments.push(model);
				}
			}
		});

		return { operations: operations, fragments: fragments };
	}

	private buildOperation(
		ctx: OperationDefinitionContext,
		source: CharStream,
	): OperationModel | null {
		const name = ctx.name()?.getText();
		const operationType = ctx.operationType()?.getText();
		const text = sourceOf(ctx, source);
		// An anonymous operation has no name to cache it under, so it is
		// skipped rather than cached under an invented key
		if (!name || !operationType || text === null || !ctx.start) {
			return null;
		}
		return {
			name: name,
			operationType: operationType,
			source: text,
			variableDefinitions: spanOf(
				ctx.variableDefinitions(),
				source,
				ctx.start.start,
			),
			variables: [...this.variablesOf(ctx)],
		};
	}

	private buildFragment(
		ctx: FragmentDefinitionContext,
		source: CharStream,
	): FragmentModel | null {
		// Optional calls guard against contexts left incomplete by error
		// recovery, which the grammar alone would rule out
		const name = ctx.fragmentName()?.getText();
		const text = sourceOf(ctx, source);
		if (!name || text === null) {
			return null;
		}
		return { name: name, source: text };
	}

	private variablesOf(ctx: ParserRuleContext): Set<string> {
		const found = new Set<string>();
		collectVariables(ctx, found);
		return found;
	}
}
