import assert from "node:assert";
import { describe, it } from "node:test";

import { ReadStreamParser } from "../../../lib/parser";
import { createReadStream } from "../resourceReader";

describe("ReadStream Parser", function () {
	const baseResourceDir = "parser/";
	const parser = new ReadStreamParser();

	describe("parse", function () {
		it("handles a single stream", async function () {
			const stream = createReadStream(
				baseResourceDir + "fragment/singleFragment.graphql",
			);
			const results = await parser.parse([stream]);
			assert.strictEqual(results.length, 1);
		});

		it("handles many streams", async function () {
			const singleFragmentStream = createReadStream(
				baseResourceDir + "fragment/singleFragment.graphql",
			);
			const multipleFragmentStream = createReadStream(
				baseResourceDir + "fragment/multipleFragments.graphql",
			);
			const multipleQueries = createReadStream(
				baseResourceDir + "query/multipleQueries.graphql",
			);
			const results = await parser.parse([
				singleFragmentStream,
				multipleFragmentStream,
				multipleQueries,
			]);
			assert.strictEqual(results.length, 3);
		});

		it("handles queries", async function () {
			const singleQueryWithVariables = createReadStream(
				baseResourceDir + "query/singleQueryWithVariables.graphql",
			);
			const singleQuery = createReadStream(
				baseResourceDir + "query/singleQuery.graphql",
			);
			const multipleQueries = createReadStream(
				baseResourceDir + "query/multipleQueries.graphql",
			);
			const results = await parser.parse([
				singleQueryWithVariables,
				singleQuery,
				multipleQueries,
			]);
			assert.strictEqual(results.length, 3);
		});

		it("handles fragments", async function () {
			const singleFragmentStream = createReadStream(
				baseResourceDir + "fragment/singleFragment.graphql",
			);
			const multipleFragmentStream = createReadStream(
				baseResourceDir + "fragment/multipleFragments.graphql",
			);
			const results = await parser.parse([
				singleFragmentStream,
				multipleFragmentStream,
			]);
			assert.strictEqual(results.length, 2);
		});

		it("handles queries and fragments", async function () {
			const singleFragmentStream = createReadStream(
				baseResourceDir + "fragment/singleFragment.graphql",
			);
			const multipleFragmentStream = createReadStream(
				baseResourceDir + "fragment/multipleFragments.graphql",
			);
			const multipleQueries = createReadStream(
				baseResourceDir + "query/multipleQueries.graphql",
			);
			const results = await parser.parse([
				singleFragmentStream,
				multipleFragmentStream,
				multipleQueries,
			]);
			assert.strictEqual(results.length, 3);
		});
	});
});
