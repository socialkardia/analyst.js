import {readFileSync} from "fs"
import {join} from "path"
import historyBantermCalculation from "../historyBantermCalculation"

export const PATH = [__dirname, "..", "..", "data", "banterms", "high.json"]
export const LIST = JSON.parse(readFileSync(join(...PATH)))
export const VALUE = 10

const model = historyBantermCalculation([VALUE, LIST])

// : Message: Map with keys body
// : History: Array of Message
// : History -> Array of Number
export default function highBantermMessageSparkline (history) {
  model(history)
}
