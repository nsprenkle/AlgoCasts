// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth (root) {
  let counters = [0]
  let level = 0

  let arr = [root, 'next']

  while (arr.length > 1) {
    const node = arr.shift()

    // row delimeter
    if (node === 'next') {
      arr.push('next')
      counters.push(0)
      level++
    } else {
      arr.push(...node.children)
      counters[level]++
    }
  }

  return counters
}

module.exports = levelWidth
