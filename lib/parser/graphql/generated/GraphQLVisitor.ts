
import { AbstractParseTreeVisitor } from "antlr4ng";


import { DocumentContext } from "./GraphQLParser.js";
import { DefinitionContext } from "./GraphQLParser.js";
import { ExecutableDocumentContext } from "./GraphQLParser.js";
import { ExecutableDefinitionContext } from "./GraphQLParser.js";
import { OperationDefinitionContext } from "./GraphQLParser.js";
import { OperationTypeContext } from "./GraphQLParser.js";
import { SelectionSetContext } from "./GraphQLParser.js";
import { SelectionContext } from "./GraphQLParser.js";
import { FieldContext } from "./GraphQLParser.js";
import { ArgumentsContext } from "./GraphQLParser.js";
import { ArgumentContext } from "./GraphQLParser.js";
import { AliasContext } from "./GraphQLParser.js";
import { FragmentSpreadContext } from "./GraphQLParser.js";
import { FragmentDefinitionContext } from "./GraphQLParser.js";
import { FragmentNameContext } from "./GraphQLParser.js";
import { TypeConditionContext } from "./GraphQLParser.js";
import { InlineFragmentContext } from "./GraphQLParser.js";
import { ValueContext } from "./GraphQLParser.js";
import { IntValueContext } from "./GraphQLParser.js";
import { FloatValueContext } from "./GraphQLParser.js";
import { BooleanValueContext } from "./GraphQLParser.js";
import { StringValueContext } from "./GraphQLParser.js";
import { NullValueContext } from "./GraphQLParser.js";
import { EnumValueContext } from "./GraphQLParser.js";
import { ListValueContext } from "./GraphQLParser.js";
import { ObjectValueContext } from "./GraphQLParser.js";
import { ObjectFieldContext } from "./GraphQLParser.js";
import { VariableContext } from "./GraphQLParser.js";
import { VariableDefinitionsContext } from "./GraphQLParser.js";
import { VariableDefinitionContext } from "./GraphQLParser.js";
import { DefaultValueContext } from "./GraphQLParser.js";
import { Type_Context } from "./GraphQLParser.js";
import { NamedTypeContext } from "./GraphQLParser.js";
import { ListTypeContext } from "./GraphQLParser.js";
import { DirectivesContext } from "./GraphQLParser.js";
import { DirectiveContext } from "./GraphQLParser.js";
import { TypeSystemDocumentContext } from "./GraphQLParser.js";
import { TypeSystemDefinitionContext } from "./GraphQLParser.js";
import { TypeSystemExtensionDocumentContext } from "./GraphQLParser.js";
import { TypeSystemExtensionContext } from "./GraphQLParser.js";
import { SchemaDefinitionContext } from "./GraphQLParser.js";
import { RootOperationTypeDefinitionContext } from "./GraphQLParser.js";
import { SchemaExtensionContext } from "./GraphQLParser.js";
import { DescriptionContext } from "./GraphQLParser.js";
import { TypeDefinitionContext } from "./GraphQLParser.js";
import { TypeExtensionContext } from "./GraphQLParser.js";
import { ScalarTypeDefinitionContext } from "./GraphQLParser.js";
import { ScalarTypeExtensionContext } from "./GraphQLParser.js";
import { ObjectTypeDefinitionContext } from "./GraphQLParser.js";
import { ImplementsInterfacesContext } from "./GraphQLParser.js";
import { FieldsDefinitionContext } from "./GraphQLParser.js";
import { FieldDefinitionContext } from "./GraphQLParser.js";
import { ArgumentsDefinitionContext } from "./GraphQLParser.js";
import { InputValueDefinitionContext } from "./GraphQLParser.js";
import { ObjectTypeExtensionContext } from "./GraphQLParser.js";
import { InterfaceTypeDefinitionContext } from "./GraphQLParser.js";
import { InterfaceTypeExtensionContext } from "./GraphQLParser.js";
import { UnionTypeDefinitionContext } from "./GraphQLParser.js";
import { UnionMemberTypesContext } from "./GraphQLParser.js";
import { UnionTypeExtensionContext } from "./GraphQLParser.js";
import { EnumTypeDefinitionContext } from "./GraphQLParser.js";
import { EnumValuesDefinitionContext } from "./GraphQLParser.js";
import { EnumValueDefinitionContext } from "./GraphQLParser.js";
import { EnumTypeExtensionContext } from "./GraphQLParser.js";
import { InputObjectTypeDefinitionContext } from "./GraphQLParser.js";
import { InputFieldsDefinitionContext } from "./GraphQLParser.js";
import { InputObjectTypeExtensionContext } from "./GraphQLParser.js";
import { DirectiveDefinitionContext } from "./GraphQLParser.js";
import { DirectiveLocationsContext } from "./GraphQLParser.js";
import { DirectiveLocationContext } from "./GraphQLParser.js";
import { ExecutableDirectiveLocationContext } from "./GraphQLParser.js";
import { TypeSystemDirectiveLocationContext } from "./GraphQLParser.js";
import { NameContext } from "./GraphQLParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GraphQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class GraphQLVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `GraphQLParser.document`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDocument?: (ctx: DocumentContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinition?: (ctx: DefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.executableDocument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecutableDocument?: (ctx: ExecutableDocumentContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.executableDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecutableDefinition?: (ctx: ExecutableDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.operationDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperationDefinition?: (ctx: OperationDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.operationType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperationType?: (ctx: OperationTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.selectionSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectionSet?: (ctx: SelectionSetContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.selection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelection?: (ctx: SelectionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.field`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField?: (ctx: FieldContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.arguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArguments?: (ctx: ArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgument?: (ctx: ArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias?: (ctx: AliasContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.fragmentSpread`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFragmentSpread?: (ctx: FragmentSpreadContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.fragmentDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFragmentDefinition?: (ctx: FragmentDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.fragmentName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFragmentName?: (ctx: FragmentNameContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.typeCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeCondition?: (ctx: TypeConditionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.inlineFragment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineFragment?: (ctx: InlineFragmentContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue?: (ctx: ValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.intValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntValue?: (ctx: IntValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.floatValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFloatValue?: (ctx: FloatValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.stringValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringValue?: (ctx: StringValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.nullValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullValue?: (ctx: NullValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.enumValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumValue?: (ctx: EnumValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.listValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListValue?: (ctx: ListValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.objectValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectValue?: (ctx: ObjectValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.objectField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectField?: (ctx: ObjectFieldContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable?: (ctx: VariableContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.variableDefinitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefinitions?: (ctx: VariableDefinitionsContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.variableDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.defaultValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultValue?: (ctx: DefaultValueContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.type_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_?: (ctx: Type_Context) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.namedType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedType?: (ctx: NamedTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.listType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListType?: (ctx: ListTypeContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.directives`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectives?: (ctx: DirectivesContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.directive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirective?: (ctx: DirectiveContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.typeSystemDocument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSystemDocument?: (ctx: TypeSystemDocumentContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.typeSystemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSystemDefinition?: (ctx: TypeSystemDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.typeSystemExtensionDocument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSystemExtensionDocument?: (ctx: TypeSystemExtensionDocumentContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.typeSystemExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSystemExtension?: (ctx: TypeSystemExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.schemaDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaDefinition?: (ctx: SchemaDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.rootOperationTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRootOperationTypeDefinition?: (ctx: RootOperationTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.schemaExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaExtension?: (ctx: SchemaExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.description`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescription?: (ctx: DescriptionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.typeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDefinition?: (ctx: TypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.typeExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeExtension?: (ctx: TypeExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.scalarTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScalarTypeDefinition?: (ctx: ScalarTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.scalarTypeExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitScalarTypeExtension?: (ctx: ScalarTypeExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.objectTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectTypeDefinition?: (ctx: ObjectTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.implementsInterfaces`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplementsInterfaces?: (ctx: ImplementsInterfacesContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.fieldsDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldsDefinition?: (ctx: FieldsDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.fieldDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldDefinition?: (ctx: FieldDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.argumentsDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgumentsDefinition?: (ctx: ArgumentsDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.inputValueDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInputValueDefinition?: (ctx: InputValueDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.objectTypeExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectTypeExtension?: (ctx: ObjectTypeExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.interfaceTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceTypeDefinition?: (ctx: InterfaceTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.interfaceTypeExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceTypeExtension?: (ctx: InterfaceTypeExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.unionTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnionTypeDefinition?: (ctx: UnionTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.unionMemberTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnionMemberTypes?: (ctx: UnionMemberTypesContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.unionTypeExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnionTypeExtension?: (ctx: UnionTypeExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.enumTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumTypeDefinition?: (ctx: EnumTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.enumValuesDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumValuesDefinition?: (ctx: EnumValuesDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.enumValueDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumValueDefinition?: (ctx: EnumValueDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.enumTypeExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumTypeExtension?: (ctx: EnumTypeExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.inputObjectTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInputObjectTypeDefinition?: (ctx: InputObjectTypeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.inputFieldsDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInputFieldsDefinition?: (ctx: InputFieldsDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.inputObjectTypeExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInputObjectTypeExtension?: (ctx: InputObjectTypeExtensionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.directiveDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectiveDefinition?: (ctx: DirectiveDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.directiveLocations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectiveLocations?: (ctx: DirectiveLocationsContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.directiveLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDirectiveLocation?: (ctx: DirectiveLocationContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.executableDirectiveLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecutableDirectiveLocation?: (ctx: ExecutableDirectiveLocationContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.typeSystemDirectiveLocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSystemDirectiveLocation?: (ctx: TypeSystemDirectiveLocationContext) => Result;
    /**
     * Visit a parse tree produced by `GraphQLParser.name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName?: (ctx: NameContext) => Result;
}

