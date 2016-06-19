import bantermMessagePointCalculation from "../bantermMessagePointCalculation"

const LIST = JSON.parse(readSync(join("..", "..", "..", "data", "low-banterms.json")))
const VALUE = 1
const model = bantermMessagePointCalculation([VALUE, LIST])

// History -> List of Number
export default function lowBantermMessagePointModel (history) {
  return model(history)
}
