let assert = require('assert')

/*
  Given the variable 'statement' below, write a function that reverses
  the letters in each word, but leaves the words in the same order
*/

let statement = 'Penn Mutual sells life insurance'

function reverseLetters(str) {
  // PLACE YOUR CODE BELOW
  // split the string at the spaces into an array of words
  let splitStr = str.split(' ');

  // this is probably not optimal, but it works...
  // iterate through the array of words
  for(let i = 0; i < splitStr.length; i++) {
    // split the words into an array of letters, reverse the order of the array, join the array back into a word
    splitStr[i] = splitStr[i].split('').reverse().join('');
  }

  // join the array of reversed words into a string and return
  return splitStr.join(' ');
  // PLACE YOUR CODE ABOVE
}

let reversedWords = reverseLetters(statement)

assert.equal(reversedWords, 'nneP lautuM slles efil ecnarusni', 'Strings are not equal') || console.log('Success')

console.log(reversedWords)

/*
  Your console output should look like the following
  when run with "node 3_word_reversal.js":

Success
nneP lautuM slles efil ecnarusni

*/
