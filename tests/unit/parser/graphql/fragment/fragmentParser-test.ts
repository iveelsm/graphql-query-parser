import assert from "node:assert";
import { describe, it } from "node:test";

import FragmentParser from "../../../../../lib/parser/graphql/fragment/fragmentParser";
import { readResource } from "../../../resourceReader";

describe("Fragment Parser", function () {
	const baseResourceDir = "parser/fragment/";
	const parser = new FragmentParser();

	describe("parse", function () {
		it("handles a single fragment", function () {
			const singleFragment = readResource(
				baseResourceDir + "singleFragment.graphql",
			);
			const results = parser.parse(singleFragment);
			const result = results[0];
			assert.strictEqual(result.cache(), "SingleFragment");
		});

		it("handles many fragments", function () {
			const multipleFragments = readResource(
				baseResourceDir + "multipleFragments.graphql",
			);
			const results = parser.parse(multipleFragments);
			const cacheKeys = results.map((result) => result.cache());
			assert.deepStrictEqual(cacheKeys.sort(), [
				"FragmentOne",
				"FragmentThree",
				"FragmentTwo",
			]);
		});
	});
});
