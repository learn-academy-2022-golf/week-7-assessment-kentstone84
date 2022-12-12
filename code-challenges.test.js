 // --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// a) Create a test with an expect statement using the variable provided.
// // Create a function that takes in an array of objects and returns an array with a sentence about each person and their "name" capitalized.

describe("capitalName", () => {
  it ("takes in an array of objects and returns an array with a sentence about each person and their name capitalized", () => {
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
  ]
  // expect(capitalName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// // b) Create the function that makes the test pass.

// Create a function named capitalName that takes in an array
const capitalize = (array) => {
// map through the array and return the first letter capitalized and the rest of the name
  let capName = array.map(value => {
// use charAt to return the first letter of the name and use slice to return the rest of the name and add the occupation to the end of the sentence
      return value.name.charAt(0).toUpperCase() + value.name.slice(1) + " is " + value.occupation + "."
// return the new array
  })
  return capName
}

// capitalName ✓ takes in an array of objects and returns an array with a sentence about each person and their name capitalized

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.174 s, estimated 1 s

// --------------------2) 

// Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainder", () => {
  it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      // expect(remainder(hodgepodge1)).toEqual([2, 0, -1, 0])
      // expect(remainder(hodgepodge2)).toEqual([2, 1, -1])
  })
})


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Create a function named remainder that takes in an array
var remainder = (array) => {
// filter through the array and return only the numbers 
  let newArr = array.filter(value => {
// use typeof to return only the numbers
return typeof value === "number"
})
// map through the new array
  return newArr.map(value => {
// return the remainder of the numbers when divided by 3
      return value % 3
// return the new array
  })
}

// remainder ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.17 s, estimated 1 s


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeAndSum", () => {
  it ("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
      // expect(cubeAndSum(cubeAndSum1)).toEqual(99)
      // expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
  })
})

const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125

// create a function named cubeAndSum that takes in an array
const cubeAndSum = (array) => {
// map through the array and return the numbers cubed
  let cubed = array.map(value => {
// return the numbers cubed
      return value ** 3
  })
// reduce through the new array and return the sum of the numbers cubed
  return cubed.reduce((a, b) => a + b)
}

// cubeAndSum ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.181 s, estimated 1 s
// Ran all test suites.


// PASS  ./code-challenges.test.js
// capitalName
//   ✓ takes in an array of objects and returns an array with a sentence about each person and their name capitalized
// remainder
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// cubeAndSum
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.164 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.02s.