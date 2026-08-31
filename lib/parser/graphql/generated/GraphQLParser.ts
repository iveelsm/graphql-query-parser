
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { GraphQLVisitor } from "./GraphQLVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class GraphQLParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly T__41 = 42;
    public static readonly T__42 = 43;
    public static readonly T__43 = 44;
    public static readonly T__44 = 45;
    public static readonly T__45 = 46;
    public static readonly T__46 = 47;
    public static readonly T__47 = 48;
    public static readonly T__48 = 49;
    public static readonly T__49 = 50;
    public static readonly T__50 = 51;
    public static readonly T__51 = 52;
    public static readonly NAME = 53;
    public static readonly STRING = 54;
    public static readonly BLOCK_STRING = 55;
    public static readonly ID = 56;
    public static readonly FLOAT = 57;
    public static readonly INT = 58;
    public static readonly PUNCTUATOR = 59;
    public static readonly WS = 60;
    public static readonly COMMA = 61;
    public static readonly LineComment = 62;
    public static readonly UNICODE_BOM = 63;
    public static readonly UTF8_BOM = 64;
    public static readonly UTF16_BOM = 65;
    public static readonly UTF32_BOM = 66;
    public static readonly RULE_document = 0;
    public static readonly RULE_definition = 1;
    public static readonly RULE_executableDocument = 2;
    public static readonly RULE_executableDefinition = 3;
    public static readonly RULE_operationDefinition = 4;
    public static readonly RULE_operationType = 5;
    public static readonly RULE_selectionSet = 6;
    public static readonly RULE_selection = 7;
    public static readonly RULE_field = 8;
    public static readonly RULE_arguments = 9;
    public static readonly RULE_argument = 10;
    public static readonly RULE_alias = 11;
    public static readonly RULE_fragmentSpread = 12;
    public static readonly RULE_fragmentDefinition = 13;
    public static readonly RULE_fragmentName = 14;
    public static readonly RULE_typeCondition = 15;
    public static readonly RULE_inlineFragment = 16;
    public static readonly RULE_value = 17;
    public static readonly RULE_intValue = 18;
    public static readonly RULE_floatValue = 19;
    public static readonly RULE_booleanValue = 20;
    public static readonly RULE_stringValue = 21;
    public static readonly RULE_nullValue = 22;
    public static readonly RULE_enumValue = 23;
    public static readonly RULE_listValue = 24;
    public static readonly RULE_objectValue = 25;
    public static readonly RULE_objectField = 26;
    public static readonly RULE_variable = 27;
    public static readonly RULE_variableDefinitions = 28;
    public static readonly RULE_variableDefinition = 29;
    public static readonly RULE_defaultValue = 30;
    public static readonly RULE_type_ = 31;
    public static readonly RULE_namedType = 32;
    public static readonly RULE_listType = 33;
    public static readonly RULE_directives = 34;
    public static readonly RULE_directive = 35;
    public static readonly RULE_typeSystemDocument = 36;
    public static readonly RULE_typeSystemDefinition = 37;
    public static readonly RULE_typeSystemExtensionDocument = 38;
    public static readonly RULE_typeSystemExtension = 39;
    public static readonly RULE_schemaDefinition = 40;
    public static readonly RULE_rootOperationTypeDefinition = 41;
    public static readonly RULE_schemaExtension = 42;
    public static readonly RULE_description = 43;
    public static readonly RULE_typeDefinition = 44;
    public static readonly RULE_typeExtension = 45;
    public static readonly RULE_scalarTypeDefinition = 46;
    public static readonly RULE_scalarTypeExtension = 47;
    public static readonly RULE_objectTypeDefinition = 48;
    public static readonly RULE_implementsInterfaces = 49;
    public static readonly RULE_fieldsDefinition = 50;
    public static readonly RULE_fieldDefinition = 51;
    public static readonly RULE_argumentsDefinition = 52;
    public static readonly RULE_inputValueDefinition = 53;
    public static readonly RULE_objectTypeExtension = 54;
    public static readonly RULE_interfaceTypeDefinition = 55;
    public static readonly RULE_interfaceTypeExtension = 56;
    public static readonly RULE_unionTypeDefinition = 57;
    public static readonly RULE_unionMemberTypes = 58;
    public static readonly RULE_unionTypeExtension = 59;
    public static readonly RULE_enumTypeDefinition = 60;
    public static readonly RULE_enumValuesDefinition = 61;
    public static readonly RULE_enumValueDefinition = 62;
    public static readonly RULE_enumTypeExtension = 63;
    public static readonly RULE_inputObjectTypeDefinition = 64;
    public static readonly RULE_inputFieldsDefinition = 65;
    public static readonly RULE_inputObjectTypeExtension = 66;
    public static readonly RULE_directiveDefinition = 67;
    public static readonly RULE_directiveLocations = 68;
    public static readonly RULE_directiveLocation = 69;
    public static readonly RULE_executableDirectiveLocation = 70;
    public static readonly RULE_typeSystemDirectiveLocation = 71;
    public static readonly RULE_name = 72;

    public static readonly literalNames = [
        null, "'query'", "'mutation'", "'subscription'", "'{'", "'}'", "'('", 
        "')'", "':'", "'...'", "'fragment'", "'on'", "'true'", "'false'", 
        "'null'", "'['", "']'", "'$'", "'='", "'!'", "'@'", "'schema'", 
        "'extend'", "'scalar'", "'type'", "'implements'", "'&'", "'interface'", 
        "'union'", "'|'", "'enum'", "'input'", "'directive'", "'repeatable'", 
        "'QUERY'", "'MUTATION'", "'SUBSCRIPTION'", "'FIELD'", "'FRAGMENT_DEFINITION'", 
        "'FRAGMENT_SPREAD'", "'INLINE_FRAGMENT'", "'VARIABLE_DEFINITION'", 
        "'SCHEMA'", "'SCALAR'", "'OBJECT'", "'FIELD_DEFINITION'", "'ARGUMENT_DEFINITION'", 
        "'INTERFACE'", "'UNION'", "'ENUM'", "'ENUM_VALUE'", "'INPUT_OBJECT'", 
        "'INPUT_FIELD_DEFINITION'", null, null, null, null, null, null, 
        null, null, "','", null, null, "'\\uEFBBBF'", "'\\uFEFF'", "'\\u0000FEFF'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "NAME", "STRING", 
        "BLOCK_STRING", "ID", "FLOAT", "INT", "PUNCTUATOR", "WS", "COMMA", 
        "LineComment", "UNICODE_BOM", "UTF8_BOM", "UTF16_BOM", "UTF32_BOM"
    ];
    public static readonly ruleNames = [
        "document", "definition", "executableDocument", "executableDefinition", 
        "operationDefinition", "operationType", "selectionSet", "selection", 
        "field", "arguments", "argument", "alias", "fragmentSpread", "fragmentDefinition", 
        "fragmentName", "typeCondition", "inlineFragment", "value", "intValue", 
        "floatValue", "booleanValue", "stringValue", "nullValue", "enumValue", 
        "listValue", "objectValue", "objectField", "variable", "variableDefinitions", 
        "variableDefinition", "defaultValue", "type_", "namedType", "listType", 
        "directives", "directive", "typeSystemDocument", "typeSystemDefinition", 
        "typeSystemExtensionDocument", "typeSystemExtension", "schemaDefinition", 
        "rootOperationTypeDefinition", "schemaExtension", "description", 
        "typeDefinition", "typeExtension", "scalarTypeDefinition", "scalarTypeExtension", 
        "objectTypeDefinition", "implementsInterfaces", "fieldsDefinition", 
        "fieldDefinition", "argumentsDefinition", "inputValueDefinition", 
        "objectTypeExtension", "interfaceTypeDefinition", "interfaceTypeExtension", 
        "unionTypeDefinition", "unionMemberTypes", "unionTypeExtension", 
        "enumTypeDefinition", "enumValuesDefinition", "enumValueDefinition", 
        "enumTypeExtension", "inputObjectTypeDefinition", "inputFieldsDefinition", 
        "inputObjectTypeExtension", "directiveDefinition", "directiveLocations", 
        "directiveLocation", "executableDirectiveLocation", "typeSystemDirectiveLocation", 
        "name",
    ];

    public get grammarFileName(): string { return "GraphQL.g4"; }
    public get literalNames(): (string | null)[] { return GraphQLParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return GraphQLParser.symbolicNames; }
    public get ruleNames(): string[] { return GraphQLParser.ruleNames; }
    public get serializedATN(): number[] { return GraphQLParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, GraphQLParser._ATN, GraphQLParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public document(): DocumentContext {
        let localContext = new DocumentContext(this.context, this.state);
        this.enterRule(localContext, 0, GraphQLParser.RULE_document);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 147;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 146;
                this.definition();
                }
                }
                this.state = 149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3655336990) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 12582913) !== 0));
            this.state = 151;
            this.match(GraphQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public definition(): DefinitionContext {
        let localContext = new DefinitionContext(this.context, this.state);
        this.enterRule(localContext, 2, GraphQLParser.RULE_definition);
        try {
            this.state = 156;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GraphQLParser.T__0:
            case GraphQLParser.T__1:
            case GraphQLParser.T__2:
            case GraphQLParser.T__3:
            case GraphQLParser.T__9:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 153;
                this.executableDocument();
                }
                break;
            case GraphQLParser.T__20:
            case GraphQLParser.T__22:
            case GraphQLParser.T__23:
            case GraphQLParser.T__26:
            case GraphQLParser.T__27:
            case GraphQLParser.T__29:
            case GraphQLParser.T__30:
            case GraphQLParser.T__31:
            case GraphQLParser.STRING:
            case GraphQLParser.BLOCK_STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 154;
                this.typeSystemDocument();
                }
                break;
            case GraphQLParser.T__21:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 155;
                this.typeSystemExtensionDocument();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public executableDocument(): ExecutableDocumentContext {
        let localContext = new ExecutableDocumentContext(this.context, this.state);
        this.enterRule(localContext, 4, GraphQLParser.RULE_executableDocument);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 159;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 158;
                    this.executableDefinition();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 161;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public executableDefinition(): ExecutableDefinitionContext {
        let localContext = new ExecutableDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 6, GraphQLParser.RULE_executableDefinition);
        try {
            this.state = 165;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GraphQLParser.T__0:
            case GraphQLParser.T__1:
            case GraphQLParser.T__2:
            case GraphQLParser.T__3:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 163;
                this.operationDefinition();
                }
                break;
            case GraphQLParser.T__9:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 164;
                this.fragmentDefinition();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public operationDefinition(): OperationDefinitionContext {
        let localContext = new OperationDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 8, GraphQLParser.RULE_operationDefinition);
        let _la: number;
        try {
            this.state = 180;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GraphQLParser.T__0:
            case GraphQLParser.T__1:
            case GraphQLParser.T__2:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 167;
                this.operationType();
                this.state = 169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 53) {
                    {
                    this.state = 168;
                    this.name();
                    }
                }

                this.state = 172;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 6) {
                    {
                    this.state = 171;
                    this.variableDefinitions();
                    }
                }

                this.state = 175;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 174;
                    this.directives();
                    }
                }

                this.state = 177;
                this.selectionSet();
                }
                break;
            case GraphQLParser.T__3:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 179;
                this.selectionSet();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public operationType(): OperationTypeContext {
        let localContext = new OperationTypeContext(this.context, this.state);
        this.enterRule(localContext, 10, GraphQLParser.RULE_operationType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 182;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectionSet(): SelectionSetContext {
        let localContext = new SelectionSetContext(this.context, this.state);
        this.enterRule(localContext, 12, GraphQLParser.RULE_selectionSet);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 184;
            this.match(GraphQLParser.T__3);
            this.state = 186;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 185;
                this.selection();
                }
                }
                this.state = 188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 9 || _la === 53);
            this.state = 190;
            this.match(GraphQLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selection(): SelectionContext {
        let localContext = new SelectionContext(this.context, this.state);
        this.enterRule(localContext, 14, GraphQLParser.RULE_selection);
        try {
            this.state = 195;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 192;
                this.field();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 193;
                this.fragmentSpread();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 194;
                this.inlineFragment();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public field(): FieldContext {
        let localContext = new FieldContext(this.context, this.state);
        this.enterRule(localContext, 16, GraphQLParser.RULE_field);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 198;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                this.state = 197;
                this.alias();
                }
                break;
            }
            this.state = 200;
            this.name();
            this.state = 202;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 201;
                this.arguments();
                }
            }

            this.state = 205;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 204;
                this.directives();
                }
            }

            this.state = 208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 207;
                this.selectionSet();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arguments(): ArgumentsContext {
        let localContext = new ArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 18, GraphQLParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 210;
            this.match(GraphQLParser.T__5);
            this.state = 212;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 211;
                this.argument();
                }
                }
                this.state = 214;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 53);
            this.state = 216;
            this.match(GraphQLParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argument(): ArgumentContext {
        let localContext = new ArgumentContext(this.context, this.state);
        this.enterRule(localContext, 20, GraphQLParser.RULE_argument);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 218;
            this.name();
            this.state = 219;
            this.match(GraphQLParser.T__7);
            this.state = 220;
            this.value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alias(): AliasContext {
        let localContext = new AliasContext(this.context, this.state);
        this.enterRule(localContext, 22, GraphQLParser.RULE_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 222;
            this.name();
            this.state = 223;
            this.match(GraphQLParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fragmentSpread(): FragmentSpreadContext {
        let localContext = new FragmentSpreadContext(this.context, this.state);
        this.enterRule(localContext, 24, GraphQLParser.RULE_fragmentSpread);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 225;
            this.match(GraphQLParser.T__8);
            this.state = 226;
            this.fragmentName();
            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 227;
                this.directives();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fragmentDefinition(): FragmentDefinitionContext {
        let localContext = new FragmentDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 26, GraphQLParser.RULE_fragmentDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 230;
            this.match(GraphQLParser.T__9);
            this.state = 231;
            this.fragmentName();
            this.state = 232;
            this.typeCondition();
            this.state = 234;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 233;
                this.directives();
                }
            }

            this.state = 236;
            this.selectionSet();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fragmentName(): FragmentNameContext {
        let localContext = new FragmentNameContext(this.context, this.state);
        this.enterRule(localContext, 28, GraphQLParser.RULE_fragmentName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 238;
            this.name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeCondition(): TypeConditionContext {
        let localContext = new TypeConditionContext(this.context, this.state);
        this.enterRule(localContext, 30, GraphQLParser.RULE_typeCondition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 240;
            this.match(GraphQLParser.T__10);
            this.state = 241;
            this.namedType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inlineFragment(): InlineFragmentContext {
        let localContext = new InlineFragmentContext(this.context, this.state);
        this.enterRule(localContext, 32, GraphQLParser.RULE_inlineFragment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            this.match(GraphQLParser.T__8);
            this.state = 245;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 244;
                this.typeCondition();
                }
            }

            this.state = 248;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 247;
                this.directives();
                }
            }

            this.state = 250;
            this.selectionSet();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public value(): ValueContext {
        let localContext = new ValueContext(this.context, this.state);
        this.enterRule(localContext, 34, GraphQLParser.RULE_value);
        try {
            this.state = 261;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GraphQLParser.T__16:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 252;
                this.variable();
                }
                break;
            case GraphQLParser.INT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 253;
                this.intValue();
                }
                break;
            case GraphQLParser.FLOAT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 254;
                this.floatValue();
                }
                break;
            case GraphQLParser.STRING:
            case GraphQLParser.BLOCK_STRING:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 255;
                this.stringValue();
                }
                break;
            case GraphQLParser.T__11:
            case GraphQLParser.T__12:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 256;
                this.booleanValue();
                }
                break;
            case GraphQLParser.T__13:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 257;
                this.nullValue();
                }
                break;
            case GraphQLParser.NAME:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 258;
                this.enumValue();
                }
                break;
            case GraphQLParser.T__14:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 259;
                this.listValue();
                }
                break;
            case GraphQLParser.T__3:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 260;
                this.objectValue();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public intValue(): IntValueContext {
        let localContext = new IntValueContext(this.context, this.state);
        this.enterRule(localContext, 36, GraphQLParser.RULE_intValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 263;
            this.match(GraphQLParser.INT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public floatValue(): FloatValueContext {
        let localContext = new FloatValueContext(this.context, this.state);
        this.enterRule(localContext, 38, GraphQLParser.RULE_floatValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 265;
            this.match(GraphQLParser.FLOAT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public booleanValue(): BooleanValueContext {
        let localContext = new BooleanValueContext(this.context, this.state);
        this.enterRule(localContext, 40, GraphQLParser.RULE_booleanValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 267;
            _la = this.tokenStream.LA(1);
            if(!(_la === 12 || _la === 13)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stringValue(): StringValueContext {
        let localContext = new StringValueContext(this.context, this.state);
        this.enterRule(localContext, 42, GraphQLParser.RULE_stringValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 269;
            _la = this.tokenStream.LA(1);
            if(!(_la === 54 || _la === 55)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nullValue(): NullValueContext {
        let localContext = new NullValueContext(this.context, this.state);
        this.enterRule(localContext, 44, GraphQLParser.RULE_nullValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 271;
            this.match(GraphQLParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumValue(): EnumValueContext {
        let localContext = new EnumValueContext(this.context, this.state);
        this.enterRule(localContext, 46, GraphQLParser.RULE_enumValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 273;
            this.name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public listValue(): ListValueContext {
        let localContext = new ListValueContext(this.context, this.state);
        this.enterRule(localContext, 48, GraphQLParser.RULE_listValue);
        let _la: number;
        try {
            this.state = 285;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 275;
                this.match(GraphQLParser.T__14);
                this.state = 276;
                this.match(GraphQLParser.T__15);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 277;
                this.match(GraphQLParser.T__14);
                this.state = 279;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 278;
                    this.value();
                    }
                    }
                    this.state = 281;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 192528) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 55) !== 0));
                this.state = 283;
                this.match(GraphQLParser.T__15);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectValue(): ObjectValueContext {
        let localContext = new ObjectValueContext(this.context, this.state);
        this.enterRule(localContext, 50, GraphQLParser.RULE_objectValue);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 287;
            this.match(GraphQLParser.T__3);
            this.state = 291;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 53) {
                {
                {
                this.state = 288;
                this.objectField();
                }
                }
                this.state = 293;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 294;
            this.match(GraphQLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectField(): ObjectFieldContext {
        let localContext = new ObjectFieldContext(this.context, this.state);
        this.enterRule(localContext, 52, GraphQLParser.RULE_objectField);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.name();
            this.state = 297;
            this.match(GraphQLParser.T__7);
            this.state = 298;
            this.value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variable(): VariableContext {
        let localContext = new VariableContext(this.context, this.state);
        this.enterRule(localContext, 54, GraphQLParser.RULE_variable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 300;
            this.match(GraphQLParser.T__16);
            this.state = 301;
            this.name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDefinitions(): VariableDefinitionsContext {
        let localContext = new VariableDefinitionsContext(this.context, this.state);
        this.enterRule(localContext, 56, GraphQLParser.RULE_variableDefinitions);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 303;
            this.match(GraphQLParser.T__5);
            this.state = 305;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 304;
                this.variableDefinition();
                }
                }
                this.state = 307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 17);
            this.state = 309;
            this.match(GraphQLParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDefinition(): VariableDefinitionContext {
        let localContext = new VariableDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 58, GraphQLParser.RULE_variableDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 311;
            this.variable();
            this.state = 312;
            this.match(GraphQLParser.T__7);
            this.state = 313;
            this.type_();
            this.state = 315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 314;
                this.defaultValue();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public defaultValue(): DefaultValueContext {
        let localContext = new DefaultValueContext(this.context, this.state);
        this.enterRule(localContext, 60, GraphQLParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 317;
            this.match(GraphQLParser.T__17);
            this.state = 318;
            this.value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): Type_Context {
        let localContext = new Type_Context(this.context, this.state);
        this.enterRule(localContext, 62, GraphQLParser.RULE_type_);
        let _la: number;
        try {
            this.state = 328;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GraphQLParser.NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 320;
                this.namedType();
                this.state = 322;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                    this.state = 321;
                    this.match(GraphQLParser.T__18);
                    }
                }

                }
                break;
            case GraphQLParser.T__14:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 324;
                this.listType();
                this.state = 326;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                    this.state = 325;
                    this.match(GraphQLParser.T__18);
                    }
                }

                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedType(): NamedTypeContext {
        let localContext = new NamedTypeContext(this.context, this.state);
        this.enterRule(localContext, 64, GraphQLParser.RULE_namedType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 330;
            this.name();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public listType(): ListTypeContext {
        let localContext = new ListTypeContext(this.context, this.state);
        this.enterRule(localContext, 66, GraphQLParser.RULE_listType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 332;
            this.match(GraphQLParser.T__14);
            this.state = 333;
            this.type_();
            this.state = 334;
            this.match(GraphQLParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public directives(): DirectivesContext {
        let localContext = new DirectivesContext(this.context, this.state);
        this.enterRule(localContext, 68, GraphQLParser.RULE_directives);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 337;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 336;
                this.directive();
                }
                }
                this.state = 339;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 20);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public directive(): DirectiveContext {
        let localContext = new DirectiveContext(this.context, this.state);
        this.enterRule(localContext, 70, GraphQLParser.RULE_directive);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 341;
            this.match(GraphQLParser.T__19);
            this.state = 342;
            this.name();
            this.state = 344;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 343;
                this.arguments();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSystemDocument(): TypeSystemDocumentContext {
        let localContext = new TypeSystemDocumentContext(this.context, this.state);
        this.enterRule(localContext, 72, GraphQLParser.RULE_typeSystemDocument);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 347;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 346;
                    this.typeSystemDefinition();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 349;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 30, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSystemDefinition(): TypeSystemDefinitionContext {
        let localContext = new TypeSystemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 74, GraphQLParser.RULE_typeSystemDefinition);
        try {
            this.state = 354;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 351;
                this.schemaDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 352;
                this.typeDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 353;
                this.directiveDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSystemExtensionDocument(): TypeSystemExtensionDocumentContext {
        let localContext = new TypeSystemExtensionDocumentContext(this.context, this.state);
        this.enterRule(localContext, 76, GraphQLParser.RULE_typeSystemExtensionDocument);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 357;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 356;
                    this.typeSystemExtension();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 359;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSystemExtension(): TypeSystemExtensionContext {
        let localContext = new TypeSystemExtensionContext(this.context, this.state);
        this.enterRule(localContext, 78, GraphQLParser.RULE_typeSystemExtension);
        try {
            this.state = 363;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 361;
                this.schemaExtension();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 362;
                this.typeExtension();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public schemaDefinition(): SchemaDefinitionContext {
        let localContext = new SchemaDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 80, GraphQLParser.RULE_schemaDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 365;
            this.match(GraphQLParser.T__20);
            this.state = 367;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 366;
                this.directives();
                }
            }

            this.state = 369;
            this.match(GraphQLParser.T__3);
            this.state = 371;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 370;
                this.rootOperationTypeDefinition();
                }
                }
                this.state = 373;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0));
            this.state = 375;
            this.match(GraphQLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rootOperationTypeDefinition(): RootOperationTypeDefinitionContext {
        let localContext = new RootOperationTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 82, GraphQLParser.RULE_rootOperationTypeDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 377;
            this.operationType();
            this.state = 378;
            this.match(GraphQLParser.T__7);
            this.state = 379;
            this.namedType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public schemaExtension(): SchemaExtensionContext {
        let localContext = new SchemaExtensionContext(this.context, this.state);
        this.enterRule(localContext, 84, GraphQLParser.RULE_schemaExtension);
        let _la: number;
        try {
            this.state = 397;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 381;
                this.match(GraphQLParser.T__21);
                this.state = 382;
                this.match(GraphQLParser.T__20);
                this.state = 384;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 383;
                    this.directives();
                    }
                }

                this.state = 386;
                this.match(GraphQLParser.T__3);
                this.state = 388;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 387;
                    this.rootOperationTypeDefinition();
                    }
                    }
                    this.state = 390;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0));
                this.state = 392;
                this.match(GraphQLParser.T__4);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 394;
                this.match(GraphQLParser.T__21);
                this.state = 395;
                this.match(GraphQLParser.T__20);
                this.state = 396;
                this.directives();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public description(): DescriptionContext {
        let localContext = new DescriptionContext(this.context, this.state);
        this.enterRule(localContext, 86, GraphQLParser.RULE_description);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 399;
            this.stringValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeDefinition(): TypeDefinitionContext {
        let localContext = new TypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 88, GraphQLParser.RULE_typeDefinition);
        try {
            this.state = 407;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 401;
                this.scalarTypeDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 402;
                this.objectTypeDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 403;
                this.interfaceTypeDefinition();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 404;
                this.unionTypeDefinition();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 405;
                this.enumTypeDefinition();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 406;
                this.inputObjectTypeDefinition();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeExtension(): TypeExtensionContext {
        let localContext = new TypeExtensionContext(this.context, this.state);
        this.enterRule(localContext, 90, GraphQLParser.RULE_typeExtension);
        try {
            this.state = 415;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 409;
                this.scalarTypeExtension();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 410;
                this.objectTypeExtension();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 411;
                this.interfaceTypeExtension();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 412;
                this.unionTypeExtension();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 413;
                this.enumTypeExtension();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 414;
                this.inputObjectTypeExtension();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scalarTypeDefinition(): ScalarTypeDefinitionContext {
        let localContext = new ScalarTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 92, GraphQLParser.RULE_scalarTypeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 418;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 417;
                this.description();
                }
            }

            this.state = 420;
            this.match(GraphQLParser.T__22);
            this.state = 421;
            this.name();
            this.state = 423;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 422;
                this.directives();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public scalarTypeExtension(): ScalarTypeExtensionContext {
        let localContext = new ScalarTypeExtensionContext(this.context, this.state);
        this.enterRule(localContext, 94, GraphQLParser.RULE_scalarTypeExtension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 425;
            this.match(GraphQLParser.T__21);
            this.state = 426;
            this.match(GraphQLParser.T__22);
            this.state = 427;
            this.name();
            this.state = 428;
            this.directives();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectTypeDefinition(): ObjectTypeDefinitionContext {
        let localContext = new ObjectTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 96, GraphQLParser.RULE_objectTypeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 431;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 430;
                this.description();
                }
            }

            this.state = 433;
            this.match(GraphQLParser.T__23);
            this.state = 434;
            this.name();
            this.state = 436;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 435;
                this.implementsInterfaces(0);
                }
            }

            this.state = 439;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 438;
                this.directives();
                }
            }

            this.state = 442;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
            case 1:
                {
                this.state = 441;
                this.fieldsDefinition();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public implementsInterfaces(): ImplementsInterfacesContext;
    public implementsInterfaces(_p: number): ImplementsInterfacesContext;
    public implementsInterfaces(_p?: number): ImplementsInterfacesContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ImplementsInterfacesContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 98;
        this.enterRecursionRule(localContext, 98, GraphQLParser.RULE_implementsInterfaces, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 445;
            this.match(GraphQLParser.T__24);
            this.state = 447;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 26) {
                {
                this.state = 446;
                this.match(GraphQLParser.T__25);
                }
            }

            this.state = 449;
            this.namedType();
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 456;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ImplementsInterfacesContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, GraphQLParser.RULE_implementsInterfaces);
                    this.state = 451;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 452;
                    this.match(GraphQLParser.T__25);
                    this.state = 453;
                    this.namedType();
                    }
                    }
                }
                this.state = 458;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 48, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public fieldsDefinition(): FieldsDefinitionContext {
        let localContext = new FieldsDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 100, GraphQLParser.RULE_fieldsDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 459;
            this.match(GraphQLParser.T__3);
            this.state = 461;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 460;
                this.fieldDefinition();
                }
                }
                this.state = 463;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 7) !== 0));
            this.state = 465;
            this.match(GraphQLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldDefinition(): FieldDefinitionContext {
        let localContext = new FieldDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 102, GraphQLParser.RULE_fieldDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 468;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 467;
                this.description();
                }
            }

            this.state = 470;
            this.name();
            this.state = 472;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 471;
                this.argumentsDefinition();
                }
            }

            this.state = 474;
            this.match(GraphQLParser.T__7);
            this.state = 475;
            this.type_();
            this.state = 477;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 476;
                this.directives();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argumentsDefinition(): ArgumentsDefinitionContext {
        let localContext = new ArgumentsDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 104, GraphQLParser.RULE_argumentsDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 479;
            this.match(GraphQLParser.T__5);
            this.state = 481;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 480;
                this.inputValueDefinition();
                }
                }
                this.state = 483;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 7) !== 0));
            this.state = 485;
            this.match(GraphQLParser.T__6);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inputValueDefinition(): InputValueDefinitionContext {
        let localContext = new InputValueDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 106, GraphQLParser.RULE_inputValueDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 488;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 487;
                this.description();
                }
            }

            this.state = 490;
            this.name();
            this.state = 491;
            this.match(GraphQLParser.T__7);
            this.state = 492;
            this.type_();
            this.state = 494;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 493;
                this.defaultValue();
                }
            }

            this.state = 497;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 496;
                this.directives();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectTypeExtension(): ObjectTypeExtensionContext {
        let localContext = new ObjectTypeExtensionContext(this.context, this.state);
        this.enterRule(localContext, 108, GraphQLParser.RULE_objectTypeExtension);
        let _la: number;
        try {
            this.state = 523;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 499;
                this.match(GraphQLParser.T__21);
                this.state = 500;
                this.match(GraphQLParser.T__23);
                this.state = 501;
                this.name();
                this.state = 503;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                    this.state = 502;
                    this.implementsInterfaces(0);
                    }
                }

                this.state = 506;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 505;
                    this.directives();
                    }
                }

                this.state = 508;
                this.fieldsDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 510;
                this.match(GraphQLParser.T__21);
                this.state = 511;
                this.match(GraphQLParser.T__23);
                this.state = 512;
                this.name();
                this.state = 514;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                    this.state = 513;
                    this.implementsInterfaces(0);
                    }
                }

                this.state = 516;
                this.directives();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 518;
                this.match(GraphQLParser.T__21);
                this.state = 519;
                this.match(GraphQLParser.T__23);
                this.state = 520;
                this.name();
                this.state = 521;
                this.implementsInterfaces(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceTypeDefinition(): InterfaceTypeDefinitionContext {
        let localContext = new InterfaceTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 110, GraphQLParser.RULE_interfaceTypeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 526;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 525;
                this.description();
                }
            }

            this.state = 528;
            this.match(GraphQLParser.T__26);
            this.state = 529;
            this.name();
            this.state = 531;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 25) {
                {
                this.state = 530;
                this.implementsInterfaces(0);
                }
            }

            this.state = 534;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 533;
                this.directives();
                }
            }

            this.state = 537;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
            case 1:
                {
                this.state = 536;
                this.fieldsDefinition();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceTypeExtension(): InterfaceTypeExtensionContext {
        let localContext = new InterfaceTypeExtensionContext(this.context, this.state);
        this.enterRule(localContext, 112, GraphQLParser.RULE_interfaceTypeExtension);
        let _la: number;
        try {
            this.state = 558;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 539;
                this.match(GraphQLParser.T__21);
                this.state = 540;
                this.match(GraphQLParser.T__26);
                this.state = 541;
                this.name();
                this.state = 543;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                    this.state = 542;
                    this.implementsInterfaces(0);
                    }
                }

                this.state = 546;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 545;
                    this.directives();
                    }
                }

                this.state = 548;
                this.fieldsDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 550;
                this.match(GraphQLParser.T__21);
                this.state = 551;
                this.match(GraphQLParser.T__26);
                this.state = 552;
                this.name();
                this.state = 554;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 25) {
                    {
                    this.state = 553;
                    this.implementsInterfaces(0);
                    }
                }

                this.state = 556;
                this.directives();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unionTypeDefinition(): UnionTypeDefinitionContext {
        let localContext = new UnionTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 114, GraphQLParser.RULE_unionTypeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 561;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 560;
                this.description();
                }
            }

            this.state = 563;
            this.match(GraphQLParser.T__27);
            this.state = 564;
            this.name();
            this.state = 566;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 565;
                this.directives();
                }
            }

            this.state = 569;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 568;
                this.unionMemberTypes();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unionMemberTypes(): UnionMemberTypesContext {
        let localContext = new UnionMemberTypesContext(this.context, this.state);
        this.enterRule(localContext, 116, GraphQLParser.RULE_unionMemberTypes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 571;
            this.match(GraphQLParser.T__17);
            this.state = 573;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 29) {
                {
                this.state = 572;
                this.match(GraphQLParser.T__28);
                }
            }

            this.state = 575;
            this.namedType();
            this.state = 580;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 29) {
                {
                {
                this.state = 576;
                this.match(GraphQLParser.T__28);
                this.state = 577;
                this.namedType();
                }
                }
                this.state = 582;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public unionTypeExtension(): UnionTypeExtensionContext {
        let localContext = new UnionTypeExtensionContext(this.context, this.state);
        this.enterRule(localContext, 118, GraphQLParser.RULE_unionTypeExtension);
        let _la: number;
        try {
            this.state = 596;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 583;
                this.match(GraphQLParser.T__21);
                this.state = 584;
                this.match(GraphQLParser.T__27);
                this.state = 585;
                this.name();
                this.state = 587;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 586;
                    this.directives();
                    }
                }

                this.state = 589;
                this.unionMemberTypes();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 591;
                this.match(GraphQLParser.T__21);
                this.state = 592;
                this.match(GraphQLParser.T__27);
                this.state = 593;
                this.name();
                this.state = 594;
                this.directives();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumTypeDefinition(): EnumTypeDefinitionContext {
        let localContext = new EnumTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 120, GraphQLParser.RULE_enumTypeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 599;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 598;
                this.description();
                }
            }

            this.state = 601;
            this.match(GraphQLParser.T__29);
            this.state = 602;
            this.name();
            this.state = 604;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 603;
                this.directives();
                }
            }

            this.state = 607;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
            case 1:
                {
                this.state = 606;
                this.enumValuesDefinition();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumValuesDefinition(): EnumValuesDefinitionContext {
        let localContext = new EnumValuesDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 122, GraphQLParser.RULE_enumValuesDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 609;
            this.match(GraphQLParser.T__3);
            this.state = 611;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 610;
                this.enumValueDefinition();
                }
                }
                this.state = 613;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 7) !== 0));
            this.state = 615;
            this.match(GraphQLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumValueDefinition(): EnumValueDefinitionContext {
        let localContext = new EnumValueDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 124, GraphQLParser.RULE_enumValueDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 618;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 617;
                this.description();
                }
            }

            this.state = 620;
            this.enumValue();
            this.state = 622;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 621;
                this.directives();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumTypeExtension(): EnumTypeExtensionContext {
        let localContext = new EnumTypeExtensionContext(this.context, this.state);
        this.enterRule(localContext, 126, GraphQLParser.RULE_enumTypeExtension);
        let _la: number;
        try {
            this.state = 637;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 624;
                this.match(GraphQLParser.T__21);
                this.state = 625;
                this.match(GraphQLParser.T__29);
                this.state = 626;
                this.name();
                this.state = 628;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 627;
                    this.directives();
                    }
                }

                this.state = 630;
                this.enumValuesDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 632;
                this.match(GraphQLParser.T__21);
                this.state = 633;
                this.match(GraphQLParser.T__29);
                this.state = 634;
                this.name();
                this.state = 635;
                this.directives();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inputObjectTypeDefinition(): InputObjectTypeDefinitionContext {
        let localContext = new InputObjectTypeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 128, GraphQLParser.RULE_inputObjectTypeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 640;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 639;
                this.description();
                }
            }

            this.state = 642;
            this.match(GraphQLParser.T__30);
            this.state = 643;
            this.name();
            this.state = 645;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 644;
                this.directives();
                }
            }

            this.state = 648;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
            case 1:
                {
                this.state = 647;
                this.inputFieldsDefinition();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inputFieldsDefinition(): InputFieldsDefinitionContext {
        let localContext = new InputFieldsDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 130, GraphQLParser.RULE_inputFieldsDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 650;
            this.match(GraphQLParser.T__3);
            this.state = 652;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 651;
                this.inputValueDefinition();
                }
                }
                this.state = 654;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 7) !== 0));
            this.state = 656;
            this.match(GraphQLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public inputObjectTypeExtension(): InputObjectTypeExtensionContext {
        let localContext = new InputObjectTypeExtensionContext(this.context, this.state);
        this.enterRule(localContext, 132, GraphQLParser.RULE_inputObjectTypeExtension);
        let _la: number;
        try {
            this.state = 671;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 658;
                this.match(GraphQLParser.T__21);
                this.state = 659;
                this.match(GraphQLParser.T__30);
                this.state = 660;
                this.name();
                this.state = 662;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 20) {
                    {
                    this.state = 661;
                    this.directives();
                    }
                }

                this.state = 664;
                this.inputFieldsDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 666;
                this.match(GraphQLParser.T__21);
                this.state = 667;
                this.match(GraphQLParser.T__30);
                this.state = 668;
                this.name();
                this.state = 669;
                this.directives();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public directiveDefinition(): DirectiveDefinitionContext {
        let localContext = new DirectiveDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 134, GraphQLParser.RULE_directiveDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 674;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54 || _la === 55) {
                {
                this.state = 673;
                this.description();
                }
            }

            this.state = 676;
            this.match(GraphQLParser.T__31);
            this.state = 677;
            this.match(GraphQLParser.T__19);
            this.state = 678;
            this.name();
            this.state = 680;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 679;
                this.argumentsDefinition();
                }
            }

            this.state = 683;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 33) {
                {
                this.state = 682;
                this.match(GraphQLParser.T__32);
                }
            }

            this.state = 685;
            this.match(GraphQLParser.T__10);
            this.state = 686;
            this.directiveLocations();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public directiveLocations(): DirectiveLocationsContext {
        let localContext = new DirectiveLocationsContext(this.context, this.state);
        this.enterRule(localContext, 136, GraphQLParser.RULE_directiveLocations);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 688;
            this.directiveLocation();
            this.state = 693;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 29) {
                {
                {
                this.state = 689;
                this.match(GraphQLParser.T__28);
                this.state = 690;
                this.directiveLocation();
                }
                }
                this.state = 695;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public directiveLocation(): DirectiveLocationContext {
        let localContext = new DirectiveLocationContext(this.context, this.state);
        this.enterRule(localContext, 138, GraphQLParser.RULE_directiveLocation);
        try {
            this.state = 698;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case GraphQLParser.T__33:
            case GraphQLParser.T__34:
            case GraphQLParser.T__35:
            case GraphQLParser.T__36:
            case GraphQLParser.T__37:
            case GraphQLParser.T__38:
            case GraphQLParser.T__39:
            case GraphQLParser.T__40:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 696;
                this.executableDirectiveLocation();
                }
                break;
            case GraphQLParser.T__41:
            case GraphQLParser.T__42:
            case GraphQLParser.T__43:
            case GraphQLParser.T__44:
            case GraphQLParser.T__45:
            case GraphQLParser.T__46:
            case GraphQLParser.T__47:
            case GraphQLParser.T__48:
            case GraphQLParser.T__49:
            case GraphQLParser.T__50:
            case GraphQLParser.T__51:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 697;
                this.typeSystemDirectiveLocation();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public executableDirectiveLocation(): ExecutableDirectiveLocationContext {
        let localContext = new ExecutableDirectiveLocationContext(this.context, this.state);
        this.enterRule(localContext, 140, GraphQLParser.RULE_executableDirectiveLocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 700;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 255) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSystemDirectiveLocation(): TypeSystemDirectiveLocationContext {
        let localContext = new TypeSystemDirectiveLocationContext(this.context, this.state);
        this.enterRule(localContext, 142, GraphQLParser.RULE_typeSystemDirectiveLocation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 702;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 2047) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public name(): NameContext {
        let localContext = new NameContext(this.context, this.state);
        this.enterRule(localContext, 144, GraphQLParser.RULE_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 704;
            this.match(GraphQLParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 49:
            return this.implementsInterfaces_sempred(localContext as ImplementsInterfacesContext, predIndex);
        }
        return true;
    }
    private implementsInterfaces_sempred(localContext: ImplementsInterfacesContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,66,707,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
        7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
        2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,
        7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,
        2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,
        7,72,1,0,4,0,148,8,0,11,0,12,0,149,1,0,1,0,1,1,1,1,1,1,3,1,157,8,
        1,1,2,4,2,160,8,2,11,2,12,2,161,1,3,1,3,3,3,166,8,3,1,4,1,4,3,4,
        170,8,4,1,4,3,4,173,8,4,1,4,3,4,176,8,4,1,4,1,4,1,4,3,4,181,8,4,
        1,5,1,5,1,6,1,6,4,6,187,8,6,11,6,12,6,188,1,6,1,6,1,7,1,7,1,7,3,
        7,196,8,7,1,8,3,8,199,8,8,1,8,1,8,3,8,203,8,8,1,8,3,8,206,8,8,1,
        8,3,8,209,8,8,1,9,1,9,4,9,213,8,9,11,9,12,9,214,1,9,1,9,1,10,1,10,
        1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,3,12,229,8,12,1,13,1,13,
        1,13,1,13,3,13,235,8,13,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,16,
        1,16,3,16,246,8,16,1,16,3,16,249,8,16,1,16,1,16,1,17,1,17,1,17,1,
        17,1,17,1,17,1,17,1,17,1,17,3,17,262,8,17,1,18,1,18,1,19,1,19,1,
        20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,24,4,24,280,
        8,24,11,24,12,24,281,1,24,1,24,3,24,286,8,24,1,25,1,25,5,25,290,
        8,25,10,25,12,25,293,9,25,1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,
        1,27,1,28,1,28,4,28,306,8,28,11,28,12,28,307,1,28,1,28,1,29,1,29,
        1,29,1,29,3,29,316,8,29,1,30,1,30,1,30,1,31,1,31,3,31,323,8,31,1,
        31,1,31,3,31,327,8,31,3,31,329,8,31,1,32,1,32,1,33,1,33,1,33,1,33,
        1,34,4,34,338,8,34,11,34,12,34,339,1,35,1,35,1,35,3,35,345,8,35,
        1,36,4,36,348,8,36,11,36,12,36,349,1,37,1,37,1,37,3,37,355,8,37,
        1,38,4,38,358,8,38,11,38,12,38,359,1,39,1,39,3,39,364,8,39,1,40,
        1,40,3,40,368,8,40,1,40,1,40,4,40,372,8,40,11,40,12,40,373,1,40,
        1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,42,3,42,385,8,42,1,42,1,42,
        4,42,389,8,42,11,42,12,42,390,1,42,1,42,1,42,1,42,1,42,3,42,398,
        8,42,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,3,44,408,8,44,1,45,
        1,45,1,45,1,45,1,45,1,45,3,45,416,8,45,1,46,3,46,419,8,46,1,46,1,
        46,1,46,3,46,424,8,46,1,47,1,47,1,47,1,47,1,47,1,48,3,48,432,8,48,
        1,48,1,48,1,48,3,48,437,8,48,1,48,3,48,440,8,48,1,48,3,48,443,8,
        48,1,49,1,49,1,49,3,49,448,8,49,1,49,1,49,1,49,1,49,1,49,5,49,455,
        8,49,10,49,12,49,458,9,49,1,50,1,50,4,50,462,8,50,11,50,12,50,463,
        1,50,1,50,1,51,3,51,469,8,51,1,51,1,51,3,51,473,8,51,1,51,1,51,1,
        51,3,51,478,8,51,1,52,1,52,4,52,482,8,52,11,52,12,52,483,1,52,1,
        52,1,53,3,53,489,8,53,1,53,1,53,1,53,1,53,3,53,495,8,53,1,53,3,53,
        498,8,53,1,54,1,54,1,54,1,54,3,54,504,8,54,1,54,3,54,507,8,54,1,
        54,1,54,1,54,1,54,1,54,1,54,3,54,515,8,54,1,54,1,54,1,54,1,54,1,
        54,1,54,1,54,3,54,524,8,54,1,55,3,55,527,8,55,1,55,1,55,1,55,3,55,
        532,8,55,1,55,3,55,535,8,55,1,55,3,55,538,8,55,1,56,1,56,1,56,1,
        56,3,56,544,8,56,1,56,3,56,547,8,56,1,56,1,56,1,56,1,56,1,56,1,56,
        3,56,555,8,56,1,56,1,56,3,56,559,8,56,1,57,3,57,562,8,57,1,57,1,
        57,1,57,3,57,567,8,57,1,57,3,57,570,8,57,1,58,1,58,3,58,574,8,58,
        1,58,1,58,1,58,5,58,579,8,58,10,58,12,58,582,9,58,1,59,1,59,1,59,
        1,59,3,59,588,8,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,597,8,
        59,1,60,3,60,600,8,60,1,60,1,60,1,60,3,60,605,8,60,1,60,3,60,608,
        8,60,1,61,1,61,4,61,612,8,61,11,61,12,61,613,1,61,1,61,1,62,3,62,
        619,8,62,1,62,1,62,3,62,623,8,62,1,63,1,63,1,63,1,63,3,63,629,8,
        63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,3,63,638,8,63,1,64,3,64,641,
        8,64,1,64,1,64,1,64,3,64,646,8,64,1,64,3,64,649,8,64,1,65,1,65,4,
        65,653,8,65,11,65,12,65,654,1,65,1,65,1,66,1,66,1,66,1,66,3,66,663,
        8,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,672,8,66,1,67,3,67,
        675,8,67,1,67,1,67,1,67,1,67,3,67,681,8,67,1,67,3,67,684,8,67,1,
        67,1,67,1,67,1,68,1,68,1,68,5,68,692,8,68,10,68,12,68,695,9,68,1,
        69,1,69,3,69,699,8,69,1,70,1,70,1,71,1,71,1,72,1,72,1,72,0,1,98,
        73,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
        44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
        88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,
        124,126,128,130,132,134,136,138,140,142,144,0,5,1,0,1,3,1,0,12,13,
        1,0,54,55,1,0,34,41,1,0,42,52,747,0,147,1,0,0,0,2,156,1,0,0,0,4,
        159,1,0,0,0,6,165,1,0,0,0,8,180,1,0,0,0,10,182,1,0,0,0,12,184,1,
        0,0,0,14,195,1,0,0,0,16,198,1,0,0,0,18,210,1,0,0,0,20,218,1,0,0,
        0,22,222,1,0,0,0,24,225,1,0,0,0,26,230,1,0,0,0,28,238,1,0,0,0,30,
        240,1,0,0,0,32,243,1,0,0,0,34,261,1,0,0,0,36,263,1,0,0,0,38,265,
        1,0,0,0,40,267,1,0,0,0,42,269,1,0,0,0,44,271,1,0,0,0,46,273,1,0,
        0,0,48,285,1,0,0,0,50,287,1,0,0,0,52,296,1,0,0,0,54,300,1,0,0,0,
        56,303,1,0,0,0,58,311,1,0,0,0,60,317,1,0,0,0,62,328,1,0,0,0,64,330,
        1,0,0,0,66,332,1,0,0,0,68,337,1,0,0,0,70,341,1,0,0,0,72,347,1,0,
        0,0,74,354,1,0,0,0,76,357,1,0,0,0,78,363,1,0,0,0,80,365,1,0,0,0,
        82,377,1,0,0,0,84,397,1,0,0,0,86,399,1,0,0,0,88,407,1,0,0,0,90,415,
        1,0,0,0,92,418,1,0,0,0,94,425,1,0,0,0,96,431,1,0,0,0,98,444,1,0,
        0,0,100,459,1,0,0,0,102,468,1,0,0,0,104,479,1,0,0,0,106,488,1,0,
        0,0,108,523,1,0,0,0,110,526,1,0,0,0,112,558,1,0,0,0,114,561,1,0,
        0,0,116,571,1,0,0,0,118,596,1,0,0,0,120,599,1,0,0,0,122,609,1,0,
        0,0,124,618,1,0,0,0,126,637,1,0,0,0,128,640,1,0,0,0,130,650,1,0,
        0,0,132,671,1,0,0,0,134,674,1,0,0,0,136,688,1,0,0,0,138,698,1,0,
        0,0,140,700,1,0,0,0,142,702,1,0,0,0,144,704,1,0,0,0,146,148,3,2,
        1,0,147,146,1,0,0,0,148,149,1,0,0,0,149,147,1,0,0,0,149,150,1,0,
        0,0,150,151,1,0,0,0,151,152,5,0,0,1,152,1,1,0,0,0,153,157,3,4,2,
        0,154,157,3,72,36,0,155,157,3,76,38,0,156,153,1,0,0,0,156,154,1,
        0,0,0,156,155,1,0,0,0,157,3,1,0,0,0,158,160,3,6,3,0,159,158,1,0,
        0,0,160,161,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,5,1,0,0,
        0,163,166,3,8,4,0,164,166,3,26,13,0,165,163,1,0,0,0,165,164,1,0,
        0,0,166,7,1,0,0,0,167,169,3,10,5,0,168,170,3,144,72,0,169,168,1,
        0,0,0,169,170,1,0,0,0,170,172,1,0,0,0,171,173,3,56,28,0,172,171,
        1,0,0,0,172,173,1,0,0,0,173,175,1,0,0,0,174,176,3,68,34,0,175,174,
        1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,178,3,12,6,0,178,181,
        1,0,0,0,179,181,3,12,6,0,180,167,1,0,0,0,180,179,1,0,0,0,181,9,1,
        0,0,0,182,183,7,0,0,0,183,11,1,0,0,0,184,186,5,4,0,0,185,187,3,14,
        7,0,186,185,1,0,0,0,187,188,1,0,0,0,188,186,1,0,0,0,188,189,1,0,
        0,0,189,190,1,0,0,0,190,191,5,5,0,0,191,13,1,0,0,0,192,196,3,16,
        8,0,193,196,3,24,12,0,194,196,3,32,16,0,195,192,1,0,0,0,195,193,
        1,0,0,0,195,194,1,0,0,0,196,15,1,0,0,0,197,199,3,22,11,0,198,197,
        1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,202,3,144,72,0,201,203,
        3,18,9,0,202,201,1,0,0,0,202,203,1,0,0,0,203,205,1,0,0,0,204,206,
        3,68,34,0,205,204,1,0,0,0,205,206,1,0,0,0,206,208,1,0,0,0,207,209,
        3,12,6,0,208,207,1,0,0,0,208,209,1,0,0,0,209,17,1,0,0,0,210,212,
        5,6,0,0,211,213,3,20,10,0,212,211,1,0,0,0,213,214,1,0,0,0,214,212,
        1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,5,7,0,0,217,19,1,
        0,0,0,218,219,3,144,72,0,219,220,5,8,0,0,220,221,3,34,17,0,221,21,
        1,0,0,0,222,223,3,144,72,0,223,224,5,8,0,0,224,23,1,0,0,0,225,226,
        5,9,0,0,226,228,3,28,14,0,227,229,3,68,34,0,228,227,1,0,0,0,228,
        229,1,0,0,0,229,25,1,0,0,0,230,231,5,10,0,0,231,232,3,28,14,0,232,
        234,3,30,15,0,233,235,3,68,34,0,234,233,1,0,0,0,234,235,1,0,0,0,
        235,236,1,0,0,0,236,237,3,12,6,0,237,27,1,0,0,0,238,239,3,144,72,
        0,239,29,1,0,0,0,240,241,5,11,0,0,241,242,3,64,32,0,242,31,1,0,0,
        0,243,245,5,9,0,0,244,246,3,30,15,0,245,244,1,0,0,0,245,246,1,0,
        0,0,246,248,1,0,0,0,247,249,3,68,34,0,248,247,1,0,0,0,248,249,1,
        0,0,0,249,250,1,0,0,0,250,251,3,12,6,0,251,33,1,0,0,0,252,262,3,
        54,27,0,253,262,3,36,18,0,254,262,3,38,19,0,255,262,3,42,21,0,256,
        262,3,40,20,0,257,262,3,44,22,0,258,262,3,46,23,0,259,262,3,48,24,
        0,260,262,3,50,25,0,261,252,1,0,0,0,261,253,1,0,0,0,261,254,1,0,
        0,0,261,255,1,0,0,0,261,256,1,0,0,0,261,257,1,0,0,0,261,258,1,0,
        0,0,261,259,1,0,0,0,261,260,1,0,0,0,262,35,1,0,0,0,263,264,5,58,
        0,0,264,37,1,0,0,0,265,266,5,57,0,0,266,39,1,0,0,0,267,268,7,1,0,
        0,268,41,1,0,0,0,269,270,7,2,0,0,270,43,1,0,0,0,271,272,5,14,0,0,
        272,45,1,0,0,0,273,274,3,144,72,0,274,47,1,0,0,0,275,276,5,15,0,
        0,276,286,5,16,0,0,277,279,5,15,0,0,278,280,3,34,17,0,279,278,1,
        0,0,0,280,281,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,283,1,
        0,0,0,283,284,5,16,0,0,284,286,1,0,0,0,285,275,1,0,0,0,285,277,1,
        0,0,0,286,49,1,0,0,0,287,291,5,4,0,0,288,290,3,52,26,0,289,288,1,
        0,0,0,290,293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,294,1,
        0,0,0,293,291,1,0,0,0,294,295,5,5,0,0,295,51,1,0,0,0,296,297,3,144,
        72,0,297,298,5,8,0,0,298,299,3,34,17,0,299,53,1,0,0,0,300,301,5,
        17,0,0,301,302,3,144,72,0,302,55,1,0,0,0,303,305,5,6,0,0,304,306,
        3,58,29,0,305,304,1,0,0,0,306,307,1,0,0,0,307,305,1,0,0,0,307,308,
        1,0,0,0,308,309,1,0,0,0,309,310,5,7,0,0,310,57,1,0,0,0,311,312,3,
        54,27,0,312,313,5,8,0,0,313,315,3,62,31,0,314,316,3,60,30,0,315,
        314,1,0,0,0,315,316,1,0,0,0,316,59,1,0,0,0,317,318,5,18,0,0,318,
        319,3,34,17,0,319,61,1,0,0,0,320,322,3,64,32,0,321,323,5,19,0,0,
        322,321,1,0,0,0,322,323,1,0,0,0,323,329,1,0,0,0,324,326,3,66,33,
        0,325,327,5,19,0,0,326,325,1,0,0,0,326,327,1,0,0,0,327,329,1,0,0,
        0,328,320,1,0,0,0,328,324,1,0,0,0,329,63,1,0,0,0,330,331,3,144,72,
        0,331,65,1,0,0,0,332,333,5,15,0,0,333,334,3,62,31,0,334,335,5,16,
        0,0,335,67,1,0,0,0,336,338,3,70,35,0,337,336,1,0,0,0,338,339,1,0,
        0,0,339,337,1,0,0,0,339,340,1,0,0,0,340,69,1,0,0,0,341,342,5,20,
        0,0,342,344,3,144,72,0,343,345,3,18,9,0,344,343,1,0,0,0,344,345,
        1,0,0,0,345,71,1,0,0,0,346,348,3,74,37,0,347,346,1,0,0,0,348,349,
        1,0,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,73,1,0,0,0,351,355,3,
        80,40,0,352,355,3,88,44,0,353,355,3,134,67,0,354,351,1,0,0,0,354,
        352,1,0,0,0,354,353,1,0,0,0,355,75,1,0,0,0,356,358,3,78,39,0,357,
        356,1,0,0,0,358,359,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,
        77,1,0,0,0,361,364,3,84,42,0,362,364,3,90,45,0,363,361,1,0,0,0,363,
        362,1,0,0,0,364,79,1,0,0,0,365,367,5,21,0,0,366,368,3,68,34,0,367,
        366,1,0,0,0,367,368,1,0,0,0,368,369,1,0,0,0,369,371,5,4,0,0,370,
        372,3,82,41,0,371,370,1,0,0,0,372,373,1,0,0,0,373,371,1,0,0,0,373,
        374,1,0,0,0,374,375,1,0,0,0,375,376,5,5,0,0,376,81,1,0,0,0,377,378,
        3,10,5,0,378,379,5,8,0,0,379,380,3,64,32,0,380,83,1,0,0,0,381,382,
        5,22,0,0,382,384,5,21,0,0,383,385,3,68,34,0,384,383,1,0,0,0,384,
        385,1,0,0,0,385,386,1,0,0,0,386,388,5,4,0,0,387,389,3,82,41,0,388,
        387,1,0,0,0,389,390,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,
        392,1,0,0,0,392,393,5,5,0,0,393,398,1,0,0,0,394,395,5,22,0,0,395,
        396,5,21,0,0,396,398,3,68,34,0,397,381,1,0,0,0,397,394,1,0,0,0,398,
        85,1,0,0,0,399,400,3,42,21,0,400,87,1,0,0,0,401,408,3,92,46,0,402,
        408,3,96,48,0,403,408,3,110,55,0,404,408,3,114,57,0,405,408,3,120,
        60,0,406,408,3,128,64,0,407,401,1,0,0,0,407,402,1,0,0,0,407,403,
        1,0,0,0,407,404,1,0,0,0,407,405,1,0,0,0,407,406,1,0,0,0,408,89,1,
        0,0,0,409,416,3,94,47,0,410,416,3,108,54,0,411,416,3,112,56,0,412,
        416,3,118,59,0,413,416,3,126,63,0,414,416,3,132,66,0,415,409,1,0,
        0,0,415,410,1,0,0,0,415,411,1,0,0,0,415,412,1,0,0,0,415,413,1,0,
        0,0,415,414,1,0,0,0,416,91,1,0,0,0,417,419,3,86,43,0,418,417,1,0,
        0,0,418,419,1,0,0,0,419,420,1,0,0,0,420,421,5,23,0,0,421,423,3,144,
        72,0,422,424,3,68,34,0,423,422,1,0,0,0,423,424,1,0,0,0,424,93,1,
        0,0,0,425,426,5,22,0,0,426,427,5,23,0,0,427,428,3,144,72,0,428,429,
        3,68,34,0,429,95,1,0,0,0,430,432,3,86,43,0,431,430,1,0,0,0,431,432,
        1,0,0,0,432,433,1,0,0,0,433,434,5,24,0,0,434,436,3,144,72,0,435,
        437,3,98,49,0,436,435,1,0,0,0,436,437,1,0,0,0,437,439,1,0,0,0,438,
        440,3,68,34,0,439,438,1,0,0,0,439,440,1,0,0,0,440,442,1,0,0,0,441,
        443,3,100,50,0,442,441,1,0,0,0,442,443,1,0,0,0,443,97,1,0,0,0,444,
        445,6,49,-1,0,445,447,5,25,0,0,446,448,5,26,0,0,447,446,1,0,0,0,
        447,448,1,0,0,0,448,449,1,0,0,0,449,450,3,64,32,0,450,456,1,0,0,
        0,451,452,10,1,0,0,452,453,5,26,0,0,453,455,3,64,32,0,454,451,1,
        0,0,0,455,458,1,0,0,0,456,454,1,0,0,0,456,457,1,0,0,0,457,99,1,0,
        0,0,458,456,1,0,0,0,459,461,5,4,0,0,460,462,3,102,51,0,461,460,1,
        0,0,0,462,463,1,0,0,0,463,461,1,0,0,0,463,464,1,0,0,0,464,465,1,
        0,0,0,465,466,5,5,0,0,466,101,1,0,0,0,467,469,3,86,43,0,468,467,
        1,0,0,0,468,469,1,0,0,0,469,470,1,0,0,0,470,472,3,144,72,0,471,473,
        3,104,52,0,472,471,1,0,0,0,472,473,1,0,0,0,473,474,1,0,0,0,474,475,
        5,8,0,0,475,477,3,62,31,0,476,478,3,68,34,0,477,476,1,0,0,0,477,
        478,1,0,0,0,478,103,1,0,0,0,479,481,5,6,0,0,480,482,3,106,53,0,481,
        480,1,0,0,0,482,483,1,0,0,0,483,481,1,0,0,0,483,484,1,0,0,0,484,
        485,1,0,0,0,485,486,5,7,0,0,486,105,1,0,0,0,487,489,3,86,43,0,488,
        487,1,0,0,0,488,489,1,0,0,0,489,490,1,0,0,0,490,491,3,144,72,0,491,
        492,5,8,0,0,492,494,3,62,31,0,493,495,3,60,30,0,494,493,1,0,0,0,
        494,495,1,0,0,0,495,497,1,0,0,0,496,498,3,68,34,0,497,496,1,0,0,
        0,497,498,1,0,0,0,498,107,1,0,0,0,499,500,5,22,0,0,500,501,5,24,
        0,0,501,503,3,144,72,0,502,504,3,98,49,0,503,502,1,0,0,0,503,504,
        1,0,0,0,504,506,1,0,0,0,505,507,3,68,34,0,506,505,1,0,0,0,506,507,
        1,0,0,0,507,508,1,0,0,0,508,509,3,100,50,0,509,524,1,0,0,0,510,511,
        5,22,0,0,511,512,5,24,0,0,512,514,3,144,72,0,513,515,3,98,49,0,514,
        513,1,0,0,0,514,515,1,0,0,0,515,516,1,0,0,0,516,517,3,68,34,0,517,
        524,1,0,0,0,518,519,5,22,0,0,519,520,5,24,0,0,520,521,3,144,72,0,
        521,522,3,98,49,0,522,524,1,0,0,0,523,499,1,0,0,0,523,510,1,0,0,
        0,523,518,1,0,0,0,524,109,1,0,0,0,525,527,3,86,43,0,526,525,1,0,
        0,0,526,527,1,0,0,0,527,528,1,0,0,0,528,529,5,27,0,0,529,531,3,144,
        72,0,530,532,3,98,49,0,531,530,1,0,0,0,531,532,1,0,0,0,532,534,1,
        0,0,0,533,535,3,68,34,0,534,533,1,0,0,0,534,535,1,0,0,0,535,537,
        1,0,0,0,536,538,3,100,50,0,537,536,1,0,0,0,537,538,1,0,0,0,538,111,
        1,0,0,0,539,540,5,22,0,0,540,541,5,27,0,0,541,543,3,144,72,0,542,
        544,3,98,49,0,543,542,1,0,0,0,543,544,1,0,0,0,544,546,1,0,0,0,545,
        547,3,68,34,0,546,545,1,0,0,0,546,547,1,0,0,0,547,548,1,0,0,0,548,
        549,3,100,50,0,549,559,1,0,0,0,550,551,5,22,0,0,551,552,5,27,0,0,
        552,554,3,144,72,0,553,555,3,98,49,0,554,553,1,0,0,0,554,555,1,0,
        0,0,555,556,1,0,0,0,556,557,3,68,34,0,557,559,1,0,0,0,558,539,1,
        0,0,0,558,550,1,0,0,0,559,113,1,0,0,0,560,562,3,86,43,0,561,560,
        1,0,0,0,561,562,1,0,0,0,562,563,1,0,0,0,563,564,5,28,0,0,564,566,
        3,144,72,0,565,567,3,68,34,0,566,565,1,0,0,0,566,567,1,0,0,0,567,
        569,1,0,0,0,568,570,3,116,58,0,569,568,1,0,0,0,569,570,1,0,0,0,570,
        115,1,0,0,0,571,573,5,18,0,0,572,574,5,29,0,0,573,572,1,0,0,0,573,
        574,1,0,0,0,574,575,1,0,0,0,575,580,3,64,32,0,576,577,5,29,0,0,577,
        579,3,64,32,0,578,576,1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,
        581,1,0,0,0,581,117,1,0,0,0,582,580,1,0,0,0,583,584,5,22,0,0,584,
        585,5,28,0,0,585,587,3,144,72,0,586,588,3,68,34,0,587,586,1,0,0,
        0,587,588,1,0,0,0,588,589,1,0,0,0,589,590,3,116,58,0,590,597,1,0,
        0,0,591,592,5,22,0,0,592,593,5,28,0,0,593,594,3,144,72,0,594,595,
        3,68,34,0,595,597,1,0,0,0,596,583,1,0,0,0,596,591,1,0,0,0,597,119,
        1,0,0,0,598,600,3,86,43,0,599,598,1,0,0,0,599,600,1,0,0,0,600,601,
        1,0,0,0,601,602,5,30,0,0,602,604,3,144,72,0,603,605,3,68,34,0,604,
        603,1,0,0,0,604,605,1,0,0,0,605,607,1,0,0,0,606,608,3,122,61,0,607,
        606,1,0,0,0,607,608,1,0,0,0,608,121,1,0,0,0,609,611,5,4,0,0,610,
        612,3,124,62,0,611,610,1,0,0,0,612,613,1,0,0,0,613,611,1,0,0,0,613,
        614,1,0,0,0,614,615,1,0,0,0,615,616,5,5,0,0,616,123,1,0,0,0,617,
        619,3,86,43,0,618,617,1,0,0,0,618,619,1,0,0,0,619,620,1,0,0,0,620,
        622,3,46,23,0,621,623,3,68,34,0,622,621,1,0,0,0,622,623,1,0,0,0,
        623,125,1,0,0,0,624,625,5,22,0,0,625,626,5,30,0,0,626,628,3,144,
        72,0,627,629,3,68,34,0,628,627,1,0,0,0,628,629,1,0,0,0,629,630,1,
        0,0,0,630,631,3,122,61,0,631,638,1,0,0,0,632,633,5,22,0,0,633,634,
        5,30,0,0,634,635,3,144,72,0,635,636,3,68,34,0,636,638,1,0,0,0,637,
        624,1,0,0,0,637,632,1,0,0,0,638,127,1,0,0,0,639,641,3,86,43,0,640,
        639,1,0,0,0,640,641,1,0,0,0,641,642,1,0,0,0,642,643,5,31,0,0,643,
        645,3,144,72,0,644,646,3,68,34,0,645,644,1,0,0,0,645,646,1,0,0,0,
        646,648,1,0,0,0,647,649,3,130,65,0,648,647,1,0,0,0,648,649,1,0,0,
        0,649,129,1,0,0,0,650,652,5,4,0,0,651,653,3,106,53,0,652,651,1,0,
        0,0,653,654,1,0,0,0,654,652,1,0,0,0,654,655,1,0,0,0,655,656,1,0,
        0,0,656,657,5,5,0,0,657,131,1,0,0,0,658,659,5,22,0,0,659,660,5,31,
        0,0,660,662,3,144,72,0,661,663,3,68,34,0,662,661,1,0,0,0,662,663,
        1,0,0,0,663,664,1,0,0,0,664,665,3,130,65,0,665,672,1,0,0,0,666,667,
        5,22,0,0,667,668,5,31,0,0,668,669,3,144,72,0,669,670,3,68,34,0,670,
        672,1,0,0,0,671,658,1,0,0,0,671,666,1,0,0,0,672,133,1,0,0,0,673,
        675,3,86,43,0,674,673,1,0,0,0,674,675,1,0,0,0,675,676,1,0,0,0,676,
        677,5,32,0,0,677,678,5,20,0,0,678,680,3,144,72,0,679,681,3,104,52,
        0,680,679,1,0,0,0,680,681,1,0,0,0,681,683,1,0,0,0,682,684,5,33,0,
        0,683,682,1,0,0,0,683,684,1,0,0,0,684,685,1,0,0,0,685,686,5,11,0,
        0,686,687,3,136,68,0,687,135,1,0,0,0,688,693,3,138,69,0,689,690,
        5,29,0,0,690,692,3,138,69,0,691,689,1,0,0,0,692,695,1,0,0,0,693,
        691,1,0,0,0,693,694,1,0,0,0,694,137,1,0,0,0,695,693,1,0,0,0,696,
        699,3,140,70,0,697,699,3,142,71,0,698,696,1,0,0,0,698,697,1,0,0,
        0,699,139,1,0,0,0,700,701,7,3,0,0,701,141,1,0,0,0,702,703,7,4,0,
        0,703,143,1,0,0,0,704,705,5,53,0,0,705,145,1,0,0,0,95,149,156,161,
        165,169,172,175,180,188,195,198,202,205,208,214,228,234,245,248,
        261,281,285,291,307,315,322,326,328,339,344,349,354,359,363,367,
        373,384,390,397,407,415,418,423,431,436,439,442,447,456,463,468,
        472,477,483,488,494,497,503,506,514,523,526,531,534,537,543,546,
        554,558,561,566,569,573,580,587,596,599,604,607,613,618,622,628,
        637,640,645,648,654,662,671,674,680,683,693,698
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!GraphQLParser.__ATN) {
            GraphQLParser.__ATN = new antlr.ATNDeserializer().deserialize(GraphQLParser._serializedATN);
        }

        return GraphQLParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(GraphQLParser.literalNames, GraphQLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return GraphQLParser.vocabulary;
    }

    private static readonly decisionsToDFA = GraphQLParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class DocumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(GraphQLParser.EOF, 0)!;
    }
    public definition(): DefinitionContext[];
    public definition(i: number): DefinitionContext | null;
    public definition(i?: number): DefinitionContext[] | DefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DefinitionContext);
        }

        return this.getRuleContext(i, DefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_document;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDocument) {
            return visitor.visitDocument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public executableDocument(): ExecutableDocumentContext | null {
        return this.getRuleContext(0, ExecutableDocumentContext);
    }
    public typeSystemDocument(): TypeSystemDocumentContext | null {
        return this.getRuleContext(0, TypeSystemDocumentContext);
    }
    public typeSystemExtensionDocument(): TypeSystemExtensionDocumentContext | null {
        return this.getRuleContext(0, TypeSystemExtensionDocumentContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_definition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDefinition) {
            return visitor.visitDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExecutableDocumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public executableDefinition(): ExecutableDefinitionContext[];
    public executableDefinition(i: number): ExecutableDefinitionContext | null;
    public executableDefinition(i?: number): ExecutableDefinitionContext[] | ExecutableDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExecutableDefinitionContext);
        }

        return this.getRuleContext(i, ExecutableDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_executableDocument;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitExecutableDocument) {
            return visitor.visitExecutableDocument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExecutableDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public operationDefinition(): OperationDefinitionContext | null {
        return this.getRuleContext(0, OperationDefinitionContext);
    }
    public fragmentDefinition(): FragmentDefinitionContext | null {
        return this.getRuleContext(0, FragmentDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_executableDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitExecutableDefinition) {
            return visitor.visitExecutableDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OperationDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public operationType(): OperationTypeContext | null {
        return this.getRuleContext(0, OperationTypeContext);
    }
    public selectionSet(): SelectionSetContext {
        return this.getRuleContext(0, SelectionSetContext)!;
    }
    public name(): NameContext | null {
        return this.getRuleContext(0, NameContext);
    }
    public variableDefinitions(): VariableDefinitionsContext | null {
        return this.getRuleContext(0, VariableDefinitionsContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_operationDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitOperationDefinition) {
            return visitor.visitOperationDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OperationTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_operationType;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitOperationType) {
            return visitor.visitOperationType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectionSetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selection(): SelectionContext[];
    public selection(i: number): SelectionContext | null;
    public selection(i?: number): SelectionContext[] | SelectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectionContext);
        }

        return this.getRuleContext(i, SelectionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_selectionSet;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitSelectionSet) {
            return visitor.visitSelectionSet(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public field(): FieldContext | null {
        return this.getRuleContext(0, FieldContext);
    }
    public fragmentSpread(): FragmentSpreadContext | null {
        return this.getRuleContext(0, FragmentSpreadContext);
    }
    public inlineFragment(): InlineFragmentContext | null {
        return this.getRuleContext(0, InlineFragmentContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_selection;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitSelection) {
            return visitor.visitSelection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public selectionSet(): SelectionSetContext | null {
        return this.getRuleContext(0, SelectionSetContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_field;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitField) {
            return visitor.visitField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public argument(): ArgumentContext[];
    public argument(i: number): ArgumentContext | null;
    public argument(i?: number): ArgumentContext[] | ArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }

        return this.getRuleContext(i, ArgumentContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_arguments;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public value(): ValueContext {
        return this.getRuleContext(0, ValueContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_argument;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_alias;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FragmentSpreadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fragmentName(): FragmentNameContext {
        return this.getRuleContext(0, FragmentNameContext)!;
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_fragmentSpread;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitFragmentSpread) {
            return visitor.visitFragmentSpread(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FragmentDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fragmentName(): FragmentNameContext {
        return this.getRuleContext(0, FragmentNameContext)!;
    }
    public typeCondition(): TypeConditionContext {
        return this.getRuleContext(0, TypeConditionContext)!;
    }
    public selectionSet(): SelectionSetContext {
        return this.getRuleContext(0, SelectionSetContext)!;
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_fragmentDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitFragmentDefinition) {
            return visitor.visitFragmentDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FragmentNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_fragmentName;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitFragmentName) {
            return visitor.visitFragmentName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namedType(): NamedTypeContext {
        return this.getRuleContext(0, NamedTypeContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_typeCondition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitTypeCondition) {
            return visitor.visitTypeCondition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InlineFragmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectionSet(): SelectionSetContext {
        return this.getRuleContext(0, SelectionSetContext)!;
    }
    public typeCondition(): TypeConditionContext | null {
        return this.getRuleContext(0, TypeConditionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_inlineFragment;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitInlineFragment) {
            return visitor.visitInlineFragment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variable(): VariableContext | null {
        return this.getRuleContext(0, VariableContext);
    }
    public intValue(): IntValueContext | null {
        return this.getRuleContext(0, IntValueContext);
    }
    public floatValue(): FloatValueContext | null {
        return this.getRuleContext(0, FloatValueContext);
    }
    public stringValue(): StringValueContext | null {
        return this.getRuleContext(0, StringValueContext);
    }
    public booleanValue(): BooleanValueContext | null {
        return this.getRuleContext(0, BooleanValueContext);
    }
    public nullValue(): NullValueContext | null {
        return this.getRuleContext(0, NullValueContext);
    }
    public enumValue(): EnumValueContext | null {
        return this.getRuleContext(0, EnumValueContext);
    }
    public listValue(): ListValueContext | null {
        return this.getRuleContext(0, ListValueContext);
    }
    public objectValue(): ObjectValueContext | null {
        return this.getRuleContext(0, ObjectValueContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_value;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(GraphQLParser.INT, 0)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_intValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitIntValue) {
            return visitor.visitIntValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FloatValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FLOAT(): antlr.TerminalNode {
        return this.getToken(GraphQLParser.FLOAT, 0)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_floatValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitFloatValue) {
            return visitor.visitFloatValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_booleanValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitBooleanValue) {
            return visitor.visitBooleanValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StringValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(GraphQLParser.STRING, 0);
    }
    public BLOCK_STRING(): antlr.TerminalNode | null {
        return this.getToken(GraphQLParser.BLOCK_STRING, 0);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_stringValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitStringValue) {
            return visitor.visitStringValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NullValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_nullValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitNullValue) {
            return visitor.visitNullValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_enumValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitEnumValue) {
            return visitor.visitEnumValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public value(): ValueContext[];
    public value(i: number): ValueContext | null;
    public value(i?: number): ValueContext[] | ValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }

        return this.getRuleContext(i, ValueContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_listValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitListValue) {
            return visitor.visitListValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public objectField(): ObjectFieldContext[];
    public objectField(i: number): ObjectFieldContext | null;
    public objectField(i?: number): ObjectFieldContext[] | ObjectFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjectFieldContext);
        }

        return this.getRuleContext(i, ObjectFieldContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_objectValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitObjectValue) {
            return visitor.visitObjectValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public value(): ValueContext {
        return this.getRuleContext(0, ValueContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_objectField;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitObjectField) {
            return visitor.visitObjectField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_variable;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDefinitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDefinition(): VariableDefinitionContext[];
    public variableDefinition(i: number): VariableDefinitionContext | null;
    public variableDefinition(i?: number): VariableDefinitionContext[] | VariableDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDefinitionContext);
        }

        return this.getRuleContext(i, VariableDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_variableDefinitions;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitVariableDefinitions) {
            return visitor.visitVariableDefinitions(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public defaultValue(): DefaultValueContext | null {
        return this.getRuleContext(0, DefaultValueContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_variableDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitVariableDefinition) {
            return visitor.visitVariableDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefaultValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public value(): ValueContext {
        return this.getRuleContext(0, ValueContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_defaultValue;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDefaultValue) {
            return visitor.visitDefaultValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Type_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namedType(): NamedTypeContext | null {
        return this.getRuleContext(0, NamedTypeContext);
    }
    public listType(): ListTypeContext | null {
        return this.getRuleContext(0, ListTypeContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_type_;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_namedType;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitNamedType) {
            return visitor.visitNamedType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_listType;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitListType) {
            return visitor.visitListType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DirectivesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public directive(): DirectiveContext[];
    public directive(i: number): DirectiveContext | null;
    public directive(i?: number): DirectiveContext[] | DirectiveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DirectiveContext);
        }

        return this.getRuleContext(i, DirectiveContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_directives;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDirectives) {
            return visitor.visitDirectives(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_directive;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDirective) {
            return visitor.visitDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeSystemDocumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSystemDefinition(): TypeSystemDefinitionContext[];
    public typeSystemDefinition(i: number): TypeSystemDefinitionContext | null;
    public typeSystemDefinition(i?: number): TypeSystemDefinitionContext[] | TypeSystemDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeSystemDefinitionContext);
        }

        return this.getRuleContext(i, TypeSystemDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_typeSystemDocument;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitTypeSystemDocument) {
            return visitor.visitTypeSystemDocument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeSystemDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public schemaDefinition(): SchemaDefinitionContext | null {
        return this.getRuleContext(0, SchemaDefinitionContext);
    }
    public typeDefinition(): TypeDefinitionContext | null {
        return this.getRuleContext(0, TypeDefinitionContext);
    }
    public directiveDefinition(): DirectiveDefinitionContext | null {
        return this.getRuleContext(0, DirectiveDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_typeSystemDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitTypeSystemDefinition) {
            return visitor.visitTypeSystemDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeSystemExtensionDocumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSystemExtension(): TypeSystemExtensionContext[];
    public typeSystemExtension(i: number): TypeSystemExtensionContext | null;
    public typeSystemExtension(i?: number): TypeSystemExtensionContext[] | TypeSystemExtensionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeSystemExtensionContext);
        }

        return this.getRuleContext(i, TypeSystemExtensionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_typeSystemExtensionDocument;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitTypeSystemExtensionDocument) {
            return visitor.visitTypeSystemExtensionDocument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeSystemExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public schemaExtension(): SchemaExtensionContext | null {
        return this.getRuleContext(0, SchemaExtensionContext);
    }
    public typeExtension(): TypeExtensionContext | null {
        return this.getRuleContext(0, TypeExtensionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_typeSystemExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitTypeSystemExtension) {
            return visitor.visitTypeSystemExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SchemaDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public rootOperationTypeDefinition(): RootOperationTypeDefinitionContext[];
    public rootOperationTypeDefinition(i: number): RootOperationTypeDefinitionContext | null;
    public rootOperationTypeDefinition(i?: number): RootOperationTypeDefinitionContext[] | RootOperationTypeDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RootOperationTypeDefinitionContext);
        }

        return this.getRuleContext(i, RootOperationTypeDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_schemaDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitSchemaDefinition) {
            return visitor.visitSchemaDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RootOperationTypeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public operationType(): OperationTypeContext {
        return this.getRuleContext(0, OperationTypeContext)!;
    }
    public namedType(): NamedTypeContext {
        return this.getRuleContext(0, NamedTypeContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_rootOperationTypeDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitRootOperationTypeDefinition) {
            return visitor.visitRootOperationTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SchemaExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public rootOperationTypeDefinition(): RootOperationTypeDefinitionContext[];
    public rootOperationTypeDefinition(i: number): RootOperationTypeDefinitionContext | null;
    public rootOperationTypeDefinition(i?: number): RootOperationTypeDefinitionContext[] | RootOperationTypeDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RootOperationTypeDefinitionContext);
        }

        return this.getRuleContext(i, RootOperationTypeDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_schemaExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitSchemaExtension) {
            return visitor.visitSchemaExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DescriptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stringValue(): StringValueContext {
        return this.getRuleContext(0, StringValueContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_description;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDescription) {
            return visitor.visitDescription(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public scalarTypeDefinition(): ScalarTypeDefinitionContext | null {
        return this.getRuleContext(0, ScalarTypeDefinitionContext);
    }
    public objectTypeDefinition(): ObjectTypeDefinitionContext | null {
        return this.getRuleContext(0, ObjectTypeDefinitionContext);
    }
    public interfaceTypeDefinition(): InterfaceTypeDefinitionContext | null {
        return this.getRuleContext(0, InterfaceTypeDefinitionContext);
    }
    public unionTypeDefinition(): UnionTypeDefinitionContext | null {
        return this.getRuleContext(0, UnionTypeDefinitionContext);
    }
    public enumTypeDefinition(): EnumTypeDefinitionContext | null {
        return this.getRuleContext(0, EnumTypeDefinitionContext);
    }
    public inputObjectTypeDefinition(): InputObjectTypeDefinitionContext | null {
        return this.getRuleContext(0, InputObjectTypeDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_typeDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitTypeDefinition) {
            return visitor.visitTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public scalarTypeExtension(): ScalarTypeExtensionContext | null {
        return this.getRuleContext(0, ScalarTypeExtensionContext);
    }
    public objectTypeExtension(): ObjectTypeExtensionContext | null {
        return this.getRuleContext(0, ObjectTypeExtensionContext);
    }
    public interfaceTypeExtension(): InterfaceTypeExtensionContext | null {
        return this.getRuleContext(0, InterfaceTypeExtensionContext);
    }
    public unionTypeExtension(): UnionTypeExtensionContext | null {
        return this.getRuleContext(0, UnionTypeExtensionContext);
    }
    public enumTypeExtension(): EnumTypeExtensionContext | null {
        return this.getRuleContext(0, EnumTypeExtensionContext);
    }
    public inputObjectTypeExtension(): InputObjectTypeExtensionContext | null {
        return this.getRuleContext(0, InputObjectTypeExtensionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_typeExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitTypeExtension) {
            return visitor.visitTypeExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScalarTypeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_scalarTypeDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitScalarTypeDefinition) {
            return visitor.visitScalarTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ScalarTypeExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public directives(): DirectivesContext {
        return this.getRuleContext(0, DirectivesContext)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_scalarTypeExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitScalarTypeExtension) {
            return visitor.visitScalarTypeExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectTypeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public implementsInterfaces(): ImplementsInterfacesContext | null {
        return this.getRuleContext(0, ImplementsInterfacesContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public fieldsDefinition(): FieldsDefinitionContext | null {
        return this.getRuleContext(0, FieldsDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_objectTypeDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitObjectTypeDefinition) {
            return visitor.visitObjectTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ImplementsInterfacesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namedType(): NamedTypeContext {
        return this.getRuleContext(0, NamedTypeContext)!;
    }
    public implementsInterfaces(): ImplementsInterfacesContext | null {
        return this.getRuleContext(0, ImplementsInterfacesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_implementsInterfaces;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitImplementsInterfaces) {
            return visitor.visitImplementsInterfaces(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldsDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldDefinition(): FieldDefinitionContext[];
    public fieldDefinition(i: number): FieldDefinitionContext | null;
    public fieldDefinition(i?: number): FieldDefinitionContext[] | FieldDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FieldDefinitionContext);
        }

        return this.getRuleContext(i, FieldDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_fieldsDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitFieldsDefinition) {
            return visitor.visitFieldsDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public argumentsDefinition(): ArgumentsDefinitionContext | null {
        return this.getRuleContext(0, ArgumentsDefinitionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_fieldDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitFieldDefinition) {
            return visitor.visitFieldDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentsDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public inputValueDefinition(): InputValueDefinitionContext[];
    public inputValueDefinition(i: number): InputValueDefinitionContext | null;
    public inputValueDefinition(i?: number): InputValueDefinitionContext[] | InputValueDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InputValueDefinitionContext);
        }

        return this.getRuleContext(i, InputValueDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_argumentsDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitArgumentsDefinition) {
            return visitor.visitArgumentsDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InputValueDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public type_(): Type_Context {
        return this.getRuleContext(0, Type_Context)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public defaultValue(): DefaultValueContext | null {
        return this.getRuleContext(0, DefaultValueContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_inputValueDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitInputValueDefinition) {
            return visitor.visitInputValueDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectTypeExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public fieldsDefinition(): FieldsDefinitionContext | null {
        return this.getRuleContext(0, FieldsDefinitionContext);
    }
    public implementsInterfaces(): ImplementsInterfacesContext | null {
        return this.getRuleContext(0, ImplementsInterfacesContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_objectTypeExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitObjectTypeExtension) {
            return visitor.visitObjectTypeExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceTypeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public implementsInterfaces(): ImplementsInterfacesContext | null {
        return this.getRuleContext(0, ImplementsInterfacesContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public fieldsDefinition(): FieldsDefinitionContext | null {
        return this.getRuleContext(0, FieldsDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_interfaceTypeDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitInterfaceTypeDefinition) {
            return visitor.visitInterfaceTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InterfaceTypeExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public fieldsDefinition(): FieldsDefinitionContext | null {
        return this.getRuleContext(0, FieldsDefinitionContext);
    }
    public implementsInterfaces(): ImplementsInterfacesContext | null {
        return this.getRuleContext(0, ImplementsInterfacesContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_interfaceTypeExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitInterfaceTypeExtension) {
            return visitor.visitInterfaceTypeExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnionTypeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public unionMemberTypes(): UnionMemberTypesContext | null {
        return this.getRuleContext(0, UnionMemberTypesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_unionTypeDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitUnionTypeDefinition) {
            return visitor.visitUnionTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnionMemberTypesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public namedType(): NamedTypeContext[];
    public namedType(i: number): NamedTypeContext | null;
    public namedType(i?: number): NamedTypeContext[] | NamedTypeContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedTypeContext);
        }

        return this.getRuleContext(i, NamedTypeContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_unionMemberTypes;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitUnionMemberTypes) {
            return visitor.visitUnionMemberTypes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnionTypeExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public unionMemberTypes(): UnionMemberTypesContext | null {
        return this.getRuleContext(0, UnionMemberTypesContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_unionTypeExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitUnionTypeExtension) {
            return visitor.visitUnionTypeExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumTypeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public enumValuesDefinition(): EnumValuesDefinitionContext | null {
        return this.getRuleContext(0, EnumValuesDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_enumTypeDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitEnumTypeDefinition) {
            return visitor.visitEnumTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumValuesDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumValueDefinition(): EnumValueDefinitionContext[];
    public enumValueDefinition(i: number): EnumValueDefinitionContext | null;
    public enumValueDefinition(i?: number): EnumValueDefinitionContext[] | EnumValueDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumValueDefinitionContext);
        }

        return this.getRuleContext(i, EnumValueDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_enumValuesDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitEnumValuesDefinition) {
            return visitor.visitEnumValuesDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumValueDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumValue(): EnumValueContext {
        return this.getRuleContext(0, EnumValueContext)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_enumValueDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitEnumValueDefinition) {
            return visitor.visitEnumValueDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumTypeExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public enumValuesDefinition(): EnumValuesDefinitionContext | null {
        return this.getRuleContext(0, EnumValuesDefinitionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_enumTypeExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitEnumTypeExtension) {
            return visitor.visitEnumTypeExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InputObjectTypeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public inputFieldsDefinition(): InputFieldsDefinitionContext | null {
        return this.getRuleContext(0, InputFieldsDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_inputObjectTypeDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitInputObjectTypeDefinition) {
            return visitor.visitInputObjectTypeDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InputFieldsDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public inputValueDefinition(): InputValueDefinitionContext[];
    public inputValueDefinition(i: number): InputValueDefinitionContext | null;
    public inputValueDefinition(i?: number): InputValueDefinitionContext[] | InputValueDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InputValueDefinitionContext);
        }

        return this.getRuleContext(i, InputValueDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_inputFieldsDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitInputFieldsDefinition) {
            return visitor.visitInputFieldsDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InputObjectTypeExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public inputFieldsDefinition(): InputFieldsDefinitionContext | null {
        return this.getRuleContext(0, InputFieldsDefinitionContext);
    }
    public directives(): DirectivesContext | null {
        return this.getRuleContext(0, DirectivesContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_inputObjectTypeExtension;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitInputObjectTypeExtension) {
            return visitor.visitInputObjectTypeExtension(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DirectiveDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public name(): NameContext {
        return this.getRuleContext(0, NameContext)!;
    }
    public directiveLocations(): DirectiveLocationsContext {
        return this.getRuleContext(0, DirectiveLocationsContext)!;
    }
    public description(): DescriptionContext | null {
        return this.getRuleContext(0, DescriptionContext);
    }
    public argumentsDefinition(): ArgumentsDefinitionContext | null {
        return this.getRuleContext(0, ArgumentsDefinitionContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_directiveDefinition;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDirectiveDefinition) {
            return visitor.visitDirectiveDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DirectiveLocationsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public directiveLocation(): DirectiveLocationContext[];
    public directiveLocation(i: number): DirectiveLocationContext | null;
    public directiveLocation(i?: number): DirectiveLocationContext[] | DirectiveLocationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DirectiveLocationContext);
        }

        return this.getRuleContext(i, DirectiveLocationContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_directiveLocations;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDirectiveLocations) {
            return visitor.visitDirectiveLocations(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DirectiveLocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public executableDirectiveLocation(): ExecutableDirectiveLocationContext | null {
        return this.getRuleContext(0, ExecutableDirectiveLocationContext);
    }
    public typeSystemDirectiveLocation(): TypeSystemDirectiveLocationContext | null {
        return this.getRuleContext(0, TypeSystemDirectiveLocationContext);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_directiveLocation;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitDirectiveLocation) {
            return visitor.visitDirectiveLocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExecutableDirectiveLocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_executableDirectiveLocation;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitExecutableDirectiveLocation) {
            return visitor.visitExecutableDirectiveLocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeSystemDirectiveLocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_typeSystemDirectiveLocation;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitTypeSystemDirectiveLocation) {
            return visitor.visitTypeSystemDirectiveLocation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NAME(): antlr.TerminalNode {
        return this.getToken(GraphQLParser.NAME, 0)!;
    }
    public override get ruleIndex(): number {
        return GraphQLParser.RULE_name;
    }
    public override accept<Result>(visitor: GraphQLVisitor<Result>): Result | null {
        if (visitor.visitName) {
            return visitor.visitName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
