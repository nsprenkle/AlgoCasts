// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA, stringB) {
  const sortedA = sanitizeString(stringA).split('').sort().join('')
  const sortedB = sanitizeString(stringB).split('').sort().join('')

  return sortedA === sortedB
}

// function anagrams (stringA, stringB) {
//   // sanitize strings
//   let sanitizedA = sanitizeString(stringA)
//   let sanitizedB = sanitizeString(stringB)

//   // bulid char maps
//   let charMapA = buildCharMap(sanitizedA)
//   let charMapB = buildCharMap(sanitizedB)

//   // check equality
//   return objectEquals(charMapA, charMapB)
// }

// remove non-word characters, make case equal
function sanitizeString (str) {
  return str.replace(/[^\w]/g, '').toLowerCase()
}

// // build character map from string
// function buildCharMap (str) {
//   let charMap = {}

//   for (let char of str) {
//     charMap[char] = charMap[char]++ || 1
//   }

//   return charMap
// }

// // determine if the keys between 2 objets are the same
// function objectEquals (objA, objB) {
//   // if the number of keys is different, fail fast
//   if (Object.keys(objA).length !== Object.keys(objB).length) {
//     return false
//   }

//   // check each key in A against B
//   for (let key in objA) {
//     if (objA[key] !== objB[key]) {
//       return false
//     }
//   }

//   return true
// }

module.exports = anagrams
