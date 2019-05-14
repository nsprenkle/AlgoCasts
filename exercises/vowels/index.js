// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* RegExp solution */
function vowels (str) {
  let matches = str.match(/[aeiou]/gi)

  return matches ? matches.length : 0
}

/* My iterative approach */
// function vowels (str) {
//   let vowelCount = 0
//   const vowelList = ['a', 'e', 'i', 'o', 'u']

//   for (let letter of str.toLowerCase()) {
//     if (vowelList.includes(letter)) {
//       vowelCount++
//     }
//   }

//   return vowelCount
// }

module.exports = vowels
