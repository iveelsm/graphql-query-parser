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
});
