import assert from "node:assert";
import { describe, it, beforeEach } from "node:test";

import { IndexCache } from "../../../lib/cache";

describe("Index Cache", function () {
    let cache: IndexCache<string, string>;

    beforeEach(function () {
        cache = new IndexCache();
    });

    describe("get", function () {
        it("retrieves data that is present", function () {
            cache.put("test", "foo");
            const results = cache.get("test");
            assert.strictEqual(results, "foo");
        });

        it("returns undefined on data that is not present", function () {
            cache.put("test", "foo");
            const results = cache.get("foo");
            assert.strictEqual(results, undefined);
        });
    });

    describe("put", function () {
        it("puts data that is valid", function () {
            cache.put("test", "foo");
            assert.doesNotThrow(() => cache.put("test", "foo"));
        });
    });

    describe("remove", function () {
        it("removes data if present", function () {
            cache.put("test", "foo");
            const results = cache.remove("test");
            assert.strictEqual(results, true);
        });

        it("does nothing if data not present", function () {
            cache.put("test", "foo");
            const results = cache.remove("foo");
            assert.strictEqual(results, false);
        });
    });
});
