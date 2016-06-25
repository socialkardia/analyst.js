# analyst.js

The functions by which socialkardia gauges toxicity.

## usage

There are patterns in the function names:

  - Functions beginning with the word `history` require a history of messages.
  - Functions beginning with the word `profile` require a persona profile.
  - Functions ending with the word `score` return a singular numeric value.
  - Functions ending with the word `sparkline` return an array of numeric values.
