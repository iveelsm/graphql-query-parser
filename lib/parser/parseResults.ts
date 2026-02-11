import { QueryTemplate, FragmentTemplate } from "../templates";

export default interface ParseResults {
  queryResults: Array<QueryTemplate>
  fragmentResults: Array<FragmentTemplate>
}