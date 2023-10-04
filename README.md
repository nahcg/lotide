# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

Published on NPM (https://www.npmjs.com/package/@nahcg/lotide)

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @nahcg/lotide`

**Require it:**

Type `node` into terminal to launch REPL
`const _ = require('@nahcg/lotide');`

**Call it:**

`_.tail([1, 2, 3]) // => [2, 3]`
`_.middle([1, 2, 3, 4, 5, 6, 7]) // => [4]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: asserts if two arrays are equal
- `assertEqual`: asserts if two variables are equal
- `assertObjectsEqual`: asserts if two objects are equal
- `countLetters`: returns frequency count of each letter in a string
- `countOnly`: For a list of names, returns frequency count of names that appear in a second list of names that should be counted
- `eqArrays`: comapares if two arrays are equal
- `eqObjects`: compares if two objects are equal
- `findKey`: given a callback, finds key of object whose value is a nested object
- `findKeyByValue`: given a value, find key
- `flatten`: returns single dimension array given a multi-level nested array
- `head`: returns first variable in an array
- `letterPositions`: returns index of each letter in a string
- `map`: applies same callback function to each variable of an array
- `middle`: returns middle variable of an array if odd, returns middle two variables of an array if even
- `tail`: returns given array without the first variable
- `takeUntil`: returns the beginning of an array until a given value is found
- `without`: given two arrays, returns values of first array that are not present in the second array
