import { FakeFragmentTemplate, FakeQueryTemplate } from '../fakes';
import { buildCache } from '../../lib/cache';
import { readResource } from '../resourceReader';
import { expect, assert } from 'chai';

describe('Cache', function() {
    describe('buildCache', function() {
        const baseResourceDir = 'builder/queryBuilder/';
        const singleFragment = readResource('builder/fragmentBuilder/singleFragment.graphql')
        const singleFragmentQuery = readResource('builder/fragmentBuilder/queryWithSingleFragment.graphql');
        const duplicateFragmentsQuery = readResource(baseResourceDir + 'queryWithDuplicateFragments.graphql');
        const complexFragmentsQuery = readResource(baseResourceDir + 'queryWithComplexFragments.graphql');
        const fragmentOne = readResource(baseResourceDir + 'fragmentOne.graphql');
        const fragmentTwo = readResource(baseResourceDir + 'fragmentTwo.graphql');
        const fragmentThree = readResource(baseResourceDir + 'fragmentThree.graphql');

        it('adds a fragment', function() {
            const fragments = [
                new FakeFragmentTemplate({ cacheKey: "SingleFragment", fragment: singleFragment }).create()
            ]
            const cache = buildCache(fragments, []);
            expect(cache.fragmentCache.get("SingleFragment")).to.exist;
        });

        it('adds a query', function() {
            const queries = [
                new FakeQueryTemplate({ cacheKey: "QueryWithComplexFragments", query: complexFragmentsQuery }).create()
            ]
            const cache = buildCache([], queries);
            expect(cache.queryCache.get("QueryWithComplexFragments")).to.exist;
        });

        it('adds many fragments', function() {
            const fragments = [
                new FakeFragmentTemplate({ cacheKey: "SingleFragment", fragment: singleFragment }).create(),
                new FakeFragmentTemplate({ cacheKey: "FragmentOne", fragment: fragmentOne }).create(),
                new FakeFragmentTemplate({ cacheKey: "FragmentTwo", fragment: fragmentTwo }).create(),
                new FakeFragmentTemplate({ cacheKey: "FragmentThree", fragment: fragmentThree }).create()
            ]
            const cache = buildCache(fragments, []);
            expect(cache.fragmentCache.get("SingleFragment")).to.exist;
            expect(cache.fragmentCache.get("FragmentOne")).to.exist;
            expect(cache.fragmentCache.get("FragmentTwo")).to.exist;
            expect(cache.fragmentCache.get("FragmentThree")).that.exist;
        });

        it('adds many queries', function() {
            const queries = [
                new FakeQueryTemplate({ cacheKey: "QueryWithComplexFragments", query: complexFragmentsQuery }).create(),
                new FakeQueryTemplate({ cacheKey: "QueryWithSingleFragment", query: singleFragmentQuery }).create(),
                new FakeQueryTemplate({ cacheKey: "QueryWithDuplicateFragments", query: duplicateFragmentsQuery }).create()
            ]
            const cache = buildCache([], queries);
            expect(cache.queryCache.get("QueryWithComplexFragments")).to.exist;
            expect(cache.queryCache.get("QueryWithSingleFragment")).to.exist;
            expect(cache.queryCache.get("QueryWithDuplicateFragments")).to.exist;
        });

        it('throws on null value for cache key', function() {
            const queries = [
                new FakeQueryTemplate({ cacheKey: null, query: complexFragmentsQuery }).create(),
            ];
  
            const fragments = [
                new FakeFragmentTemplate({ cacheKey: null, fragment: singleFragment }).create(),
            ];

            assert.throw(() => buildCache(fragments, queries), "Cache Key can not be Null");
        });
    });
});