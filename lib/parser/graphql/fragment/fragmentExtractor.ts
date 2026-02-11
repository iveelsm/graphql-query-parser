import { FragmentTemplate } from "../../../templates/index.js";
import GraphQLExtractor from "../graphQLExtractor.js";
import GraphQLParser from "../graphQLParser.js";
import FragmentParser from "./fragmentParser.js";

/**
 * Extracts fragments from a potential input
 */
export default class FragmentExtractor implements GraphQLExtractor<
    string,
    FragmentTemplate[]
> {
    private parser: GraphQLParser<string, FragmentTemplate[]>;

    constructor() {
        this.parser = new FragmentParser();
    }

    /**
     * Extracts one to many fragments via the parser
     *
     * @param input Input string to extract framgents from
     */
    public extract(input: string): FragmentTemplate[] {
        return this.parser.parse(input);
    }
}
