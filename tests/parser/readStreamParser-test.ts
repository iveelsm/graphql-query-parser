import { ReadStreamParser } from '../../lib/parser';
import { createReadStream } from '../resourceReader';
import { expect } from 'chai';

describe('ReadStream Parser', function() {
    const baseResourceDir = "parser/"
    const parser = new ReadStreamParser();

    describe('parse', function() {
        it('handles a single stream', async function() {
            const stream = createReadStream(baseResourceDir + "fragment/singleFragment.graphql");
            const results = await parser.parse([stream]);
            expect(results).to.have.length(1);
        });

        it('handles many streams', async function() {
            const singleFragmentStream = createReadStream(baseResourceDir + "fragment/singleFragment.graphql");
            const multipleFragmentStream = createReadStream(baseResourceDir + "fragment/multipleFragments.graphql");
            const multipleQueries = createReadStream(baseResourceDir + "query/multipleQueries.graphql");
            const results = await parser.parse([singleFragmentStream, multipleFragmentStream, multipleQueries]);
            expect(results).to.have.length(3);
        });

        it('handles queries', async function() {
            const singleQueryWithVariables = createReadStream(baseResourceDir + "query/singleQueryWithVariables.graphql");
            const singleQuery = createReadStream(baseResourceDir + "query/singleQuery.graphql");
            const multipleQueries = createReadStream(baseResourceDir + "query/multipleQueries.graphql");
            const results = await parser.parse([singleQueryWithVariables, singleQuery, multipleQueries]);
            expect(results).to.have.length(3);
        });

        it('handles fragments', async function() {
            const singleFragmentStream = createReadStream(baseResourceDir + "fragment/singleFragment.graphql");
            const multipleFragmentStream = createReadStream(baseResourceDir + "fragment/multipleFragments.graphql");
            const results = await parser.parse([singleFragmentStream, multipleFragmentStream]);
            expect(results).to.have.length(2);
        });

        it('handles queries and fragments', async function() {
            const singleFragmentStream = createReadStream(baseResourceDir + "fragment/singleFragment.graphql");
            const multipleFragmentStream = createReadStream(baseResourceDir + "fragment/multipleFragments.graphql");
            const multipleQueries = createReadStream(baseResourceDir + "query/multipleQueries.graphql");
            const results = await parser.parse([singleFragmentStream, multipleFragmentStream, multipleQueries]);
            expect(results).to.have.length(3);
        });
    });
});