import assert from "node:assert";
import { describe, it } from "node:test";

import { buildCache } from "../../../lib/cache";
import type { FragmentTemplate, QueryTemplate } from "../../../lib/templates";
import { FakeFragmentTemplate, FakeQueryTemplate } from "../fakes";
import { readResource } from "../resourceReader";

describe("Cache", function () {
    describe("buildCache", function () {
        const baseResourceDir = "builder/queryBuilder/";
        const singleFragment = readResource(
            "builder/fragmentBuilder/singleFragment.graphql",
        );
        const singleFragmentQuery = readResource(
            "builder/fragmentBuilder/queryWithSingleFragment.graphql",
        );
        const duplicateFragmentsQuery = readResource(
            baseResourceDir + "queryWithDuplicateFragments.graphql",
        );
        const complexFragmentsQuery = readResource(
            baseResourceDir + "queryWithComplexFragments.graphql",
        );
        const fragmentOne = readResource(
            baseResourceDir + "fragmentOne.graphql",
        );
        const fragmentTwo = readResource(
            baseResourceDir + "fragmentTwo.graphql",
        );
        const fragmentThree = readResource(
            baseResourceDir + "fragmentThree.graphql",
        );

        it("adds a fragment", function () {
            const fragments = [
                new FakeFragmentTemplate({
                    cacheKey: "SingleFragment",
                    fragment: singleFragment,
                }).create(),
            ];
            const cache = buildCache(fragments, []);
            assert.notStrictEqual(
                cache.fragmentCache.get("SingleFragment"),
                null,
            );
        });

        it("adds a query", () => {
            const queries = [
                new FakeQueryTemplate({
                    cacheKey: "QueryWithComplexFragments",
                    query: complexFragmentsQuery,
                }).create(),
            ];
            const cache = buildCache([], queries);
            assert.notStrictEqual(
                cache.queryCache.get("QueryWithComplexFragments"),
                null,
            );
        });

        it("adds many fragments", () => {
            const fragments = [
                new FakeFragmentTemplate({
                    cacheKey: "SingleFragment",
                    fragment: singleFragment,
                }).create(),
                new FakeFragmentTemplate({
                    cacheKey: "FragmentOne",
                    fragment: fragmentOne,
                }).create(),
                new FakeFragmentTemplate({
                    cacheKey: "FragmentTwo",
                    fragment: fragmentTwo,
                }).create(),
                new FakeFragmentTemplate({
                    cacheKey: "FragmentThree",
                    fragment: fragmentThree,
                }).create(),
            ];
            const cache = buildCache(fragments, []);
            assert.notStrictEqual(
                cache.fragmentCache.get("SingleFragment"),
                null,
            );
            assert.notStrictEqual(cache.fragmentCache.get("FragmentOne"), null);
            assert.notStrictEqual(cache.fragmentCache.get("FragmentTwo"), null);
            assert.notStrictEqual(
                cache.fragmentCache.get("FragmentThree"),
                null,
            );
        });

        it("adds many queries", function () {
            const queries = [
                new FakeQueryTemplate({
                    cacheKey: "QueryWithComplexFragments",
                    query: complexFragmentsQuery,
                }).create(),
                new FakeQueryTemplate({
                    cacheKey: "QueryWithSingleFragment",
                    query: singleFragmentQuery,
                }).create(),
                new FakeQueryTemplate({
                    cacheKey: "QueryWithDuplicateFragments",
                    query: duplicateFragmentsQuery,
                }).create(),
            ];
            const cache = buildCache([], queries);
            assert.notStrictEqual(
                cache.queryCache.get("QueryWithComplexFragments"),
                null,
            );
            assert.notStrictEqual(
                cache.queryCache.get("QueryWithSingleFragment"),
                null,
            );
            assert.notStrictEqual(
                cache.queryCache.get("QueryWithDuplicateFragments"),
                null,
            );
        });

        it("throws on null value for cache key", function () {
            // Create a mock template that returns null for cache()
            const mockQuery: QueryTemplate = {
                cache: () => null,
                query: complexFragmentsQuery,
                variables: [],
                apply: () => complexFragmentsQuery,
            };

            const mockFragment: FragmentTemplate = {
                cache: () => null,
                fragment: singleFragment,
            };

            assert.throws(
                () => buildCache([mockFragment], [mockQuery]),
                /Cache Key can not be Null/,
            );
        });
    });
});
