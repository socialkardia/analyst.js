import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import subject from "../index.js"

describe("bantermHistoryPointCalculation()", () => {
  context("when given five messages with four 2-point banterms", () => {
    const value = 2
    const list = [
      "bad1", "bad2", "bad3"
    ]
    const history = [
      {body: "bad1"},
      {body: "good"},
      {body: "bad2"},
      {body: "bad3"},
      {body: "bad1"}
    ]
    it("returns the sum of the banterms", () => {
      expect(subject(value, list)(history)).to.equal(8)
    })
  })
})
