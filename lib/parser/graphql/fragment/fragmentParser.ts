import { FragmentTemplate } from "../../../templates/index.ts";
import { DocumentParser } from "../document/index.ts";
import type { DocumentModel, FragmentModel } from "../document/index.ts";
import type GraphQLParser from "../graphQLParser.ts";

/**
 * Parses potential fragment strings to determine if a fragment exists
 */
export default class FragmentParser implements GraphQLParser<
	string,
	FragmentTemplate[]
> {
	private parser: GraphQLParser<string, DocumentModel>;

	public constructor() {
		this.parser = new DocumentParser();
	}

	/**
	 * Attempts to derive one or many fragment templates from an input string
	 *
	 * @param data String result to parse
	 */
	public parse(data: string): FragmentTemplate[] {
		return this.parseFragments(this.parser.parse(data));
	}

	private parseFragments(document: DocumentModel): FragmentTemplate[] {
		return document.fragments.map((fragment) =>
			this.buildTemplate(fragment),
		);
	}

	private buildTemplate(fragment: FragmentModel): FragmentTemplate {
		return new FragmentTemplate(fragment.name, fragment.source);
	}
}
