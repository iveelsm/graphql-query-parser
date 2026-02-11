/**
 * Results are a builder patter on top of a string result.
 * The Results also identify which fragments are present so we don't duplicate
 */
export default class Results {
	private result: string;
	private currentTemplates: CurrentTemplates;

	public constructor() {
		this.result = "";
		this.currentTemplates = {
			query: new Set(),
			fragment: new Set(),
		};
	}

	/**
	 * Adds a query to the result string
	 *
	 * @param identifier Unique identifier for the set
	 * @param query Query string to add
	 */
	public addQuery(identifier: string, query: string): Results {
		if (!this.currentTemplates.query.has(identifier)) {
			this.currentTemplates.query.add(identifier);
			this.result += query += "\n\n";
		}
		return this;
	}

	/**
	 * Adds a fragment to the result string
	 *
	 * @param identifier Unique identifier for the set
	 * @param fragment Fragment string to add
	 */
	public addFragment(identifier: string, fragment: string): Results {
		if (!this.currentTemplates.fragment.has(identifier)) {
			this.currentTemplates.fragment.add(identifier);
			this.result += fragment += "\n\n";
		}
		return this;
	}

	/**
	 * Builds the result string for usage by a GraphQL client
	 */
	public build(): string {
		return this.result;
	}
}

interface CurrentTemplates {
	query: Set<string>;
	fragment: Set<string>;
}
