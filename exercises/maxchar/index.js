// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar (str) {
  let charMap = {}

  for (let char of str) {
    charMap[char] = charMap[char]++ || 1
  }

  let max = { count: 0, char: '' }

  for (let char in charMap) {
    if (charMap[char] > max.count) {
      max.count = charMap[char]
      max.char = char
    }
  }

  return max.char
}

module.exports = maxChar
