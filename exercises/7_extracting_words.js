var words = [
  'cat',
  'zone',
  'supper',
  'find',
  'storm',
]

var wordList = "You need to save your words into wordList"

/*
Process the array so that you take the word formed by the second and
third character in each word ('in' from 'find') and save it.

Once you have those words, turn them into a comma and space delimited
list (ie. the words are separated by ", ").

Take that comma delimited list and store it in the wordList variable.

Place your code that does all of this below this comment block, and
before the next comment block.
*/

// PLACE YOUR CODE BELOW

// iterate through words array
for (let i = 0; i < words.length; i++) {

  // declare temporary variable to hold the specified characters
  let tempWord = words[i][1].concat(words[i][2]);

  // check if it's the last word in the array. if not, add a ', ' to the string
  if (i !== words.length - 1) {
    tempWord += ', '
  }

  // this is specific to this prompt. it would probably be preferable to just reset wordList to an empty string initially, but I wasn't sure if that was allowed.

  // check if the wordList length is greater than the length of the words array * 4
  // if so, as is the case only initially, overwrite the wordList, otherwise, just add the temp word to the end of it
  if (wordList.length > words.length * 4) {
    wordList = tempWord;
  } else {
    wordList += tempWord;
  }
}

// PLACE YOUR CODE ABOVE

/*
When run with "node 7_extracting_words.js" you should see the following on
the console:

Success
at, on, in, up, to
*/

wordList === 'at, on, up, in, to' && console.log('Success')
console.log(wordList)
