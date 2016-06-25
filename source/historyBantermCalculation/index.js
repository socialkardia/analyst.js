import {pipe} from "ramda"
import {map} from "ramda"
import {split} from "ramda"
import {filter} from "ramda"
import {length} from "ramda"
import {multiply} from "ramda"
import {contains} from "ramda"
import {flip} from "ramda"
import {curryN} from "ramda"

const FETCH_ARGUMENT_MAXIMUM = 2

// : Array -> Anything -> Boolean
const within = flip(contains)

// : Anything as 'a' -> Map as [['a', 'b']] -> Anything as 'b'
const fetch = curryN(FETCH_ARGUMENT_MAXIMUM, (key, record) => record.get(key))

// : WordList: Array of String
// : Array as [Integer, WordList] -> Function
export default function bantermHistoryCalculation ([value, list]) {
  return pipe(
    map(fetch("body")),
    // TextList
    map(split(" ")),
    // List of WordList
    map(filter(within(list))),
    // List of WordList
    map(length),
    // List of Number
    map(multiply(value))
  )
}
