import {readFileSync} from "fs"
import {join} from "path"
import bantermHistoryCalculation from "../bantermHistoryCalculation"

export const PATH = [__dirname, "..", "..", "data", "banterms", "high.json"]
export const LIST = JSON.parse(readFileSync(join(...PATH)))
export const VALUE = 10

const model = bantermHistoryCalculation([VALUE, LIST])

// : Message: Map with keys body
// : History: Array of Message
// : History -> Array of Number
export default function highBantermMessageSparkline (history) {
  return model(history)
}
