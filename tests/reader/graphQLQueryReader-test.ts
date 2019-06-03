import GraphQLQueryReader from "../../lib/reader";
import { expect } from 'chai';

describe('GraphQL Query Reader', function() {
    const reader = new GraphQLQueryReader();
    const basePath = __dirname + "/../resources/";
    describe('read', function() {
        it('handles a file', function() {
            const results = reader.read(basePath + "parser/fragment/multipleFragments.graphql");
            expect(results).to.have.length(1);
        });

        it('handles a directory', function() {
            const results = reader.read(basePath + "reader/");
            expect(results).to.have.length(4);
        });
    });

    describe('readMany', function() {
        it('handles many files', function() {
            const paths = [
                basePath + "reader/multipleFragments.graphql",
                basePath + "reader/multipleQueries.graphql"
            ]
            const results = reader.readMany(paths);
            expect(results).to.have.length(2);
        });

        it('handles many directories', function() {
            const paths = [
                basePath + "reader/",
                basePath + "reader/other/"
            ]
            const results = reader.readMany(paths);
            expect(results).to.have.length(6);
        });
    });
});