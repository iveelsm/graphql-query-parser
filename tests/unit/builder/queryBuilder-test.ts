import { FakeCacheBuilder, FakeQueryTemplate } from '../fakes';
import QueryBuilder from '../../../lib/builder/queryBuilder';
import { readResource } from '../resourceReader';
import { expect } from 'chai';

describe('Query Builder', function() {
    const baseResourceDir = 'builder/queryBuilder/';
    const singleFragment = readResource('builder/fragmentBuilder/singleFragment.graphql')
    const singleFragmentQuery = readResource('builder/fragmentBuilder/queryWithSingleFragment.graphql');
    const duplicateFragmentsQuery = readResource(baseResourceDir + 'queryWithDuplicateFragments.graphql');
    const complexFragmentsQuery = readResource(baseResourceDir + 'queryWithComplexFragments.graphql');
    const fragmentOne = readResource(baseResourceDir + 'fragmentOne.graphql');
    const fragmentTwo = readResource(baseResourceDir + 'fragmentTwo.graphql');
    const fragmentThree = readResource(baseResourceDir + 'fragmentThree.graphql');
    const fragmentFour = readResource(baseResourceDir + 'fragmentFour.graphql');

    describe('build', function() {
        it('adds variables to the template', function() {

        });

        it('adds a fragment to the query', function() {
            const template = new FakeQueryTemplate({ cacheKey: "QueryWithSingleFragment", query: singleFragmentQuery });
            const cache = new FakeCacheBuilder()
                .withFakeQueryTemplate(template)
                .withFragmentString("FragmentOne", fragmentOne)
                .withFragmentString("FragmentTwo", fragmentTwo)
                .withFragmentString("FragmentThree", fragmentThree)
                .withFragmentString("FragmentFour", fragmentFour)
                .withFragmentString("SingleFragment", singleFragment)
                .build();
            const results = QueryBuilder.build(template.create(), cache, {});
            expect(results).to.contain(singleFragment);
        });

        it('adds many fragments', function() {
            const template = new FakeQueryTemplate({ cacheKey: "QueryWithComplexFragments", query: complexFragmentsQuery });
            const cache = new FakeCacheBuilder()
                .withFakeQueryTemplate(template)
                .withFragmentString("FragmentOne", fragmentOne)
                .withFragmentString("FragmentTwo", fragmentTwo)
                .withFragmentString("FragmentThree", fragmentThree)
                .withFragmentString("FragmentFour", fragmentFour)
                .build();
            const results = QueryBuilder.build(template.create(), cache, {});
            expect(results).to.contain(fragmentOne);
            expect(results).to.contain(fragmentTwo);
            expect(results).to.contain(fragmentThree);
            expect(results).to.contain(fragmentFour);
        });

        it('does not return duplicate fragments', function() {
            const template = new FakeQueryTemplate({ cacheKey: "QueryWithDuplicateFragments", query: duplicateFragmentsQuery });
            const cache = new FakeCacheBuilder()
                .withFakeQueryTemplate(template)
                .withFragmentString("FragmentOne", fragmentOne)
                .withFragmentString("FragmentTwo", fragmentTwo)
                .withFragmentString("FragmentThree", fragmentThree)
                .withFragmentString("FragmentFour", fragmentFour)
                .build();
            let results = QueryBuilder.build(template.create(), cache, {});
            expect(results).to.contain(fragmentOne);
            expect(results).to.contain(fragmentTwo);
            results = results.replace(fragmentOne, " ");
            expect(results).to.not.contain(fragmentOne);
        });

        it('adds the query', function() {
            const template = new FakeQueryTemplate({ cacheKey: "QueryWithComplexFragments", query: complexFragmentsQuery });
            const cache = new FakeCacheBuilder()
                .withFakeQueryTemplate(template)
                .withFragmentString("FragmentOne", fragmentOne)
                .withFragmentString("FragmentTwo", fragmentTwo)
                .withFragmentString("FragmentThree", fragmentThree)
                .withFragmentString("FragmentFour", fragmentFour)
                .build();
            const results = QueryBuilder.build(template.create(), cache, {});
            expect(results).to.contain(complexFragmentsQuery);
        });
    });
});