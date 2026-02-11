import assert from "node:assert";
import { describe, it } from "node:test";
import { dirname } from "path";
import { fileURLToPath } from "url";

import GraphQLQueryReader from "../../../lib/reader";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe("GraphQL Query Reader", function () {
	const reader = new GraphQLQueryReader();
	const basePath = __dirname + "/../resources/";
	describe("read", function () {
		it("handles a file", function () {
			const results = reader.read(
				basePath + "parser/fragment/multipleFragments.graphql",
			);
			assert.strictEqual(results.length, 1);
		});

		it("handles a directory", function () {
			const results = reader.read(basePath + "reader/");
			assert.strictEqual(results.length, 4);
		});
	});

	describe("readMany", function () {
		it("handles many files", function () {
			const paths = [
				basePath + "reader/multipleFragments.graphql",
				basePath + "reader/multipleQueries.graphql",
			];
			const results = reader.readMany(paths);
			assert.strictEqual(results.length, 2);
		});

		it("handles many directories", function () {
			const paths = [basePath + "reader/", basePath + "reader/other/"];
			const results = reader.readMany(paths);
			assert.strictEqual(results.length, 6);
		});
	});
});
