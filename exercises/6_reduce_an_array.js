const assert = require('assert')

const people = [
  {name: 'Fred', age: 53},
  {name: 'Barney', age: 49},
  {name: 'Barb', age: 41},
  {name: 'Star', age: 43},
  {name: 'Linda', age: 79},
  {name: 'Paul', age: 78},
  {name: 'Mary', age: 27},
]

let namesList = people.reduce(function(accumulator, currentValue) {
  // Code this reducer function so that the result is an array of
  // all the names of those people who have an odd numbered age

  // PLACE YOUR CODE BELOW

  // check if the age is odd (check if the remainder of dividing the age by 2 is 1)
  // if so, push the name to the accumulator (array)
  if (currentValue.age % 2 === 1) {
    accumulator.push(currentValue.name);
  }
  return accumulator;
  // PLACE YOUR CODE ABOVE
}, [])

console.log('The total is', namesList)

/*
When run with "node 6_reduce_an_array.js" you should see the
following on the console:

The total is [ 'Fred', 'Barney', 'Barb', 'Star', 'Linda', 'Mary' ]
*/
