import { QueryTemplate, FragmentTemplate } from "../templates";

/**
 * This includes the results from the parsing as an object
 */
export default interface ParseResults {
    queryResults: QueryTemplate[];
    fragmentResults: FragmentTemplate[];
}