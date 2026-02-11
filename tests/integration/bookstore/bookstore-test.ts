import { expect } from "chai";

import parse from "../../../lib";

const CURRENT_WORKING_DIRECTORY =
    process.cwd() + "/tests/integration/bookstore";

describe("Bookstore Tests", function () {
    it("Identifies Queries", async function () {
        const results = await parse(CURRENT_WORKING_DIRECTORY + "/resources/");
        expect(results.length).to.eql(3);
    });
});
