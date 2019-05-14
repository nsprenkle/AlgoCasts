// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/* Their solution - while loop */
function matrix (n) {
  let results = []

  // init array
  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let counter = 1
  let startColumn = 0
  let endColumn = n - 1
  let startRow = 0
  let endRow = n - 1

  while (startColumn <= endColumn && startRow <= endRow) {
    // top
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter++
    }

    startRow++

    // right
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter++
    }

    endColumn--

    // bottom
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter++
    }

    endRow--

    // left
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter++
    }

    startColumn++
  }

  return results
}

// function matrix (n) {
//   let output = []

//   // init array
//   for (let j = 0; j < n; j++) {
//     output[j] = []
//   }

//   function halfCycle (i = 1, rowMin = 0, row = 0, rowMax = n - 1, colMin = 0, col = 0, colMax = n - 1, direction = 1) {
//     debugger

//     // top / bottom
//     for (col; colMin <= col && col <= colMax; col += direction) {
//       if (i > (n * n)) { return }
//       output[row][col] = i++
//     }

//     col -= direction
//     if (direction > 0) { rowMin++; row = rowMin } else { rowMax--; row = rowMax }

//     // right / bottom
//     for (row; rowMin <= row && row <= rowMax; row += direction) {
//       if (i > (n * n)) { return }
//       output[row][col] = i++
//     }

//     row -= direction
//     if (direction > 0) { colMax--; col = colMax } else { colMin++; col = colMin }

//     halfCycle(i, rowMin, row, rowMax, colMin, col, colMax, -direction)
//   }

//   halfCycle()
//   return output
// }

/* Original solution - recursive */
// function matrix (n) {
//   let output = []

//   // init array
//   for (let i = 0; i < n; i++) {
//     output.push([])
//   }

//   function cycle (i = 1, rowMin = 0, rowMax = n - 1, colMin = 0, colMax = n - 1) {
//     if (i > (n * n)) { return }

//     let row = rowMin
//     let col

//     // top
//     for (col = colMin; col <= colMax; col++) {
//       output[row][col] = i++
//     }

//     col = colMax
//     rowMin++

//     // right
//     for (row = rowMin; row <= rowMax; row++) {
//       if (i > (n * n)) { return }
//       output[row][col] = i++
//     }

//     row = rowMax
//     colMax--

//     // bottom
//     for (col = colMax; col >= colMin; col--) {
//       if (i > (n * n)) { return }
//       output[row][col] = i++
//     }

//     col = colMin
//     rowMax--

//     // left
//     for (row = rowMax; row >= rowMin; row--) {
//       if (i > (n * n)) { return }
//       output[row][col] = i++
//     }

//     row = rowMin
//     colMin++

//     cycle(i, rowMin, rowMax, colMin, colMax)
//   }

//   cycle()
//   return output
// }

module.exports = matrix
