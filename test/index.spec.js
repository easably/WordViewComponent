import { expect } from "chai"
import WordViewComponent from "../src/WordViewComponent"

const wordViewComponent = new WordViewComponent();

describe("index test", () => {
    describe("test-ok function", () => {
        it("should say 'ok'", () => {
            const t = wordViewComponent.test();
            expect(t).to.equal("ok")
        })
    })
})