// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk (array, size) {
  let chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}

// function chunk (array, size) {
//   let chunked = []

//   for (let i = 0; i < array.length; i += size) {
//     let begin = i
//     let end = begin + size

//     chunked.push(array.slice(begin, end))
//   }

//   return chunked
// }

// function chunk (array, size) {
//   const chunked = []
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1]
//
//     if (!last || last.length === size) {
//       // add new chunk if chunk doesn't exist or is full
//       chunked.push([element])
//     } else {
//       // otherwise, add element to the current chunked
//       last.push(element)
//     }
//   }
//
//   return chunked
// }

module.exports = chunk
