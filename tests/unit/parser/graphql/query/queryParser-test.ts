import assert from "node:assert";
import { describe, it } from "node:test";

import QueryParser from "../../../../../lib/parser/graphql/query/queryParser";
import { readResource } from "../../../resourceReader";

describe("Query Parser", function () {
	const baseResourceDir = "parser/query/";
	const parser = new QueryParser();

	describe("parse", function () {
		it("handles a single query", async function () {
			const singleQuery = readResource(
				baseResourceDir + "singleQuery.graphql",
			);
			const results = parser.parse(singleQuery);
			const result = results[0];
			assert.strictEqual(result.cache(), "SingleQuery");
		});

		it("handles many queries", async function () {
			const multipleQueries = readResource(
				baseResourceDir + "multipleQueries.graphql",
			);
			const results = parser.parse(multipleQueries);
			const cacheKeys = results.map((result) => result.cache());
			assert.deepStrictEqual(cacheKeys.sort(), [
				"QueryOne",
				"QueryThree",
				"QueryTwo",
			]);
		});

		it("handles a single query with variables", async function () {
			const singleQuery = readResource(
				baseResourceDir + "singleQueryWithVariables.graphql",
			);
			const results = parser.parse(singleQuery);
			const result = results[0];
			assert.strictEqual(result.cache(), "SingleQueryWithVariables");
			assert.deepStrictEqual(result.variables, ["$id", "$test"]);
		});

		it("handles many queries with variables", async function () {
			const multipleQueries = readResource(
				baseResourceDir + "multipleQueriesWithVariables.graphql",
			);
			const results = parser.parse(multipleQueries);
			const cacheKeys = results.map((result) => result.cache());
			assert.deepStrictEqual(cacheKeys.sort(), [
				"QueryOne",
				"QueryThree",
				"QueryTwo",
			]);
			const variables = results.map((result) => result.variables);
			assert.strictEqual(variables.length, 3);
		});
	});

	describe("names and variables carrying digits or underscores", function () {
		it("keeps the whole operation name", function () {
			const query = readResource(
				baseResourceDir + "queryWithDelimitedNames.graphql",
			);
			const results = parser.parse(query);
			assert.strictEqual(results[0].cache(), "Query_1");
		});

		it("keeps the whole variable name", function () {
			const query = readResource(
				baseResourceDir + "queryWithDelimitedNames.graphql",
			);
			const results = parser.parse(query);
			assert.deepStrictEqual(results[0].variables, ["$user_id", "$id2"]);
		});
	});

	describe("braces that do not delimit the operation", function () {
		it("reads past braces inside string values", function () {
			const query = readResource(
				baseResourceDir + "queryWithBracesInStrings.graphql",
			);
			const results = parser.parse(query);
			assert.strictEqual(results[0].apply({}), query.trimEnd());
		});

		it("reads past braces inside comments", function () {
			const query = readResource(
				baseResourceDir + "queryWithBracesInComments.graphql",
			);
			const results = parser.parse(query);
			assert.strictEqual(results[0].apply({}), query.trimEnd());
		});

		it("reads past braces inside block strings", function () {
			const query = readResource(
				baseResourceDir + "queryWithBlockString.graphql",
			);
			const results = parser.parse(query);
			assert.strictEqual(results[0].apply({}), query.trimEnd());
		});
	});

	describe("variable declarations", function () {
		it("removes declarations containing nested braces", function () {
			const query = readResource(
				baseResourceDir + "queryWithObjectDefault.graphql",
			);
			const results = parser.parse(query);
			assert.strictEqual(
				results[0].apply({}),
				"query QueryWithObjectDefault {\n" +
					"\tresult(filter: $filter, id: $id) {\n" +
					"\t\tid\n" +
					"\t}\n" +
					"}",
			);
		});

		it("collects declared and referenced variables once each", function () {
			const query = readResource(
				baseResourceDir + "queryWithObjectDefault.graphql",
			);
			const results = parser.parse(query);
			assert.deepStrictEqual(results[0].variables, ["$filter", "$id"]);
		});
	});

	describe("definitions this package does not template", function () {
		it("ignores mutations and subscriptions", function () {
			const query = readResource(
				baseResourceDir + "unsupportedOperations.graphql",
			);
			assert.deepStrictEqual(parser.parse(query), []);
		});

		it("ignores anonymous operations, which have no cache key", function () {
			const query = readResource(
				baseResourceDir + "anonymousQuery.graphql",
			);
			assert.deepStrictEqual(parser.parse(query), []);
		});
	});

	describe("documents without usable queries", function () {
		it("returns nothing for an empty document", function () {
			assert.deepStrictEqual(parser.parse(""), []);
		});

		it("returns nothing for a comment only document", function () {
			const query = readResource(
				baseResourceDir + "commentOnlyDocument.graphql",
			);
			assert.deepStrictEqual(parser.parse(query), []);
		});

		it("keeps the valid queries in a malformed document", function () {
			const query = readResource(
				baseResourceDir + "malformedDocument.graphql",
			);
			const cacheKeys = parser
				.parse(query)
				.map((result) => result.cache());
			assert.ok(cacheKeys.includes("ValidQuery"));
		});
	});
});
