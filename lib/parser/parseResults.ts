import { QueryTemplate, FragmentTemplate } from "../templates";

export default interface ParseResults {
    queryResults: QueryTemplate[];
    fragmentResults: FragmentTemplate[];
}