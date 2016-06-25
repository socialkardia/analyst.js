import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import subject from "./index"
import {VALUE} from "./index"

describe("lowBantermHistorySparkline()", () => {
  context("when given no messages with zero banned terms", () => {
    const history = []
    const sparkline = []

    it("returns an empty sparkline", () => {
      expect(subject(history)).to.deep.equal(sparkline)
    })
  })

  context("when given five messages with four 2-point banterms", () => {
    const zero = 0
    const history = [
      new Map([["body", "I have a bad x"]]),
      new Map([["body", "I don't"]]),
      new Map([["body", "I have a bad y"]]),
      new Map([["body", "I have a bad x"]])
    ]
    const sparkline = [
      VALUE,
      zero,
      VALUE,
      VALUE
    ]

    it("returns a sparkline", () => {
      expect(subject(history)).to.deep.equal(sparkline)
    })
  })
})
ch
