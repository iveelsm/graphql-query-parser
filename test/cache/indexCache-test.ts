import { IndexCache } from "../../lib/cache";
import { expect, assert } from 'chai';

describe('Index Cache', function() {
  let cache: IndexCache<string, string>;

  beforeEach(function() {
    cache = new IndexCache();
  });

  describe('get', function() {
    it('retrieves data that is present', function() {
        cache.put("test", "foo");
        const results = cache.get("test");
        expect(results).to.eql("foo");
    });

    it('returns undefined on data that is not present', function() {
      cache.put("test", "foo");
      const results = cache.get("foo");
      expect(results).to.eql(undefined);
    });
  });

  describe('put', function() {
    it('puts data that is valid', function() {
      cache.put("test", "foo");
      assert.doesNotThrow(() => cache.put("test", "foo"), "Handles valid data");
    });
  });

  describe('remove', function() {
    it('removes data if present', function() {
      cache.put("test", "foo");
      const results = cache.remove("test");
      expect(results).to.eql(true);
    });

    it('does nothing if data not present', function() {
      cache.put("test", "foo");
      const results = cache.remove("foo");
      expect(results).to.eql(false);
    });
  });
});