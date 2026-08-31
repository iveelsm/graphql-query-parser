/**
 * A span of verbatim source text, and where it sits inside the definition it
 * was taken from. Offsets are relative to the definition's own source so a
 * span stays meaningful once the definition is lifted out of its document.
 */
interface SourceSpan {
	text: string;
	offset: number;
}

/**
 * A named operation definition, with everything derivable from its subtree
 */
interface OperationModel {
	name: string;
	operationType: string;
	source: string;
	variableDefinitions: SourceSpan | null;
	variables: string[];
}

/**
 * A fragment definition, with everything derivable from its subtree
 */
interface FragmentModel {
	name: string;
	source: string;
}

/**
 * The executable definitions found in a single document.
 * Type system definitions are parsed but not modelled, as this package builds
 * queries rather than schemas.
 */
interface DocumentModel {
	operations: OperationModel[];
	fragments: FragmentModel[];
}

export type { DocumentModel, FragmentModel, OperationModel, SourceSpan };
