import assert from "node:assert";
import { describe, it } from "node:test";

import GraphQLQueryBuilder from "../../../lib/builder";
import { FakeCacheBuilder } from "../fakes";
import { readResource } from "../resourceReader";

describe("GraphQL Query Builder", function () {
    const baseResourceDir = "builder/queryBuilder/";

    const duplicateFragmentsQuery = readResource(
        baseResourceDir + "queryWithDuplicateFragments.graphql",
    );
    const complexFragmentsQuery = readResource(
        baseResourceDir + "queryWithComplexFragments.graphql",
    );
    const fragmentOne = readResource(baseResourceDir + "fragmentOne.graphql");
    const fragmentTwo = readResource(baseResourceDir + "fragmentTwo.graphql");
    const fragmentThree = readResource(
        baseResourceDir + "fragmentThree.graphql",
    );
    const fragmentFour = readResource(baseResourceDir + "fragmentFour.graphql");

    describe("build", function () {
        it("builds a query", function () {
            const cache = new FakeCacheBuilder()
                .withQueryString(
                    "QueryWithSingleFragment",
                    complexFragmentsQuery,
                    [],
                )
                .withFragmentString("FragmentOne", fragmentOne)
                .withFragmentString("FragmentTwo", fragmentTwo)
                .withFragmentString("FragmentThree", fragmentThree)
                .withFragmentString("FragmentFour", fragmentFour)
                .build();
            const results = GraphQLQueryBuilder.build(cache, {});
            assert.strictEqual(results.length, 1);
        });

        it("builds many queries", function () {
            const cache = new FakeCacheBuilder()
                .withQueryString(
                    "QueryWithComplexFragments",
                    complexFragmentsQuery,
                    [],
                )
                .withQueryString(
                    "QueryWithDuplicateFragments",
                    duplicateFragmentsQuery,
                    [],
                )
                .withFragmentString("FragmentOne", fragmentOne)
                .withFragmentString("FragmentTwo", fragmentTwo)
                .withFragmentString("FragmentThree", fragmentThree)
                .withFragmentString("FragmentFour", fragmentFour)
                .build();
            const results = GraphQLQueryBuilder.build(cache, {});
            assert.strictEqual(results.length, 2);
        });
    });
});
