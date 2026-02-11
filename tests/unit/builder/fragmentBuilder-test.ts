import assert from "node:assert";
import { describe, it } from "node:test";

import FragmentBuilder from "../../../lib/builder/fragmentBuilder";
import { FakeCacheBuilder } from "../fakes";
import { readResource } from "../resourceReader";

describe("Fragment Builder", function () {
    const baseResourceDir = "builder/fragmentBuilder/";

    const queryWithImplicitFragment = readResource(
        baseResourceDir + "queryWithImplicitFragment.graphql",
    );
    const queryWithoutFragment = readResource(
        baseResourceDir + "queryWithoutFragment.graphql",
    );
    const queryWithManyFragments = readResource(
        baseResourceDir + "queryWithManyFragments.graphql",
    );
    const queryWithSingleFragment = readResource(
        baseResourceDir + "queryWithSingleFragment.graphql",
    );
    const queryWithNestedFragment = readResource(
        baseResourceDir + "queryWithNestedFragment.graphql",
    );
    const differentFragment = readResource(
        baseResourceDir + "differentFragment.graphql",
    );
    const nestedFragment = readResource(
        baseResourceDir + "nestedFragment.graphql",
    );
    const singleFragment = readResource(
        baseResourceDir + "singleFragment.graphql",
    );
    const uniqueFragment = readResource(
        baseResourceDir + "uniqueFragment.graphql",
    );

    describe("build", function () {
        it("builds a fragment", function () {
            const cache = new FakeCacheBuilder()
                .withFragmentString("SingleFragment", singleFragment)
                .build();
            const result = FragmentBuilder.build(
                queryWithSingleFragment,
                cache,
            );
            assert.strictEqual(result.length, 1);
            assert.strictEqual(result[0].name, "SingleFragment");
        });

        it("builds many fragments", function () {
            const cache = new FakeCacheBuilder()
                .withFragmentString("SingleFragment", singleFragment)
                .withFragmentString("DifferentFragment", differentFragment)
                .withFragmentString("UniqueFragment", uniqueFragment)
                .build();
            const results = FragmentBuilder.build(
                queryWithManyFragments,
                cache,
            );
            assert.strictEqual(results.length, 3);
        });

        it("builds nested fragments", function () {
            const cache = new FakeCacheBuilder()
                .withFragmentString("SingleFragment", singleFragment)
                .withFragmentString("NestedFragment", nestedFragment)
                .build();
            const results = FragmentBuilder.build(
                queryWithNestedFragment,
                cache,
            );
            assert.strictEqual(results.length, 2);
        });

        it("does not add implicit fragments", function () {
            const cache = new FakeCacheBuilder()
                .withFragmentString("SingleFragment", singleFragment)
                .build();
            const results = FragmentBuilder.build(
                queryWithImplicitFragment,
                cache,
            );
            assert.strictEqual(results.length, 0);
        });

        it("returns empty if no fragments present", function () {
            const cache = new FakeCacheBuilder().build();
            const results = FragmentBuilder.build(queryWithoutFragment, cache);
            assert.strictEqual(results.length, 0);
        });
    });
});
