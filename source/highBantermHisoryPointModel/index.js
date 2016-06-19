import bantermMessagePointCalculation from "../bantermMessagePointCalculation"

const LIST = JSON.parse(readSync(join("..", "..", "..", "data", "high-banterms.json")))
const VALUE = 10
const model = bantermMessagePointCalculation([VALUE, LIST])

// History -> List of Number
export default function highBantermMessagePointModel (history) {
  return model(history)
}
