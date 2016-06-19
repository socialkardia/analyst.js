import {pipe} from "ramda"
import {map} from "ramda"
import {prop} from "ramda"
import {split} from "ramda"
import {filter} from "ramda"
import {length} from "ramda"
import {multiply} from "ramda"
import {contains} from "ramda"
import {flip} from "ramda"

// List -> Anything -> Boolean
const within = flip(contains)

// [Number, WordList] -> function
export default function bantermMessagePointCalculation ([value, list]) {
  return pipe(
    map(prop("body")),
    // TextList
    map(split(" ")),
    // List of WordList
    map(filter(within(list)))
    // List of WordList
    map(length),
    // List of Number
    map(multiply(value))
  )
}
