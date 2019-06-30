import QueryParser from '../../../../../lib/parser/graphql/query/queryParser';
import { readResource } from '../../../resourceReader';
import { expect } from 'chai';

describe('Query Parser', function() {
  const baseResourceDir = "parser/query/";
  const parser = new QueryParser();

  describe('parse', function() {
    it('handles a single query', async function() {
      const singleQuery = readResource(baseResourceDir + "singleQuery.graphql");
      const results = parser.parse(singleQuery);
      const result = results[0];
      expect(result.cache()).to.eql("SingleQuery");
    });

    it('handles many queries', async function() {
      const multipleQueries = readResource(baseResourceDir + "multipleQueries.graphql");
      const results = parser.parse(multipleQueries);
      const cacheKeys = results.map(result => result.cache());
      expect(cacheKeys).to.have.members(["QueryOne", "QueryTwo", "QueryThree"]);
    });

    it('handles a single query with variables', async function() {
      const singleQuery = readResource(baseResourceDir + "singleQueryWithVariables.graphql");
      const results = parser.parse(singleQuery);
      const result = results[0];
      expect(result.cache()).to.eql("SingleQueryWithVariables");
      expect(result.variables).to.eql(["$id", "$test"]);
    });

    it('handles many queries with variables', async function() {
      const multipleQueries = readResource(baseResourceDir + "multipleQueriesWithVariables.graphql");
      const results = parser.parse(multipleQueries);
      const cacheKeys = results.map(result => result.cache());
      expect(cacheKeys).to.have.members(["QueryOne", "QueryTwo", "QueryThree"]);
      const variables = results.map(result => result.variables);
      expect(variables).to.have.length(3);
    });
  });
});