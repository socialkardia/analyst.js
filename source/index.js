// Assumption 1: context = 30 minutes
// Assumption 2: speed = 1/sec/msg
// Assumption 3: history = 1800 messages

// List -> Anything -> Boolean
const within = flip(contains)

// History -> List of Number
const lowBantermMessages = pipe(
  map(prop("body")),
  // TextList
  map(split(" ")),
  // List of WordList
  map(filter(within(LOW_BANTERMS)))
  // List of WordList
  map(length),
  // List of Number
  map(multiply(LOW_VALUE))
)
// History -> List of Number
const highBantermMessages = pipe(
  map(prop("body")),
  // TextList
  map(split(" ")),
  // List of WordList
  map(filter(within(HIGH_BANTERMS)))
  // List of WordList
  map(length)
  // List of Number
  map(multiply(HIGH_VALUE))
)
