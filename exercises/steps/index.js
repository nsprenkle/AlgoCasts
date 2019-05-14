// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* My original solution */
function steps (n) {
  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i))
  }
}

/* Their recursive solution */
// function steps (n, row = 0, stair = '') {
//   if (n === row) { return }

//   if (n === stair.length) {
//     console.log(stair)
//     steps(n, row + 1)
//     return
//   }

//   stair += stair.length <= row ? '#' : ' '
//   steps(n, row, stair)
// }

/* My recursive solution */
// function steps (n) {
//   function step (row, n) {
//     if (row > n) { return }

//     console.log('#'.repeat(row) + ' '.repeat(n - row))
//     step(row + 1, n)
//   }

//   step(1, n)
// }

/* Iterative solution */
// function steps (n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }

//     console.log(stair)
//   }
// }

module.exports = steps
