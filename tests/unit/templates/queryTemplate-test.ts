import assert from "node:assert";
import { describe, it, beforeEach } from "node:test";

import { QueryTemplate } from "../../../lib/templates";
import { readResource } from "../resourceReader";

describe("Query Template", function () {
	describe("apply", function () {
		let template: QueryTemplate;

		beforeEach(function () {
			const file = readResource(
				"templates/singleQueryWithVariables.graphql",
			);
			template = new QueryTemplate("SingleQueryWithVariables", file, [
				"$id",
				"$test",
			]);
		});

		it("applies variables if they exist", function () {
			const result = template.apply({ $id: 1, $test: '"name"' });
			const expected = readResource("templates/appliedVariables.graphql");
			assert.strictEqual(result, expected);
		});

		it("ignores variables that do not exist", function () {
			const result = template.apply({ $bar: 1, $foo: "name" });
			const expected = readResource(
				"templates/unappliedVariables.graphql",
			);
			assert.strictEqual(result, expected);
		});
	});
});
