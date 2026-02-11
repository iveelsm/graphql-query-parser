import FragmentParser from '../../../../lib/parser/graphql/fragment/fragmentParser';
import { readResource } from '../../../resourceReader';
import { expect } from 'chai';

describe('Fragment Parser', function() {
  const baseResourceDir = "parser/fragment/";
  const parser = new FragmentParser();
  
  describe('parse', function() {
    it('handles a single fragment', function() {
      const singleFragment = readResource(baseResourceDir + "singleFragment.graphql");
      const results = parser.parse(singleFragment);
      const result = results[0];
      expect(result.cache()).to.eql("SingleFragment");
    });

    it('handles many fragments', function() {
      const multipleFragments = readResource(baseResourceDir + "multipleFragments.graphql");
      const results = parser.parse(multipleFragments);
      const cacheKeys = results.map(result => result.cache());
      expect(cacheKeys).to.have.members(["FragmentOne", "FragmentTwo", "FragmentThree"]);
    });
  });
});