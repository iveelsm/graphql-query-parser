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

	describe("names carrying digits or underscores", function () {
		it("finds a fragment whose name is not only letters", function () {
			const fragment = readResource(
				baseResourceDir + "fragmentWithDelimitedName.graphql",
			);
			const results = parser.parse(fragment);
			assert.strictEqual(results.length, 1);
			assert.strictEqual(results[0].cache(), "Fragment_1");
		});
	});

	describe("inline fragments", function () {
		it("does not mistake an inline fragment for a definition", function () {
			const fragment = readResource(
				baseResourceDir + "fragmentWithInlineFragment.graphql",
			);
			const results = parser.parse(fragment);
			assert.deepStrictEqual(
				results.map((result) => result.cache()),
				["OuterFragment"],
			);
		});

		it("keeps the inline fragment in the template", function () {
			const fragment = readResource(
				baseResourceDir + "fragmentWithInlineFragment.graphql",
			);
			const results = parser.parse(fragment);
			assert.strictEqual(results[0].apply(), fragment.trimEnd());
		});
	});

	describe("documents without fragments", function () {
		it("returns nothing for an empty document", function () {
			assert.deepStrictEqual(parser.parse(""), []);
		});
	});
});
