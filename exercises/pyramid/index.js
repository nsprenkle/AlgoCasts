// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* My recursion solution */
function pyramid (n, row = 0, level = '') {
  // Break condition
  if (row === n) { return }

  // Next level
  if (level.length === n * 2 - 1) {
    console.log(level)
    pyramid(n, row + 1, '')
    return
  }

  // Add to current level
  const midpoint = n - 1
  const column = level.length

  level += midpoint - row <= column && midpoint + row >= column ? '#' : ' '
  pyramid(n, row, level)
}

/* Their iterative approach */
// function pyramid (n) {
//   const midpoint = n - 1

//   for (let row = 0; row < n; row++) {
//     let level = ''

//     for (let column = 0; column < (n * 2) - 1; column++) {
//       level += midpoint - row <= column && midpoint + row >= column ? '#' : ' '
//     }

//     console.log(level)
//   }
// }

/* My iterative approach */
// function pyramid (n) {
//   let midpoint = n - 1

//   for (let row = 0; row < n; row++) {
//     let level = ''

//     for (let column = 0; column < (n * 2) - 1; column++) {
//       if (Math.abs(column - midpoint) <= row) {
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }

//     console.log(level)
//   }
// }

/* Using String.repeat(n) */
// function pyramid (n) {
//   for (let row = 0; row < n; row++) {
//     let outside = ' '.repeat((n - 1) - row)
//     let inside = '#'.repeat((row * 2) + 1)

//     console.log(outside + inside + outside)
//   }
// }

module.exports = pyramid
