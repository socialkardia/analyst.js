import {describe, describe as context, it} from "mocha"
import {expect} from "chai"
import subject from "./index"
import {VALUE} from "./index"

describe("highBantermHistorySparkline()", () => {
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
      new Map([["body", "x"]]),
      new Map([["body", "a"]]),
      new Map([["body", "y"]]),
      new Map([["body", "x"]])
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
